// "use client";
// import { useEffect, useState } from 'react';
// import { useTranslation } from 'react-i18next';
// import { useParams } from "next/navigation";
import { getCityData } from "@/helpers/getCityData";
// import { languagesData } from "@/data/languagesData";
import styles from "./TownsSection.module.scss";
import { i18n } from "@/dictionaries/i18n.config";

const TownsSection = ({ lang, slug }) => {
  // const { i18n } = useTranslation();
  // const [isLoading, setIsLoading] = useState(true);
  // useEffect(() => setIsLoading(false), []);

  // const { slug } = useParams();

  const data = getCityData(slug);

  return (
    <section>
      <div className={`container ${styles.container}`}>
        <h2 className={styles.title}>
          {lang === i18n.locales[0]
            ? data?.townsInfo.title
            : data?.townsInfo.titleRus}
        </h2>
        <p className={styles.preface}>
          {lang === i18n.locales[0]
            ? data?.townsInfo.preface
            : data?.townsInfo.prefaceRus}
        </p>
        <p className={styles.towns}>
          {lang === i18n.locales[0]
            ? data?.townsInfo.towns
            : data?.townsInfo.townsRus}
        </p>
        <p className={styles.afterword}>
          {lang === i18n.locales[0]
            ? data?.townsInfo.afterword
            : data?.townsInfo.afterwordRus}
        </p>
      </div>
    </section>
  );
};

export default TownsSection;
