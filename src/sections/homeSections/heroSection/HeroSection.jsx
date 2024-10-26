"use client";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import Image from "next/image";
import OpenModalBtn from "@/components/Buttons/OpenModalBtn/OpenModalBtn";
import styles from "./HeroSection.module.scss";

const HeroSection = () => {
  const { t } = useTranslation();
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => setIsLoading(false), []);

  return (
    <section id="hero" className={styles.hero}>
      <div className={`container ${styles.container}`}>
        <div>
          {!isLoading && (
            <p className={styles.title}>{t("HeroSection.Title")}</p>
          )}
          {!isLoading && <p className={styles.text}>{t("HeroSection.Text")}</p>}
        </div>
        <OpenModalBtn customBtn={styles.btn} />
      </div>
      <div className={styles.bgImgWrapp}>
        <Image
          src="/images/hero-bg.webp"
          alt=" Передові рішення для виявлення обману швидко і точно"
          width={1440}
          height={900}
          sizes="100vw"
          loading="eager"
        />
      </div>
    </section>
  );
};

export default HeroSection;
