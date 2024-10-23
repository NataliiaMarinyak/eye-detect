"use client";
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { currentLanguages } from "@/data/languages";
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
        {!isLoading && <h2 className={styles.title}>
          {t('HomeFAQSection.Title')}
        </h2>}
        <ul>
          {data.map((el, i) => {
            const id = i + 1;
            const isActive = openItems.includes(id);

            return (
              <li key={id} className={styles.faqItem}>
                {!isLoading && <h3
                  data-id={id}
                  className={styles.faqTitle}
                  onClick={() => handleOpen(id)}
                >
                  {i18n.language === currentLanguages.UA
            ? el.question : el.questionRus}
                  <svg
                    className={isActive ? styles.isOpenSvg : styles.isClosedSvg}
                  >
                    <use href="./sprite.svg#icon-close"></use>
                  </svg>
                </h3>}

                <div
                  className={`${styles.answerWrapp} ${isActive ? styles.isOpen : styles.isClosed
                    }`}
                >
                  {!isLoading && <h4 className={styles.answer}>{i18n.language === currentLanguages.UA
            ? el.answer : el.answerRus}</h4>}
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
