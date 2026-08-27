import OpenModalBtn from "@/components/Buttons/OpenModalBtn/OpenModalBtn";
import PriceQuizBtn from "@/components/Buttons/PriceQuizBtn/PriceQuizBtn";
import {
  pricingGroups,
  pricingNotes,
  pricingIncluded,
  pricingComparison,
} from "@/data/pricingData";
import { i18n } from "@/dictionaries/i18n.config";
import styles from "./PricesSection.module.scss";

const PricesSection = ({ lang, dictionary }) => {
  const isUk = lang === i18n.defaultLocale;
  const pick = (obj, key) => (isUk ? obj[key] : obj[`${key}Rus`]);

  return (
    <section className={styles.section}>
      <div className={`container ${styles.container}`}>
        <h1 className={styles.title}>{dictionary.pricesSection.title}</h1>
        <p className={styles.subTitle}>{dictionary.pricesSection.subTitle}</p>

        {pricingGroups.map((group) => (
          <div key={group.id} className={styles.group}>
            <h2 className={styles.groupTitle}>{pick(group, "title")}</h2>
            <ul className={styles.list}>
              {group.items.map((item, i) => (
                <li key={i} className={styles.row}>
                  <span className={styles.name}>{pick(item, "name")}</span>
                  <span className={styles.dots} aria-hidden="true"></span>
                  <span className={styles.price}>
                    {pick(item, "priceLabel")}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <ul className={styles.notes}>
          {pricingNotes.map((note, i) => (
            <li key={i}>{pick(note, "text")}</li>
          ))}
        </ul>

        <div className={styles.ctaGroup}>
          <PriceQuizBtn title={dictionary.buttons.calculatePrice} />
          <OpenModalBtn
            customClass=""
            title={dictionary.buttons.orderConsultation}
          />
        </div>

        <div className={styles.included}>
          <h2 className={styles.groupTitle}>
            {dictionary.pricesSection.includedTitle}
          </h2>
          <ul className={styles.includedList}>
            {pricingIncluded.map((el, i) => (
              <li key={i} className={styles.includedItem}>
                <svg className={styles.icon}>
                  <use href="/sprite.svg#icon-cross-in-circle"></use>
                </svg>
                <span>{pick(el, "text")}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.comparison}>
          <h2 className={styles.comparisonTitle}>
            {dictionary.pricesSection.comparisonTitle}
          </h2>
          <p className={styles.comparisonText}>
            {pick(pricingComparison, "text")}
          </p>
        </div>
      </div>
    </section>
  );
};

export default PricesSection;
