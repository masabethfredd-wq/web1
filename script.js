/* ═══════════════════════════════════════════════════
   LANDING PAGE - INTERACTIVE BEHAVIORS
   ═══════════════════════════════════════════════════ */

(function () {
  'use strict';

  // ─── NAVBAR SCROLL EFFECT ───
  const nav = document.getElementById('nav');
  let lastScroll = 0;

  function handleNavScroll() {
    const scrollY = window.scrollY;
    if (scrollY > 60) {
      nav.classList.add('nav--scrolled');
    } else {
      nav.classList.remove('nav--scrolled');
    }
    lastScroll = scrollY;
  }

  window.addEventListener('scroll', handleNavScroll, { passive: true });

  // ─── MOBILE MENU ───
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.querySelector('.nav__links');

  if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
      navLinks.classList.toggle('active');
      hamburger.classList.toggle('open');
    });

    // Close on link click
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        hamburger.classList.remove('open');
      });
    });
  }

  // ─── SMOOTH SCROLL FOR ANCHOR LINKS ───
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        const offset = 80;
        const top = target.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    });
  });

  // ─── FAQ ACCORDION ───
  const faqItems = document.querySelectorAll('.faq__item');

  faqItems.forEach(item => {
    const question = item.querySelector('.faq__question');
    question.addEventListener('click', () => {
      const isActive = item.classList.contains('active');

      // Close all
      faqItems.forEach(i => {
        i.classList.remove('active');
        i.querySelector('.faq__question').setAttribute('aria-expanded', 'false');
      });

      // Open clicked (if it wasn't already open)
      if (!isActive) {
        item.classList.add('active');
        question.setAttribute('aria-expanded', 'true');
      }
    });
  });

  // ─── SCROLL REVEAL ───
  function setupReveal() {
    const sections = document.querySelectorAll(
      '.problem__h2, .problem__card, .problem__closing, ' +
      '.solution__h2, .solution__intro, .solution__feature, ' +
      '.services__h2, .services__card, ' +
      '.process__h2, .process__step, ' +
      '.proof__h2, .proof__card, .proof__guarantee, ' +
      '.faq__h2, .faq__item, ' +
      '.contact__h2, .contact__form, .contact__urgency'
    );

    sections.forEach((el, i) => {
      el.classList.add('reveal');
      // Add staggered delay within groups
      const parent = el.parentElement;
      const siblings = parent.querySelectorAll('.reveal');
      const index = Array.from(siblings).indexOf(el);
      if (index > 0 && index < 5) {
        el.classList.add('reveal-delay-' + index);
      }
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      {
        threshold: 0.15,
        rootMargin: '0px 0px -60px 0px'
      }
    );

    sections.forEach(el => observer.observe(el));
  }

  setupReveal();

  // ─── FORM HANDLING ───
  const form = document.getElementById('contactForm');

  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();

      // Collect data
      const formData = new FormData(form);
      const data = Object.fromEntries(formData.entries());

      // Basic validation
      if (!data.name || !data.email) {
        shakeElement(form.querySelector('[name="name"]'));
        return;
      }

      // Simulate submission (replace with real endpoint)
      const btn = form.querySelector('button[type="submit"]');
      const originalText = btn.innerHTML;
      btn.innerHTML = `
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" style="animation: spin 1s linear infinite;">
          <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/>
        </svg>
        Enviando...
      `;
      btn.disabled = true;

      setTimeout(() => {
        // Success state
        form.innerHTML = `
          <div class="form-success">
            <div class="form-success__icon">✅</div>
            <h3 class="form-success__title">Auditoría solicitada</h3>
            <p class="form-success__text">
              Revisaré tu web y te enviaré el informe en menos de 24 horas.
              Mientras tanto, revisa tu email para confirmar tu solicitud.
            </p>
          </div>
        `;
      }, 1500);
    });
  }

  function shakeElement(el) {
    if (!el) return;
    el.style.animation = 'shake 0.4s ease-in-out';
    el.style.borderColor = '#ef4444';
    setTimeout(() => {
      el.style.animation = '';
      el.style.borderColor = '';
    }, 1000);
  }

  // ─── COUNTER ANIMATION (Hero proof numbers) ───
  function animateCounters() {
    const counters = document.querySelectorAll('.hero__proof-number');
    counters.forEach(counter => {
      const text = counter.textContent;
      // Only animate pure numbers
      if (/^\d+$/.test(text)) {
        const target = parseInt(text, 10);
        let current = 0;
        const increment = target / 40;
        const timer = setInterval(() => {
          current += increment;
          if (current >= target) {
            counter.textContent = target;
            clearInterval(timer);
          } else {
            counter.textContent = Math.floor(current);
          }
        }, 30);
      }
    });
  }

  // Trigger counter animation when hero is visible
  const heroObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateCounters();
          heroObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.5 }
  );

  const hero = document.getElementById('hero');
  if (hero) heroObserver.observe(hero);

  // ─── SPIN ANIMATION FOR LOADING ───
  const style = document.createElement('style');
  style.textContent = `
    @keyframes spin {
      from { transform: rotate(0deg); }
      to { transform: rotate(360deg); }
    }
    @keyframes shake {
      0%, 100% { transform: translateX(0); }
      20% { transform: translateX(-6px); }
      40% { transform: translateX(6px); }
      60% { transform: translateX(-4px); }
      80% { transform: translateX(4px); }
    }
  `;
  document.head.appendChild(style);

})();
