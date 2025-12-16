// Seleciona o botão do menu e o menu
const menuToggle = document.getElementById('menuToggle');
const mobileMenu = document.getElementById('mobileMenu');

// Alterna a visibilidade do menu
menuToggle.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});

// Fecha o menu quando um link é clicado
const menuLinks = mobileMenu.querySelectorAll('a');
menuLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
    });
});
// Adiciona uma animação suave ao abrir e fechar o menu
menuToggle.addEventListener('click', () => {
    if (mobileMenu.classList.contains('hidden')) {
        mobileMenu.style.opacity = 0;
        mobileMenu.classList.remove('hidden');
        setTimeout(() => {
            mobileMenu.style.opacity = 1;
        }, 10);
    } else {
        mobileMenu.style.opacity = 0;
        setTimeout(() => {
            mobileMenu.classList.add('hidden');
        }, 300);
    }
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