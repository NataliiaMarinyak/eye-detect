import Image from 'next/image';
import ButtonLink from '@/components/Buttons/ButtonLink/ButtonLink';
import styles from './HomeCertificatesSection.module.scss';


const HomeCertificatesSection = ({ isOnHomePage }) => {
  return <section>
    <div className={`container ${styles.container}`}>
      <h2 className={styles.title}>Освіта тестувальника EyeDetect</h2>
      <div className={styles.certificatesWrapper}>
        <Image
          width={468}
          height={352}
          src='/images/certificate_ukr.webp'
          alt="Тестувальник EyeDetect" />
        <Image
          width={468}
          height={352}
          src='/images/certificate_eng.webp'
          alt="Тестировщик EyeDetect" />
      </div>
      <div className={styles.btnWrapper}>
        {/* href='/contacts' must be changed */}
        <ButtonLink href='/contacts' title="Замовити консультацію" />
        {isOnHomePage && <ButtonLink href='/about-us' title="Дізнатись більше" customBtn={styles.detailsBtn} />}
      </div>
    </div>
  </section>
};


export default HomeCertificatesSection;