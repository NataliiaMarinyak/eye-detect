// "use client";
// import { useEffect, useState } from "react";
// import { useTranslation } from "react-i18next";
import Image from "next/image";
import OpenModalBtn from "@/components/Buttons/OpenModalBtn/OpenModalBtn";
import styles from "./ConsultationSection.module.scss";

const ConsultationSection = ({ dictionary }) => {
  // const { t } = useTranslation();
  // const [isLoading, setIsLoading] = useState(true);
  // useEffect(() => setIsLoading(false), []);

  return (
    <section className={styles.section}>
      <div className={`container ${styles.container}`}>
        <div>
          <h1 className={styles.title}>
            {dictionary.consultationSection.title}
          </h1>
          <h2 className={styles.text}>
            {dictionary.consultationSection.subTitle}
          </h2>
        </div>
        <OpenModalBtn
          customClass={styles.btn}
          title={dictionary.buttons.orderConsultation}
        />
      </div>
      <div className={styles.bgImgWrapp}>
        <Image
          src="/images/about-us-bg.webp"
          alt={dictionary.consultationSection.title}
          width={1440}
          height={900}
          sizes="100vw"
          // priority={true}
          loading="eager"
        />
      </div>
    </section>
  );
};

export default ConsultationSection;
