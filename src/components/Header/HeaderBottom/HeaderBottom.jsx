import React from "react";
import styles from "./HeaderBottom.module.scss";
import Logo from "../../../components/Logo/Logo";
import Navigation from "@/components/Navigation/Navigation";
import LangSwitcher from "@/components/LangSwitcher/LangSwitcher";
import Burger from "@/components/Buttons/Burger/Burger";
import MobMenu from "../MobMenu/MobMenu";

const HeaderBottom = () => {
  return (
    <div className={`${styles.headerBottomWrapper}`}>
      <div className={`container ${styles.headerBottom}`}>
        <Burger />
        <Logo className={styles.logo} />
        <Navigation className={styles.nav} isInHeader="true" />
        <LangSwitcher id={styles.langSwitcher} />
      </div>
      <MobMenu />
    </div>
  );
};

export default HeaderBottom;
