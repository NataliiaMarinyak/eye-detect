import { languagesData } from "@/data/languagesData";
import styles from "./LangSwitcher.module.scss";


const LangSwitcher = ({
  changeLanguage,
  currentLanguage
}) => {

  const onHandleSetUa = () => {
    const languageUser = languagesData.UA;
    changeLanguage(languageUser);
  };

  const onHandleSetRu = () => {
    const languageUser = languagesData.RU;
    changeLanguage(languageUser);
  };


  return (
    <ul className={styles.langSwitch}>
      <li
        className={currentLanguage === languagesData.UA ? styles.active : styles.langBtn}
        onClick={onHandleSetUa}
      >
        УКР
      </li>
      <li
        className={currentLanguage === languagesData.RU ? styles.active : styles.langBtn}
        onClick={onHandleSetRu}
      >
        РУС
      </li>
    </ul>
  );
};


export default LangSwitcher;