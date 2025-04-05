// "use client";
// import { useEffect, useState } from 'react';
// import { useTranslation } from 'react-i18next';
import Image from "next/image";
// import ButtonLink from "@/components/Buttons/ButtonLink/ButtonLink";
import CustomLink from "@/components/CustomLink/CustomLink";
// import { languagesData } from "@/data/languagesData";
import { i18n } from "@/dictionaries/i18n.config";
import styles from "./HomeCountriesSection.module.scss";

const HomeCountriesSection = ({ lang, dictionary }) => {
  // const { t, i18n } = useTranslation();
  // const [isLoading, setIsLoading] = useState(true);
  // useEffect(() => setIsLoading(false), []);

  return (
    <section>
      <div className={`container ${styles.container}`}>
        <div className={styles.titlesWrapper}>
          <h2 className={styles.title}>
            {dictionary.homeCountriesSection.title}
          </h2>
          <h3 className={styles.subTitle}>
            {dictionary.homeCountriesSection.subTitle}
          </h3>
        </div>
        <div className={styles.imgWrapper}>
          <Image
            className={styles.img}
            src="/images/countries.webp"
            alt={
              lang === i18n.locales[0]
                ? "Країни Європи та EyeDetect"
                : "Страны Европы и EyeDetect"
            }
            sizes="100vw"
            width={943}
            height={1564}
          />
          <Image
            className={styles.desktopImg}
            src="/images/countriesDesktop.webp"
            alt={
              lang === i18n.locales[0]
                ? "Країни Європи та EyeDetect"
                : "Страны Европы и EyeDetect"
            }
            sizes="1024px"
            width={1024}
            height={902}
          />
        </div>
        {/* <ButtonLink href="/locations" /> */}
        <CustomLink
          customClass=""
          href="/locations"
          lang={lang}
          text={dictionary.buttons.moreDetails}
        />
      </div>
    </section>
  );
};

export default HomeCountriesSection;
