"use client";
import { useCallback, useEffect, useRef, useState } from "react";
import HeaderTop from "./HeaderTop/HeaderTop";
import HeaderBottom from "./HeaderBottom/HeaderBottom";
import styles from "./Header.module.scss";


const Header = () => {
  const [scrolledWindow, setScrolledWindow] = useState(0);

  const headerRef = useRef(null);
  const header = headerRef.current;

  const headerScrollClassName = useCallback(() => {
    if (window?.scrollY <= 40) {
      header?.classList.remove(`${styles.hidden}`);
      header?.classList.add(`${styles.visible}`);
    } else if (window?.scrollY > scrolledWindow) {
      header?.classList.add(`${styles.hidden}`);
      header?.classList.remove(`${styles.visible}`);
    } else if (window?.scrollY < scrolledWindow) {
      header?.classList.remove(`${styles.hidden}`);
      header?.classList.add(`${styles.visible}`);
    }

    setScrolledWindow(window.scrollY);
  }, [scrolledWindow, setScrolledWindow, header?.classList]);

  useEffect(() => {
    window?.addEventListener("scroll", headerScrollClassName);

    return () => {
      window?.removeEventListener("scroll", headerScrollClassName);
    };
  }, [headerScrollClassName]);

  return (
    <header className={styles.header} ref={headerRef}>
      <HeaderTop />
      <HeaderBottom />
    </header>
  );
};


export default Header;