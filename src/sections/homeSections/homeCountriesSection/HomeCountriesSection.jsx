import Image from "next/image";
import CustomLink from "@/components/CustomLink/CustomLink";
import styles from "./HomeCountriesSection.module.scss";

const COUNTRIES_ALT = {
  uk: "Країни Європи та EyeDetect",
  ru: "Страны Европы и EyeDetect",
  en: "Countries of Europe and EyeDetect",
};

const HomeCountriesSection = ({ lang, dictionary }) => {
  const altText = COUNTRIES_ALT[lang] ?? COUNTRIES_ALT.uk;

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
            alt={altText}
            sizes="100vw"
            width={943}
            height={1564}
          />
          <Image
            className={styles.desktopImg}
            src="/images/countriesDesktop.webp"
            alt={altText}
            sizes="1024px"
            width={1024}
            height={902}
          />
        </div>
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
