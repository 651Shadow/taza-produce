// Tazza Produce mockup — interactions: bidirectional reveal, dark mode, language, header, mobile nav.
(function () {
  const root = document.documentElement;
  root.classList.add('js');

  // ---- Theme (dark mode) ----
  const themeBtn = document.querySelector('[data-action="theme"]');
  const applyTheme = (t) => {
    document.documentElement.setAttribute('data-theme', t);
    if (themeBtn) themeBtn.textContent = t === 'dark' ? 'Light' : 'Dark';
    try { localStorage.setItem('tazza-theme', t); } catch (e) {}
  };
  let theme = 'light';
  try { theme = localStorage.getItem('tazza-theme') || 'light'; } catch (e) {}
  applyTheme(theme);
  if (themeBtn) themeBtn.addEventListener('click', () => {
    applyTheme(document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark');
  });

  // ---- Language (EN / AR) — full-page body translation ----
  const langBtn = document.querySelector('[data-action="lang"]');
  // Full English -> Arabic map (body copy), loaded from js/ar.js
  const AR = window.TAZZA_AR || {};
  const i18n = {
    en: { 'nav.home':'Home', 'nav.story':'Our Story', 'nav.shop':'Shop', 'nav.hours':'Hours & Location', 'nav.contact':'Contact', 'nav.gallery':'Gallery', 'nav.legal':'Legal',
          'cta.order':'Order Online', 'cta.start':'Start an order', 'cta.read':'Read our story', 'cta.hours':'Hours & directions',
          'cta.shop':'Go to shop', 'cta.send':'Send message', 'cta.legal':'Licenses & Certifications', 'cta.place':'Place an order' },
    ar: { 'nav.home':'الرئيسية', 'nav.story':'قصتنا', 'nav.shop':'المتجر', 'nav.hours':'الساعات والموقع', 'nav.contact':'اتصل بنا', 'nav.gallery':'المعرض', 'nav.legal':'القانوني',
          'cta.order':'اطلب عبر الإنترنت', 'cta.start':'ابدأ طلبك', 'cta.read':'اقرأ قصتنا', 'cta.hours':'الساعات والاتجاهات',
          'cta.shop':'اذهب إلى المتجر', 'cta.send':'إرسال الرسالة', 'cta.legal':'التراخيص والشهادات', 'cta.place':'قدم طلبك' }
  };
  const applyLang = (l) => {
    document.documentElement.setAttribute('lang', l);
    document.documentElement.setAttribute('dir', l === 'ar' ? 'rtl' : 'ltr');
    document.body.setAttribute('dir', l === 'ar' ? 'rtl' : 'ltr');
    if (langBtn) langBtn.textContent = l === 'ar' ? 'EN' : 'ع';
    // nav + CTA
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (i18n[l] && i18n[l][key]) el.textContent = i18n[l][key];
    });
    // body copy: walk text nodes, swap known English strings
    const ar = l === 'ar';
    document.querySelectorAll('h1,h2,h3,p,.kicker,.tag,.more,.family,.lead,.eyebrow,li,dt,dd,figcaption,.lic,.foot-bottom,.card .body *').forEach(el => {
      if (el.matches('a,button,img,svg')) return; // skip interactive/embedded (but allow .more which is an <a> of pure text)
      if (el.tagName === 'A' && !el.classList.contains('more')) return;
      const txt = el.textContent.trim();
      if (!txt) return;
      if (ar && AR[txt]) { if (!el.dataset.en) el.dataset.en = txt; el.textContent = AR[txt]; }
      else if (!ar && el.dataset.en) { el.textContent = el.dataset.en; delete el.dataset.en; }
    });
    // legal sections (full arabic rewrites live in window.TAZZA_LEGAL)
    const legalMap = { 'terms':'Terms of Service', 'privacy':'Privacy Policy', 'refund':'Refund Policy', 'accessibility':'Accessibility' };
    Object.entries(legalMap).forEach(([id, key]) => {
      const sec = document.getElementById(id);
      if (!sec) return;
      if (ar && window.TAZZA_LEGAL && window.TAZZA_LEGAL[key]) {
        if (!sec.dataset.en) sec.dataset.en = sec.innerHTML;
        sec.querySelectorAll('p').forEach((p, i) => {
          const parts = window.TAZZA_LEGAL[key].split('\n\n');
          if (parts[i] !== undefined) p.textContent = parts[i];
        });
      } else if (!ar && sec.dataset.en) {
        sec.innerHTML = sec.dataset.en; delete sec.dataset.en;
      }
    });
  };
  let lang = 'en';
  try { lang = localStorage.getItem('tazza-lang') || 'en'; } catch (e) {}
  applyLang(lang);
  if (langBtn) langBtn.addEventListener('click', () => {
    applyLang(document.documentElement.getAttribute('lang') === 'ar' ? 'en' : 'ar');
  });

  // ---- Bidirectional scroll reveal (fade in down, fade out up) ----
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const items = Array.from(document.querySelectorAll('.reveal'));
  if (reduce || !('IntersectionObserver' in window)) {
    items.forEach(el => el.classList.add('in'));
  } else {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) e.target.classList.add('in');
        else e.target.classList.remove('in');   // fade out when scrolled away (up or down)
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });
    items.forEach(el => io.observe(el));
  }

  // ---- Header shadow on scroll ----
  const header = document.querySelector('header.site');
  const onScroll = () => header && header.classList.toggle('scrolled', window.scrollY > 12);
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  // ---- Mobile menu ----
  const btn = document.querySelector('.menu-btn');
  const nav = document.querySelector('nav.primary');
  if (btn && nav) {
    btn.addEventListener('click', () => {
      const ul = nav.querySelector('ul');
      const open = ul.style.display === 'flex';
      if (open) { ul.style.display = ''; ul.removeAttribute('style'); }
      else { ul.style.cssText = 'position:absolute;top:74px;left:0;right:0;background:var(--bg);flex-direction:column;padding:16px 22px;gap:6px;border-bottom:1px solid var(--line);'; }
      btn.setAttribute('aria-expanded', String(!open));
    });
  }
})();
