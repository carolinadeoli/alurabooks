
document.addEventListener('DOMContentLoaded', function () {
    if (window.innerWidth > 768) {
        const sr = ScrollReveal();

        sr.reveal('.banner', {
            origin: 'left',
            distance: '20px',
            duration: 800,
            delay: 100,
            easing: 'cubic-bezier(0.5, 0, 0, 1)',
            reset: true
        });

        sr.reveal('.banner__titulo', {
            origin: 'bottom',
            distance: '20px',
            duration: 800,
            delay: 100,
            easing: 'cubic-bezier(0.5, 0, 0, 1)',
            reset: true
        });

        sr.reveal('.banner__texto', {
            origin: 'bottom',
            distance: '20px',
            duration: 800,
            delay: 100,
            easing: 'cubic-bezier(0.5, 0, 0, 1)',
            reset: true
        });

        sr.reveal('.carrossel__container .card', {
            origin: 'top',
            distance: '20px',
            duration: 800,
            delay: 100,
            easing: 'cubic-bezier(0.5, 0, 0, 1)',
            reset: true
        });

        sr.reveal('.card', {
            origin: 'top',
            distance: '20px',
            duration: 800,
            delay: 100,
            easing: 'cubic-bezier(0.5, 0, 0, 1)',
            reset: true
        });

        sr.reveal('.topicos', {
            origin: 'left',
            distance: '20px',
            duration: 800,
            delay: 100,
            easing: 'cubic-bezier(0.5, 0, 0, 1)',
            reset: true
        });
        sr.reveal(' .topicos .topicos__lista', {
            origin: 'bottom',
            distance: '20px',
            duration: 800,
            delay: 100,
            easing: 'cubic-bezier(0.5, 0, 0, 1)',
            reset: true
        });
        sr.reveal('.contato', {
            origin: 'left',
            distance: '20px',
            duration: 800,
            delay: 100,
            easing: 'cubic-bezier(0.5, 0, 0, 1)',
            reset: true
        });
        sr.reveal('.rodape', {
            origin: 'left',
            distance: '20px',
            duration: 800,
            delay: 100,
            easing: 'cubic-bezier(0.5, 0, 0, 1)',
            reset: true
        });
    }
});