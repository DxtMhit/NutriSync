import json
import re
from typing import Any, Dict, List

import google.generativeai as genai
from pydantic import ValidationError

from config import get_settings
from schemas import ChatMessage, ExtractedBiomarker


class GeminiConfigurationError(Exception):
    pass


class GeminiServiceError(Exception):
    def __init__(self, message: str, status_code: int = 500):
        super().__init__(message)
        self.status_code = status_code


def _settings_for_gemini():
    settings = get_settings()
    if not settings.gemini_configured:
        raise GeminiConfigurationError("Gemini API key is not configured on the server")
    genai.configure(api_key=settings.gemini_api_key)
    return settings


def _biomarkers_summary(biomarkers: List[Dict[str, Any]], empty: str) -> str:
    if not biomarkers:
        return empty
    return "\n".join(
        f"- {item.get('name')}: {item.get('value')} {item.get('unit')} "
        f"(Range: {item.get('ref_range', '')}, Date: {item.get('test_date', '')})"
        for item in biomarkers
    )


def _symptoms_summary(
    symptoms: List[Dict[str, Any]],
    empty: str,
    include_logged_at: bool = False,
) -> str:
    if not symptoms:
        return empty

    lines = []
    for item in symptoms:
        line = f"- {item.get('name')} (Intensity: {item.get('intensity')}/5"
        if include_logged_at:
            line += f", Logged: {item.get('logged_at')}"
        line += ")"
        lines.append(line)
    return "\n".join(lines)


def generate_chat_response(
    messages: List[ChatMessage],
    biomarkers: List[Dict[str, Any]],
    symptoms: List[Dict[str, Any]],
) -> str:
    settings = _settings_for_gemini()
    biomarkers_context = _biomarkers_summary(biomarkers, "No blood tests uploaded yet.")
    symptoms_context = _symptoms_summary(symptoms, "No symptoms logged yet.", include_logged_at=True)

    system_instruction = f"""You are the NutriSync AI Symptom Analyzer, an expert biochemical agent.
Your goal is to guide users to find potential nutrient deficiencies based on their symptoms and codependency science.

Here is the user's specific context:
[LATEST BIOMARKERS]
{biomarkers_context}

[LOGGED SYMPTOMS]
{symptoms_context}

Nutritional Biochemistry Atlas Reference:
1. Vitamin D3 requires Magnesium (for activation into calcitriol) and Vitamin K2 (to prevent vascular calcification and guide calcium to bones).
2. Vitamin B12, Folate (B9), and Vitamin B6 govern methylation. High folic acid can mask B12 deficiency. Folate trap occurs without B12.
3. Iron requires Copper (for ceruloplasmin exit) and Vitamin C (to increase gut absorption by 2-4x). Zinc competes for iron transporters.
4. High-dose Zinc impairs Copper absorption. Space them apart.
5. Thyroid conversion of T4 to active T3 requires Selenium and Zinc.
6. Potassium repletion requires adequate Magnesium levels.

INSTRUCTIONS:
- Conversational Tone: Be empathetic, clear, and scientifically precise.
- Personalization: Reference the user's uploaded biomarkers or logged symptoms if they mention related health topics.
- Triage & Rules: If a user reports symptoms matching a deficiency but has no lab reports confirming it, explain the correlation and recommend specific tests.
- Disclaimer: Keep responses informative and educational. Always remind the user that this is not medical advice and they should consult their doctor.
"""

    try:
        model = genai.GenerativeModel(
            model_name=settings.gemini_model,
            system_instruction=system_instruction,
        )
        chat_history = [
            {
                "role": "user" if message.role == "user" else "model",
                "parts": [message.content],
            }
            for message in messages[:-1]
        ]
        chat = model.start_chat(history=chat_history)
        response = chat.send_message(messages[-1].content)
    except Exception as exc:
        raise GeminiServiceError(f"Gemini API execution error: {exc}") from exc

    return response.text


def parse_lab_report(file_bytes: bytes, mime_type: str) -> List[ExtractedBiomarker]:
    settings = _settings_for_gemini()
    prompt = """You are a professional lab report parser. Analyze the attached lab report document and extract all nutrient-related biomarkers.
Standardize the names to standard terms: Vitamin D3, Vitamin B12, Magnesium, Zinc, Ferritin, Iron, Homocysteine, T3, T4, TSH.
Return a RAW JSON array of objects representing the biomarkers. Do not wrap in markdown ```json blocks.
Each object must strictly follow this JSON schema:
{
  "name": "Biomarker Name (string, standard term only)",
  "value": number (float/int value, e.g. 42.1),
  "unit": "measurement unit (string, e.g. ng/mL, pg/mL, mg/dL)",
  "ref_range": "reference range (string, e.g. 30-100)",
  "test_date": "YYYY-MM-DD (extract the date the report was taken; if not found, output today's date)"
}
If the document is invalid or no biomarkers are found, return an empty array [].
"""

    try:
        model = genai.GenerativeModel(settings.gemini_model)
        response = model.generate_content(
            [
                {"mime_type": mime_type or "application/octet-stream", "data": file_bytes},
                prompt,
            ],
            generation_config={"response_mime_type": "application/json"},
        )
    except Exception as exc:
        raise GeminiServiceError(f"Gemini lab parsing error: {exc}") from exc

    try:
        parsed = json.loads(response.text)
    except json.JSONDecodeError as exc:
        raise GeminiServiceError("Gemini returned malformed JSON for lab report", status_code=502) from exc

    if not isinstance(parsed, list):
        raise GeminiServiceError("Gemini did not return a JSON array for lab report", status_code=502)

    biomarkers: List[ExtractedBiomarker] = []
    for item in parsed:
        try:
            item_data = dict(item)
            item_data["lab_provider"] = "Uploaded Report"
            biomarkers.append(ExtractedBiomarker(**item_data))
        except (TypeError, ValidationError, ValueError):
            continue

    if parsed and not biomarkers:
        raise GeminiServiceError("Gemini returned biomarkers, but none were valid", status_code=422)

    return biomarkers


def sanitize_report_html(html: str) -> str:
    sanitized = html or ""
    unsafe_tags = ("script", "iframe", "object", "embed", "meta", "link")
    for tag in unsafe_tags:
        sanitized = re.sub(
            rf"<\s*{tag}[^>]*>.*?<\s*/\s*{tag}\s*>",
            "",
            sanitized,
            flags=re.IGNORECASE | re.DOTALL,
        )
        sanitized = re.sub(
            rf"<\s*/?\s*{tag}[^>]*>",
            "",
            sanitized,
            flags=re.IGNORECASE,
        )

    sanitized = re.sub(
        r"\s+on[a-zA-Z]+\s*=\s*(\"[^\"]*\"|'[^']*'|[^\s>]+)",
        "",
        sanitized,
        flags=re.IGNORECASE,
    )
    sanitized = re.sub(
        r"\s+(href|src)\s*=\s*(['\"])\s*javascript:[^'\"]*\2",
        r' \1="#"',
        sanitized,
        flags=re.IGNORECASE,
    )
    return sanitized.strip()


def generate_optimizer_report(
    biomarkers: List[Dict[str, Any]],
    symptoms: List[Dict[str, Any]],
) -> str:
    settings = _settings_for_gemini()
    biomarkers_context = _biomarkers_summary(biomarkers, "No biomarkers recorded.")
    symptoms_context = _symptoms_summary(symptoms, "No symptoms logged.")

    prompt = f"""You are the NutriSync Biochemical Optimization Engine.
Evaluate this user's current health metrics and symptoms against codependency rules to write a Supplement Optimization Report.

USER HEALTH PROFILE:
[Biomarkers]
{biomarkers_context}

[Logged Symptoms]
{symptoms_context}

BIOCHEMICAL RULES TO ENFORCE:
1. Vitamin D3 requires Magnesium (activation) and Vitamin K2 (direction to bones/away from arteries).
2. Vitamin B12, Folate (B9), and Vitamin B6 work together in methylation. High folate masks B12 deficiency.
3. Iron requires Copper (ceruloplasmin exit) and Vitamin C (2-4x absorption). Zinc competes for iron transporters.
4. High-dose Zinc depletes Copper. Space them apart.
5. Thyroid T4->T3 conversion requires Selenium and Zinc.

INSTRUCTIONS:
Generate a clean report in HTML. Return ONLY the HTML body content inside a single container div.
Do not include <html>, <body>, markdown blocks, script tags, iframe tags, event handler attributes, or javascript: links.
The HTML report must include:
1. Executive Summary: Analysis of their metrics.
2. Cofactor Warnings: High-impact alerts where they are lacking cofactors.
3. Personalized Synergy Steps: Guidance on timings, dietary cofactors, and doctor-safe next steps.
4. Recommended Diagnostics: Lab panels to request based on symptom/biomarker conflicts.
Keep responses educational and remind the user to consult a qualified clinician.
"""

    try:
        model = genai.GenerativeModel(settings.gemini_model)
        response = model.generate_content(prompt)
    except Exception as exc:
        raise GeminiServiceError(f"Failed to generate optimization report: {exc}") from exc

    return sanitize_report_html(response.text)
