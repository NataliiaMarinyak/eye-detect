import React from "react";
import Logo from "@/components/Logo/Logo";
import Navigation from "@/components/Navigation/Navigation";
import Burger from "@/components/Buttons/Burger/Burger";
import TranslatorBtnBlock from "@/components/TranslatorBtnBlock/TranslatorBtnBlock";
import MobMenu from "../MobMenu/MobMenu";
import styles from "./HeaderBottom.module.scss";

const HeaderBottom = ({ lang, dictionary }) => {
  return (
    <div className={`${styles.headerBottomWrapper}`}>
      <div className={`container ${styles.headerBottom}`}>
        <Burger />
        <Logo className={styles.logo} lang={lang} />
        <Navigation
          className={styles.nav}
          isInHeader="true"
          linkStyles={styles.navLink}
          lang={lang}
        />
        <TranslatorBtnBlock
          className={styles.translatorDesktop}
          lang={lang}
          dictionary={dictionary}
        />
      </div>
      <MobMenu lang={lang} dictionary={dictionary} />
    </div>
  );
};

export default HeaderBottom;
