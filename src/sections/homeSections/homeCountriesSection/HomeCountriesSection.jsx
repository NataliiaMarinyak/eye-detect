import Image from 'next/image';
import ButtonLink from '@/components/Buttons/ButtonLink/ButtonLink';
import styles from './HomeCountriesSection.module.scss';


const HomeCountriesSection = () => {
  return <section>
    <div className={`container ${styles.container}`}>
      <div className={styles.titlesWrapper}>
        <h2 className={styles.title}>Технологія EyeDetect у Європі</h2>
        <h3 className={styles.subTitle}>виїзд у центри Європейських країн</h3>
      </div>
      <Image
        width={1024}
        height={902}
        src='/images/countries.webp'
        alt="Країни Європи та EyeDetect" />
      {/* href='/contacts' must be changed */}
      <ButtonLink href='/locations' title="Дізнатись більше" />
    </div>
  </section>;
};


export default HomeCountriesSection;