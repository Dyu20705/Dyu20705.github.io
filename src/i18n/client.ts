import { ui } from './site';

function storedLanguage(): 'vi' | 'en' {
  try { return localStorage.getItem('siteLang') === 'en' ? 'en' : 'vi'; }
  catch { return 'vi'; }
}

export function initLocale() {
  const button = document.querySelector<HTMLButtonElement>('#language-toggle');
  function apply(lang: 'vi' | 'en') {
    document.documentElement.lang = lang;
    document.querySelectorAll<HTMLElement>('[data-copy-lang]').forEach(el => {
      el.hidden = el.dataset.copyLang !== lang;
    });
    document.querySelectorAll<HTMLElement>('[data-ui]').forEach(el => {
      const key = el.dataset.ui as keyof typeof ui.vi;
      if (ui[lang][key]) el.textContent = ui[lang][key];
    });
    document.querySelectorAll<HTMLElement>('[data-ui-aria]').forEach(el => {
      const key = el.dataset.uiAria as keyof typeof ui.vi;
      if (ui[lang][key]) el.setAttribute('aria-label', ui[lang][key]);
    });
    document.querySelectorAll<HTMLElement>('[data-alt-vi]').forEach(el => {
      el.setAttribute('alt', el.dataset[lang === 'vi' ? 'altVi' : 'altEn'] || '');
    });
    document.querySelectorAll<HTMLElement>('[data-aria-vi]').forEach(el => {
      el.setAttribute('aria-label', el.dataset[lang === 'vi' ? 'ariaVi' : 'ariaEn'] || '');
    });
    document.querySelectorAll<HTMLElement>('[data-meta-vi]').forEach(el => {
      const value = el.dataset[lang === 'vi' ? 'metaVi' : 'metaEn'] || '';
      if (el.tagName === 'TITLE') el.textContent = value;
      else el.setAttribute('content', value);
    });
    document.querySelectorAll<HTMLMetaElement>('[property="og:locale"]').forEach(el => {
      el.content = lang === 'vi' ? 'vi_VN' : 'en_US';
    });
    document.querySelectorAll<HTMLMetaElement>('[property="og:locale:alternate"]').forEach(el => {
      el.content = lang === 'vi' ? 'en_US' : 'vi_VN';
    });
    button?.setAttribute('title', ui[lang].language);
    if (button) button.dataset.lang = lang;
    const status = document.querySelector<HTMLElement>('#copy-status');
    if (status) status.textContent = '';
    try { localStorage.setItem('siteLang', lang); } catch { /* Static locale still works. */ }
  }
  apply(storedLanguage());
  button?.addEventListener('click', () => apply(document.documentElement.lang === 'vi' ? 'en' : 'vi'));
  document.querySelectorAll<HTMLButtonElement>('[data-copy-email]').forEach(el => {
    el.hidden = false;
    el.addEventListener('click', async () => {
      const status = document.querySelector<HTMLElement>('#copy-status');
      const lang = document.documentElement.lang === 'en' ? 'en' : 'vi';
      try {
        await navigator.clipboard.writeText(el.dataset.copyEmail || '');
        if (status) status.textContent = ui[lang].copied;
      } catch {
        if (status) status.textContent = ui[lang].copyFailed;
      }
    });
  });
  if (button) button.hidden = false;
}
