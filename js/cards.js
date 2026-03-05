// cria o HTML dos ícones de tecnologia dinamicamente
function techIconsHTML(techs = []) {
    return techs.map(tech => `
        <div class="tech-icon-card data-animate flex flex-col items-center justify-center gap-2 bg-white/5 rounded-xl w-24 h-24 p-2 text-center transition hover:bg-white/10">
            <div class="flex items-center justify-center w-full h-full">
                ${tech.svg ? tech.svg : `<i class="${tech.icon} text-3xl"></i>`}
            </div>
            <span class="text-[11px] text-slate-200 leading-tight">${tech.name}</span>
        </div>
    `).join('');
}


// pequena função para escapar texto simples
function escapeHtml(str) {
    return String(str || '').replace(/[&<>"']/g, function (m) {
        return {
            '&': '&amp;',
            '<': '&lt;',
            '>': '&gt;',
            '"': '&quot;',
            "'": '&#39;'
        }[m];
    });
}


const icons = {
    python: `<svg viewBox="0 0 128 128" class="w-9 h-9">
<linearGradient id="python-original-a" gradientUnits="userSpaceOnUse" x1="70.252" y1="1237.476" x2="170.659" y2="1151.089" gradientTransform="matrix(.563 0 0 -.568 -29.215 707.817)"><stop offset="0" stop-color="#5A9FD4"></stop><stop offset="1" stop-color="#306998"></stop></linearGradient><linearGradient id="python-original-b" gradientUnits="userSpaceOnUse" x1="209.474" y1="1098.811" x2="173.62" y2="1149.537" gradientTransform="matrix(.563 0 0 -.568 -29.215 707.817)"><stop offset="0" stop-color="#FFD43B"></stop><stop offset="1" stop-color="#FFE873"></stop></linearGradient><path fill="url(#python-original-a)" d="M63.391 1.988c-4.222.02-8.252.379-11.8 1.007-10.45 1.846-12.346 5.71-12.346 12.837v9.411h24.693v3.137H29.977c-7.176 0-13.46 4.313-15.426 12.521-2.268 9.405-2.368 15.275 0 25.096 1.755 7.311 5.947 12.519 13.124 12.519h8.491V67.234c0-8.151 7.051-15.34 15.426-15.34h24.665c6.866 0 12.346-5.654 12.346-12.548V15.833c0-6.693-5.646-11.72-12.346-12.837-4.244-.706-8.645-1.027-12.866-1.008zM50.037 9.557c2.55 0 4.634 2.117 4.634 4.721 0 2.593-2.083 4.69-4.634 4.69-2.56 0-4.633-2.097-4.633-4.69-.001-2.604 2.073-4.721 4.633-4.721z" transform="translate(0 10.26)"></path><path fill="url(#python-original-b)" d="M91.682 28.38v10.966c0 8.5-7.208 15.655-15.426 15.655H51.591c-6.756 0-12.346 5.783-12.346 12.549v23.515c0 6.691 5.818 10.628 12.346 12.547 7.816 2.297 15.312 2.713 24.665 0 6.216-1.801 12.346-5.423 12.346-12.547v-9.412H63.938v-3.138h37.012c7.176 0 9.852-5.005 12.348-12.519 2.578-7.735 2.467-15.174 0-25.096-1.774-7.145-5.161-12.521-12.348-12.521h-9.268zM77.809 87.927c2.561 0 4.634 2.097 4.634 4.692 0 2.602-2.074 4.719-4.634 4.719-2.55 0-4.633-2.117-4.633-4.719 0-2.595 2.083-4.692 4.633-4.692z" transform="translate(0 10.26)"></path><radialGradient id="python-original-c" cx="1825.678" cy="444.45" r="26.743" gradientTransform="matrix(0 -.24 -1.055 0 532.979 557.576)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#B8B8B8" stop-opacity=".498"></stop><stop offset="1" stop-color="#7F7F7F" stop-opacity="0"></stop></radialGradient><path opacity=".444" fill="url(#python-original-c)" d="M97.309 119.597c0 3.543-14.816 6.416-33.091 6.416-18.276 0-33.092-2.873-33.092-6.416 0-3.544 14.815-6.417 33.092-6.417 18.275 0 33.091 2.872 33.091 6.417z"></path>
</svg>`,

    kivy: `<div class="flex items-center justify-center">
                            <img src="./assets/icones/kivy-logo.svg" alt="Kivy" class="w-9 h-9 object-contain" />

                        </div>`
};


const novosProjetos = [
    {
        title: 'Aplicação mobile com Kivy Python',
        desc: 'Aplicação desenvolvida com Python e o framework Kivy, demonstrando a criação de interfaces interativas para aplicativos móveis multiplataforma. Projeto acadêmico desenvolvido na ETEC com foco em lógica de programação e uso de frameworks.',
        img: './assets/video/Aplicacao_kivy_py/Aplicacao_kivy_py.jpg',
        video: './assets/video/Aplicacao_kivy_py/Aplicacao_py_video.mp4',
        poster: './assets/video/Aplicacao_kivy_py/Aplicacao_kivy_py.jpg',
        link: 'https://github.com/Ismaelmourakeys/PythonKivy.git',
        techs: [
            { name: 'Python', svg: icons.python },
            { name: 'Kivy', svg: icons.kivy },
        ]
    },


    /*{
        title: 'Portfolio Pessoal',
        desc: 'Site pessoal com apresentação de projetos, contato e blog.',
        img: './assets/img/projeto_portfolio.png',
        link: 'https://example.com/portfolio'
    },


            {
                title: 'App de Tarefas',
                desc: 'Aplicativo simples para gestão de tarefas com persistência local.',
                img: './assets/img/projeto_tasks.png',
                link: 'https://example.com/tasks'
            }*/
];



export function initScrollAnimation() {

    // Animação de entrada dos cards ao scroll
    const cards = document.querySelectorAll('.card');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.remove('opacity-0', 'translate-y-6');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.2 });

    cards.forEach(card => observer.observe(card));
}


// Lógica para criar os cards de projetos dinamicamente no carrossel
export function initCards() {
    const carousel = document.getElementById('projectsCarousel');
    if (!carousel) {
        console.warn("Carrossel de projetos não encontrado");
        return;
    }

    novosProjetos.forEach((p, index) => {

        const link = p.link || '#';

        const card = document.createElement('div');

        card.className = `
project-card group/card relative flex flex-col
bg-gradient-to-br from-slate-800/90 to-slate-900/90
border border-slate-700/50 rounded-2xl overflow-hidden
shadow-[0_8px_32px_rgba(0,0,0,0.4)]
hover:border-sky-400/30 hover:shadow-[0_16px_48px_rgba(0,0,0,0.5)]
transition-all duration-300 snap-start
animate-fadeUp
`;

        card.setAttribute('data-animate', 'left');

        /* delay progressivo igual ao HTML */
        card.style.animationDelay = `${index * 80}ms`;

        card.innerHTML = `
<!-- top accent -->
<div class="h-px w-full bg-gradient-to-r from-transparent via-sky-400/50 to-transparent
opacity-0 group-hover/card:opacity-100 transition-opacity duration-300"></div>

<div class="conteudo resumo flex flex-col flex-1 p-6">

    <!-- tag + ícone externo -->
    <div class="flex items-start justify-between gap-3 mb-3">
        <span class="font-mono text-[0.65rem] tracking-widest uppercase
        text-sky-400 bg-sky-400/10 border border-sky-400/25
        px-2.5 py-1 rounded-full">
            ${escapeHtml(p.tag || 'Projeto')}
        </span>

        ${link !== '#' ? `
        <a href="${encodeURI(link)}" target="_blank"
        class="text-slate-500 hover:text-secondary transition-colors duration-200">
            <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                <polyline points="15 3 21 3 21 9"/>
                <line x1="10" y1="14" x2="21" y2="3"/>
            </svg>
        </a>
        ` : ''}
    </div>

    <!-- título -->
    ${link !== '#' ? `
    <a href="${encodeURI(link)}" target="_blank" class="block group/link mb-3">
        <h4 class="font-syne text-lg font-bold text-yellow-300
        group-hover/link:text-yellow-200 transition-colors duration-200">
            ${escapeHtml(p.title)}
        </h4>
    </a>
    ` : `
    <h4 class="font-syne text-lg font-bold text-yellow-300 mb-3">
        ${escapeHtml(p.title)}
    </h4>
    `}

    <p class="text-slate-400 text-sm leading-relaxed mb-4 flex-1">
        ${escapeHtml(p.desc)}
    </p>

    <!-- preview -->
    ${p.video ? `
        <div class="media-wrapper relative w-full h-40 rounded-xl overflow-hidden ring-1 ring-white/8 cursor-pointer
        group/video" data-video-src="${p.video}">
            <video class="absolute inset-0 w-full h-full object-cover"
                preload="metadata" muted playsinline poster="${p.poster || ''}">
                <source src="${p.video}" type="video/mp4">
            </video>

            <div class="absolute inset-0 bg-black/40
            group-hover/video:bg-black/55 transition-colors duration-300
            flex items-center justify-center">

                <div class="flex items-center justify-center w-14 h-14 rounded-full
                bg-white/10 border border-white/20 backdrop-blur-sm
                group-hover/video:bg-white/20 group-hover/video:scale-110
                transition-all duration-300">

                    <svg class="w-6 h-6 text-white ml-1" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M5 3v18l15-9L5 3z"/>
                    </svg>

                </div>
            </div>

            <span class="absolute bottom-2 left-2 font-mono text-[0.65rem] tracking-wider
            bg-black/60 text-slate-300 px-2 py-1 rounded-md">
                Ver vídeo
            </span>
        </div>
    ` : `
        <a href="${encodeURI(link)}" target="_blank" class="block">
            <div class="relative w-full h-40 rounded-xl overflow-hidden ring-1 ring-white/8">
                <img src="${encodeURI(p.img || '')}"
                alt="${escapeHtml(p.title)}"
                class="absolute inset-0 w-full h-full object-cover
                transition-transform duration-500 group-hover/card:scale-105"/>

                <div class="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
            </div>
        </a>
    `}
</div>

<!-- footer -->
<div class="flex items-center justify-between px-6 py-4 border-t border-white/5 ">
    <div class="flex gap-2 w-full max-w-[30%] overflow-x-auto sm:max-w-[15%]">
        ${p.techs.map(t => t.svg ? t.svg : `<i class="${t.icon} colored text-lg "></i>`).join('')}
    </div>

    <button class="ver-mais font-mono text-xs text-secondary tracking-widest
    hover:text-sky-300 transition-colors duration-200 flex items-center gap-1">
        Detalhes
        <svg class="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M5 12h14M12 5l7 7-7 7"/>
        </svg>
    </button>
</div>

<!-- overlay detalhes -->
<div class="conteudo detalhes hidden absolute inset-0
bg-slate-900/95 backdrop-blur-md rounded-2xl
p-6 flex flex-col items-center justify-center text-center gap-4
scale-95 opacity-0 transition-all duration-300 z-30 animate-popUp overflow-y-auto">

    <button class="fechar-detalhes absolute top-4 right-4
    flex items-center gap-1.5 font-mono text-xs text-slate-400
    hover:text-slate-100 transition-colors duration-200">
        ✕ fechar
    </button>

    <p class="font-mono text-xs tracking-widest uppercase text-secondary">
        Ferramentas utilizadas
    </p>

    <h4 class="font-syne text-xl font-bold text-yellow-300">
        ${escapeHtml(p.title)}
    </h4>

    <div class="flex justify-center gap-4 w-full max-w-xs mx-auto">
    ${techIconsHTML(p.techs)}
</div>

    <p class="text-slate-400 text-xs leading-relaxed max-w-xs flex flex-col items-center justify-center gap-2">
        ${escapeHtml(p.overlayDesc || p.desc)}
    </p>

    ${link !== '#' ? `
    <a href="${encodeURI(link)}" target="_blank"
    class="inline-flex items-center gap-2 bg-secondary text-slate-900
    font-syne font-bold text-sm px-5 py-2.5 rounded-xl
    hover:brightness-110 hover:scale-105 transition-all duration-300">
        <i class="devicon-github-original text-xl"></i>
        GitHub do projeto
    </a>
    ` : ''}

    <button class="fechar-detalhes font-mono text-xs text-slate-500
    hover:text-secondary transition-colors">
        Fechar ✕
    </button>
</div>
`;

        carousel.appendChild(card);

    });

    
    
    // igualar alturas dos cards após inseri-los no DOM
function equalizeCardHeights() {
    if (window.innerWidth < 640) return; // ⛔ NÃO iguala no mobile

    const cards = document.querySelectorAll('.project-card');
    let maxHeight = 0;

    cards.forEach(card => {
        card.style.height = 'auto';
    });

    cards.forEach(card => {
        const h = card.offsetHeight;
        if (h > maxHeight) maxHeight = h;
    });
    
    cards.forEach(card => {
        card.style.height = maxHeight + 'px';
    });
}

// Depois que todos os cards são criados e inseridos no DOM,
// chamamos essa função para adicionar os eventos (cliques) nos botões,
// como "Mais detalhes" e "Fechar"
equalizeCardHeights();
setupCardInteractions();
}


export function setupCardInteractions() {
    const cards = document.querySelectorAll(".project-card");

    cards.forEach(card => {
        const btnVerMais = card.querySelector(".ver-mais");
        const overlay = card.querySelector(".conteudo.detalhes");
        const btnsFechar = card.querySelectorAll(".fechar-detalhes");

        if (!btnVerMais || !overlay) return;

        // ABRIR DETALHES
        btnVerMais.addEventListener("click", () => {
            overlay.classList.remove("hidden");
            overlay.offsetHeight; // força reflow
            overlay.classList.remove("opacity-0", "scale-95");
            overlay.classList.add("opacity-100", "scale-100");
        });

        // FECHAR DETALHES
        btnsFechar.forEach(btn => {
            btn.addEventListener("click", () => {
                overlay.classList.add("opacity-0", "scale-95");

                setTimeout(() => {
                    overlay.classList.add("hidden");
                    overlay.classList.remove("opacity-100", "scale-100");
                }, 300);
            });
        });
    });
}