
//Usamos export para poder importar essa função no main.js
export function initMenu() {

    // scroll → glassmorphism
    const headerBg = document.getElementById('header-bg');
    window.addEventListener('scroll', () => {
        headerBg.classList.toggle('opacity-100', window.scrollY > 20);
        headerBg.classList.toggle('opacity-0', window.scrollY <= 20);
    });

    // hamburguer toggle
    const btn = document.getElementById('menuToggle');
    const menu = document.getElementById('mobileMenuHeader');
    const lines = btn.querySelectorAll('.line');
    let open = false;

    btn.addEventListener('click', () => {
        open = !open;
        menu.classList.toggle('hidden', !open);
        menu.classList.toggle('flex', open);

        // anima as linhas → X
        lines[0].style.transform = open ? 'translateY(6px) rotate(45deg)' : '';
        lines[1].style.transform = open ? 'translateY(-6px) rotate(-45deg)' : '';
        lines[2].style.opacity = open ? '0' : '1';
        lines[2].style.width = open ? '0' : '';
    });

    // fecha ao clicar em link
    menu.querySelectorAll('a').forEach(a =>
        a.addEventListener('click', () => {
            open = false;
            menu.classList.add('hidden');
            menu.classList.remove('flex');
            lines[0].style.transform = lines[1].style.transform = '';
            lines[2].style.opacity = '1';
        })
    );
}

    export function initHeaderScroll() {
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
