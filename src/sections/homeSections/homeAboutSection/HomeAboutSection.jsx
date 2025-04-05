// "use client";
// import { useEffect, useState } from "react";
// import { useTranslation } from "react-i18next";
import Image from "next/image";
import { aboutData } from "@/data/aboutData";
// import { languagesData } from "@/data/languagesData";
import { i18n } from "@/dictionaries/i18n.config";
import styles from "./HomeAboutSection.module.scss";

const HomeAboutSection = ({ lang, dictionary }) => {
  // const { t, i18n } = useTranslation();
  // const [isLoading, setIsLoading] = useState(true);
  // useEffect(() => setIsLoading(false), []);

  return (
    <section>
      <div className={`container ${styles.container}`}>
        <h1 className={styles.title}>{dictionary.homeAboutSection.title}</h1>

        <h2 className={styles.subTitle}>
          {dictionary.homeAboutSection.subTitle}
        </h2>

        <div className={styles.content}>
          <ul className={styles.aboutList}>
            {aboutData.map((el, i) => {
              return (
                <li key={i}>
                  <svg>
                    <use href="/sprite.svg#icon-check-mark-in-circle"></use>
                  </svg>
                  <h3>{lang === i18n.locales[0] ? el.text : el.textRus}</h3>
                </li>
              );
            })}
          </ul>
          <div className={styles.figure}>
            <div className={styles.imgWrapp}>
              <Image
                src="/images/home-about.webp"
                width={943}
                height={638}
                alt={
                  lang === i18n.locales[0]
                    ? "Russ Warner і Наталя Мариняк"
                    : "Russ Warner и Наталья Мариняк"
                }
                sizes="(max-width: 1023px) 100vw, (max-width: 1440px) 50vw, 426px"
              />
            </div>
            <p className={styles.imgCaption}>
              {dictionary.homeAboutSection.imgCaption}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeAboutSection;
