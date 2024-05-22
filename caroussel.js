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
    slidesPerView: 3,
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
        delay: 3000, // Délai de 3 secondes entre chaque diapositive
        disableOnInteraction: false, // Continuer le défilement automatique même après une interaction manuelle
      },
    
  });
}