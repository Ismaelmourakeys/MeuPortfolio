export function initCarousel() {
    const carousel = document.getElementById("projectsCarousel");
    const prev = document.getElementById("prevBtn");
    const next = document.getElementById("nextBtn");
    const dotsContainer = document.getElementById("carouselDots");

    if (!carousel || !prev || !next || !dotsContainer) {
        console.warn("Não foi possível localizar os elementos do carrossel.");
        return;
    }

    const scrollAmount = 460;

    // botões do carrossel
    next.addEventListener("click", () => {
        carousel.scrollBy({ left: scrollAmount, behavior: "smooth" });
    });

    prev.addEventListener("click", () => {
        carousel.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    });


    /* -------------------------------- */
    /* Criar dots baseado no scroll real */
    /* -------------------------------- */

    const dotsCount = Math.ceil(
        (carousel.scrollWidth - carousel.clientWidth) / scrollAmount
    ) + 1;

    for (let i = 0; i < dotsCount; i++) {

        const dot = document.createElement("button");

        dot.className =
            "w-2 h-2 rounded-full bg-slate-600 transition-all duration-300";

        dot.addEventListener("click", () => {
            carousel.scrollTo({
                left: i * scrollAmount,
                behavior: "smooth"
            });
        });

        dotsContainer.appendChild(dot);
    }

    const dots = dotsContainer.querySelectorAll("button");


    /* -------------------------------- */
    /* Atualizar dot ativo */
    /* -------------------------------- */

    function updateDots() {

        const index = Math.round(carousel.scrollLeft / scrollAmount);

        dots.forEach((dot, i) => {

            if (i === index) {

                dot.classList.remove("bg-slate-600", "w-2");
                dot.classList.add("bg-sky-400", "w-6");

            } else {

                dot.classList.remove("bg-sky-400", "w-6");
                dot.classList.add("bg-slate-600", "w-2");

            }

        });

    }

    carousel.addEventListener("scroll", updateDots);

    updateDots();
}