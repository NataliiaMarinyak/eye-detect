"use client";

import { SiteContext } from "@/context/SiteContext";
import { useWindowResize } from "@/hooks/windowResize";
import React, { useContext, useEffect } from "react";
import styles from "./Burger.module.scss";

const Burger = () => {
  const { isMobileMenu, setIsMobileMenu } = useContext(SiteContext);
  const { isMobile, isTablet } = useWindowResize();

  useEffect(() => {
    if (typeof window !== "undefined" && isMobileMenu) {
      document.body.style.overflowY = "hidden";
    }

    return () => {
      document.body.style.overflowY = "scroll";
    };
  }, [isMobileMenu]);

  return (
    <>
      {(isMobile || isTablet) && (
        <button
          className={styles.btn}
          onClick={() => {
            setIsMobileMenu(!isMobileMenu);
          }}
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
