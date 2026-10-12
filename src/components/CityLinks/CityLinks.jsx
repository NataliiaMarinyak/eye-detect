import { getUkrainianCityPages } from "@/helpers/getCityData";
import { getCityEn } from "@/data/cityEn";
import { getLocalizedField } from "@/helpers/getLocalizedField";
import { keepShortWords } from "@/data/pages/cityTexts";
import { i18n } from "@/dictionaries/i18n.config";
import styles from "./CityLinks.module.scss";

// Компактний блок посилань на сторінки 21 міста України (без Львова: його сторінка — головна).
// Стоїть на сторінках, куди люди приходять за ціною чи тестом (/prices, /online, головна),
// щоб з них вели посилання на міста.
//
// Серверний компонент: звичайні <a href>, жодного JS у браузері. Підключати лише із серверних файлів
// (page.jsx / page.js або секція без "use client"), інакше дані всіх міст потраплять у клієнтський бандл.
//
// Використання:
//   import CityLinks from "@/components/CityLinks/CityLinks";
//   <CityLinks lang={lang} />
//
// Пропси:
//   lang    — "uk" | "ru" | "en"; посилання ведуть на /locations/<slug>, /ru/locations/<slug>, /en/locations/<slug>
//   title   — свій заголовок h2 замість типового (необов'язково)
//   exclude — slug міста, яке не показувати, наприклад поточне (необов'язково)
const TITLE = {
  uk: "Детектор брехні у вашому місті",
  ru: "Детектор лжи в вашем городе",
  en: "Lie detector test in your city",
};

// [{ slug, name, href }] мовою сторінки, за абеткою цієї мови.
export const getCityLinks = (lang = i18n.defaultLocale) => {
  const prefix = lang === i18n.defaultLocale ? "" : `/${lang}`;
  return getUkrainianCityPages()
    .map((c) => ({
      slug: c.slug,
      name: lang === "en" ? getCityEn(c.slug) : getLocalizedField(c, "city", lang),
      href: `${prefix}/locations/${c.slug}`,
    }))
    .sort((a, b) => a.name.localeCompare(b.name, lang));
};

const CityLinks = ({ lang = i18n.defaultLocale, title, exclude }) => {
  const links = getCityLinks(lang).filter((l) => l.slug !== exclude);
  if (links.length === 0) return null;

  return (
    <section className={styles.section} aria-labelledby="city-links-title">
      <div className={`container ${styles.container}`}>
        {/* keepShortWords: короткий прийменник («у», «з», «в», «in») не лишається в кінці рядка заголовка. */}
        <h2 id="city-links-title" className={styles.title}>{keepShortWords(title || TITLE[lang] || TITLE.uk)}</h2>
        <ul className={styles.list}>
          {links.map((l) => (
            <li key={l.slug}>
              <a href={l.href} className={styles.link}>{l.name}</a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default CityLinks;
