import { keepShortWords } from "@/data/pages/cityTexts";
import styles from "./CityCasesSection.module.scss";

// Реальні звернення з країни міста, без імен. Дані: unique.cases у src/data/cityUnique.js
const CityCasesSection = ({ cases }) => {
  if (!cases?.items?.length) return null;
  const { title, note, items, disclaimer } = cases;

  return (
    <section className={styles.section}>
      <div className={`container ${styles.container}`}>
        <h2 className={styles.title}>{keepShortWords(title)}</h2>
        {note && <p className={styles.note}>{note}</p>}
        <ul className={styles.grid}>
          {items.map((item) => (
            <li key={item.title} className={styles.card}>
              {item.label && <p className={styles.label}>{item.label}</p>}
              <h3 className={styles.cardTitle}>{item.title}</h3>
              <p className={styles.text}>{item.text}</p>
            </li>
          ))}
        </ul>
        {disclaimer && <p className={styles.disclaimer}>{disclaimer}</p>}
      </div>
    </section>
  );
};

export default CityCasesSection;
