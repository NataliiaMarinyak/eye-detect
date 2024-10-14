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
      <div className={styles.imgWrapper}>
        {/* возможно, попробовать оставить один компонент Image и, в зависимости от результата useResize (до laptop или после), менять src */}
        <Image
          className={styles.img}
          src='/images/countries.webp'
          alt="Країни Європи та EyeDetect"
          sizes="100vw"
          fill
        />
        <Image
          className={styles.desktopImg}
          src='/images/countriesDesktop.webp'
          alt="Країни Європи та EyeDetect"
          sizes="100vw"
          fill
        />
      </div>
      {/* href='/contacts' must be changed */}
      <ButtonLink href='/locations' title="Дізнатись більше" />
    </div>
  </section>;
};


export default HomeCountriesSection;