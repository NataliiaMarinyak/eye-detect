"use client";
import { useId, useState } from "react";
import StudyLinks from "@/components/StudyLinks/StudyLinks";
import styles from "./ContentFaq.module.scss";

const TITLES = { uk: "Питання і відповіді", ru: "Вопросы и ответы", en: "Questions and answers" };
const SOURCES = { uk: "Джерела:", ru: "Источники:", en: "Sources:" };

// Блок питань для внутрішніх сторінок. items: [{ q, a, sources? }], sources: [[назва, url], ...]. Розмітку FAQPage
// додає сама сторінка через getContentFaqJsonLd.
// sectionId: якір секції (типово #faq). На сторінці /faq блоків кілька, там якір ставить сама сторінка,
// тому передає sectionId={null}, щоб id не повторювались.
const ContentFaq = ({ items = [], lang = "uk", title, sectionId = "faq" }) => {
  const [open, setOpen] = useState(null);
  // Унікальний префікс для id відповідей: блок може стояти на сторінці кілька разів.
  const uid = useId();

  return (
    <section id={sectionId || undefined}>
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
                    aria-controls={`${uid}cfaq-${i}`}
                    onClick={() => setOpen(isOpen ? null : i)}
                  >
                    <span>{it.q}</span>
                    <svg aria-hidden="true" className={isOpen ? styles.open : styles.closed}>
                      <use href="/sprite.svg#icon-close" />
                    </svg>
                  </button>
                </h3>
                <div id={`${uid}cfaq-${i}`} className={`${styles.panel} ${isOpen ? styles.isOpen : ""}`}>
                  <div className={styles.inner}>
                    <p className={styles.answer}>{it.a}</p>
                    {it.study && <StudyLinks lang={lang} kind={it.study} />}
                    {it.sources?.length > 0 && (
                      <p className={styles.sources}>
                        {SOURCES[lang] || SOURCES.uk}{" "}
                        {it.sources.map(([label, href], k) => (
                          <span key={href}>
                            {k > 0 && " · "}
                            <a href={href} target="_blank" rel="noopener noreferrer">{label}</a>
                          </span>
                        ))}
                      </p>
                    )}
                  </div>
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
