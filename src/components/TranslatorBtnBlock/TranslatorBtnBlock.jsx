"use client";
import { useEffect } from "react";
import LocaleSwitcher from "../LocaleSwitcher/LocaleSwitcher";
import Cookies from "js-cookie";

// Запам'ятовуємо мову. Сховище браузера буває недоступне (приватний режим, заборона
// в налаштуваннях, вбудований перегляд у застосунках): тоді звернення до нього кидає
// виняток, і без try/catch падала вся сторінка.
const rememberLanguage = (language) => {
  try {
    localStorage.setItem("lang", language);
  } catch {}
  try {
    Cookies.set("language", language);
  } catch {}
};

const TranslatorBtnBlock = ({ className, lang, dictionary }) => {
  useEffect(() => {
    rememberLanguage(lang);
  }, [lang]);

  // Перемикач малюється одразу на сервері: посилання на інші мовні версії сторінки
  // є в HTML, і пошуковик бачить їх без виконання скриптів.
  return (
    <div className={className}>
      <LocaleSwitcher changeLanguage={rememberLanguage} lang={lang} dictionary={dictionary} />
    </div>
  );
};

export default TranslatorBtnBlock;
