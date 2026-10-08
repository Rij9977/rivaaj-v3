/**
 * THE SWAP TEST — Content Audit & Viral Creator Suite (v2.0)
 * 100% Client-Side Progressive Web App (Zero Server / Zero API Fees)
 */

// ─── AI-GENERIC & HUMANIZER PATTERNS ────────────────────────
const AI_CLICHES = [
  { pattern: /\bin today'?s (?:fast-paced|digital|ever-changing|competitive|modern) (?:world|landscape|age|environment)\b/gi, category: 'ai-generic', note: 'Generic AI opening trope.' },
  { pattern: /\bgame-?changer\b/gi, category: 'ai-generic', note: 'Overused buzzword.' },
  { pattern: /\bparadigm shift\b/gi, category: 'ai-generic', note: 'Corporate jargon.' },
  { pattern: /\bleverage(?:s|d|ing)?\b/gi, category: 'ai-generic', note: 'Overused action verb.' },
  { pattern: /\bdelve(?:s|d|ing)?\b/gi, category: 'ai-generic', note: 'Classic LLM vocabulary tell.' },
  { pattern: /\btapestry\b/gi, category: 'ai-generic', note: 'Classic LLM vocabulary tell.' },
  { pattern: /\btestament\b/gi, category: 'ai-generic', note: 'Classic LLM vocabulary tell.' },
  { pattern: /\bunlock(?:s|ed|ing)? (?:your|the) (?:potential|power|growth)\b/gi, category: 'ai-generic', note: 'Vague growth claim.' },
  { pattern: /\bseamless(?:ly)?\b/gi, category: 'ai-generic', note: 'Vague quality descriptor.' },
  { pattern: /\brobust\b/gi, category: 'ai-generic', note: 'Overused technical buzzword.' },
  { pattern: /\bholistic\b/gi, category: 'ai-generic', note: 'Vague consulting jargon.' },
  { pattern: /\bsynergy\b/gi, category: 'ai-generic', note: 'Corporate fluff.' },
  { pattern: /\bsupercharge(?:s|d|ing)?\b/gi, category: 'ai-generic', note: 'Hype vocabulary.' },
  { pattern: /\bempower(?:s|ed|ing)?\b/gi, category: 'ai-generic', note: 'Generic capability claim.' },
  { pattern: /\bactionable insights\b/gi, category: 'ai-generic', note: 'Generic value claim.' },
  { pattern: /\bmove the needle\b/gi, category: 'ai-generic', note: 'Business cliché.' },
  { pattern: /\bdeep dive\b/gi, category: 'ai-generic', note: 'Overused content descriptor.' },
  { pattern: /\bstreamline\b/gi, category: 'ai-generic', note: 'Generic optimization verb.' }
];

const HEDGING_PATTERNS = [
  { pattern: /\b(?:it is important to note that|it'?s worth mentioning that|it goes without saying that)\b/gi, category: 'safe-language', note: 'Filler framing before actual point.' },
  { pattern: /\b(?:in my opinion|i believe that|i feel that|arguably|perhaps|maybe)\b/gi, category: 'safe-language', note: 'Unnecessary stance-softener.' },
  { pattern: /\b(?:could potentially|might possibly|seems to be|tends to|can help to)\b/gi, category: 'safe-language', note: 'Double-hedged statement.' }
];

const NEGATIVE_PARALLELISM = [
  { pattern: /\b(?:it'?s not|this isn'?s|not) about [^,.]+[,.] (?:it'?s|this is) about\b/gi, category: 'negative-parallelism', note: 'Negative parallelism reframe ("Not X, Y"). Rewrite as direct positive claim.' },
  { pattern: /\b(?:stop thinking|forget|don'?t focus on) [^,.]+[,.] (?:start|focus on)\b/gi, category: 'negative-parallelism', note: 'Banned "Forget X, Focus Y" reframe pattern.' }
];

const EM_DASH_PATTERN = /—|--/g;

const SERVICE_PATTERNS = [
  { pattern: /\bI help\b/gi, category: 'service-desc', note: 'Service description pitch.' },
  { pattern: /\bmy (?:coaching|program|framework|method|service)\b/gi, category: 'service-desc', note: 'Service-focused language.' },
  { pattern: /\bbook a (?:call|discovery call|session)\b/gi, category: 'service-desc', note: 'Direct pitch CTA without insight.' },
  { pattern: /\bDM me\b/gi, category: 'service-desc', note: 'Direct CTA.' }
];

const THINKING_MARKERS = [
  /\bbecause\b/i, /\bhere'?s why\b/i, /\bthe reason\b/i, /\binstead of\b/i,
  /\bcontrary to\b/i, /\bmy mistake was\b/i, /\bwe tested\b/i, /\bthe data shows\b/i,
  /\bunpopular opinion\b/i, /\btrade-off\b/i, /\bthe mechanism\b/i, /\bwhat I noticed\b/i
];

const SPECIFICITY_MARKERS = [
  /\$[\d,]+(?:\.\d+)?/i,
  /\b\d+%/i,
  /\b\d+ (?:clients|founders|coaches|days|weeks|months|years|hours|mrr|arr)\b/i,
  /\b(?:january|february|march|april|may|june|july|august|september|october|november|december)\b/i,
  /\b(?:kajabi|calendly|notion|slack|zoom|instagram|linkedin|twitter|x|convertkit|stripe|hubspot)\b/i
];

// ─── INITIALIZATION & LOCALSTORAGE ──────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  // 1. Profile Manager Elements
  const authorNameInput = document.getElementById('author-name');
  const icpTargetInput = document.getElementById('icp-target');
  const toneVoiceInput = document.getElementById('tone-voice');
  const offersInput = document.getElementById('offers-services');
  const proofMetricsInput = document.getElementById('proof-metrics');
  const saveProfileBtn = document.getElementById('save-profile-btn');
  const profileStatus = document.getElementById('profile-status');

  // Load Saved Profile Context
  function loadProfile() {
    if (authorNameInput) authorNameInput.value = localStorage.getItem('swap_author_name') || '';
    if (icpTargetInput) icpTargetInput.value = localStorage.getItem('swap_icp_target') || '';
    if (toneVoiceInput) toneVoiceInput.value = localStorage.getItem('swap_tone_voice') || '';
    if (offersInput) offersInput.value = localStorage.getItem('swap_offers_services') || '';
    if (proofMetricsInput) proofMetricsInput.value = localStorage.getItem('swap_proof_metrics') || '';
  }
  loadProfile();

  if (saveProfileBtn) {
    saveProfileBtn.addEventListener('click', () => {
      localStorage.setItem('swap_author_name', authorNameInput.value.trim());
      localStorage.setItem('swap_icp_target', icpTargetInput.value.trim());
      localStorage.setItem('swap_tone_voice', toneVoiceInput.value.trim());
      localStorage.setItem('swap_offers_services', offersInput.value.trim());
      localStorage.setItem('swap_proof_metrics', proofMetricsInput.value.trim());
      
      if (profileStatus) {
        profileStatus.hidden = false;
        setTimeout(() => { profileStatus.hidden = true; }, 3000);
      }
    });
  }

  // 2. ICP Research & Trending Topics Generator
  const nicheSelect = document.getElementById('niche-select');
  const generateResearchBtn = document.getElementById('generate-research-btn');
  const topicsGrid = document.getElementById('topics-grid');

  const RESEARCH_BANK = {
    coaching: [
      {
        badges: ['🔥 Reddit r/coaching', '💬 184 Comments'],
        title: 'The $10k-$30k MRR Referral Trap',
        body: 'Coaches struggling because word-of-mouth plateaued, but cold outbound and ads feel pushy to high-ticket clients.',
        angle: 'Why relying on referrals stops you from building a scalable acquisition engine.'
      },
      {
        badges: ['💼 LinkedIn Trending', '🎥 YouTube Debate'],
        title: 'AI Content Fatigue Among Buyers',
        body: 'ICP prospects report ignoring polished LinkedIn posts that sound like ChatGPT summaries.',
        angle: 'How to write with demonstrated thinking so buyers feel specifically recognized.'
      },
      {
        badges: ['👥 FB Groups', '🔥 High Engagement'],
        title: 'The "I Need to Think About It" Objection Spike',
        body: 'Prospects getting off sales calls without closing because the offer lacks a clear diagnostic mechanism.',
        angle: 'Lead with diagnosis before pitch so prospects close themselves.'
      }
    ],
    saas: [
      {
        badges: ['🔥 Hacker News', '💬 210 Comments'],
        title: 'Free Trial Churn on Day 2',
        body: 'Users sign up for B2B SaaS but abandon onboarding before experiencing the core value moment.',
        angle: 'Show the 1-click outcome before asking for account configuration.'
      },
      {
        badges: ['🐦 X/Twitter Viral', '💼 LinkedIn'],
        title: 'Feature Bloat vs Single Core Solution',
        body: 'Buyers overwhelmed by massive feature suites; preferring lightweight point solutions.',
        angle: 'Why stripping 80% of your product pitch increases conversion.'
      },
      {
        badges: ['🔥 Reddit r/SaaS', '💬 95 Comments'],
        title: 'Outbound Cold Email Response Drop',
        body: 'Traditional 4-step sequence email templates generating 0.2% reply rates.',
        angle: 'Replace template pitches with specific observation breakdown.'
      }
    ],
    agency: [
      {
        badges: ['💼 LinkedIn Trending', '👥 FB Groups'],
        title: 'Retainer Churn After Month 3',
        body: 'Clients canceling monthly agency retainers due to lack of transparent metric reporting.',
        angle: 'Why vanity metrics kill retainers and how to report ROI instead.'
      },
      {
        badges: ['🔥 Reddit r/marketing', '💬 140 Comments'],
        title: 'Commoditization of General Marketing Services',
        body: 'Prospects demanding discounts because general agency offers look identical.',
        angle: 'Specializing in one painful ICP scenario eliminates price sensitivity.'
      },
      {
        badges: ['🎥 YouTube Strategy', '🐦 X/Twitter'],
        title: 'The Inbound Content Bottleneck',
        body: 'Agency founders spending 15 hours/week on content without qualified lead flow.',
        angle: 'Shift from educational posts to contrarian positioning.'
      }
    ]
  };

  function renderResearchTopics() {
    if (!topicsGrid) return;
    const niche = nicheSelect ? nicheSelect.value : 'coaching';
    const topics = RESEARCH_BANK[niche] || RESEARCH_BANK['coaching'];
    topicsGrid.innerHTML = '';

    topics.forEach((t) => {
      const card = document.createElement('div');
      card.className = 'challenge-card';
      card.innerHTML = `
        <div>
          <div class="challenge-badges">
            ${t.badges.map(b => `<span class="badge ${b.includes('🔥') ? 'badge-hot' : ''}">${b}</span>`).join('')}
          </div>
          <h4 class="challenge-title" style="margin-top:0.5rem;">${t.title}</h4>
          <p class="challenge-body" style="margin-top:0.375rem;">${t.body}</p>
        </div>
        <div>
          <div class="challenge-angle">💡 Recommended Angle: ${t.angle}</div>
          <button type="button" class="btn btn-ghost btn-sm draft-topic-btn" style="margin-top:0.75rem; width:100%;">
            ✍️ Draft Post From This Topic
          </button>
        </div>
      `;

      card.querySelector('.draft-topic-btn').addEventListener('click', () => {
        const icp = icpTargetInput ? icpTargetInput.value.trim() : 'ideal clients';
        const author = authorNameInput ? authorNameInput.value.trim() : 'I';
        const draftInput = document.getElementById('draft-input');
        
        if (draftInput) {
          draftInput.value = `Most ${icp || 'people'} think the biggest problem is getting more leads. The truth is, ${t.title.toLowerCase()} is what's actually stalling growth. We tested this recently with our clients: when you rely on generic messaging, prospects tune out. Here is the exact breakdown of why this happens and what to do instead.`;
          draftInput.dispatchEvent(new Event('input'));
          draftInput.focus();
          draftInput.scrollIntoView({ behavior: 'smooth' });
        }
      });

      topicsGrid.appendChild(card);
    });
  }

  if (generateResearchBtn) {
    generateResearchBtn.addEventListener('click', renderResearchTopics);
  }
  renderResearchTopics();

  // 3. Main Input & Audit Engine
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
      const current = document.documentElement.getAttribute('data-theme') || 'dark';
      const next = current === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', next);
      localStorage.setItem('theme', next);
    });
  }
  const savedTheme = localStorage.getItem('theme') || 'dark';
  document.documentElement.setAttribute('data-theme', savedTheme);

  // Sample Draft
  const SAMPLE_DRAFT = `In today's fast-paced digital world, it is important to note that content marketing is a game-changer for online coaches. It's not about posting daily, it's about building a robust strategy. I believe that leveraging holistic strategies will supercharge your growth — seamlessly unlocking your potential.

Contrary to popular belief, our data shows that 84% of coaches fail because they rely on generic templates instead of specific positioning. We tested this with 12 clients in March, and revenue increased 3.5x after fixing the swap test flags. DM me to book a discovery call.`;

  if (inputEl) {
    inputEl.addEventListener('input', () => {
      const len = inputEl.value.length;
      if (charCountEl) charCountEl.textContent = `${len.toLocaleString()} character${len === 1 ? '' : 's'}`;
    });
  }

  if (sampleBtn) {
    sampleBtn.addEventListener('click', () => {
      if (inputEl) {
        inputEl.value = SAMPLE_DRAFT;
        inputEl.dispatchEvent(new Event('input'));
      }
    });
  }

  if (clearBtn) {
    clearBtn.addEventListener('click', () => {
      if (inputEl) {
        inputEl.value = '';
        inputEl.dispatchEvent(new Event('input'));
      }
      if (resultsSec) resultsSec.hidden = true;
    });
  }

  if (runBtn) {
    runBtn.addEventListener('click', runAudit);
  }

  // AUDIT LOGIC
  function runAudit() {
    const text = inputEl.value.trim();
    if (!text) {
      alert('Please enter or load a draft post to run the Swap Test.');
      return;
    }

    resultsSec.hidden = false;
    resultsSec.scrollIntoView({ behavior: 'smooth' });

    // Detect Flags
    const detectedFlags = [];

    AI_CLICHES.forEach(item => {
      const matches = text.match(item.pattern);
      if (matches) {
        detectedFlags.push({ match: matches[0], category: 'ai-generic', note: item.note, count: matches.length });
      }
    });

    HEDGING_PATTERNS.forEach(item => {
      const matches = text.match(item.pattern);
      if (matches) {
        detectedFlags.push({ match: matches[0], category: 'safe-language', note: item.note, count: matches.length });
      }
    });

    NEGATIVE_PARALLELISM.forEach(item => {
      const matches = text.match(item.pattern);
      if (matches) {
        detectedFlags.push({ match: matches[0], category: 'negative-parallelism', note: item.note, count: matches.length });
      }
    });

    const emDashMatches = text.match(EM_DASH_PATTERN);
    if (emDashMatches) {
      detectedFlags.push({ match: '— (Em-dash)', category: 'em-dash', note: 'Em-dashes are a major AI giveaway. Replace with periods, commas, or parentheses.', count: emDashMatches.length });
    }

    SERVICE_PATTERNS.forEach(item => {
      const matches = text.match(item.pattern);
      if (matches) {
        detectedFlags.push({ match: matches[0], category: 'service-desc', note: item.note, count: matches.length });
      }
    });

    // Counts
    let thinkingCount = 0;
    THINKING_MARKERS.forEach(regex => { if (regex.test(text)) thinkingCount++; });

    let specCount = 0;
    SPECIFICITY_MARKERS.forEach(regex => { if (regex.test(text)) specCount++; });

    let totalFlagsCount = detectedFlags.reduce((a, b) => a + b.count, 0);

    // Calculate Scores
    let thinkingScore = Math.min(100, Math.max(10, 50 + (thinkingCount * 15) - (totalFlagsCount * 6)));
    let recognitionScore = Math.min(100, Math.max(10, 30 + (specCount * 20)));
    let swapScore = Math.min(100, Math.max(0, 100 - (totalFlagsCount * 18)));

    let overallScore = Math.round((thinkingScore * 0.35) + (recognitionScore * 0.35) + (swapScore * 0.30));

    // UI Updates
    document.getElementById('overall-score').textContent = overallScore;
    
    updateDimUI('thinking', thinkingScore, `${thinkingCount} thinking marker(s) detected.`);
    updateDimUI('recognition', recognitionScore, `${specCount} specific metric/tool detail(s) detected.`);
    updateDimUI('swap', swapScore, `${totalFlagsCount} swappable flag(s) detected.`);

    // Verdict Summary
    const verdictLabel = document.getElementById('verdict-label');
    const verdictSummary = document.getElementById('verdict-summary');
    if (overallScore >= 75) {
      verdictLabel.textContent = 'Distinctive Voice — Passes the Swap Test';
      verdictSummary.textContent = 'This draft demonstrates distinct reasoning, specific evidence, and minimal AI clichés. It cannot easily be swapped with another author byline.';
    } else if (overallScore >= 50) {
      verdictLabel.textContent = 'Moderate Positioning — Needs Sharpening';
      verdictSummary.textContent = 'Contains good core ideas, but relies on soft hedging or negative parallelism reframes. Use the Humanizer below to sharpen your voice.';
    } else {
      verdictLabel.textContent = 'High Swappability Risk — AI-Generic';
      verdictSummary.textContent = 'Warning: This draft relies heavily on overused AI tropes and generic service pitches. Anyone could put their name on this.';
    }

    renderFlagsGrid(detectedFlags);
    renderPromptsList(detectedFlags, thinkingCount, specCount);
    renderAnnotatedDraft(text, detectedFlags);
  }

  function updateDimUI(dim, score, text) {
    const fill = document.getElementById(`${dim}-fill`);
    const scoreVal = document.getElementById(`${dim}-score`);
    const desc = document.getElementById(`${dim}-desc`);

    if (fill) fill.style.width = `${score}%`;
    if (scoreVal) scoreVal.textContent = score;
    if (desc) desc.textContent = text;
  }

  function renderFlagsGrid(flags) {
    const grid = document.getElementById('flags-grid');
    if (!grid) return;
    grid.innerHTML = '';

    if (flags.length === 0) {
      grid.innerHTML = '<div class="signal-tag signal-positive" style="padding:0.75rem;">✨ No AI-generic flags detected! Clean draft.</div>';
      return;
    }

    flags.forEach(f => {
      const card = document.createElement('div');
      card.className = 'flag-card';
      card.innerHTML = `
        <span class="flag-type ${f.category}">${f.category}</span>
        <div>
          <strong>"${f.match}"</strong> (${f.count}x) — <span style="color:var(--color-text-muted);">${f.note}</span>
        </div>
      `;
      grid.appendChild(card);
    });
  }

  function renderPromptsList(flags, thinkingCount, specCount) {
    const list = document.getElementById('prompts-list');
    if (!list) return;
    list.innerHTML = '';

    const prompts = [];
    let num = 1;

    if (flags.some(f => f.category === 'negative-parallelism')) {
      prompts.push({
        num: num++,
        cat: 'Negative Parallelism Reframe',
        text: 'Delete the rejected half ("Not X") and state your positive claim directly. "It is not about X, it is about Y" → "Y is what matters."'
      });
    }

    if (flags.some(f => f.category === 'ai-generic')) {
      prompts.push({
        num: num++,
        cat: 'AI Cliché Words',
        text: 'Strip away buzzwords like "delve", "game-changer", and "unlock". Replace them with plain spoken English you would say out loud.'
      });
    }

    if (flags.some(f => f.category === 'em-dash')) {
      prompts.push({
        num: num++,
        cat: 'Em-Dash Removal',
        text: 'Em-dashes (—) are the loudest AI giveaway in 2026. Break long dash-connected sentences into two short, punchy sentences.'
      });
    }

    if (thinkingCount === 0) {
      prompts.push({
        num: num++,
        cat: 'Demonstrated Thinking',
        text: 'Add a "because" or "we tested" sentence to explain the causal mechanism behind your claim.'
      });
    }

    if (specCount === 0) {
      prompts.push({
        num: num++,
        cat: 'Specific Recognition',
        text: 'Inject concrete numbers, specific timeframes, or named tools (e.g., Notion, Calendly, $10k MRR) so your target ICP feels recognized.'
      });
    }

    prompts.forEach(p => {
      const item = document.createElement('div');
      item.className = 'prompt-card';
      item.innerHTML = `
        <span class="prompt-number">0${p.num}</span>
        <div>
          <div class="prompt-category">${p.cat}</div>
          <div class="prompt-text">${p.text}</div>
        </div>
      `;
      list.appendChild(item);
    });
  }

  function renderAnnotatedDraft(text, flags) {
    const container = document.getElementById('annotated-draft');
    if (!container) return;
    
    let html = text;
    flags.forEach(f => {
      if (f.category !== 'em-dash') {
        const regex = new RegExp(f.match.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'gi');
        html = html.replace(regex, `<span class="annotate-flag" title="${f.note}">$&</span>`);
      }
    });

    container.innerHTML = html;
  }

  // 4. HUMANIZER & REWRITE ENGINE
  const reviseBtn = document.getElementById('revise-btn');
  const copyRevisedBtn = document.getElementById('copy-revised-btn');
  const reviseOutput = document.getElementById('revise-output');

  if (reviseBtn) {
    reviseBtn.addEventListener('click', () => {
      const rawText = inputEl.value.trim();
      if (!rawText) return;

      const author = localStorage.getItem('swap_author_name') || '';
      const icp = localStorage.getItem('swap_icp_target') || 'readers';
      const proof = localStorage.getItem('swap_proof_metrics') || '';

      // Client-Side Humanizing Algorithm
      let rewritten = rawText;

      // 1. Remove Clichés
      rewritten = rewritten.replace(/\bin today'?s (?:fast-paced|digital|ever-changing|competitive|modern) (?:world|landscape|age|environment)\b/gi, '');
      rewritten = rewritten.replace(/\bgame-?changer\b/gi, 'turning point');
      rewritten = rewritten.replace(/\bdelve(?:s|d|ing)? into\b/gi, 'look at');
      rewritten = rewritten.replace(/\bleverage(?:s|d|ing)?\b/gi, 'use');
      rewritten = rewritten.replace(/\bunlock(?:s|ed|ing)? (?:your|the) potential\b/gi, 'get results');
      rewritten = rewritten.replace(/\bseamless(?:ly)?\b/gi, 'easily');
      rewritten = rewritten.replace(/\bsupercharge(?:s|d|ing)?\b/gi, 'grow');
      rewritten = rewritten.replace(/\brobust\b/gi, 'strong');
      rewritten = rewritten.replace(/\bholistic\b/gi, 'complete');

      // 2. Remove Hedging
      rewritten = rewritten.replace(/\bit is important to note that\b/gi, '');
      rewritten = rewritten.replace(/\bit'?s worth mentioning that\b/gi, '');
      rewritten = rewritten.replace(/\bi believe that\b/gi, '');

      // 3. Fix Negative Parallelism ("Not X. Y.")
      rewritten = rewritten.replace(/It'?s not about ([^,.]+)[,.] it'?s about ([^,.]+)/gi, '$2 matters most.');

      // 4. Kill Em-Dashes
      rewritten = rewritten.replace(/—|--/g, '. ');

      // 5. Apply Viral Hook Formula (LinkedIn Hook #1 / #2)
      const lines = rewritten.split('\n').filter(Boolean);
      let viralHook = '';
      if (lines.length > 0) {
        viralHook = `Stop relying on generic tactics for ${icp}.\nHere is the exact framework we used ${proof ? '(' + proof + ')' : ''} to get results:\n\n`;
      }

      const finalRewrite = (viralHook + rewritten.replace(/\s+/g, ' ').trim()) +
        (author ? `\n\n— ${author}` : '');

      if (reviseOutput) {
        reviseOutput.textContent = finalRewrite;
        reviseOutput.hidden = false;
      }
      if (copyRevisedBtn) {
        copyRevisedBtn.hidden = false;
      }

      // Show Platform Adaptation
      setupPlatformAdaptation(finalRewrite);
    });
  }

  if (copyRevisedBtn) {
    copyRevisedBtn.addEventListener('click', () => {
      if (reviseOutput) {
        navigator.clipboard.writeText(reviseOutput.textContent);
        copyRevisedBtn.textContent = 'Copied!';
        setTimeout(() => { copyRevisedBtn.textContent = 'Copy Text'; }, 2000);
      }
    });
  }

  // 5. PLATFORM ADAPTATION ENGINE
  function setupPlatformAdaptation(baseText) {
    const adaptSection = document.getElementById('adapt-section');
    const platformGrid = document.getElementById('platform-grid');
    const adaptOutput = document.getElementById('adapt-output');

    if (!adaptSection || !platformGrid) return;
    adaptSection.hidden = false;
    platformGrid.innerHTML = '';
    adaptOutput.innerHTML = '';

    const platforms = [
      { id: 'linkedin', name: 'LinkedIn Post', icon: '💼' },
      { id: 'carousel', name: '6-Slide Carousel', icon: '🎨' },
      { id: 'twitter', name: 'X / Twitter Thread', icon: '🐦' },
      { id: 'instagram', name: 'Instagram & Reels', icon: '📸' },
      { id: 'substack', name: 'Substack Note & Article', icon: '📬' },
      { id: 'facebook', name: 'Facebook Group Post', icon: '👥' },
      { id: 'threads', name: 'Threads Sequence', icon: '🧵' }
    ];

    platforms.forEach(p => {
      const btn = document.createElement('button');
      btn.className = 'platform-btn';
      btn.innerHTML = `<span>${p.icon}</span> <span>${p.name}</span>`;
      btn.type = 'button';
      btn.addEventListener('click', () => adaptForPlatform(p.id, baseText, btn));
      platformGrid.appendChild(btn);
    });
  }

  function adaptForPlatform(platformId, text, btnEl) {
    document.querySelectorAll('.platform-btn').forEach(b => b.classList.remove('active'));
    btnEl.classList.add('active');

    const outputContainer = document.getElementById('adapt-output');
    if (!outputContainer) return;

    const author = localStorage.getItem('swap_author_name') || '';
    const icp = localStorage.getItem('swap_icp_target') || 'readers';

    let formattedContent = '';

    if (platformId === 'linkedin') {
      formattedContent = `💼 LINKEDIN OPTIMIZED POST\n-----------------------------------\n${text}\n\n💡 What is your take on this? Drop a comment below.\n\n#ContentStrategy #Positioning #${icp.replace(/\s+/g, '')}`;
      outputContainer.innerHTML = `<div class="rewrite-box">${escapeHtml(formattedContent)}</div>`;
    } else if (platformId === 'carousel') {
      // 6-Slide Editorial System
      outputContainer.innerHTML = `
        <div class="carousel-deck">
          <div class="carousel-slide-card">
            <div>
              <div class="slide-eyebrow">01 · cover / hook</div>
              <div class="slide-title">The Positioning Trap Holding Back ${escapeHtml(icp)}</div>
            </div>
            <div class="slide-footer">
              <span>TC SOCIAL CAROUSELS</span>
              <span>SWIPE ➔</span>
            </div>
          </div>
          <div class="carousel-slide-card">
            <div>
              <div class="slide-eyebrow">02 · the problem</div>
              <div class="slide-body">Most creators rely on AI templates that sound identical. When everyone sounds the same, buyers choose based on price alone.</div>
            </div>
            <div class="slide-footer">
              <span>02 / 06</span>
              <span>SWIPE ➔</span>
            </div>
          </div>
          <div class="carousel-slide-card">
            <div>
              <div class="slide-eyebrow">03 · mindset shift</div>
              <div class="slide-title" style="font-size:1.15rem;">"Demonstrated thinking beats generic advice every time."</div>
            </div>
            <div class="slide-footer">
              <span>03 / 06</span>
              <span>SWIPE ➔</span>
            </div>
          </div>
          <div class="carousel-slide-card">
            <div>
              <div class="slide-eyebrow">04 · proof / data</div>
              <div class="slide-body">Fixing byline swap flags increases prospect response rate by 3.5x without spending more on ads.</div>
            </div>
            <div class="slide-footer">
              <span>04 / 06</span>
              <span>SWIPE ➔</span>
            </div>
          </div>
          <div class="carousel-slide-card">
            <div>
              <div class="slide-eyebrow">05 · real scenario</div>
              <div class="slide-body">${escapeHtml(text.slice(0, 140))}...</div>
            </div>
            <div class="slide-footer">
              <span>05 / 06</span>
              <span>SWIPE ➔</span>
            </div>
          </div>
          <div class="carousel-slide-card">
            <div>
              <div class="slide-eyebrow">06 · call to action</div>
              <div class="slide-title" style="font-size:1.15rem;">Comment <span style="color:#8b1a1a;">"SWAP"</span> to get the audit checklist</div>
            </div>
            <div class="slide-footer">
              <span>${escapeHtml(author || 'THE SWAP TEST')}</span>
              <span>END</span>
            </div>
          </div>
        </div>
      `;
    } else if (platformId === 'twitter') {
      formattedContent = `🐦 X / TWITTER THREAD\n-----------------------------------\n1/5 Most ${icp} fail because they rely on swappable messaging.\n\n2/5 Here is the truth: ${text.slice(0, 200)}...\n\n3/5 When you eliminate AI clichés, buyers feel specifically recognized.\n\n4/5 Instead of pitching services, lead with diagnosis.\n\n5/5 Retweet if this helped you sharpen your post today.`;
      outputContainer.innerHTML = `<div class="rewrite-box">${escapeHtml(formattedContent)}</div>`;
    } else if (platformId === 'instagram') {
      formattedContent = `📸 INSTAGRAM CAPTION & REELS SCRIPT\n-----------------------------------\n[REELS HOOK (0-3s)]: "Stop posting content that sounds like everyone else."\n\n[ON-SCREEN TEXT]: Specific Recognition > Generic Advice\n\n[CAPTION]:\n${text}\n\nSave this post for your next content audit 📌`;
      outputContainer.innerHTML = `<div class="rewrite-box">${escapeHtml(formattedContent)}</div>`;
    } else if (platformId === 'substack') {
      formattedContent = `📬 SUBSTACK NOTE & NEWSLETTER OUTLINE\n-----------------------------------\n[SUBSTACK NOTE]:\n${text.slice(0, 280)}\n\n[NEWSLETTER HEADLINE OPTIONS]:\n1. The Positioning Mistake ${icp} Make\n2. Why Your Draft Fails the Byline Swap Test\n\n## Section 1: The Diagnosis\n${text}`;
      outputContainer.innerHTML = `<div class="rewrite-box">${escapeHtml(formattedContent)}</div>`;
    } else if (platformId === 'facebook') {
      formattedContent = `👥 FACEBOOK GROUP POST\n-----------------------------------\nHey everyone — wanted to share a quick realization from our work with ${icp} this week:\n\n${text}\n\nHas anyone else noticed this in their niche? Let me know in the comments below!`;
      outputContainer.innerHTML = `<div class="rewrite-box">${escapeHtml(formattedContent)}</div>`;
    } else if (platformId === 'threads') {
      formattedContent = `🧵 THREADS SEQUENCE\n-----------------------------------\n1. Most posts fail the swap test because they are written for everyone.\n\n2. ${text.slice(0, 240)}\n\n3. Write like a human speaking to a colleague.`;
      outputContainer.innerHTML = `<div class="rewrite-box">${escapeHtml(formattedContent)}</div>`;
    }
  }

  function escapeHtml(str) {
    return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  }
});
