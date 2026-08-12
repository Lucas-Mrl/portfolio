/* ============================================================
   STATE
============================================================ */
let lang = localStorage.getItem('lang') || 'pt';
let _lastFocused = null;
let _openedViaPush = false;

/* ============================================================
   LANGUAGE
============================================================ */
function setLang(l) {
  lang = l;
  localStorage.setItem('lang', l);
  document.documentElement.lang = l === 'pt' ? 'pt-BR' : 'en';

  document.getElementById('langPT').setAttribute('aria-pressed', l === 'pt' ? 'true' : 'false');
  document.getElementById('langEN').setAttribute('aria-pressed', l === 'en' ? 'true' : 'false');

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const k = el.getAttribute('data-i18n');
    const val = i18n[l] && i18n[l][k];
    if (val === undefined) return;
    el.innerHTML = val;
  });

  document.querySelectorAll('[data-tooltip-key]').forEach(el => {
    const key = el.getAttribute('data-tooltip-key');
    if (i18n[l] && i18n[l][key]) {
      el.setAttribute('data-tooltip', i18n[l][key]);
    }
  });

  // Update specific aria-labels
  const menuBtn = document.getElementById('menuBtn');
  if (menuBtn && i18n[l] && i18n[l].menu_open) {
    menuBtn.setAttribute('aria-label', i18n[l].menu_open);
  }
}

document.getElementById('langPT').addEventListener('click', () => setLang('pt'));
document.getElementById('langEN').addEventListener('click', () => setLang('en'));

/* ============================================================
   NAVBAR
============================================================ */
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 30);
}, { passive: true });

/* ============================================================
   SCROLL PROGRESS
============================================================ */
const scrollProgressEl = document.getElementById('scroll-progress');
if (scrollProgressEl) {
  window.addEventListener('scroll', () => {
    const docH = document.documentElement.scrollHeight - window.innerHeight;
    const pct  = docH > 0 ? (window.scrollY / docH) * 100 : 0;
    scrollProgressEl.style.width = pct + '%';
  }, { passive: true });
}

/* ============================================================
   NAVBAR ACTIVE SECTION
============================================================ */
(function () {
  const navLinks = document.querySelectorAll('.nav-links a[href^="#"]');
  const sections = [
    { id: 'cases-destaque', href: '#cases-destaque' },
    { id: 'experience',     href: '#experience' },
    { id: 'about',          href: '#about' },
  ];

  const sectionObs = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      const href = '#' + entry.target.id;
      const link = document.querySelector(`.nav-links a[href="${href}"]`);
      if (!link) return;
      if (entry.isIntersecting) {
        navLinks.forEach(l => l.classList.remove('active'));
        link.classList.add('active');
      }
    });
  }, { threshold: 0.15, rootMargin: '-64px 0px -40% 0px' });

  sections.forEach(s => {
    const el = document.getElementById(s.id);
    if (el) sectionObs.observe(el);
  });
})();

/* ============================================================
   MOBILE MENU
============================================================ */
const menuBtn = document.getElementById('menuBtn');
const mMenu   = document.getElementById('mobileMenu');
menuBtn.addEventListener('click', () => {
  const isOpen = mMenu.classList.toggle('open');
  menuBtn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
});
mMenu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
  mMenu.classList.remove('open');
  menuBtn.setAttribute('aria-expanded', 'false');
}));

// Resize: close mobile menu on desktop
window.addEventListener('resize', () => {
  if (window.innerWidth > 1023 && mMenu.classList.contains('open')) {
    mMenu.classList.remove('open');
    menuBtn.setAttribute('aria-expanded', 'false');
  }
}, { passive: true });

/* ============================================================
   REVEAL ON SCROLL
============================================================ */
const ro = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => entry.target.classList.add('visible'), i * 90);
      ro.unobserve(entry.target);
    }
  });
}, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });

document.querySelectorAll('[data-reveal]').forEach(el => ro.observe(el));

/* ============================================================
   CLIP REVEAL (screenshots)
============================================================ */
const clipObs = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('clip-visible');
      clipObs.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('[data-clip-reveal]').forEach(el => clipObs.observe(el));

/* ============================================================
   MODAL
============================================================ */
const modal    = document.getElementById('modal');
const mContent = document.getElementById('modalContent');
const mOverlay = document.getElementById('modalOverlay');
const mX       = document.getElementById('modalX');

function buildModal(data, demo, slug) {
  const bullets = data.solution.bullets.map(b => `<li>${b}</li>`).join('');
  const stack   = data.stack.map(s => `<span>${s}</span>`).join('');
  const impact  = data.impact.items.map(i => `
    <div class="m-impact-item">
      <span class="m-impact-val">${i.value}</span>
      <span class="m-impact-label">${i.label}</span>
    </div>`).join('');
  const ghBtn = data.github
    ? `<a href="${data.github}" target="_blank" rel="noopener" class="m-link-gh">GitHub ↗</a>` : '';
  const demoBtn = demo
    ? `<a href="${demo}" target="_blank" rel="noopener" class="m-link-demo">${lang === 'pt' ? 'Ver Demo ↗' : 'View Demo ↗'}</a>` : '';
  const closeLabel = i18n[lang] && i18n[lang].modal_close ? i18n[lang].modal_close : (lang === 'pt' ? 'Fechar' : 'Close');

  const gifSlugs = ['store-analytics','ad-analytics','looq-challenge','meta-tax-calc','whisper-transcriber','ai-analytics'];
  const screenshotSection = gifSlugs.includes(slug) ? `
    <div class="m-screenshot">
      <img src="assets/screenshots/${slug}.gif" alt="Demo ${data.title}">
    </div>` : '';

  const contextSection = data.context ? `
    <div class="m-hr"></div>
    <div class="m-section">
      <div class="m-section-label">${data.context.label}</div>
      <p>${data.context.text}</p>
    </div>` : '';

  const respSection = data.responsibility ? `
    <div class="m-hr"></div>
    <div class="m-section">
      <div class="m-section-label">${data.responsibility.label}</div>
      <p>${data.responsibility.text}</p>
    </div>` : '';

  const bizSection = data.business_impact ? `
  <div class="m-biz">
    <div class="m-biz-label">${data.business_impact.label}</div>
    <p class="m-biz-text">${data.business_impact.text}</p>
  </div>` : '';

  const baSection = data.before_after ? `
    <div class="m-hr"></div>
    <div class="m-section">
      <div class="m-section-label">${data.before_after.label}</div>
      <div class="m-ba">
        <div class="m-ba-col m-ba-before">
          <div class="m-ba-title">${lang === 'pt' ? 'Antes' : 'Before'}</div>
          <ul>${data.before_after.before.map(b => `<li>${b}</li>`).join('')}</ul>
        </div>
        <div class="m-ba-col m-ba-after">
          <div class="m-ba-title">${lang === 'pt' ? 'Depois' : 'After'}</div>
          <ul>${data.before_after.after.map(a => `<li>${a}</li>`).join('')}</ul>
        </div>
      </div>
    </div>` : '';

  const learnSection = data.learnings ? `
    <div class="m-hr"></div>
    <div class="m-section">
      <div class="m-section-label">${data.learnings.label}</div>
      <p>${data.learnings.text}</p>
    </div>` : '';

  const technicalSection = data.technical ? `
    <div class="m-hr"></div>
    <div class="m-section">
      <div class="m-section-label">${data.technical.label}</div>
      ${data.technical.flow ? `
        <div class="m-tech-flow">
          ${data.technical.flow.map(step => `<div class="m-tech-step">${step}</div>`).join('<div class="m-tech-arrow">→</div>')}
        </div>` : ''}
      ${data.technical.code ? `<pre class="m-code"><code>${data.technical.code}</code></pre>` : ''}
      ${data.technical.notes ? `<ul class="m-bullets">${data.technical.notes.map(n => `<li>${n}</li>`).join('')}</ul>` : ''}
      ${data.technical.limitations ? `<p class="m-tech-limits"><strong>${data.technical.limits_label || 'Limitações'}:</strong> ${data.technical.limitations}</p>` : ''}
    </div>` : '';

  return `
    <span class="m-tag">${data.tag}</span>
    <h2 class="m-title" id="modal-title">${data.title}</h2>
    <div class="m-stack">${stack}</div>
    ${screenshotSection}
    <div class="m-hr"></div>
    <div class="m-section">
      <div class="m-section-label">${data.problem.label}</div>
      <p>${data.problem.text}</p>
    </div>
    ${contextSection}
    ${respSection}
    <div class="m-hr"></div>
    <div class="m-section">
      <div class="m-section-label">${data.solution.label}</div>
      <p>${data.solution.text}</p>
      <ul class="m-bullets">${bullets}</ul>
    </div>
    <div class="m-hr"></div>
    <div class="m-section">
      <div class="m-section-label">${data.impact.label}</div>
      <div class="m-impact">${impact}</div>
    </div>
    ${bizSection}
    ${baSection}
    ${learnSection}
    ${technicalSection}
    <div class="m-footer">
      ${demoBtn}
      ${ghBtn}
      <button class="m-link-close" onclick="closeModal()">${closeLabel}</button>
    </div>`;
}

/* ============================================================
   FOCUS TRAP — modal accessibility
============================================================ */
function trapFocus(container) {
  const focusableSelectors = 'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"]), input, textarea, select';
  const focusable = Array.from(container.querySelectorAll(focusableSelectors));
  if (!focusable.length) return;
  const first = focusable[0];
  const last  = focusable[focusable.length - 1];
  function handleTrap(e) {
    if (e.key !== 'Tab') return;
    if (e.shiftKey) {
      if (document.activeElement === first) { e.preventDefault(); last.focus(); }
    } else {
      if (document.activeElement === last) { e.preventDefault(); first.focus(); }
    }
  }
  container.addEventListener('keydown', handleTrap);
  container._trapHandler = handleTrap;
}

function removeFocusTrap(container) {
  if (container && container._trapHandler) {
    container.removeEventListener('keydown', container._trapHandler);
    delete container._trapHandler;
  }
}

function openModal(key, fromDeepLink) {
  const data = projects[key];
  if (!data) return;
  _lastFocused = document.activeElement;
  mContent.innerHTML = buildModal(data[lang] || data['pt'], data.demo, key);
  modal.classList.add('open');
  modal.removeAttribute('inert');
  modal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
  const mBox = document.querySelector('.modal-box');
  trapFocus(mBox);
  mBox.focus();
  if (!fromDeepLink) {
    _openedViaPush = true;
    history.pushState({ project: key }, '', '#project/' + key);
  }
  // If deep link, _openedViaPush stays false — close will just clean up URL
}

function closeModal() {
  removeFocusTrap(document.querySelector('.modal-box'));
  modal.classList.remove('open');
  modal.setAttribute('inert', '');
  modal.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
  if (_openedViaPush) {
    _openedViaPush = false;
    history.back();
  } else {
    history.pushState({}, '', location.pathname);
  }
  if (_lastFocused) { _lastFocused.focus(); _lastFocused = null; }
}

mX.addEventListener('click', closeModal);
mOverlay.addEventListener('click', closeModal);
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    if (modal.classList.contains('open')) closeModal();
    if (mMenu.classList.contains('open')) {
      mMenu.classList.remove('open');
      menuBtn.setAttribute('aria-expanded', 'false');
      menuBtn.focus();
    }
  }
});

// History / back button support
window.addEventListener('popstate', (e) => {
  if (modal.classList.contains('open')) {
    _openedViaPush = false; // already going back, don't push again
    closeModal();
  } else if (e.state && e.state.project) {
    handleDeepLink('#project/' + e.state.project);
  }
});

document.querySelectorAll('[data-project]').forEach(card => {
  const key = card.getAttribute('data-project');
  if (!key) return;
  card.addEventListener('click', e => {
    if (e.target.closest('a, button')) return; // ignore link/button clicks
    openModal(key);
  });
  const btn = card.querySelector('.proj-btn-case');
  if (btn) btn.addEventListener('click', e => { e.stopPropagation(); openModal(key); });
});

/* ============================================================
   GIF HOVER — main project cards only
============================================================ */
(function () {
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  document.querySelectorAll('.case-ed[data-gif]').forEach(card => {
    const img = card.querySelector('img:not(.proj-index-thumb)');
    if (!img) return;
    const staticSrc = img.getAttribute('src');
    const gifSrc = card.getAttribute('data-gif');
    let observer;
    let isVisible = false;
    let isHovered = false;

    function activate() { if (!reduceMotion && isVisible) img.src = gifSrc; }
    function deactivate() { img.src = staticSrc; }

    observer = new IntersectionObserver(entries => {
      isVisible = entries[0].isIntersecting;
      if (!isVisible && isHovered) deactivate();
    }, { threshold: 0.1 });
    observer.observe(card);

    card.addEventListener('mouseenter', () => { isHovered = true; activate(); });
    card.addEventListener('mouseleave', () => { isHovered = false; deactivate(); });
    card.addEventListener('focusin', () => { isHovered = true; activate(); });
    card.addEventListener('focusout', () => { isHovered = false; deactivate(); });
  });
})();

/* ---- Project index hover preview ---- */
const projPreview = document.getElementById('projPreview');
const projPreviewImg = document.getElementById('projPreviewImg');

if (projPreview && projPreviewImg) {
  const previewSrcs = {
    'store-analytics':    'assets/screenshots/store-analytics.png',
    'ad-analytics':       'assets/screenshots/ad-analytics.png',
    'looq-challenge':     'assets/screenshots/looq-challenge.png',
    'meta-tax-calc':      'assets/screenshots/meta-tax-calc.png',
    'whisper-transcriber':'assets/screenshots/whisper-transcriber.png',
    'ai-analytics':       'assets/screenshots/ai-analytics.png',
  };

  document.querySelectorAll('.proj-index-row[data-project]').forEach(row => {
    const key = row.getAttribute('data-project');
    const src = previewSrcs[key];
    if (!src) return;

    row.addEventListener('mouseenter', () => {
      projPreviewImg.src = src;
      const rowRect = row.getBoundingClientRect();
      const previewH = 198;
      let topPos = rowRect.top + (rowRect.height / 2) - (previewH / 2);
      topPos = Math.max(20, Math.min(topPos, window.innerHeight - previewH - 20));
      projPreview.style.top = topPos + 'px';
      projPreview.classList.add('visible');
    });
    row.addEventListener('mouseleave', () => {
      projPreview.classList.remove('visible');
    });
  });
}

/* ============================================================
   COPY EMAIL
============================================================ */
const copyBtn = document.getElementById('copyEmailBtn');
const toastEl = document.getElementById('toast');

let toastTimer;
if (copyBtn && toastEl) {
  copyBtn.addEventListener('click', () => {
    const email = copyBtn.getAttribute('data-email');
    navigator.clipboard.writeText(email)
      .then(() => {
        toastEl.textContent = lang === 'pt' ? '✓ E-mail copiado!' : '✓ Email copied!';
        toastEl.classList.add('show');
        clearTimeout(toastTimer);
        toastTimer = setTimeout(() => toastEl.classList.remove('show'), 2200);
      })
      .catch(() => {
        window.location.href = 'mailto:' + email;
      });
  });
}

/* ============================================================
   INIT
============================================================ */
setLang(lang);

/* ============================================================
   DEEP LINK — #project/slug URL support
============================================================ */
function handleDeepLink(hash) {
  if (!hash) hash = window.location.hash;
  if (!hash.startsWith('#project/')) return;
  const slug = hash.slice('#project/'.length);
  if (projects[slug]) {
    // fromDeepLink=true: don't pushState (URL already has hash); close will cleanup with pushState
    setTimeout(() => openModal(slug, true), 150);
  }
}

handleDeepLink(location.hash);
