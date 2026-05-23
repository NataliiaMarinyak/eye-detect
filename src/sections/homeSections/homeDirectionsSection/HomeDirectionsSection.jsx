import OpenModalBtn from "@/components/Buttons/OpenModalBtn/OpenModalBtn";
import { directionsData } from "@/data/directionsData";
import { getLocalizedField } from "@/helpers/getLocalizedField";
import styles from "./HomeDirectionsSection.module.scss";

const HomeDirectionsSection = ({ lang, dictionary }) => {
  return (
    <section>
      <div className={`container ${styles.container}`}>
        <h2 className={styles.title}>
          {dictionary.homeDirectionsSection.title}
        </h2>
        {dictionary.homeDirectionsSection.subTitle && (
          <p className={styles.intro}>
            {dictionary.homeDirectionsSection.subTitle}
          </p>
        )}
        <ul className={styles.directionsWrapper}>
          {directionsData.map((direction) => (
            <li key={direction.title} className={styles.directionItem}>
              <div className={styles.iconWrapper}>
                <svg className={styles.icon}>
                  <use href={direction.href} />
                </svg>
              </div>
              <h3 className={styles.subTitle}>
                {getLocalizedField(direction, "title", lang)}
              </h3>
              <p className={styles.description}>
                {getLocalizedField(direction, "description", lang)}
              </p>
            </li>
          ))}
        </ul>
        {dictionary.homeDirectionsSection.conclusion && (
          <p className={styles.conclusion}>
            {dictionary.homeDirectionsSection.conclusion}
          </p>
        )}
        <OpenModalBtn
          customClass={styles.ctaBtn}
          title={dictionary.buttons.calculatePrice}
        />
      </div>
    </section>
  );
};

export default HomeDirectionsSection;
