import styles from "./HeroSection.module.scss";
import OpenModalBtn from "@/components/Buttons/OpenModalBtn/OpenModalBtn";

const HeroSection = () => {
  return (
    <section id="hero" className={styles.hero}>
      <div className={`container ${styles.container}`}>
        <div>
          <h2 className={styles.title}>
            Передові рішення для виявлення обману швидко і точно
          </h2>
          <h3 className={styles.text}>
            Швидка та достовірна перевірка за допомогою технології EyeDetect
          </h3>
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
