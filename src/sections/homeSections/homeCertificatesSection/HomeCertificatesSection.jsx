// "use client";
// import { useEffect, useState } from 'react';
// import { useTranslation } from 'react-i18next';
import Image from "next/image";
import OpenModalBtn from "@/components/Buttons/OpenModalBtn/OpenModalBtn";
// import ButtonLink from "@/components/Buttons/ButtonLink/ButtonLink";
import CustomLink from "@/components/CustomLink/CustomLink";
// import { languagesData } from "@/data/languagesData";
import { i18n } from "@/dictionaries/i18n.config";
// import { getDictionary } from "@/helpers/getDictionary";
import styles from "./HomeCertificatesSection.module.scss";

const HomeCertificatesSection = ({ isOnHomePage, lang, dictionary }) => {
  // const { t, i18n } = useTranslation();
  // const [isLoading, setIsLoading] = useState(true);
  // useEffect(() => setIsLoading(false), []);

  return (
    <section>
      <div className={`container ${styles.container}`}>
        <h2 className={styles.title}>
          {/* {!isLoading && t("HomeCertificatesSection.Title")} */}
          {dictionary.homeCertificatesSection.title}
        </h2>
        <div className={styles.certificatesWrapper}>
          <div className={styles.certWrap}>
            {/* {!isLoading && */}
            <Image
              className={styles.certificate}
              src="/images/certificate_ukr.webp"
              alt={
                lang === i18n.locales[0]
                  ? "Тестувальник EyeDetect"
                  : "Тестировщик EyeDetect"
              }
              sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 468px"
              width={727}
              height={545}
            />
            {/* } */}
          </div>
          <div className={styles.certWrap}>
            <Image
              className={styles.certificate}
              src="/images/certificate_eng.webp"
              alt="EyeDetect Test Proctor"
              sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 468px"
              width={727}
              height={545}
            />
          </div>
        </div>
        <div className={styles.btnWrapper}>
          <OpenModalBtn
            customClass=""
            title={dictionary.buttons.orderConsultation}
          />
          {/* заменить на CustomLink */}
          {/* {isOnHomePage && (
            <ButtonLink
              href="/about-us"
              customClass={styles.detailsBtn}
            ></ButtonLink>
          )} */}

          {isOnHomePage && (
            <CustomLink
              customClass={styles.detailsBtn}
              href="/about-us"
              lang={lang}
              text={dictionary.buttons.moreDetails}
            />
          )}
        </div>
      </div>
    </section>
  );
};

export default HomeCertificatesSection;
