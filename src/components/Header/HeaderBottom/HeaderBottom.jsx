import React from "react";
import styles from "./HeaderBottom.module.scss";
import Logo from "../../../components/Logo/Logo";
import Navigation from "@/components/Navigation/Navigation";
import LangSwitcher from "@/components/LangSwitcher/LangSwitcher";

const HeaderBottom = () => {
  return (
    <div className={`${styles.headerBottomWrapper}`}>
      <div className={`container ${styles.headerBottom}`}>
        <Logo />
        <Navigation className={styles.nav} />
        <LangSwitcher />
      </div>
    </div>
  );
};

export default HeaderBottom;
