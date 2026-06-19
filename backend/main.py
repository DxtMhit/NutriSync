import os
import datetime
from typing import List, Dict, Any
from fastapi import FastAPI, File, UploadFile, Depends, HTTPException, Header
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import httpx
import google.generativeai as genai
from dotenv import load_dotenv

from auth import get_current_user

load_dotenv()

# Configure Gemini API
GEMINI_API_KEY = os.getenv("GEMINI_API_KEY")
if GEMINI_API_KEY:
    genai.configure(api_key=GEMINI_API_KEY)

SUPABASE_URL = os.getenv("SUPABASE_URL")
SUPABASE_ANON_KEY = os.getenv("SUPABASE_ANON_KEY")

app = FastAPI(title="NutriSync API")

# Add CORS Middleware to allow React frontend connection
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Allow all origins for dev simplicity
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class ChatMessage(BaseModel):
    role: str
    content: str

class ChatPayload(BaseModel):
    messages: List[ChatMessage]

# Core Database Query Helpers
async def fetch_user_data(user_id: str, table: str) -> List[Dict[str, Any]]:
    """Helper to query user records directly from Supabase REST API."""
    if not SUPABASE_URL or not SUPABASE_ANON_KEY:
        return []
    url = f"{SUPABASE_URL.rstrip('/')}/rest/v1/{table}?user_id=eq.{user_id}&select=*"
    headers = {
        "apikey": SUPABASE_ANON_KEY,
        "Authorization": f"Bearer {SUPABASE_ANON_KEY}"  # Service/Anon clearance
    }
    async with httpx.AsyncClient() as client:
        try:
            response = await client.get(url, headers=headers)
            if response.status_code == 200:
                return response.json()
        except Exception:
            pass
    return []

async def save_biomarker(user_id: str, data: Dict[str, Any]) -> bool:
    """Helper to post extracted biomarker records to Supabase."""
    if not SUPABASE_URL or not SUPABASE_ANON_KEY:
        return False
    url = f"{SUPABASE_URL.rstrip('/')}/rest/v1/biomarkers"
    headers = {
        "apikey": SUPABASE_ANON_KEY,
        "Authorization": f"Bearer {SUPABASE_ANON_KEY}",
        "Content-Type": "application/json",
        "Prefer": "return=minimal"
    }
    payload = {
        "user_id": user_id,
        "name": data["name"],
        "value": data["value"],
        "unit": data["unit"],
        "ref_range": data.get("ref_range", ""),
        "test_date": data.get("test_date", str(datetime.date.today())),
        "lab_provider": data.get("lab_provider", "Unknown Lab")
    }
    async with httpx.AsyncClient() as client:
        try:
            response = await client.post(url, headers=headers, json=payload)
            return response.status_code in (200, 201)
        except Exception:
            pass
    return False


@app.get("/")
def read_root():
    return {
        "status": "ok", 
        "message": "NutriSync API is running", 
        "gemini_active": bool(GEMINI_API_KEY),
        "supabase_active": bool(SUPABASE_URL)
    }


@app.post("/api/chat")
async def chat_symptom_analyzer(payload: ChatPayload, user: dict = Depends(get_current_user)):
    """
    Conversational Symptom Analyzer. Integrates user symptom history and 
    biomarkers to recommend targeted tests or cofactor pairings.
    """
    if not GEMINI_API_KEY:
        raise HTTPException(status_code=503, detail="Gemini API key is not configured on the server")

    user_id = user["id"]
    
    # 1. Fetch user context from Supabase to personalize the conversation
    biomarkers = await fetch_user_data(user_id, "biomarkers")
    symptoms = await fetch_user_data(user_id, "symptom_logs")
    
    # Format user context
    biomarkers_summary = "\n".join([
        f"- {b['name']}: {b['value']} {b['unit']} (Range: {b['ref_range']}, Date: {b['test_date']})"
        for b in biomarkers
    ]) if biomarkers else "No blood tests uploaded yet."
    
    symptoms_summary = "\n".join([
        f"- {s['name']} (Intensity: {s['intensity']}/5, Logged: {s['logged_at']})"
        for s in symptoms
    ]) if symptoms else "No symptoms logged yet."

    # 2. System Instructions with Codependency Atlas Knowledge
    system_instruction = f"""You are the NutriSync AI Symptom Analyzer, an expert biochemical agent.
Your goal is to guide users to find potential nutrient deficiencies based on their symptoms and codependency science.

Here is the user's specific context:
[LATEST BIOMARKERS]
{biomarkers_summary}

[LOGGED SYMPTOMS]
{symptoms_summary}

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
- **Triage & Rules**: If a user reports symptoms matching a deficiency (e.g. muscle twitches, brain fog, fatigue) but has no lab reports confirming it, explain the correlation and recommend specific tests:
  * Example: "Your symptoms of muscle spasms and fatigue correlate with Vitamin D3/Magnesium co-deficiency. I suggest getting a serum 25(OH)D and Magnesium test."
- **Disclaimer**: Keep responses informative and educational. Always remind the user that this is not medical advice and they should consult their doctor.
"""

    # 3. Call Gemini
    try:
        model = genai.GenerativeModel(
            model_name="gemini-2.5-flash",
            system_instruction=system_instruction
        )
        
        # Translate messaging history to Gemini format
        chat_history = []
        for msg in payload.messages[:-1]:
            role = "user" if msg.role == "user" else "model"
            chat_history.append({"role": role, "parts": [msg.content]})
            
        chat = model.start_chat(history=chat_history)
        response = chat.send_message(payload.messages[-1].content)
        
        return {"content": response.text}
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Gemini API execution error: {str(e)}")


@app.post("/api/parse-lab-report")
async def parse_lab_report(
    file: UploadFile = File(...), 
    user: dict = Depends(get_current_user)
):
    """
    Multimodal parser endpoint. Extracts structured biomarkers from PDFs/images 
    and inserts them directly into the user's Supabase records.
    """
    if not GEMINI_API_KEY:
        raise HTTPException(status_code=503, detail="Gemini API key is not configured on the server")
        
    # Read file contents
    file_bytes = await file.read()
    if not file_bytes:
        raise HTTPException(status_code=400, detail="Uploaded file is empty")
        
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
        model = genai.GenerativeModel("gemini-2.5-flash")
        response = model.generate_content(
            [
                {"mime_type": file.content_type, "data": file_bytes},
                prompt
            ],
            generation_config={"response_mime_type": "application/json"}
        )
        
        # Parse output
        import json
        biomarkers_data = json.loads(response.text)
        
        if not isinstance(biomarkers_data, list):
            raise ValueError("Gemini did not return a list")
            
        # 2. Save extracted biomarkers to Supabase
        user_id = user["id"]
        saved_count = 0
        for biomarker in biomarkers_data:
            # Add default metadata if missing
            biomarker["lab_provider"] = "Uploaded Report"
            success = await save_biomarker(user_id, biomarker)
            if success:
                saved_count += 1
                
        return {
            "success": True, 
            "extracted": len(biomarkers_data), 
            "saved": saved_count, 
            "data": biomarkers_data
        }
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Failed to parse lab report: {str(e)}")


@app.post("/api/optimize-supplements")
async def optimize_supplements(user: dict = Depends(get_current_user)):
    """
    Supplement Optimization Engine. Evaluates biomarkers and symptoms 
    against codependency guidelines to generate a custom HTML report.
    """
    if not GEMINI_API_KEY:
        raise HTTPException(status_code=503, detail="Gemini API key is not configured on the server")
        
    user_id = user["id"]
    
    # Fetch biomarkers & symptoms
    biomarkers = await fetch_user_data(user_id, "biomarkers")
    symptoms = await fetch_user_data(user_id, "symptom_logs")
    
    if not biomarkers and not symptoms:
        return {
            "report": "<div class='bookmarks-empty'>No health profile data found. Please log symptoms or upload a lab report first to generate an optimization analysis.</div>"
        }
        
    biomarkers_summary = "\n".join([
        f"- {b['name']}: {b['value']} {b['unit']} (Range: {b['ref_range']}, Date: {b['test_date']})"
        for b in biomarkers
    ]) if biomarkers else "No biomarkers recorded."
    
    symptoms_summary = "\n".join([
        f"- {s['name']} (Intensity: {s['intensity']}/5)"
        for s in symptoms
    ]) if symptoms else "No symptoms logged."

    prompt = f"""You are the NutriSync Biochemical Optimization Engine.
Evaluate this user's current health metrics and symptoms against codependency rules to write a Supplement Optimization Report.

USER HEALTH PROFILE:
[Biomarkers]
{biomarkers_summary}

[Logged Symptoms]
{symptoms_summary}

BIOCHEMICAL RULES TO ENFORCE:
1. Vitamin D3 requires Magnesium (activation) and Vitamin K2 (direction to bones/away from arteries).
2. Vitamin B12, Folate (B9), and Vitamin B6 work together in methylation. High folate masks B12 deficiency.
3. Iron requires Copper (ceruloplasmin exit) and Vitamin C (2-4x absorption). Zinc competes for iron transporters.
4. High-dose Zinc depletes Copper. Space them apart.
5. Thyroid T4->T3 conversion requires Selenium and Zinc.

INSTRUCTIONS:
Generate a clean, beautiful report in HTML. Return ONLY the HTML body content inside a single container div (no <html> or <body> tags, no markdown blocks).
Use modern typography classes. Utilize Tailwind-compatible CSS styled tags for headers and alerts (e.g. style tags or simple inline classes).
The HTML report must include:
1. **Executive Summary**: Analysis of their metrics.
2. **Cofactor Warnings**: High-impact alerts where they are lacking cofactors (e.g. low Magnesium with Vitamin D3 supplementation).
3. **Personalized Synergy Steps**: Guidance on dosage, timings, and dietary cofactors.
4. **Recommended Diagnostics**: Lab panels to request based on symptom/biomarker conflicts.
"""

    try:
        model = genai.GenerativeModel("gemini-2.5-flash")
        response = model.generate_content(prompt)
        return {"report": response.text}
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Failed to generate optimization report: {str(e)}")
