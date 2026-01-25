import { translations } from "./lang.js";

export function setLanguage(lang) {
  const safeLang = translations[lang] ? lang : "pt";
  const elements = document.querySelectorAll("[data-i18n]");

  elements.forEach(el => {
    const keys = el.dataset.i18n.split(".");
    let text = translations[safeLang];

    keys.forEach(k => {
      text = text?.[k];
    });

    if (typeof text === "string") {
      el.innerHTML = text;
    } else {
      console.warn(`Tradução não encontrada: ${el.dataset.i18n} (${safeLang})`);
    }
  });

  localStorage.setItem("lang", safeLang);
}