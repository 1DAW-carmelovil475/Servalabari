// =============================================
// Serva Labari - contacto.js
// JavaScript para la página de contacto
// =============================================

// Mobile menu toggle
const menuToggle = document.getElementById('menuToggle');
const nav = document.querySelector('nav');

menuToggle.addEventListener('click', () => {
    nav.classList.toggle('active');
    menuToggle.classList.toggle('active');
});

// Header scroll effect
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 100) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Form validation
const form = document.getElementById('contactForm');

form.addEventListener('submit', function(e) {
    const fecha = document.getElementById('fecha').value;
    const today = new Date().toISOString().split('T')[0];
    
    if (fecha < today) {
        e.preventDefault();
        alert('Por favor, selecciona una fecha futura para tu evento.');
        return false;
    }
});

// FAQ Accordion
const faqHeaders = document.querySelectorAll('.faq-accordion-header');

faqHeaders.forEach(header => {
    header.addEventListener('click', () => {
        const item = header.parentElement;
        const isActive = item.classList.contains('active');
        
        // Close all items
        document.querySelectorAll('.faq-accordion-item').forEach(faqItem => {
            faqItem.classList.remove('active');
        });
        
        // Open clicked item if it wasn't active
        if (!isActive) {
            item.classList.add('active');
        }
    });
});