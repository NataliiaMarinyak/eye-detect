"use client";
import { useState } from "react";
import { getLocalizedField } from "@/helpers/getLocalizedField";
import styles from "./HomeFAQSection.module.scss";

const HomeFAQSection = ({ data, lang, dictionary }) => {
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
        <h2 className={styles.title}>{dictionary.homeFAQSection.title}</h2>
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
                  {getLocalizedField(el, "question", lang)}
                  <svg
                    className={isActive ? styles.isOpenSvg : styles.isClosedSvg}
                  >
                    <use href="/sprite.svg#icon-close"></use>
                  </svg>
                </h3>

                <div
                  className={`${styles.answerWrapp} ${
                    isActive ? styles.isOpen : styles.isClosed
                  }`}
                >
                  <h4 className={styles.answer}>
                    {getLocalizedField(el, "answer", lang)}
                  </h4>
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
