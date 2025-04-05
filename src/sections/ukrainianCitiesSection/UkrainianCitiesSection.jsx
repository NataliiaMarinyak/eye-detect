"use client";
// import { useEffect, useState } from "react";
// import { useTranslation } from "react-i18next";
import { usePathname } from "next/navigation";
import Link from "next/link";
import OpenModalBtn from "@/components/Buttons/OpenModalBtn/OpenModalBtn";
import { ukrainianCitiesData } from "@/data/ukrainianCitiesData";
// import { languagesData } from "@/data/languagesData";
import styles from "./UkrainianCitiesSection.module.scss";
import { i18n } from "@/dictionaries/i18n.config";

const UkrainianCitiesSection = ({ lang, dictionary }) => {
  const pathname = usePathname();
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
                href={`${pathname}/${item.slug}`}
                className={styles.cityLink}
              >
                {lang === i18n.locales[0] ? item.city : item.cityRus}
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
