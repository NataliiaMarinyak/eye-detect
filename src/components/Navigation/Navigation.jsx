"use client";

import React, { useContext } from "react";
import styles from "./Navigation.module.scss";
import { navLinks } from "../../data/navigation";
import Link from "next/link";
import { SiteContext } from "@/context/SiteContext";
import { usePathname } from "next/navigation";

const Navigation = ({ className, isInHeader }) => {
  const { setIsMobileMenu } = useContext(SiteContext);

  const pathname = usePathname();

  return (
    <nav className={`${styles.nav} ${className}`}>
      {navLinks.map((el) => {
        const pageLinkClassName = () => {
          if (pathname === el.href && isInHeader) {
            return `${styles.activeLink}`;
          } else {
            return;
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
            {el.title}
          </Link>
        );
      })}
    </nav>
  );
};

export default Navigation;
