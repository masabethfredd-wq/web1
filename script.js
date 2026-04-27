/* ═══════════════════════════════════════════════════
   LANDING PAGE - DESARROLLO WEB DE ALTO RENDIMIENTO
   Minimalismo técnico · Conversión · Neuromarketing
   ═══════════════════════════════════════════════════ */

/* ─── RESET & TOKENS ─── */
*, *::before, *::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

:root {
  /* Core palette */
  --bg-primary: #0a0a0f;
  --bg-secondary: #101018;
  --bg-card: #14141e;
  --bg-card-hover: #1a1a28;
  --bg-accent: #0d2818;

  /* Text */
  --text-primary: #f0f0f5;
  --text-secondary: #9494a8;
  --text-muted: #5e5e72;

  /* Accents */
  --accent: #10b981;
  --accent-hover: #34d399;
  --accent-glow: rgba(16, 185, 129, 0.15);
  --accent-glow-strong: rgba(16, 185, 129, 0.25);
  --accent-orange: #f59e0b;

  /* Borders */
  --border: #1e1e2e;
  --border-hover: #2a2a3e;

  /* Spacing */
  --section-py: 120px;
  --section-py-mobile: 72px;

  /* Radius */
  --radius-sm: 8px;
  --radius-md: 12px;
  --radius-lg: 16px;
  --radius-xl: 24px;

  /* Transitions */
  --ease-out: cubic-bezier(0.16, 1, 0.3, 1);
  --ease-spring: cubic-bezier(0.34, 1.56, 0.64, 1);
}

html {
  scroll-behavior: smooth;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

body {
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  background: var(--bg-primary);
  color: var(--text-primary);
  line-height: 1.6;
  overflow-x: hidden;
}

img { max-width: 100%; display: block; }
a { text-decoration: none; color: inherit; }
button { cursor: pointer; border: none; background: none; font: inherit; color: inherit; }

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
}

/* ─── SHARED SECTION ELEMENTS ─── */
.hero__label,
.problem__label,
.solution__label,
.services__label,
.process__label,
.proof__label,
.faq__label {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-size: 13px;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--accent);
  margin-bottom: 20px;
}

/* ═══════════════════════════════════════════════════
   NAVIGATION
   ═══════════════════════════════════════════════════ */
.nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  padding: 16px 0;
  transition: background 0.3s, backdrop-filter 0.3s, padding 0.3s;
}

.nav--scrolled {
  background: rgba(10, 10, 15, 0.85);
  backdrop-filter: blur(20px) saturate(180%);
  -webkit-backdrop-filter: blur(20px) saturate(180%);
  padding: 12px 0;
  border-bottom: 1px solid var(--border);
}

.nav__inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.nav__logo {
  display: flex;
  align-items: center;
  gap: 10px;
  font-weight: 800;
  font-size: 18px;
  color: var(--text-primary);
}

.nav__logo-icon {
  color: var(--accent);
  font-size: 22px;
}

.nav__links {
  display: flex;
  align-items: center;
  gap: 32px;
}

.nav__link {
  font-size: 14px;
  font-weight: 500;
  color: var(--text-secondary);
  transition: color 0.2s;
}

.nav__link:hover { color: var(--text-primary); }

.nav__cta-btn {
  font-size: 14px;
  font-weight: 600;
  color: var(--bg-primary);
  background: var(--accent);
  padding: 10px 24px;
  border-radius: 100px;
  transition: all 0.25s var(--ease-out);
}

.nav__cta-btn:hover {
  background: var(--accent-hover);
  transform: translateY(-1px);
  box-shadow: 0 4px 20px var(--accent-glow-strong);
}

.nav__hamburger {
  display: none;
  flex-direction: column;
  gap: 5px;
  padding: 4px;
}

.nav__hamburger span {
  display: block;
  width: 24px;
  height: 2px;
  background: var(--text-primary);
  border-radius: 2px;
  transition: all 0.3s;
}

/* ═══════════════════════════════════════════════════
   HERO SECTION
   ═══════════════════════════════════════════════════ */
.hero {
  position: relative;
  padding: 160px 0 100px;
  min-height: 100vh;
  display: flex;
  align-items: center;
  overflow: hidden;
}

.hero__bg-grid {
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(rgba(16, 185, 129, 0.03) 1px, transparent 1px),
    linear-gradient(90deg, rgba(16, 185, 129, 0.03) 1px, transparent 1px);
  background-size: 60px 60px;
  mask-image: radial-gradient(ellipse 70% 60% at 50% 40%, black 20%, transparent 70%);
  -webkit-mask-image: radial-gradient(ellipse 70% 60% at 50% 40%, black 20%, transparent 70%);
}

.hero::before {
  content: '';
  position: absolute;
  top: -200px;
  left: 50%;
  transform: translateX(-50%);
  width: 800px;
  height: 800px;
  background: radial-gradient(circle, var(--accent-glow) 0%, transparent 70%);
  pointer-events: none;
}

.hero__inner {
  position: relative;
  text-align: center;
  max-width: 900px;
  margin: 0 auto;
}

.hero__badge {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  font-size: 13px;
  font-weight: 600;
  color: var(--accent-orange);
  background: rgba(245, 158, 11, 0.08);
  border: 1px solid rgba(245, 158, 11, 0.2);
  padding: 8px 20px;
  border-radius: 100px;
  margin-bottom: 40px;
  animation: badge-pulse 3s ease-in-out infinite;
}

@keyframes badge-pulse {
  0%, 100% { box-shadow: 0 0 0 0 rgba(245, 158, 11, 0.15); }
  50% { box-shadow: 0 0 0 8px rgba(245, 158, 11, 0); }
}

.hero__badge-dot {
  width: 8px;
  height: 8px;
  background: var(--accent-orange);
  border-radius: 50%;
  animation: dot-blink 2s ease-in-out infinite;
}

@keyframes dot-blink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.3; }
}

.hero__h1 {
  font-size: clamp(40px, 6vw, 72px);
  font-weight: 900;
  line-height: 1.08;
  letter-spacing: -0.03em;
  color: var(--text-primary);
  margin-bottom: 28px;
}

.hero__h1-accent {
  background: linear-gradient(135deg, var(--accent) 0%, #34d399 50%, #6ee7b7 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.hero__sub {
  font-size: clamp(17px, 2vw, 20px);
  line-height: 1.65;
  color: var(--text-secondary);
  max-width: 700px;
  margin: 0 auto 44px;
}

.hero__sub strong {
  color: var(--accent);
  font-weight: 700;
}

.hero__ctas {
  display: flex;
  gap: 16px;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 64px;
}

.hero__proof {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 40px;
  flex-wrap: wrap;
}

.hero__proof-item {
  text-align: center;
}

.hero__proof-number {
  display: block;
  font-size: 32px;
  font-weight: 800;
  color: var(--text-primary);
  letter-spacing: -0.02em;
}

.hero__proof-label {
  display: block;
  font-size: 13px;
  font-weight: 500;
  color: var(--text-muted);
  margin-top: 4px;
}

.hero__proof-divider {
  width: 1px;
  height: 40px;
  background: var(--border);
}

/* ═══════════════════════════════════════════════════
   BUTTONS
   ═══════════════════════════════════════════════════ */
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  font-weight: 700;
  font-size: 16px;
  border-radius: 100px;
  padding: 16px 36px;
  transition: all 0.3s var(--ease-out);
  white-space: nowrap;
}

.btn--lg { padding: 18px 40px; font-size: 17px; }
.btn--full { width: 100%; }

.btn--primary {
  color: var(--bg-primary);
  background: var(--accent);
  box-shadow: 0 0 0 0 var(--accent-glow);
}

.btn--primary:hover {
  background: var(--accent-hover);
  transform: translateY(-2px);
  box-shadow: 0 8px 32px var(--accent-glow-strong);
}

.btn--primary .btn__arrow {
  transition: transform 0.25s var(--ease-out);
}

.btn--primary:hover .btn__arrow {
  transform: translateX(4px);
}

.btn--ghost {
  color: var(--text-secondary);
  background: transparent;
  border: 1px solid var(--border);
}

.btn--ghost:hover {
  color: var(--text-primary);
  border-color: var(--border-hover);
  background: rgba(255, 255, 255, 0.03);
}

.btn--outline {
  color: var(--accent);
  background: transparent;
  border: 1px solid rgba(16, 185, 129, 0.3);
}

.btn--outline:hover {
  background: var(--accent-glow);
  border-color: var(--accent);
  transform: translateY(-1px);
}

/* ═══════════════════════════════════════════════════
   PROBLEM AGITATION
   ═══════════════════════════════════════════════════ */
.problem {
  padding: var(--section-py) 0;
  background: var(--bg-secondary);
  border-top: 1px solid var(--border);
  border-bottom: 1px solid var(--border);
}

.problem__h2 {
  font-size: clamp(32px, 4.5vw, 52px);
  font-weight: 800;
  line-height: 1.15;
  letter-spacing: -0.02em;
  margin-bottom: 56px;
  max-width: 700px;
}

.strikethrough {
  text-decoration: line-through;
  text-decoration-color: var(--accent-orange);
  text-decoration-thickness: 3px;
  color: var(--text-muted);
}

.problem__grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  margin-bottom: 56px;
}

.problem__card {
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  padding: 36px 28px;
  transition: all 0.3s var(--ease-out);
}

.problem__card:hover {
  border-color: var(--border-hover);
  background: var(--bg-card-hover);
  transform: translateY(-4px);
}

.problem__card-icon {
  font-size: 36px;
  margin-bottom: 20px;
}

.problem__card-title {
  font-size: 19px;
  font-weight: 700;
  margin-bottom: 12px;
  color: var(--text-primary);
}

.problem__card-text {
  font-size: 15px;
  line-height: 1.7;
  color: var(--text-secondary);
}

.problem__closing {
  font-size: 20px;
  line-height: 1.7;
  color: var(--text-secondary);
  max-width: 700px;
  padding-top: 24px;
  border-top: 1px solid var(--border);
}

.problem__closing strong {
  color: var(--text-primary);
  display: block;
  margin-top: 8px;
}

/* ═══════════════════════════════════════════════════
   SOLUTION
   ═══════════════════════════════════════════════════ */
.solution {
  padding: var(--section-py) 0;
}

.solution__h2 {
  font-size: clamp(32px, 4.5vw, 52px);
  font-weight: 800;
  line-height: 1.15;
  letter-spacing: -0.02em;
  margin-bottom: 24px;
}

.solution__h2-accent {
  color: var(--accent);
}

.solution__intro {
  font-size: 19px;
  line-height: 1.7;
  color: var(--text-secondary);
  max-width: 700px;
  margin-bottom: 64px;
}

.solution__intro strong {
  color: var(--text-primary);
}

.solution__features {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 32px;
}

.solution__feature {
  display: flex;
  gap: 20px;
  padding: 32px;
  border-radius: var(--radius-lg);
  border: 1px solid var(--border);
  background: var(--bg-card);
  transition: all 0.3s var(--ease-out);
}

.solution__feature:hover {
  border-color: var(--accent);
  background: var(--bg-accent);
  box-shadow: 0 0 40px var(--accent-glow);
}

.solution__feature-icon {
  flex-shrink: 0;
  width: 56px;
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: var(--radius-md);
  background: rgba(16, 185, 129, 0.1);
  color: var(--accent);
}

.solution__feature-title {
  font-size: 18px;
  font-weight: 700;
  margin-bottom: 8px;
  color: var(--text-primary);
}

.solution__feature-text {
  font-size: 15px;
  line-height: 1.7;
  color: var(--text-secondary);
}

/* ═══════════════════════════════════════════════════
   SERVICES
   ═══════════════════════════════════════════════════ */
.services {
  padding: var(--section-py) 0;
  background: var(--bg-secondary);
  border-top: 1px solid var(--border);
  border-bottom: 1px solid var(--border);
}

.services__h2 {
  font-size: clamp(32px, 4.5vw, 52px);
  font-weight: 800;
  line-height: 1.15;
  letter-spacing: -0.02em;
  margin-bottom: 16px;
}

.services__intro {
  font-size: 18px;
  color: var(--text-secondary);
  max-width: 600px;
  margin-bottom: 56px;
}

.services__grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  align-items: start;
}

.services__card {
  position: relative;
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: var(--radius-xl);
  padding: 40px 32px;
  transition: all 0.35s var(--ease-out);
}

.services__card:hover {
  border-color: var(--border-hover);
  transform: translateY(-6px);
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
}

.services__card--featured {
  border-color: var(--accent);
  background: linear-gradient(180deg, var(--bg-accent) 0%, var(--bg-card) 60%);
  box-shadow: 0 0 60px var(--accent-glow);
  transform: scale(1.03);
}

.services__card--featured:hover {
  border-color: var(--accent-hover);
  transform: scale(1.03) translateY(-6px);
}

.services__card-ribbon {
  position: absolute;
  top: -12px;
  left: 50%;
  transform: translateX(-50%);
  font-size: 12px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: var(--bg-primary);
  background: var(--accent);
  padding: 6px 20px;
  border-radius: 100px;
}

.services__card-number {
  font-size: 48px;
  font-weight: 900;
  color: rgba(255, 255, 255, 0.04);
  line-height: 1;
  margin-bottom: 16px;
  letter-spacing: -0.04em;
}

.services__card-title {
  font-size: 22px;
  font-weight: 800;
  line-height: 1.25;
  margin-bottom: 16px;
}

.services__card-desc {
  font-size: 15px;
  line-height: 1.7;
  color: var(--text-secondary);
  margin-bottom: 24px;
}

.services__card-list {
  list-style: none;
  margin-bottom: 32px;
}

.services__card-list li {
  font-size: 14px;
  color: var(--text-secondary);
  padding: 8px 0;
  padding-left: 24px;
  position: relative;
  border-bottom: 1px solid rgba(255, 255, 255, 0.04);
}

.services__card-list li:last-child {
  border-bottom: none;
}

.services__card-list li::before {
  content: '✓';
  position: absolute;
  left: 0;
  color: var(--accent);
  font-weight: 700;
}

/* ═══════════════════════════════════════════════════
   PROCESS
   ═══════════════════════════════════════════════════ */
.process {
  padding: var(--section-py) 0;
}

.process__h2 {
  font-size: clamp(32px, 4.5vw, 48px);
  font-weight: 800;
  line-height: 1.15;
  letter-spacing: -0.02em;
  margin-bottom: 64px;
  max-width: 600px;
}

.process__timeline {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 32px;
  position: relative;
}

.process__timeline::before {
  content: '';
  position: absolute;
  top: 28px;
  left: 28px;
  right: 28px;
  height: 2px;
  background: linear-gradient(90deg, var(--accent), var(--border));
  z-index: 0;
}

.process__step {
  position: relative;
  z-index: 1;
  text-align: center;
}

.process__step-number {
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background: var(--bg-primary);
  border: 2px solid var(--accent);
  color: var(--accent);
  font-size: 20px;
  font-weight: 800;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 24px;
}

.process__step-title {
  font-size: 17px;
  font-weight: 700;
  margin-bottom: 10px;
}

.process__step-text {
  font-size: 14px;
  line-height: 1.7;
  color: var(--text-secondary);
}

/* ═══════════════════════════════════════════════════
   SOCIAL PROOF & GUARANTEE
   ═══════════════════════════════════════════════════ */
.proof {
  padding: var(--section-py) 0;
  background: var(--bg-secondary);
  border-top: 1px solid var(--border);
  border-bottom: 1px solid var(--border);
}

.proof__h2 {
  font-size: clamp(32px, 4.5vw, 48px);
  font-weight: 800;
  line-height: 1.15;
  letter-spacing: -0.02em;
  margin-bottom: 56px;
}

.proof__grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  margin-bottom: 64px;
}

.proof__card {
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  padding: 36px 28px;
  transition: all 0.3s var(--ease-out);
}

.proof__card:hover {
  border-color: var(--border-hover);
  transform: translateY(-4px);
}

.proof__card-stars {
  color: var(--accent-orange);
  font-size: 18px;
  letter-spacing: 4px;
  margin-bottom: 20px;
}

.proof__card-quote {
  font-size: 15px;
  line-height: 1.75;
  color: var(--text-secondary);
  font-style: italic;
  margin-bottom: 24px;
}

.proof__card-author {
  display: flex;
  align-items: center;
  gap: 14px;
}

.proof__card-avatar {
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--accent), #059669);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 700;
  color: var(--bg-primary);
  flex-shrink: 0;
}

.proof__card-name {
  font-size: 15px;
  font-weight: 700;
}

.proof__card-role {
  font-size: 13px;
  color: var(--text-muted);
}

/* Guarantee */
.proof__guarantee {
  display: flex;
  gap: 32px;
  align-items: center;
  background: linear-gradient(135deg, var(--bg-accent), var(--bg-card));
  border: 1px solid rgba(16, 185, 129, 0.2);
  border-radius: var(--radius-xl);
  padding: 40px;
}

.proof__guarantee-icon {
  flex-shrink: 0;
  color: var(--accent);
}

.proof__guarantee-title {
  font-size: 22px;
  font-weight: 800;
  margin-bottom: 10px;
}

.proof__guarantee-text {
  font-size: 15px;
  line-height: 1.7;
  color: var(--text-secondary);
}

/* ═══════════════════════════════════════════════════
   FAQ
   ═══════════════════════════════════════════════════ */
.faq {
  padding: var(--section-py) 0;
}

.faq__h2 {
  font-size: clamp(32px, 4.5vw, 48px);
  font-weight: 800;
  line-height: 1.15;
  letter-spacing: -0.02em;
  margin-bottom: 48px;
}

.faq__list {
  max-width: 800px;
}

.faq__item {
  border-bottom: 1px solid var(--border);
}

.faq__item:first-child {
  border-top: 1px solid var(--border);
}

.faq__question {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 28px 0;
  font-size: 17px;
  font-weight: 600;
  text-align: left;
  color: var(--text-primary);
  transition: color 0.2s;
}

.faq__question:hover { color: var(--accent); }

.faq__icon {
  flex-shrink: 0;
  color: var(--text-muted);
  transition: transform 0.35s var(--ease-out), color 0.2s;
}

.faq__item.active .faq__icon {
  transform: rotate(45deg);
  color: var(--accent);
}

.faq__answer {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.4s var(--ease-out), padding 0.3s;
}

.faq__item.active .faq__answer {
  max-height: 300px;
  padding-bottom: 28px;
}

.faq__answer p {
  font-size: 15px;
  line-height: 1.75;
  color: var(--text-secondary);
}

/* ═══════════════════════════════════════════════════
   CONTACT / FINAL CTA
   ═══════════════════════════════════════════════════ */
.contact {
  padding: var(--section-py) 0;
  background: var(--bg-secondary);
  border-top: 1px solid var(--border);
}

.contact__inner {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
  align-items: center;
}

.contact__h2 {
  font-size: clamp(28px, 4vw, 42px);
  font-weight: 800;
  line-height: 1.2;
  letter-spacing: -0.02em;
  margin-bottom: 20px;
}

.contact__h2-accent {
  color: var(--accent);
}

.contact__sub {
  font-size: 16px;
  line-height: 1.7;
  color: var(--text-secondary);
  margin-bottom: 32px;
}

.contact__urgency {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  font-size: 15px;
  color: var(--accent-orange);
  background: rgba(245, 158, 11, 0.06);
  border: 1px solid rgba(245, 158, 11, 0.15);
  border-radius: var(--radius-md);
  padding: 16px 20px;
}

.contact__urgency-dot {
  flex-shrink: 0;
  width: 8px;
  height: 8px;
  background: var(--accent-orange);
  border-radius: 50%;
  margin-top: 6px;
  animation: dot-blink 2s ease-in-out infinite;
}

.contact__urgency strong {
  color: var(--accent-orange);
}

/* Form */
.contact__form {
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: var(--radius-xl);
  padding: 40px;
}

.contact__form-group {
  margin-bottom: 24px;
}

.contact__label {
  display: block;
  font-size: 14px;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 8px;
}

.contact__input {
  width: 100%;
  padding: 14px 18px;
  font-size: 15px;
  font-family: inherit;
  color: var(--text-primary);
  background: var(--bg-primary);
  border: 1px solid var(--border);
  border-radius: var(--radius-md);
  outline: none;
  transition: border-color 0.2s, box-shadow 0.2s;
}

.contact__input::placeholder {
  color: var(--text-muted);
}

.contact__input:focus {
  border-color: var(--accent);
  box-shadow: 0 0 0 3px var(--accent-glow);
}

.contact__select {
  appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='%239494a8' viewBox='0 0 16 16'%3E%3Cpath d='M8 11L3 6h10z'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 16px center;
  padding-right: 40px;
  cursor: pointer;
}

.contact__select option {
  background: var(--bg-card);
  color: var(--text-primary);
}

.contact__privacy {
  text-align: center;
  font-size: 13px;
  color: var(--text-muted);
  margin-top: 16px;
}

/* ═══════════════════════════════════════════════════
   FOOTER
   ═══════════════════════════════════════════════════ */
.footer {
  padding: 64px 0 40px;
  border-top: 1px solid var(--border);
}

.footer__inner {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
}

.footer__logo {
  font-size: 18px;
  font-weight: 800;
  color: var(--accent);
}

.footer__tagline {
  font-size: 14px;
  color: var(--text-muted);
  margin-top: 4px;
  text-align: center;
}

.footer__links {
  display: flex;
  gap: 32px;
}

.footer__links a {
  font-size: 14px;
  color: var(--text-secondary);
  transition: color 0.2s;
}

.footer__links a:hover { color: var(--text-primary); }

.footer__bottom {
  font-size: 13px;
  color: var(--text-muted);
}

/* ═══════════════════════════════════════════════════
   RESPONSIVE
   ═══════════════════════════════════════════════════ */
@media (max-width: 1024px) {
  .services__grid {
    grid-template-columns: 1fr;
    max-width: 560px;
  }

  .services__card--featured {
    transform: none;
  }

  .services__card--featured:hover {
    transform: translateY(-6px);
  }

  .process__timeline {
    grid-template-columns: repeat(2, 1fr);
    gap: 40px;
  }

  .process__timeline::before { display: none; }

  .contact__inner {
    grid-template-columns: 1fr;
    gap: 48px;
  }
}

@media (max-width: 768px) {
  :root {
    --section-py: var(--section-py-mobile);
  }

  .nav__links { display: none; }
  .nav__hamburger { display: flex; }

  .nav__links.active {
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background: rgba(10, 10, 15, 0.98);
    backdrop-filter: blur(20px);
    padding: 24px;
    gap: 16px;
    border-bottom: 1px solid var(--border);
  }

  .hero { padding: 120px 0 72px; min-height: auto; }

  .hero__h1 {
    font-size: 36px;
  }

  .hero__sub { font-size: 16px; }

  .hero__ctas {
    flex-direction: column;
    align-items: stretch;
  }

  .hero__proof { gap: 24px; }
  .hero__proof-divider { display: none; }

  .problem__grid {
    grid-template-columns: 1fr;
  }

  .solution__features {
    grid-template-columns: 1fr;
  }

  .services__grid {
    grid-template-columns: 1fr;
  }

  .process__timeline {
    grid-template-columns: 1fr;
  }

  .proof__grid {
    grid-template-columns: 1fr;
  }

  .proof__guarantee {
    flex-direction: column;
    text-align: center;
  }

  .contact__form { padding: 28px; }
}

@media (max-width: 480px) {
  .hero__h1 { font-size: 30px; }
  .hero__proof-number { font-size: 24px; }

  .btn--lg {
    padding: 16px 28px;
    font-size: 15px;
  }
}

/* ═══════════════════════════════════════════════════
   ANIMATIONS (scroll reveal)
   ═══════════════════════════════════════════════════ */
.reveal {
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 0.7s var(--ease-out), transform 0.7s var(--ease-out);
}

.reveal.visible {
  opacity: 1;
  transform: translateY(0);
}

.reveal-delay-1 { transition-delay: 0.1s; }
.reveal-delay-2 { transition-delay: 0.2s; }
.reveal-delay-3 { transition-delay: 0.3s; }
.reveal-delay-4 { transition-delay: 0.4s; }

/* ═══════════════════════════════════════════════════
   SUCCESS STATE
   ═══════════════════════════════════════════════════ */
.form-success {
  text-align: center;
  padding: 40px 20px;
}

.form-success__icon {
  font-size: 48px;
  margin-bottom: 16px;
}

.form-success__title {
  font-size: 24px;
  font-weight: 800;
  margin-bottom: 12px;
}

.form-success__text {
  font-size: 15px;
  color: var(--text-secondary);
  line-height: 1.7;
}