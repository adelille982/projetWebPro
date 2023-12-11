document.addEventListener('DOMContentLoaded', initializeMenu);
window.addEventListener('resize', handleResize);

const hamburgerBtn = document.querySelector('.hamburger-icon');
const menu = document.querySelector('.menu');
let isNavDisplayed = false;

hamburgerBtn.addEventListener('click', toggleMenu);

// Ajoute des écouteurs d'événements à tous les liens dans le menu
document.querySelectorAll('.menu a').forEach(link => {
    link.addEventListener('click', () => {
        if (isNavDisplayed) {
            toggleMenu(); // Utilise la fonction toggleMenu existante pour fermer le menu
        }
    });
});

function toggleMenu() {
    if (isNavDisplayed) {
        menu.classList.add('hidden'); // Cache le menu
        hamburgerBtn.classList.remove('bi-x', 'open'); // Retire la classe pour la croix noire
        hamburgerBtn.classList.add('bi-list');
    } else {
        menu.classList.remove('hidden'); // Affiche le menu
        hamburgerBtn.classList.remove('bi-list');
        hamburgerBtn.classList.add('bi-x', 'open'); // Ajoute la classe pour la croix noire
    }
    isNavDisplayed = !isNavDisplayed; // Met à jour l'état d'affichage
}

function handleResize() {
    if (window.innerWidth >= 1000) {
        // Sur les grands écrans, affiche toujours le menu et réinitialise l'icône
        menu.classList.remove('hidden', 'open');
        hamburgerBtn.classList.remove('bi-x', 'open');
        hamburgerBtn.classList.add('bi-list');
        isNavDisplayed = false; // Réinitialise l'état
    } else {
        // Sur les petits écrans, cache toujours le menu et réinitialise l'icône
        if (!isNavDisplayed) {
            menu.classList.add('hidden');
            hamburgerBtn.classList.remove('bi-x', 'open');
            hamburgerBtn.classList.add('bi-list');
        }
    }
}

function initializeMenu() {
    if (window.innerWidth < 1000) {
        // Sur les petits écrans, initialise le menu comme caché
        menu.classList.add('hidden');
        hamburgerBtn.classList.add('bi-list');
        hamburgerBtn.classList.remove('bi-x', 'open');
        isNavDisplayed = false;
    } else {
        // Sur les grands écrans, initialise le menu comme visible
        menu.classList.remove('hidden');
        hamburgerBtn.classList.remove('bi-x', 'open');
        hamburgerBtn.classList.add('bi-list');
        isNavDisplayed = true;
    }
}
