import Image from "next/image";
import styles from './HomeTestingSection.module.scss';

const HomeTestingSection = () => {
  return <section>
    <div className="container">
      <Image
        width={960}
        height={540}
        // src={ukrLang ? '/images/testing_ukr.webp' : '/images/testing_rus.webp' }
        src='/images/testing_ukr.webp'
        // alt={ukrLang ? "Конференція з тестування EyeDetect" : "Конференция по тестированию EyeDetect"} />
        alt="Конференція з тестування EyeDetect" />
    </div>
  </section>;
};

export default HomeTestingSection;
