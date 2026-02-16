// =============================================
// Serva Labari - index.js (VERSIÓN SIMPLIFICADA)
// JavaScript para la página principal
// =============================================

// Mobile menu toggle
const menuToggle = document.getElementById('menuToggle');
const nav = document.querySelector('nav');

if (menuToggle && nav) {
    menuToggle.addEventListener('click', () => {
        nav.classList.toggle('active');
        menuToggle.classList.toggle('active');
    });
}

// Header scroll effect
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (header) {
        if (window.scrollY > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    }
});

// Smooth scrolling SOLO para el botón "Conocer Más" que va a #sobre-nosotros
const conocerMasBtn = document.querySelector('a[href="#sobre-nosotros"]');
if (conocerMasBtn) {
    conocerMasBtn.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector('#sobre-nosotros');
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
}