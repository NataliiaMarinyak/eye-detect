"use client";
import { useState } from "react";
import { getLocalizedField } from "@/helpers/getLocalizedField";
import styles from "./HomeFAQSection.module.scss";

// Питання це кнопки, відповіді це абзаци. Раніше відповіді були заголовками h4,
// що псувало структуру для пошуковика і для читачів з екрана.
const HomeFAQSection = ({ data, lang, dictionary }) => {
  const [openItems, setOpenItems] = useState([]);

  const toggle = (id) =>
    setOpenItems((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );

  return (
    <section id="faq">
      <div className={`container ${styles.container}`}>
        <h2 className={styles.title}>{dictionary.homeFAQSection.title}</h2>
        <ul className={styles.list}>
          {data.map((el, i) => {
            const id = i + 1;
            const isActive = openItems.includes(id);
            const panelId = `faq-panel-${id}`;

            return (
              <li key={id} className={styles.faqItem}>
                <h3 className={styles.faqHeading}>
                  <button
                    type="button"
                    className={styles.faqTitle}
                    aria-expanded={isActive}
                    aria-controls={panelId}
                    onClick={() => toggle(id)}
                  >
                    <span>{getLocalizedField(el, "question", lang)}</span>
                    <svg
                      aria-hidden="true"
                      className={isActive ? styles.isOpenSvg : styles.isClosedSvg}
                    >
                      <use href="/sprite.svg#icon-close"></use>
                    </svg>
                  </button>
                </h3>

                <div
                  id={panelId}
                  className={`${styles.answerWrapp} ${
                    isActive ? styles.isOpen : styles.isClosed
                  }`}
                >
                  <p className={styles.answer}>
                    {getLocalizedField(el, "answer", lang)}
                  </p>
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
