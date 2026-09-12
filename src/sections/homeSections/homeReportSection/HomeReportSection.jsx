import Image from "next/image";
import Reveal from "@/components/Reveal/Reveal";
import styles from "./HomeReportSection.module.scss";

// Що отримує клієнт: зразок справжнього звіту з розмитими даними.
const HomeReportSection = ({ dictionary }) => {
  const d = dictionary.homeReport;

  return (
    <section id="report">
      <div className={`container ${styles.container}`}>
        <Reveal className={styles.text}>
          <h2 className={styles.title}>{d.title}</h2>
          <p className={styles.subTitle}>{d.subTitle}</p>
          <ul className={styles.points}>
            {d.points.map((p) => (
              <li key={p}>
                <svg aria-hidden="true">
                  <use href="/sprite.svg#icon-check-mark-in-circle" />
                </svg>
                <span>{p}</span>
              </li>
            ))}
          </ul>
        </Reveal>
        <Reveal delay={0.1} className={styles.figure}>
          <div className={styles.imgWrap}>
            <Image
              src="/images/report-sample-eyedetect.webp"
              alt={d.caption}
              width={1488}
              height={2105}
              sizes="(max-width: 1023px) 100vw, 480px"
            />
          </div>
          <p className={styles.caption}>{d.caption}</p>
        </Reveal>
      </div>
    </section>
  );
};

export default HomeReportSection;
