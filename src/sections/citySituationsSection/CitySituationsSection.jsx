import Link from "next/link";
import { keepShortWords } from "@/data/pages/cityTexts";
import styles from "./CitySituationsSection.module.scss";

// У яких ситуаціях замовляють перевірку: 4 картки з посиланням на сторінки ситуацій.
// Одне посилання на картку (заголовок), клікабельна вся картка. Тексти: src/data/pages/citySections.js
const CitySituationsSection = ({ lang, title, more, items = [] }) => {
  const prefix = lang === "uk" ? "" : "/" + lang;

  return (
    <section className={styles.section}>
      <div className={`container ${styles.container}`}>
        <h2 className={styles.title}>{keepShortWords(title)}</h2>
        <ul className={styles.grid}>
          {items.map((item) => (
            <li key={item.slug} className={styles.card}>
              <h3 className={styles.cardTitle}>
                <Link href={`${prefix}/situations/${item.slug}`} className={styles.cardLink}>
                  {keepShortWords(item.title)}
                </Link>
              </h3>
              <p className={styles.text}>{item.text}</p>
              {more && (
                <span className={styles.more} aria-hidden="true">
                  {more} →
                </span>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default CitySituationsSection;
