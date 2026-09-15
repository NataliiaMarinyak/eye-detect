// "use client";
// import { useEffect, useState } from "react";
// import { useTranslation } from "react-i18next";
import Image from "next/image";
import OpenModalBtn from "@/components/Buttons/OpenModalBtn/OpenModalBtn";
import PriceQuizBtn from "@/components/Buttons/PriceQuizBtn/PriceQuizBtn";
import { confidentialityGuaranteeData } from "@/data/confidentialityGuaranteeData";
// import { languagesData } from "@/data/languagesData";
import { i18n } from "@/dictionaries/i18n.config";
import { getLocalizedField } from "@/helpers/getLocalizedField";
import styles from "./GuaranteeSection.module.scss";

// compact: без кнопки консультації, фото вужче (сторінки міст з унікальним блоком).
// items: власні тексти пунктів (масив рядків), інакше спільні дані confidentialityGuaranteeData.
const GuaranteeSection = ({ lang, dictionary, compact = false, items }) => {
  // const { t, i18n } = useTranslation();
  // const [isLoading, setIsLoading] = useState(true);
  // useEffect(() => setIsLoading(false), []);
  const texts = items?.length ? items : confidentialityGuaranteeData.map((el) => getLocalizedField(el, "text", lang));

  return (
    <section>
      <div className={`container ${styles.container}`}>
        <h2 className={styles.title}>{dictionary.guaranteeSection.title}</h2>

        <ul className={styles.list}>
          {texts.map((text, i) => {
            return (
              <li key={i} className={styles.item}>
                <svg className={styles.icon}>
                  <use href="/sprite.svg#icon-cross-in-circle"></use>
                </svg>
                <p className={styles.text}>{text}</p>
              </li>
            );
          })}
        </ul>
        <div className={`${styles.imgWrapp} ${compact ? styles.imgCompact : ""}`}>
          <Image
            src="/images/guarantee-natalia-standing.webp"
            alt={
              { uk: "Гарантія конфіденційності тестування EyeDetect", ru: "Гарантия конфиденциальности тестирования EyeDetect", en: "EyeDetect testing confidentiality guarantee" }[lang]
            }
            width={1200}
            height={1500}
            sizes={compact ? "(max-width: 767px) 100vw, 480px" : "(max-width: 1023px) 100vw, 960px"}
          />
        </div>
        <div className={styles.ctaGroup}>
          <PriceQuizBtn title={dictionary.buttons.calculatePrice} />
          {!compact && (
            <OpenModalBtn
              customClass={styles.btn}
              title={dictionary.buttons.orderConsultation}
            />
          )}
        </div>
      </div>
    </section>
  );
};

export default GuaranteeSection;
