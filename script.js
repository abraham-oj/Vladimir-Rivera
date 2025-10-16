// ===== NUEVA CONFIGURACIÓN DE PARTICLES.JS (Polvo de Estrellas Doradas) =====
particlesJS("particles-js", {
    "particles": {
        "number": {
            "value": 160, // Aumentamos la cantidad de partículas
            "density": { "enable": true, "value_area": 800 }
        },
        "color": { "value": "#C9A227" }, // Mantenemos el color dorado
        "shape": { "type": "star" }, // Mantenemos la forma de estrella
        "opacity": {
            "value": 0.7, // Aumentamos la opacidad para que sean más visibles
            "random": true,
            "anim": { "enable": true, "speed": 1, "opacity_min": 0.1, "sync": false }
        },
        "size": {
            "value": 3, // Hacemos las estrellas un poco más grandes
            "random": true
        },
        "move": {
            "enable": true,
            "speed": 1.5, // Aumentamos la velocidad de movimiento
            "direction": "none", "random": true, "straight": false, "out_mode": "out"
        }
    },
    "interactivity": {
        "detect_on": "canvas",
        "events": {
            "onhover": { "enable": true, "mode": "repulse" }, // Efecto interactivo al pasar el mouse
            "onclick": { "enable": true, "mode": "push" }
        }
    },
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

// Lógica para el Modal (Lightbox) de las galerías
const modal = document.getElementById('imageModal');
const modalImage = document.getElementById('modalImage');

function openModal(imageUrl) {
    modal.style.display = "flex";
    modalImage.src = imageUrl;
}

function closeModal() {
    modal.style.display = "none";
}

window.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
        closeModal();
    }
});
