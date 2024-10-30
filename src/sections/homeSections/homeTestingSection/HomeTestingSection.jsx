"use client";
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import Image from "next/image";
import { currentLanguages } from "@/data/languages";
import styles from './HomeTestingSection.module.scss';


const HomeTestingSection = () => {
  const { i18n } = useTranslation();
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => setIsLoading(false), []);


  return <section>
    <div className="container">
      <div className={styles.imgWrapper}>
        {!isLoading && i18n.language === currentLanguages.UA ? <Image
          className={styles.img}
          src='/images/testing_ukr.webp'
          alt="Конференція з тестування EyeDetect"
          sizes="(max-width: 1023px) 100vw, 960px"
          width={960}
          height={541}
        /> : <Image
          className={styles.img}
          src='/images/testing_rus.webp'
          alt="Конференция по тестированию EyeDetect"
          sizes="(max-width: 1023px) 100vw, 960px"
          width={960}
          height={541}
        />
        }
      </div>
    </div>
  </section>;
};


export default HomeTestingSection;