from typing import Any, Dict, List

import httpx

from config import get_settings
from schemas import AuthenticatedUser, ExtractedBiomarker


ALLOWED_USER_TABLES = {"biomarkers", "symptom_logs"}


class SupabaseServiceError(Exception):
    def __init__(self, message: str, status_code: int = 502):
        super().__init__(message)
        self.status_code = status_code


def _require_supabase_settings():
    settings = get_settings()
    if not settings.supabase_configured:
        raise SupabaseServiceError(
            "Server configuration error: Supabase variables missing",
            status_code=500,
        )
    return settings


def _headers(user: AuthenticatedUser) -> Dict[str, str]:
    settings = _require_supabase_settings()
    return {
        "apikey": settings.supabase_anon_key,
        "Authorization": f"Bearer {user.access_token}",
    }


async def fetch_user_data(user: AuthenticatedUser, table: str) -> List[Dict[str, Any]]:
    if table not in ALLOWED_USER_TABLES:
        raise SupabaseServiceError("Unsupported Supabase table requested", status_code=500)

    settings = _require_supabase_settings()
    url = f"{settings.supabase_url.rstrip('/')}/rest/v1/{table}"
    params = {"user_id": f"eq.{user.id}", "select": "*"}

    try:
        async with httpx.AsyncClient(timeout=settings.supabase_timeout_seconds) as client:
            response = await client.get(url, headers=_headers(user), params=params)
    except httpx.RequestError as exc:
        raise SupabaseServiceError(f"Network error querying Supabase: {exc}") from exc

    if response.status_code != 200:
        raise SupabaseServiceError(
            f"Supabase query failed for {table}: {response.text}",
            status_code=502,
        )

    try:
        data = response.json()
    except ValueError as exc:
        raise SupabaseServiceError("Supabase returned invalid JSON") from exc

    if not isinstance(data, list):
        raise SupabaseServiceError("Supabase returned an unexpected response shape")

    return data


async def save_biomarker(user: AuthenticatedUser, biomarker: ExtractedBiomarker) -> bool:
    settings = _require_supabase_settings()
    url = f"{settings.supabase_url.rstrip('/')}/rest/v1/biomarkers"
    headers = {
        **_headers(user),
        "Content-Type": "application/json",
        "Prefer": "return=minimal",
    }
    payload = {
        "user_id": user.id,
        "name": biomarker.name,
        "value": biomarker.value,
        "unit": biomarker.unit,
        "ref_range": biomarker.ref_range,
        "test_date": biomarker.test_date.isoformat(),
        "lab_provider": biomarker.lab_provider or "Uploaded Report",
    }

    try:
        async with httpx.AsyncClient(timeout=settings.supabase_timeout_seconds) as client:
            response = await client.post(url, headers=headers, json=payload)
    except httpx.RequestError as exc:
        raise SupabaseServiceError(f"Network error saving biomarker: {exc}") from exc

    if response.status_code not in (200, 201, 204):
        raise SupabaseServiceError(
            f"Supabase insert failed for biomarker {biomarker.name}: {response.text}",
            status_code=502,
        )

    return True
