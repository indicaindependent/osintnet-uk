addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request));
});

async function handleRequest(request) {
  const url = new URL(request.url);
    if (url.pathname === '/robots.txt') {
      return new Response('User-agent: *\nAllow: /\nSitemap: https://osintnet.uk/sitemap.xml', {
        headers: { 'Content-Type': 'text/plain' }
      });
    }

    if (url.pathname === '/sitemap.xml') {
      return new Response(`<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url><loc>https://osintnet.uk/</loc><changefreq>weekly</changefreq><priority>1.0</priority></url>
</urlset>`, { headers: { 'Content-Type': 'application/xml' } });
    }

    const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8"/>
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Indica Independent Media — Open Intelligence Tools</title>
  <meta name="description" content="Indica Independent Media — open-source intelligence tools and AI platforms built for communities that need them most. SENTINEL, FaceHeatMap, StraitTracker, AiecoSense, VoxTerrae and more."/>
  <meta name="keywords" content="OSINT, surveillance transparency, facial recognition tracking, environmental justice AI, conflict intelligence, Cloudflare Workers, open source intelligence"/>
  <meta property="og:title" content="Indica Independent Media — Open Intelligence Tools"/>
  <meta property="og:description" content="Open-source intelligence and AI platforms built for vulnerable communities. Independent. Edge-native. Always watching."/>
  <meta property="og:url" content="https://osintnet.uk"/>
  <meta property="og:type" content="website"/>
  <meta name="twitter:card" content="summary_large_image"/>
  <meta name="twitter:title" content="Indica Independent Media — Open Intelligence Tools"/>
  <meta name="theme-color" content="#ef4444"/>
  <link rel="preconnect" href="https://fonts.googleapis.com"/>
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
  <link href="https://fonts.googleapis.com/css2?family=Syne:wght@600;700;800&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet"/>
  <style>
    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

    :root {
      --bg:        #08080f;
      --surface:   #0f0f1a;
      --elevated:  #161625;
      --red:       #ef4444;
      --red-dim:   #c73737;
      --red-soft:  #f87171;
      --blue:      #60a5fa;
      --green:     #22c55e;
      --amber:     #f59e0b;
      --text:      #f8fafc;
      --muted:     #94a3b8;
      --faint:     #475569;
      --border:    #1e1e35;
      --border-soft: #252538;
    }

    html { scroll-behavior: smooth; }

    body {
      background: var(--bg);
      color: var(--text);
      font-family: 'Inter', sans-serif;
      line-height: 1.6;
      overflow-x: hidden;
    }

    ::-webkit-scrollbar { width: 4px; }
    ::-webkit-scrollbar-track { background: var(--bg); }
    ::-webkit-scrollbar-thumb { background: var(--red); border-radius: 2px; }

    /* ── NAV ── */
    nav {
      position: fixed; top: 0; left: 0; right: 0; z-index: 100;
      padding: 1rem 1.5rem;
      display: flex; align-items: center; justify-content: space-between;
      background: rgba(8,8,15,0.88);
      backdrop-filter: blur(14px);
      border-bottom: 1px solid var(--border);
    }
    .nav-logo {
      font-family: 'JetBrains Mono', monospace;
      font-size: 0.85rem;
      color: var(--red);
      text-decoration: none;
      letter-spacing: 0.05em;
    }
    .nav-logo span { color: var(--muted); }
    .nav-links { display: flex; gap: 1.75rem; }
    .nav-links a {
      color: var(--muted);
      text-decoration: none;
      font-size: 0.83rem;
      font-weight: 500;
      letter-spacing: 0.03em;
      transition: color 0.2s;
    }
    .nav-links a:hover { color: var(--text); }
    @media (max-width: 600px) { .nav-links { display: none; } }

    /* ── HERO ── */
    #hero {
      min-height: 100vh;
      display: flex; flex-direction: column;
      align-items: center; justify-content: center;
      text-align: center;
      padding: 7rem 1.5rem 4rem;
      position: relative;
      overflow: hidden;
    }

    #hero::before {
      content: '';
      position: absolute; inset: 0;
      background-image: radial-gradient(circle, rgba(255,255,255,0.03) 1px, transparent 1px);
      background-size: 28px 28px;
      z-index: 0;
    }

    .glow-red {
      position: absolute;
      width: 500px; height: 500px;
      background: radial-gradient(circle, rgba(239,68,68,0.13) 0%, transparent 70%);
      top: -80px; left: -80px;
      pointer-events: none; z-index: 0;
      animation: glow-pulse 7s ease-in-out infinite;
    }
    .glow-blue {
      position: absolute;
      width: 420px; height: 420px;
      background: radial-gradient(circle, rgba(96,165,250,0.09) 0%, transparent 70%);
      bottom: -60px; right: -60px;
      pointer-events: none; z-index: 0;
      animation: glow-pulse 9s ease-in-out infinite reverse;
    }
    @keyframes glow-pulse {
      0%, 100% { opacity: 0.6; transform: scale(1); }
      50% { opacity: 1; transform: scale(1.07); }
    }

    .hero-content {
      position: relative; z-index: 1;
      max-width: 820px;
      width: 100%;
    }

    .hero-badge {
      display: inline-flex; align-items: center; gap: 0.5rem;
      background: rgba(239,68,68,0.08);
      border: 1px solid rgba(239,68,68,0.25);
      border-radius: 100px;
      padding: 0.35rem 0.9rem;
      font-family: 'JetBrains Mono', monospace;
      font-size: 0.7rem;
      color: var(--red-soft);
      letter-spacing: 0.1em;
      margin-bottom: 2rem;
    }
    .hero-badge-dot {
      width: 6px; height: 6px;
      background: var(--green);
      border-radius: 50%;
      animation: blink 2.5s ease-in-out infinite;
      flex-shrink: 0;
    }
    @keyframes blink {
      0%, 100% { opacity: 1; }
      50% { opacity: 0.25; }
    }

    /* ── HERO TITLE — softened, responsive ── */
    .hero-title {
      font-family: 'Syne', sans-serif;
      font-weight: 800;
      line-height: 1.08;
      letter-spacing: -0.025em;
      margin-bottom: 1.5rem;
      word-break: break-word;
      overflow-wrap: break-word;
    }

    /* Eyebrow — small label above */
    .hero-eyebrow {
      display: block;
      font-family: 'JetBrains Mono', monospace;
      font-size: clamp(0.65rem, 2vw, 0.8rem);
      font-weight: 400;
      letter-spacing: 0.18em;
      color: var(--muted);
      text-transform: uppercase;
      margin-bottom: 0.6rem;
    }

    /* Main line — the "WE BUILD" concept, reimagined */
    .hero-line-main {
      display: block;
      font-size: clamp(2rem, 6.5vw, 5rem);
      color: var(--text);
    }

    /* Accent line — red, slightly smaller */
    .hero-line-accent {
      display: block;
      font-size: clamp(1.7rem, 5.5vw, 4.2rem);
      color: var(--red-soft);
    }

    /* Sub line — muted, smallest */
    .hero-line-sub {
      display: block;
      font-size: clamp(1.1rem, 3.5vw, 2.4rem);
      color: var(--muted);
      font-weight: 600;
    }

    @media (max-width: 430px) {
      .hero-line-main  { font-size: clamp(1.75rem, 8vw, 2.5rem); }
      .hero-line-accent { font-size: clamp(1.5rem, 7vw, 2.1rem); }
      .hero-line-sub   { font-size: clamp(1rem, 5vw, 1.4rem); }
    }

    .hero-sub {
      font-size: clamp(0.92rem, 2vw, 1.15rem);
      color: var(--muted);
      max-width: 560px;
      margin: 0 auto 2.5rem;
      line-height: 1.75;
      padding: 0 0.5rem;
    }

    .hero-ctas { display: flex; gap: 0.85rem; justify-content: center; flex-wrap: wrap; }
    .btn-primary {
      background: var(--red);
      color: #fff;
      padding: 0.8rem 1.75rem;
      border-radius: 8px;
      text-decoration: none;
      font-weight: 600;
      font-size: 0.9rem;
      transition: background 0.2s, transform 0.15s;
      display: inline-flex; align-items: center; gap: 0.45rem;
    }
    .btn-primary:hover { background: var(--red-dim); transform: translateY(-1px); }
    .btn-secondary {
      background: transparent;
      color: var(--text);
      padding: 0.8rem 1.75rem;
      border-radius: 8px;
      border: 1px solid var(--border-soft);
      text-decoration: none;
      font-weight: 500;
      font-size: 0.9rem;
      transition: border-color 0.2s, transform 0.15s;
      display: inline-flex; align-items: center; gap: 0.45rem;
    }
    .btn-secondary:hover { border-color: var(--muted); transform: translateY(-1px); }

    .scroll-hint {
      position: absolute; bottom: 1.75rem; left: 50%; transform: translateX(-50%);
      display: flex; flex-direction: column; align-items: center; gap: 0.4rem;
      color: var(--faint); font-size: 0.68rem; letter-spacing: 0.12em;
      z-index: 1;
    }
    .scroll-chevron {
      width: 18px; height: 18px;
      border-right: 2px solid var(--faint);
      border-bottom: 2px solid var(--faint);
      transform: rotate(45deg);
      animation: bounce 2.2s ease-in-out infinite;
    }
    @keyframes bounce {
      0%, 100% { transform: rotate(45deg) translateY(0); }
      50% { transform: rotate(45deg) translateY(5px); }
    }

    /* ── MISSION STRIP ── */
    .mission-strip {
      background: linear-gradient(135deg, rgba(239,68,68,0.07) 0%, rgba(96,165,250,0.04) 100%);
      border-top: 1px solid rgba(239,68,68,0.15);
      border-bottom: 1px solid rgba(239,68,68,0.15);
      padding: 1.75rem 1.5rem;
      text-align: center;
    }
    .mission-strip p {
      font-family: 'Syne', sans-serif;
      font-size: clamp(0.95rem, 2.2vw, 1.3rem);
      font-weight: 600;
      color: var(--text);
      max-width: 750px;
      margin: 0 auto;
      line-height: 1.5;
    }
    .mission-strip p em { color: var(--red-soft); font-style: normal; }

    /* ── SECTIONS ── */
    section { padding: 4.5rem 1.5rem; }
    .section-inner { max-width: 1100px; margin: 0 auto; }
    .section-label {
      font-family: 'JetBrains Mono', monospace;
      font-size: 0.68rem;
      letter-spacing: 0.15em;
      color: var(--red);
      text-transform: uppercase;
      margin-bottom: 0.6rem;
    }
    .section-title {
      font-family: 'Syne', sans-serif;
      font-size: clamp(1.6rem, 3.5vw, 2.6rem);
      font-weight: 800;
      margin-bottom: 0.75rem;
      line-height: 1.18;
    }
    .section-sub {
      color: var(--muted);
      font-size: 1rem;
      max-width: 560px;
      margin-bottom: 2.75rem;
      line-height: 1.65;
    }

    /* ── TOOL CARDS ── */
    .tools-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 1.1rem;
    }
    @media (max-width: 900px) { .tools-grid { grid-template-columns: repeat(2, 1fr); } }
    @media (max-width: 550px) { .tools-grid { grid-template-columns: 1fr; } }

    .tool-card {
      background: var(--surface);
      border: 1px solid var(--border);
      border-radius: 12px;
      padding: 1.5rem;
      display: flex; flex-direction: column;
      transition: border-color 0.25s, transform 0.2s, box-shadow 0.25s;
      text-decoration: none;
      color: inherit;
      cursor: pointer;
      position: relative;
      overflow: hidden;
    }
    .tool-card::before {
      content: '';
      position: absolute; top: 0; left: 0; right: 0; height: 2px;
      opacity: 0; transition: opacity 0.25s;
    }
    .tool-card:hover { transform: translateY(-3px); }
    .tool-card:hover::before { opacity: 1; }

    .tool-card.osint { border-color: rgba(239,68,68,0.2); }
    .tool-card.osint:hover { border-color: var(--red); box-shadow: 0 8px 32px rgba(239,68,68,0.12); }
    .tool-card.osint::before { background: var(--red); }

    .tool-card.ai { border-color: rgba(96,165,250,0.2); }
    .tool-card.ai:hover { border-color: var(--blue); box-shadow: 0 8px 32px rgba(96,165,250,0.1); }
    .tool-card.ai::before { background: var(--blue); }

    .tool-card.intel { border-color: rgba(148,163,184,0.2); }
    .tool-card.intel:hover { border-color: var(--muted); box-shadow: 0 8px 32px rgba(148,163,184,0.08); }
    .tool-card.intel::before { background: var(--muted); }

    /* SENTINEL card — special treatment */
    .tool-card.sentinel-card {
      border-color: rgba(245,158,11,0.25);
      background: linear-gradient(135deg, rgba(245,158,11,0.05) 0%, rgba(239,68,68,0.05) 100%);
      grid-column: span 1;
    }
    .tool-card.sentinel-card:hover {
      border-color: var(--amber);
      box-shadow: 0 8px 36px rgba(245,158,11,0.15);
    }
    .tool-card.sentinel-card::before { background: linear-gradient(90deg, var(--amber), var(--red)); }

    .card-header {
      display: flex; justify-content: space-between; align-items: center;
      margin-bottom: 1rem;
    }

    .card-badge {
      font-family: 'JetBrains Mono', monospace;
      font-size: 0.62rem;
      font-weight: 500;
      letter-spacing: 0.1em;
      padding: 0.2rem 0.55rem;
      border-radius: 4px;
    }
    .badge-osint  { background: rgba(239,68,68,0.15); color: var(--red-soft); }
    .badge-ai     { background: rgba(96,165,250,0.15); color: var(--blue); }
    .badge-intel  { background: rgba(148,163,184,0.15); color: var(--muted); }
    .badge-agent  { background: rgba(245,158,11,0.18); color: var(--amber); }

    .live-dot {
      font-family: 'JetBrains Mono', monospace;
      font-size: 0.62rem;
      color: var(--green);
      letter-spacing: 0.08em;
      display: flex; align-items: center; gap: 0.3rem;
    }
    .live-dot::before {
      content: '';
      width: 5px; height: 5px;
      background: var(--green);
      border-radius: 50%;
      animation: blink 2s infinite;
      flex-shrink: 0;
    }

    .tool-icon {
      font-size: 1.9rem;
      margin-bottom: 0.7rem;
      line-height: 1;
    }
    .tool-name {
      font-family: 'Syne', sans-serif;
      font-size: 1.05rem;
      font-weight: 700;
      color: var(--text);
      margin-bottom: 0.5rem;
    }
    .tool-desc {
      font-size: 0.84rem;
      color: var(--muted);
      line-height: 1.6;
      flex: 1;
      margin-bottom: 1rem;
    }
    .tool-link {
      font-family: 'JetBrains Mono', monospace;
      font-size: 0.75rem;
      color: var(--faint);
      margin-top: auto;
      transition: color 0.2s;
    }
    .tool-card:hover .tool-link { color: var(--text); }
    .sentinel-card .tool-link { color: rgba(245,158,11,0.5); }
    .sentinel-card:hover .tool-link { color: var(--amber); }

    /* SENTINEL featured badge */
    .sentinel-featured {
      display: inline-flex; align-items: center; gap: 0.35rem;
      background: rgba(245,158,11,0.1);
      border: 1px solid rgba(245,158,11,0.25);
      border-radius: 4px;
      padding: 0.15rem 0.45rem;
      font-family: 'JetBrains Mono', monospace;
      font-size: 0.58rem;
      color: var(--amber);
      letter-spacing: 0.08em;
      margin-top: 0.4rem;
      width: fit-content;
    }

    /* ── STACK ── */
    .stack-grid {
      display: flex; flex-wrap: wrap; gap: 0.75rem;
      justify-content: center;
      margin-bottom: 2rem;
    }
    .stack-badge {
      background: var(--surface);
      border: 1px solid var(--border);
      border-radius: 8px;
      padding: 0.55rem 1rem;
      font-size: 0.82rem;
      color: var(--muted);
      display: flex; align-items: center; gap: 0.5rem;
      transition: border-color 0.2s, color 0.2s;
    }
    .stack-badge:hover { border-color: var(--border-soft); color: var(--text); }
    .stack-badge .icon { font-size: 1rem; }
    .stack-tagline {
      font-family: 'JetBrains Mono', monospace;
      font-size: 0.72rem;
      color: var(--faint);
      letter-spacing: 0.08em;
      margin-top: 1rem;
    }

    /* ── MISSION SECTION ── */
    #mission { background: var(--surface); }
    .mission-inner {
      max-width: 720px;
      margin: 0 auto;
      text-align: center;
    }
    .vpdlny-glyph {
      font-family: 'Syne', sans-serif;
      font-size: 3.5rem;
      font-weight: 800;
      color: rgba(239,68,68,0.12);
      letter-spacing: 0.3em;
      margin-bottom: 1.5rem;
      user-select: none;
    }
    .mission-name {
      font-family: 'Syne', sans-serif;
      font-size: clamp(1.4rem, 3vw, 2rem);
      font-weight: 800;
      margin-bottom: 0.4rem;
      color: var(--text);
    }
    .mission-fullname {
      font-family: 'JetBrains Mono', monospace;
      font-size: 0.68rem;
      letter-spacing: 0.2em;
      color: var(--faint);
      margin-bottom: 2rem;
    }
    .mission-text {
      color: var(--muted);
      font-size: 0.98rem;
      line-height: 1.75;
      margin-bottom: 1.5rem;
    }
    .mission-text strong { color: var(--text); }
    .mission-quote {
      border-left: 2px solid var(--red);
      padding: 1rem 1.25rem;
      margin: 1.75rem 0;
      text-align: left;
      font-style: italic;
      color: var(--muted);
      font-size: 0.95rem;
      line-height: 1.7;
      background: rgba(239,68,68,0.04);
      border-radius: 0 8px 8px 0;
    }

    /* ── CONNECT ── */
    .connect-grid {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 1rem;
      margin-top: 2.5rem;
    }
    @media (max-width: 700px) { .connect-grid { grid-template-columns: repeat(2, 1fr); } }
    @media (max-width: 400px) { .connect-grid { grid-template-columns: 1fr; } }

    .connect-card {
      background: var(--surface);
      border: 1px solid var(--border);
      border-radius: 10px;
      padding: 1.25rem 1rem;
      text-decoration: none;
      display: flex; flex-direction: column; align-items: center; gap: 0.4rem;
      transition: border-color 0.2s, transform 0.2s;
      text-align: center;
    }
    .connect-card:hover { border-color: var(--border-soft); transform: translateY(-2px); }
    .c-icon { font-size: 1.5rem; }
    .c-name { font-weight: 600; font-size: 0.88rem; color: var(--text); }
    .c-handle { font-family: 'JetBrains Mono', monospace; font-size: 0.7rem; color: var(--faint); }

    /* ── FOOTER ── */
    footer {
      border-top: 1px solid var(--border);
      padding: 2.5rem 1.5rem;
      text-align: center;
      color: var(--faint);
      font-size: 0.8rem;
      line-height: 2;
    }
    .btc {
      margin-top: 0.75rem;
      font-family: 'JetBrains Mono', monospace;
      font-size: 0.72rem;
      color: var(--faint);
    }
    .btc code {
      color: var(--amber);
      font-size: 0.68rem;
      word-break: break-all;
    }

    /* ── FADE IN ── */
    .fade-in {
      opacity: 0;
      transform: translateY(16px);
      transition: opacity 0.55s ease, transform 0.55s ease;
    }
    .fade-in.visible { opacity: 1; transform: translateY(0); }
  </style>
</head>
<body>

  <!-- NAV -->
  <nav>
    <a href="#" class="nav-logo">IIM<span>.osintnet.uk</span></a>
    <div class="nav-links">
      <a href="#tools">Tools</a>
      <a href="#stack">Stack</a>
      <a href="#mission">Mission</a>
      <a href="#connect">Connect</a>
    </div>
  </nav>

  <!-- HERO -->
  <section id="hero">
    <div class="glow-red"></div>
    <div class="glow-blue"></div>
    <div class="hero-content">

      <div class="hero-badge">
        <span class="hero-badge-dot"></span>
        SYSTEMS OPERATIONAL
      </div>

      <h1 class="hero-title">
        <span class="hero-eyebrow">Indica Independent Media</span>
        <span class="hero-line-main">Open intelligence,</span>
        <span class="hero-line-accent">built for the people</span>
        <span class="hero-line-sub">who need it most.</span>
      </h1>

      <p class="hero-sub">
        Free OSINT tools, AI agents, and civic intelligence platforms — edge-native, open source, and unapologetically independent.
      </p>

      <div class="hero-ctas">
        <a href="#tools" class="btn-primary">Explore the tools &darr;</a>
        <a href="https://github.com/indicaindependent" target="_blank" rel="noopener" class="btn-secondary">GitHub &rarr;</a>
      </div>
    </div>
    <div class="scroll-hint">
      <span>SCROLL</span>
      <div class="scroll-chevron"></div>
    </div>
  </section>

  <!-- MISSION STRIP -->
  <div class="mission-strip">
    <p>Knowledge and information as the weapon of choice — <em>never violence</em>. Every tool we build is free at the point of use.</p>
  </div>

  <!-- TOOLS -->
  <section id="tools">
    <div class="section-inner">
      <div class="section-label fade-in">// PLATFORMS</div>
      <h2 class="section-title fade-in">The toolkit</h2>
      <p class="section-sub fade-in">Seven live platforms. Zero paywalls. All built for communities that commercial intelligence tools forgot.</p>

      <div class="tools-grid">

        <!-- SENTINEL — featured card -->
        <a href="https://sentinel.osintnet.uk" target="_blank" rel="noopener" class="tool-card sentinel-card fade-in">
          <div class="card-header">
            <span class="card-badge badge-agent">AGENT</span>
            <span class="live-dot">LIVE</span>
          </div>
          <div class="tool-icon">🔍</div>
          <div class="tool-name">SENTINEL</div>
          <div class="tool-desc">AI agent for U.S. government surveillance contract intelligence. Ask anything about $3.83B in verified federal contracts — Clearview AI, Palantir, facial recognition — in plain English. Powered by Gemini 2.5 Pro + MongoDB.</div>
          <div class="sentinel-featured">&#9733; Google Cloud Hackathon 2026</div>
          <div class="tool-link">sentinel.osintnet.uk &rarr;</div>
        </a>

        <a href="https://faceheatmap.app" target="_blank" rel="noopener" class="tool-card osint fade-in">
          <div class="card-header">
            <span class="card-badge badge-osint">OSINT</span>
            <span class="live-dot">LIVE</span>
          </div>
          <div class="tool-icon">&#128247;</div>
          <div class="tool-name">FaceHeatMap</div>
          <div class="tool-desc">Facial recognition contract tracker. Who's selling biometric surveillance to your government, and how much are they charging? Real procurement data, mapped.</div>
          <div class="tool-link">faceheatmap.app &rarr;</div>
        </a>

        <a href="https://tracker.warheatmap.app" target="_blank" rel="noopener" class="tool-card osint fade-in">
          <div class="card-header">
            <span class="card-badge badge-osint">OSINT</span>
            <span class="live-dot">LIVE</span>
          </div>
          <div class="tool-icon">&#9889;</div>
          <div class="tool-name">StraitTracker</div>
          <div class="tool-desc">Real-time Strait of Hormuz geopolitical intelligence. Live news synthesis via Claude. Auto-refreshing conflict monitoring.</div>
          <div class="tool-link">tracker.warheatmap.app &rarr;</div>
        </a>

        <a href="https://warheatmap.app" target="_blank" rel="noopener" class="tool-card osint fade-in">
          <div class="card-header">
            <span class="card-badge badge-osint">OSINT</span>
            <span class="live-dot">LIVE</span>
          </div>
          <div class="tool-icon">&#127757;</div>
          <div class="tool-name">WarHeatMap</div>
          <div class="tool-desc">Global conflict zone mapping with live Bluesky integration. War zone intelligence aggregated from open sources worldwide.</div>
          <div class="tool-link">warheatmap.app &rarr;</div>
        </a>

        <a href="https://aiecosense.com" target="_blank" rel="noopener" class="tool-card ai fade-in">
          <div class="card-header">
            <span class="card-badge badge-ai">AI</span>
            <span class="live-dot">LIVE</span>
          </div>
          <div class="tool-icon">&#127807;</div>
          <div class="tool-name">AiecoSense</div>
          <div class="tool-desc">Environmental justice AI. Claude-powered plain-language reports from EPA, CDC &amp; FEMA data. EJScreen for real communities.</div>
          <div class="tool-link">aiecosense.com &rarr;</div>
        </a>

        <a href="https://voxterrae.app" target="_blank" rel="noopener" class="tool-card ai fade-in">
          <div class="card-header">
            <span class="card-badge badge-ai">AI</span>
            <span class="live-dot">LIVE</span>
          </div>
          <div class="tool-icon">&#127897;&#65039;</div>
          <div class="tool-name">VoxTerrae</div>
          <div class="tool-desc">Multilingual community ground truth from conflict zones. Any language. Claude translates and synthesizes. Geospatial heatmap.</div>
          <div class="tool-link">voxterrae.app &rarr;</div>
        </a>

        <a href="https://bsky.app/profile/indicaindependent.bsky.social" target="_blank" rel="noopener" class="tool-card intel fade-in">
          <div class="card-header">
            <span class="card-badge badge-intel">MEDIA</span>
            <span class="live-dot">LIVE</span>
          </div>
          <div class="tool-icon">&#128240;</div>
          <div class="tool-name">Indica Independent Media</div>
          <div class="tool-desc">Independent intelligence reporting. Geopolitical analysis, OSINT investigations, and conflict coverage — published to Bluesky in real time.</div>
          <div class="tool-link">@indicaindependent &rarr;</div>
        </a>

        <a href="https://bizher.osintnet.uk" target="_blank" rel="noopener" class="tool-card civic fade-in">
          <div class="card-header">
            <span class="card-badge badge-civic" style="background:#a855f7;color:#fff;">LEGAL</span>
            <span class="live-dot">LIVE</span>
          </div>
          <div class="tool-icon">&#9878;</div>
          <div class="tool-name">NY BizHer</div>
          <div class="tool-desc">Free step-by-step LLC formation wizard for NY women entrepreneurs. File your Articles of Organization, navigate the publication requirement, get your EIN, and apply for WBE/MWBE certification — all in one place. English + Spanish.</div>
          <div class="tool-link">bizher.osintnet.uk &rarr;</div>
        </a>

      </div>
    </div>
  </section>

  <!-- STACK -->
  <section id="stack">
    <div class="section-inner" style="text-align:center;">
      <div class="section-label fade-in">// INFRASTRUCTURE</div>
      <h2 class="section-title fade-in">Built on sovereign infrastructure</h2>
      <p class="section-sub fade-in" style="margin:0 auto 2.5rem;">No VC. No boss. No AWS. Every tool runs on infrastructure we built and control.</p>
      <div class="stack-grid fade-in">
        <div class="stack-badge"><span class="icon">&#9729;&#65039;</span>Cloudflare Workers</div>
        <div class="stack-badge"><span class="icon">&#129504;</span>Anthropic Claude</div>
        <div class="stack-badge"><span class="icon">&#127353;</span>Google Gemini</div>
        <div class="stack-badge"><span class="icon">&#129812;</span>AT Protocol</div>
        <div class="stack-badge"><span class="icon">&#8383;</span>Bitcoin</div>
        <div class="stack-badge"><span class="icon">&#128451;&#65039;</span>D1 + KV + R2</div>
        <div class="stack-badge"><span class="icon">&#128309;</span>MongoDB Atlas</div>
        <div class="stack-badge"><span class="icon">&#128172;</span>Discord.js</div>
        <div class="stack-badge"><span class="icon">&#128274;</span>CF Zero Trust</div>
      </div>
      <p class="stack-tagline fade-in">65 workers &middot; 38 custom domains &middot; 5 cron triggers &middot; globally distributed</p>
    </div>
  </section>

  <!-- MISSION -->
  <section id="mission">
    <div class="mission-inner">
      <div class="vpdlny-glyph">IIM</div>
      <div class="section-label fade-in" style="text-align:center;">// WHO WE ARE</div>
      <h2 class="mission-name fade-in">Indica Independent Media</h2>
      <div class="mission-fullname fade-in">INDEPENDENT &middot; OPEN SOURCE &middot; EDGE-NATIVE</div>
      <p class="mission-text fade-in">
        A collective of <strong>technologists, artists, and researchers</strong> who use knowledge and information — never violence — to defend marginalized and vulnerable people against powerful entities and institutions.
      </p>
      <div class="mission-quote fade-in">
        "The people most affected by surveillance, environmental harm, and conflict are the least represented in the systems designed to respond to those crises. We build to close that gap."
      </div>
      <p class="mission-text fade-in" style="font-size:0.93rem;">
        All our tools are free at the point of use. All built with conviction. All built for the mission.
      </p>
    </div>
  </section>

  <!-- CONNECT -->
  <section id="connect">
    <div class="section-inner">
      <div class="section-label fade-in" style="text-align:center;">// FIND US</div>
      <h2 class="section-title fade-in" style="text-align:center;">Connect</h2>
      <p class="section-sub fade-in" style="text-align:center;margin:0 auto 0;">Follow the signal. All outputs are public.</p>
      <div class="connect-grid fade-in">
        <a href="https://github.com/indicaindependent" target="_blank" rel="noopener" class="connect-card">
          <span class="c-icon">&#128025;</span>
          <span class="c-name">GitHub</span>
          <span class="c-handle">indicaindependent</span>
        </a>
        <a href="https://bsky.app/profile/indicaindependent.bsky.social" target="_blank" rel="noopener" class="connect-card">
          <span class="c-icon">&#129812;</span>
          <span class="c-name">Bluesky</span>
          <span class="c-handle">@indicaindependent</span>
        </a>
        <a href="https://discord.gg/indicaindependent" target="_blank" rel="noopener" class="connect-card">
          <span class="c-icon">&#128172;</span>
          <span class="c-name">Discord</span>
          <span class="c-handle">Indica Independent Media</span>
        </a>
        <a href="https://sentinel.osintnet.uk" target="_blank" rel="noopener" class="connect-card">
          <span class="c-icon">&#128269;</span>
          <span class="c-name">SENTINEL</span>
          <span class="c-handle">sentinel.osintnet.uk</span>
        </a>
      </div>
    </div>
  </section>

  <!-- FOOTER -->
  <footer>
    <p>&copy; 2026 Indica Independent Media &middot; All signals open source. All tools free.</p>
    <p>Built on Cloudflare's global edge &middot; Powered by Anthropic Claude &amp; Google Gemini &middot; <a href="https://github.com/indicaindependent" style="color:var(--faint);">github.com/indicaindependent</a></p>
    <div class="btc">
      <span>&#8383;</span> Support the mission: <code>bc1qyrtasy0naxauhf3yeg05ztu2x5vmx9jxjzsq2a</code>
    </div>
  </footer>

  <script>
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
    }, { threshold: 0.08, rootMargin: '0px 0px -30px 0px' });
    document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
    document.querySelectorAll('.tool-card').forEach((card, i) => {
      card.style.transitionDelay = (i * 0.07) + 's';
    });
  </script>

</body>
</html>`;

    return new Response(html, {
      headers: {
        'Content-Type': 'text/html;charset=UTF-8',
        'Cache-Control': 'public, max-age=3600',
        'X-Content-Type-Options': 'nosniff'
      }
    });
}
