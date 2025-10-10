document.addEventListener('DOMContentLoaded', () => {

    // --- 1. Inicialización del Fondo de Partículas ---
    tsParticles.load("tsparticles", {
        fpsLimit: 60,
        particles: {
            number: { value: 60, density: { enable: true, value_area: 800 } },
            color: { value: "#8A2BE2" }, // Color morado
            shape: { type: "circle" },
            opacity: { value: 0.5, random: true, anim: { enable: true, speed: 1, opacity_min: 0.1, sync: false } },
            size: { value: 2, random: true, anim: { enable: false } },
            line_linked: { enable: true, distance: 150, color: "#8A2BE2", opacity: 0.4, width: 1 },
            move: { enable: true, speed: 1, direction: "none", random: false, straight: false, out_mode: "out", bounce: false }
        },
        interactivity: {
            detect_on: "canvas",
            events: { onhover: { enable: true, mode: "grab" }, onclick: { enable: true, mode: "push" }, resize: true },
            modes: {
                grab: { distance: 140, line_opacity: 1 },
                push: { particles_nb: 4 },
            }
        },
        retina_detect: true
    });

    // --- 2. Lógica para Animaciones de Scroll ---
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                
                // Si el elemento revelado es la sección de análisis, inicializa los gráficos
                if (entry.target.id === 'analysis-section') {
                    initCharts();
                }
                
                // Dejar de observar para que la animación no se repita
                revealObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.15 });

    document.querySelectorAll('.reveal').forEach(el => {
        revealObserver.observe(el);
    });

    // --- 3. Lógica para los Gráficos de Análisis Predictivo ---
    let chartsInitialized = false;
    function initCharts() {
        if (chartsInitialized) return;
        chartsInitialized = true;

        // Estilos comunes para los gráficos
        Chart.defaults.color = 'rgba(224, 224, 224, 0.8)';
        Chart.defaults.font.family = "'Montserrat', sans-serif";
        
        // Gráfico de Barras: Rendimiento por Negocio
        const barCtx = document.getElementById('barChart').getContext('2d');
        new Chart(barCtx, {
            type: 'bar',
            data: {
                labels: ['Bar Centro', 'Bar Roma', 'Estadio Béisbol'],
                datasets: [{
                    label: 'Ingresos Mensuales (Simulación)',
                    data: [45000, 62000, 185000],
                    backgroundColor: [
                        'rgba(212, 175, 55, 0.4)',
                        'rgba(212, 175, 55, 0.6)',
                        'rgba(212, 175, 55, 1)'
                    ],
                    borderColor: [
                        '#a88a2c',
                        '#a88a2c',
                        '#D4AF37'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                plugins: {
                    legend: { display: false },
                    title: { display: true, text: 'Rendimiento por Ubicación', font: { size: 18 }, color: '#D4AF37' }
                },
                scales: {
                    y: { grid: { color: 'rgba(255, 255, 255, 0.1)' } },
                    x: { grid: { display: false } }
                }
            }
        });

        // Gráfico de Dona: Perfil de Cliente en el Estadio
        const doughnutCtx = document.getElementById('doughnutChart').getContext('2d');
        new Chart(doughnutCtx, {
            type: 'doughnut',
            data: {
                labels: ['Aficionados (Día de Partido)', 'Clientes Locales (Recurrentes)', 'Turistas'],
                datasets: [{
                    label: 'Perfil de Cliente',
                    data: [65, 25, 10],
                    backgroundColor: ['#D4AF37', '#a88a2c', '#F0E68C'],
                    borderColor: '#000000',
                    borderWidth: 2,
                    hoverOffset: 4
                }]
            },
             options: {
                responsive: true,
                plugins: {
                    legend: { position: 'top' },
                    title: { display: true, text: 'Predicción: Perfil de Cliente de Alto Valor (Estadio)', font: { size: 18 }, color: '#D4AF37' }
                }
            }
        });
    }
});