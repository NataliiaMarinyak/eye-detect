// "use client";
// import { useEffect, useState } from "react";
// import { useTranslation } from "react-i18next";
import Image from "next/image";
import OpenModalBtn from "@/components/Buttons/OpenModalBtn/OpenModalBtn";
import styles from "./HeroSection.module.scss";

const HeroSection = async ({ dictionary }) => {
  // const { t } = useTranslation();
  // const [isLoading, setIsLoading] = useState(true);
  // useEffect(() => setIsLoading(false), []);

  return (
    <section id="hero" className={styles.hero}>
      <div className={`container ${styles.container}`}>
        <div>
          <p className={styles.title}>{dictionary.heroSection.title}</p>
          <p className={styles.text}>{dictionary.heroSection.text}</p>
        </div>
        <OpenModalBtn
          customClass={styles.btn}
          title={dictionary.buttons.orderConsultation}
        />
      </div>
      <div className={styles.bgImgWrapp}>
        {/* {!isLoading && (
          <Image
            src="/images/hero-bg.webp"
            alt={t("HeroSection.Title")}
            width={1440}
            height={900}
            sizes="100vw"
            priority={true}
          />
        )} */}
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
