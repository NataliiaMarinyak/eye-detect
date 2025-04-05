import Link from "next/link";
import { i18n } from "@/dictionaries/i18n.config";
import styles from "./CustomLink.module.scss";

export default function CustomLink({ customClass, id, href, lang, text }) {
  const isDefaultLang = lang === i18n.defaultLocale;
  const path = isDefaultLang ? href : `/${lang}${href}`;

  return (
    <Link className={styles.btn + " " + customClass} id={id} href={path}>
      {text}
    </Link>
  );
}
