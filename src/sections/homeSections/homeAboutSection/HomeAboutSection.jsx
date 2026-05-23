import Image from "next/image";
import OpenModalBtn from "@/components/Buttons/OpenModalBtn/OpenModalBtn";
import { aboutData } from "@/data/aboutData";
import { getLocalizedField } from "@/helpers/getLocalizedField";
import styles from "./HomeAboutSection.module.scss";

const IMG_ALT = {
  uk: "Russ Warner і Наталя Мариняк",
  ru: "Russ Warner и Наталья Мариняк",
  en: "Russ Warner and Nataliia Marynyak",
};

const HomeAboutSection = ({ lang, dictionary }) => {
  const altText = IMG_ALT[lang] ?? IMG_ALT.uk;

  return (
    <section>
      <div className={`container ${styles.container}`}>
        <h1 className={styles.title}>{dictionary.homeAboutSection.title}</h1>

        <h2 className={styles.subTitle}>
          {dictionary.homeAboutSection.subTitle}
        </h2>

        <div className={styles.content}>
          <div className={styles.listColumn}>
            <h3 className={styles.listIntro}>
              {dictionary.homeAboutSection.listIntro}
            </h3>
            <ul className={styles.aboutList}>
              {aboutData.map((el, i) => {
                return (
                  <li key={i}>
                    <svg>
                      <use href="/sprite.svg#icon-check-mark-in-circle"></use>
                    </svg>
                    <h3>{getLocalizedField(el, "text", lang)}</h3>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className={styles.figure}>
            <div className={styles.imgWrapp}>
              <Image
                src="/images/home-about.webp"
                width={943}
                height={638}
                alt={altText}
                sizes="(max-width: 1023px) 100vw, (max-width: 1440px) 50vw, 426px"
              />
            </div>
            <p className={styles.imgCaption}>
              {dictionary.homeAboutSection.imgCaption}
            </p>
          </div>
        </div>

        <OpenModalBtn
          customClass={styles.ctaBtn}
          title={dictionary.buttons.askSpecialist}
        />
      </div>
    </section>
  );
};

export default HomeAboutSection;
