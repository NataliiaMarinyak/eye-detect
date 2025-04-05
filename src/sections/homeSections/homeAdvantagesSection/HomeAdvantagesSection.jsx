"use client";
// import { useEffect, useState } from 'react';
// import { useTranslation } from 'react-i18next';
import { advantagesData } from "@/data/advantagesData";
// import { languagesData } from "@/data/languagesData";
import { i18n } from "@/dictionaries/i18n.config";
import styles from "./HomeAdvantagesSection.module.scss";

const HomeAdvantagesSection = ({ lang, dictionary }) => {
  // const { t, i18n } = useTranslation();
  // const [isLoading, setIsLoading] = useState(true);
  // useEffect(() => setIsLoading(false), []);
  // console.log("lang in advantage", lang);

  return (
    <section>
      <div className={`container ${styles.container}`}>
        <h2 className={styles.title}>
          {dictionary.homeAdvantagesSection.title}
        </h2>
        <ul className={styles.advantagesWrapper}>
          {advantagesData.map((advantage) => (
            <li key={advantage.text} className={styles.advantageItem}>
              <div className={styles.iconWrapper}>
                <svg className={styles.icon}>
                  <use href={`/sprite.svg#icon-check-mark-in-circle`} />
                </svg>
              </div>
              <p className={styles.description}>
                {lang === i18n.locales[0] ? advantage.text : advantage.textRus}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default HomeAdvantagesSection;
