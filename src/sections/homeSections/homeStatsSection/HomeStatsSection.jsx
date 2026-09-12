import Counter from "@/components/Counter/Counter";
import Reveal from "@/components/Reveal/Reveal";
import styles from "./HomeStatsSection.module.scss";

// Смуга з чотирма цифрами під першим екраном.
const HomeStatsSection = ({ dictionary }) => {
  const items = dictionary.homeStats?.items || [];

  return (
    <section className={styles.section} aria-label="EyeDetect у цифрах">
      <div className="container">
        <ul className={styles.list}>
          {items.map((it, i) => (
            <Reveal as="li" key={it.label} delay={i * 0.06} className={styles.item}>
              <p className={styles.value}>
                <Counter value={it.value} prefix={it.prefix} suffix={it.suffix} />
              </p>
              <p className={styles.label}>{it.label}</p>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default HomeStatsSection;
