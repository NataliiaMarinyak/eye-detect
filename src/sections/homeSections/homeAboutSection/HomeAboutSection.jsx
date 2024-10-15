"use client";

import { aboutData } from "@/data/aboutData";
import styles from "./HomeAboutSection.module.scss";
import Image from "next/image";

const HomeAboutSection = () => {
  return (
    <section>
      <div className={`container ${styles.container}`}>
        <h1 className={styles.title}>
          Сучасний поліграф “детектор брехні” у Львові: точність та новітні
          технології EyeDetect
        </h1>
        <h2 className={styles.subTitle}>
          Поліграф-тестування у Львові: швидка та достовірна перевірка за
          допомогою технології EyeDetect
        </h2>

        <div className={styles.content}>
          <ul className={styles.aboutList}>
            {aboutData.map((el, i) => {
              return (
                <li key={i}>
                  <svg>
                    <use href="./sprite.svg#icon-check-mark-in-circle"></use>
                  </svg>
                  <h3>{el.text}</h3>
                </li>
              );
            })}
          </ul>
          <div className={styles.imgWrapp}>
            <Image
              src="/images/aboutImg.webp"
              fill
              alt="Natalia"
              sizes="(max-width: 1023px) 100vw, (max-width: 1440px) 50vw, 33vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeAboutSection;
