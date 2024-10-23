"use client";
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import OpenModalBtn from "@/components/Buttons/OpenModalBtn/OpenModalBtn";
import styles from "./HeroSection.module.scss";


const HeroSection = () => {
  const { t } = useTranslation();
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => setIsLoading(false), []);


  return (
    <section id="hero" className={styles.hero}>
      <div className={`container ${styles.container}`}>
        <div>
          {!isLoading && <p className={styles.title}>{t('HeroSection.Title')}</p>}
          {!isLoading && <p className={styles.text}>{t('HeroSection.Text')}</p>}
        </div>
        <OpenModalBtn customBtn={styles.btn} />
      </div>
    </section>
  );
};

// const HeroSection = () => {
//   return (
//     <section id="hero" className={styles.hero}>
//       <div className={`container ${styles.container}`}>
//         <h1 className={styles.title}>
//           Сучасний поліграф (детектор брехні) у Львові: точність та новітні
//           технології EyeDetect
//         </h1>
//         <h2 className={styles.text}>
//           Поліграф-тестування у Львові: швидка та достовірна перевірка за
//           допомогою технології EyeDetect
//         </h2>
//         <OpenModalBtn customBtn={styles.btn} />
//       </div>
//     </section>
//   );
// };

export default HeroSection;
