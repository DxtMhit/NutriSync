from fastapi import APIRouter, Depends, HTTPException

from auth import get_current_user
from schemas import AuthenticatedUser, ChatPayload, ChatResponse
from services.gemini import (
    GeminiConfigurationError,
    GeminiServiceError,
    generate_chat_response,
)
from services.supabase import SupabaseServiceError, fetch_user_data


router = APIRouter()


@router.post("/api/chat", response_model=ChatResponse)
async def chat_symptom_analyzer(
    payload: ChatPayload,
    user: AuthenticatedUser = Depends(get_current_user),
):
    try:
        biomarkers = await fetch_user_data(user, "biomarkers")
        symptoms = await fetch_user_data(user, "symptom_logs")
    except SupabaseServiceError as exc:
        raise HTTPException(status_code=exc.status_code, detail=str(exc))

    try:
        content = generate_chat_response(payload.messages, biomarkers, symptoms)
    except GeminiConfigurationError as exc:
        raise HTTPException(status_code=503, detail=str(exc))
    except GeminiServiceError as exc:
        raise HTTPException(status_code=exc.status_code, detail=str(exc))

    return {"content": content}
