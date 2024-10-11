import ButtonLink from "@/components/Buttons/ButtonLink/ButtonLink";
import styles from "./HeroSection.module.scss";

const HeroSection = () => {
  return (
    <section id="hero" className={styles.hero}>
      <div className={`container ${styles.container}`}>
        <h1 className={styles.title}>Сучасний поліграф (детектор брехні) у Львові: точність та новітні технології EyeDetect</h1>
        <p className={styles.text}>Поліграф-тестування у Львові: швидка та достовірна перевірка за допомогою технології EyeDetect</p>
        <ButtonLink
          href="/contacts"
          title="Замовити консультацію"
          customBtn={styles.btn}
        />
      </div>
    </section>
  );
};

export default HeroSection;
