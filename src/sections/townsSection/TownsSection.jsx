// "use client";
// import { useEffect, useState } from 'react';
// import { useTranslation } from 'react-i18next';
// import { useParams } from "next/navigation";
import { getCityData } from "@/helpers/getCityData";
// import { languagesData } from "@/data/languagesData";
import { getLocalizedField } from "@/helpers/getLocalizedField";
import styles from "./TownsSection.module.scss";
import { i18n } from "@/dictionaries/i18n.config";

const TownsSection = ({ lang, slug }) => {
  // const { i18n } = useTranslation();
  // const [isLoading, setIsLoading] = useState(true);
  // useEffect(() => setIsLoading(false), []);

  // const { slug } = useParams();

  const data = getCityData(slug);
  // Для міст-держав (Ватикан, Монако) списку містечок немає — секцію не показуємо.
  if (!data?.townsInfo?.towns) return null;

  return (
    <section>
      <div className={`container ${styles.container}`}>
        <h2 className={styles.title}>
          {getLocalizedField(data?.townsInfo, "title", lang)}
        </h2>
        <p className={styles.preface}>
          {getLocalizedField(data?.townsInfo, "preface", lang)}
        </p>
        <p className={styles.towns}>
          {getLocalizedField(data?.townsInfo, "towns", lang)}
        </p>
        <p className={styles.afterword}>
          {getLocalizedField(data?.townsInfo, "afterword", lang)}
        </p>
      </div>
    </section>
  );
};

export default TownsSection;
