import OpenModalBtn from "@/components/Buttons/OpenModalBtn/OpenModalBtn";
import styles from "./ConsultationSection.module.scss";
import Image from "next/image";

const ConsultationSection = () => {
  return (
    <section className={styles.section}>
      <div className={`container ${styles.container}`}>
        <div>
          <h1 className={styles.title}>
            Перевірка на поліграфі EyeDetect – професійний підхід
          </h1>
          <h2 className={styles.text}>
            Консультація поліграфолога EyeDetect Наталії Мариняк
          </h2>
        </div>
        <OpenModalBtn customBtn={styles.btn} />
      </div>
      <div className={styles.bgImgWrapp}>
        <Image
          src="/images/about-as-bg.webp"
          alt=" Передові рішення для виявлення обману швидко і точно"
          fill
          sizes="100vw"
        />
      </div>
    </section>
  );
};

export default ConsultationSection;
