import Reveal from "@/components/Reveal/Reveal";
import PriceQuizBtn from "@/components/Buttons/PriceQuizBtn/PriceQuizBtn";
import { directionsData } from "@/data/directionsData";
import { getLocalizedField } from "@/helpers/getLocalizedField";
import styles from "./HomeDirectionsSection.module.scss";

// Ситуації, в яких допомагає EyeDetect. Кнопка розрахунку вартості тут доречна:
// це вже далеко за першим екраном.
const HomeDirectionsSection = ({ lang, dictionary }) => {
  return (
    <section id="situations" className={styles.section}>
      <div className={`container ${styles.container}`}>
        <Reveal>
          <h2 className={styles.title}>
            {dictionary.homeDirectionsSection.title}
          </h2>
          {dictionary.homeDirectionsSection.subTitle && (
            <p className={styles.intro}>
              {dictionary.homeDirectionsSection.subTitle}
            </p>
          )}
        </Reveal>
        <ul className={styles.directionsWrapper}>
          {directionsData.map((direction, i) => (
            <Reveal
              as="li"
              key={direction.title}
              delay={i * 0.06}
              className={styles.directionItem}
            >
              <div className={styles.iconWrapper}>
                <svg aria-hidden="true">
                  <use href={direction.href} />
                </svg>
              </div>
              <h3 className={styles.subTitle}>
                {getLocalizedField(direction, "title", lang)}
              </h3>
              <p className={styles.description}>
                {getLocalizedField(direction, "description", lang)}
              </p>
            </Reveal>
          ))}
        </ul>
        {dictionary.homeDirectionsSection.conclusion && (
          <Reveal>
            <p className={styles.conclusion}>
              {dictionary.homeDirectionsSection.conclusion}
            </p>
          </Reveal>
        )}
        <div className={styles.ctaWrap}>
          <PriceQuizBtn
            customClass={styles.ctaBtn}
            title={dictionary.buttons.calculatePrice}
          />
        </div>
      </div>
    </section>
  );
};

export default HomeDirectionsSection;
