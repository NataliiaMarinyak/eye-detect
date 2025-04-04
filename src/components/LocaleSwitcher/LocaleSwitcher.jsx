"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { i18n } from "@/dictionaries/i18n.config";
import styles from "./LocaleSwitcher.module.scss";

const LocaleSwitcher = ({
  changeLanguage,
  // currentLanguage,
  lang,
}) => {
  const pathName = usePathname();
  // console.log("pathName", pathName);

  const redirectedPathName = (locale) => {
    if (!pathName) return "/";

    const pathnameIsMissingLocale = i18n.locales.every(
      (locale) =>
        !pathName.startsWith(`/${locale}/`) && pathName !== `/${locale}`
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

  const onHandleSetUa = () => {
    const languageUser = i18n.locales[0];
    changeLanguage(languageUser);
  };

  const onHandleSetRu = () => {
    const languageUser = i18n.locales[1];
    changeLanguage(languageUser);
  };

  return (
    <ul className={styles.langSwitch}>
      <li
        // className={lang === languagesData.UA ? styles.active : styles.langBtn}
        onClick={onHandleSetUa}
      >
        <Link
          className={lang === i18n.locales[0] ? styles.active : styles.langBtn}
          // href={redirectedPathName(languagesData.UA)}
          href={redirectedPathName(i18n.locales[0])}
        >
          {/* УКР */}
          {i18n.locales[0]}
        </Link>
      </li>
      <li
        // className={lang === languagesData.RU ? styles.active : styles.langBtn}
        onClick={onHandleSetRu}
      >
        <Link
          className={lang === i18n.locales[1] ? styles.active : styles.langBtn}
          // href={redirectedPathName(languagesData.RU)}
          href={redirectedPathName(i18n.locales[1])}
        >
          {/* РУС */}
          {i18n.locales[1]}
        </Link>
      </li>
    </ul>
  );
};

export default LocaleSwitcher;
