
# 🧬 NutriSync

### AI-Powered Symptom Analyzer & Blood Marker Tracker

**Map nutrient deficiencies · Track biomarkers · Optimize supplement stacks**

[![React](https://img.shields.io/badge/React-18.2-61DAFB?logo=react&logoColor=white)](https://react.dev/)
[![FastAPI](https://img.shields.io/badge/FastAPI-0.100+-009688?logo=fastapi&logoColor=white)](https://fastapi.tiangolo.com/)
[![Supabase](https://img.shields.io/badge/Supabase-Auth%20%26%20DB-3ECF8E?logo=supabase&logoColor=white)](https://supabase.com/)
[![Gemini](https://img.shields.io/badge/Google%20Gemini-2.5%20Flash-4285F4?logo=google&logoColor=white)](https://aistudio.google.com/)
[![License](https://img.shields.io/badge/License-ISC-blue.svg)](LICENSE)

---

</div>

## 📋 Table of Contents

- [Overview](#-overview)
- [Key Features](#-key-features)
- [Architecture](#-architecture)
- [Tech Stack](#-tech-stack)
- [Prerequisites](#-prerequisites)
- [Getting Started](#-getting-started)
  - [1. Clone the Repository](#1-clone-the-repository)
  - [2. Supabase Project Setup](#2-supabase-project-setup)
  - [3. Google Gemini API Key](#3-google-gemini-api-key)
  - [4. Environment Variables](#4-environment-variables)
  - [5. Install Dependencies & Run](#5-install-dependencies--run)
- [Available Scripts](#-available-scripts)
- [Project Structure](#-project-structure)
- [API Endpoints](#-api-endpoints)
- [Database Schema](#-database-schema)
- [Troubleshooting](#-troubleshooting)
- [Contributing](#-contributing)
- [License](#-license)

---

## 🔬 Overview

**NutriSync** is a full-stack health intelligence platform that combines AI-driven symptom analysis with biochemical cofactor science. It helps users understand nutrient codependencies (e.g., Vitamin D3 requires Magnesium for activation and K2 for calcium direction), track blood biomarkers over time, and receive personalized supplement optimization reports.

The application uses **Google Gemini 2.5 Flash** for multimodal AI capabilities — including OCR-based lab report parsing and conversational symptom analysis — and **Supabase** for authentication and secure per-user data storage.

---

## ✨ Key Features

| Feature | Description |
|---|---|
| **🤖 AI Symptom Chatbot** | Conversational biochemical agent that maps symptoms to potential nutrient deficiencies using a built-in Nutritional Biochemistry Atlas |
| **📄 Lab Report Parser** | Upload blood test PDFs/images — Gemini extracts biomarkers (Vitamin D3, B12, Ferritin, TSH, etc.) via OCR and saves them automatically |
| **📈 Biomarker Dashboard** | Interactive charts (Recharts) tracking biomarker trends over time with historical comparison |
| **🚦 Symptom Logger** | Log symptoms with intensity scales (1–5) from a curated list (Fatigue, Brain Fog, Muscle Spasms, etc.) |
| **🔬 Supplement Optimizer** | AI-generated HTML report analyzing your biomarkers + symptoms against codependency rules to produce personalized synergy protocols |
| **🔐 Authentication** | Full auth system via Supabase (Email/Password, Google OAuth, GitHub OAuth) with Row Level Security |
| **📚 Knowledge Base** | Comprehensive reference sections covering Vitamins, Minerals, Cofactor Chains, Lab Tests, Dietary Sources, and Health Tips |
| **🔖 Bookmarks** | Save and organize important nutrient information for quick reference |

---

## 🏗 Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                        FRONTEND                             │
│              React 18 + Vite + Recharts                     │
│         Supabase JS Client (Auth + Direct DB)               │
│                   Port: 5173 (dev)                          │
└───────────────────────┬─────────────────────────────────────┘
                        │  REST API calls
                        │  (Bearer JWT auth)
                        ▼
┌─────────────────────────────────────────────────────────────┐
│                        BACKEND                              │
│              FastAPI + Uvicorn (Python)                      │
│         Google Gemini SDK + httpx (Supabase REST)           │
│                   Port: 8000 (dev)                          │
└───────────────────────┬─────────────────────────────────────┘
                        │
              ┌─────────┴──────────┐
              ▼                    ▼
┌──────────────────┐   ┌────────────────────┐
│   Supabase       │   │   Google Gemini    │
│  (PostgreSQL +   │   │   2.5 Flash API    │
│   Auth + RLS)    │   │  (AI / OCR / Chat) │
└──────────────────┘   └────────────────────┘
```

**Data Flow:**
1. The **frontend** communicates with **Supabase** directly for authentication and reading/writing user data (biomarkers, symptoms).
2. The **frontend** sends authenticated API requests to the **FastAPI backend** for AI-powered features (chatbot, lab parsing, optimization).
3. The **backend** validates the user's JWT via Supabase Auth, fetches context from Supabase REST, and calls the **Gemini API** to generate responses.

---

## 🛠 Tech Stack

### Frontend
| Technology | Purpose |
|---|---|
| **React 18** | UI component library |
| **Vite 5** | Dev server & build tool |
| **Recharts** | Interactive biomarker trend charts |
| **Supabase JS SDK** | Client-side auth & database queries |
| **Vanilla CSS** | Custom design system with CSS variables |

### Backend
| Technology | Purpose |
|---|---|
| **FastAPI** | High-performance Python API framework |
| **Uvicorn** | ASGI server |
| **Google Generative AI SDK** | Gemini 2.5 Flash for chat, OCR, and report generation |
| **httpx** | Async HTTP client for Supabase REST API calls |
| **python-dotenv** | Environment variable management |

### Infrastructure
| Technology | Purpose |
|---|---|
| **Supabase** | PostgreSQL database, Row Level Security, Auth (Email, Google, GitHub) |
| **Google Gemini 2.5 Flash** | Multimodal AI (text + image/PDF analysis) |

---

## 📦 Prerequisites

Before running NutriSync locally, ensure you have the following installed:

### Required Software

| Software | Minimum Version | Check Command | Download Link |
|---|---|---|---|
| **Node.js** | v18+ | `node --version` | [nodejs.org](https://nodejs.org/) |
| **npm** | v9+ | `npm --version` | Bundled with Node.js |
| **Python** | v3.9+ | `python --version` or `python3 --version` | [python.org](https://www.python.org/downloads/) |
| **Git** | Any recent | `git --version` | [git-scm.com](https://git-scm.com/) |

### Required Accounts (Free Tier Available)

1. **Supabase Account** — [supabase.com](https://supabase.com/) (for database + auth)
2. **Google AI Studio Account** — [aistudio.google.com](https://aistudio.google.com/) (for Gemini API key)

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/nutrisync.git
cd nutrisync
```

---

### 2. Supabase Project Setup

This is the most involved step. NutriSync uses Supabase for user authentication and data storage.

#### 2a. Create a Supabase Project

1. Go to [supabase.com](https://supabase.com/) and sign in (or create a free account).
2. Click **"New Project"** and fill in:
   - **Project Name**: `NutriSync` (or anything you like)
   - **Database Password**: Choose a strong password (save it somewhere safe)
   - **Region**: Select the region closest to you
3. Click **"Create new project"** and wait for provisioning (~2 minutes).

#### 2b. Get Your API Credentials

1. In your Supabase project dashboard, navigate to **Settings** → **API**.
2. Copy these two values (you'll need them for the `.env` files):
   - **Project URL** — looks like `https://abcdefgh.supabase.co`
   - **`anon` public key** — a long `eyJ...` string under "Project API keys"

#### 2c. Run the Database Schema

1. In the Supabase dashboard, navigate to **SQL Editor**.
2. Click **"New Query"**.
3. Copy and paste the entire contents of [`backend/schema.sql`](backend/schema.sql) into the editor.
4. Click **"Run"** to create the tables, RLS policies, and triggers.

This creates three tables:
- `profiles` — User profile data (auto-created on signup via trigger)
- `biomarkers` — Extracted lab report data
- `symptom_logs` — User-logged symptoms with intensity

#### 2d. (Optional) Enable OAuth Providers

If you want Google or GitHub sign-in:

1. Navigate to **Authentication** → **Providers** in the Supabase dashboard.
2. For **Google**: Enable it and add your Google OAuth Client ID and Secret from the [Google Cloud Console](https://console.cloud.google.com/apis/credentials).
3. For **GitHub**: Enable it and add your GitHub OAuth App credentials from [GitHub Developer Settings](https://github.com/settings/developers).
4. Set the redirect URL in each OAuth provider to your Supabase callback URL (shown in the Supabase dashboard).

> **Note:** Email/Password authentication works out of the box. OAuth providers are optional.

---

### 3. Google Gemini API Key

1. Go to [Google AI Studio](https://aistudio.google.com/).
2. Sign in with your Google account.
3. Click **"Get API Key"** → **"Create API Key"**.
4. Copy the generated API key.

> **Free Tier:** Gemini 2.5 Flash offers a generous free tier suitable for development and personal use.

---

### 4. Environment Variables

NutriSync requires environment variables in **two** locations: `frontend/.env` and `backend/.env`.

#### Quick Setup (Automated)

The setup script copies `.env.example` files automatically. You just need to fill in your actual values:

```bash
# From the project root:
npm run setup
```

Then edit the generated files:

#### `frontend/.env`

```env
# Supabase Settings (must match the backend credentials)
# Get these from your Supabase Project Settings > API
VITE_SUPABASE_URL=https://your-project-id.supabase.co
VITE_SUPABASE_ANON_KEY=your-supabase-anon-key-here

# Backend Service Address (defaults to http://localhost:8000 in dev)
VITE_BACKEND_URL=http://localhost:8000
```

#### `backend/.env`

```env
# Supabase Settings
# Get these from your Supabase Project Settings > API
SUPABASE_URL=https://your-project-id.supabase.co
SUPABASE_ANON_KEY=your-supabase-anon-key-here

# Google Gemini API Settings
# Get yours from https://aistudio.google.com/
GEMINI_API_KEY=your-gemini-api-key-here
```

> **⚠️ Important:**
> - Both `frontend/.env` and `backend/.env` must have the **same** Supabase URL and Anon Key.
> - The `GEMINI_API_KEY` is only required in the backend.
> - Never commit `.env` files to version control — they are already in `.gitignore`.

---

### 5. Install Dependencies & Run

#### Option A: One-Command Setup (Recommended)

```bash
# Install all frontend + backend dependencies in one step
npm run setup

# Start both frontend (Vite) and backend (FastAPI) servers
npm run dev
```

#### Option B: Manual Setup

<details>
<summary><strong>Windows (PowerShell)</strong></summary>

```powershell
# 1. Install frontend dependencies
cd frontend
npm install
cd ..

# 2. Create Python virtual environment
cd backend
python -m venv venv

# 3. Activate the virtual environment
.\venv\Scripts\Activate.ps1

# 4. Install Python dependencies
pip install -r requirements.txt

# 5. Deactivate venv (optional)
deactivate
cd ..

# 6. Run both servers
npm run dev
```

</details>

<details>
<summary><strong>macOS / Linux (Terminal)</strong></summary>

```bash
# 1. Install frontend dependencies
cd frontend
npm install
cd ..

# 2. Create Python virtual environment
cd backend
python3 -m venv venv

# 3. Activate the virtual environment
source venv/bin/activate

# 4. Install Python dependencies
pip install -r requirements.txt

# 5. Deactivate venv (optional)
deactivate
cd ..

# 6. Run both servers
npm run dev
```

</details>

#### After Starting

Once `npm run dev` is running, you should see:

| Service | URL | Description |
|---|---|---|
| **Frontend** | [http://localhost:5173](http://localhost:5173) | React app (Vite dev server) |
| **Backend** | [http://localhost:8000](http://localhost:8000) | FastAPI server |
| **API Docs** | [http://localhost:8000/docs](http://localhost:8000/docs) | Auto-generated Swagger UI |

---

## 📜 Available Scripts

All scripts are run from the **project root** directory:

| Command | Description |
|---|---|
| `npm run setup` | Copies `.env.example` files, installs frontend npm packages, creates Python venv, and installs pip requirements |
| `npm run dev` | Starts both frontend (Vite on port 5173) and backend (Uvicorn on port 8000) dev servers concurrently |
| `npm run build` | Builds the frontend for production (output in `frontend/dist/`) |
| `npm run start` | Starts the backend in production mode (binds to `0.0.0.0:8000`, no hot reload) |

---

## 📁 Project Structure

```
nutrisync/
├── frontend/                     # React frontend application
│   ├── src/
│   │   ├── components/
│   │   │   ├── AuthPortal.jsx        # Sign in / Sign up form (Email, Google, GitHub OAuth)
│   │   │   ├── DashboardSection.jsx  # Lab biomarkers, symptom log, supplement optimizer
│   │   │   ├── SymptomChatbot.jsx    # Floating AI chatbot panel
│   │   │   ├── Navbar.jsx            # Top navigation bar
│   │   │   ├── Hero.jsx              # Landing hero section
│   │   │   ├── OverviewSection.jsx   # Nutrient codependency overview
│   │   │   ├── ClustersSection.jsx   # Nutrient cluster breakdowns
│   │   │   ├── VitaminsSection.jsx   # Vitamin reference cards
│   │   │   ├── MineralsSection.jsx   # Mineral reference cards
│   │   │   ├── ChainsSection.jsx     # Cofactor dependency chains
│   │   │   ├── LabTestsSection.jsx   # Recommended lab panels
│   │   │   ├── SourcesSection.jsx    # Dietary source references
│   │   │   ├── TipsSection.jsx       # Health optimization tips
│   │   │   ├── CitationsModal.jsx    # Scientific references modal
│   │   │   ├── BookmarkButton.jsx    # Bookmark toggle button
│   │   │   └── BookmarksPanel.jsx    # Saved bookmarks panel
│   │   ├── context/
│   │   │   └── BookmarksContext.jsx  # React context for bookmark state
│   │   ├── data/
│   │   │   ├── appData.js           # Core app metadata
│   │   │   ├── vitaminsData.js      # Vitamin reference database
│   │   │   ├── mineralsData.js      # Mineral reference database
│   │   │   ├── chainsData.js        # Cofactor chain mappings
│   │   │   ├── clustersData.js      # Nutrient cluster definitions
│   │   │   ├── individualTestsData.js # Lab test panel data
│   │   │   ├── sourcesData.js       # Dietary source database
│   │   │   └── tipsData.js          # Health tips content
│   │   ├── App.jsx                  # Root component with routing & auth state
│   │   ├── main.jsx                 # React entry point
│   │   ├── index.css                # Global design system & styles
│   │   └── supabaseClient.js        # Supabase client initialization
│   ├── .env.example                 # Frontend env template
│   ├── index.html                   # HTML entry point
│   ├── package.json                 # Frontend dependencies
│   └── vite.config.js               # Vite configuration
│
├── backend/                      # FastAPI backend application
│   ├── main.py                      # API endpoints (chat, lab parser, optimizer)
│   ├── auth.py                      # JWT authentication via Supabase Auth API
│   ├── schema.sql                   # Database schema (tables, RLS policies, triggers)
│   ├── requirements.txt             # Python dependencies
│   ├── .env.example                 # Backend env template
│   └── tests/
│       └── test_main.py             # Backend unit tests
│
├── scripts/                      # Automation scripts
│   ├── setup.js                     # One-command project setup (env + npm + pip)
│   ├── dev.js                       # Concurrent frontend + backend dev server launcher
│   └── start.js                     # Production backend launcher
│
├── package.json                  # Root package with orchestration scripts
├── .gitignore                    # Git ignore rules
└── README.md                     # This file
```

---

## 🔌 API Endpoints

The FastAPI backend exposes the following REST endpoints:

### Health Check

| Method | Endpoint | Auth | Description |
|---|---|---|---|
| `GET` | `/` | ❌ | Returns server status, Gemini and Supabase connection state |

### AI-Powered Endpoints

| Method | Endpoint | Auth | Description |
|---|---|---|---|
| `POST` | `/api/chat` | ✅ Bearer JWT | Conversational symptom analyzer. Sends chat history to Gemini with user's biomarker/symptom context |
| `POST` | `/api/parse-lab-report` | ✅ Bearer JWT | Uploads a lab report (PDF/image). Gemini extracts biomarkers via OCR and saves them to Supabase |
| `POST` | `/api/optimize-supplements` | ✅ Bearer JWT | Generates a personalized supplement optimization HTML report based on user's biomarkers and symptoms |

### Request Examples

<details>
<summary><strong>POST /api/chat</strong></summary>

```bash
curl -X POST http://localhost:8000/api/chat \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_SUPABASE_JWT" \
  -d '{
    "messages": [
      {"role": "user", "content": "I have been experiencing muscle spasms and brain fog"}
    ]
  }'
```

**Response:**
```json
{
  "content": "Your symptoms of muscle spasms and brain fog correlate with a potential Magnesium and Vitamin D3 co-deficiency..."
}
```

</details>

<details>
<summary><strong>POST /api/parse-lab-report</strong></summary>

```bash
curl -X POST http://localhost:8000/api/parse-lab-report \
  -H "Authorization: Bearer YOUR_SUPABASE_JWT" \
  -F "file=@/path/to/lab-report.pdf"
```

**Response:**
```json
{
  "success": true,
  "extracted": 5,
  "saved": 5,
  "data": [
    {"name": "Vitamin D3", "value": 28.5, "unit": "ng/mL", "ref_range": "30-100", "test_date": "2026-06-15"},
    {"name": "Vitamin B12", "value": 310, "unit": "pg/mL", "ref_range": "200-900", "test_date": "2026-06-15"}
  ]
}
```

</details>

---

## 🗄 Database Schema

NutriSync uses three PostgreSQL tables in Supabase, all protected by Row Level Security (RLS):

### `profiles`
| Column | Type | Description |
|---|---|---|
| `id` | UUID (PK) | References `auth.users` |
| `updated_at` | TIMESTAMPTZ | Auto-set on creation |
| `full_name` | TEXT | User's display name |

### `biomarkers`
| Column | Type | Description |
|---|---|---|
| `id` | BIGINT (PK) | Auto-incrementing |
| `user_id` | UUID (FK) | References `auth.users` |
| `name` | TEXT | Biomarker name (e.g., "Vitamin D3") |
| `value` | NUMERIC | Measured value |
| `unit` | TEXT | Unit of measurement (e.g., "ng/mL") |
| `ref_range` | TEXT | Reference range (e.g., "30-100") |
| `test_date` | DATE | Date the test was taken |
| `lab_provider` | TEXT | Lab or source name |
| `created_at` | TIMESTAMPTZ | Record creation timestamp |

### `symptom_logs`
| Column | Type | Description |
|---|---|---|
| `id` | BIGINT (PK) | Auto-incrementing |
| `user_id` | UUID (FK) | References `auth.users` |
| `name` | TEXT | Symptom name (e.g., "Fatigue") |
| `intensity` | INTEGER | Severity scale 1–5 |
| `logged_at` | DATE | Date the symptom was logged |
| `created_at` | TIMESTAMPTZ | Record creation timestamp |

> **Row Level Security:** Each table enforces that users can only SELECT, INSERT, and DELETE their own records. Policies use `auth.uid() = user_id` for enforcement.

---

## 🔧 Troubleshooting

### Common Issues

<details>
<summary><strong>❌ "Python was not found" during setup</strong></summary>

- **Windows:** Ensure Python is added to your PATH. Re-install Python from [python.org](https://www.python.org/) and check **"Add Python to PATH"** during installation.
- **macOS:** Install via Homebrew: `brew install python3`
- **Linux:** Install via package manager: `sudo apt install python3 python3-venv` (Debian/Ubuntu) or `sudo dnf install python3` (Fedora)

</details>

<details>
<summary><strong>❌ "uvicorn not found" when running <code>npm run dev</code></strong></summary>

The backend virtual environment wasn't set up properly. Run:

```bash
npm run setup
```

This will create the `backend/venv/` directory and install all Python requirements including `uvicorn`.

</details>

<details>
<summary><strong>❌ CORS errors in the browser console</strong></summary>

The backend is configured to allow all origins (`"*"`) in development. If you're still seeing CORS errors:
1. Make sure the backend is actually running on `http://localhost:8000`.
2. Check that `VITE_BACKEND_URL` in `frontend/.env` is set to `http://localhost:8000`.

</details>

<details>
<summary><strong>❌ "Supabase configuration missing" warning</strong></summary>

This means the `.env` files are missing or have placeholder values. Ensure:
1. Both `frontend/.env` and `backend/.env` exist (not just `.env.example`).
2. The `SUPABASE_URL` and `SUPABASE_ANON_KEY` / `VITE_SUPABASE_URL` and `VITE_SUPABASE_ANON_KEY` are set to your real Supabase project values.

</details>

<details>
<summary><strong>❌ "Gemini API key is not configured" error</strong></summary>

Set the `GEMINI_API_KEY` in `backend/.env` with a valid key from [Google AI Studio](https://aistudio.google.com/). Then restart the backend server.

</details>

<details>
<summary><strong>❌ PowerShell script execution policy error (Windows)</strong></summary>

If you get an error when activating the Python venv on Windows:

```powershell
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
```

</details>

<details>
<summary><strong>❌ Port already in use</strong></summary>

If port 5173 or 8000 is already in use:

- **Windows:** `netstat -ano | findstr :8000` then `taskkill /PID <PID> /F`
- **macOS/Linux:** `lsof -i :8000` then `kill -9 <PID>`

</details>

---

## 🤝 Contributing

Contributions are welcome! Here's how to get started:

1. **Fork** the repository
2. **Create** a feature branch: `git checkout -b feature/your-feature-name`
3. **Commit** your changes: `git commit -m "Add: your feature description"`
4. **Push** to the branch: `git push origin feature/your-feature-name`
5. **Open** a Pull Request

### Development Tips

- The frontend uses **CSS custom properties** (variables) defined in `frontend/src/index.css` for theming. Stick to these variables for consistency.
- Backend API endpoints follow RESTful conventions. All authenticated routes use the `get_current_user` dependency for JWT validation.
- Data files in `frontend/src/data/` contain the static knowledge base. To add new nutrients or tests, extend these files.
- The backend auto-generates interactive API docs at `/docs` (Swagger UI) and `/redoc` (ReDoc).

---

## 📄 License

This project is licensed under the **ISC License**.

---

<div align="center">

**Built with 💚 by NutriSync**

*Empowering health decisions through biochemical intelligence.*

</div>
