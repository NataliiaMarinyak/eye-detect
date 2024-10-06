"use client";

import React, { useContext } from "react";
import styles from "./Navigation.module.scss";
import { navLinks } from "../../data/navigation";
import Link from "next/link";
import { SiteContext } from "@/context/SiteContext";

const Navigation = ({ className }) => {
  const { isMobileMenu, setIsMobileMenu } = useContext(SiteContext);
  return (
    <nav className={`${className}`}>
      {navLinks.map((el) => {
        return (
          <Link
            key={el.title}
            href={el.href}
            onClick={() => {
              setIsMobileMenu(false);
            }}
          >
            {el.title}
          </Link>
        );
      })}
    </nav>
  );
};

export default Navigation;
