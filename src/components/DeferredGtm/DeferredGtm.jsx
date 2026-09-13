"use client";
import { useEffect } from "react";
import { hasAdParams } from "@/helpers/analytics";

// Google Tag Manager із відкладеним завантаженням.
// Скрипт GTM важить ~400 КБ і блокує головний потік на слабких телефонах на 2–4 с,
// тому вантажимо його не одразу, а після першої дії користувача (дотик, скрол,
// рух миші, клавіша) або за таймером після повного завантаження сторінки.
// Реальні відвідувачі майже завжди щось роблять протягом кількох секунд,
// тож статистика лишається повною, а перший екран відкривається швидше.
const DELAY_AFTER_LOAD_MS = 6000;
const EVENTS = ["touchstart", "scroll", "mousemove", "keydown", "pointerdown"];

export default function DeferredGtm({ gtmId }) {
  useEffect(() => {
    if (!gtmId || window.__gtmLoaded) return;

    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ "gtm.start": Date.now(), event: "gtm.js" });

    let timer = null;
    const load = () => {
      if (window.__gtmLoaded) return;
      window.__gtmLoaded = true;
      EVENTS.forEach((e) => window.removeEventListener(e, load));
      clearTimeout(timer);
      const s = document.createElement("script");
      s.async = true;
      s.src = `https://www.googletagmanager.com/gtm.js?id=${encodeURIComponent(gtmId)}`;
      document.head.appendChild(s);
    };

    // Відвідувачі з реклами (gclid, fbclid, utm): вантажимо одразу, щоб не втратити клік і конверсію.
    if (hasAdParams()) {
      load();
      return;
    }

    EVENTS.forEach((e) => window.addEventListener(e, load, { passive: true, once: true }));
    const arm = () => {
      timer = setTimeout(load, DELAY_AFTER_LOAD_MS);
    };
    if (document.readyState === "complete") arm();
    else window.addEventListener("load", arm, { once: true });

    return () => {
      EVENTS.forEach((e) => window.removeEventListener(e, load));
      window.removeEventListener("load", arm);
      clearTimeout(timer);
    };
  }, [gtmId]);

  return null;
}
