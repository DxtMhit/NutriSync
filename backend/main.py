from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from config import get_settings
from routes import chat, lab_reports, optimizer


def create_app() -> FastAPI:
    app = FastAPI(title="NutriSync API")

    app.add_middleware(
        CORSMiddleware,
        allow_origins=["*"],
        allow_credentials=True,
        allow_methods=["*"],
        allow_headers=["*"],
    )

    @app.get("/")
    def read_root():
        settings = get_settings()
        return {
            "status": "ok",
            "message": "NutriSync API is running",
            "gemini_active": settings.gemini_configured,
            "supabase_active": settings.supabase_configured,
        }

    app.include_router(chat.router)
    app.include_router(lab_reports.router)
    app.include_router(optimizer.router)

    return app


app = create_app()
