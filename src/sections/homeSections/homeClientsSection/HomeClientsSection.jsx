"use client";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import Image from "next/image";
import OpenModalBtn from "@/components/Buttons/OpenModalBtn/OpenModalBtn";
import styles from "./HomeClientsSection.module.scss";

const HomeClientsSection = () => {
  const { t } = useTranslation();
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => setIsLoading(false), []);

  return (
    <section>
      <div className={`container ${styles.container}`}>
        {!isLoading && (
          <h2 className={styles.title}>{t("HomeClientsSection.Title")}</h2>
        )}
        <div className={styles.imgWrapper}>
          <Image
            className={styles.img}
            src="/images/clients.webp"
            alt="Клієнти EyeDetect"
            sizes="(max-width: 1023px) 100vw, 960px"
            width={960}
            height={321}
          />
        </div>
        <OpenModalBtn />
      </div>
    </section>
  );
};

export default HomeClientsSection;
