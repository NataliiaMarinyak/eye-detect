import Image from "next/image";
import OpenModalBtn from "@/components/Buttons/OpenModalBtn/OpenModalBtn";
import styles from './HomeConditionsSection.module.scss';


const HomeConditionsSection = () => {
  return <section>
    <div className={`container ${styles.container}`}>
      <h2 className={styles.title}>Комфортні умови тестування на поліграфі (детекторі брехні) EyeDetect</h2>
      <div className={styles.imgWrapper}>
        <Image
          className={styles.img}
          src='/images/conditions.webp'
          alt="Умови тестування EyeDetect"
          sizes="(max-width: 1023px) 100vw, 960px"
          fill
        />
      </div>
      <OpenModalBtn />
    </div>
  </section>;
};

export default HomeConditionsSection;
