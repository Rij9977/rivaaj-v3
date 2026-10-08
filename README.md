The Swap Test — Content Audit & Viral Creator Suite v2.0
A 100% serverless, zero-API-cost Progressive Web Application (PWA) designed to audit, humanize, research, and adapt marketing content for creators, founders, and coaches.

🌟 What's New in Version 2.0 (Bug Fixes & Feature Additions)
1. 🔥 Fixed ICP Topic & Pain Point Generator
Dynamic Shuffling: Fixed the "Refresh Daily Topics" button so it instantly shuffles and rotates 3 distinct daily challenges every time it is clicked.
5 Niche Industry Dropdowns:
Online Coaching / Consulting
B2B SaaS / Software
Agency / Marketing Services
E-commerce & DTC Brands (New)
Creators & Digital Products (New)
2. ✍️ Broad → Narrow → Niche Draft Generator
Clicking "Draft Post From This Topic" builds a full-length, strategic post idea using your saved Brand & ICP Context following the 3-step structural framework:
Lines 1-2 (Broad): Universal hook to stop feed scrolling.
Middle Section (Narrow): Narrows down the core strategic failure for your ICP.
Breakdown Section (Niche): Immediately actionable 3-step execution plan with real proof metrics.
3. 🔍 Resolved Flagged Indicators & Swap Test Scoring Bugs
Fixed regex pattern scanner in app.js to accurately isolate AI clichés ("delve", "tapestry", "game-changer", "supercharge"), corporate jargon, soft hedging, and em-dashes (—).
Fixed real-time calculation of Demonstrated Thinking, Specific Recognition, Byline Swap Test, and Overall Verdict Score.
4. 🧠 Humanizer & ICP-Aligned Rewrite Engine
Removed Hardcoded Intro/Outro Cliches: Eliminated generic boilerplate sentences.
Dynamic Scroll-Stopping Hooks: Generates viral hooks tailored to your specific authorName, icpTarget, and offersServices.
Em-Dash & Parallelism Stripper: Replaces — with clean punctuation and replaces rigid "Not X, Y" reframes with direct assertions.
5. 📱 Multi-Platform Adaptation Suite
💼 LinkedIn: Viral 2-line hook, mobile double-space formatting, and lead-magnet comment triggers (Comment "BLUEPRINT" below).
🎨 6-Slide Carousel Deck: Dynamically maps draft concepts into a 6-slide editorial framework (Cover, Problem, Mindset Quote, Framework, Proof, CTA).
🧵 Threads: Clean, short-form feed post.
📸 Instagram Reels Script: Timed script cues (Hook 0-3s, Body 3-30s, CTA 30-45s) with spoken dialogue and on-screen text.
📬 Substack Note & Article: Short subscriber Note and long-form structured H2 newsletter outline.
👥 Facebook: Formatted with emojis, bullet points, highlighted keywords, and comment triggers.
💬 Threads Sequence: Sequential multi-post thread (1/4 to 4/4) breaking down your core message.
📁 Repository Structure
├── index.html        # Main HTML web page structure & UI components
├── style.css         # Complete design system (light/dark mode, mobile responsive)
├── app.js            # Standalone client-side audit & rewrite engine
├── manifest.json     # PWA manifest for desktop & mobile home screen installation
├── sw.js             # Service worker for offline functionality
└── README.md         # Repository documentation
🚀 How to Deploy on GitHub Pages ($0 Costs)
Upload Files: Drag and drop app.js, style.css, manifest.json, sw.js, and README.md into your GitHub repository root.
Create index.html: Create a file named index.html on GitHub and paste the HTML code.
Publish: In GitHub, go to Settings > Pages, select the main branch, and click Save.
Your app will be live at https://<your-username>.github.io/<repository-name>/ in 1–2 minutes!
