 export function initSaudacao() {
 
 const words = ['Desenvolvedor', 'UI Designer', 'Estudante'];
        const el = document.getElementById('typed');
        let wi = 0, ci = 0, deleting = false;

        function type() {
            const word = words[wi];
            el.textContent = deleting ? word.slice(0, ci--) : word.slice(0, ci++);

            let delay = deleting ? 60 : 100;
            if (!deleting && ci > word.length) { delay = 1800; deleting = true; }

            else if (deleting && ci < 0) { deleting = false; wi = (wi + 1) % words.length; ci = 0; delay = 400; }

            setTimeout(type, delay);
        }
        type();


        // Configuração do Tailwind (pode ser movida para um arquivo separado)
        tailwind.config = {
            theme: {
                extend: {
                    fontFamily: {
                        syne: ['Syne', 'sans-serif'],
                        mono: ['DM Mono', 'monospace'],
                    },
                    colors: {
                        secondary: '#61dafb',
                    },
                    keyframes: {
                        fadeLeft: { from: { opacity: '0', transform: 'translateX(-28px)' }, to: { opacity: '1', transform: 'translateX(0)' } },
                        fadeRight: { from: { opacity: '0', transform: 'translateX(28px)' }, to: { opacity: '1', transform: 'translateX(0)' } },
                        fadeUp: { from: { opacity: '0', transform: 'translateY(18px)' }, to: { opacity: '1', transform: 'translateY(0)' } },
                        blink: { '0%,100%': { opacity: '1' }, '50%': { opacity: '0' } },
                        floatY: { '0%,100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(-10px)' } },
                        pulse2: { '0%,100%': { opacity: '.15' }, '50%': { opacity: '.30' } },
                    },
                    animation: {
                        fadeLeft: 'fadeLeft  .7s cubic-bezier(.22,1,.36,1) both',
                        fadeRight: 'fadeRight .7s cubic-bezier(.22,1,.36,1) .15s both',
                        fadeUp: 'fadeUp    .6s cubic-bezier(.22,1,.36,1) both',
                        blink: 'blink 1s step-end infinite',
                        floatY: 'floatY 4s ease-in-out infinite',
                        pulse2: 'pulse2 4s ease-in-out infinite',
                    },
                },
            },
        }
    };