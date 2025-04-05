// import { languagesData } from "@/data/languagesData";
import { i18n } from "@/dictionaries/i18n.config";
import styles from "./LangSwitcher.module.scss";

const LangSwitcher = ({ changeLanguage, lang }) => {
  const onHandleSetUa = () => {
    const languageUser = i18n.locales[0];
    changeLanguage(languageUser);
  };

  const onHandleSetRu = () => {
    const languageUser = i18n.locales[1];
    changeLanguage(languageUser);
  };

  return (
    <ul className={styles.langSwitch}>
      <li
        className={lang === i18n.locales[0] ? styles.active : styles.langBtn}
        onClick={onHandleSetUa}
      >
        УКР
      </li>
      <li
        className={lang === i18n.locales[1] ? styles.active : styles.langBtn}
        onClick={onHandleSetRu}
      >
        РУС
      </li>
    </ul>
  );
};

export default LangSwitcher;
