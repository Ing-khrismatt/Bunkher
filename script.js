document.addEventListener("DOMContentLoaded", function() {
    // Smooth scrolling
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Scroll animations
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
            }
        });
    }, {
        threshold: 0.5
    });

    document.querySelectorAll('.producto').forEach(producto => {
        observer.observe(producto);
    });

    // Background color change on scroll
    window.addEventListener('scroll', () => {
        const scrollY = window.scrollY;
        if (scrollY > 100) {
            document.body.style.backgroundColor = '#111';
            document.querySelector('header').style.backgroundColor = '#111';
            document.querySelector('nav').style.backgroundColor = '#222';
            document.querySelector('footer').style.backgroundColor = '#111';
        } else {
            document.body.style.backgroundColor = '#000';
            document.querySelector('header').style.backgroundColor = '#000';
            document.querySelector('nav').style.backgroundColor = '#111';
            document.querySelector('footer').style.backgroundColor = '#000';
        }
    });
});

