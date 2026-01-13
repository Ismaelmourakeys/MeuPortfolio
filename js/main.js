// Importação do arquivo menu.js
import { initMenu, initHeaderScroll, initMenuAnimations } from "./menu.js";
import { initCarousel } from "./carousel.js";
import { initScrollAnimation, setupCardInteractions, initCards } from "./cards.js";
import { initVideoModal } from "./videoModal.js";

document.addEventListener("DOMContentLoaded", () => {

    //MENU + HEADER com scroll + ANIMAÇÕES de menu 
    initMenu();
    initHeaderScroll();
    initMenuAnimations();

    //CARROSSEL 
    initCarousel();

    //VIDEO MODAL dos cards de projetos
    initVideoModal();

    //CARDS de projetos (abrir/fechar detalhes) + ANIMAÇÕES de scroll
    setupCardInteractions();
    initCards();
    initScrollAnimation();
});


// Efeito de digitação animado
new Typed('#typed', {
    strings: ['Desenvolvedor', 'Designer', 'Estudante'],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});







