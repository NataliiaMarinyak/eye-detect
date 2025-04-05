"use client";
// import React, { useContext, useEffect, useState } from "react";
import React, { useContext } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
// import { useTranslation } from "react-i18next";
import { SiteContext } from "@/context/SiteContext";
// import { languagesData } from "@/data/languagesData";
import { i18n } from "@/dictionaries/i18n.config";
import { navLinksData } from "@/data/navLinksData";
import styles from "./Navigation.module.scss";

const Navigation = ({ className, isInHeader, linkStyles, lang }) => {
  const { setIsMobileMenu } = useContext(SiteContext);

  const pathname = usePathname();

  // const { i18n } = useTranslation();
  // const [isLoading, setIsLoading] = useState(true);

  // useEffect(() => setIsLoading(false), []);
  // console.log("pathname", pathname);
  // если язык по умолчанию, то убираем его из url (в нашем случае uk))
  const isDefaultLang = lang === i18n.defaultLocale;
  const path = isDefaultLang ? "" : `/${lang}`;
  // console.log("path", path);

  return (
    <nav className={className}>
      {navLinksData.map((el) => {
        // console.log("el.href", el.href);
        // console.log("`${path}${el.href}`", `${path}${el.href}`);
        let checkedPath = `${path}${el.href}`;
        // дополнительная проверка для русского языка для отображнения activeLink на home (с url "/ru/" убираем последний "/" для корректного сравнения с pathname)
        const resultPath =
          checkedPath === `/${i18n.locales[1]}/`
            ? checkedPath.slice(0, -1)
            : checkedPath;
        // console.log("resultPath", resultPath);

        const pageLinkClassName = () => {
          // if (pathname === el.href && isInHeader) {
          // if (pathname === `${path}${el.href}` && isInHeader) {
          // if (pathname.endsWith(`${path}${el.href}`) && isInHeader) {
          if (pathname.endsWith(resultPath) && isInHeader) {
            return `${styles.activeLink}`;
          } else {
            return `${linkStyles}`;
          }
        };

        return (
          <Link
            key={el.title}
            href={`${path}${el.href}`}
            onClick={() => {
              setIsMobileMenu(false);
            }}
            className={pageLinkClassName()}
          >
            {/* {!isLoading && (lang === i18n.locales[0] ? el.title : el.titleRus)} */}
            {lang === i18n.locales[0] ? el.title : el.titleRus}
          </Link>
        );
      })}
    </nav>
  );
};

export default Navigation;
