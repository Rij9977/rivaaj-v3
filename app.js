/* ============================================================
THE SWAP TEST — Content Audit Engine
Heuristic analysis for AI-generic indicators in draft content
============================================================ */

// ─── AI-GENERIC PHRASE LIBRARY ──────────────────────────────
const AI_GENERIC_PHRASES = [
  // Openers & transitions
  { phrase: /in today'?s (world|landscape|digital age|fast-paced world|society)/gi, category: 'ai-generic', note: 'Generic opener that signals AI-polished content.' },
  { phrase: /in the world of/gi, category: 'ai-generic', note: 'Vague framing that adds no specificity.' },
  { phrase: /when it comes to/gi, category: 'ai-generic', note: 'Overused transition. Get to the point.' },
  { phrase: /let'?s dive in/gi, category: 'ai-generic', note: 'Filler transition. Just start the insight.' },
  { phrase: /let'?s (explore|break down|unpack|dig into)/gi, category: 'ai-generic', note: 'Generic transition that delays the actual content.' },
  { phrase: /here'?s the thing/gi, category: 'ai-generic', note: 'Overused hook. Lead with the insight itself.' },
  { phrase: /here'?s why/gi, category: 'ai-generic', note: 'Generic setup phrase.' },
  { phrase: /at the end of the day/gi, category: 'ai-generic', note: 'Cliché summary phrase.' },
  { phrase: /it'?s (important to note|worth noting|worth mentioning|worth considering)/gi, category: 'safe-language', note: 'Hedging qualifier. The author takes no stance.' },
  { phrase: /it goes without saying/gi, category: 'ai-generic', note: 'If it goes without saying, don\'t say it.' },
  { phrase: /needless to say/gi, category: 'ai-generic', note: 'Filler. Remove and start with the point.' },

  // Benefit / transformation language
  { phrase: /unlock (your|the) (potential|power|success|growth)/gi, category: 'ai-generic', note: 'Vague transformation language.' },
  { phrase: /(take|elevate|level up) (your|it) to the next level/gi, category: 'ai-generic', note: 'Generic growth claim.' },
  { phrase: /(transform|revolutionize|disrupt) (your|the)/gi, category: 'ai-generic', note: 'Hyperbolic transformation language.' },
  { phrase: /(skyrocket|boost|supercharge|turbocharge|amplify) (your|the)/gi, category: 'ai-generic', note: 'Inflated verb that signals AI generation.' },
  { phrase: /the power of/gi, category: 'ai-generic', note: 'Overused abstraction.' },
  { phrase: /empower (yourself|others|your team)/gi, category: 'ai-generic', note: 'Corporate empowerment language.' },
  { phrase: /game.?changer/gi, category: 'ai-generic', note: 'Overused buzzword.' },
  { phrase: /paradigm shift/gi, category: 'ai-generic', note: 'Corporate jargon.' },
  { phrase: /cutting.?edge/gi, category: 'ai-generic', note: 'Vague innovation claim.' },
  { phrase: /holistic approach/gi, category: 'ai-generic', note: 'Overused methodology claim.' },
  { phrase: /seamless (integration|experience|process)/gi, category: 'ai-generic', note: 'Generic product language.' },
  { phrase: /robust solution/gi, category: 'ai-generic', note: 'Corporate jargon.' },
  { phrase: /best practices/gi, category: 'ai-generic', note: 'Signals conformity, not unique thinking.' },
  { phrase: /actionable insights/gi, category: 'ai-generic', note: 'Generic value claim.' },
  { phrase: /low.?hanging fruit/gi, category: 'ai-generic', note: 'Overused business metaphor.' },
  { phrase: /move the needle/gi, category: 'ai-generic', note: 'Corporate cliché.' },
  { phrase: /deep dive/gi, category: 'ai-generic', note: 'Overused content descriptor.' },
  { phrase: /value proposition/gi, category: 'ai-generic', note: 'Corporate jargon.' },
  { phrase: /competitive (advantage|edge)/gi, category: 'ai-generic', note: 'Generic business language.' },
  { phrase: /streamline (your|the|processes)/gi, category: 'ai-generic', note: 'Generic optimization language.' },
  { phrase: /scalable (solution|approach|model)/gi, category: 'ai-generic', note: 'Corporate buzzword.' },
  { phrase: /frictionless/gi, category: 'ai-generic', note: 'Generic UX jargon.' },

  // Engagement bait
  { phrase: /what if I told you/gi, category: 'ai-generic', note: 'Clickbait hook pattern.' },
  { phrase: /let that sink in/gi, category: 'ai-generic', note: 'Engagement bait.' },
  { phrase: /this\.\s*this right here\./gi, category: 'ai-generic', note: 'Engagement bait pattern.' },
  { phrase: /hot take/gi, category: 'ai-generic', note: 'Often precedes a conventional opinion.' },
  { phrase: /unpopular opinion/gi, category: 'ai-generic', note: 'Usually followed by a popular opinion.' },
  { phrase: /plot twist/gi, category: 'ai-generic', note: 'Narrative gimmick.' },
  { phrase: /nobody talks about/gi, category: 'ai-generic', note: 'Overused hook claiming novelty.' },
  { phrase: /the secret to/gi, category: 'ai-generic', note: 'Generic promise of hidden knowledge.' },
  { phrase: /proven strategies/gi, category: 'ai-generic', note: 'Generic credibility claim.' },
  { phrase: /results.?driven/gi, category: 'ai-generic', note: 'Generic corporate language.' },

  // Listicle patterns
  { phrase: /\d+ (reasons|ways|tips|strategies|secrets|lessons) (why|to|for|I)/gi, category: 'ai-generic', note: 'Listicle title pattern.' },
  { phrase: /the ultimate guide to/gi, category: 'ai-generic', note: 'Generic content promise.' },
  { phrase: /everything you need to know about/gi, category: 'ai-generic', note: 'Generic content promise.' },
  { phrase: /you'?re doing \w+ wrong/gi, category: 'ai-generic', note: 'Generic contrarian hook.' },
  { phrase: /stop doing \w+/gi, category: 'ai-generic', note: 'Generic advice hook.' },
  { phrase: /start doing \w+/gi, category: 'ai-generic', note: 'Generic advice hook.' },

  // Broad agreement
  { phrase: /everyone knows/gi, category: 'broad-agreement', note: 'Assumes agreement rather than earning it.' },
  { phrase: /we all (want|know|need|struggle)/gi, category: 'broad-agreement', note: 'Universal claim that lacks specificity.' },
  { phrase: /success requires/gi, category: 'broad-agreement', note: 'Generic platitude.' },
  { phrase: /the key to success/gi, category: 'broad-agreement', note: 'Reduces complex topics to a single "key."' },
  { phrase: /gone are the days/gi, category: 'broad-agreement', note: 'Generic framing of change.' },
  { phrase: /in this day and age/gi, category: 'broad-agreement', note: 'Vague temporal framing.' },

  // Hedge words
  { phrase: /\b(might|could|may) potentially/gi, category: 'safe-language', note: 'Redundant hedging.' },
  { phrase: /\bpossibly\b/gi, category: 'safe-language', note: 'Hedge word that weakens the claim.' },
  { phrase: /\bperhaps\b/gi, category: 'safe-language', note: 'Hedge word that weakens the claim.' },
  { phrase: /\barguably\b/gi, category: 'safe-language', note: 'Hedge word that avoids commitment.' },
  { phrase: /\bto some extent\b/gi, category: 'safe-language', note: 'Hedge that dilutes the point.' },
  { phrase: /\bcan help\b/gi, category: 'safe-language', note: 'Non-committal benefit claim.' },
  { phrase: /\bhas the potential to\b/gi, category: 'safe-language', note: 'Hedged future claim.' },
  { phrase: /\bmay lead to\b/gi, category: 'safe-language', note: 'Hedged causal claim.' },
  { phrase: /\bit is (often|sometimes|generally|typically|usually) (said|thought|believed)\b/gi, category: 'safe-language', note: 'Passive hedge that avoids attribution.' },
  { phrase: /\bin many ways\b/gi, category: 'safe-language', note: 'Vague qualifier.' },
  { phrase: /\bto a certain (extent|degree)\b/gi, category: 'safe-language', note: 'Hedge that dilutes the claim.' },

  // Over-polishing transitions
  { phrase: /\bfurthermore\b/gi, category: 'over-polishing', note: 'Academic transition. Use conversational flow.' },
  { phrase: /\bmoreover\b/gi, category: 'over-polishing', note: 'Academic transition. Use conversational flow.' },
  { phrase: /\badditionally\b/gi, category: 'over-polishing', note: 'Academic transition. Use conversational flow.' },
  { phrase: /\bconsequently\b/gi, category: 'over-polishing', note: 'Academic transition.' },
  { phrase: /\bnevertheless\b/gi, category: 'over-polishing', note: 'Academic transition.' },
  { phrase: /\bnonetheless\b/gi, category: 'over-polishing', note: 'Academic transition.' },
  { phrase: /\bnotwithstanding\b/gi, category: 'over-polishing', note: 'Overly formal transition.' },
  { phrase: /\bin conclusion\b/gi, category: 'over-polishing', note: 'Essay-style closing.' },
  { phrase: /\bin summary\b/gi, category: 'over-polishing', note: 'Essay-style closing.' },
  { phrase: /\bto summarize\b/gi, category: 'over-polishing', note: 'Essay-style closing.' },
  { phrase: /\bas (previously )?mentioned\b/gi, category: 'over-polishing', note: 'Academic callback.' },
  { phrase: /\bit is (crucial|essential|vital|imperative) (to|that)\b/gi, category: 'over-polishing', note: 'Overwrought importance claim.' },
];

// ─── SERVICE DESCRIPTION PATTERNS ───────────────────────────
const SERVICE_PATTERNS = [
  { phrase: /\bI help\b/gi, type: 'service-desc', note: 'Service description language.' },
  { phrase: /\bwe (offer|provide|deliver|specialize in)\b/gi, type: 'service-desc', note: 'Service description language.' },
  { phrase: /\bmy (program|coaching|course|service|framework|method|system|approach|methodology)\b/gi, type: 'service-desc', note: 'Service description language.' },
  { phrase: /\bbook a (call|session|consultation|discovery call)\b/gi, type: 'service-desc', note: 'Direct CTA without preceding insight.' },
  { phrase: /\bDM me\b/gi, type: 'service-desc', note: 'Direct CTA.' },
  { phrase: /\blink in bio\b/gi, type: 'service-desc', note: 'Direct CTA.' },
  { phrase: /\bwork with me\b/gi, type: 'service-desc', note: 'Service description language.' },
  { phrase: /\b(join|enroll in|sign up for|apply for) my\b/gi, type: 'service-desc', note: 'Direct enrollment language.' },
  { phrase: /\bfree consultation\b/gi, type: 'service-desc', note: 'Service offering language.' },
  { phrase: /\bstrategy session\b/gi, type: 'service-desc', note: 'Service offering language.' },
  { phrase: /\bdiscovery call\b/gi, type: 'service-desc', note: 'Service offering language.' },
  { phrase: /\bmy (clients|students|members) (get|receive|have access to)\b/gi, type: 'service-desc', note: 'Feature description rather than insight.' },
  { phrase: /\b(exclusive|premium|proprietary) (content|access|strategy|framework)\b/gi, type: 'service-desc', note: 'Marketing language.' },
  { phrase: /\b(spots|seats) (are )?(limited|available|filling up)\b/gi, type: 'service-desc', note: 'Scarcity marketing language.' },
  { phrase: /\benroll(ment)? (now )?(open|closing|closes)\b/gi, type: 'service-desc', note: 'Enrollment marketing language.' },
];

// ─── THINKING / ORIGINALITY MARKERS ──────────────────────────
const THINKING_MARKERS = [
  /\bbecause\b/gi,
  /\bthe reason\b/gi,
  /\bhere'?s why\b/gi,
  /\bwhat (I'?ve |I )?(noticed|observed|seen|found)\b/gi,
  /\bthe (problem|issue|mistake|trap) (is|with)\b/gi,
  /\bwhat (actually|really) happens\b/gi,
  /\bthe truth is\b/gi,
  /\bnobody tells you\b/gi,
  /\bI (disagree|push back|take issue)\b/gi,
  /\bcontrary to\b/gi,
  /\bmost people (think|believe|assume)\b/gi,
  /\bthe conventional (wisdom|approach) (is|says)\b/gi,
  /\bI (believe|think|argue|contend|maintain)\b/gi,
  /\bI'?ve (found|learned|realized|discovered)\b/gi,
  /\bthe mechanism\b/gi,
  /\bhow this (works|actually works)\b/gi,
  /\bwhat I mean is\b/gi,
  /\bhere'?s the (problem|issue|thing nobody)\b/gi,
  /\bthe pattern I see\b/gi,
  /\bin my experience\b/gi,
  /\bwhat I'?ve come to realize\b/gi,
  /\bthe real (problem|issue|reason|cost|question)\b/gi,
  /\bthis is (why|because)\b/gi,
  /\bthe mistake (is|here is|I see)\b/gi,
];

// ─── SPECIFICITY MARKERS ────────────────────────────────────
const SPECIFICITY_MARKERS = [
  /\$[\d,]+(\.\d+)?/,
  /\b\d+%/g,
  /\b\d+ (clients|customers|students|hours|days|weeks|months|years)\b/gi,
  /\b\d+(am|pm|:00)\b/gi,
  /\b(monday|tuesday|wednesday|thursday|friday|saturday|sunday)\b/gi,
  /\b(q[1-4]|quarter [1-4])\b/gi,
  /\b(january|february|march|april|may|june|july|august|september|october|november|december)\b/gi,
  /\b(kajabi|calendly|notion|slack|zoom|instagram|linkedin|twitter|x|tiktok|youtube|stripe|convertkit|mailchimp|clickfunnels|zapier|airtable|asana|slack|hubspot|salesforce|wordpress|squarespace|webflow|canva|premiere|final cut|photoshop|figma)\b/gi,
  /\b\d+ (year|month|week|day)s? ago\b/gi,
  /\blast (week|month|year|quarter|tuesday|wednesday|thursday|friday|monday|saturday|sunday)\b/gi,
  /\byesterday\b/gi,
  /\bthis (morning|afternoon|evening|week|month)\b/gi,
];

// ─── FIRST-PERSON / OWNERSHIP MARKERS ────────────────────────
const OWNERSHIP_MARKERS = [
  /\bI\b/g,
  /\bmy\b/g,
  /\bI'?ve\b/g,
  /\bI'?m\b/g,
  /\bme\b/gi,
  /\bmy (client|customer|student|member)s?\b/gi,
];

// ─── CONTRARIAN / UNIQUE POV MARKERS ────────────────────────
const CONTRARIAN_MARKERS = [
  /\bI disagree\b/gi,
  /\bmost people (think|believe|assume|say|do)\b/gi,
  /\bcontrary to\b/gi,
  /\bthe conventional (wisdom|approach) (is wrong|is broken|fails|misses)\b/gi,
  /\bthis is backwards\b/gi,
  /\bthis is wrong\b/gi,
  /\bthat'?s (a myth|not true|false|wrong|the problem)\b/gi,
  /\beveryone (is wrong|got it wrong|misses|overlooks)\b/gi,
  /\bthe opposite is true\b/gi,
  /\bhere'?s what (no one|nobody) (tells|talks about)\b/gi,
  /\bunpopular opinion\b/gi,
  /\bhot take\b/gi,
  /\bI (push back|take issue|disagree|reject)\b/gi,
];

// ─── ICP / COACHING-SPECIFIC MARKERS ─────────────────────────
const ICP_MARKERS = [
  /\blaunch\b/gi,
  /\benrollment\b/gi,
  /\b(high.?ticket|premium) (offer|program|client|sale|coaching)\b/gi,
  /\bsales call\b/gi,
  /\bwebinar\b/gi,
  /\bfunnel\b/gi,
  /\bcohort\b/gi,
  /\bobjection\b/gi,
  /\bclient win\b/gi,
  /\bniche\b/gi,
  /\bprogram (launch|fill|close)\b/gi,
  /\b(refund|cancel|churn)\b/gi,
  /\b(DM|message) from\b/gi,
  /\b(hater|troll|skeptic)\b/gi,
  /\bguest (podcast|post|speaking|lecture)\b/gi,
  /\b(email list|subscriber|newsletter)\b/gi,
  /\b(LinkedIn|Instagram|TikTok) (post|DM|comment)\b/gi,
  /\b(follower|audience|community)\b/gi,
  /\b(overdeliver|underpromise|overdeliver)\b/gi,
  /\b(onboarding|offboarding)\b/gi,
  /\b(retention|lifetime value|LTV)\b/gi,
  /\b(messenger|inbox|calendar)\b/gi,
  /\b(no.?show|flake|ghost)\b/gi,
  /\b(stripe|paypal|venmo)\b/gi,
  /\b(contract|agreement|proposal)\b/gi,
  /\b(group call|1:1|one.on.one|private call)\b/gi,
];

// ─── SAMPLE TEXT ────────────────────────────────────────────
const SAMPLE_TEXT = `In today's digital landscape, every coach knows that building a personal brand is important. It's essential to note that your online presence can help you unlock your potential and take your business to the next level.

Here are 5 strategies to elevate your coaching business:
1. Optimize your profile for maximum visibility
2. Create actionable insights that move the needle
3. Leverage best practices for content creation
4. Build a scalable solution for client onboarding
5. Streamline your processes for frictionless growth

At the end of the day, success requires dedication and the right mindset. When it comes to growing your coaching business, it's worth noting that consistency is the key to success.

I help coaches transform their businesses with proven strategies. DM me to book a discovery call and let's dive in.`;

// ============================================================
// ANALYSIS ENGINE
// ============================================================
function analyzeContent(text) {
  if (!text || text.trim().length < 20) return null;

  const flags = [];
  const signals = {
    thinking: { positive: [], negative: [] },
    recognition: { positive: [], negative: [] },
    swap: { positive: [], negative: [] },
  };

  // --- 1. AI-GENERIC PHRASE DETECTION ---
  AI_GENERIC_PHRASES.forEach(({ phrase, category, note }) => {
    let match;
    const reFlags = phrase.flags.includes('g') ? phrase.flags : phrase.flags + 'g';
    const regex = new RegExp(phrase.source, reFlags);
    while ((match = regex.exec(text)) !== null) {
      flags.push({
        type: category,
        text: match[0],
        index: match.index,
        note: note,
      });
      if (match.index === regex.lastIndex) regex.lastIndex++;
    }
  });

  // --- 2. SERVICE DESCRIPTION DETECTION ---
  SERVICE_PATTERNS.forEach(({ phrase, type, note }) => {
    let match;
    const reFlags = phrase.flags.includes('g') ? phrase.flags : phrase.flags + 'g';
    const regex = new RegExp(phrase.source, reFlags);
    while ((match = regex.exec(text)) !== null) {
      flags.push({
        type: type,
        text: match[0],
        index: match.index,
        note: note,
      });
      if (match.index === regex.lastIndex) regex.lastIndex++;
    }
  });

  // --- 3. COUNT THINKING MARKERS ---
  let thinkingCount = 0;
  const thinkingMatches = [];
  THINKING_MARKERS.forEach((pattern) => {
    const reFlags = pattern.flags.includes('g') ? pattern.flags : pattern.flags + 'g';
    const regex = new RegExp(pattern.source, reFlags);
    let match;
    while ((match = regex.exec(text)) !== null) {
      thinkingCount++;
      thinkingMatches.push(match[0]);
    }
  });

  // --- 4. COUNT SPECIFICITY MARKERS ---
  let specificityCount = 0;
  const specificityMatches = [];
  SPECIFICITY_MARKERS.forEach((pattern) => {
    const reFlags = pattern.flags.includes('g') ? pattern.flags : pattern.flags + 'g';
    const regex = new RegExp(pattern.source, reFlags);
    let match;
    while ((match = regex.exec(text)) !== null) {
      specificityCount++;
      specificityMatches.push(match[0]);
    }
  });

  // --- 5. COUNT OWNERSHIP MARKERS ---
  let ownershipCount = 0;
  OWNERSHIP_MARKERS.forEach((pattern) => {
    const reFlags = pattern.flags.includes('g') ? pattern.flags : pattern.flags + 'g';
    const regex = new RegExp(pattern.source, reFlags);
    let match;
    while ((match = regex.exec(text)) !== null) {
      ownershipCount++;
    }
  });

  // --- 6. COUNT CONTRARIAN MARKERS ---
  let contrarianCount = 0;
  CONTRARIAN_MARKERS.forEach((pattern) => {
    const reFlags = pattern.flags.includes('g') ? pattern.flags : pattern.flags + 'g';
    const regex = new RegExp(pattern.source, reFlags);
    let match;
    while ((match = regex.exec(text)) !== null) {
      contrarianCount++;
    }
  });

  // --- 6b. COUNT ICP / COACHING-SPECIFIC MARKERS ---
  let icpCount = 0;
  ICP_MARKERS.forEach((pattern) => {
    const reFlags = pattern.flags.includes('g') ? pattern.flags : pattern.flags + 'g';
    const regex = new RegExp(pattern.source, reFlags);
    let match;
    while ((match = regex.exec(text)) !== null) {
      icpCount++;
    }
  });

  // --- 7. COUNT SENTENCES & PARAGRAPHS ---
  const sentences = text.split(/[.!?]+/).filter(s => s.trim().length > 5);
  const sentenceCount = Math.max(sentences.length, 1);
  const words = text.trim().split(/\s+/).filter(Boolean);
  const wordCount = Math.max(words.length, 1);
  const paragraphs = text.split(/\n\n+/).filter(p => p.trim().length > 0);
  const paragraphCount = Math.max(paragraphs.length, 1);

  // --- 8. COUNT FLAG CATEGORIES ---
  const flagByCategory = {
    'ai-generic': flags.filter(f => f.type === 'ai-generic').length,
    'safe-language': flags.filter(f => f.type === 'safe-language').length,
    'over-polishing': flags.filter(f => f.type === 'over-polishing').length,
    'service-desc': flags.filter(f => f.type === 'service-desc').length,
    'broad-agreement': flags.filter(f => f.type === 'broad-agreement').length,
  };

  const serviceDescCount = flagByCategory['service-desc'];
  const safeLangCount = flagByCategory['safe-language'];
  const aiGenericCount = flagByCategory['ai-generic'] + flagByCategory['broad-agreement'];
  const overPolishCount = flagByCategory['over-polishing'];

  // --- 9. SCORE DIMENSION 1: DEMONSTRATED THINKING vs SERVICE DESCRIPTION ---
  let thinkingScore = 50;
  if (thinkingCount > 0) {
    thinkingScore += Math.min(thinkingCount * 8, 30);
    signals.thinking.positive.push(`${thinkingCount} thinking marker${thinkingCount > 1 ? 's' : ''}`);
  }
  if (contrarianCount > 0) {
    thinkingScore += Math.min(contrarianCount * 10, 15);
    signals.thinking.positive.push(`${contrarianCount} contrarian stance${contrarianCount > 1 ? 's' : ''}`);
  }
  if (serviceDescCount > 0) {
    const penalty = Math.min(serviceDescCount * 12, 40);
    thinkingScore -= penalty;
    signals.thinking.negative.push(`${serviceDescCount} service description${serviceDescCount > 1 ? 's' : ''}`);
  }
  if (thinkingCount === 0) {
    thinkingScore -= 15;
    signals.thinking.negative.push('No original thinking detected');
  }
  thinkingScore = Math.max(5, Math.min(100, Math.round(thinkingScore)));

  // --- 10. SCORE DIMENSION 2: SPECIFIC RECOGNITION vs BROAD AGREEMENT ---
  let recognitionScore = 50;
  if (specificityCount > 0) {
    recognitionScore += Math.min(specificityCount * 9, 35);
    signals.recognition.positive.push(`${specificityCount} specific detail${specificityCount > 1 ? 's' : ''}`);
  }
  if (aiGenericCount > 0) {
    const penalty = Math.min(aiGenericCount * 8, 35);
    recognitionScore -= penalty;
    signals.recognition.negative.push(`${aiGenericCount} broad agreement phrase${aiGenericCount > 1 ? 's' : ''}`);
  }
  if (specificityCount === 0) {
    recognitionScore -= 20;
    signals.recognition.negative.push('No specific details detected');
  }
  recognitionScore = Math.max(5, Math.min(100, Math.round(recognitionScore)));

  // --- 11. SCORE DIMENSION 3: BYLINE SWAP TEST ---
  let swapScore = 50;
  if (ownershipCount > 0) {
    const ownershipDensity = ownershipCount / sentenceCount;
    if (ownershipDensity > 0.3) {
      swapScore += 15;
      signals.swap.positive.push('Strong first-person voice');
    } else if (ownershipDensity > 0.1) {
      swapScore += 8;
      signals.swap.positive.push('Some first-person markers');
    }
  } else {
    swapScore -= 20;
    signals.swap.negative.push('No first-person voice');
  }
  if (contrarianCount > 0) {
    swapScore += Math.min(contrarianCount * 12, 25);
    signals.swap.positive.push(`${contrarianCount} unique POV marker${contrarianCount > 1 ? 's' : ''}`);
  }
  const totalGenericFlags = aiGenericCount + safeLangCount + overPolishCount;
  if (totalGenericFlags > 0) {
    const penalty = Math.min(totalGenericFlags * 5, 35);
    swapScore -= penalty;
    signals.swap.negative.push(`${totalGenericFlags} AI-generic indicator${totalGenericFlags > 1 ? 's' : ''}`);
  }
  if (contrarianCount === 0 && ownershipCount < 2) {
    swapScore -= 15;
    signals.swap.negative.push('No unique perspective detected');
  }
  swapScore = Math.max(5, Math.min(100, Math.round(swapScore)));

  // --- 12. OVERALL SCORE ---
  const overallScore = Math.round((thinkingScore + recognitionScore + swapScore) / 3);

  // --- 12b. DIAGNOSTIC FLAGS ---
  const diagnosticFlags = [];
  if (thinkingCount === 0 && contrarianCount === 0) {
    diagnosticFlags.push({
      type: 'missing-thinking',
      text: 'No demonstrated thinking detected',
      note: 'The post contains no causal reasoning ("because"), diagnosis ("the problem is"), or original observation. It reads as description, not thinking.',
    });
  }
  if (specificityCount === 0) {
    diagnosticFlags.push({
      type: 'missing-specificity',
      text: 'No specific ICP recognition details',
      note: 'No numbers, named tools, specific timeframes, or recognizable coaching scenarios found. The reader won\'t feel "seen."',
    });
  }
  if (contrarianCount === 0) {
    diagnosticFlags.push({
      type: 'missing-pov',
      text: 'No unique perspective or contrarian stance',
      note: 'The post takes no position another coach would disagree with. It could be the average of every post on this topic.',
    });
  }
  if (ownershipCount === 0) {
    diagnosticFlags.push({
      type: 'missing-ownership',
      text: 'No first-person voice',
      note: 'The post is written in third person or passive voice. No "I," "my," or "I\'ve seen" markers. The reader can\'t feel a person behind the words.',
    });
  } else if (ownershipCount / sentenceCount < 0.1) {
    diagnosticFlags.push({
      type: 'thin-ownership',
      text: 'Weak first-person voice',
      note: 'First-person markers appear too rarely. The post feels distant and impersonal rather than like a person speaking.',
    });
  }
  if (icpCount === 0) {
    diagnosticFlags.push({
      type: 'missing-icp',
      text: 'No coaching-specific ICP signals',
      note: 'No mentions of launches, enrollment, sales calls, webinars, funnels, objections, client wins, or other coaching-specific scenarios. Name the exact coach and moment this is for.',
    });
  }

  const allFlags = [...flags, ...diagnosticFlags];

  // --- 13. GENERATE REVISION PROMPTS ---
  const prompts = generatePrompts({
    thinkingCount, specificityCount, contrarianCount, ownershipCount,
    serviceDescCount, safeLangCount, aiGenericCount, overPolishCount,
    sentenceCount, wordCount, flags: allFlags, thinkingScore, recognitionScore, swapScore, icpCount,
  });

  // --- 14. BUILD ANNOTATED TEXT ---
  const annotatedSegments = buildAnnotatedText(text, flags);

  return {
    overallScore,
    thinkingScore,
    recognitionScore,
    swapScore,
    flags: allFlags,
    phraseFlags: flags,
    diagnosticFlags,
    prompts,
    signals,
    annotatedSegments,
    stats: { wordCount, sentenceCount, paragraphCount, thinkingCount, specificityCount, ownershipCount, contrarianCount, icpCount },
  };
}

// ============================================================
// REVISION PROMPT GENERATOR
// ============================================================
function generatePrompts(data) {
  const prompts = [];
  const {
    thinkingCount, specificityCount, contrarianCount, ownershipCount,
    serviceDescCount, safeLangCount, aiGenericCount, overPolishCount,
    sentenceCount, flags, thinkingScore, recognitionScore, swapScore, icpCount,
  } = data;
  let num = 1;

  if (safeLangCount > 0) {
    const safeFlags = flags.filter(f => f.type === 'safe-language');
    const examples = safeFlags.slice(0, 3).map(f => `"${f.text}"`).join(', ');
    prompts.push({
      number: num++,
      category: 'Safe Language',
      text: 'Replace every hedging phrase with a direct claim. Instead of "it\'s important to note" or "can help," state what you actually believe. Commit to a position.',
      context: `Detected: ${examples}${safeLangCount > 3 ? `, and ${safeLangCount - 3} more` : ''}`,
    });
  }

  if (aiGenericCount > 0) {
    const aiFlags = flags.filter(f => f.type === 'ai-generic' || f.type === 'broad-agreement');
    const examples = aiFlags.slice(0, 3).map(f => `"${f.text}"`).join(', ');
    prompts.push({
      number: num++,
      category: 'AI-Generic Language',
      text: 'These phrases are the fingerprint of AI-polished content. Delete each one and rewrite the sentence in your own voice — the way you\'d actually say it out loud to a client.',
      context: `Detected: ${examples}${aiGenericCount > 3 ? `, and ${aiGenericCount - 3} more` : ''}`,
    });
  }

  if (overPolishCount > 0) {
    const overFlags = flags.filter(f => f.type === 'over-polishing');
    const examples = overFlags.slice(0, 3).map(f => `"${f.text}"`).join(', ');
    prompts.push({
      number: num++,
      category: 'Over-Polishing',
      text: 'Academic transitions and essay-style closings make this read like a polished paper, not a person thinking out loud. Replace with conversational connectors — or just start the next sentence directly.',
      context: `Detected: ${examples}`,
    });
  }

  if (serviceDescCount > 0 && thinkingScore < 60) {
    const svcFlags = flags.filter(f => f.type === 'service-desc');
    const examples = svcFlags.slice(0, 3).map(f => `"${f.text}"`).join(', ');
    prompts.push({
      number: num++,
      category: 'Service Description Overload',
      text: 'Convert this service description into a diagnosis. Before mentioning what you offer, describe the problem you observe. Lead with the insight, earn the mention. The reader should think "that\'s exactly my situation" before you introduce the solution.',
      context: `Detected: ${examples}`,
    });
  }

  if (thinkingCount === 0) {
    prompts.push({
      number: num++,
      category: 'Missing Demonstrated Thinking',
      text: 'This post contains no causal reasoning, diagnosis, or original observation. Add a "because" sentence. Explain why something happens — the mechanism, the reason, the pattern you see. Show your thinking, not just your conclusion.',
    });
  }

  if (specificityCount === 0) {
    prompts.push({
      number: num++,
      category: 'Lack of Specific Recognition',
      text: 'This post contains no concrete details — no numbers, named tools, specific timeframes, or recognizable scenarios. Replace a broad statement with a specific moment your ICP has actually experienced. Name the situation, the symptom, the exact feeling.',
    });
  } else if (specificityCount < 2 && recognitionScore < 65) {
    prompts.push({
      number: num++,
      category: 'Thin Specificity',
      text: 'You have one specific detail — add two more. Anchor a claim with a number, a named tool, a timeframe, or a concrete scenario the ICP would immediately recognize.',
    });
  }

  if (contrarianCount === 0) {
    prompts.push({
      number: num++,
      category: 'No Unique Perspective',
      text: 'State a belief that another coach in your space might disagree with. Take a position. If the average of every post on this topic would produce your draft, you haven\'t said anything yet. What do you actually believe that others don\'t?',
    });
  }

  if (swapScore < 55) {
    prompts.push({
      number: num++,
      category: 'Byline Swap Risk',
      text: 'This post could be published under any coach\'s name. Add a sentence only you could write — reference a specific client experience, a personal realization, or a belief you\'ve formed through your work. Make it unmistakably yours.',
    });
  }

  const listicleMatch = flags.filter(f => /\d+ (reasons|ways|tips|strategies)/.test(f.text));
  if (listicleMatch.length > 0) {
    prompts.push({
      number: num++,
      category: 'Listicle Structure',
      text: 'The numbered-list format signals templated content. Consider restructuring as a single argument or narrative. If you keep the list, make each point a specific insight — not a generic tip anyone could write.',
    });
  }

  if (ownershipCount > 0 && ownershipCount / sentenceCount < 0.15) {
    prompts.push({
      number: num++,
      category: 'Weak First-Person Voice',
      text: 'Your first-person voice appears too rarely. Weave in more "I" statements — not about your services, but about your observations, beliefs, and experiences. The reader should feel a person behind the words.',
    });
  } else if (ownershipCount === 0) {
    prompts.push({
      number: num++,
      category: 'No First-Person Voice',
      text: 'This post is written in the third person or passive voice. Shift to first-person. Use "I," "my," "I\'ve seen." Let the reader hear you, not a narrator.',
    });
  }

  if (icpCount === 0) {
    prompts.push({
      number: num++,
      category: 'Missing ICP Relevance',
      text: 'This post contains no coaching-specific scenarios — no launches, enrollment, sales calls, webinars, objections, client wins, or recognizable coaching moments. Name the exact coach and situation this is for. What specific moment in their journey would make them stop scrolling?',
    });
  }

  if (prompts.length === 0) {
    prompts.push({
      number: 1,
      category: 'Strong Content',
      text: 'This post passes the Swap Test with strong signals across all dimensions. No major AI-generic indicators detected. Before publishing, do one final read: does this sound like you speaking, or like you writing?',
    });
  }

  return prompts;
}

// ============================================================
// ANNOTATED TEXT BUILDER
// ============================================================
function buildAnnotatedText(text, flags) {
  if (flags.length === 0) return [{ text, flagged: false }];

  const sorted = [...flags].sort((a, b) => a.index - b.index);
  const merged = [];
  for (const flag of sorted) {
    const last = merged[merged.length - 1];
    if (last && flag.index <= last.index + last.text.length) {
      const end = flag.index + flag.text.length;
      const lastEnd = last.index + last.text.length;
      if (end > lastEnd) {
        last.text = text.substring(last.index, end);
      }
      last.types = last.types || new Set([last.type]);
      last.types.add(flag.type);
    } else {
      merged.push({
        index: flag.index,
        text: flag.text,
        type: flag.type,
        types: new Set([flag.type]),
        note: flag.note,
      });
    }
  }

  const segments = [];
  let lastEnd = 0;
  for (const flag of merged) {
    if (flag.index > lastEnd) {
      segments.push({ text: text.substring(lastEnd, flag.index), flagged: false });
    }
    const types = Array.from(flag.types);
    const dominantType = types.includes('ai-generic') ? 'ai-generic'
      : types.includes('safe-language') ? 'safe-language'
      : types.includes('over-polishing') ? 'over-polishing'
      : types[0];
    segments.push({
      text: flag.text,
      flagged: true,
      type: dominantType,
      note: flag.note,
    });
    lastEnd = flag.index + flag.text.length;
  }
  if (lastEnd < text.length) {
    segments.push({ text: text.substring(lastEnd), flagged: false });
  }

  return segments;
}

// ============================================================
// SCORE HELPERS
// ============================================================
function getScoreColor(score) {
  if (score >= 70) return 'strong';
  if (score >= 45) return 'mid';
  return 'weak';
}

function getVerdict(score) {
  if (score >= 80) {
    return {
      label: 'Distinctive — passes the Swap Test',
      summary: 'This content demonstrates strong original thinking, specific recognition, and a perspective that could only be yours. Minor polish may help, but the foundation is sharp and ICP-relevant.',
    };
  } else if (score >= 65) {
    return {
      label: 'Close — needs sharpening',
      summary: 'The content has personality and some specific thinking, but a few AI-generic patterns dilute your voice. Address the flagged passages and revision prompts to make it unmistakably yours.',
    };
  } else if (score >= 45) {
    return {
      label: 'At risk — reads as AI-polished',
      summary: 'Several AI-generic indicators are present. The content could be attributed to multiple coaches. Focus on the revision prompts to inject demonstrated thinking, specific recognition, and unique perspective.',
    };
  } else {
    return {
      label: 'Fails the Swap Test — too generic',
      summary: 'This content is highly swappable. Any coach could publish it word-for-word. The AI-generic indicators are dominant. Use the revision prompts below to rebuild it around your unique point of view before publishing.',
    };
  }
}

function getDimensionLabel(score, dimension) {
  if (score >= 70) {
    const labels = {
      thinking: 'Strong demonstrated thinking',
      recognition: 'Strong specific recognition',
      swap: 'Strong owner signal',
    };
    return labels[dimension];
  } else if (score >= 45) {
    const labels = {
      thinking: 'Mixed — thinking and service language',
      recognition: 'Some specificity, mostly broad',
      swap: 'Needs sharper POV',
    };
    return labels[dimension];
  } else {
    const labels = {
      thinking: 'Service description, not thinking',
      recognition: 'Broad agreement only',
      swap: 'Easily swappable',
    };
    return labels[dimension];
  }
}

// ============================================================
// UI RENDERING
// ============================================================
function renderResults(result) {
  const resultsSection = document.getElementById('results');
  resultsSection.hidden = false;

  const scoreColor = getScoreColor(result.overallScore);
  const verdict = getVerdict(result.overallScore);
  document.getElementById('overall-score').textContent = result.overallScore;
  document.getElementById('overall-score').className = 'score-number score-color-' + scoreColor;
  document.getElementById('verdict-label').textContent = verdict.label;
  document.getElementById('verdict-summary').textContent = verdict.summary;

  renderDimension('thinking', result.thinkingScore, result.signals.thinking, result);
  renderDimension('recognition', result.recognitionScore, result.signals.recognition, result);
  renderDimension('swap', result.swapScore, result.signals.swap, result);

  renderFlags(result.flags);
  renderPrompts(result.prompts);
  renderAnnotated(result.annotatedSegments);

  resultsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function renderDimension(dim, score, signals, result) {
  const color = getScoreColor(score);
  const fill = document.getElementById(`${dim}-fill`);
  const scoreEl = document.getElementById(`${dim}-score`);
  const descEl = document.getElementById(`${dim}-desc`);
  const signalsEl = document.getElementById(`${dim}-signals`);

  fill.className = 'score-fill fill-' + color;
  fill.style.width = score + '%';
  scoreEl.textContent = score;
  scoreEl.className = 'dimension-score-value score-color-' + color;
  descEl.textContent = getDimensionLabel(score, dim);

  signalsEl.innerHTML = '';
  signals.positive.forEach(s => {
    const tag = document.createElement('span');
    tag.className = 'signal-tag signal-positive';
    tag.textContent = '+ ' + s;
    signalsEl.appendChild(tag);
  });
  signals.negative.forEach(s => {
    const tag = document.createElement('span');
    tag.className = 'signal-tag signal-negative';
    tag.textContent = '− ' + s;
    signalsEl.appendChild(tag);
  });
}

function renderFlags(flags) {
  const grid = document.getElementById('flags-grid');
  grid.innerHTML = '';

  if (flags.length === 0) {
    const el = document.createElement('div');
    el.className = 'no-flags';
    el.textContent = 'No AI-generic indicators detected. Strong signal.';
    grid.appendChild(el);
    return;
  }

  const grouped = {};
  flags.forEach(f => {
    if (!grouped[f.type]) grouped[f.type] = [];
    grouped[f.type].push(f);
  });

  const typeLabels = {
    'ai-generic': 'AI-Generic Phrase',
    'safe-language': 'Safe Language',
    'over-polishing': 'Over-Polishing',
    'service-desc': 'Service Description',
    'broad-agreement': 'Broad Agreement',
    'missing-thinking': 'Missing: Demonstrated Thinking',
    'missing-specificity': 'Missing: Specific Recognition',
    'missing-pov': 'Missing: Unique Perspective',
    'missing-ownership': 'Missing: First-Person Voice',
    'thin-ownership': 'Thin: First-Person Voice',
    'missing-icp': 'Missing: ICP Relevance',
  };

  const typeOrder = ['safe-language', 'ai-generic', 'over-polishing', 'service-desc', 'broad-agreement', 'missing-thinking', 'missing-specificity', 'missing-pov', 'missing-ownership', 'thin-ownership', 'missing-icp'];
  typeOrder.forEach(type => {
    if (!grouped[type]) return;
    const group = grouped[type];
    group.forEach(flag => {
      const card = document.createElement('div');
      card.className = 'flag-card';

      const typeEl = document.createElement('span');
      typeEl.className = 'flag-type ' + type;
      typeEl.textContent = typeLabels[type] || type;

      const textEl = document.createElement('div');
      textEl.className = 'flag-text';
      if (flag.text && flag.index !== undefined) {
        textEl.innerHTML = `<span class="flag-quote">${escapeHtml(flag.text)}</span> — ${escapeHtml(flag.note)}`;
      } else {
        textEl.innerHTML = `<strong>${escapeHtml(flag.text)}</strong> — ${escapeHtml(flag.note)}`;
      }

      card.appendChild(typeEl);
      card.appendChild(textEl);
      grid.appendChild(card);
    });
  });
}

function renderPrompts(prompts) {
  const list = document.getElementById('prompts-list');
  list.innerHTML = '';

  prompts.forEach(prompt => {
    const card = document.createElement('div');
    card.className = 'prompt-card';

    const num = document.createElement('span');
    num.className = 'prompt-number';
    num.textContent = prompt.number;

    const body = document.createElement('div');
    body.className = 'prompt-body';

    const cat = document.createElement('div');
    cat.className = 'prompt-category';
    cat.textContent = prompt.category;

    const text = document.createElement('p');
    text.className = 'prompt-text';
    text.textContent = prompt.text;

    body.appendChild(cat);
    body.appendChild(text);

    if (prompt.context) {
      const ctx = document.createElement('p');
      ctx.className = 'prompt-context';
      ctx.textContent = prompt.context;
      body.appendChild(ctx);
    }

    card.appendChild(num);
    card.appendChild(body);
    list.appendChild(card);
  });
}

function renderAnnotated(segments) {
  const container = document.getElementById('annotated-draft');
  container.innerHTML = '';

  segments.forEach(seg => {
    if (seg.flagged) {
      const span = document.createElement('span');
      span.className = 'annotate-flag';
      span.dataset.type = seg.type;
      span.textContent = seg.text;
      span.title = seg.note || '';
      container.appendChild(span);
    } else {
      container.appendChild(document.createTextNode(seg.text));
    }
  });
}

function escapeHtml(str) {
  const div = document.createElement('div');
  div.textContent = str;
  return div.innerHTML;
}

// ============================================================
// API & SERVICE WORKER CONFIG
// ============================================================
const API_BASE = (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1')
  ? 'http://localhost:8000'
  : (window.API_BASE_URL || 'http://localhost:8000');

let currentResult = null;
let revisedText = '';
const generatedPlatforms = new Set();

const PLATFORM_DEFS = {
  instagram_carousel: { name: 'Instagram Carousel', icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/></svg>' },
  instagram_stories: { name: 'Instagram Stories', icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="5"/></svg>' },
  instagram_reels: { name: 'Instagram Reels', icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 3v6M15 3v6"/><path d="M10 12l5 3-5 3z" fill="currentColor"/></svg>' },
  facebook: { name: 'Facebook', icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 2h-3a5 5 0 00-5 5v3H8v4h2v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg>' },
  substack_note: { name: 'Substack Note', icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><path d="M14 2v6h6M16 13H8M16 17H8M10 9H8"/></svg>' },
  substack_article: { name: 'Substack Article', icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 3h6a4 4 0 014 4v14a3 3 0 00-3-3H2z"/><path d="M22 3h-6a4 4 0 00-4 4v14a3 3 0 013-3h7z"/></svg>' },
  threads: { name: 'Threads', icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2L2 7l10 5 10-5z"/><path d="M2 17l10 5 10-5M2 12l10 5 10-5"/></svg>' },
};

// Register Service Worker for PWA
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('./sw.js')
      .then(reg => console.log('Service Worker registered:', reg.scope))
      .catch(err => console.error('Service Worker registration failed:', err));
  });
}

// ============================================================
// EVENT HANDLERS
// ============================================================
document.addEventListener('DOMContentLoaded', () => {
  const textarea = document.getElementById('draft-input');
  const runBtn = document.getElementById('run-btn');
  const clearBtn = document.getElementById('clear-btn');
  const sampleBtn = document.getElementById('sample-btn');
  const charCount = document.getElementById('char-count');
  const rubricToggle = document.getElementById('rubric-toggle');
  const rubricContent = document.getElementById('rubric-content');

  // Character count
  textarea.addEventListener('input', () => {
    const len = textarea.value.length;
    charCount.textContent = `${len} character${len !== 1 ? 's' : ''}`;
  });

  // Run analysis
  runBtn.addEventListener('click', () => {
    const text = textarea.value.trim();
    if (text.length < 20) {
      textarea.focus();
      textarea.style.borderColor = 'var(--color-weak)';
      setTimeout(() => { textarea.style.borderColor = ''; }, 2000);
      return;
    }
    const result = analyzeContent(text);
    if (result) {
      currentResult = result;
      revisedText = '';
      generatedPlatforms.clear();
      document.getElementById('revise-output').hidden = true;
      document.getElementById('copy-revised-btn').hidden = true;
      document.getElementById('adapt-section').hidden = true;
      document.getElementById('adapt-output').innerHTML = '';
      renderResults(result);
    }
  });

  // Clear
  clearBtn.addEventListener('click', () => {
    textarea.value = '';
    charCount.textContent = '0 characters';
    document.getElementById('results').hidden = true;
    textarea.focus();
  });

  // Sample text
  sampleBtn.addEventListener('click', () => {
    textarea.value = SAMPLE_TEXT;
    charCount.textContent = `${SAMPLE_TEXT.length} characters`;
    textarea.focus();
  });

  // Rubric toggle
  rubricToggle.addEventListener('click', () => {
    const expanded = rubricToggle.getAttribute('aria-expanded') === 'true';
    rubricToggle.setAttribute('aria-expanded', !expanded);
    rubricContent.hidden = expanded;
  });

  // Theme toggle
  const themeToggleBtn = document.querySelector('[data-theme-toggle]');
  if (themeToggleBtn) {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    let currentTheme = prefersDark ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', currentTheme);

    const updateThemeIcon = (theme) => {
      themeToggleBtn.setAttribute('aria-label', 'Switch to ' + (theme === 'dark' ? 'light' : 'dark') + ' mode');
      themeToggleBtn.innerHTML = theme === 'dark'
        ? '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>'
        : '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>';
    };
    updateThemeIcon(currentTheme);

    themeToggleBtn.addEventListener('click', () => {
      currentTheme = currentTheme === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', currentTheme);
      updateThemeIcon(currentTheme);
    });
  }

  // Keyboard shortcut: Ctrl/Cmd + Enter to run
  textarea.addEventListener('keydown', (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
      e.preventDefault();
      runBtn.click();
    }
  });

  // === Revise Button ===
  const reviseBtn = document.getElementById('revise-btn');
  const reviseLoading = document.getElementById('revise-loading');
  const reviseError = document.getElementById('revise-error');
  const reviseOutput = document.getElementById('revise-output');
  const copyRevisedBtn = document.getElementById('copy-revised-btn');
  const adaptSection = document.getElementById('adapt-section');

  if (reviseBtn) {
    reviseBtn.addEventListener('click', async () => {
      if (!currentResult) return;

      reviseBtn.disabled = true;
      reviseLoading.hidden = false;
      reviseError.hidden = true;
      reviseOutput.hidden = true;
      copyRevisedBtn.hidden = true;

      try {
        const res = await fetch(`${API_BASE}/api/revise`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            original_text: textarea.value.trim(),
            flags: currentResult.flags,
            prompts: currentResult.prompts,
            scores: {
              overall: currentResult.overallScore,
              thinking: currentResult.thinkingScore,
              recognition: currentResult.recognitionScore,
              swap: currentResult.swapScore,
            },
          }),
        });

        if (!res.ok) throw new Error(`Server error (${res.status})`);
        const data = await res.json();
        revisedText = data.revised_text;

        reviseOutput.textContent = revisedText;
        reviseOutput.hidden = false;
        copyRevisedBtn.hidden = false;
        adaptSection.hidden = false;
        renderPlatformButtons();
      } catch (err) {
        reviseError.textContent = `Unable to connect to revision backend (${err.message}). Ensure the Python FastAPI server is running on ${API_BASE}.`;
        reviseError.hidden = false;
      } finally {
        reviseBtn.disabled = false;
        reviseLoading.hidden = true;
      }
    });
  }

  // Copy revised text
  if (copyRevisedBtn) {
    copyRevisedBtn.addEventListener('click', () => {
      navigator.clipboard.writeText(revisedText).then(() => {
        copyRevisedBtn.textContent = 'Copied';
        setTimeout(() => { copyRevisedBtn.textContent = 'Copy Text'; }, 2000);
      });
    });
  }

  // === Platform Adaptation ===
  function renderPlatformButtons() {
    const grid = document.getElementById('platform-grid');
    grid.innerHTML = '';
    Object.entries(PLATFORM_DEFS).forEach(([key, def]) => {
      const btn = document.createElement('button');
      btn.className = 'platform-btn' + (generatedPlatforms.has(key) ? ' generated' : '');
      btn.dataset.platform = key;
      btn.type = 'button';
      btn.innerHTML = `<span class="platform-icon">${def.icon}</span><span>${def.name}</span>`;
      btn.addEventListener('click', () => adaptToPlatform(key));
      grid.appendChild(btn);
    });
  }

  async function adaptToPlatform(platformKey) {
    if (!revisedText) return;

    const platformDef = PLATFORM_DEFS[platformKey];
    const clickedBtn = document.querySelector(`.platform-btn[data-platform="${platformKey}"]`);
    clickedBtn.disabled = true;

    const loading = document.getElementById('adapt-loading');
    const loadingText = document.getElementById('adapt-loading-text');
    const error = document.getElementById('adapt-error');
    const output = document.getElementById('adapt-output');

    loadingText.textContent = `Adapting for ${platformDef.name}...`;
    loading.hidden = false;
    error.hidden = true;

    try {
      const res = await fetch(`${API_BASE}/api/adapt`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          revised_text: revisedText,
          platform: platformKey,
        }),
      });

      if (!res.ok) throw new Error(`Server error (${res.status})`);
      const data = await res.json();

      generatedPlatforms.add(platformKey);
      clickedBtn.classList.add('generated');

      const existing = document.getElementById(`result-${platformKey}`);
      if (existing) existing.remove();

      const resultCard = document.createElement('div');
      resultCard.className = 'platform-result';
      resultCard.id = `result-${platformKey}`;
      resultCard.innerHTML = `
        <div class="platform-result-header">
          <span class="platform-result-title">${platformDef.name}</span>
          <div class="platform-result-actions">
            <button class="platform-copy-btn" type="button">Copy</button>
          </div>
        </div>
        <div class="platform-result-body"></div>
      `;
      resultCard.querySelector('.platform-result-body').textContent = data.adapted_text;

      const platformOrder = Object.keys(PLATFORM_DEFS);
      const insertIndex = platformOrder.indexOf(platformKey);
      const existingResults = output.querySelectorAll('.platform-result');
      let inserted = false;
      for (const existingResult of existingResults) {
        const existingKey = existingResult.id.replace('result-', '');
        if (platformOrder.indexOf(existingKey) > insertIndex) {
          output.insertBefore(resultCard, existingResult);
          inserted = true;
          break;
        }
      }
      if (!inserted) output.appendChild(resultCard);

      resultCard.querySelector('.platform-copy-btn').addEventListener('click', (e) => {
        const btn = e.target;
        navigator.clipboard.writeText(data.adapted_text).then(() => {
          btn.textContent = 'Copied';
          setTimeout(() => { btn.textContent = 'Copy'; }, 2000);
        });
      });
    } catch (err) {
      error.textContent = `Unable to adapt for ${platformDef.name}. ${err.message}. Please try again.`;
      error.hidden = false;
    } finally {
      clickedBtn.disabled = false;
      loading.hidden = true;
    }
  }
});
