The Swap Test — Content Audit & Viral Creator Suite (v2.0)
A 100% serverless, client-side Progressive Web App (PWA) that evaluates draft posts for AI clichés, humanizes tone, conducts ICP pain point research, and generates viral multi-platform social posts — with $0 operating costs and zero backend dependencies.

🚀 What's New in Version 2.0
1. ⚡ 100% Serverless & Zero-Cost Architecture
Zero Backend Required: Runs entirely inside the user's web browser using client-side JavaScript (app.js).
$0 Monthly API Fees: Performs heuristic auditing, humanizing, and platform rewrites without calling third-party LLM APIs or hosting Python backend servers.
Turnkey Product: Ready to sell on Gumroad, LemonSqueezy, or host for free on GitHub Pages.
2. 🧠 Humanizer Engine & LinkedIn Viral Hook Rules
AI Vocabulary Stripper: Automatically detects and purges LLM vocabulary tells ("delve", "tapestry", "testament", "game-changer", "supercharge", "seamless").
Em-Dash Clean-Up: Removes mechanical em-dashes (—) to create direct, natural human phrasing.
Negative Parallelism Detector: Flags and rewrites cliché reframe patterns ("Not X, Y" or "It's not about X, it's about Y").
13 Viral LinkedIn Hook Library: Applies proven mobile feed entry rules (command hooks, bold claims, parenthetical objection removers, colon pivots).
3. 👤 Personal Brand & ICP Profile Manager
Browser-Persisted Context: Store your Author Name, Target ICP, Tone/Voice Quirks, Core Offers, and Proof Metrics directly in localStorage.
Contextual Alignment: The rewrite engine automatically weaves your personal voice, client proof, and specific offer context into every post.
4. 🔥 ICP Topic & Pain Point Generator (Social Research Engine)
Multi-Channel Social Intelligence: Simulates daily trend intelligence across Reddit, LinkedIn, Facebook Groups, and YouTube.
Niche Selection: Switch between Online Coaching / Consulting, B2B SaaS, and Agency Services.
One-Click Post Starters: Displays 3 top daily struggles/questions with a "Draft Post From This Topic" button that pre-loads primed content directly into the editor.
5. 📱 Expanded Multi-Platform Adaptation Suite
💼 LinkedIn Post: Optimized with viral 2-line fold hooks and engagement CTAs.
🎨 6-Slide Carousel Deck: Built on the 6-template editorial system (01 Cover, 02 List/Problem, 03 Quote, 04 Data Point, 05 Scenario, 06 CTA).
🐦 X / Twitter Thread: 280-character thread breakdown.
📸 Instagram Caption & Reels Script: Line-by-line video script with visual cues and on-screen text.
📬 Substack Note & Newsletter: Short provocative note + H2 structured long-form post.
👥 Facebook Group Post: Peer-to-peer storytelling post.
🧵 Threads Sequence: Fast-paced thought sequence.
📁 Repository Structure
├── index.html        # Web app layout, ICP profile forms, research grid, and results UI
├── style.css         # Complete design system (Dark/Light tokens, carousel grid, responsive UI)
├── app.js            # Standalone client-side audit, humanizer, ICP manager & rewrite engine
├── manifest.json     # PWA metadata for desktop & mobile installation
├── sw.js             # Service worker for offline caching
└── README.md         # Project documentation (this file)
🛠️ Deployment Instructions (GitHub Pages)
Upload Files: Drag and drop app.js, style.css, manifest.json, sw.js, and README.md into your GitHub repository.
Add index.html: Create a new file named index.html and paste the main HTML markup into it.
Enable GitHub Pages:
Go to Settings > Pages.
Under Source, select Deploy from a branch.
Choose main (or master) branch and / (root) folder, then click Save.
Your application will be live at https://<your-username>.github.io/<repo-name>/ in 1–2 minutes!
📄 License
MIT License. Free to use, modify, and distribute commercially.
