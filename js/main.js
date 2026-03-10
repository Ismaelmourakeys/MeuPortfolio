// Importação do arquivo menu.js
import { initMenu, initHeaderScroll, initMenuAnimations } from "./menu.js";
import { initSaudacao } from "./saudacao.js";
import { initCarousel } from "./carousel.js";
import { setupCardInteractions, initCards } from "./cards.js";
import { initVideoModal } from "./videoModal.js";
import { initScrollAnimation } from "./animation.js";
import { initCertificados } from "./certificacoes.js";
import { initHobbies } from "./hobbies.js";
import { initLoader } from "./loader.js";
//import { setLanguage } from "./lang_control/i18nController.js";


// Função para carregar componentes
async function loadComponents() {
  const includes = document.querySelectorAll("[data-include]");

  for (const el of includes) {
    const file = el.getAttribute("data-include");
    const response = await fetch(file + '?v=' + Date.now(), { cache: 'no-store' });
    const html = await response.text();

    const template = document.createElement('template');
    template.innerHTML = html.trim();
    el.replaceWith(template.content.cloneNode(true));
  }
}


// Scroll suave com Lenis
const lenis = new Lenis({
  duration: 2.4,  // duração do scroll em segundos, quanto maior, mais suave
  wheelMultiplier: 0.8,  // quanto menor, mais lento — testa entre 0.3 e 0.7
  smoothWheel: true,
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}
requestAnimationFrame(raf);

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
  
  document.addEventListener("DOMContentLoaded", async () => {
    
    
    // ESPERA os componentes carregarem
    await loadComponents();
  
  //MENU + HEADER
  initMenu();
  initHeaderScroll();
  initMenuAnimations();
  initSaudacao();
  
  //CARROSSEL
  initCarousel();
  
  //VIDEO MODAL
  initVideoModal();
  
  //CARDS
  setupCardInteractions();
  initCards();
  initScrollAnimation();
  
  //HOBBIES
  initHobbies();
  
  //CERTIFICADOS
  initCertificados();

  // LOADER
  initLoader();
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




