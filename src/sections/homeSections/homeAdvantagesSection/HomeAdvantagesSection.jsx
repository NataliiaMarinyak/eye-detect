"use client";
import { advantagesData } from "@/data/advantagesData";
import { getLocalizedField } from "@/helpers/getLocalizedField";
import styles from "./HomeAdvantagesSection.module.scss";

const HomeAdvantagesSection = ({ lang, dictionary }) => {
  return (
    <section>
      <div className={`container ${styles.container}`}>
        <h2 className={styles.title}>
          {dictionary.homeAdvantagesSection.title}
        </h2>
        {dictionary.homeAdvantagesSection.subTitle && (
          <p className={styles.subTitle}>
            {dictionary.homeAdvantagesSection.subTitle}
          </p>
        )}
        <ul className={styles.advantagesWrapper}>
          {advantagesData.map((advantage) => (
            <li key={advantage.title} className={styles.advantageItem}>
              <div className={styles.iconWrapper}>
                <svg className={styles.icon}>
                  <use href={`/sprite.svg#icon-check-mark-in-circle`} />
                </svg>
              </div>
              <h3 className={styles.advantageTitle}>
                {getLocalizedField(advantage, "title", lang)}
              </h3>
              <p className={styles.description}>
                {getLocalizedField(advantage, "text", lang)}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default HomeAdvantagesSection;
