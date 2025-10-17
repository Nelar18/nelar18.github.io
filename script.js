const carousel = document.querySelector('.carousel');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

// ancho de una tarjeta + gap
const cardWidth = document.querySelector('.project-card').offsetWidth + 20;

nextBtn.addEventListener('click', () => {
  carousel.scrollBy({ left: cardWidth * 3, behavior: 'smooth' });
});

prevBtn.addEventListener('click', () => {
  carousel.scrollBy({ left: -cardWidth * 3, behavior: 'smooth' });
});
