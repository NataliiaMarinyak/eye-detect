import { Fragment } from "react";
import Link from "next/link";
import { keepShortWords, keepNumbers } from "@/data/pages/cityTexts";
import styles from "./CityTownsSection.module.scss";

// Інші міста країни і сусідні міста з посиланнями. Дані: unique.towns у src/data/cityUnique.js
// keepNumbers — лише для показу: «12 000 ₴ під ключ» не розривається між рядками.
const CityTownsSection = ({ lang, towns }) => {
  if (!towns) return null;
  const { title, text, list, nearbyLabel, nearby = [] } = towns;
  const prefix = lang === "uk" ? "" : "/" + lang;

  return (
    <section className={styles.section}>
      <div className={`container ${styles.container}`}>
        <h2 className={styles.title}>{keepShortWords(title)}</h2>
        {text && <p className={styles.text}>{keepNumbers(text)}</p>}
        {list && <p className={styles.list}>{list}</p>}
        {nearby.length > 0 && (
          <p className={styles.nearby}>
            {nearbyLabel && <span className={styles.nearbyLabel}>{nearbyLabel}</span>}{" "}
            {nearby.map(([slug, name], i) => (
              <Fragment key={slug}>
                {i > 0 && <span aria-hidden="true"> · </span>}
                <Link href={`${prefix}/locations/${slug}`} className={styles.link}>
                  {name}
                </Link>
              </Fragment>
            ))}
          </p>
        )}
      </div>
    </section>
  );
};

export default CityTownsSection;
