from fastapi import APIRouter, Depends, HTTPException

from auth import get_current_user
from schemas import AuthenticatedUser, OptimizerResponse
from services.gemini import (
    GeminiConfigurationError,
    GeminiServiceError,
    generate_optimizer_report,
)
from services.supabase import SupabaseServiceError, fetch_user_data


router = APIRouter()


@router.post("/api/optimize-supplements", response_model=OptimizerResponse)
async def optimize_supplements(user: AuthenticatedUser = Depends(get_current_user)):
    try:
        biomarkers = await fetch_user_data(user, "biomarkers")
        symptoms = await fetch_user_data(user, "symptom_logs")
    except SupabaseServiceError as exc:
        raise HTTPException(status_code=exc.status_code, detail=str(exc))

    if not biomarkers and not symptoms:
        return {
            "report": "<div class='bookmarks-empty'>No health profile data found. Please log symptoms or upload a lab report first to generate an optimization analysis.</div>"
        }

    try:
        report = generate_optimizer_report(biomarkers, symptoms)
    except GeminiConfigurationError as exc:
        raise HTTPException(status_code=503, detail=str(exc))
    except GeminiServiceError as exc:
        raise HTTPException(status_code=exc.status_code, detail=str(exc))

    return {"report": report}
