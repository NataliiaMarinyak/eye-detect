import Image from "next/image";
import styles from "./HomeTestingSection.module.scss";

// We don't have an English version of this image, so English uses the Ukrainian one as a fallback.
const TESTING_IMG = {
  uk: {
    src: "/images/testing_ukr.webp",
    alt: "Конференція з тестування EyeDetect",
  },
  ru: {
    src: "/images/testing_rus.webp",
    alt: "Конференция по тестированию EyeDetect",
  },
  en: {
    src: "/images/testing_ukr.webp",
    alt: "EyeDetect testing conference",
  },
};

const HomeTestingSection = ({ lang }) => {
  const image = TESTING_IMG[lang] ?? TESTING_IMG.uk;

  return (
    <section>
      <div className="container">
        <div className={styles.imgWrapper}>
          <Image
            className={styles.img}
            src={image.src}
            alt={image.alt}
            sizes="(max-width: 1023px) 100vw, 960px"
            width={960}
            height={541}
          />
        </div>
      </div>
    </section>
  );
};

export default HomeTestingSection;
