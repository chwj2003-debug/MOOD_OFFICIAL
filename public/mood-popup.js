(() => {
  const popup = document.getElementById('mood-event-popup');
  if (!popup || typeof popup.showModal !== 'function') return;
  const image = popup.querySelector('img');
  const storageKey = 'mood-insight-20261114-hidden-date';
  const today = () => new Intl.DateTimeFormat('en-CA', {
    timeZone: 'Asia/Seoul', year: 'numeric', month: '2-digit', day: '2-digit'
  }).format(new Date());
  try { if (localStorage.getItem(storageKey) === today()) return; } catch {}
  popup.querySelector('[data-popup-close]').addEventListener('click', () => popup.close());
  popup.querySelector('[data-popup-hide-today]').addEventListener('click', () => {
    try { localStorage.setItem(storageKey, today()); } catch {}
    popup.close();
  });
  const open = async () => {
    if (image.naturalWidth === 0) return;
    try { await image.decode(); } catch { return; }
    if (!popup.open) popup.showModal();
  };
  // Never display a broken-image popup if the poster cannot load.
  if (image.complete) open();
  else image.addEventListener('load', open, { once: true });
})();
