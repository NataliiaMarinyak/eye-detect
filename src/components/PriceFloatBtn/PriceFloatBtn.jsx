"use client";
import { useEffect, useState } from "react";
import { QUIZ_URL } from "@/components/Buttons/PriceQuizBtn/PriceQuizBtn";
import styles from "./PriceFloatBtn.module.scss";

// Плаваюча кнопка розрахунку вартості. Стоїть над віджетом зворотного
// дзвінка Binotel (лівий нижній кут).
//
// На першому екрані вона прихована: там уже є своя кнопка розрахунку
// в героєві, і дві однакові кнопки поруч тільки заважають. З'являється
// після того, як користувач прогорнув перший екран.
const PriceFloatBtn = ({ title }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      // Поріг — 80% висоти вікна, тобто одразу після першого екрана.
      setIsVisible(window.scrollY > window.innerHeight * 0.8);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <a
      className={`${styles.float} ${isVisible ? styles.visible : ""}`}
      href={QUIZ_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-hidden={!isVisible}
      tabIndex={isVisible ? 0 : -1}
    >
      <span className={styles.icon} aria-hidden="true">
        ₴
      </span>
      <span className={styles.text}>{title}</span>
    </a>
  );
};

export default PriceFloatBtn;
