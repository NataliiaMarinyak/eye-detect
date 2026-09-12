import Image from "next/image";
import OpenModalBtn from "@/components/Buttons/OpenModalBtn/OpenModalBtn";
import styles from "./ConsultationSection.module.scss";

// Перший екран сторінки «Про нас»: темний фон у стилі сайту, фото праворуч.
const ConsultationSection = ({ dictionary }) => {
  return (
    <section className={styles.section}>
      <div className={`container ${styles.container}`}>
        <div className={styles.content}>
          <h1 className={styles.title}>{dictionary.consultationSection.title}</h1>
          <p className={styles.text}>{dictionary.consultationSection.subTitle}</p>
          <OpenModalBtn customClass={styles.btn} title={dictionary.buttons.orderConsultation} />
        </div>
        <div className={styles.photo}>
          <Image
            src="/images/about-us-bg.webp"
            alt={dictionary.consultationSection.title}
            width={1440}
            height={900}
            sizes="(max-width: 1023px) 100vw, 520px"
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default ConsultationSection;
