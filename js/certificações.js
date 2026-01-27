export function initCertificados() {
  const certificados = [
    {
      titulo: 'Bootcamp Nexa + AWS - Fundamentos de IA Generativa com BedRock',
      instituicao: 'DIO.',
      imagem: 'assets/img/certificados/Bootcamp_AWS-Fundamentos.png',
    },
    {
      titulo: 'Curso de Inglês Beginner 1-2',
      instituicao: 'Fluency Academy',
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
      instituicao: 'Wirzard',
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
  if (!grid) return; // segurança caso o elemento não exista

  certificados.forEach(cert => {
    const card = document.createElement('div');

    card.className = `
      group
      bg-slate-800/60
      rounded-2xl
      overflow-hidden
      shadow-lg
      ring-1 ring-white/10
      backdrop-blur-sm
    `;

    //card.setAttribute('data-animate', 'left');

    // Cria conteúdo do card de forma segura (sem innerHTML)
    const imgEl = document.createElement('img');
    imgEl.src = cert.imagem || 'assets/img/placeholder.png';
    imgEl.alt = cert.titulo ? `Certificado ${cert.titulo}` : 'Certificado';
    imgEl.className = 'w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105 cursor-pointer';
    imgEl.setAttribute('role', 'button');
    imgEl.tabIndex = 0;

    const info = document.createElement('div');
    info.className = 'p-4';

    const titleEl = document.createElement('h4');
    titleEl.className = 'font-semibold text-slate-100';
    titleEl.textContent = cert.titulo || '';

    const instEl = document.createElement('p');
    instEl.className = 'text-sm text-slate-400';
    instEl.textContent = cert.instituicao || '';

    info.appendChild(titleEl);
    info.appendChild(instEl);
    card.appendChild(imgEl);
    card.appendChild(info);

    // Modal (abre/fecha). Garante que handlers de fechamento são registrados apenas uma vez.
    const modal = document.getElementById('certificado-modal');
    const modalImg = modal ? document.getElementById('certificado-modal-img') : null;
    const closeBtn = document.getElementById('close-certificado');

    const openModal = () => {
      if (!modal || !modalImg) return;
      modalImg.src = cert.imagem || imgEl.src;
      modal.classList.remove('hidden');
      modal.classList.add('flex');
      modal.setAttribute('aria-hidden', 'false');
      closeBtn?.focus();
    };

    const closeModal = () => {
      if (!modal) return;
      modal.classList.add('hidden');
      modal.classList.remove('flex');
      modal.setAttribute('aria-hidden', 'true');
    };

    imgEl.addEventListener('click', openModal);
    imgEl.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        openModal();
      }
    });

    if (modal && !modal.dataset.certInitialized) {
      closeBtn?.addEventListener('click', closeModal);
      modal.addEventListener('click', (e) => {
        if (e.target === modal) closeModal();
      });
      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('flex')) closeModal();
      });
      modal.dataset.certInitialized = 'true';
    }

    grid.appendChild(card);
  });
}



