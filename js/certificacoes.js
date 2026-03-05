export function initCertificados() {
  const certificados = [
    {
      titulo: 'Bootcamp Nexa + AWS - Fundamentos de IA Generativa com BedRock',
      instituicao: 'DIO.',
      imagem: 'assets/img/certificados/Bootcamp_AWS-Fundamentos.png',
    },
    {
      titulo: 'Curso de Inglês - Beginner 1',
      instituicao: 'FluencyPass',
      imagem: 'assets/img/certificados/Fluency Academy_beginner-1-2.PNG'
    },
    {
      titulo: 'Criando um Site Simples (HTML, CSS e JavaScript)',
      instituicao: 'Fundação Bradesco',
      imagem: 'assets/img/certificados/Fundação Bradesco_Site Simples.PNG'
    },
    {
      titulo: 'Imersão Front-end 2° edição',
      instituicao: 'Alura',
      imagem: 'assets/img/certificados/Alura_Imesão Front-end 2° edição.PNG'
    },
    {
      titulo: 'Curso de HTML',
      instituicao: 'Ada Tech',
      imagem: 'assets/img/certificados/Ada_Tech_HTML.png'
    },
    {
      titulo: 'Curso de Python',
      instituicao: 'Santander Open Academy',
      imagem: 'assets/img/certificados/Python_Santander Open Academy.PNG'
    },
    {
      titulo: 'Curso Complementar de Inglês',
      instituicao: 'Wizard',
      imagem: 'assets/img/certificados/Wizard_certificado.jpeg',
    },
    {
      titulo: 'Informática Essencial',
      instituicao: 'Microlins',
      imagem: 'assets/img/certificados/Microlins_Informatica.jpeg',
    },
    {
      titulo: 'Atendente de Farmácia',
      instituicao: 'Microlins',
      imagem: 'assets/img/certificados/Microlins_Auxiliar.jpeg',
    },
  ];

  const grid = document.getElementById('certificados-grid');
  const dotsContainer = document.getElementById('certificados-dots');
  const prevBtn = document.getElementById('certPrevBtn');
  const nextBtn = document.getElementById('certNextBtn');
  const modal = document.getElementById('certificado-modal');
  const modalImg = document.getElementById('certificado-modal-img');
  const closeBtn = document.getElementById('close-certificado');

  if (!grid) return;

  const SCROLL_AMOUNT = 340;

  // ── criar cards ──────────────────────────────
  certificados.forEach(cert => {
    const card = document.createElement('div');
    card.className = [
      'group/cert snap-start flex flex-col',
      'bg-gradient-to-br from-slate-800/90 to-slate-900/90',
      'border border-slate-700/50 rounded-2xl overflow-hidden',
      'shadow-[0_8px_32px_rgba(0,0,0,0.4)]',
      'hover:border-sky-400/30 hover:shadow-[0_16px_48px_rgba(0,0,0,0.5)]',
      'transition-all duration-300 cursor-pointer',
    ].join(' ');

    // linha de destaque no topo
    const topLine = document.createElement('div');
    topLine.className = 'h-px w-full bg-gradient-to-r from-transparent via-sky-400/50 to-transparent opacity-0 group-hover/cert:opacity-100 transition-opacity duration-300';

    // imagem
    const imgWrapper = document.createElement('div');
    imgWrapper.className = 'relative w-full h-44 overflow-hidden';

    const imgEl = document.createElement('img');
    imgEl.src = cert.imagem || 'assets/img/placeholder.png';
    imgEl.alt = `Certificado ${cert.titulo}`;
    imgEl.className = 'w-full h-full object-cover transition-transform duration-500 group-hover/cert:scale-105';

    const imgOverlay = document.createElement('div');
    imgOverlay.className = 'absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent';

    imgWrapper.appendChild(imgEl);
    imgWrapper.appendChild(imgOverlay);

    // info
    const info = document.createElement('div');
    info.className = 'flex flex-col flex-1 p-5 gap-1';

    const titleEl = document.createElement('h4');
    titleEl.className = 'font-syne font-bold text-slate-100 text-sm leading-snug';
    titleEl.textContent = cert.titulo;

    const instEl = document.createElement('p');
    instEl.className = 'font-mono text-xs text-secondary mt-1';
    instEl.textContent = cert.instituicao;

    // footer
    const footer = document.createElement('div');
    footer.className = 'mt-auto pt-3 border-t border-white/5 flex items-center justify-end';

    const viewBtn = document.createElement('span');
    viewBtn.className = 'font-mono text-xs text-slate-500 group-hover/cert:text-secondary transition-colors duration-200 flex items-center gap-1';
    viewBtn.innerHTML = `Ver certificado <svg class="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M1 12S5 4 12 4s11 8 11 8-4 8-11 8S1 12 1 12z"/><circle cx="12" cy="12" r="3"/></svg>`;

    footer.appendChild(viewBtn);
    info.appendChild(titleEl);
    info.appendChild(instEl);
    info.appendChild(footer);

    card.appendChild(topLine);
    card.appendChild(imgWrapper);
    card.appendChild(info);

    // abrir modal ao clicar
    card.addEventListener('click', () => openModal(cert.imagem));

    grid.appendChild(card);
  });

  // ── modal ─────────────────────────────────────
  function openModal(src) {
    if (!modal || !modalImg) return;
    modalImg.src = src;
    modal.classList.remove('hidden');
    modal.classList.add('flex');
  }

  function closeModal() {
    if (!modal) return;
    modal.classList.add('hidden');
    modal.classList.remove('flex');
    setTimeout(() => { modalImg.src = ''; }, 300);
  }

  if (modal && !modal.dataset.certInitialized) {
    closeBtn?.addEventListener('click', closeModal);
    modal.addEventListener('click', e => { if (e.target === modal) closeModal(); });
    document.addEventListener('keydown', e => {
      if (e.key === 'Escape' && modal.classList.contains('flex')) closeModal();
    });
    modal.dataset.certInitialized = 'true';
  }


  // ── carousel: prev / next ─────────────────────
  prevBtn?.addEventListener('click', () =>
    grid.scrollBy({ left: -SCROLL_AMOUNT, behavior: 'smooth' }));
  nextBtn?.addEventListener('click', () =>
    grid.scrollBy({ left: SCROLL_AMOUNT, behavior: 'smooth' }));


  // ── dots ──────────────────────────────────────
const total = certificados.length;
const MAX_DOTS = 8;

function createDots() {
    dotsContainer.innerHTML = '';

    for (let i = 1; i < MAX_DOTS; i++) {
        const dot = document.createElement('button');
        dot.className = 'h-2 w-2 rounded-full bg-slate-600 transition-all duration-300';
        dotsContainer.appendChild(dot);
    }

    updateDots();
}

function updateDots() {
    const dots = dotsContainer.querySelectorAll('button');
    const current = Math.round(grid.scrollLeft / SCROLL_AMOUNT);

    let start = current - 1;
    if (start < 0) start = 0;
    if (start + MAX_DOTS > total) start = Math.max(0, total - MAX_DOTS);

    dots.forEach((dot, i) => {
        const cardIndex = start + i;
        const isActive  = cardIndex === current;
        const isEdge    = (cardIndex === 0 && current > 1) ||
                          (cardIndex === total - 1 && current < total - 2);

        dot.classList.toggle('bg-sky-400',   isActive);
        dot.classList.toggle('w-6',           isActive);
        dot.classList.toggle('bg-slate-600', !isActive);
        dot.classList.toggle('w-2',          !isActive);
        dot.classList.toggle('scale-75',      isEdge && !isActive);

        dot.onclick = () =>
            grid.scrollTo({ left: cardIndex * SCROLL_AMOUNT, behavior: 'smooth' });
    });
}

createDots();
grid.addEventListener('scroll', updateDots);
window.addEventListener('resize', createDots);
}