// "use client";
// import { useEffect, useState } from 'react';
// import { useTranslation } from 'react-i18next';
import OrderForm from "@/components/OrderForm/OrderForm";
// import { languagesData } from "@/data/languagesData";
import { i18n } from "@/dictionaries/i18n.config";
import { addressData } from "@/data/addressData";
import styles from "./HomeOrderSection.module.scss";

const HomeOrderSection = ({ lang, dictionary }) => {
  // const { t, i18n } = useTranslation();
  // const [isLoading, setIsLoading] = useState(true);
  // useEffect(() => setIsLoading(false), []);

  return (
    <section id="order">
      <div className={`container ${styles.container}`}>
        <h2 className={styles.title}>{dictionary.homeOrderSection.title}</h2>
        <div className={styles.contentWrap}>
          <div className={styles.infoWrapper}>
            <ul className={styles.infoList}>
              <li className={styles.infoItem}>
                {dictionary.homeOrderSection.question}
              </li>
              <li className={styles.infoItem}>
                {dictionary.homeOrderSection.answer}
              </li>
            </ul>
            <address>
              <a
                className={styles.addressLink}
                href={addressData.hrefLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg className={styles.icon}>
                  <use href={`/sprite.svg#icon-map_pin`} />
                </svg>
                {lang === i18n.locales[0]
                  ? addressData.textAddress
                  : addressData.textAddressRus}
              </a>
            </address>
          </div>
          <OrderForm dictionary={dictionary} />
        </div>
      </div>
    </section>
  );
};

export default HomeOrderSection;
