import styles from "./PriceQuizBtn.module.scss";

// Кнопка-посилання на квіз розрахунку вартості (price.eye-polygraph.com).
// Раніше квіз стояв лише в героєві головної — тепер його можна ставити
// в будь-яку секцію, зокрема на міських сторінках.
export const QUIZ_URL = "https://price.eye-polygraph.com/";

const PriceQuizBtn = ({ customClass = "", title }) => {
  return (
    <a
      className={`${styles.btn} ${customClass}`}
      href={QUIZ_URL}
      target="_blank"
      rel="noopener noreferrer"
    >
      {title}
    </a>
  );
};

export default PriceQuizBtn;
