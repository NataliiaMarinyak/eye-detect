"use client";
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import OpenModalBtn from "@/components/Buttons/OpenModalBtn/OpenModalBtn";
import { directionsData } from "@/data/directionsData";
import { languagesData } from "@/data/languagesData";
import styles from './HomeDirectionsSection.module.scss';


const HomeDirectionsSection = () => {
  const { t, i18n } = useTranslation();
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => setIsLoading(false), []);


  return <section>
    <div className={`container ${styles.container}`}>
      <h2 className={styles.title}>{!isLoading && t('HomeDirectionsSection.Title')}</h2>
      <ul className={styles.directionsWrapper}>
        {directionsData.map(direction => <li key={direction.title} className={styles.directionItem}>
          <div className={styles.iconWrapper}>
            <svg className={styles.icon}>
              <use href={direction.href} />
            </svg>
          </div>
          <h3 className={styles.subTitle}>{!isLoading && i18n.language === languagesData.UA
            ? direction.title : direction.titleRus}</h3>
          <p className={styles.description}>{!isLoading && i18n.language === languagesData.UA
            ? direction.description : direction.descriptionRus}</p>
        </li>)}
      </ul>
      <OpenModalBtn />
    </div>
  </section>;
};


export default HomeDirectionsSection;