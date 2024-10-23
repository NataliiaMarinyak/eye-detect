"use client";
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import OpenModalBtn from "@/components/Buttons/OpenModalBtn/OpenModalBtn";
import { directionsData } from "@/data/directionsData";
import { currentLanguages } from "@/data/languages";
import styles from './HomeDirectionsSection.module.scss';


const HomeDirectionsSection = () => {
    const { t,i18n } = useTranslation();
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => setIsLoading(false), []);


  return <section>
    <div className={`container ${styles.container}`}>
      {!isLoading && <h2 className={styles.title}>{t('HomeDirectionsSection.Title')}</h2>}
      <ul className={styles.directionsWrapper}>
        {directionsData.map(direction => <li key={direction.title} className={styles.directionItem}>
          <div className={styles.iconWrapper}>
            <svg className={styles.icon}>
              <use href={direction.href} />
            </svg>
          </div>
          {!isLoading && <h3 className={styles.subTitle}>{i18n.language === currentLanguages.UA
            ? direction.title : direction.titleRus}</h3>}
          {!isLoading && <p className={styles.description}>{i18n.language === currentLanguages.UA
            ? direction.description : direction.descriptionRus}</p>}
        </li>)}
      </ul>
      <OpenModalBtn />
    </div>
  </section>;
};


export default HomeDirectionsSection;