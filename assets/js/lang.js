const languageSelectorEl = document.getElementById('language-selector');

languageSelectorEl.addEventListener('change', () => {
  const lang = languageSelectorEl.value;
  const url = `index-${lang}.html`;
  window.location.href = url;
});

