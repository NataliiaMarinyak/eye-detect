"use client";
import { OPEN_QUIZ_EVENT } from "@/components/PriceQuiz/quizEvent";
import styles from "./PriceQuizBtn.module.scss";

// Кнопка «Розрахувати точну вартість»: відкриває вікно квіза на цій самій сторінці.
// Без JS посилання #quiz теж відкриває квіз після завантаження.
// Старий зовнішній квіз adsquiz лишається як резерв (QUIZ_URL), на сайті не використовується.
export const QUIZ_URL = "https://price.eye-polygraph.com/";

const PriceQuizBtn = ({ customClass = "", title }) => {
  const onClick = (e) => {
    e.preventDefault();
    window.dispatchEvent(new CustomEvent(OPEN_QUIZ_EVENT, { detail: { from: window.location.pathname } }));
  };

  return (
    <a className={`${styles.btn} ${customClass}`} href="#quiz" onClick={onClick}>
      {title}
    </a>
  );
};

export default PriceQuizBtn;
