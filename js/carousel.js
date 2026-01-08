//Usamos export para poder importar essa função no main.js dos carrosséis

export function initCarousel() {

    // Controles do carrossel
    const carousel = document.getElementById("projectsCarousel");
    const prev = document.getElementById("prevBtn");
    const next = document.getElementById("nextBtn");

    if (!carousel || !prev || !next) {
        console.warn("Não foi possível localizar os elementos do carrossel.");
        return;
    }

    const scrollAmount = 460;

    next.addEventListener("click", () => {
        carousel.scrollBy({ left: scrollAmount, behavior: "smooth" });
    });

    prev.addEventListener("click", () => {
        carousel.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    });
}