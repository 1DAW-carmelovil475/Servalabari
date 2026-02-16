// =============================================
// Serva Labari - index.js (VERSIÓN CORREGIDA)
// JavaScript para la página principal
// =============================================

document.addEventListener('DOMContentLoaded', () => {

    // =============================
    // Mobile menu toggle (FIX)
    // =============================
    const menuToggle = document.getElementById('menuToggle');
    const nav = document.querySelector('nav');

    if (menuToggle && nav) {
        menuToggle.addEventListener('click', () => {
            nav.classList.toggle('active');
            menuToggle.classList.toggle('active');
            document.body.classList.toggle('menu-open'); // 👈 CLAVE
        });
    }

    // =============================
    // Header scroll effect
    // =============================
    const header = document.querySelector('header');

    if (header) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });
    }

    // =============================
    // Smooth scrolling SOLO para #sobre-nosotros
    // =============================
    const conocerMasBtn = document.querySelector('a[href="#sobre-nosotros"]');

    if (conocerMasBtn) {
        conocerMasBtn.addEventListener('click', function (e) {
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

});