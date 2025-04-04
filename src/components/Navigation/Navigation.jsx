"use client";
// import React, { useContext, useEffect, useState } from "react";
import React, { useContext } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
// import { useTranslation } from "react-i18next";
import { SiteContext } from "@/context/SiteContext";
import { navLinks } from "@/data/navigation";
// import { languagesData } from "@/data/languagesData";
import styles from "./Navigation.module.scss";
import { i18n } from "@/dictionaries/i18n.config";

const Navigation = ({ className, isInHeader, linkStyles, lang }) => {
  const { setIsMobileMenu } = useContext(SiteContext);

  const pathname = usePathname();

  // const { i18n } = useTranslation();
  // const [isLoading, setIsLoading] = useState(true);

  // useEffect(() => setIsLoading(false), []);

  return (
    <nav className={className}>
      {navLinks.map((el) => {
        const pageLinkClassName = () => {
          //из pathname нужно будет удалять ru или ua
          if (pathname === el.href && isInHeader) {
            return `${styles.activeLink}`;
          } else {
            return `${linkStyles}`;
          }
        };

        return (
          <Link
            key={el.title}
            href={`/${lang}${el.href}`}
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
