// "use client";
// import { useEffect, useState } from "react";
// import { useTranslation } from "react-i18next";
import Image from "next/image";
import { specialistData } from "@/data/specialistData";
// import { languagesData } from "@/data/languagesData";
import { i18n } from "@/dictionaries/i18n.config";
import styles from "./SpecialistSection.module.scss";

const SpecialistSection = ({ lang, dictionary }) => {
  // const { t, i18n } = useTranslation();
  // const [isLoading, setIsLoading] = useState(true);
  // useEffect(() => setIsLoading(false), []);
  // console.log("dictionary in specialistSection", dictionary);

  return (
    <section>
      <div className="container">
        <h2 className={styles.title}>{dictionary.specialistSection.title}</h2>
        <ul>
          {specialistData.map((el, i) => {
            return (
              <li key={i} className={styles.contentWrapp}>
                <div className={styles.textWrapp}>
                  <h3 className={styles.subtitle}>
                    {lang === i18n.locales[0] ? el.title : el.titleRus}
                  </h3>
                  <ul>
                    {el.details.map((det, i) => {
                      return (
                        <li key={i} className={styles.details}>
                          <h4 className={styles.detailsTitle}>
                            <svg>
                              <use href="/sprite.svg#icon-check-mark-in-circle"></use>
                            </svg>
                            {lang === i18n.locales[0]
                              ? det.subTitle
                              : det.subTitleRus}
                          </h4>
                          <ul className={styles.detailsList}>
                            {lang === i18n.locales[0]
                              ? det.list.map((item, i) => {
                                  return <li key={i}>{item}</li>;
                                })
                              : det.listRus.map((item, i) => {
                                  return <li key={i}>{item}</li>;
                                })}
                          </ul>
                        </li>
                      );
                    })}
                  </ul>
                </div>

                {el.imgCaption ? (
                  <figure
                    className={`${styles.imgWrapp} ${styles.imgWrappFigure}`}
                  >
                    <Image
                      src={el.img}
                      // alt={lang === i18n.locales[0] ? el.title : el.titleRus}
                      alt={
                        lang === i18n.locales[0]
                          ? "Russ Warner і Наталя Мариняк"
                          : "Russ Warner и Наталья Мариняк"
                      }
                      width={943}
                      height={638}
                      sizes="(max-width: 1023px) 100vw, (max-width: 1440px) 50vw, 375px"
                      loading="eager"
                    />
                    <figcaption className={styles.imgCaption}>
                      {lang === i18n.locales[0]
                        ? el.imgCaption.Ua
                        : el.imgCaption.Ru}
                    </figcaption>
                  </figure>
                ) : (
                  <div className={styles.imgWrapp}>
                    <Image
                      src={el.img}
                      alt={lang === i18n.locales[0] ? el.title : el.titleRus}
                      width={943}
                      height={638}
                      sizes="(max-width: 1023px) 100vw, (max-width: 1440px) 50vw, 375px"
                      loading="eager"
                    />
                  </div>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default SpecialistSection;
