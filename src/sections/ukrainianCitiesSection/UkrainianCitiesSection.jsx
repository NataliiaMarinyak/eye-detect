"use client";
// import { useEffect, useState } from "react";
// import { useTranslation } from "react-i18next";
import Link from "next/link";
import OpenModalBtn from "@/components/Buttons/OpenModalBtn/OpenModalBtn";
import { getUkrainianCities } from "@/helpers/getCityData";
import { getCityEn } from "@/data/cityEn";
const ukrainianCitiesData = getUkrainianCities();
// import { languagesData } from "@/data/languagesData";
import { getLocalizedField } from "@/helpers/getLocalizedField";
import styles from "./UkrainianCitiesSection.module.scss";
import { i18n } from "@/dictionaries/i18n.config";

const UkrainianCitiesSection = ({ lang, dictionary }) => {
  // Посилання без префікса для мови за замовчуванням: хук шляху тут повертає
  // внутрішній шлях /uk/..., через що посилання вели на редирект.
  const prefix = lang === i18n.defaultLocale ? "" : `/${lang}`;
  // const { t, i18n } = useTranslation();
  // const [isLoading, setIsLoading] = useState(true);
  // useEffect(() => setIsLoading(false), []);

  return (
    <section className={styles.section}>
      <div className={`container ${styles.container}`}>
        <h2 className={styles.title}>
          {dictionary.ukrainianCitiesSection.title}
        </h2>
        <ul className={styles.citiesWrapper}>
          {ukrainianCitiesData.map((item) => (
            <li key={item.slug} className={styles.cityItem}>
              <Link
                href={item.slug === "lviv" ? `${prefix}/` : `${prefix}/locations/${item.slug}`}
                className={styles.cityLink}
              >
                {lang === "en" ? getCityEn(item.slug) : getLocalizedField(item, "city", lang)}
              </Link>
            </li>
          ))}
        </ul>
        <OpenModalBtn
          customClass=""
          title={dictionary.buttons.orderConsultation}
        />
      </div>
    </section>
  );
};

export default UkrainianCitiesSection;
