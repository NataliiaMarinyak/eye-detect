"use client";
import { useState, useEffect } from "react";
// import { useTranslation } from "react-i18next";
// import LangSwitcher from "../LangSwitcher/LangSwitcher";
import LocaleSwitcher from "../LocaleSwitcher/LocaleSwitcher";
import Cookies from "js-cookie";
// import { languagesData } from "@/data/languagesData";
import { i18n } from "@/dictionaries/i18n.config";

const TranslatorBtnBlock = ({ className, lang }) => {
  // const { i18n } = useTranslation();
  const [currentLanguage, setCurrentLanguage] = useState(
    // (prev) => !prev || prev === undefined ? languagesData.UA : prev
    lang
  );

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const language = localStorage.getItem("lang");
    setCurrentLanguage(() => (language ? language : i18n.defaultLocale));
    localStorage.setItem("lang", currentLanguage);
    Cookies.set("language", language);
    setIsLoading(false);
  }, [currentLanguage]);

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
        />
      )}
    </div>
  );
};

export default TranslatorBtnBlock;
