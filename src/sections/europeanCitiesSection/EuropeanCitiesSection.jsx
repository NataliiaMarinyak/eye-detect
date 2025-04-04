"use client";
// import { useEffect, useState } from "react";
// import { useTranslation } from "react-i18next";
import { usePathname } from "next/navigation";
import Link from "next/link";
import OpenModalBtn from "@/components/Buttons/OpenModalBtn/OpenModalBtn";
import { europeanCitiesData } from "@/data/europeanCitiesData";
// import { languagesData } from "@/data/languagesData";
import { i18n } from "@/dictionaries/i18n.config";
import styles from "./EuropeanCitiesSection.module.scss";

const EuropeanCitiesSection = ({ lang, dictionary }) => {
  const pathname = usePathname();
  console.log("pathname", pathname);
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
                href={`${pathname}/${item.slug}`}
                className={styles.locationLink}
              >
                <p className={styles.country}>
                  {lang === i18n.locales[0] ? item.country : item.countryRus}
                </p>
                <p className={styles.city}>
                  {lang === i18n.locales[0] ? item.city : item.cityRus}
                </p>
              </Link>
            </li>
          ))}
        </ul>
        <OpenModalBtn
          customClass={styles.modalBtn}
          title={dictionary.buttons.orderConsultation}
        />
      </div>
    </section>
  );
};

export default EuropeanCitiesSection;
