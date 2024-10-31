"use client";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import Image from "next/image";
import OpenModalBtn from "@/components/Buttons/OpenModalBtn/OpenModalBtn";
import styles from "./ConsultationSection.module.scss";


const ConsultationSection = () => {
  const { t } = useTranslation();
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => setIsLoading(false), []);

  return (
    <section className={styles.section}>
      <div className={`container ${styles.container}`}>
        <div>
          <h1 className={styles.title}>{!isLoading && t("ConsultationSection.Title")}</h1>
          <h2 className={styles.text}>{!isLoading && t("ConsultationSection.SubTitle")}</h2>
        </div>
        <OpenModalBtn customBtn={styles.btn} />
      </div>
      <div className={styles.bgImgWrapp}>
        {!isLoading && <Image
          src="/images/about-us-bg.webp"
          alt={t("ConsultationSection.Title")}
          width={1440}
          height={900}
          sizes="100vw"
          priority={true}
        />}
      </div>
    </section>
  );
};


export default ConsultationSection;