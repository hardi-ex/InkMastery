ScrollReveal().reveal('.wrapper', {
  origin: 'bottom', // Направление появления элемента
  distance: '50px',
  duration: 800,
  delay: 200,
  opacity: 0,
  scale: 1, // Масштаб элемента (1 — без изменений)
});

document.addEventListener('DOMContentLoaded', function () {
  var scroll = new SmoothScroll('a[href*="#"]', {
    speed: 900,
    offset: 100,
    easing: 'easeInOutCubic',
  });
});
