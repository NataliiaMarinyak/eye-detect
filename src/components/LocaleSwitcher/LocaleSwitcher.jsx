"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { i18n } from "@/dictionaries/i18n.config";
import styles from "./LocaleSwitcher.module.scss";

const LOCALE_LABEL_KEY = {
  uk: "localeSwitcherUkr",
  ru: "localeSwitcherRus",
  en: "localeSwitcherEn",
};

const LocaleSwitcher = ({ changeLanguage, lang, dictionary }) => {
  const pathName = usePathname();

  // Шлях без мовного префікса: "/uk/x" → "/x", "/ru" → "/", "/x" → "/x".
  // На сервері шлях приходить із префіксом (/uk/...), у браузері української версії — без нього,
  // тому зводимо обидва випадки до одного, щоб посилання в HTML і після гідрації збігались.
  const segments = (pathName || "/").split("/");
  if (i18n.locales.includes(segments[1])) segments.splice(1, 1);
  const barePath = segments.join("/") || "/";

  // Головна мовної версії — без кінцевого слеша (/ru/ віддає 308 на /ru).
  const redirectedPathName = (locale) => {
    if (locale === i18n.defaultLocale) return barePath;
    return barePath === "/" ? `/${locale}` : `/${locale}${barePath}`;
  };

  // Порядок у перемикачі: UA · EN · RU.
  const order = ["uk", "en", "ru"];

  return (
    <ul className={styles.langSwitch}>
      {order.map((locale) => {
        if (!i18n.locales.includes(locale)) return null;
        const labelKey = LOCALE_LABEL_KEY[locale];
        const label = labelKey && dictionary?.buttons?.[labelKey]
          ? dictionary.buttons[labelKey]
          : locale.toUpperCase();

        return (
          <li key={locale} onClick={() => changeLanguage && changeLanguage(locale)}>
            <Link
              className={lang === locale ? styles.active : styles.langBtn}
              href={redirectedPathName(locale)}
              hrefLang={locale}
              prefetch={false}
            >
              {label}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default LocaleSwitcher;
