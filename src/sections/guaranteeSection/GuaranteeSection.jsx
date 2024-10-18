import OpenModalBtn from "@/components/Buttons/OpenModalBtn/OpenModalBtn";
import styles from "./GuaranteeSection.module.scss";
import Image from "next/image";
import { confidentDuaranty } from "@/data/confidentGuaranty";

const GuaranteeSection = () => {
  return (
    <section>
      <div className={`container ${styles.container}`}>
        <h2 className={styles.title}>
          Гарантія конфіденційості тестування EyeDetect
        </h2>
        <ul className={styles.list}>
          {confidentDuaranty.map((el, i) => {
            return (
              <li key={i} className={styles.item}>
                <svg className={styles.icon}>
                  <use href="/sprite.svg#icon-cross-in-circle"></use>
                </svg>
                <p className={styles.text}>{el.text}</p>
              </li>
            );
          })}
        </ul>
        <div className={styles.imgWrapp}>
          <Image src="/images/specialist3.webp" alt="qwe" fill sizes="100vw" />
        </div>
        <OpenModalBtn customBtn={styles.btn} />
      </div>
    </section>
  );
};

export default GuaranteeSection;
