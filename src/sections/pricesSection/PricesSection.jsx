import OpenModalBtn from "@/components/Buttons/OpenModalBtn/OpenModalBtn";
import PriceQuizBtn from "@/components/Buttons/PriceQuizBtn/PriceQuizBtn";
import {
  pricingGroups,
  pricingNotes,
  pricingIncluded,
  pricingComparison,
  pricingComparisonNote,
  pricingGuarantee,
} from "@/data/pricingData";
import { getLocalizedField } from "@/helpers/getLocalizedField";
import styles from "./PricesSection.module.scss";

const BOOK = { uk: "Записатися", ru: "Записаться", en: "Book" };

// Рядок має кнопку запису, якщо в ньому є конкретна ціна:
// числове поле price або сума в підписі (наприклад «12 000 ₴ під ключ»).
// Рядки «за запитом», «безкоштовно», «оплачуються окремо» — без кнопки.
const isBookable = (item) =>
  typeof item.price === "number" || /\d/.test(item.priceLabel || "");

const PricesSection = ({ lang, dictionary }) => {
  const pick = (obj, key) => getLocalizedField(obj, key, lang);
  const bookLabel = BOOK[lang] || BOOK.uk;
  const comparisonNote = pricingComparisonNote?.[lang] ?? pricingComparisonNote?.uk;

  return (
    <section className={styles.section}>
      <div className={`container ${styles.container}`}>
        <h1 className={styles.title}>{dictionary.pricesSection.title}</h1>
        <p className={styles.subTitle}>{dictionary.pricesSection.subTitle}</p>

        {pricingGroups.map((group) => {
          const groupTitle = pick(group, "title");
          // Порожнє місце замість кнопки, щоб ціни в картці стояли в один стовпчик.
          const hasBookable = group.items.some(isBookable);

          return (
            <div key={group.id} className={styles.group}>
              <h2 className={styles.groupTitle}>{groupTitle}</h2>
              <ul className={styles.list}>
                {group.items.map((item, i) => {
                  const name = pick(item, "name");
                  const priceLabel = pick(item, "priceLabel");

                  return (
                    <li key={i} className={styles.row}>
                      <div className={styles.line}>
                        <span className={styles.name}>{name}</span>
                        <span className={styles.dots} aria-hidden="true"></span>
                        <span className={styles.price}>{priceLabel}</span>
                      </div>
                      {isBookable(item) ? (
                        <OpenModalBtn
                          customClass={styles.book}
                          title={bookLabel}
                          ariaLabel={`${bookLabel}: ${name}, ${priceLabel}`}
                          service={`${groupTitle} · ${name} · ${priceLabel}`}
                        />
                      ) : (
                        hasBookable && <span className={styles.bookSpacer} aria-hidden="true"></span>
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>
          );
        })}

        <p className={styles.guarantee}>
          <svg className={styles.guaranteeIcon} aria-hidden="true">
            <use href="/sprite.svg#icon-cross-in-circle"></use>
          </svg>
          <span>{pick(pricingGuarantee, "text")}</span>
        </p>

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
          <ul className={styles.comparisonList}>
            {pricingComparison.rows.map((r) => (
              <li key={r.country} className={styles.comparisonRow}>
                <span className={styles.comparisonCountry}>{pick(r, "country")}</span>
                <span className={styles.comparisonNote}>{pick(r, "note")}</span>
                <span className={styles.comparisonPrice}>
                  {pick(r, "price")}
                  {pick(r, "uah") && <small> {pick(r, "uah")}</small>}
                </span>
              </li>
            ))}
          </ul>
          {comparisonNote && (
            <p className={styles.comparisonFootnote}>{comparisonNote}</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default PricesSection;
