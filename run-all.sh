#!/bin/bash

# NutriSync Fullstack Concurrent Startup Script for Bash/Unix
echo "================================================="
echo "         NutriSync Fullstack Startup             "
echo "================================================="

# Trap cleanup to close both processes on Ctrl+C
cleanup() {
  echo "Stopping backend (PID: $BACKEND_PID) and frontend (PID: $FRONTEND_PID)..."
  kill $BACKEND_PID $FRONTEND_PID
  exit 0
}
trap cleanup SIGINT SIGTERM EXIT

# 1. Start Python FastAPI Backend
echo "Starting FastAPI Backend..."
cd backend
if [ -d "venv" ]; then
  source venv/bin/activate
else
  python3 -m venv venv
  source venv/bin/activate
fi
pip install -r requirements.txt
uvicorn main:app --reload --port 8000 &
BACKEND_PID=$!
cd ..

# 2. Start React Frontend
echo "Starting React/Vite Frontend..."
cd frontend
npm install
npm run dev &
FRONTEND_PID=$!
cd ..

echo "================================================="
echo "Both services are active."
echo "FastAPI API: http://localhost:8000"
echo "Vite Web Server: http://localhost:5173"
echo "Press [Ctrl + C] to terminate both services."
echo "================================================="

# Wait for background jobs
wait
