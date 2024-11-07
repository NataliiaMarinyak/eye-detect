"use client";
import React, { useContext, useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTranslation } from "react-i18next";
import { SiteContext } from "@/context/SiteContext";
import { navLinks } from "@/data/navigation";
import { languagesData } from "@/data/languagesData";
import styles from "./Navigation.module.scss";

const Navigation = ({ className, isInHeader, linkStyles }) => {
  const { setIsMobileMenu } = useContext(SiteContext);

  const pathname = usePathname();

  const { i18n } = useTranslation();

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => setIsLoading(false), []);

  const isUa = !isLoading && i18n.language === languagesData.UA;

  return (
    <nav className={className}>
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
