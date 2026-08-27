import { QUIZ_URL } from "@/components/Buttons/PriceQuizBtn/PriceQuizBtn";
import styles from "./PriceFloatBtn.module.scss";

// Плаваюча кнопка розрахунку вартості. Стоїть над віджетом зворотного
// дзвінка Binotel (лівий нижній кут), щоб квіз був доступний з будь-якої
// сторінки, а не лише з головної.
const PriceFloatBtn = ({ title }) => {
  return (
    <a
      className={styles.float}
      href={QUIZ_URL}
      target="_blank"
      rel="noopener noreferrer"
    >
      <span className={styles.icon} aria-hidden="true">
        ₴
      </span>
      <span className={styles.text}>{title}</span>
    </a>
  );
};

export default PriceFloatBtn;
