const fs = require('fs');
const path = require('path');
const { spawnSync } = require('child_process');

// Helper to print styled messages
function log(message, type = 'info') {
  const colors = {
    info: '\x1b[36m%s\x1b[0m',   // Cyan
    success: '\x1b[32m%s\x1b[0m',// Green
    warn: '\x1b[33m%s\x1b[0m',   // Yellow
    error: '\x1b[31m%s\x1b[0m'   // Red
  };
  console.log(colors[type] || '%s', message);
}

const rootDir = path.resolve(__dirname, '..');
const frontendDir = path.resolve(rootDir, 'frontend');
const backendDir = path.resolve(rootDir, 'backend');

log('Starting NutriSync project setup...', 'info');

// 1. Copy .env files if they don't exist
const envFiles = [
  { src: path.join(frontendDir, '.env.example'), dest: path.join(frontendDir, '.env') },
  { src: path.join(backendDir, '.env.example'), dest: path.join(backendDir, '.env') }
];

for (const env of envFiles) {
  if (fs.existsSync(env.src)) {
    if (!fs.existsSync(env.dest)) {
      fs.copyFileSync(env.src, env.dest);
      log(`Created ${path.relative(rootDir, env.dest)} from example.`, 'success');
    } else {
      log(`${path.relative(rootDir, env.dest)} already exists. Skipping copy.`, 'info');
    }
  } else {
    log(`Warning: ${path.relative(rootDir, env.src)} not found.`, 'warn');
  }
}

// 2. Install Frontend dependencies
log('\nInstalling frontend dependencies...', 'info');
const npmCmd = process.platform === 'win32' ? 'npm.cmd' : 'npm';
const frontendInstall = spawnSync(npmCmd, ['install'], {
  cwd: frontendDir,
  stdio: 'inherit'
});

if (frontendInstall.status !== 0) {
  log('Frontend dependency installation failed!', 'error');
  process.exit(1);
}
log('Frontend dependencies installed successfully.', 'success');

// 3. Setup Python Virtual Environment
log('\nSetting up Python virtual environment...', 'info');

// Detect Python executable
let pythonCmd = 'python';
let pythonCheck = spawnSync('python', ['--version']);
if (pythonCheck.status !== 0) {
  pythonCheck = spawnSync('python3', ['--version']);
  if (pythonCheck.status === 0) {
    pythonCmd = 'python3';
  } else {
    log('Error: Python was not found on your system. Please install Python 3.', 'error');
    process.exit(1);
  }
}
log(`Using Python executable: ${pythonCmd}`, 'info');

const venvDir = path.join(backendDir, 'venv');
if (!fs.existsSync(venvDir)) {
  log('Creating virtual environment at backend/venv...', 'info');
  const venvCreate = spawnSync(pythonCmd, ['-m', 'venv', 'venv'], {
    cwd: backendDir,
    stdio: 'inherit'
  });
  if (venvCreate.status !== 0) {
    log('Failed to create virtual environment.', 'error');
    process.exit(1);
  }
  log('Virtual environment created.', 'success');
} else {
  log('Virtual environment already exists at backend/venv.', 'info');
}

// Determine paths for pip inside virtual environment
const isWin = process.platform === 'win32';
const pipPath = isWin
  ? path.join(venvDir, 'Scripts', 'pip.exe')
  : path.join(venvDir, 'bin', 'pip');

if (!fs.existsSync(pipPath)) {
  log(`Error: pip executable not found at ${pipPath}. Virtual environment might be corrupted.`, 'error');
  process.exit(1);
}

// Upgrade pip
log('Upgrading pip...', 'info');
spawnSync(pipPath, ['install', '--upgrade', 'pip'], { stdio: 'inherit' });

// Install backend requirements
log('Installing backend Python requirements...', 'info');
const reqPath = path.join(backendDir, 'requirements.txt');
if (fs.existsSync(reqPath)) {
  const pipInstall = spawnSync(pipPath, ['install', '-r', 'requirements.txt'], {
    cwd: backendDir,
    stdio: 'inherit'
  });
  if (pipInstall.status !== 0) {
    log('Failed to install Python requirements.', 'error');
    process.exit(1);
  }
  log('Backend Python requirements installed successfully.', 'success');
} else {
  log('Warning: backend/requirements.txt not found. Skipping python package installation.', 'warn');
}

log('\nNutriSync project setup is complete! You can now run "npm run dev" to start both frontend and backend.', 'success');
