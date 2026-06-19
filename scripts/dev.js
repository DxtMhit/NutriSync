const fs = require('fs');
const path = require('path');
const { spawn } = require('child_process');

function log(message, prefix = 'System', colorCode = '36') {
  // 36 = Cyan, 32 = Green, 33 = Yellow, 31 = Red, 35 = Magenta
  console.log(`\x1b[${colorCode}m[${prefix}]\x1b[0m ${message}`);
}

const rootDir = path.resolve(__dirname, '..');
const frontendDir = path.resolve(rootDir, 'frontend');
const backendDir = path.resolve(rootDir, 'backend');
const venvDir = path.join(backendDir, 'venv');

const isWin = process.platform === 'win32';
const uvicornPath = isWin
  ? path.join(venvDir, 'Scripts', 'uvicorn.exe')
  : path.join(venvDir, 'bin', 'uvicorn');

if (!fs.existsSync(uvicornPath)) {
  log('Python virtual environment or uvicorn not found!', 'System', '31');
  log('Please run "npm run install:all" first to set up the project.', 'System', '31');
  process.exit(1);
}

log('Starting frontend and backend development servers...', 'System', '36');

// Helper to stream process output and add prefixes
function streamOutput(childProcess, name, colorCode) {
  childProcess.stdout.on('data', (data) => {
    const lines = data.toString().split('\n');
    lines.forEach((line) => {
      if (line.trim()) {
        log(line.trim(), name, colorCode);
      }
    });
  });

  childProcess.stderr.on('data', (data) => {
    const lines = data.toString().split('\n');
    lines.forEach((line) => {
      if (line.trim()) {
        log(line.trim(), name, colorCode);
      }
    });
  });
}

// 1. Spawn Backend (FastAPI via Uvicorn)
log('Launching Backend (FastAPI on http://127.0.0.1:8000)...', 'System', '36');
const backendProcess = spawn(uvicornPath, ['main:app', '--reload', '--host', '127.0.0.1', '--port', '8000'], {
  cwd: backendDir,
  shell: true // Safe for running executables on Windows/macOS
});
streamOutput(backendProcess, 'Backend', '33'); // Yellow for backend

// 2. Spawn Frontend (Vite)
log('Launching Frontend (Vite)...', 'System', '36');
const npmCmd = isWin ? 'npm.cmd' : 'npm';
const frontendProcess = spawn(npmCmd, ['run', 'dev'], {
  cwd: frontendDir,
  shell: true
});
streamOutput(frontendProcess, 'Frontend', '32'); // Green for frontend

// Clean up processes on exit
let isShuttingDown = false;
function shutdown() {
  if (isShuttingDown) return;
  isShuttingDown = true;
  log('Shutting down development servers...', 'System', '31');
  
  if (backendProcess) {
    log('Stopping Backend...', 'System', '31');
    backendProcess.kill();
  }
  if (frontendProcess) {
    log('Stopping Frontend...', 'System', '31');
    frontendProcess.kill();
  }
  
  // Wait briefly and exit
  setTimeout(() => {
    process.exit(0);
  }, 500);
}

process.on('SIGINT', shutdown);
process.on('SIGTERM', shutdown);
process.on('exit', shutdown);

// Handle early process exit
backendProcess.on('exit', (code) => {
  if (!isShuttingDown) {
    log(`Backend exited with code ${code}`, 'System', '31');
    shutdown();
  }
});

frontendProcess.on('exit', (code) => {
  if (!isShuttingDown) {
    log(`Frontend exited with code ${code}`, 'System', '31');
    shutdown();
  }
});
