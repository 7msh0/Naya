/* ================= UNLOCK FUNCTION ================= */
/* Runs when the user clicks "Open" on the password screen */
function unlock() {
  const pass = document.getElementById('password').value;
  const error = document.getElementById('error');

  // Hide error on each attempt
  error.classList.add('hidden');

  if (pass === 'عسولي') {

    document.getElementById('lock').style.display = 'none';
    document.getElementById('content').classList.remove('hidden');

    startRain();

    setTimeout(() => {
      document.getElementById('moreBtn').classList.add('show');
    }, 1500);

  } else {
    error.classList.remove('hidden');
  }
}
/* ================= GALLERY & RAIN ================= */
/* Trigger gallery reveal and start heart/flower rain */
document.getElementById('moreBtn').addEventListener('click', () => {

  // Show gallery section
  const gallery = document.getElementById('gallery');
  gallery.classList.remove('hidden');

  // Smooth scroll to gallery
  gallery.scrollIntoView({ behavior: 'smooth' });

  // Start raining hearts and flowers
  startRain();
});

/* ================= FALLING HEARTS & FLOWERS ================= */
function startRain() {
  const container = document.getElementById('rain-container');
  const symbols = ['💖', '🌸', '🌺', '💐'];

  for (let i = 0; i < 30; i++) {
    const elem = document.createElement('div');
    elem.classList.add('falling');
    elem.textContent = symbols[Math.floor(Math.random() * symbols.length)];

    // Random horizontal position
    elem.style.left = Math.random() * 100 + 'vw';
    // Random animation duration (2–6 seconds)
    elem.style.animationDuration = (Math.random() * 4 + 2) + 's';
    // Random size (20–40px)
    elem.style.fontSize = (Math.random() * 20 + 20) + 'px';

    container.appendChild(elem);

    // Remove element after falling
    elem.addEventListener('animationend', () => elem.remove());
  }
}
