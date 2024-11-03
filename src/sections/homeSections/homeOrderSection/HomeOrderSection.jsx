"use client";
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next'; import OrderForm from '@/components/OrderForm/OrderForm';
import { languagesData } from "@/data/languagesData";
import { addressData } from '@/data/addressData';
import styles from './HomeOrderSection.module.scss';


const HomeOrderSection = () => {
  const { t, i18n } = useTranslation();
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => setIsLoading(false), []);


  return <section id="order">
    <div className={`container ${styles.container}`}>
      <h2 className={styles.title}>{!isLoading && t('HomeOrderSection.Title')}</h2>
      <div className={styles.contentWrap}>
        <div className={styles.infoWrapper}>
          <ul className={styles.infoList}>
            <li className={styles.infoItem}>{!isLoading && t('HomeOrderSection.Question')}</li>
            <li className={styles.infoItem}>{!isLoading && t('HomeOrderSection.Answer')}</li>
          </ul>
          <address>
            <a className={styles.addressLink} href={addressData.hrefLink} target="_blank" rel="noopener noreferrer">
              <svg className={styles.icon}>
                <use href={`/sprite.svg#icon-map_pin`} />
              </svg>
              {!isLoading && i18n.language === languagesData.UA
                ? addressData.textAddress : addressData.textAddressRus}
            </a>
          </address>
        </div>
        <OrderForm />
      </div>
    </div>
  </section>;
};


export default HomeOrderSection;