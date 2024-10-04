import React from "react";
import styles from "./LangSwitcher.module.scss";

const LangSwitcher = () => {
  return (
    <div className={styles.langSwitch}>
      <span>УКР</span>
      <span>РУС</span>
    </div>
  );
};

export default LangSwitcher;
