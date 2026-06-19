"""
Vercel Serverless Function entry point.
Mounts the existing FastAPI app so all /api/* routes are handled.
"""
import sys
from pathlib import Path

# Add the backend directory to Python path so existing imports work
backend_dir = str(Path(__file__).resolve().parent.parent / "backend")
if backend_dir not in sys.path:
    sys.path.insert(0, backend_dir)

# Import the FastAPI app — Vercel looks for a variable named `app`
from main import app  # noqa: E402
