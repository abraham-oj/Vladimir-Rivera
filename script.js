// Configuración de Particles.js para el fondo animado
particlesJS("particles-js", {
    "particles": { "number": { "value": 60, "density": { "enable": true, "value_area": 800 } }, "color": { "value": "#C9A227" }, "shape": { "type": "star" }, "opacity": { "value": 0.4, "random": true, "anim": { "enable": true, "speed": 0.8, "opacity_min": 0, "sync": false } }, "size": { "value": 2.5, "random": true }, "move": { "enable": true, "speed": 0.8, "direction": "none", "random": true, "straight": false, "out_mode": "out" } },
    "interactivity": { "detect_on": "canvas", "events": { "onhover": { "enable": false }, "onclick": { "enable": false } } },
    "retina_detect": true
});

// Lógica para el menú de navegación en móviles
const mobileMenuButton = document.getElementById('mobile-menu-button');
const mobileMenu = document.getElementById('mobile-menu');
mobileMenuButton.addEventListener('click', () => mobileMenu.classList.toggle('hidden'));

// Lógica para la animación de aparición al hacer scroll
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
