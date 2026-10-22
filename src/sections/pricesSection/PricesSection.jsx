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
// Картка, де жоден рядок не має кнопки запису («Для бізнесу», ціни «за запитом»):
// одна кнопка під списком. ASK — підпис кнопки, ASK_SERVICE — хвіст назви послуги у вікні заявки.
const ASK = { uk: "Запитати ціну", ru: "Узнать цену", en: "Ask for a price" };
const ASK_SERVICE = { uk: "ціна за запитом", ru: "цена по запросу", en: "price on request" };

// Рядок має кнопку запису, якщо в ньому є конкретна ціна:
// числове поле price або сума в підписі (наприклад «12 000 ₴ під ключ»).
// Рядки «за запитом», «безкоштовно», «оплачуються окремо» — без кнопки.
const isBookable = (item) =>
  typeof item.price === "number" || /\d/.test(item.priceLabel || "");

// Рядок під групою «Виїзд до клієнта»: у Києві й Запоріжжі тест проводить партнер, його ціни — на сторінках
// цих міст (рішення власника 22.10.2026). Сам прайс цін партнера не містить.
const PARTNER_NOTE = {
  uk: { before: "У Києві й Запоріжжі тест EyeDetect проводить наш партнер у своєму кабінеті; ціни там — на сторінках ", kyiv: "Києва", and: " і ", zaporizhzhia: "Запоріжжя", after: "." },
  ru: { before: "В Киеве и Запорожье тест EyeDetect проводит наш партнёр в своём кабинете; цены там — на страницах ", kyiv: "Киева", and: " и ", zaporizhzhia: "Запорожья", after: "." },
  en: { before: "In Kyiv and Zaporizhzhia the EyeDetect test is run by our partner at the partner's own office; see the prices on the ", kyiv: "Kyiv", and: " and ", zaporizhzhia: "Zaporizhzhia", after: " pages." },
};

const PricesSection = ({ lang, dictionary }) => {
  const pick = (obj, key) => getLocalizedField(obj, key, lang);
  const bookLabel = BOOK[lang] || BOOK.uk;
  const askLabel = ASK[lang] || ASK.uk;
  const askService = ASK_SERVICE[lang] || ASK_SERVICE.uk;
  const comparisonNote = pricingComparisonNote?.[lang] ?? pricingComparisonNote?.uk;
  const partnerNote = PARTNER_NOTE[lang] || PARTNER_NOTE.uk;
  const langPrefix = lang === "uk" ? "" : `/${lang}`;

  // Ряд із двох кнопок стоїть двічі: під прайсом і наприкінці сторінки, після порівняння цін.
  const ctaButtons = (
    <>
      <PriceQuizBtn title={dictionary.buttons.calculatePrice} />
      <OpenModalBtn
        customClass=""
        title={dictionary.buttons.orderConsultation}
      />
    </>
  );

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
              {group.id === "travel" && (
                <p className={styles.groupNote}>
                  {partnerNote.before}
                  <a href={`${langPrefix}/locations/kyiv`}>{partnerNote.kyiv}</a>
                  {partnerNote.and}
                  <a href={`${langPrefix}/locations/zaporizhzhia`}>{partnerNote.zaporizhzhia}</a>
                  {partnerNote.after}
                </p>
              )}
              {!hasBookable && (
                <div className={styles.groupCta}>
                  <OpenModalBtn
                    customClass={styles.book}
                    title={askLabel}
                    ariaLabel={`${askLabel}: ${groupTitle}`}
                    service={`${groupTitle} · ${askService}`}
                  />
                </div>
              )}
            </div>
          );
        })}

        <p className={styles.guarantee}>
          <svg className={styles.guaranteeIcon} aria-hidden="true">
            <use href="/sprite.svg#icon-check-solid"></use>
          </svg>
          <span>{pick(pricingGuarantee, "text")}</span>
        </p>

        <ul className={styles.notes}>
          {pricingNotes.map((note, i) => (
            <li key={i}>{pick(note, "text")}</li>
          ))}
        </ul>

        <div className={styles.ctaGroup}>{ctaButtons}</div>

        <div className={styles.included}>
          <h2 className={styles.groupTitle}>
            {dictionary.pricesSection.includedTitle}
          </h2>
          <ul className={styles.includedList}>
            {pricingIncluded.map((el, i) => (
              <li key={i} className={styles.includedItem}>
                <svg className={styles.icon}>
                  <use href="/sprite.svg#icon-check-solid"></use>
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

        <div className={`${styles.ctaGroup} ${styles.ctaGroupEnd}`}>{ctaButtons}</div>
      </div>
    </section>
  );
};

export default PricesSection;
