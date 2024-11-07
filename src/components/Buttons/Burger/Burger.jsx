"use client";
import React, { useContext, useEffect } from "react";
import { SiteContext } from "@/context/SiteContext";
import { useWindowResize } from "@/hooks/windowResize";
import styles from "./Burger.module.scss";

const Burger = () => {
  const { isMobileMenu, setIsMobileMenu } = useContext(SiteContext);
  const { isMobile, isTablet } = useWindowResize();

  return (
    <>
      {(isMobile || isTablet) && (
        <button
          className={styles.btn}
          onClick={() => {
            setIsMobileMenu(!isMobileMenu);
          }}
          aria-label="Бургер меню"
        >
          {isMobileMenu ? (
            <svg>
              <use href="/sprite.svg#icon-close"></use>
            </svg>
          ) : (
            <svg>
              <use href="/sprite.svg#icon-burger"></use>
            </svg>
          )}
        </button>
      )}
    </>
  );
};

export default Burger;
