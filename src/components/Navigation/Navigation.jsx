"use client";
import React, { useContext } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { SiteContext } from "@/context/SiteContext";
import { i18n } from "@/dictionaries/i18n.config";
import { navLinksData } from "@/data/navLinksData";
import { getLocalizedField } from "@/helpers/getLocalizedField";
import styles from "./Navigation.module.scss";

const Navigation = ({ className, isInHeader, linkStyles, lang }) => {
  const { setIsMobileMenu } = useContext(SiteContext);

  const pathname = usePathname();

  const isDefaultLang = lang === i18n.defaultLocale;
  const path = isDefaultLang ? "" : `/${lang}`;

  return (
    <nav className={className}>
      {navLinksData.map((el) => {
        let checkedPath = `${path}${el.href}`;
        // For non-default locales, normalize the trailing slash so the active link logic works on the home page.
        const resultPath =
          !isDefaultLang && checkedPath === `/${lang}/`
            ? checkedPath.slice(0, -1)
            : checkedPath;

        const pageLinkClassName = () => {
          if (pathname.endsWith(resultPath) && isInHeader) {
            return `${styles.activeLink}`;
          } else {
            return `${linkStyles}`;
          }
        };

        return (
          <Link
            key={el.href}
            href={`${path}${el.href}`}
            onClick={() => {
              setIsMobileMenu(false);
            }}
            className={pageLinkClassName()}
          >
            {getLocalizedField(el, "title", lang)}
          </Link>
        );
      })}
    </nav>
  );
};

export default Navigation;
