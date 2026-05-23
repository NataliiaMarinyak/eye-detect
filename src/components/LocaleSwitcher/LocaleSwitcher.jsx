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

  const redirectedPathName = (locale) => {
    if (!pathName) return "/";

    const pathnameIsMissingLocale = i18n.locales.every(
      (loc) => !pathName.startsWith(`/${loc}/`) && pathName !== `/${loc}`
    );

    if (pathnameIsMissingLocale) {
      if (locale === i18n.defaultLocale) return pathName;
      return `/${locale}${pathName}`;
    } else {
      if (locale === i18n.defaultLocale) {
        const segments = pathName.split("/");
        const isHome = segments.length === 2;
        if (isHome) return "/";

        segments.splice(1, 1);
        return segments.join("/");
      }

      const segments = pathName.split("/");
      segments[1] = locale;
      return segments.join("/");
    }
  };

  return (
    <ul className={styles.langSwitch}>
      {i18n.locales.map((locale) => {
        const labelKey = LOCALE_LABEL_KEY[locale];
        const label = labelKey && dictionary?.buttons?.[labelKey]
          ? dictionary.buttons[labelKey]
          : locale.toUpperCase();

        return (
          <li key={locale} onClick={() => changeLanguage && changeLanguage(locale)}>
            <Link
              className={lang === locale ? styles.active : styles.langBtn}
              href={redirectedPathName(locale)}
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
