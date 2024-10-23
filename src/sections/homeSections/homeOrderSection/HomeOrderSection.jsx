"use client";
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';import OrderForm from '@/components/OrderForm/OrderForm';
import { currentLanguages } from "@/data/languages";
import styles from './HomeOrderSection.module.scss';


const HomeOrderSection = () => {
  const { t, i18n } = useTranslation();
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => setIsLoading(false), []);

  
  return <section id="order">
    <div className={`container ${styles.container}`}>
      {!isLoading && <h2 className={styles.title}>{t('HomeOrderSection.Title')}</h2>}
      <div className={styles.contentWrap}>
        <div className={styles.infoWrapper}>
          <ul className={styles.infoList}>
            {!isLoading && <li className={styles.infoItem}>{t('HomeOrderSection.Question')}</li>}
            {!isLoading && <li className={styles.infoItem}>{t('HomeOrderSection.Answer')}</li>}
          </ul>
          <address>
            {!isLoading && <a className={styles.addressLink} href="https://maps.app.goo.gl/dP8aPY264zdKpEoT6" target="_blank" rel="noopener noreferrer">
              <svg className={styles.icon}>
                <use href={`/sprite.svg#icon-map_pin`} />
              </svg>
              {i18n.language === currentLanguages.UA
            ? "Львів, вул. Данилишина 6, оф. 217" : "Львов, ул. Данилишина 6, оф. 217"}
            </a>}
          </address>
        </div>
        <OrderForm />
      </div>
    </div>
  </section>;
};


export default HomeOrderSection;