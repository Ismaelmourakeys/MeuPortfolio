// Importação do arquivo menu.js
import { initMenu, initHeaderScroll, initMenuAnimations } from "./menu.js";
import { initCarousel } from "./carousel.js";
import { setupCardInteractions, initCards } from "./cards.js";
import { initVideoModal } from "./videoModal.js";
import { initScrollAnimation } from "./animation.js";
import { initCertificados } from "./certificações.js";
//import { setLanguage } from "./lang_control/i18nController.js";



document.addEventListener("DOMContentLoaded", () => {

    /* Controle de idioma
    const languageSelect = document.getElementById("languageSelect");
    const savedLang = localStorage.getItem("lang") || "pt";

    setLanguage(savedLang);
    languageSelect.value = savedLang;

    languageSelect.addEventListener("change", (e) => {
        const lang = e.target.value;
        setLanguage(lang);
        localStorage.setItem("lang", lang);
    });*/
    
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

    //Certificados
    initCertificados();
});


// Efeito de digitação animado
new Typed('#typed', {
    strings: ['Desenvolvedor', 'Designer', 'Estudante'],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});

/*
<!-- PASTA JS -->
    menu.js	- controla o menu (abrir / fechar)
    carousel.js - controla a dinamica do carrossel
    cards.js - controla os cards (ver mais, overlay)
    animation.js - controla as animações de entrada dos elementos
    videoModal.js - controla o modal de vídeo dos cards
    certificaço.js - controla a seção de certificados (carregar dinamicamente e modal)
    main.js - faz a junção de todos acima sendo o arquivo principal
    
    FUTURAS IMPLEMENTAÇÕES:
    i18nController.js - controla a idioma do site (opção de idioma, tradução dinâmica)
    lang.js - arquivo de tradução para o i18nController.js, que é colocado em cada class do 
    elemento que deve ser traduzido, com a chave de tradução correspondente (ex: class="data-i18n key-home-title") e o i18nController.js faz a troca dinâmica do texto com base na chave e no idioma selecionado.)

*/




