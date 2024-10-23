import styles from "./LangSwitcher.module.scss";


const LangSwitcher = ({
  changeLanguage,
  currentLanguage
}) => {

  const onHandleSetUa = () => {
    const languageUser = "ua";
    changeLanguage(languageUser);
  };

  const onHandleSetRu = () => {
    const languageUser = "ru";
    changeLanguage(languageUser);
  };


  return (
    <ul className={styles.langSwitch}>
      <li
        className={currentLanguage === "ua" ? styles.active : styles.langBtn}
        onClick={onHandleSetUa}
      >
        УКР
      </li>
      <li
        className={currentLanguage === "ru" ? styles.active : styles.langBtn}
        onClick={onHandleSetRu}
      >
        РУС
      </li>
    </ul>
  );
};


export default LangSwitcher;