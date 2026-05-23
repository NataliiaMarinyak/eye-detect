import Image from "next/image";
import OpenModalBtn from "@/components/Buttons/OpenModalBtn/OpenModalBtn";
import styles from "./HeroSection.module.scss";

const HeroSection = async ({ dictionary }) => {
  return (
    <section id="hero" className={styles.hero}>
      <div className={`container ${styles.container}`}>
        <div>
          <h1 className={styles.title}>{dictionary.heroSection.title}</h1>
          <p className={styles.subtitle}>{dictionary.heroSection.subtitle}</p>
          <ul className={styles.features}>
            {dictionary.heroSection.features.map((item, idx) => (
              <li key={idx} className={styles.featureItem}>
                <svg className={styles.checkIcon} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <OpenModalBtn
          customClass={styles.btn}
          title={dictionary.buttons.orderConsultation}
        />
      </div>
      <div className={styles.bgImgWrapp}>
        <Image
          src="/images/hero-bg.webp"
          alt={dictionary.heroSection.title}
          width={1440}
          height={900}
          sizes="100vw"
          priority={true}
        />
      </div>
    </section>
  );
};

export default HeroSection;
