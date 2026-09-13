import Reveal from "@/components/Reveal/Reveal";
import styles from "./HomeStepsSection.module.scss";

// Як проходить тест: три кроки.
const HomeStepsSection = ({ dictionary }) => {
  const d = dictionary.homeSteps;

  return (
    <section id="how" className={styles.section}>
      <div className={`container ${styles.container}`}>
        <Reveal>
          <h2 className={styles.title}>{d.title}</h2>
        </Reveal>
        <ol className={styles.steps}>
          {d.steps.map((s, i) => (
            <Reveal as="li" key={s.title} delay={i * 0.08} className={styles.step}>
              <p className={styles.num}>{String(i + 1).padStart(2, "0")}</p>
              <h3 className={styles.stepTitle}>{s.title}</h3>
              <p className={styles.stepText}>{s.text}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default HomeStepsSection;
