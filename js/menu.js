
//Usamos export para poder importar essa função no main.js
export function initMenu() {
    
    // Seleciona o botão do menu e o menu
const menuToggle = document.getElementById('menuToggle');
const mobileMenu = document.getElementById('mobileMenu');

if (!menuToggle || !mobileMenu) return;
const lines = menuToggle.querySelectorAll('.line');

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
}

export function initHeaderScroll () {
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
}

export function initMenuAnimations() {

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
}