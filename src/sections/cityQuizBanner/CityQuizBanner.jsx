import PriceQuizBtn from "@/components/Buttons/PriceQuizBtn/PriceQuizBtn";
import { keepShortWords } from "@/data/pages/cityTexts";
import styles from "./CityQuizBanner.module.scss";

// Банер квіза на сторінці міста: коротке питання про ціну і кнопка, що відкриває квіз.
// Поруч з кнопкою телефон: іконка в колі, підпис і номер, який не переноситься.
const CityQuizBanner = ({ title, text, button, phoneLabel, variant = "light" }) => (
  <section className={`${styles.section} ${variant === "dark" ? styles.dark : ""}`}>
    <div className={`container ${styles.container}`}>
      <h2 className={styles.title}>{keepShortWords(title)}</h2>
      <p className={styles.text}>{text}</p>
      <div className={styles.actions}>
        <PriceQuizBtn customClass={styles.btn} title={button} />
        {/* На телефоні проста кнопка з номером, на ширших екранах блок з підписом */}
        <a href="tel:+380686833368" className={styles.phoneBtn}>
          <svg aria-hidden="true">
            <use href="/sprite.svg#icon-call" />
          </svg>
          +380 68 68 333 68
        </a>
        <a href="tel:+380686833368" className={styles.phone}>
          <span className={styles.phoneIcon} aria-hidden="true">
            <svg>
              <use href="/sprite.svg#icon-call" />
            </svg>
          </span>
          <span className={styles.phoneText}>
            <span className={styles.phoneLabel}>{phoneLabel}</span>
            <span className={styles.phoneNum}>+380 68 68 333 68</span>
          </span>
        </a>
      </div>
    </div>
  </section>
);

export default CityQuizBanner;
