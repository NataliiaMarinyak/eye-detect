"use client";
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import Image from "next/image";
import OpenModalBtn from "@/components/Buttons/OpenModalBtn/OpenModalBtn";
import styles from './HomeConditionsSection.module.scss';


const HomeConditionsSection = () => {
    const { t } = useTranslation();
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => setIsLoading(false), []);


  return <section>
    <div className={`container ${styles.container}`}>
      {!isLoading &&<h2 className={styles.title}>{t('HomeConditionsSection.Title')}</h2>}
      <div className={styles.imgWrapper}>
        <Image
          className={styles.img}
          src='/images/conditions.webp'
          alt="Умови тестування EyeDetect"
          sizes="(max-width: 1023px) 100vw, 960px"
          fill
        />
      </div>
      <OpenModalBtn />
    </div>
  </section>;
};

export default HomeConditionsSection;
