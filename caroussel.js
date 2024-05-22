document.addEventListener('DOMContentLoaded', function() {
    var swiper = new Swiper('.swiper-container', {
      slidesPerView: 3, // Affiche 3 diapositives à la fois
      spaceBetween: 30, // Espace entre les diapositives en pixels
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      loop: true,
    });
  });