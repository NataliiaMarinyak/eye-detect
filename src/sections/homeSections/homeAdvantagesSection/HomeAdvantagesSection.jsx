import Reveal from "@/components/Reveal/Reveal";
import { advantagesData } from "@/data/advantagesData";
import { getLocalizedField } from "@/helpers/getLocalizedField";
import styles from "./HomeAdvantagesSection.module.scss";

const HomeAdvantagesSection = ({ lang, dictionary }) => {
  return (
    <section>
      <div className={`container ${styles.container}`}>
        <Reveal>
          <h2 className={styles.title}>
            {dictionary.homeAdvantagesSection.title}
          </h2>
          {dictionary.homeAdvantagesSection.subTitle && (
            <p className={styles.subTitle}>
              {dictionary.homeAdvantagesSection.subTitle}
            </p>
          )}
        </Reveal>
        <ul className={styles.advantagesWrapper}>
          {advantagesData.map((advantage, i) => (
            <Reveal
              as="li"
              key={advantage.title}
              delay={i * 0.06}
              className={styles.advantageItem}
            >
              <div className={styles.iconWrapper}>
                <svg aria-hidden="true">
                  <use href="/sprite.svg#icon-check-mark-in-circle" />
                </svg>
              </div>
              <h3 className={styles.advantageTitle}>
                {getLocalizedField(advantage, "title", lang)}
              </h3>
              <p className={styles.description}>
                {getLocalizedField(advantage, "text", lang)}
              </p>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default HomeAdvantagesSection;
