"use client";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import Image from "next/image";
import { specialistData } from "@/data/specialistData";
import { currentLanguages } from "@/data/languages";
import styles from "./SpecialistSection.module.scss";


const SpecialistSection = () => {
  const { t, i18n } = useTranslation();
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => setIsLoading(false), []);


  return (
    <section>
      <div className="container">
        {!isLoading && (
          <h2 className={styles.title}>{t("SpecialistSection.Title")}</h2>
        )}

        <ul>
          {specialistData.map((el, i) => {
            return (
              <li key={i} className={styles.contentWrapp}>
                <div className={styles.textWrapp}>
                  {!isLoading && (
                    <h3 className={styles.subtitle}>
                      {i18n.language === currentLanguages.UA
                        ? el.title
                        : el.titleRus}
                    </h3>
                  )}
                  <ul>
                    {el.details.map((det, i) => {
                      return (
                        <li key={i} className={styles.details}>
                          {!isLoading && (
                            <h4 className={styles.detailsTitle}>
                              <svg>
                                <use href="/sprite.svg#icon-check-mark-in-circle"></use>
                              </svg>
                              {i18n.language === currentLanguages.UA
                                ? det.subTitle
                                : det.subTitleRus}
                            </h4>
                          )}
                          {!isLoading && (
                            <ul className={styles.detailsList}>
                              {i18n.language === currentLanguages.UA
                                ? det.list.map((item, i) => {
                                  return <li key={i}>{item}</li>;
                                })
                                : det.listRus.map((item, i) => {
                                  return <li key={i}>{item}</li>;
                                })}
                            </ul>
                          )}
                        </li>
                      );
                    })}
                  </ul>
                </div>
                <div className={styles.imgWrapp}>
                  {!isLoading && <Image
                    src={el.img}
                    alt={i18n.language === currentLanguages.UA
                      ? el.title
                      : el.titleRus}
                    width={943}
                    height={638}
                    sizes="(max-width: 1023px) 100vw, (max-width: 1440px) 50vw, 375px"
                    loading="eager"
                  />}
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default SpecialistSection;
