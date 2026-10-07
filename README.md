# The Swap Test — Content Audit Engine

A Progressive Web App (PWA) and heuristic content audit engine designed to evaluate draft writing for AI clichés, corporate jargon, generic messaging, and swappable brand claims.

---

## 🌟 Overview

**The Swap Test** helps content creators, marketers, and writers refine their drafts before publishing. It evaluates posts across three core heuristic dimensions:

1. **Demonstrated Thinking vs. Service Description**: Checks if the content demonstrates original reasoning, causal logic, and contrarian insights rather than superficial promotion.
2. **Specific Recognition vs. Broad Agreement**: Evaluates whether the reader feels specifically recognized through concrete details, numbers, named tools, and exact scenarios.
3. **Byline Swap Test**: Detects whether the post could be copied and published by any competitor without changing a word.

---

## 📁 Repository Structure

```text
├── index.html        # Main HTML web page structure and UI components
├── style.css         # Complete design system (light/dark theme, responsive layout)
├── app.js            # Client-side heuristic audit engine & API client
├── manifest.json     # Web App Manifest for PWA installation
├── sw.js             # Service Worker for offline caching
└── README.md         # Project documentation (this file)
```

---

## 🚀 Quick Start / Deployment

### 1. Host on GitHub Pages (Static Web / PWA)
1. Push all files (`index.html`, `style.css`, `app.js`, `manifest.json`, `sw.js`, `README.md`) to the root of your GitHub repository.
2. In GitHub, navigate to **Settings** > **Pages**.
3. Under **Build and deployment** > **Source**, select `Deploy from a branch`.
4. Choose the `main` (or `master`) branch and `/ (root)` folder, then click **Save**.
5. Your app will be live at `https://<your-username>.github.io/<repository-name>/`.

---

## 🐍 Backend API Setup (FastAPI Python Server)

The app works locally in standalone heuristic mode, but can also connect to the AI revision backend server (`main.py`):

1. **Install Dependencies**:
   ```bash
   pip install fastapi uvicorn google-genai pydantic python-dotenv
   ```
2. **Set Environment Variables**:
   Create a `.env` file with your Gemini API key:
   ```env
   GEMINI_API_KEY=your_gemini_api_key_here
   ```
3. **Run the FastAPI Server**:
   ```bash
   uvicorn main:app --reload --port 8000
   ```
4. **Connect Frontend**:
   By default, `app.js` connects to `http://localhost:8000`. You can update `window.API_BASE_URL` in `app.js` if deploying your backend to a cloud host (e.g., Render, Railway, or Hugging Face Spaces).

---

## 🛠️ Features

- 🔍 **Real-Time Client-Side Scoring**: Instant heuristic analysis without server dependency.
- 🎨 **Responsive Light & Dark Modes**: Modern theme toggle adhering to system preferences.
- 📱 **PWA Ready**: Can be installed on desktop and mobile devices.
- 🤖 **AI Revision & Social Platform Adaptation**: Automatically rewrites content and formats posts for LinkedIn, Twitter/X, Instagram, Substack, and Facebook when connected to the backend.

---

## 📄 License

MIT License. Free to modify and distribute.
