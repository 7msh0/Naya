/* ================= PASSWORD UNLOCK ================= */
function unlock() {
  const pass = document.getElementById('password').value;
  const error = document.getElementById('error');

  error.classList.add('hidden');

  if (pass === 'عسولي') {
    document.getElementById('lock').style.display = 'none';
    document.getElementById('content').classList.remove('hidden');

    startRain();
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

/* ================= PHOTO CAROUSEL ================= */
const photos = [
  { src: 'img/love.jpeg' },
  { src: 'img/caffe.jpg' },
  { src: 'img/after.jpeg' },
  { src: 'img/huge.jpeg' },
  { src: 'img/food.png' }
];

let currentIndex = 0;

function updateCarousel() {
  const image = document.getElementById('carousel-image');
  if (!image) return;

  const sections = document.querySelectorAll('.poem-section');
  const activeSection = document.querySelector(`.poem-section[data-photo="${currentIndex}"]`);

  // Fade out text
  sections.forEach(section => section.style.opacity = 0);

  // Trigger shake on image
  image.classList.add('shake');

  setTimeout(() => {
    // Swap the photo
    image.src = photos[currentIndex].src;

    // Remove shake so it can be triggered next time
    image.classList.remove('shake');

    // Fade in text
    sections.forEach(section => section.classList.remove('active'));
    if (activeSection) {
      activeSection.classList.add('active');
      setTimeout(() => activeSection.style.opacity = 1, 50);
    }
  }, 300);

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

/* ================= CLEAN EASTER EGG ================= */
let eggClicks = 0;
let eggTimer;

const title = document.querySelector('.title');
const egg = document.getElementById('easter-egg');
const eggClose = document.getElementById('egg-close');

title.addEventListener('click', () => {
  eggClicks++;

  clearTimeout(eggTimer);
  eggTimer = setTimeout(() => eggClicks = 0, 2000);

  if (eggClicks === 5) {
    egg.classList.add('active');
    eggClicks = 0;
  }
});

eggClose.addEventListener('click', () => {
  egg.classList.remove('active');
});
