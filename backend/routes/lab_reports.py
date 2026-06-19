from fastapi import APIRouter, Depends, File, HTTPException, UploadFile
from fastapi.encoders import jsonable_encoder

from auth import get_current_user
from schemas import AuthenticatedUser, ParseLabReportResponse
from services.gemini import GeminiConfigurationError, GeminiServiceError, parse_lab_report
from services.supabase import SupabaseServiceError, save_biomarker


router = APIRouter()


@router.post("/api/parse-lab-report", response_model=ParseLabReportResponse)
async def parse_lab_report_endpoint(
    file: UploadFile = File(...),
    user: AuthenticatedUser = Depends(get_current_user),
):
    file_bytes = await file.read()
    if not file_bytes:
        raise HTTPException(status_code=400, detail="Uploaded file is empty")

    try:
        biomarkers = parse_lab_report(file_bytes, file.content_type or "application/octet-stream")
    except GeminiConfigurationError as exc:
        raise HTTPException(status_code=503, detail=str(exc))
    except GeminiServiceError as exc:
        raise HTTPException(status_code=exc.status_code, detail=str(exc))

    saved_count = 0
    try:
        for biomarker in biomarkers:
            if await save_biomarker(user, biomarker):
                saved_count += 1
    except SupabaseServiceError as exc:
        raise HTTPException(status_code=exc.status_code, detail=str(exc))

    return {
        "success": True,
        "extracted": len(biomarkers),
        "saved": saved_count,
        "data": jsonable_encoder(biomarkers),
    }
