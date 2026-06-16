# NutriSync Local Development Concurrent Startup Script

Write-Host "=================================================" -ForegroundColor Cyan
Write-Host "         NutriSync Fullstack Startup             " -ForegroundColor Cyan
Write-Host "=================================================" -ForegroundColor Cyan

# 1. Start Python FastAPI Backend in a new window
Write-Host "Launching FastAPI Backend on http://localhost:8000..." -ForegroundColor Green
Start-Process powershell -ArgumentList "-NoExit", "-Command", "
  Write-Host 'Activating Python Virtual Environment & installing dependencies...' -ForegroundColor Yellow;
  cd backend;
  if (Test-Path .\venv\Scripts\activate.ps1) {
    .\venv\Scripts\activate.ps1
  } else {
    python -m venv venv;
    .\venv\Scripts\activate.ps1
  }
  pip install -r requirements.txt;
  Write-Host 'Starting Uvicorn Server...' -ForegroundColor Green;
  uvicorn main:app --reload --port 8000
"

# 2. Start React Frontend in a new window
Write-Host "Launching React/Vite Frontend..." -ForegroundColor Green
Start-Process powershell -ArgumentList "-NoExit", "-Command", "
  Write-Host 'Installing Node dependencies...' -ForegroundColor Yellow;
  cd frontend;
  npm install;
  Write-Host 'Starting Vite Development Server...' -ForegroundColor Green;
  npm run dev
"

Write-Host "=================================================" -ForegroundColor Cyan
Write-Host "Both services are launching in separate consoles." -ForegroundColor Cyan
Write-Host "FastAPI: http://localhost:8000" -ForegroundColor Cyan
Write-Host "React/Vite: http://localhost:5173 (or next port)" -ForegroundColor Cyan
Write-Host "=================================================" -ForegroundColor Cyan
