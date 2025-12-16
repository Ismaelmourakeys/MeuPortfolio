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


// Função para alternar o conteúdo "Ver mais" / "Ver menos"
const buttons = document.querySelectorAll('.ver-mais');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const currentCard = button.closest('.card');
        const currentContent = currentCard.querySelector('.card-content');

        const isOpen = currentContent.classList.contains('max-h-[2000px]');

        // Fecha TODOS os cards primeiro
        document.querySelectorAll('.card').forEach(card => {
            const content = card.querySelector('.card-content');
            const btn = card.querySelector('.ver-mais');

            content.classList.remove('max-h-[2000px]');
            content.classList.add('max-h-[420px]');
            btn.textContent = 'Ver mais';
        });

        // Se o card clicado estava fechado, abre ele
        if (!isOpen) {
            currentContent.classList.remove('max-h-[420px]');
            currentContent.classList.add('max-h-[2000px]');
            button.textContent = 'Ver menos';
        }
    });

});

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



