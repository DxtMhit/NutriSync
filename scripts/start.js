const fs = require('fs');
const path = require('path');
const { spawn } = require('child_process');

function log(message, prefix = 'System', colorCode = '36') {
  console.log(`\x1b[${colorCode}m[${prefix}]\x1b[0m ${message}`);
}

const rootDir = path.resolve(__dirname, '..');
const backendDir = path.resolve(rootDir, 'backend');
const venvDir = path.join(backendDir, 'venv');

const isWin = process.platform === 'win32';
const uvicornPath = isWin
  ? path.join(venvDir, 'Scripts', 'uvicorn.exe')
  : path.join(venvDir, 'bin', 'uvicorn');

if (!fs.existsSync(uvicornPath)) {
  log('Python virtual environment or uvicorn not found!', 'System', '31');
  log('Please run "npm run install:all" first.', 'System', '31');
  process.exit(1);
}

log('Starting production server (FastAPI)...', 'System', '36');

// Run backend in production mode (no reload, binding to 0.0.0.0 so external devices can access it if needed)
const host = process.env.HOST || '0.0.0.0';
const port = process.env.PORT || '8000';

const backendProcess = spawn(uvicornPath, ['main:app', '--host', host, '--port', port], {
  cwd: backendDir,
  stdio: 'inherit',
  shell: true
});

backendProcess.on('exit', (code) => {
  log(`Server exited with code ${code}`, 'System', code === 0 ? '32' : '31');
  process.exit(code);
});

process.on('SIGINT', () => {
  backendProcess.kill();
  process.exit(0);
});
