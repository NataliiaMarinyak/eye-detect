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
      <h2 className={styles.title}>{!isLoading && t('HomeConditionsSection.Title')}</h2>
      <div className={styles.imgWrapper}>
        {!isLoading && <Image
          className={styles.img}
          src='/images/conditions.webp'
          alt={t('HomeConditionsSection.Title')}
          sizes="(max-width: 1023px) 100vw, 960px"
          width={960}
          height={317}
        />}
      </div>
      <OpenModalBtn />
    </div>
  </section>;
};


export default HomeConditionsSection;