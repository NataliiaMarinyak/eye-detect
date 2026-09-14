"use client";
import { useState, useEffect } from "react";
// import { useTranslation } from "react-i18next";
// import LangSwitcher from "../LangSwitcher/LangSwitcher";
import LocaleSwitcher from "../LocaleSwitcher/LocaleSwitcher";
import Cookies from "js-cookie";
// import { languagesData } from "@/data/languagesData";

const TranslatorBtnBlock = ({ className, lang, dictionary }) => {
  // const { i18n } = useTranslation();
  const [isLoading, setIsLoading] = useState(true);

  // Запам'ятовуємо мову поточної сторінки. Раніше ефект читав і писав мову по колу
  // (стан ↔ localStorage), і на ru/en сторінка безкінечно перерендерювалась.
  useEffect(() => {
    localStorage.setItem("lang", lang);
    Cookies.set("language", lang);
    setIsLoading(false);
  }, [lang]);

  const changeLanguage = (languageUser) => {
    localStorage.setItem("lang", languageUser);
    // setCurrentLanguage(languageUser);
    // i18n.changeLanguage(languageUser);
    Cookies.set("language", languageUser);
  };

  return (
    <div className={className}>
      {!isLoading && (
        // <LangSwitcher
        //     changeLanguage={changeLanguage}
        //     currentLanguage={language}
        //     lang={lang}
        // />
        <LocaleSwitcher
          changeLanguage={changeLanguage}
          // currentLanguage={currentLanguage}
          lang={lang}
          dictionary={dictionary}
        />
      )}
    </div>
  );
};

export default TranslatorBtnBlock;
