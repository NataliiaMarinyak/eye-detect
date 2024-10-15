import OpenModalBtn from "@/components/Buttons/OpenModalBtn/OpenModalBtn";
import styles from "./ConsultationSection.module.scss";

const ConsultationSection = () => {
  return (
    <section className={styles.section}>
      <div className={`container ${styles.container}`}>
        <div>
          <h1 className={styles.title}>Тестування на поліграфі EyeDetect</h1>
          <h2 className={styles.text}>
            Консультація тестувальника EyeDetect Наталії Мариняк
          </h2>
        </div>
        <OpenModalBtn customBtn={styles.btn} />
      </div>
    </section>
  );
};

export default ConsultationSection;
