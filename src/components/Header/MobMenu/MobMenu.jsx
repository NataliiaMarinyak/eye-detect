"use client";

import Navigation from "@/components/Navigation/Navigation";
import { useWindowResize } from "@/hooks/windowResize";
import { useCallback, useContext, useEffect, useRef } from "react";
import { SiteContext } from "@/context/SiteContext";
import React from "react";
import styles from "./MobMenu.module.scss";
import TranslatorBtnBlock from "@/components/TranslatorBtnBlock/TranslatorBtnBlock";

const MobMenu = () => {
  const { isMobile, isTablet } = useWindowResize();
  const { isMobileMenu, setIsMobileMenu } = useContext(SiteContext);
  const navMenu = useRef(null);

  const onWindowClick = useCallback(
    (e) => {
      if (e.target.id === navMenu.current.id || e.target.nodeName === "LI") {
        return;
      } else {
        setIsMobileMenu(false);
      }
    },
    [setIsMobileMenu]
  );

  useEffect(() => {
    if (typeof window !== "undefined" && isMobileMenu) {
      setTimeout(() => {
        window.addEventListener("click", onWindowClick);
      }, 100);
    }

    return () => {
      window.removeEventListener("click", onWindowClick);
    };
  }, [isMobileMenu, onWindowClick]);
  return (
    <>
      {(isMobile || isTablet) && (
        <div
          className={
            isMobileMenu
              ? `${styles.burgerMenu} ${styles.visible}`
              : styles.burgerMenu
          }
          id="mobileMenu"
          ref={navMenu}
        >
          <TranslatorBtnBlock
            className={styles.translatorMobile}
          />

          <Navigation className={styles.nav} isInHeader="true" />
        </div>
      )}
    </>
  );
};

export default MobMenu;
