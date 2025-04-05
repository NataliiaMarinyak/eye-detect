// "use client";
// import { useEffect, useState } from 'react';
// import { useTranslation } from 'react-i18next';
import Image from "next/image";
import OpenModalBtn from "@/components/Buttons/OpenModalBtn/OpenModalBtn";
import styles from "./HomeConditionsSection.module.scss";

const HomeConditionsSection = ({ dictionary }) => {
  // const { t } = useTranslation();
  // const [isLoading, setIsLoading] = useState(true);
  // useEffect(() => setIsLoading(false), []);

  return (
    <section>
      <div className={`container ${styles.container}`}>
        <h2 className={styles.title}>
          {dictionary.homeConditionsSection.title}
        </h2>
        <div className={styles.imgWrapper}>
          <Image
            className={styles.img}
            src="/images/conditions.webp"
            alt={dictionary.homeConditionsSection.title}
            sizes="(max-width: 1023px) 100vw, 960px"
            width={960}
            height={317}
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

export default HomeConditionsSection;
