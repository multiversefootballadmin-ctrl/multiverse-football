export function switchLanguage(lang) {
  const host = window.location.hostname;
  document.cookie = `googtrans=/en/${lang}; path=/;`;
  document.cookie = `googtrans=/en/${lang}; path=/; domain=.${host};`;
  window.location.reload();
}