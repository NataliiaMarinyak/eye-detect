"use client";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import Image from "next/image";
import { aboutData } from "@/data/aboutData";
import { currentLanguages } from "@/data/languages";
import styles from "./HomeAboutSection.module.scss";

const HomeAboutSection = () => {
  const { t, i18n } = useTranslation();
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => setIsLoading(false), []);

  return (
    <section>
      <div className={`container ${styles.container}`}>
        {!isLoading && (
          <h1 className={styles.title}>{t("HomeAboutSection.Title")}</h1>
        )}
        {!isLoading && (
          <h2 className={styles.subTitle}>{t("HomeAboutSection.SubTitle")}</h2>
        )}

        <div className={styles.content}>
          <ul className={styles.aboutList}>
            {aboutData.map((el, i) => {
              return (
                <li key={i}>
                  <svg>
                    <use href="/sprite.svg#icon-check-mark-in-circle"></use>
                  </svg>
                  {!isLoading && (
                    <h3>
                      {i18n.language === currentLanguages.UA
                        ? el.text
                        : el.textRus}
                    </h3>
                  )}
                </li>
              );
            })}
          </ul>
          <div className={styles.imgWrapp}>
            <Image
              src="/images/aboutImg.webp"
              width={943}
              height={638}
              alt="Наталія Мариняк"
              sizes="(max-width: 1023px) 100vw, (max-width: 1440px) 50vw, 426px"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeAboutSection;
