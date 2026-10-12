import Link from "next/link";
import Reveal from "@/components/Reveal/Reveal";
import OpenModalBtn from "@/components/Buttons/OpenModalBtn/OpenModalBtn";
import { homeLviv } from "@/data/pages/homeLviv";
import { pricingGroups } from "@/data/pricingData";
import { phone } from "@/data/socialMediaData";
import { keepShortWords } from "@/data/pages/cityTexts";
import { getLocalizedField } from "@/helpers/getLocalizedField";
import { i18n } from "@/dictionaries/i18n.config";
import styles from "./HomeLvivSection.module.scss";

// Блок головної сторінки про Львів: що ми пропонуємо тим, хто шукає «поліграф», де кабінет і як
// проходить візит, виїзд по області, ціни і чому результат не можна «домовити».
// Тексти — src/data/pages/homeLviv.js (uk / ru / en).
//
// Серверний компонент: браузер отримує готовий HTML. Єдиний клієнтський елемент — готова кнопка
// OpenModalBtn під абзацом про оригінал звіту: вона отримує лише два рядки тексту (підпис і назву
// послуги), тож дані прайсу в код для браузера не потрапляють.
//
// Номер телефону — з того самого джерела, що й у шапці та підвалі (data/socialMediaData.js).

// Назва послуги для вікна заявки і тексту заявки — мовою сторінки.
const SERVICE = { uk: "EyeDetect у Львові", ru: "EyeDetect во Львове", en: "EyeDetect in Lviv" };

// Ціни не набрано руками: рядки беруться з pricingData.js. Показуємо всі позиції групи
// «Приватні перевірки» і найдешевший онлайн-тест. Позиції без числової ціни пропускаємо.
const getPriceRows = (lang) => {
  const itemsOf = (id) =>
    (pricingGroups.find((g) => g.id === id)?.items || []).filter((item) => typeof item.price === "number");
  const cheapestOnline = itemsOf("online").sort((a, b) => a.price - b.price)[0];

  return [...itemsOf("private"), cheapestOnline].filter(Boolean).map((item) => ({
    name: getLocalizedField(item, "name", lang),
    price: getLocalizedField(item, "priceLabel", lang),
  }));
};

const HomeLvivSection = ({ lang = i18n.defaultLocale, dictionary }) => {
  const t = homeLviv[lang] || homeLviv.uk;
  const prefix = lang === i18n.defaultLocale ? "" : `/${lang}`;
  const priceRows = getPriceRows(lang);
  // Підпис кнопки заявки — зі словника (buttons.orderConsultation, три мови).
  const ctaLabel = dictionary?.buttons?.orderConsultation;

  return (
    <section id="lviv" aria-labelledby="home-lviv-title">
      <div className={`container ${styles.container}`}>
        <Reveal>
          <h2 id="home-lviv-title" className={styles.title}>{keepShortWords(t.title)}</h2>
        </Reveal>

        <ul className={styles.grid}>
          {t.cards.map((card, i) => (
            <Reveal as="li" key={card.id} delay={i * 0.06} className={styles.card}>
              <h3 className={styles.cardTitle}>{keepShortWords(card.title)}</h3>
              {card.paragraphs.map((text) => (
                <p key={text} className={styles.text}>{text}</p>
              ))}
              {card.id === "prices" && priceRows.length > 0 && (
                <ul className={styles.prices}>
                  {priceRows.map((row) => (
                    <li key={row.name} className={styles.priceRow}>
                      <span className={styles.priceName}>{row.name}</span>
                      <span className={styles.priceValue}>{row.price}</span>
                    </li>
                  ))}
                </ul>
              )}
              {card.note && <p className={styles.text}>{card.note}</p>}
              {/* Картка з адресою каже «зателефонуйте або залиште заявку»: номер для дзвінка тут же. */}
              {card.id === "office" && (
                <a className={styles.phone} href={phone.href}>
                  <svg aria-hidden="true">
                    <use href={phone.icon} />
                  </svg>
                  {phone.contact}
                </a>
              )}
              {card.link && (
                <Link className={styles.more} href={`${prefix}${card.link.href}`}>
                  {card.link.text}
                </Link>
              )}
            </Reveal>
          ))}
        </ul>

        <Reveal className={styles.trustWrap}>
          <p className={styles.trust}>
            {t.trust.before}
            <Link className={styles.trustLink} href={`${prefix}${t.trust.href}`}>
              {t.trust.linkText}
            </Link>
            {t.trust.after}
          </p>
          {/* Одна кнопка заявки на весь блок: до наступної кнопки на телефоні далеко. */}
          {ctaLabel && (
            <div className={styles.ctaWrap}>
              <OpenModalBtn title={ctaLabel} service={SERVICE[lang] || SERVICE.uk} />
            </div>
          )}
        </Reveal>
      </div>
    </section>
  );
};

export default HomeLvivSection;
