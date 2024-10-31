"use client";
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import Image from 'next/image';
import ButtonLink from '@/components/Buttons/ButtonLink/ButtonLink';
import { currentLanguages } from '@/data/languages';
import styles from './HomeCountriesSection.module.scss';


const HomeCountriesSection = () => {
  const { t, i18n } = useTranslation();
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => setIsLoading(false), []);


  return <section>
    <div className={`container ${styles.container}`}>
      <div className={styles.titlesWrapper}>
        <h2 className={styles.title}>{!isLoading && t('HomeCountriesSection.Title')}</h2>
        <h3 className={styles.subTitle}>{!isLoading && t('HomeCountriesSection.SubTitle')}</h3>
      </div>
      <div className={styles.imgWrapper}>
        {!isLoading && <Image
          className={styles.img}
          src='/images/countries.webp'
          alt={i18n.language === currentLanguages.UA
            ? "Країни Європи та EyeDetect" : "Страны Европы и EyeDetect"}
          sizes="100vw"
          width={943}
          height={1564}
        />}
        {!isLoading && <Image
          className={styles.desktopImg}
          src='/images/countriesDesktop.webp'
          alt={i18n.language === currentLanguages.UA
            ? "Країни Європи та EyeDetect" : "Страны Европы и EyeDetect"}
          sizes="1024px"
          width={1024}
          height={902}
        />}
      </div>
      <ButtonLink href='/locations' />
    </div>
  </section>;
};


export default HomeCountriesSection;