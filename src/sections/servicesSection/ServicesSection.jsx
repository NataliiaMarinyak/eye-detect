// "use client";
// import { useEffect, useState } from "react";
// import { useTranslation } from "react-i18next";
// import { useParams } from "next/navigation";
import Image from "next/image";
import OpenModalBtn from "@/components/Buttons/OpenModalBtn/OpenModalBtn";
import { getCityData } from "@/helpers/getCityData";
// import { languagesData } from "@/data/languagesData";
import { i18n } from "@/dictionaries/i18n.config";
import styles from "./ServicesSection.module.scss";

const ServicesSection = ({ lang, dictionary, slug }) => {
  // const { i18n } = useTranslation();
  // const [isLoading, setIsLoading] = useState(true);
  // useEffect(() => setIsLoading(false), []);

  // const { slug } = useParams();

  const data = getCityData(slug);

  return (
    <section>
      <div className={`container ${styles.container}`}>
        <h2 className={styles.subTitle}>
          {lang === i18n.locales[0] ? data?.subTitle : data?.subTitleRus}
        </h2>
        <ul className={styles.servicesList}>
          {data?.services.map((service, index) => (
            <li key={index} className={styles.serviceItem}>
              <div className={styles.areaWrapper}>
                <span className={styles.figure}>{index + 1}</span>
                <h3 className={styles.areaTitle}>
                  {lang === i18n.locales[0] ? service.area : service.areaRus}
                </h3>
              </div>
              <ul className={styles.directionList}>
                {service.directions.map((direction) => (
                  <li key={direction.title} className={styles.directionItem}>
                    <div className={styles.directionTitleWrapper}>
                      <svg className={styles.directionIcon}>
                        <use href={`/sprite.svg#icon-check-mark-in-circle`} />
                      </svg>
                      <p className={styles.directionDescription}>
                        <span className={styles.directionTitle}>
                          {lang === i18n.locales[0]
                            ? direction.title
                            : direction.titleRus}
                        </span>{" "}
                        {lang === i18n.locales[0]
                          ? direction.description
                          : direction.descriptionRus}
                      </p>
                    </div>
                    {direction.checks.length !== 0 && (
                      <ul className={styles.checksList}>
                        {lang === i18n.locales[0]
                          ? direction.checks.map((check, ind) => (
                              <li key={ind}>{check}</li>
                            ))
                          : direction.checksRus.map((checkRus, ind) => (
                              <li key={ind}>{checkRus}</li>
                            ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
              <div className={styles.imgWrapper}>
                <Image
                  className={styles.img}
                  src={service.image}
                  alt={service.imageAlt}
                  sizes="(max-width: 1023px) 100vw, 960px"
                  width={960}
                  height={494}
                  loading="lazy"
                />
              </div>
              <OpenModalBtn
                customClass={styles.openModalBtn}
                title={dictionary.buttons.orderConsultation}
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default ServicesSection;
