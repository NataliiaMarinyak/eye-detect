"use client";
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { advantagesData } from '@/data/advantagesData';
import { currentLanguages } from "@/data/languages";
import styles from './HomeAdvantagesSection.module.scss'


const HomeAdvantagesSection = () => {
  const { t, i18n } = useTranslation();
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => setIsLoading(false), []);


  return <section>
    <div className={`container ${styles.container}`}>
      <h2 className={styles.title}>{!isLoading && t('HomeAdvantagesSection.Title')}</h2>
      <ul className={styles.advantagesWrapper}>
        {advantagesData.map(advantage => <li key={advantage.text} className={styles.advantageItem}>
          <div className={styles.iconWrapper}>
            <svg className={styles.icon}>
              <use href={`/sprite.svg#icon-check-mark-in-circle`} />
            </svg>
          </div>
          <p className={styles.description}>{!isLoading && i18n.language === currentLanguages.UA
            ? advantage.text
            : advantage.textRus}</p>
        </li>)}
      </ul>
    </div>
  </section>;
};


export default HomeAdvantagesSection;