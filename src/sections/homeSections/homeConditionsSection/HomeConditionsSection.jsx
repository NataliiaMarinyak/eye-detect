import ButtonLink from "@/components/Buttons/ButtonLink/ButtonLink";
import Image from "next/image";
import styles from './HomeConditionsSection.module.scss';


const HomeConditionsSection = () => {
  return <section>
    <div className={`container ${styles.container}`}>
      <h2 className={styles.mobileTitle}>Умови тестування EyeDetect</h2>
      <h2 className={styles.title}>Умови тестування на поліграфі (детекторі брехні) EyeDetect</h2>
      <div className={styles.imgWrapper}>
        <Image
          className={styles.img}
          src='/images/conditions.webp'
          alt="Умови тестування EyeDetect"
          sizes="100vw"
          fill
        />
      </div>
      {/* href='/contacts' must be changed */}
      <ButtonLink href='/contacts' title="Замовити консультацію" />
    </div>
  </section>;
};

export default HomeConditionsSection;
