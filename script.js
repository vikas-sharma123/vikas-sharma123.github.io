document.addEventListener('DOMContentLoaded', () => {
    // Mobile Menu Toggle
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const links = document.querySelectorAll('.nav-links li');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        hamburger.classList.toggle('toggle');
    });

    // Close menu when clicking a link
    links.forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            hamburger.classList.remove('toggle');
        });
    });

    // Scroll Animations
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const animateElements = document.querySelectorAll('.section-title, .bento-card, .project-card, .skill-card, .hero-content, .hero-image');

    animateElements.forEach(el => {
        el.classList.add('fade-in-up');
        observer.observe(el);
    });

    // Typing Effect for Hero
    const typingText = document.querySelector('.typing-text');
    const textLoad = () => {
        setTimeout(() => {
            typingText.textContent = "Full Stack Developer";
        }, 0);
        setTimeout(() => {
            typingText.textContent = "UI/UX Designer";
        }, 4000);
        setTimeout(() => {
            typingText.textContent = "Open Source Contributor";
        }, 8000);
    }
    textLoad();
    setInterval(textLoad, 12000);

    // Custom Cursor Logic

    const cursor = document.querySelector('.cursor');
    const cursor2 = document.querySelector('.cursor2');

    let mouseX = 0;
    let mouseY = 0;

    document.addEventListener('mousemove', function (e) {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });

    function animateCursor() {
        cursor.style.left = mouseX + "px";
        cursor.style.top = mouseY + "px";
        cursor2.style.left = mouseX + "px";
        cursor2.style.top = mouseY + "px";
        requestAnimationFrame(animateCursor);
    }

    animateCursor();

    // Cursor Effects on Hover
    const hoverables = document.querySelectorAll('a, .btn, .project-card, .skill-card, .bento-card, .contact-info, .contact-form, .hamburger');

    hoverables.forEach(el => {
        el.addEventListener('mouseover', () => {
            cursor.classList.add('active');
        });
        el.addEventListener('mouseleave', () => {
            cursor.classList.remove('active');
        });
    });

    // Vanilla Tilt Initialization
    VanillaTilt.init(document.querySelectorAll(".project-card, .skill-card, .bento-card, .contact-info, .contact-form"), {
        max: 10,
        speed: 400,
        glare: true,
        "max-glare": 0.2,
    });
});
