"use client";
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import Image from 'next/image';
import OpenModalBtn from '@/components/Buttons/OpenModalBtn/OpenModalBtn';
import ButtonLink from '@/components/Buttons/ButtonLink/ButtonLink';
import styles from './HomeCertificatesSection.module.scss';


const HomeCertificatesSection = ({ isOnHomePage }) => {
  const { t } = useTranslation();
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => setIsLoading(false), []);


  return <section>
    <div className={`container ${styles.container}`}>
      {!isLoading && <h2 className={styles.title}>{t('HomeCertificatesSection.Title')}</h2>}
      <div className={styles.certificatesWrapper}>
        <div className={styles.certWrap}>
          <Image
            className={styles.certificate}
            src='/images/certificate_ukr.webp'
            alt="Тестувальник EyeDetect"
            sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 468px"
            fill
          />
        </div>
        <div className={styles.certWrap}>
          <Image
            className={styles.certificate}
            src='/images/certificate_eng.webp'
            alt="Тестировщик EyeDetect"
            sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 468px"
            fill
          />
        </div>
      </div>
      <div className={styles.btnWrapper}>
        <OpenModalBtn />
        {isOnHomePage && <ButtonLink href='/about-us' customBtn={styles.detailsBtn}></ButtonLink>}
      </div>
    </div>
  </section>
};


export default HomeCertificatesSection;