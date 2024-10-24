import Image from "next/image";
import styles from './HomeTestingSection.module.scss';

const HomeTestingSection = () => {
  return <section>
    <div className="container">
      <div className={styles.imgWrapper}>
        <Image
          className={styles.img}
          // src={ukrLang ? '/images/testing_ukr.webp' : '/images/testing_rus.webp' }
          src='/images/testing_ukr.webp'
          // alt={ukrLang ? "Конференція з тестування EyeDetect" : "Конференция по тестированию EyeDetect"} />
          alt="Конференція з тестування EyeDetect"
          sizes="(max-width: 1023px) 100vw, 960px"
          fill
        />
      </div>
    </div>
  </section>;
};

export default HomeTestingSection;
