// animação para os elementos com a classe 'data-animate' (scroll suave para aparecer)

/*console.log("animation.js carregado");

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
}*/

export function initScrollAnimation() {
  const elements = document.querySelectorAll('[data-animate]');
  if (!elements.length) return;

  function animate() {
    const vh = window.innerHeight;

    elements.forEach(el => {
      const rect = el.getBoundingClientRect();

      const start = vh * 0.85;
      const end = vh * 0.3;

      let progress;

      if (rect.top <= end) {
        progress = 1;
      } else if (rect.top >= start) {
        progress = 0;
      } else {
        progress = (start - rect.top) / (start - end);
      }

      // 🧠 se for animate-once e já animou, trava
      if (el.dataset.animateOnce && el.classList.contains('animated')) {
        return;
      }

      let x = 0;
      let y = 0;

      const direction = el.dataset.animate;

      if (direction === 'left') x = -40;
      if (direction === 'right') x = 40;
      if (direction === 'up' || !direction) y = 40;

      el.style.opacity = progress;
      el.style.transform = `
        translate3d(${x * (1 - progress)}px, ${y * (1 - progress)}px, 0)
        scale(${0.98 + progress * 0.02})
      `;

      //el.style.filter = `blur(${(1 - progress) * 1}px)`;

      // ✅ marca como finalizado
      if (progress === 1 && el.dataset.animateOnce) {
        el.classList.add('animated');
        el.style.filter = 'none';
      }
    });

    requestAnimationFrame(animate);
  }

  animate();
}

