import Link from "next/link";
import styles from "./CityReviewedBy.module.scss";

// Хто перевірив відповіді на сторінці міста і коли оновлено (довіра для Google і ШІ-пошуку).
const TEXT = {
  uk: { before: "Відповіді перевірила", name: "Наталя Мариняк", role: "сертифікований тестувальник і адміністратор системи EyeDetect (Converus)", updated: "Оновлено" },
  ru: { before: "Ответы проверила", name: "Наталия Мариняк", role: "сертифицированный тестировщик и администратор системы EyeDetect (Converus)", updated: "Обновлено" },
  en: { before: "Answers reviewed by", name: "Nataliia Marynyak", role: "Certified EyeDetect Test Proctor and System Administrator (Converus)", updated: "Updated" },
};

export const getReviewer = (lang) => TEXT[lang] || TEXT.uk;

const formatDate = (iso) => iso.split("-").reverse().join(".");

const CityReviewedBy = ({ lang, updated }) => {
  const t = getReviewer(lang);
  const prefix = lang === "uk" ? "" : "/" + lang;
  return (
    <div className="container">
      <p className={styles.line}>
        {t.before} <Link href={`${prefix}/about-us`} className={styles.link}>{t.name}</Link>, {t.role}.
        {updated && (
          <>
            {" "}
            {t.updated} <time dateTime={updated}>{formatDate(updated)}</time>.
          </>
        )}
      </p>
    </div>
  );
};

export default CityReviewedBy;
