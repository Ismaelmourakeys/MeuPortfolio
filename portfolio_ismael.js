// Seleciona o botão do menu e o menu
const menuToggle = document.getElementById('menuToggle');
const lines = menuToggle.querySelectorAll('.line');
const mobileMenu = document.getElementById('mobileMenu');

menuToggle.addEventListener('click', () => {
    const isOpen = menuToggle.classList.toggle('open');

    // ÍCONE
    if (isOpen) {
        lines[0].classList.add('rotate-45', 'translate-y-2');
        lines[1].classList.add('opacity-0');
        lines[2].classList.add('-rotate-45', '-translate-y-2');
    } else {
        lines[0].classList.remove('rotate-45', 'translate-y-2');
        lines[1].classList.remove('opacity-0');
        lines[2].classList.remove('-rotate-45', '-translate-y-2');
    }

    // MENU (SINCRONIZADO)
    mobileMenu.classList.toggle('opacity-0');
    mobileMenu.classList.toggle('-translate-y-6');
    mobileMenu.classList.toggle('pointer-events-none');
    mobileMenu.classList.toggle('opacity-100');
    mobileMenu.classList.toggle('translate-y-0');
    mobileMenu.classList.toggle('pointer-events-auto');
});


// Fecha ao clicar em um link
mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        menuToggle.classList.remove('open');

        lines[0].classList.remove('rotate-45', 'translate-y-2');
        lines[1].classList.remove('opacity-0');
        lines[2].classList.remove('-rotate-45', '-translate-y-2');

        mobileMenu.classList.add(
            'opacity-0',
            '-translate-y-6',
            'pointer-events-none'
        );
        mobileMenu.classList.remove(
            'opacity-100',
            'translate-y-0',
            'pointer-events-auto'
        );
    });
});

// Lógica dos cards de projetos (abrir/fechar detalhes)
document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll(".project-card");

    cards.forEach(card => {
        const btnVerMais = card.querySelector(".ver-mais");
        const overlay = card.querySelector(".conteudo.detalhes");
        const btnsFechar = card.querySelectorAll(".fechar-detalhes");

        if (!btnVerMais || !overlay) return;

        // ABRIR DETALHES
        btnVerMais.addEventListener("click", () => {
            overlay.classList.remove("hidden");

            // força reflow pra animação funcionar
            overlay.offsetHeight;

            overlay.classList.remove("opacity-0", "scale-95");
            overlay.classList.add("opacity-100", "scale-100");
        });

        // FECHAR DETALHES (qualquer botão de fechar)
        btnsFechar.forEach(btn => {
            btn.addEventListener("click", () => {
                overlay.classList.add("opacity-0", "scale-95");

                setTimeout(() => {
                    overlay.classList.add("hidden");
                    overlay.classList.remove("opacity-100", "scale-100");
                }, 300); // mesmo tempo da transition
            });
        });
    });
});



// Efeito de digitação animado
new Typed('#typed', {
    strings: ['Desenvolvedor', 'Designer', 'Estudante'],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});


// Efeito de scroll no header
const header = document.getElementById('header');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.classList.add(
            'bg-slate-900/80',
            'backdrop-blur-md',
            'shadow-lg'
        );
    } else {
        header.classList.remove(
            'bg-slate-900/80',
            'backdrop-blur-md',
            'shadow-lg'
        );
    }
});

// Animação sequencial dos links do menu mobile
const menuLinksAnimated = document.querySelectorAll('.menu-link');

menuLinksAnimated.forEach((link, index) => {
    link.style.transitionDelay = `${index * 80}ms`;
});

// Animação sequencial dos ícones sociais (Ver como funciona)
const socialIcons = document.querySelectorAll('.social-icon');
socialIcons.forEach((icon, index) => {
    icon.style.transitionDelay = `${index * 100}ms`;
});


// Controles do carrossel
const carousel = document.getElementById("projectsCarousel");
const prev = document.getElementById("prevBtn");
const next = document.getElementById("nextBtn");

const scrollAmount = 460;

next.addEventListener("click", () => {
    carousel.scrollBy({ left: scrollAmount, behavior: "smooth" });
});

prev.addEventListener("click", () => {
    carousel.scrollBy({ left: -scrollAmount, behavior: "smooth" });
});




const cards = document.querySelectorAll('.card');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.remove('opacity-0', 'translate-y-6');
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.2 });

cards.forEach(card => observer.observe(card));


// Modal do video do card de projeto 
// Video modal behavior
            (function () {
                const modal = document.getElementById('videoModal');
                const modalVideo = document.getElementById('modalVideo');
                const closeBtn = document.getElementById('closeVideoModal');

                // open when clicking any element with data-video-src
                document.querySelectorAll('[data-video-src]').forEach(el => {
                    el.addEventListener('click', () => {
                        const src = el.getAttribute('data-video-src');
                        if (!src) return;
                        modalVideo.src = src;
                        modal.classList.remove('hidden');
                        document.body.style.overflow = 'hidden';
                        modalVideo.play().catch(() => { /* ignore play promise */ });
                    });
                });

                function closeModal() {
                    modal.classList.add('hidden');
                    modalVideo.pause();
                    modalVideo.currentTime = 0;
                    modalVideo.src = '';
                    document.body.style.overflow = '';
                }

                closeBtn.addEventListener('click', closeModal);
                modal.addEventListener('click', (e) => {
                    if (e.target === modal) closeModal();
                });

                // optional: stop video when pressing Escape
                document.addEventListener('keydown', (e) => {
                    if (e.key === 'Escape' && !modal.classList.contains('hidden')) closeModal();
                });

                // Keep existing "ver-mais" / "fechar-detalhes" behavior working if you have JS elsewhere.
            })();
