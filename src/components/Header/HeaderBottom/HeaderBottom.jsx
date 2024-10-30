import React from "react";
import Logo from "../../../components/Logo/Logo";
import Navigation from "@/components/Navigation/Navigation";
import Burger from "@/components/Buttons/Burger/Burger";
import TranslatorBtnBlock from "@/components/TranslatorBtnBlock/TranslatorBtnBlock";
import MobMenu from "../MobMenu/MobMenu";
import styles from "./HeaderBottom.module.scss";


const HeaderBottom = () => {
  return (
    <div className={`${styles.headerBottomWrapper}`}>
      <div className={`container ${styles.headerBottom}`}>
        <Burger />
        <Logo className={styles.logo} />
        <Navigation
          className={styles.nav}
          isInHeader="true"
          linkStyles={styles.navLink}
        />
        <TranslatorBtnBlock className={styles.translatorDesktop} />
      </div>
      <MobMenu />
    </div>
  );
};


export default HeaderBottom;