"use client";
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import Image from 'next/image';
import ButtonLink from '@/components/Buttons/ButtonLink/ButtonLink';
import styles from './HomeCountriesSection.module.scss';


const HomeCountriesSection = () => {
  const { t } = useTranslation();
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => setIsLoading(false), []);


  return <section>
    <div className={`container ${styles.container}`}>
      <div className={styles.titlesWrapper}>
        {!isLoading && <h2 className={styles.title}>{t('HomeCountriesSection.Title')}</h2>}
        {!isLoading && <h3 className={styles.subTitle}>{t('HomeCountriesSection.SubTitle')}</h3>}
      </div>
      <div className={styles.imgWrapper}>
        <Image
          className={styles.img}
          src='/images/countries.webp'
          alt="Країни Європи та EyeDetect"
          sizes="100vw"
          width={943}
          height={1564}
        />
        <Image
          className={styles.desktopImg}
          src='/images/countriesDesktop.webp'
          alt="Країни Європи та EyeDetect"
          sizes="1024px"
          width={1024}
          height={902}
        />
      </div>
      <ButtonLink href='/locations' />
    </div>
  </section>;
};


export default HomeCountriesSection;