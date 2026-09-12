import Link from "next/link";
import Reveal from "@/components/Reveal/Reveal";
import { i18n } from "@/dictionaries/i18n.config";
import styles from "./HomeStepsSection.module.scss";

const TECH_LINK = { uk: "Як працює технологія EyeDetect", ru: "Как работает технология EyeDetect", en: "How the EyeDetect technology works" };

// Як проходить тест: три кроки.
const HomeStepsSection = ({ dictionary }) => {
  const d = dictionary.homeSteps;
  const lang = dictionary.lang || "uk";

  return (
    <section id="how" className={styles.section}>
      <div className={`container ${styles.container}`}>
        <Reveal>
          <h2 className={styles.title}>{d.title}</h2>
          <p className={styles.subTitle}>{d.subTitle}</p>
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
        <Link className={styles.techLink} href={`${lang === i18n.defaultLocale ? "" : `/${lang}`}/eyedetect`}>
          {TECH_LINK[lang] || TECH_LINK.uk}
        </Link>
      </div>
    </section>
  );
};

export default HomeStepsSection;
