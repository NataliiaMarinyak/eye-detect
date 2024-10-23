"use client";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import LangSwitcher from "../LangSwitcher/LangSwitcher";


const TranslatorBtnBlock = ({ className }) => {
    const { i18n } = useTranslation();
    const [language, setLanguage] = useState(
        (prev) =>
            !prev || prev === undefined ? "ua" : prev
    );

    const [isLoad, setIsLoad] = useState(true);

    useEffect(() => {
        const lang = localStorage.getItem("i18nextLng");

        setLanguage(() => (lang ? lang : "ua"));

        setIsLoad(false);

    }, []);


    const changeLanguage = (languageUser) => {
        localStorage.setItem("i18nextLng", languageUser);
        const language = localStorage.getItem("i18nextLng");
        setLanguage(language);
        i18n.changeLanguage(language);
    };


    return (
        <div className={className}>
            {!isLoad && (
                <LangSwitcher
                    changeLanguage={changeLanguage}
                    currentLanguage={language}
                />
            )}
        </div>
    );
};

export default TranslatorBtnBlock;