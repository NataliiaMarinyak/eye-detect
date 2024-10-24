"use client";
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next'; import Image from "next/image";
import OpenModalBtn from "@/components/Buttons/OpenModalBtn/OpenModalBtn";
import styles from "./ConsultationSection.module.scss";


const ConsultationSection = () => {
  const { t } = useTranslation();
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => setIsLoading(false), []);


  return (
    <section className={styles.section}>
      <div className={`container ${styles.container}`}>
        <div>
          {!isLoading && <h1 className={styles.title}>
            {t('ConsultationSection.Title')}
          </h1>}
          {!isLoading && <h2 className={styles.text}>
            {t('ConsultationSection.SubTitle')}
          </h2>}
        </div>
        <OpenModalBtn customBtn={styles.btn} />
      </div>
      <div className={styles.bgImgWrapp}>
        <Image
          src="/images/about-as-bg.webp"
          alt=" Передові рішення для виявлення обману швидко і точно"
          fill
          sizes="100vw"
        />
      </div>
    </section>
  );
};


export default ConsultationSection;