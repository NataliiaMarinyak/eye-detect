// "use client";
// import { useEffect, useState } from "react";
// import { useTranslation } from "react-i18next";
import Image from "next/image";
import { specialistData } from "@/data/specialistData";
// import { languagesData } from "@/data/languagesData";
import { i18n } from "@/dictionaries/i18n.config";
import { getLocalizedField } from "@/helpers/getLocalizedField";
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
                    {getLocalizedField(el, "title", lang)}
                  </h3>
                  <ul>
                    {el.details.map((det, i) => {
                      return (
                        <li key={i} className={styles.details}>
                          <h4 className={styles.detailsTitle}>
                            <svg>
                              <use href="/sprite.svg#icon-check-solid"></use>
                            </svg>
                            {getLocalizedField(det, "subTitle", lang)}
                          </h4>
                          <ul className={styles.detailsList}>
                            {(getLocalizedField(det, "list", lang) || []).map((item, i) => (
                              <li key={i}>{item}</li>
                            ))}
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
                      // alt={getLocalizedField(el, "title", lang)}
                      alt={
                        { uk: "Russ Warner і Наталя Мариняк", ru: "Russ Warner и Наталья Мариняк", en: "Russ Warner and Nataliia Marynyak" }[lang]
                      }
                      width={943}
                      height={638}
                      sizes="(max-width: 1023px) 100vw, (max-width: 1440px) 50vw, 375px"
                      loading="eager"
                    />
                    <figcaption className={styles.imgCaption}>
                      {{ uk: el.imgCaption.Ua, ru: el.imgCaption.Ru, en: el.imgCaption.En }[lang] || el.imgCaption.Ua}
                    </figcaption>
                  </figure>
                ) : (
                  <div className={styles.imgWrapp}>
                    <Image
                      src={el.img}
                      alt={getLocalizedField(el, "title", lang)}
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
