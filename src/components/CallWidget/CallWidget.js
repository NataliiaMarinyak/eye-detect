"use client";
import { useEffect } from "react";

// Віджет дзвінка Binotel GetCall. Для кожної мови сайту свій віджет
// (мова інтерфейсу задається в кабінеті Binotel: Get Call → Налаштування).
// Хеш видно у коді для вставки після «getcall/widgets/».
// Поки для en і ru не створено окремі віджети, вони беруть український.
const WIDGETS = {
  uk: "m0jpnihbe0t19nh0h1iw",
  en: "2n6h4drp17vmpebhs4vj",
  ru: "m0jpnihbe0t19nh0h1iw",
};

export default function CallWidget({ lang = "uk" }) {
  useEffect(() => {
    const widgetHash = WIDGETS[lang] || WIDGETS.uk;
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.async = true;
    script.src = `//widgets.binotel.com/getcall/widgets/${widgetHash}.js`;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, [lang]);

  return null; // Без власного інтерфейсу, лише завантажує скрипт
}
