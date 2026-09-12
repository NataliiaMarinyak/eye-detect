"use client";
import { createElement, useEffect, useRef } from "react";

// Єдина анімація сайту: м'яке проявлення блока при вході у в'юпорт.
// Реалізація без бібліотек: один IntersectionObserver на сторінку і CSS-класи
// (див. .reveal у globals.scss). До гідрації контент видимий, тому пошуковики
// і користувачі без JS бачать усе. «Менше анімацій» у системі вимикає ефект.
//
// Перша відповідь спостерігача приходить асинхронно і без примусового
// перерахунку розкладки, тому блоки, які вже на екрані, не ховаємо взагалі,
// а ті, що нижче, ховаємо і показуємо, коли до них дійде скрол.
let observer = null;
const states = new WeakMap(); // el -> { seen: boolean, timer }

function getObserver() {
  if (observer || typeof window === "undefined") return observer;
  observer = new IntersectionObserver(
    (entries) => {
      for (const e of entries) {
        const st = states.get(e.target);
        if (!st) continue;
        if (!st.seen) {
          // Перший звіт: блок уже видно — лишаємо як є і більше не стежимо.
          st.seen = true;
          if (e.isIntersecting) {
            observer.unobserve(e.target);
            clearTimeout(st.timer);
            continue;
          }
          e.target.classList.add("reveal-hidden");
          continue;
        }
        if (e.isIntersecting) {
          e.target.classList.add("reveal-in");
          e.target.classList.remove("reveal-hidden");
          observer.unobserve(e.target);
          clearTimeout(st.timer);
        }
      }
    },
    { rootMargin: "0px 0px -6% 0px", threshold: 0.01 }
  );
  return observer;
}

const Reveal = ({ children, as = "div", delay = 0, className = "", y, amount }) => {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    el.style.transitionDelay = delay ? `${delay}s` : "";
    // Запобіжник: якщо спостерігач з якоїсь причини не спрацював,
    // блок усе одно з'явиться через 6 секунд.
    const timer = setTimeout(() => {
      el.classList.add("reveal-in");
      el.classList.remove("reveal-hidden");
    }, 6000);
    states.set(el, { seen: false, timer });
    getObserver().observe(el);

    return () => {
      clearTimeout(timer);
      states.delete(el);
      observer && observer.unobserve(el);
    };
  }, [delay]);

  return createElement(as, { ref, className: `reveal ${className}`.trim() }, children);
};

export default Reveal;
