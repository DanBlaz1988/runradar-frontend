/* app.js — Populates sections from config.js and handles all interactions */
(function () {
  'use strict';

  var C = window.RUNRADAR;
  if (!C) {
    console.error('RunRadar: config.js not loaded.');
    return;
  }

  /* ── Helpers ──────────────────────────────────────────────────── */
  function el(id) { return document.getElementById(id); }

  function setText(id, text) {
    var node = el(id);
    if (node) node.textContent = text || '';
  }

  /* Escape user-supplied strings before inserting as HTML */
  function escHTML(str) {
    return String(str || '')
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }

  /* ── Populate content from config ────────────────────────────── */
  function populateContent() {
    var brand = C.brand || 'RunRadar';

    /* Page metadata */
    document.title = brand + ' \u2014 ' + (C.headline || '');
    var ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute('content', document.title);
    var metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute('content', C.subheadline || '');

    /* Navbar */
    setText('nav-brand', brand);
    var navBtn = el('nav-cta-btn');
    if (navBtn) navBtn.textContent = C.ctaPrimaryText || 'Get Free Access';

    /* Hero */
    setText('hero-headline', C.headline);
    setText('hero-subheadline', C.subheadline);
    setText('hero-support', C.supportLine);

    var heroPrimary = el('hero-cta-primary');
    if (heroPrimary) {
      heroPrimary.querySelector('span').textContent = C.ctaPrimaryText || 'Get Started';
      heroPrimary.setAttribute('aria-label', C.ctaPrimaryText || 'Get Started');
    }

    var heroSecondary = el('hero-cta-secondary');
    if (heroSecondary) {
      heroSecondary.textContent = C.ctaSecondaryText || 'View Live Results';
      heroSecondary.setAttribute('aria-label', C.ctaSecondaryText || 'View Live Results');
      heroSecondary.href = C.telegramUrl || '#';
    }

    /* Stats */
    var statsGrid = el('stats-grid');
    if (statsGrid) {
      if (C.showStats && C.fallbackStats) {
        var s = C.fallbackStats;
        var statsData = [
          { value: s.detectedRuns, label: 'Runs Detected' },
          { value: s.bestRun,      label: 'Best Run'      },
          { value: s.avgRun,       label: 'Avg Run'       },
          { value: s.lastRun,      label: 'Latest'        }
        ];
        statsGrid.innerHTML = statsData.map(function (stat, i) {
          return '<div class="stat-card" style="animation-delay:' + (i * 80) + 'ms"' +
            ' role="img" aria-label="' + escHTML(stat.label) + ': ' + escHTML(String(stat.value)) + '">' +
            '<div class="stat-value">' + escHTML(String(stat.value)) + '</div>' +
            '<div class="stat-label">' + escHTML(stat.label) + '</div>' +
            '</div>';
        }).join('');
      } else {
        statsGrid.hidden = true;
      }
    }

    /* Problem */
    setText('problem-title', C.problemTitle);
    setText('problem-text', C.problemText);

    /* How it works */
    setText('how-title', C.howTitle);
    var stepsGrid = el('steps-grid');
    if (stepsGrid && C.howSteps) {
      stepsGrid.innerHTML = C.howSteps.map(function (step, i) {
        return '<li class="step-card">' +
          '<div class="step-number" aria-hidden="true">' + (i + 1) + '</div>' +
          '<h3 class="step-title">' + escHTML(step.title) + '</h3>' +
          '<p class="step-text">'  + escHTML(step.text)  + '</p>' +
          '</li>';
      }).join('');
    }

    /* Why switch */
    setText('sell-title', C.sellTitle);
    var sellGrid = el('sell-grid');
    var sellIcons = ['📊', '🧠', '✅'];
    if (sellGrid && C.sellPoints) {
      sellGrid.innerHTML = C.sellPoints.map(function (point, i) {
        return '<li class="sell-card">' +
          '<div class="sell-icon" aria-hidden="true">' + (sellIcons[i] || '✦') + '</div>' +
          '<h3 class="sell-title">' + escHTML(point.title) + '</h3>' +
          '<p class="sell-text">'  + escHTML(point.text)  + '</p>' +
          '</li>';
      }).join('');
    }

    /* Features */
    setText('features-title', C.featuresTitle);
    var featuresGrid = el('features-grid');
    if (featuresGrid && C.features) {
      featuresGrid.innerHTML = C.features.map(function (feature) {
        return '<li class="feature-card">' +
          '<div class="feature-check" aria-hidden="true">\u2713</div>' +
          '<div class="feature-body">' +
          '<h3 class="feature-title">' + escHTML(feature.title) + '</h3>' +
          '<p class="feature-text">'  + escHTML(feature.text)  + '</p>' +
          '</div></li>';
      }).join('');
    }

    /* Pricing */
    setText('pricing-anchor', C.priceAnchorText);
    setText('pricing-trial', C.trialText);
    setText('pricing-note', C.noteText);
    var pricingCta = el('pricing-cta');
    if (pricingCta) {
      pricingCta.querySelector('span').textContent = C.ctaPrimaryText || 'Get Started';
      pricingCta.setAttribute('aria-label', C.ctaPrimaryText || 'Get Started');
    }

    /* FAQ */
    setText('faq-title', C.faqTitle);
    var faqList = el('faq-list');
    if (faqList && C.faqs) {
      faqList.innerHTML = C.faqs.map(function (faq, i) {
        var answerId = 'faq-answer-' + i;
        return '<div class="faq-item">' +
          '<button class="faq-question" type="button" aria-expanded="false" aria-controls="' + answerId + '">' +
          escHTML(faq.q) +
          '<span class="faq-icon" aria-hidden="true">+</span>' +
          '</button>' +
          '<div class="faq-answer" id="' + answerId + '" role="region">' +
          '<div class="faq-answer-inner">' +
          '<p class="faq-answer-text">' + escHTML(faq.a) + '</p>' +
          '</div></div>' +
          '</div>';
      }).join('');
    }

    /* Modal */
    setText('modal-title', C.modalTitle);
    setText('modal-text', C.modalText);
    setText('modal-privacy', C.modalPrivacy);

    /* Footer */
    setText('footer-brand', brand);
    setText('footer-brand-copy', brand);
    setText('footer-disclaimer', C.disclaimer);
    setText('footer-year', String(new Date().getFullYear()));
  }

  /* ── Modal ────────────────────────────────────────────────────── */
  var modal = el('modal');
  var modalClose = el('modal-close');
  var modalBackdrop = el('modal-backdrop');
  var previousFocus = null;

  function openModal() {
    if (!modal) return;
    previousFocus = document.activeElement;
    modal.classList.add('is-open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    var firstFocusable = modal.querySelector('button:not([disabled]), input:not([disabled])');
    if (firstFocusable) setTimeout(function () { firstFocusable.focus(); }, 50);
  }

  function closeModal() {
    if (!modal) return;
    modal.classList.remove('is-open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    if (previousFocus) previousFocus.focus();
    /* Reset form state */
    resetForm();
  }

  function resetForm() {
    /* ConvertKit manages its own form state; nothing to reset here */
  }

  if (modalClose)    modalClose.addEventListener('click', closeModal);
  if (modalBackdrop) modalBackdrop.addEventListener('click', closeModal);

  /* Escape key & focus trap */
  if (modal) {
    modal.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') { closeModal(); return; }
      if (e.key !== 'Tab') return;
      var focusable = Array.from(
        modal.querySelectorAll('button:not([disabled]), input:not([disabled]), [tabindex]:not([tabindex="-1"])')
      ).filter(function (node) { return !node.closest('[hidden]'); });
      if (!focusable.length) return;
      var first = focusable[0];
      var last  = focusable[focusable.length - 1];
      if (e.shiftKey) {
        if (document.activeElement === first) { e.preventDefault(); last.focus(); }
      } else {
        if (document.activeElement === last)  { e.preventDefault(); first.focus(); }
      }
    });
  }

  /* Bind CTA buttons to open modal */
  function bindCTAButtons() {
    ['nav-cta-btn', 'hero-cta-primary', 'pricing-cta'].forEach(function (id) {
      var btn = el(id);
      if (btn) btn.addEventListener('click', openModal);
    });
  }

  /* ── FAQ Accordion ────────────────────────────────────────────── */
  function initFAQ() {
    var faqList = el('faq-list');
    if (!faqList) return;

    faqList.addEventListener('click', function (e) {
      var btn = e.target.closest('.faq-question');
      if (!btn) return;
      var item   = btn.closest('.faq-item');
      var isOpen = item.classList.contains('open');
      /* Close all open items */
      faqList.querySelectorAll('.faq-item.open').forEach(function (openItem) {
        openItem.classList.remove('open');
        openItem.querySelector('.faq-question').setAttribute('aria-expanded', 'false');
      });
      /* Open the clicked item unless it was already open */
      if (!isOpen) {
        item.classList.add('open');
        btn.setAttribute('aria-expanded', 'true');
      }
    });
  }

  /* ── Scroll-reveal Animations ─────────────────────────────────── */
  function initScrollReveal() {
    if (!('IntersectionObserver' in window)) return;

    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

    var revealSelectors = [
      '.problem-content',
      '.section-title',
      '.pricing-card',
      '.faq-list'
    ];
    document.querySelectorAll(revealSelectors.join(', ')).forEach(function (node) {
      node.classList.add('reveal');
      observer.observe(node);
    });

    /* Stagger grid children */
    document.querySelectorAll('.steps-grid, .sell-grid, .features-grid').forEach(function (grid) {
      grid.classList.add('reveal-stagger');
      observer.observe(grid);
    });
  }

  /* ── Navbar scroll tint ───────────────────────────────────────── */
  function initNavbar() {
    var navbar = document.querySelector('.navbar');
    if (!navbar) return;
    window.addEventListener('scroll', function () {
      navbar.style.background = window.scrollY > 10
        ? 'rgba(10,10,15,.97)'
        : 'rgba(10,10,15,.85)';
    }, { passive: true });
  }

  /* ── Boot ─────────────────────────────────────────────────────── */
  function init() {
    populateContent();
    bindCTAButtons();
    initFAQ();
    initScrollReveal();
    initNavbar();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
}());
