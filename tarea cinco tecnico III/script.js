document.addEventListener('DOMContentLoaded', () => {
    // Mobile navigation toggle
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('nav ul');

    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('nav-open');
    });

    // Carousel functionality
    const carousel = document.querySelector('.carousel');
    const carouselImages = [
        'imagen1.jpg',
        'imagen2.jpg',
        'imagen3.jpg'
    ];
    let currentImageIndex = 0;

    const carouselImgElement = carousel.querySelector('img');
    const prevButton = document.getElementById('prev');
    const nextButton = document.getElementById('next');

    prevButton.addEventListener('click', () => {
        currentImageIndex = (currentImageIndex === 0) ? carouselImages.length - 1 : currentImageIndex - 1;
        carouselImgElement.src = carouselImages[currentImageIndex];
    });

    nextButton.addEventListener('click', () => {
        currentImageIndex = (currentImageIndex === carouselImages.length - 1) ? 0 : currentImageIndex + 1;
        carouselImgElement.src = carouselImages[currentImageIndex];
    });

    // Form validation
    const form = document.querySelector('form');
    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const nombre = document.querySelector('#nombre').value.trim();
        const email = document.querySelector('#email').value.trim();
        const mensaje = document.querySelector('#mensaje').value.trim();
        let valid = true;

        if (nombre === '') {
            alert('Por favor, ingresa tu nombre.');
            valid = false;
        }

        if (email === '') {
            alert('Por favor, ingresa tu email.');
            valid = false;
        } else if (!validateEmail(email)) {
            alert('Por favor, ingresa un email válido.');
            valid = false;
        }

        if (mensaje === '') {
            alert('Por favor, ingresa un mensaje.');
            valid = false;
        }

        if (valid) {
            alert('Formulario enviado exitosamente.');
            form.reset();
        }
    });

    // Email validation function
    function validateEmail(email) {
        const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        return re.test(String(email).toLowerCase());
    }
});

