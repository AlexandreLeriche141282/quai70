// Formulaire de réservation ---------------------------//

document.addEventListener('DOMContentLoaded', function () {
    const bookingDate = document.getElementById('bookingDate');
    const bookingTime = document.getElementById('bookingTime');

    // Obtient la date d'aujourd'hui au format YYYY-MM-DD
    const today = new Date().toISOString().split("T")[0];
    bookingDate.value = today;
    bookingDate.min = today;

    // Heures d'ouverture du restaurant
    const openingHours = {
        weekday: { start: "12:00", end: "21:00" },
        weekend: { start: "12:00", end: "21:00" }
    };

    // Fonction pour obtenir les heures d'ouverture en fonction de la date sélectionnée
    function getOpeningHours(date) {
        const day = new Date(date).getDay();
        return (day === 0 || day === 6) ? openingHours.weekend : openingHours.weekday;
    }

    // Fonction pour générer les options du sélecteur d'heure
    function generateTimeOptions(startTime, endTime) {
        const start = parseInt(startTime.split(':')[0], 10);
        const end = parseInt(endTime.split(':')[0], 10);
        bookingTime.innerHTML = '';

        for (let hour = start; hour <= end; hour++) {
            for (let minute = 0; minute < 60; minute += 30) {
                const time = `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`;
                const option = document.createElement('option');
                option.value = time;
                option.textContent = time;
                bookingTime.appendChild(option);
            }
        }
    }

    // Initialisation des options d'heure en fonction de la date sélectionnée
    function initializeTimeOptions() {
        const { start, end } = getOpeningHours(bookingDate.value);
        generateTimeOptions(start, end);
    }

    // Fonction pour désactiver les lundis et mardis
    function isDisabledDay(date) {
        const day = new Date(date).getDay();
        return (day === 1 || day === 2);
    }

    // Événement de changement pour la date
    bookingDate.addEventListener('change', function() {
        if (isDisabledDay(bookingDate.value)) {
            alert('Le restaurant est fermé le lundi et mardi. Veuillez sélectionner une autre date.');
            bookingDate.value = '';
        } else {
            initializeTimeOptions();
        }
    });

    // Initialiser les options d'heure pour la date actuelle au chargement de la page
    initializeTimeOptions();
});


// Menu Burger ---------------------------------------- //
document.addEventListener('DOMContentLoaded', function() {
    const burgerMenu = document.querySelector('.burger-menu');
    const navElements = document.querySelector('.nav-elements');
    const navLinks = document.querySelectorAll('.nav-elements li a');

    burgerMenu.addEventListener('click', function() {
      navElements.classList.toggle('active');
    });

    // Fermer le menu en mode mobile après avoir cliqué sur un lien de navigation
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        const isMobile = window.innerWidth <= 768; // Définissez la largeur maximale pour le mode mobile
        if (isMobile && navElements.classList.contains('active')) {
          navElements.classList.remove('active');
        }
      });
    });
});


// --------------ApparitiontextePhotoscroll-----------------// 
const sr = ScrollReveal();

sr.reveal(".textApparition", {
    duration: 1000,
    origin: 'top',
    scale: '0.5',
    reset:'true'
});
sr.reveal(".intro-pic", {
    duration: 2000,
    opacity: 0, // Commence à une opacité de 0
    reset: true
});
sr.reveal(".event-1", {
    duration: 2000,
    opacity: 0,
    reset: true,
    delay: 0, // Aucun délai pour le premier élément
});

sr.reveal(".event-2", {
    duration: 2000,
    opacity: 0,
    reset: true,
    delay: 500, // Délai de 500 millisecondes pour le deuxième élément
});

sr.reveal(".event-3", {
    duration: 2000,
    opacity: 0,
    reset: true,
    delay: 1000, // Délai de 1000 millisecondes pour le troisième élément
});

// -------------- Disparition et Apparition navBar ----------//
// Sélectionnez la navigation
const nav = document.querySelector('nav');
let lastScroll = 0;

window.addEventListener("scroll", () => {
    if (window.scrollY < lastScroll) {
        nav.style.top ="0";
    } else {
        nav.style.top = "-140px"
    }
    lastScroll = window.scrollY;

});

