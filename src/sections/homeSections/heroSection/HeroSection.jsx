import Image from "next/image";
import styles from "./HeroSection.module.scss";
import OpenModalBtn from "@/components/Buttons/OpenModalBtn/OpenModalBtn";

const HeroSection = () => {
  return (
    <section id="hero" className={styles.hero}>
      <div className={`container ${styles.container}`}>
        <div>
          <p className={styles.title}>
            Передові рішення для виявлення обману швидко і точно
          </p>
          <p className={styles.text}>
            Швидка та достовірна перевірка за допомогою технології EyeDetect
          </p>
        </div>
        <OpenModalBtn customBtn={styles.btn} />
      </div>
      <div className={styles.bgImgWrapp}>
        <Image
          src="/images/hero-bg.webp"
          alt=" Передові рішення для виявлення обману швидко і точно"
          fill
          sizes="100vw"
        />
      </div>
    </section>
  );
};

export default HeroSection;
