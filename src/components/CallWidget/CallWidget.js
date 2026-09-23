"use client";
import { useEffect } from "react";

// Віджет дзвінка Binotel GetCall. Для кожної мови сайту свій віджет
// (мова інтерфейсу задається в кабінеті Binotel: Get Call → Налаштування).
// Хеш видно у коді для вставки після «getcall/widgets/».
const WIDGETS = {
  uk: "m0jpnihbe0t19nh0h1iw",
  en: "2n6h4drp17vmpebhs4vj",
  ru: "ezxkkmynx2dd43x958xn",
};

// Віджет тягне ~110 КБ чужого коду й шрифти Google. Завантажений одразу, він
// забирав бали PageSpeed на телефонах. Людині кнопка дзвінка не потрібна в
// першу секунду — вантажимо при першій дії (прокрутка, дотик, рух миші,
// клавіша) або через 15 с, як GTM у DeferredGtm.
const EVENTS = ["scroll", "pointerdown", "pointermove", "touchstart", "keydown"];
const FALLBACK_MS = 15000;

// Кнопки Binotel мають href="javascript:void(0)". Пошуковики такі посилання
// вважають битими (SEO у PageSpeed 92 замість 100). Даємо їм звичайний «#»,
// а перехід на початок сторінки гасимо.
function fixBinotelLinks() {
  document
    .querySelectorAll('a[id^="bingc-"][href^="javascript"], a.bingc-powered-by[href^="javascript"]')
    .forEach((a) => {
      a.setAttribute("href", "#");
      if (!a.dataset.seoFixed) {
        a.dataset.seoFixed = "1";
        a.addEventListener("click", (e) => e.preventDefault());
      }
    });
}

export default function CallWidget({ lang = "uk" }) {
  useEffect(() => {
    const widgetHash = WIDGETS[lang] || WIDGETS.uk;
    let script = null;
    let observer = null;

    const load = () => {
      if (script) return;
      EVENTS.forEach((ev) => window.removeEventListener(ev, load));
      clearTimeout(timer);
      // Вимикаємо автоматичну «активну» форму Binotel (широка смуга, що сама
      // відкривається через 15–60 с). Кнопка і форма «Зателефонуємо за 30
      // секунд» по кліку працюють як раніше.
      window.BinotelGetCallSettings = { ...(window.BinotelGetCallSettings || {}), activeFormStatus: 0 };
      script = document.createElement("script");
      script.type = "text/javascript";
      script.async = true;
      script.src = `//widgets.binotel.com/getcall/widgets/${widgetHash}.js`;
      document.body.appendChild(script);
      observer = new MutationObserver(fixBinotelLinks);
      observer.observe(document.body, { childList: true, subtree: true });
    };

    EVENTS.forEach((ev) => window.addEventListener(ev, load, { passive: true, once: true }));
    const timer = setTimeout(load, FALLBACK_MS);

    return () => {
      EVENTS.forEach((ev) => window.removeEventListener(ev, load));
      clearTimeout(timer);
      if (observer) observer.disconnect();
      if (script && script.parentNode) script.parentNode.removeChild(script);
    };
  }, [lang]);

  return null; // Без власного інтерфейсу, лише завантажує скрипт
}
