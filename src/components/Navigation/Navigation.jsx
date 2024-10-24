"use client";

import React, { useContext, useEffect, useState } from "react";
import styles from "./Navigation.module.scss";
import { navLinks } from "../../data/navigation";
import Link from "next/link";
import { SiteContext } from "@/context/SiteContext";
import { usePathname } from "next/navigation";
import { useTranslation } from "react-i18next";
import { currentLanguages } from "@/data/languages";

const Navigation = ({ className, isInHeader, linkStyles }) => {
  const { setIsMobileMenu } = useContext(SiteContext);

  const pathname = usePathname();

  const { i18n } = useTranslation();

  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => setIsLoading(false), []);

  const isUa = !isLoading && i18n.language === currentLanguages.UA;

  return (
    <nav className={`${styles.nav} ${className}`}>
      {navLinks.map((el) => {
        const pageLinkClassName = () => {
          if (pathname === el.href && isInHeader) {
            return `${styles.activeLink}`;
          } else {
            return `${linkStyles}`;
          }
        };

        return (
          <Link
            key={el.title}
            href={el.href}
            onClick={() => {
              setIsMobileMenu(false);
            }}
            className={pageLinkClassName()}
          >
            {!isUa ? el.titleRus : el.title}
          </Link>
        );
      })}
    </nav>
  );
};

export default Navigation;
