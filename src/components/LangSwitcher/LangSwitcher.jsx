import React from "react";
import styles from "./LangSwitcher.module.scss";

const LangSwitcher = ({ className, id }) => {
  return (
    <div className={`${className} ${styles.langSwitch}`} id={id}>
      <span>УКР</span>
      <span>РУС</span>
    </div>
  );
};

export default LangSwitcher;
