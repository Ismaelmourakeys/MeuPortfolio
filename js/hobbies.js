export function initHobbies() {

  const items = document.querySelectorAll('.accordion-item');
  const progressBar = document.getElementById('progressBar');

  const colorMap = {
    sky:     'border-sky-400/40 bg-sky-400/5',
    violet:  'border-violet-400/40 bg-violet-400/5',
    emerald: 'border-emerald-400/40 bg-emerald-400/5',
    yellow:  'border-yellow-400/40 bg-yellow-400/5',
    pink:    'border-pink-400/40 bg-pink-400/5',
  };

  function updateProgress() {
    const open = document.querySelectorAll('.accordion-item.open').length;
    if (progressBar) progressBar.style.width = `${(open / items.length) * 100}%`;
  }

  items.forEach(item => {
    const trigger = item.querySelector('.acc-trigger');
    const body    = item.querySelector('.accordion-body');
    const color   = item.dataset.color;
    const base    = 'border-slate-700/60 bg-slate-900/40';

    trigger.addEventListener('click', () => {
      const isOpen = item.classList.contains('open');
      if (isOpen) {
        item.classList.remove('open', ...colorMap[color].split(' '));
        item.classList.add(...base.split(' '));
        body.classList.remove('open');
      } else {
        item.classList.add('open', ...colorMap[color].split(' '));
        item.classList.remove(...base.split(' '));
        body.classList.add('open');
        initSlideshow(item.querySelector('.slideshow'));
      }
      updateProgress();
    });
  });

  updateProgress();

  // ── slideshows ──────────────────────────────
  const timers = new Map();

  function initSlideshow(el) {
    if (!el || timers.has(el)) return;

    const slides   = el.querySelectorAll('.slide');
    const dotsWrap = el.querySelector('.slide-dots');
    const interval = parseInt(el.dataset.interval) || 3000;
    let current = 0;

    slides.forEach((_, i) => {
      const d = document.createElement('button');
      d.className = `slide-dot h-1.5 rounded-full bg-white/30 ${i === 0 ? 'active' : ''}`;
      d.style.width = i === 0 ? '20px' : '6px';
      d.addEventListener('click', () => { goSlide(i); resetTimer(); });
      dotsWrap.appendChild(d);
    });

    const dots = dotsWrap.querySelectorAll('.slide-dot');

    function goSlide(idx) {
      slides[current].classList.remove('active');
      dots[current].classList.remove('active');
      dots[current].style.width = '6px';
      current = (idx + slides.length) % slides.length;
      slides[current].classList.add('active');
      dots[current].classList.add('active');
      dots[current].style.width = '20px';
    }

    function resetTimer() {
      clearInterval(timers.get(el));
      const id = setInterval(() => goSlide(current + 1), interval);
      timers.set(el, id);
    }

    resetTimer();
  }

  // inicia slideshow dos itens já abertos
  document.querySelectorAll('.accordion-item.open .slideshow').forEach(initSlideshow);
}