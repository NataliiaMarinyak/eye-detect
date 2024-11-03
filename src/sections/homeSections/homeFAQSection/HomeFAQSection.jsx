"use client";
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { languagesData } from "@/data/languagesData";
import styles from "./HomeFAQSection.module.scss";


const HomeFAQSection = ({ data }) => {
  const { t, i18n } = useTranslation();
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => setIsLoading(false), []);

  const [openItems, setOpenItems] = useState([]);

  const handleOpen = (id) => {
    setOpenItems((prevOpenItems) => {
      if (prevOpenItems.includes(id)) {
        return prevOpenItems.filter((item) => item !== id);
      } else {
        return [...prevOpenItems, id];
      }
    });
  };

  return (
    <section>
      <div className={`container ${styles.container}`}>
        <h2 className={styles.title}>
          {!isLoading && t('HomeFAQSection.Title')}
        </h2>
        <ul>
          {data.map((el, i) => {
            const id = i + 1;
            const isActive = openItems.includes(id);

            return (
              <li key={id} className={styles.faqItem}>
                <h3
                  data-id={id}
                  className={styles.faqTitle}
                  onClick={() => handleOpen(id)}
                >
                  {!isLoading && i18n.language === languagesData.UA
                    ? el.question : el.questionRus}
                  <svg
                    className={isActive ? styles.isOpenSvg : styles.isClosedSvg}
                  >
                    <use href="/sprite.svg#icon-close"></use>
                  </svg>
                </h3>

                <div
                  className={`${styles.answerWrapp} ${isActive ? styles.isOpen : styles.isClosed
                    }`}
                >
                  <h4 className={styles.answer}>{!isLoading && i18n.language === languagesData.UA
                    ? el.answer : el.answerRus}</h4>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};


export default HomeFAQSection;