/**
 * The Swap Test — Content Audit & Creator Suite v2.0
 * 100% Client-Side / Serverless Execution Engine
 */

// ─── BRAND & ICP PROFILE STORAGE ───────────────────────────────
const DEFAULT_PROFILE = {
  authorName: 'Alex Rivers',
  icpTarget: 'Online Coaches & B2B Consultants ($10k-$50k/mo)',
  toneVoice: 'Direct, anti-guru, punchy, actionable, proof-first',
  offersServices: 'High-Ticket Offer Architecture & Backend Sprint',
  proofMetrics: 'Helped 140+ coaches scale past $30k/mo with 82% retention'
};

function getProfile() {
  try {
    const saved = localStorage.getItem('swap_test_profile');
    return saved ? JSON.parse(saved) : DEFAULT_PROFILE;
  } catch (e) {
    return DEFAULT_PROFILE;
  }
}

function saveProfile(profileData) {
  try {
    localStorage.setItem('swap_test_profile', JSON.stringify(profileData));
    return true;
  } catch (e) {
    return false;
  }
}

// ─── NICHE RESEARCH & DAILY TOPIC GENERATOR BANK ──────────────────
const NICHE_TOPICS_BANK = {
  coaching: [
    {
      title: "High-ticket coaching sales stalling in DMs",
      platform: "Reddit r/coaching",
      problem: "Coaches spending 4 hours/day in Instagram DMs getting ghosted after revealing pricing ($3k+).",
      question: "How do I transition cold DM conversations into booked calls without sounding salesy?",
      solution: "Shift from 'interrogation messaging' to an asymmetric value asset (5-min loom audit) before pitching."
    },
    {
      title: "Client churn after 90 days of coaching",
      platform: "Facebook Groups (6-Figure Coaches)",
      problem: "Clients hit a plateau in month 3 and drop out because there is no clear secondary transformation.",
      question: "Why do clients leave after the initial sprint even if they got decent results?",
      solution: "Build a 2-tier client roadmap: Tier 1 (Initial Setup) → Tier 2 (Scale & Optimization Engine)."
    },
    {
      title: "Low engagement on long-form authority posts",
      platform: "LinkedIn Feed Audit",
      problem: "Posts packed with value getting <10 likes because the first 2 lines read like a textbook.",
      question: "How do I hook busy executives without using cringe clickbait tactics?",
      solution: "Apply the Broad → Narrow → Niche framework: Start with a universal industry belief, then pivot."
    },
    {
      title: "Inability to charge $5k+ for consulting",
      platform: "YouTube Comments (Business Channel)",
      problem: "Prospects comparing $5k offers to $299 Udemy courses because messaging focuses on 'hours of calls'.",
      question: "How do I frame an offer so price objection vanishes?",
      solution: "Sell the specific enterprise bottleneck fix, not 'weekly 1:1 Zoom sessions'."
    }
  ],
  saas: [
    {
      title: "Free trial to paid conversion stuck below 3%",
      platform: "Reddit r/SaaS",
      problem: "Users sign up for free trial, explore dashboard for 4 minutes, and never return.",
      question: "What onboarding tweak moves trial users to the 'Aha moment' in under 60 seconds?",
      solution: "Eliminate empty dashboard states. Pre-populate sample data and guide users to complete 1 core action."
    },
    {
      title: "High customer acquisition cost (CAC) on Meta Ads",
      platform: "LinkedIn B2B SaaS Group",
      problem: "Paid ads burning budget with $180+ demo booking cost due to generic copy.",
      question: "How do we write SaaS ad copy that targets decision-makers instead of tire-kickers?",
      solution: "Call out the exact pain-workflow in line 1: 'If your dev team loses 6 hours/week on Jira syncs...'"
    },
    {
      title: "Feature churn: Building everything users request",
      platform: "YouTube SaaS Founder Podcast",
      problem: "Engineering team building 10 custom features/month but net retention keeps dropping.",
      question: "How do founders say no to custom feature requests without losing accounts?",
      solution: "Focus product roadmap strictly on core job-to-be-done metrics rather than edge-case feature requests."
    }
  ],
  agency: [
    {
      title: "Scope creep destroying client project margins",
      platform: "Reddit r/agency",
      problem: "Clients asking for 'quick extra revisions' that turn a 20-hour sprint into a 60-hour nightmare.",
      question: "How do agency owners enforce strict scope boundaries without damaging client relationships?",
      solution: "Implement a 'Change Order Menu' with clear pricing for additional requests during kickoff."
    },
    {
      title: "Commoditization & price competition from overseas freelancers",
      platform: "Facebook Agency Owners Hub",
      problem: "Prospects saying 'I can get this SEO campaign done on Upwork for $300/mo'.",
      question: "How do boutique agencies defend $5k/mo retainers against cheap labor?",
      solution: "Position around business outcome guarantees and revenue attribution rather than deliverables."
    },
    {
      title: "Unpredictable revenue rollercoaster (Lumpy Cashflow)",
      platform: "LinkedIn Agency Growth",
      problem: "Closing $20k in revenue one month, then $0 the next month because fulfillment stops prospecting.",
      question: "How can a solo agency owner maintain lead gen while delivering client work?",
      solution: "Systematize a daily 30-minute outbound/content pipeline that runs regardless of client load."
    }
  ],
  ecommerce: [
    {
      title: "Cart abandonment rate spiking at checkout step",
      platform: "Reddit r/ecommerce",
      problem: "70%+ of store visitors add items to cart but drop off when shipping costs appear.",
      question: "How do DTC brands boost checkout completion without destroying profit margins?",
      solution: "Threshold free shipping ($75+) paired with a dynamic progress bar in the cart drawer."
    },
    {
      title: "Rising ad costs on TikTok & Meta reducing ROAS",
      platform: "Facebook DTC Marketers",
      problem: "Return on ad spend dropped from 3.5x to 1.2x over the last 6 months.",
      question: "What UGC video structure is currently converting cold traffic for ecommerce products?",
      solution: "3-second visual problem hook → native split-screen demonstration → urgency offer CTA."
    },
    {
      title: "Low customer lifetime value (LTV) and zero repeat purchases",
      platform: "YouTube Ecom Channel",
      problem: "90% of buyers purchase once and never return, making customer acquisition unprofitable.",
      question: "How do brands turn one-time shoppers into subscription or repeat buyers?",
      solution: "Build a post-purchase email sequence educating customers on maximizing product usage."
    }
  ],
  creators: [
    {
      title: "Digital product launch flopping despite 50k followers",
      platform: "Reddit r/CreatorEconomy",
      problem: "Creator spent 3 months building a $97 course, made 4 sales to an audience of 50,000.",
      question: "Why don't social media followers convert into paying digital product customers?",
      solution: "Build an email newsletter bridge; social feeds build awareness, email builds buyer intent."
    },
    {
      title: "Creator burnout from daily content treadmill",
      platform: "YouTube Creator Insights",
      problem: "Posting 3 videos/day across 4 platforms causing severe fatigue and lower quality.",
      question: "How do top creators repurpose 1 pillar asset into 15 native pieces of content?",
      solution: "Create 1 deep-dive video → extract 3 text threads → convert to 1 carousel + 2 shorts."
    },
    {
      title: "Monetization plateau relying solely on brand sponsorships",
      platform: "LinkedIn Creator Hub",
      problem: "Sponsorship deals fluctuating wildly month-to-month, leaving income unstable.",
      question: "How do creators launch their own owned offer to replace sponsor dependency?",
      solution: "Package core expertise into a high-value cohort or digital toolkit sold directly to fans."
    }
  ]
};

// ─── AI-GENERIC & HEDGING PATTERNS ─────────────────────────────
const FLAGGED_PATTERNS = [
  { pattern: /\bin today'?s (?:fast-paced|digital|ever-changing|competitive) world\b/gi, category: 'AI Cliché', reason: 'Overused AI opening line.' },
  { pattern: /\bgame-?changer\b/gi, category: 'AI Cliché', reason: 'Overused marketing hype word.' },
  { pattern: /\bparadigm shift\b/gi, category: 'AI Cliché', reason: 'Corporate jargon.' },
  { pattern: /\bleverage\b/gi, category: 'AI Cliché', reason: 'Overused buzzword verb.' },
  { pattern: /\bdelve(?:s|d|ing)?\b/gi, category: 'AI Cliché', reason: 'Classic AI vocabulary tell.' },
  { pattern: /\btapestry\b/gi, category: 'AI Cliché', reason: 'Classic AI vocabulary tell.' },
  { pattern: /\btestament\b/gi, category: 'AI Cliché', reason: 'Classic AI vocabulary tell.' },
  { pattern: /\bunlock(?:s|ed|ing)? (?:your|the) potential\b/gi, category: 'AI Cliché', reason: 'Generic promotional claim.' },
  { pattern: /\bseamless(?:ly)?\b/gi, category: 'AI Cliché', reason: 'Vague descriptor.' },
  { pattern: /\brobust\b/gi, category: 'AI Cliché', reason: 'Overused technical filler.' },
  { pattern: /\bholistic\b/gi, category: 'AI Cliché', reason: 'Vague consulting jargon.' },
  { pattern: /\bsynergy\b/gi, category: 'AI Cliché', reason: 'Corporate fluff.' },
  { pattern: /\bsupercharge\b/gi, category: 'AI Cliché', reason: 'Hype vocabulary.' },
  { pattern: /\bempower(?:s|ed|ing)?\b/gi, category: 'AI Cliché', reason: 'Generic capability claim.' },
  { pattern: /\b(?:it is important to note that|it'?s worth mentioning that|it goes without saying that)\b/gi, category: 'Hedging', reason: 'Filler framing before actual point.' },
  { pattern: /\b(?:in my opinion|i believe that|i feel that|arguably|perhaps|maybe)\b/gi, category: 'Hedging', reason: 'Soft stance-softener.' },
  { pattern: /\b(?:could potentially|might possibly|seems to be|tends to)\b/gi, category: 'Hedging', reason: 'Double-hedged statement.' },
  { pattern: /\bnot (?:only|just) .+, but (?:also )?\b/gi, category: 'AI Structure', reason: 'Predictable AI parallel construction.' }
];

const THINKING_MARKERS = [
  /\bbecause\b/i, /\bhere'?s why\b/i, /\bthe reason\b/i, /\binstead of\b/i,
  /\bcontrary to\b/i, /\bmy mistake was\b/i, /\bwe tested\b/i, /\bthe data shows\b/i,
  /\bunpopular opinion\b/i, /\btrade-off\b/i, /\bour testing revealed\b/i
];

const SPECIFICITY_MARKERS = [
  /\b\d+(?:%|k|m|b|\$|x)?\b/i,
  /\b(?:january|february|march|april|may|june|july|august|september|october|november|december)\b/i,
  /\b(?:specifically|for instance|for example|case study|metric|roi|conversion|retention)\b/i
];

// ─── INITIALIZATION & DOM HANDLERS ────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  initProfileUI();
  initResearchGenerator();
  initAuditApp();
});

// 1. Profile UI Handler
function initProfileUI() {
  const profile = getProfile();
  document.getElementById('author-name').value = profile.authorName || '';
  document.getElementById('icp-target').value = profile.icpTarget || '';
  document.getElementById('tone-voice').value = profile.toneVoice || '';
  document.getElementById('offers-services').value = profile.offersServices || '';
  document.getElementById('proof-metrics').value = profile.proofMetrics || '';

  const saveBtn = document.getElementById('save-profile-btn');
  const statusEl = document.getElementById('profile-status');
  if (saveBtn) {
    saveBtn.addEventListener('click', () => {
      const updated = {
        authorName: document.getElementById('author-name').value.trim() || DEFAULT_PROFILE.authorName,
        icpTarget: document.getElementById('icp-target').value.trim() || DEFAULT_PROFILE.icpTarget,
        toneVoice: document.getElementById('tone-voice').value.trim() || DEFAULT_PROFILE.toneVoice,
        offersServices: document.getElementById('offers-services').value.trim() || DEFAULT_PROFILE.offersServices,
        proofMetrics: document.getElementById('proof-metrics').value.trim() || DEFAULT_PROFILE.proofMetrics
      };
      saveProfile(updated);
      if (statusEl) {
        statusEl.hidden = false;
        setTimeout(() => { statusEl.hidden = true; }, 3000);
      }
    });
  }
}

// 2. ICP Topic Research Generator
function initResearchGenerator() {
  const nicheSelect = document.getElementById('niche-select');
  const refreshBtn = document.getElementById('generate-research-btn');
  
  if (refreshBtn) {
    refreshBtn.addEventListener('click', () => {
      renderTopics(nicheSelect.value);
    });
  }
  if (nicheSelect) {
    nicheSelect.addEventListener('change', () => {
      renderTopics(nicheSelect.value);
    });
  }

  // Initial render
  renderTopics('coaching');
}

function renderTopics(nicheKey) {
  const topicsGrid = document.getElementById('topics-grid');
  if (!topicsGrid) return;

  const pool = NICHE_TOPICS_BANK[nicheKey] || NICHE_TOPICS_BANK['coaching'];
  
  // Shuffle/pick 3 topics dynamically
  const shuffled = [...pool].sort(() => 0.5 - Math.random());
  const selected = shuffled.slice(0, 3);

  topicsGrid.innerHTML = '';
  selected.forEach((item, idx) => {
    const card = document.createElement('div');
    card.className = 'topic-card';
    card.innerHTML = `
      <div class="topic-header">
        <span class="topic-badge">${item.platform}</span>
        <span class="topic-num">Topic #0${idx + 1}</span>
      </div>
      <h4 class="topic-title">${item.title}</h4>
      <p class="topic-detail"><strong>Pains:</strong> ${item.problem}</p>
      <p class="topic-detail"><strong>Question:</strong> "${item.question}"</p>
      <p class="topic-solution"><strong>Fix:</strong> ${item.solution}</p>
      <button type="button" class="btn btn-ghost btn-sm draft-topic-btn" style="margin-top:0.75rem; width:100%; justify-content:center;">
        ✍️ Draft Post From This Topic
      </button>
    `;

    // Attach Draft Post Handler
    const draftBtn = card.querySelector('.draft-topic-btn');
    draftBtn.addEventListener('click', () => {
      generateFullDraftFromTopic(item);
    });

    topicsGrid.appendChild(card);
  });
}

// 3. Draft Post Generator (Broad -> Narrow -> Niche Framework)
function generateFullDraftFromTopic(topic) {
  const profile = getProfile();
  
  // Construct a comprehensive long-form post adhering strictly to the Broad -> Narrow -> Niche framework
  const fullPost = `Most people think ${topic.title.toLowerCase()} is just part of doing business.

It isn't. It's a positioning failure.

When you speak to everyone, you end up recognizable to no one. If you're targeting ${profile.icpTarget}, relying on surface-level advice is why deals stall and prospects ghost.

Here is the exact truth behind this:
${topic.problem}

Most creators respond by trying to work harder or drop their prices. That is a trap.

Here is what we implemented instead:
${topic.solution}

Here is the 3-step breakdown to execute this right now:

1. Identify the hidden bottleneck:
Stop leading with broad promises. Focus on the exact operational friction your client faces every single day.

2. Replace pitch calls with asymmetric proof:
Instead of asking for a 45-minute Zoom call, deliver a 3-minute video breakdown of their specific issue. Show, don't tell.

3. Align your offer architecture:
Through ${profile.offersServices}, we proved that removing friction upfront drives far higher conversion than endless DM follow-ups. (${profile.proofMetrics}).

If you want to stop guessing and build a system that converts consistently:

Comment "SYSTEM" below and I'll send you our step-by-step audit framework for free.

  const inputEl = document.getElementById('draft-input');
  if (inputEl) {
    inputEl.value = fullPost;
    inputEl.dispatchEvent(new Event('input'));
    inputEl.scrollIntoView({ behavior: 'smooth' });
  }

  // Automatically trigger Swap Test audit
  runSwapTest();
}

// 4. Audit & Heuristic App Initialization
function initAuditApp() {
  const inputEl = document.getElementById('draft-input');
  const charCountEl = document.getElementById('char-count');
  const runBtn = document.getElementById('run-btn');
  const sampleBtn = document.getElementById('sample-btn');
  const clearBtn = document.getElementById('clear-btn');
  const resultsSec = document.getElementById('results');

  // Theme Toggle
  const themeToggle = document.querySelector('[data-theme-toggle]');
  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const currentTheme = document.documentElement.getAttribute('data-theme') || 'dark';
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', newTheme);
      localStorage.setItem('theme', newTheme);
    });
  }

  // Load saved theme
  const savedTheme = localStorage.getItem('theme') || 'dark';
  document.documentElement.setAttribute('data-theme', savedTheme);

  // Sample Draft Button
  const SAMPLE_DRAFT = `In today's fast-paced digital world, it is important to note that content marketing is a game-changer for online coaches. I believe that leveraging robust holistic strategies will supercharge your growth and seamlessly unlock your potential.

Contrary to popular belief, our data shows that 84% of coaches fail because they rely on generic templates instead of specific positioning. We tested this with 12 clients in March, and revenue increased 3.5x after fixing the swap test flags.`;

  if (inputEl) {
    inputEl.addEventListener('input', () => {
      const count = inputEl.value.length;
      if (charCountEl) charCountEl.textContent = `${count.toLocaleString()} character${count === 1 ? '' : 's'}`;
    });
  }

  if (sampleBtn) {
    sampleBtn.addEventListener('click', () => {
      inputEl.value = SAMPLE_DRAFT;
      inputEl.dispatchEvent(new Event('input'));
    });
  }

  if (clearBtn) {
    clearBtn.addEventListener('click', () => {
      inputEl.value = '';
      inputEl.dispatchEvent(new Event('input'));
      if (resultsSec) resultsSec.hidden = true;
    });
  }

  if (runBtn) {
    runBtn.addEventListener('click', runSwapTest);
  }

  // Humanizer & Rewrite Handler
  const reviseBtn = document.getElementById('revise-btn');
  if (reviseBtn) {
    reviseBtn.addEventListener('click', runHumanizerRewrite);
  }

  // Copy Revised Button
  const copyBtn = document.getElementById('copy-revised-btn');
  if (copyBtn) {
    copyBtn.addEventListener('click', () => {
      const outputEl = document.getElementById('revise-output');
      if (outputEl && outputEl.textContent) {
        navigator.clipboard.writeText(outputEl.textContent);
        copyBtn.textContent = 'Copied!';
        setTimeout(() => { copyBtn.textContent = 'Copy Text'; }, 2000);
      }
    });
  }
}

// 5. Main Swap Test Heuristic Audit Engine
function runSwapTest() {
  const inputEl = document.getElementById('draft-input');
  const resultsSec = document.getElementById('results');
  if (!inputEl || !resultsSec) return;

  const text = inputEl.value.trim();
  if (!text) {
    alert('Please enter or load a draft post to audit.');
    return;
  }

  resultsSec.hidden = false;
  resultsSec.scrollIntoView({ behavior: 'smooth' });

  // 1. Detect Flagged Patterns
  const detectedFlags = [];
  FLAGGED_PATTERNS.forEach(item => {
    // Reset regex index
    item.pattern.lastIndex = 0;
    const matches = text.match(item.pattern);
    if (matches && matches.length > 0) {
      detectedFlags.push({
        match: matches[0],
        category: item.category,
        reason: item.reason,
        count: matches.length
      });
    }
  });

  // Check for em-dashes
  const emDashMatch = text.match(/—|--/g);
  if (emDashMatch) {
    detectedFlags.push({
      match: 'Em-dash (—)',
      category: 'AI Tell',
      reason: 'Overused punctuation tell in AI generated text.',
      count: emDashMatch.length
    });
  }

  // 2. Count Thinking & Specificity Markers
  let thinkingCount = 0;
  THINKING_MARKERS.forEach(regex => {
    if (regex.test(text)) thinkingCount++;
  });

  let specCount = 0;
  SPECIFICITY_MARKERS.forEach(regex => {
    if (regex.test(text)) specCount++;
  });

  // 3. Calculate Scores
  const totalFlagCount = detectedFlags.reduce((acc, f) => acc + f.count, 0);

  // Thinking Score: 40 base + (thinking markers * 15) - (flags * 6)
  let thinkingScore = Math.min(100, Math.max(10, 40 + (thinkingCount * 15) - (totalFlagCount * 6)));
  
  // Specificity Score: 30 base + (specificity markers * 20)
  let recognitionScore = Math.min(100, Math.max(10, 30 + (specCount * 20)));

  // Swap / Uniqueness Score: 100 - (totalFlags * 15)
  let swapScore = Math.min(100, Math.max(0, 100 - (totalFlagCount * 15)));

  // Overall Combined Score
  const overallScore = Math.round((thinkingScore * 0.35) + (recognitionScore * 0.35) + (swapScore * 0.30));

  // Render Scores UI
  updateScoreUI('overall-score', overallScore);
  updateDimensionUI('thinking', thinkingScore, `${thinkingCount} thinking marker(s) detected.`);
  updateDimensionUI('recognition', recognitionScore, `${specCount} specific metric/detail marker(s) found.`);
  updateDimensionUI('swap', swapScore, `${totalFlagCount} swappable flag(s) detected.`);

  // Verdict Summary
  const verdictLabel = document.getElementById('verdict-label');
  const verdictSummary = document.getElementById('verdict-summary');
  if (overallScore >= 75) {
    verdictLabel.textContent = 'Strong Positioning — Distinct & Unswappable';
    verdictSummary.textContent = 'This draft demonstrates clear personal reasoning, concrete proof, and minimal AI clichés. Great job!';
  } else if (overallScore >= 50) {
    verdictLabel.textContent = 'Moderate Swappability — Needs Sharpening';
    verdictSummary.textContent = 'Good core idea, but contains soft hedging or AI vocabulary phrases. Apply the humanizer rewrite to sharpen your position.';
  } else {
    verdictLabel.textContent = 'High Swappability Risk — AI Generic';
    verdictSummary.textContent = 'Warning: Heavy reliance on AI cliché phrases and generic claims. Anyone in your niche could put their name on this post.';
  }

  // Render Cards
  renderFlags(detectedFlags);
  renderPrompts(detectedFlags, thinkingCount, specCount);
  renderAnnotatedDraft(text, detectedFlags);

  // Automatically trigger rewrite preview
  runHumanizerRewrite();
}

function updateScoreUI(id, score) {
  const el = document.getElementById(id);
  if (el) el.textContent = score;
}

function updateDimensionUI(prefix, score, descText) {
  const fill = document.getElementById(`${prefix}-fill`);
  const scoreVal = document.getElementById(`${prefix}-score`);
  const desc = document.getElementById(`${prefix}-desc`);

  if (fill) fill.style.width = `${score}%`;
  if (scoreVal) scoreVal.textContent = `${score}/100`;
  if (desc) desc.textContent = descText;
}

// 6. Render Flagged Indicators Grid
function renderFlags(flags) {
  const flagsGrid = document.getElementById('flags-grid');
  if (!flagsGrid) return;

  flagsGrid.innerHTML = '';

  if (flags.length === 0) {
    flagsGrid.innerHTML = `
      <div class="flag-card flag-clean" style="grid-column: 1 / -1; padding: 1.25rem; background: rgba(34,197,94,0.1); border:1px solid rgba(34,197,94,0.3); border-radius:8px; color:var(--color-text);">
        <h4 style="color:#22c55e; margin-bottom:0.25rem;">✓ Zero AI Clichés Detected</h4>
        <p style="font-size:0.875rem; color:var(--color-text-muted);">Your draft is free of obvious AI buzzwords and soft hedging phrases.</p>
      </div>
    `;
    return;
  }

  flags.forEach(flag => {
    const card = document.createElement('div');
    card.className = 'flag-card';
    card.style.padding = '1rem';
    card.style.background = 'var(--color-surface)';
    card.style.border = '1px solid var(--color-border)';
    card.style.borderRadius = '8px';

    card.innerHTML = `
      <div style="display:flex; justify-size:space-between; align-items:center; margin-bottom:0.5rem;">
        <span style="font-size:0.75rem; font-weight:700; text-transform:uppercase; padding:0.2rem 0.5rem; background:rgba(239,68,68,0.15); color:#ef4444; border-radius:4px;">${flag.category}</span>
        <span style="font-size:0.75rem; color:var(--color-text-muted);">${flag.count} match(es)</span>
      </div>
      <h5 style="font-size:0.95rem; font-weight:700; margin-bottom:0.25rem; color:var(--color-strong);">"${flag.match}"</h5>
      <p style="font-size:0.8125rem; color:var(--color-text-muted);">${flag.reason}</p>
    `;
    flagsGrid.appendChild(card);
  });
}

function renderPrompts(flags, thinkingCount, specCount) {
  const promptsList = document.getElementById('prompts-list');
  if (!promptsList) return;

  promptsList.innerHTML = '';
  const prompts = [];

  if (flags.length > 0) {
    prompts.push(`Replace flagged buzzwords like "${flags[0].match}" with direct, conversational language.`);
  }
  if (thinkingCount < 2) {
    prompts.push("Add a clear causal explanation ('because...') or contrarian stance in line 3.");
  }
  if (specCount < 2) {
    prompts.push("Inject at least 1 real metric, dollar figure, or named framework from your client work.");
  }
  prompts.push("Replace 'Not X, Y' reframes with a direct claim.");

  prompts.forEach((p, idx) => {
    const item = document.createElement('div');
    item.style.padding = '0.75rem 1rem';
    item.style.marginBottom = '0.5rem';
    item.style.background = 'var(--color-surface)';
    item.style.borderLeft = '3px solid var(--color-accent)';
    item.style.fontSize = '0.875rem';
    item.innerHTML = `<strong>Prompt #${idx + 1}:</strong> ${p}`;
    promptsList.appendChild(item);
  });
}

function renderAnnotatedDraft(text, flags) {
  const container = document.getElementById('annotated-draft');
  if (!container) return;

  let html = text;
  flags.forEach(f => {
    const regex = new RegExp(`(${f.match})`, 'gi');
    html = html.replace(regex, `<mark style="background:rgba(239,68,68,0.25); color:#ef4444; padding:0.1rem 0.3rem; border-radius:3px;" title="${f.reason}">$1</mark>`);
  });

  container.innerHTML = `<div style="white-space:pre-wrap; font-family:var(--font-sans); line-height:1.6; font-size:0.9375rem;">${html}</div>`;
}

// 7. Humanizer & ICP-Aligned Rewrite Engine
function runHumanizerRewrite() {
  const inputEl = document.getElementById('draft-input');
  const outputEl = document.getElementById('revise-output');
  const copyBtn = document.getElementById('copy-revised-btn');
  if (!inputEl || !outputEl) return;

  const text = inputEl.value.trim();
  if (!text) return;

  const profile = getProfile();

  // Strip AI Clichés & Hedging
  let cleaned = text;
  FLAGGED_PATTERNS.forEach(item => {
    cleaned = cleaned.replace(item.pattern, '');
  });

  // Strip Em-Dashes
  cleaned = cleaned.replace(/—|--/g, ' - ');

  // Clean up double spaces and empty lines
  cleaned = cleaned.replace(/ +/g, ' ').trim();

  // Build a Scroll-Stopping Humanized Rewrite
  const humanizedPost = `Most people in ${profile.icpTarget} are approaching this completely backwards.

Here is the unfiltered truth:

${cleaned}

Why this matters for ${profile.icpTarget}:
If you continue using generic templates, prospects will keep scrolling past your content.

Here is how we execute this inside ${profile.offersServices}:
- Focus on 1 specific bottleneck instead of broad advice
- Deliver asymmetric value proof before pitching
- Leverage proven case metrics (${profile.proofMetrics})

Comment "PROOF" below and I will send you our step-by-step PDF execution guide for free.

— ${profile.authorName}`;

  outputEl.textContent = humanizedPost;
  outputEl.hidden = false;
  if (copyBtn) copyBtn.hidden = false;

  // Setup Social Platform Adaptation
  setupPlatformAdaptation(humanizedPost);
}

// 8. Social Platform Adaptation Suite
function setupPlatformAdaptation(revisedText) {
  const adaptSection = document.getElementById('adapt-section');
  const platformGrid = document.getElementById('platform-grid');
  const adaptOutput = document.getElementById('adapt-output');
  if (!adaptSection || !platformGrid || !adaptOutput) return;

  adaptSection.hidden = false;
  platformGrid.innerHTML = '';

  const platforms = [
    { id: 'linkedin', name: 'LinkedIn', icon: '💼' },
    { id: 'carousel', name: '6-Slide Carousel', icon: '🎨' },
    { id: 'threads_app', name: 'Threads', icon: '🧵' },
    { id: 'instagram_reels', name: 'Instagram Reels Script', icon: '📸' },
    { id: 'substack', name: 'Substack Note & Article', icon: '📬' },
    { id: 'facebook', name: 'Facebook', icon: '👥' },
    { id: 'threads_seq', name: 'Threads Sequence', icon: '💬' }
  ];

  platforms.forEach(p => {
    const card = document.createElement('div');
    card.className = 'platform-card';
    card.style.display = 'flex';
    card.style.alignItems = 'center';
    card.style.justifyContent = 'space-between';
    card.style.padding = '0.75rem 1rem';
    card.style.background = 'var(--color-surface)';
    card.style.border = '1px solid var(--color-border)';
    card.style.borderRadius = '8px';
    card.style.marginBottom = '0.5rem';

    card.innerHTML = `
      <div style="display:flex; align-items:center; gap:0.5rem;">
        <span style="font-size:1.25rem;">${p.icon}</span>
        <span style="font-size:0.9375rem; font-weight:600;">${p.name}</span>
      </div>
      <button type="button" class="btn btn-ghost btn-sm adapt-btn" data-platform="${p.id}">
        Adapt
      </button>
    `;
    platformGrid.appendChild(card);
  });

  // Attach Platform Adaptation Handler
  platformGrid.addEventListener('click', (e) => {
    const btn = e.target.closest('.adapt-btn');
    if (!btn) return;

    const platform = btn.dataset.platform;
    const profile = getProfile();

    let formatted = '';

    if (platform === 'linkedin') {
      formatted = `💼 LINKEDIN POST FORMAT

${revisedText}

--------------------------------------------------
💡 Engagement Hook CTA:
Comment "BLUEPRINT" below and I'll send you our complete step-by-step implementation PDF!`;
    } 
    else if (platform === 'carousel') {
      formatted = `🎨 6-SLIDE CAROUSEL DECK FORMAT

Slide 1 [COVER HOOK]:
• Title: The ${profile.icpTarget} Growth Bottleneck
• Subtitle: Why standard tactics fail & what to do instead
• Author: By ${profile.authorName}

Slide 2 [THE PROBLEM]:
• Mistake #1: Relying on surface-level templates
• Mistake #2: Interrogating prospects in DMs
• Mistake #3: Ignoring asymmetric value assets

Slide 3 [MINDSET QUOTE]:
"When you speak to everyone, you become recognizable to no one."

Slide 4 [ACTIONABLE FRAMEWORK]:
• Step 1: Isolate the core friction point
• Step 2: Deliver 3-min video audits
• Step 3: Optimize offer architecture

Slide 5 [REAL PROOF]:
• Proof Metric: ${profile.proofMetrics}
• Service Engine: ${profile.offersServices}

Slide 6 [CALL TO ACTION]:
• Want the exact execution framework?
• Repost ♻️ & Comment "CAROUSEL" below.`;
    }
    else if (platform === 'threads_app') {
      formatted = `🧵 THREADS POST

Most people in ${profile.icpTarget} focus on surface tactics.

Here is what actually moves the needle:
1. Isolate the core client pain
2. Build asymmetric value assets
3. Scale through ${profile.offersServices}

What is your biggest bottleneck this week? Drop it below 👇`;
    }
    else if (platform === 'instagram_reels') {
      formatted = `📸 INSTAGRAM REELS / SHORTS SCRIPT

🪝 HOOK (0:00 - 0:03):
[On-Screen Text: "Stop doing this if you want higher conversions"]
Spoken: "If you are struggling to convert ${profile.icpTarget}, stop making this 1 mistake."

💡 BODY (0:03 - 0:30):
[Visual: Creator talking directly to camera, fast cuts]
Spoken: "${revisedText.slice(0, 220)}..."

🚀 CALL TO ACTION (0:30 - 0:40):
[Visual: Pointing down to caption]
Spoken: "Comment 'REELS' below and I'll DM you the exact 3-step blueprint for free!"`;
    }
    else if (platform === 'substack') {
      formatted = `📬 SUBSTACK NOTE & NEWSLETTER ARTICLE

[SUBSTACK NOTE]:
Most advice given to ${profile.icpTarget} is complete noise. Here is what our testing actually proved: ${profile.proofMetrics}. Full breakdown below 👇

==================================================

[SUBSTACK ARTICLE OUTLINE]:
# Why Standard Tactics Fail for ${profile.icpTarget}

## The Core Bottleneck
${revisedText}

## The Implementation Roadmap
1. Audit your current messaging friction
2. Deploy ${profile.offersServices}
3. Measure conversion retention

Subscribe to get next week's deep-dive case study!`;
    }
    else if (platform === 'facebook') {
      formatted = `👥 FACEBOOK POST

🔥 Honest truth for ${profile.icpTarget}:

${revisedText}

📌 Key Takeaway:
Stop relying on generic advice. Implement a proven system built for your specific offer.

👉 Drop a comment with the word "SYSTEM" and I'll send over the complete framework breakdown!`;
    }
    else if (platform === 'threads_seq') {
      formatted = `💬 THREADS SEQUENCE (1/4)

1/4: Most creators in ${profile.icpTarget} are stuck because they use generic messaging. Here's the fix 🧵

2/4: The Core Problem:
${revisedText.slice(0, 180)}...

3/4: How we solve this with ${profile.offersServices}:
• Step 1: Asymmetric value proof
• Step 2: Clear positioning
• Step 3: High-ticket conversion

4/4: Want the step-by-step PDF? Comment "THREADS" below and I'll send it over!`;
    }

    adaptOutput.innerHTML = `
      <div style="background:var(--color-surface); border:1px solid var(--color-border); border-radius:8px; padding:1.25rem;">
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:0.75rem;">
          <h4 style="font-size:1rem; font-weight:700; color:var(--color-accent);">${platforms.find(p => p.id === platform).name} Output</h4>
          <button type="button" class="btn btn-ghost btn-sm" id="copy-adapt-btn">Copy Platform Text</button>
        </div>
        <pre style="white-space:pre-wrap; font-family:var(--font-sans); font-size:0.875rem; line-height:1.6; color:var(--color-text); margin:0;">${formatted}</pre>
      </div>
    `;

    const copyAdaptBtn = document.getElementById('copy-adapt-btn');
    if (copyAdaptBtn) {
      copyAdaptBtn.addEventListener('click', () => {
        navigator.clipboard.writeText(formatted);
        copyAdaptBtn.textContent = 'Copied!';
        setTimeout(() => { copyAdaptBtn.textContent = 'Copy Platform Text'; }, 2000);
      });
    }
  });

  // Default trigger LinkedIn
  const defaultBtn = platformGrid.querySelector('[data-platform="linkedin"]');
  if (defaultBtn) defaultBtn.click();
}
