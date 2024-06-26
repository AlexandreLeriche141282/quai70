// Charger le fichier JSON
fetch('./images.json')
  .then(response => response.json())
  .then(data => {
    // Initialiser le carrousel Swiper avec les données chargées
    initSwiper(data);
  })
  .catch(error => console.error(error));

function initSwiper(images) {
  const swiperWrapper = document.querySelector('.swiper-wrapper');

  // Créer les diapositives avec les URLs des images
  const slides = images.map(image => `
    <div class="swiper-slide">
      <img src="${image.url}" alt="${image.alt}">
    </div>
  `);

  // Ajouter les diapositives dans le swiper-wrapper
  swiperWrapper.innerHTML = slides.join('');

  // Initialiser le carrousel Swiper
  const swiper = new Swiper('.swiper-container', {
    slidesPerView: 3, // Nombre d'images par ligne sur les grands écrans
    spaceBetween: 30,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    loop: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    effect: 'slide',
    speed: 1000,
    breakpoints: {
      // Définir les points de rupture pour les différentes tailles d'écran
      320: {
        slidesPerView: 1, // Afficher 1 image par ligne sur les petits écrans
      },
      768: {
        slidesPerView: 2, // Afficher 2 images par ligne sur les écrans moyens
      },
      1024: {
        slidesPerView: 3, // Afficher 3 images par ligne sur les grands écrans
      },
    },
  });
}