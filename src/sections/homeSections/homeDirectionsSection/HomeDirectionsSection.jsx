// "use client";
// import { useEffect, useState } from 'react';
// import { useTranslation } from 'react-i18next';
import OpenModalBtn from "@/components/Buttons/OpenModalBtn/OpenModalBtn";
import { directionsData } from "@/data/directionsData";
// import { languagesData } from "@/data/languagesData";
import { i18n } from "@/dictionaries/i18n.config";
import styles from "./HomeDirectionsSection.module.scss";

const HomeDirectionsSection = ({ lang, dictionary }) => {
  // const { t, i18n } = useTranslation();
  // const [isLoading, setIsLoading] = useState(true);
  // useEffect(() => setIsLoading(false), []);

  return (
    <section>
      <div className={`container ${styles.container}`}>
        <h2 className={styles.title}>
          {dictionary.homeDirectionsSection.title}
        </h2>
        {dictionary.homeDirectionsSection.subTitle && (
          <p className={styles.intro}>
            {dictionary.homeDirectionsSection.subTitle}
          </p>
        )}
        <ul className={styles.directionsWrapper}>
          {directionsData.map((direction) => (
            <li key={direction.title} className={styles.directionItem}>
              <div className={styles.iconWrapper}>
                <svg className={styles.icon}>
                  <use href={direction.href} />
                </svg>
              </div>
              <h3 className={styles.subTitle}>
                {lang === i18n.locales[0]
                  ? direction.title
                  : direction.titleRus}
              </h3>
              <p className={styles.description}>
                {lang === i18n.locales[0]
                  ? direction.description
                  : direction.descriptionRus}
              </p>
            </li>
          ))}
        </ul>
        {dictionary.homeDirectionsSection.conclusion && (
          <p className={styles.conclusion}>
            {dictionary.homeDirectionsSection.conclusion}
          </p>
        )}
        <OpenModalBtn
          customClass={styles.ctaBtn}
          title={dictionary.buttons.calculatePrice}
        />
      </div>
    </section>
  );
};

export default HomeDirectionsSection;
