"use client";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import Image from "next/image";
import OpenModalBtn from "@/components/Buttons/OpenModalBtn/OpenModalBtn";
import { confidentialityGuaranteeData } from "@/data/confidentialityGuaranteeData";
import { languagesData } from "@/data/languagesData";
import styles from "./GuaranteeSection.module.scss";


const GuaranteeSection = () => {
  const { t, i18n } = useTranslation();
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => setIsLoading(false), []);


  return (
    <section>
      <div className={`container ${styles.container}`}>
        <h2 className={styles.title}>{!isLoading && t("GuaranteeSection.Title")}</h2>

        <ul className={styles.list}>
          {confidentialityGuaranteeData.map((el, i) => {
            return (
              <li key={i} className={styles.item}>
                <svg className={styles.icon}>
                  <use href="/sprite.svg#icon-cross-in-circle"></use>
                </svg>
                <p className={styles.text}>
                  {!isLoading && (i18n.language === languagesData.UA
                    ? el.text
                    : el.textRus)}
                </p>
              </li>
            );
          })}
        </ul>
        <div className={styles.imgWrapp}>
          {!isLoading && <Image
            src="/images/specialist3.webp"
            alt={i18n.language === languagesData.UA
              ? "Гарантія конфіденційності тестування EyeDetect" : "Гарантия конфиденциальности тестирования EyeDetect"}
            width={960}
            height={560}
            sizes="(max-width: 1023px) 100vw, 960px"
          />}
        </div>
        <OpenModalBtn customBtn={styles.btn} />
      </div>
    </section>
  );
};


export default GuaranteeSection;