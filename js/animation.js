// animação para os elementos com a classe 'data-animate' (scroll suave para aparecer)

console.log("animation.js carregado");

export function initScrollAnimation() {
const animatedElements = document.querySelectorAll('[data-animate]');

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target); // anima só uma vez
      }
    });
  },
  {
    threshold: 0.15 // 15% visível já ativa
  }
);

animatedElements.forEach(el => observer.observe(el));



document.querySelectorAll('[data-animate]').length
}