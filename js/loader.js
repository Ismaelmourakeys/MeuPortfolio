export function initLoader() {


    (function () {

        /* ── estrelas ── */
        const canvas = document.getElementById('loaderStars');
        if (!canvas) return;
        const ctx = canvas.getContext('2d');

        function resizeCanvas() {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        }
        resizeCanvas();
        window.addEventListener('resize', resizeCanvas);

        const stars = Array.from({ length: 160 }, () => ({
            x: Math.random(),
            y: Math.random(),
            r: Math.random() * 1.2 + 0.2,
            a: Math.random(),
            speed: Math.random() * 0.008 + 0.002,
            phase: Math.random() * Math.PI * 2,
        }));

        let raf;
        function drawStars(t) {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            stars.forEach(s => {
                const alpha = 0.2 + 0.8 * (0.5 + 0.5 * Math.sin(t * s.speed * 60 + s.phase));
                ctx.beginPath();
                ctx.arc(s.x * canvas.width, s.y * canvas.height, s.r, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(148,163,184,${alpha * 0.7})`;
                ctx.fill();
            });
            raf = requestAnimationFrame(drawStars);
        }
        raf = requestAnimationFrame(drawStars);

        /* ── partículas orbitais ── */
        const particlesEl = document.getElementById('loaderParticles');
        const PARTICLE_COUNT = 24;
        for (let i = 0; i < PARTICLE_COUNT; i++) {
            const p = document.createElement('div');
            p.className = 'loader-particle';
            const angle = (360 / PARTICLE_COUNT) * i;
            const dur = 1.8 + Math.random() * 2;
            const delay = -(Math.random() * dur);
            const colors = ['#38bdf8', '#818cf8', '#34d399', '#a78bfa'];
            const color = colors[Math.floor(Math.random() * colors.length)];
            p.style.cssText = `
      --angle: ${angle}deg;
      animation-duration: ${dur}s;
      animation-delay: ${delay}s;
      background: ${color};
      width: ${1.5 + Math.random() * 2.5}px;
      height: ${1.5 + Math.random() * 2.5}px;
      opacity: 0;
    `;
            particlesEl.appendChild(p);
        }

        /* ── progresso + status ── */
        const bar = document.getElementById('loaderBar');
        const status = document.getElementById('loaderStatus');
        const steps = [
            { pct: 15, msg: 'carregando componentes...' },
            { pct: 40, msg: 'compilando estilos...' },
            { pct: 65, msg: 'inicializando módulos...' },
            { pct: 85, msg: 'renderizando interface...' },
            { pct: 100, msg: 'pronto!' },
        ];

        let stepIdx = 0;
        const totalDuration = 3200; // ms — ajuste conforme necessário
        const stepInterval = totalDuration / steps.length;

        const progressTimer = setInterval(() => {
            if (stepIdx >= steps.length) { clearInterval(progressTimer); return; }
            const s = steps[stepIdx++];
            if (bar) bar.style.width = s.pct + '%';
            if (status) status.textContent = s.msg;
        }, stepInterval);

        /* ── explosão e saída ── */
        function hideLoader() {
            clearInterval(progressTimer);
            cancelAnimationFrame(raf);
            if (bar) bar.style.width = '100%';
            if (status) status.textContent = 'pronto!';

            const loader = document.getElementById('loader');
            if (!loader) return;

            // pequeno delay para o 100% ser visível
            setTimeout(() => {

                // prepara hero enquanto loader ainda cobre tudo
                prepareHero();

                loader.classList.add('explode'); // explosão dura 0.7s

                // hero começa a animar NO MEIO da explosão (300ms antes de terminar)
                setTimeout(revealHero, 0);

                loader.addEventListener('animationend', () => {
                    loader.style.display = 'none';
                    document.body.style.overflow = '';
                }, { once: true });

            }, 250);
        }

        // cache dos elementos para reusar
        let _heroEls = null;
        function getHeroEls() {
            if (_heroEls) return _heroEls;
            const hero = document.querySelector('[data-animate="left"]');
            _heroEls = {
                header: document.getElementById('header'),
                avatar: hero?.querySelector('.animate-fadeLeft'),
                text: hero?.querySelector('.animate-fadeRight'),
                children: hero ? [...hero.querySelectorAll('.animate-fadeRight p, .animate-fadeRight h2, .animate-fadeRight a, .animate-fadeRight div.flex, .animate-fadeRight div.w-full')] : [],
            };
            return _heroEls;
        }

        // roda ENQUANTO o loader ainda cobre a tela
        function prepareHero() {
            const gsap = window.gsap;
            if (!gsap) return;
            const { header, avatar, text, children } = getHeroEls();
            gsap.set(header, { y: -60, opacity: 0 });
            gsap.set(avatar, { x: -80, opacity: 0, scale: 0.92, filter: 'blur(12px)' });
            gsap.set(text, { x: 80, opacity: 0, filter: 'blur(12px)' });
            gsap.set(children, { x: 40, opacity: 0 });
        }

        // roda logo após o loader desaparecer
        function revealHero() {
            const gsap = window.gsap;
            if (!gsap) return;
            const { header, avatar, text, children } = getHeroEls();

            gsap.timeline({ defaults: { ease: 'power4.out' } })
                .to(header, { y: 0, opacity: 1, duration: 1.5 })
                .to(avatar, { x: 0, opacity: 1, scale: 1, filter: 'blur(0px)', duration: 1.5, ease: 'power3.out' }, '-=0.45')
                .to(text, { x: 0, opacity: 1, filter: 'blur(0px)', duration: 1.0, ease: 'power3.out' }, '-=0.9')
                .to(children, { x: 0, opacity: 1, duration: 0.65, stagger: 0.08, ease: 'power2.out' }, '-=0.65');
        }

        // bloqueia scroll durante o loading
        document.body.style.overflow = 'hidden';

        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', prepareHero);
        } else {
            prepareHero();
        }

        // dispara após totalDuration + buffer
        setTimeout(hideLoader, totalDuration + 600);

        // fallback: se a página já carregou, sai logo
        if (document.readyState === 'complete') {
            setTimeout(hideLoader, totalDuration);
        }

    })();
}