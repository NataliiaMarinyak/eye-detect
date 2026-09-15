import PriceQuizBtn from "@/components/Buttons/PriceQuizBtn/PriceQuizBtn";
import styles from "./CityQuizBanner.module.scss";

// Банер квіза на сторінці міста: коротке питання про ціну і кнопка, що відкриває квіз.
const CityQuizBanner = ({ title, text, button, phoneLabel, variant = "light" }) => (
  <section className={`${styles.section} ${variant === "dark" ? styles.dark : ""}`}>
    <div className={`container ${styles.container}`}>
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.text}>{text}</p>
      <div className={styles.actions}>
        <PriceQuizBtn customClass={styles.btn} title={button} />
        <a href="tel:+380686833368" className={styles.phone}>{phoneLabel} +380 68 68 333 68</a>
      </div>
    </div>
  </section>
);

export default CityQuizBanner;
