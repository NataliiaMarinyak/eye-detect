import { specialistData } from "@/data/specialistData";
import styles from "./SpecialistSection.module.scss";
import Image from "next/image";

const SpecialistSection = () => {
  return (
    <section>
      <div className="container">
        <h2 className={styles.title}>
          Наталія Мариняк – експерт з детектора брехні EyeDetect
        </h2>

        <ul>
          {specialistData.map((el, i) => {
            return (
              <li key={i} className={styles.contentWrapp}>
                <div className={styles.textWrapp}>
                  <h3 className={styles.subtitle}>{el.title}</h3>
                  <ul>
                    {el.details.map((det, i) => {
                      return (
                        <li key={i} className={styles.details}>
                          <h4 className={styles.detailsTitle}>
                            <svg>
                              <use href="./sprite.svg#icon-check-mark-in-circle"></use>
                            </svg>

                            {det.subtitle}
                          </h4>
                          <ul className={styles.detailsList}>
                            {det.list.map((item, i) => {
                              return <li key={i}>{item}</li>;
                            })}
                          </ul>
                        </li>
                      );
                    })}
                  </ul>
                </div>
                <div className={styles.imgWrapp}>
                  <Image
                    src={el.img}
                    alt={el.title}
                    fill
                    sizes="(max-width: 1023px) 100vw, (max-width: 1440px) 50vw, 33vw"
                  />
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default SpecialistSection;
