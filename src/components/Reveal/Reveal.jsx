"use client";
import { createElement, useEffect, useRef } from "react";

// Єдина анімація сайту: м'яке проявлення блока при вході у в'юпорт.
// Реалізація без бібліотек: один IntersectionObserver на сторінку і CSS-класи
// (див. .reveal у globals.scss). До гідрації контент видимий, тому пошуковики
// і користувачі без JS бачать усе. «Менше анімацій» у системі вимикає ефект.
let observer = null;
const callbacks = new WeakMap();

function getObserver() {
  if (observer || typeof window === "undefined") return observer;
  observer = new IntersectionObserver(
    (entries) => {
      for (const e of entries) {
        if (!e.isIntersecting) continue;
        const cb = callbacks.get(e.target);
        if (cb) cb();
        observer.unobserve(e.target);
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
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;

    // Уже у в'юпорті на момент гідрації: не ховаємо, щоб не блимало.
    const r = el.getBoundingClientRect();
    if (r.top < window.innerHeight * 0.92 && r.bottom > 0) return;

    el.classList.add("reveal-hidden");
    el.style.transitionDelay = delay ? `${delay}s` : "";
    const show = () => {
      el.classList.add("reveal-in");
      el.classList.remove("reveal-hidden");
    };
    callbacks.set(el, show);
    getObserver().observe(el);
    // Запобіжник: якщо спостерігач з якоїсь причини не спрацював,
    // блок усе одно з'явиться через 6 секунд.
    const timer = setTimeout(show, 6000);
    return () => {
      clearTimeout(timer);
      callbacks.delete(el);
      observer && observer.unobserve(el);
    };
  }, [delay]);

  return createElement(as, { ref, className: `reveal ${className}`.trim() }, children);
};

export default Reveal;
