export function switchLanguage(lang) {
  if (typeof window === 'undefined') return;

  if (lang === 'en') {
    document.cookie = 'googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
    document.cookie = `googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=.${window.location.hostname};`;
    window.location.reload();
    return;
  }

  document.cookie = `googtrans=/en/${lang}; path=/;`;
  document.cookie = `googtrans=/en/${lang}; path=/; domain=.${window.location.hostname};`;
  window.location.reload();
}