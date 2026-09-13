"use client";
import { useState } from "react";
import StudyLinks from "@/components/StudyLinks/StudyLinks";
import styles from "./ContentFaq.module.scss";

const TITLES = { uk: "Питання і відповіді", ru: "Вопросы и ответы", en: "Questions and answers" };

// Блок питань для внутрішніх сторінок. items: [{ q, a }]. Розмітку FAQPage
// додає сама сторінка через getContentFaqJsonLd.
const ContentFaq = ({ items = [], lang = "uk", title }) => {
  const [open, setOpen] = useState(null);

  return (
    <section id="faq">
      <div className={`container ${styles.container}`}>
        <h2 className={styles.title}>{title || TITLES[lang] || TITLES.uk}</h2>
        <ul className={styles.list}>
          {items.map((it, i) => {
            const isOpen = open === i;
            return (
              <li key={i} className={styles.item}>
                <h3 className={styles.heading}>
                  <button
                    type="button"
                    className={styles.btn}
                    aria-expanded={isOpen}
                    aria-controls={`cfaq-${i}`}
                    onClick={() => setOpen(isOpen ? null : i)}
                  >
                    <span>{it.q}</span>
                    <svg aria-hidden="true" className={isOpen ? styles.open : styles.closed}>
                      <use href="/sprite.svg#icon-close" />
                    </svg>
                  </button>
                </h3>
                <div id={`cfaq-${i}`} className={`${styles.panel} ${isOpen ? styles.isOpen : ""}`}>
                  <p className={styles.answer}>{it.a}</p>
                  {it.study && <StudyLinks lang={lang} />}
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default ContentFaq;
