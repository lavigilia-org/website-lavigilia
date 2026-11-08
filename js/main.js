// Light/dark mode toggle and fade-in on scroll.

(function () {
  'use strict';

  const STORAGE_KEY = 'lavigilia-mode';
  const html = document.documentElement;
  const toggle = document.getElementById('modeToggle');


  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored === 'light' || stored === 'dark') {
    html.setAttribute('data-mode', stored);
  }
  // Without a stored choice, the CSS follows prefers-color-scheme.


  function currentMode() {
    const explicit = html.getAttribute('data-mode');
    if (explicit) return explicit;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }

  const i18n = {
    fr: { day: 'Jour',  night: 'Nuit',  toLight: 'Passer en mode clair',  toDark: 'Passer en mode sombre' },
    it: { day: 'Giorno', night: 'Notte', toLight: 'Passa alla modalità chiara', toDark: 'Passa alla modalità scura' },
    en: { day: 'Day',   night: 'Night', toLight: 'Switch to light mode',   toDark: 'Switch to dark mode' }
  };

  function getLang() {
    const lang = html.getAttribute('lang') || 'fr';
    return i18n[lang] || i18n.fr;
  }

  function updateToggleIcon() {
    if (!toggle) return;
    const mode = currentMode();
    const t = getLang();
    const icon = toggle.querySelector('.icon');
    const label = toggle.querySelector('.label');
    if (icon) icon.textContent = mode === 'dark' ? '☼' : '☾';
    if (label) label.textContent = mode === 'dark' ? t.day : t.night;
    toggle.setAttribute('aria-label', mode === 'dark' ? t.toLight : t.toDark);
  }

  updateToggleIcon();


  if (toggle) {
    toggle.addEventListener('click', function () {
      const next = currentMode() === 'dark' ? 'light' : 'dark';
      html.setAttribute('data-mode', next);
      localStorage.setItem(STORAGE_KEY, next);
      updateToggleIcon();
    });
  }


  const observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15, rootMargin: '0px 0px -60px 0px' }
  );

  document.querySelectorAll('.fade-in').forEach(function (el) {
    observer.observe(el);
  });

})();
