"use client";
import React from "react";
import { useCallback, useContext, useEffect, useRef } from "react";
import Navigation from "@/components/Navigation/Navigation";
import TranslatorBtnBlock from "@/components/TranslatorBtnBlock/TranslatorBtnBlock";
import { useWindowResize } from "@/hooks/windowResize";
import { SiteContext } from "@/context/SiteContext";
import styles from "./MobMenu.module.scss";

const MobMenu = ({ lang, dictionary }) => {
  const { isMobile, isTablet } = useWindowResize();
  const { isMobileMenu, setIsMobileMenu } = useContext(SiteContext);
  const navMenu = useRef(null);

  const onWindowClick = useCallback(
    (e) => {
      if (e.target.id === navMenu.current.id) {
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

      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "auto";
    }

    return () => {
      window.removeEventListener("click", onWindowClick);
      document.body.style.overflowY = "auto";
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
            lang={lang}
            dictionary={dictionary}
          />

          <Navigation className={styles.nav} isInHeader="true" lang={lang} />
        </div>
      )}
    </>
  );
};

export default MobMenu;
