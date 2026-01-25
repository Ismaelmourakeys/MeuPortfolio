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
        desc: 'Interface desenvolvida utilizando o framework Kivy com Python. O aplicativo oferece funcionalidades interativas e uma interface amigável, demonstrando o potencial do Kivy na criação de aplicações móveis multiplataforma. Projeto desenvolvido em sala de aula na ETEC, com o objetivo de aplicar conceitos de lógica estrutural e utilização de frameworks para desenvolvimento mobile.',
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

}


document.addEventListener('DOMContentLoaded', function () {
    const carousel = document.getElementById('projectsCarousel');
    if (!carousel) return;


    novosProjetos.forEach(function (p) {
        const link = p.link || '#';
        const card = document.createElement('div');
        card.className = 'project-card relative overflow-hidden bg-slate-800 rounded-2xl px-7 py-8 sm:p-6 md:p-10 flex flex-col shadow-lg border border-slate-700/50';
        card.setAttribute('data-animate', 'left');

        card.innerHTML = ''
            + '<div class="conteudo resumo flex-1">'
            //+   '<a href="' + encodeURI(link) + '" target="_blank" rel="noopener noreferrer" class="block">' --- Eu tirei pq quando clicava no video, abria em forma de link 
            + '<h4 class="text-xl font-bold mb-2 text-yellow-300">' + escapeHtml(p.title) + '</h4>'
            + '<p class="text-slate-300 mb-4">' + escapeHtml(p.desc) + '</p>'
            + (p.video
                ? `
    <div class="relative group cursor-pointer" data-video-src="${p.video}">
        <video class="rounded-lg w-full h-40 object-cover object-center pointer-events-none"
               preload="metadata"
               muted
               playsinline
               poster="${p.poster || ''}">
            <source src="${p.video}" type="video/mp4">
        </video>
        <div class="absolute inset-0 flex items-center justify-center bg-black/40">
            <button class="flex items-center justify-center w-14 h-14 rounded-full bg-white/10 text-white shadow-md transition-transform transform hover:scale-105">
                <svg class="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M5 3v18l15-9L5 3z"></path>
                </svg>
            </button>
        </div>
    </div>
    `
                : `<img src="${encodeURI(p.img || '')}" class="rounded-lg w-full h-40 object-cover" alt="${escapeHtml(p.title)} Thumbnail" />`
            )

            + '</a>'
            + '</div>'
            + '<div class="conteudo detalhes hidden absolute inset-0 bg-gradient-to-b from-slate-900/90 via-slate-900/80 to-slate-800/70 backdrop-blur-md rounded-2xl p-6 flex flex-col items-center justify-center text-center space-y-4 transform scale-95 opacity-0 transition-all duration-300 ease-out z-30">'
            + '<button aria-label="Fechar detalhes" class="fechar-detalhes absolute top-3 right-3 bg-white/6 hover:bg-white/10 text-slate-100 px-3 py-1.5 rounded-md flex items-center gap-2 text-sm transition-colors duration-200">'
            + '<svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">'
            + '<line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line>'
            + '</svg>'
            + 'Fechar'
            + '</button>'
            + '<h4 class="font-bold text-2xl mb-1 text-yellow-300 flex items-center gap-2">'
            + '<svg class="w-6 h-6 text-yellow-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">'
            + '<path d="M3 7v4a1 1 0 0 0 1 1h3"></path><path d="M21 7v4a1 1 0 0 1-1 1h-3"></path><path d="M7 16v1a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-1"></path><circle cx="12" cy="10" r="3"></circle>'
            + '</svg>'
            + 'Ferramentas utilizadas'
            + '</h4>'
            + '<p class="text-slate-300 text-sm max-w-[36rem]">Tecnologias e ferramentas empregadas neste projeto.</p>'
            + '<div class="w-full flex justify-center">'
            + '<div class="flex flex-row items-center justify-center gap-3 rounded-lg py-3 px-4">'
            + techIconsHTML(p.techs)
            + '   </div>'
            + '</div>'
            + '<p class="text-slate-400 text-sm max-w-[36rem] max-h-[140px] overflow-y-auto pr-2 scrollbar-hover"><strong>Breve descrição:</strong> ' + escapeHtml(p.desc) + '</p>'
            + '<a href="' + encodeURI(link) + '" target="_blank" rel="noopener noreferrer" aria-label="Abrir projeto (nova aba)" class="inline-flex items-center gap-2 text-sm font-semibold bg-secondary text-slate-900 px-4 py-2 rounded-md shadow-sm hover:opacity-95 hover:scale-105 transition transform">GitHub do projeto <i class="devicon-github-original colored text-2xl" aria-hidden="true"></i></a>'
            + '<button class="fechar-detalhes mt-2 text-sm text-secondary hover:underline">Fechar ✕</button>'
            + '</div>'
            + '<button class="ver-mais absolute bottom-3 left-4 text-sm font-medium text-secondary hover:underline">Mais detalhes →</button>';

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

});



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
