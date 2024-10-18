import Image from 'next/image';
import OpenModalBtn from '@/components/Buttons/OpenModalBtn/OpenModalBtn';
import ButtonLink from '@/components/Buttons/ButtonLink/ButtonLink';
import styles from './HomeCertificatesSection.module.scss';


const HomeCertificatesSection = ({ isOnHomePage }) => {
  return <section>
    <div className={`container ${styles.container}`}>
      <h2 className={styles.title}>Професійна освіта поліграфолога EyeDetect</h2>
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
        {isOnHomePage && <ButtonLink href='/about-us' title="Дізнатись більше" customBtn={styles.detailsBtn} />}
      </div>
    </div>
  </section>
};


export default HomeCertificatesSection;