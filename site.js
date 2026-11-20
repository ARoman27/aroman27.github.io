// ---------------------------------------------------------------
// Paste your store links here once the app is live.
// Leave them empty ('') and the buttons show "Coming soon".
// ---------------------------------------------------------------
const STORE_LINKS = {
  appStore: '',   // e.g. https://apps.apple.com/app/id1234567890
  googlePlay: '', // e.g. https://play.google.com/store/apps/details?id=com.yourname.blockdrop
};

document.querySelectorAll('[data-store]').forEach(a => {
  const url = STORE_LINKS[a.dataset.store];
  if (url) { a.href = url; a.classList.remove('soon'); a.querySelector('small').textContent = a.dataset.label; }
});
const any = Object.values(STORE_LINKS).some(Boolean);
document.querySelectorAll('.soon-note').forEach(n => { n.style.display = any ? 'none' : ''; });
const y = document.getElementById('year'); if (y) y.textContent = new Date().getFullYear();
