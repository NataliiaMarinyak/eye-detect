"use client";
// import { useEffect, useState } from "react";
// import { useTranslation } from "react-i18next";
import Link from "next/link";
import OpenModalBtn from "@/components/Buttons/OpenModalBtn/OpenModalBtn";
import { europeanCitiesData } from "@/data/europeanCitiesData";
import { getCityEn, getCountryEn } from "@/data/cityEn";
// import { languagesData } from "@/data/languagesData";
import { i18n } from "@/dictionaries/i18n.config";
import { getLocalizedField } from "@/helpers/getLocalizedField";
import styles from "./EuropeanCitiesSection.module.scss";

const EuropeanCitiesSection = ({ lang, dictionary }) => {
  // Посилання без префікса для мови за замовчуванням: хук шляху тут повертає
  // внутрішній шлях /uk/..., через що посилання вели на редирект.
  const prefix = lang === i18n.defaultLocale ? "" : `/${lang}`;
  // console.log("pathname", pathname);
  // const { t, i18n } = useTranslation();
  // const [isLoading, setIsLoading] = useState(true);
  // useEffect(() => setIsLoading(false), []);

  return (
    <section className={styles.section}>
      <div className={`container ${styles.container}`}>
        <h2 className={styles.title}>
          {dictionary.europeanCitiesSection.title}
        </h2>
        <ul className={styles.locationsWrapper}>
          {europeanCitiesData.map((item) => (
            <li key={item.slug} className={styles.locationItem}>
              <Link
                href={`${prefix}/locations/${item.slug}`}
                className={styles.locationLink}
              >
                <p className={styles.country}>
                  {lang === "en" ? getCountryEn(item.slug) : getLocalizedField(item, "country", lang)}
                </p>
                <span className={styles.arrow} aria-hidden="true" />
                <p className={styles.city}>
                  {lang === "en" ? getCityEn(item.slug) : getLocalizedField(item, "city", lang)}
                </p>
              </Link>
            </li>
          ))}
        </ul>
        <OpenModalBtn title={dictionary.buttons.orderConsultation} />
      </div>
    </section>
  );
};

export default EuropeanCitiesSection;
