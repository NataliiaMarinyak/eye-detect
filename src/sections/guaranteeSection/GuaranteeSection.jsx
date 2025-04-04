// "use client";
// import { useEffect, useState } from "react";
// import { useTranslation } from "react-i18next";
import Image from "next/image";
import OpenModalBtn from "@/components/Buttons/OpenModalBtn/OpenModalBtn";
import { confidentialityGuaranteeData } from "@/data/confidentialityGuaranteeData";
// import { languagesData } from "@/data/languagesData";
import { i18n } from "@/dictionaries/i18n.config";
import styles from "./GuaranteeSection.module.scss";

const GuaranteeSection = ({ lang, dictionary }) => {
  // const { t, i18n } = useTranslation();
  // const [isLoading, setIsLoading] = useState(true);
  // useEffect(() => setIsLoading(false), []);

  return (
    <section>
      <div className={`container ${styles.container}`}>
        <h2 className={styles.title}>{dictionary.guaranteeSection.title}</h2>

        <ul className={styles.list}>
          {confidentialityGuaranteeData.map((el, i) => {
            return (
              <li key={i} className={styles.item}>
                <svg className={styles.icon}>
                  <use href="/sprite.svg#icon-cross-in-circle"></use>
                </svg>
                <p className={styles.text}>
                  {lang === i18n.locales[0] ? el.text : el.textRus}
                </p>
              </li>
            );
          })}
        </ul>
        <div className={styles.imgWrapp}>
          <Image
            src="/images/specialist3.webp"
            alt={
              lang === i18n.locales[0]
                ? "Гарантія конфіденційності тестування EyeDetect"
                : "Гарантия конфиденциальности тестирования EyeDetect"
            }
            width={960}
            height={560}
            sizes="(max-width: 1023px) 100vw, 960px"
          />
        </div>
        <OpenModalBtn
          customClass={styles.btn}
          title={dictionary.buttons.orderConsultation}
        />
      </div>
    </section>
  );
};

export default GuaranteeSection;
