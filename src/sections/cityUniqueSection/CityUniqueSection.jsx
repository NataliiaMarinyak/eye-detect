import styles from "./CityUniqueSection.module.scss";

// Унікальний блок міста: вступ про місто і три факти (населення, дорога, як пройти тест).
const CityUniqueSection = ({ title, intro, facts = [] }) => (
  <section className={styles.section}>
    <div className={`container ${styles.container}`}>
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.intro}>{intro}</p>
      {facts.length > 0 && (
        <dl className={styles.facts}>
          {facts.map(([label, value]) => (
            <div key={label} className={styles.fact}>
              <dt className={styles.label}>{label}</dt>
              <dd className={styles.value}>{value}</dd>
            </div>
          ))}
        </dl>
      )}
    </div>
  </section>
);

export default CityUniqueSection;
