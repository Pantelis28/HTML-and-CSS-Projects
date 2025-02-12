document.addEventListener('DOMContentLoaded', function () {
    // Smooth scroll for navigation links
    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            document.getElementById(targetId).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Mobile menu toggle
    const nav = document.querySelector('.navbar');
    const navToggle = document.createElement('button');
    navToggle.classList.add('nav-toggle');
    navToggle.innerHTML = '<i class="fas fa-bars"></i>';
    nav.appendChild(navToggle);

    navToggle.addEventListener('click', () => {
        nav.classList.toggle('nav-open');
    });

    // Close mobile menu when link is clicked
    const navItems = document.querySelectorAll('.nav-links a');
    navItems.forEach(item => {
        item.addEventListener('click', () => {
            nav.classList.remove('nav-open');
        });
    });

    // ScrollReveal animation
    ScrollReveal().reveal('.hero-content', { delay: 200, distance: '50px', origin: 'bottom' });
    ScrollReveal().reveal('.footer-section', { delay: 200, distance: '50px', origin: 'bottom' });
});
