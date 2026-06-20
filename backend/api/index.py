"""
Vercel Serverless Function entry point for the backend service.
Exposes the FastAPI app for Vercel's Python runtime.
"""
import sys
from pathlib import Path

# Ensure the backend root is on the Python path
backend_root = str(Path(__file__).resolve().parent.parent)
if backend_root not in sys.path:
    sys.path.insert(0, backend_root)

from main import app  # noqa: E402
