// "use client";
// import { useEffect, useState } from "react";
// import { useTranslation } from "react-i18next";
import Image from "next/image";
import OpenModalBtn from "@/components/Buttons/OpenModalBtn/OpenModalBtn";
// import { languagesData } from "@/data/languagesData";
import { i18n } from "@/dictionaries/i18n.config";
import styles from "./HomeClientsSection.module.scss";

const HomeClientsSection = ({ lang, dictionary }) => {
  // const { t, i18n } = useTranslation();
  // const [isLoading, setIsLoading] = useState(true);
  // useEffect(() => setIsLoading(false), []);

  return (
    <section>
      <div className={`container ${styles.container}`}>
        <h2 className={styles.title}>{dictionary.homeClientsSection.title}</h2>
        <div className={styles.imgWrapper}>
          <Image
            className={styles.img}
            src="/images/clients.webp"
            alt={
              lang === i18n.locales[0]
                ? "Клієнти EyeDetect"
                : "Клиенты EyeDetect"
            }
            sizes="(max-width: 1023px) 100vw, 960px"
            width={960}
            height={321}
          />
        </div>
        <OpenModalBtn
          customClass=""
          title={dictionary.buttons.orderConsultation}
        />
      </div>
    </section>
  );
};

export default HomeClientsSection;
