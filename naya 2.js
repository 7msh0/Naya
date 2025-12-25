/* ================= PASSWORD UNLOCK ================= */
function unlock() {
  const pass = document.getElementById('password').value;
  const error = document.getElementById('error');

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



/* ================= FALLING HEARTS (FULL PAGE) ================= */
function startRain() {
  const container = document.getElementById('rain-container');
  if (!container) return;

  const symbols = ['💖', '🌸', '🌺', '💐'];

  for (let i = 0; i < 30; i++) {
    const elem = document.createElement('div');
    elem.classList.add('falling');
    elem.textContent = symbols[Math.floor(Math.random() * symbols.length)];

    elem.style.left = Math.random() * 100 + 'vw';
    elem.style.animationDuration = (Math.random() * 4 + 2) + 's';
    elem.style.fontSize = (Math.random() * 20 + 20) + 'px';

    container.appendChild(elem);
    elem.addEventListener('animationend', () => elem.remove());
  }
}
a
/* ================= PHOTO CAROUSEL ================= */
const photos = [
  { src: 'img/love.jpeg' },
  { src: 'img/caffe.jpg' },
  { src: 'img/after.jpeg' },
  { src: 'img/huge.jpeg' },
  { src: 'img/food.png' }
  // Removed studying.png
];

let currentIndex = 0;

function updateCarousel() {
  const image = document.getElementById('carousel-image');
  if (!image) return;

  image.style.opacity = 0;

  setTimeout(() => {
    image.src = photos[currentIndex].src;
    image.style.opacity = 1;
  }, 250);

  startCarouselRain();
}


function nextPhoto() {
  currentIndex = (currentIndex + 1) % photos.length;
  updateCarousel();
}

function prevPhoto() {
  currentIndex = (currentIndex - 1 + photos.length) % photos.length;
  updateCarousel();
}

/* ================= HEARTS BEHIND PHOTO ================= */
function startCarouselRain() {
  const container = document.getElementById('carousel-rain');
  if (!container) return;

  container.innerHTML = '';
  const symbols = ['💖', '🌸', '🌺', '💐'];

  for (let i = 0; i < 20; i++) {
    const elem = document.createElement('div');
    elem.classList.add('falling');
    elem.textContent = symbols[Math.floor(Math.random() * symbols.length)];

    elem.style.left = Math.random() * 100 + '%';
    elem.style.top = Math.random() * 50 + 'px';
    elem.style.fontSize = (Math.random() * 18 + 18) + 'px';
    elem.style.animationDuration = (Math.random() * 3 + 2) + 's';

    container.appendChild(elem);
    elem.addEventListener('animationend', () => elem.remove());
  }
}

/* ================= INITIAL LOAD ================= */
document.addEventListener('DOMContentLoaded', () => {
  updateCarousel();
});
