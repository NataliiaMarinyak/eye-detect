"use client";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import Image from "next/image";
import OpenModalBtn from "@/components/Buttons/OpenModalBtn/OpenModalBtn";
import { currentLanguages } from "@/data/languages";
import styles from "./HomeClientsSection.module.scss";


const HomeClientsSection = () => {
  const { t, i18n } = useTranslation();
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => setIsLoading(false), []);


  return (
    <section>
      <div className={`container ${styles.container}`}>
        {!isLoading && (
          <h2 className={styles.title}>{t("HomeClientsSection.Title")}</h2>
        )}
        <div className={styles.imgWrapper}>
          {!isLoading && <Image
            className={styles.img}
            src="/images/clients.webp"
            alt={i18n.language === currentLanguages.UA
              ? "Клієнти EyeDetect" : "Клиенты EyeDetect"}
            sizes="(max-width: 1023px) 100vw, 960px"
            width={960}
            height={321}
          />}
        </div>
        <OpenModalBtn />
      </div>
    </section>
  );
};


export default HomeClientsSection;