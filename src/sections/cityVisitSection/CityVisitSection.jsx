import Reveal from "@/components/Reveal/Reveal";
import OpenModalBtn from "@/components/Buttons/OpenModalBtn/OpenModalBtn";
import { fill } from "@/data/pages/cityTexts";
import styles from "./CityVisitSection.module.scss";

// Блок «Як пройти тест у {місто}»: онлайн сьогодні або виїзд спеціаліста.
// Тексти залежать від регіону (захід України / інша Україна / Європа).
const CityVisitSection = ({ t, region, loc, km, vars, dictionary, lang }) => {
  const v = vars || { loc, km: km || "", city: loc };
  const visitText = km ? t.visit.text[region] : t.visit.textNoKm[region];

  return (
    <section id="visit" className={styles.section}>
      <div className={`container ${styles.container}`}>
        <Reveal>
          <h2 className={styles.title}>{fill(t.visitTitle, v)}</h2>
        </Reveal>
        {t.noOffice && <p className={styles.noOffice}>{fill(t.noOffice, v)}</p>}
        <ul className={styles.grid}>
          <Reveal as="li" className={styles.card}>
            <p className={styles.badge}>{t.online.title}</p>
            <p className={styles.text}>{t.online.text}</p>
            <div className={styles.footer}>
              <p className={styles.price}>{t.online.price}</p>
              <a href={`${lang === "uk" ? "" : "/" + lang}/online`} className={styles.btnSecondary}>{t.online.cta}</a>
            </div>
          </Reveal>
          <Reveal as="li" delay={0.08} className={`${styles.card} ${styles.cardAccent}`}>
            <p className={styles.badge}>{t.visit.title}</p>
            <p className={styles.text}>{fill(visitText, v)}</p>
            <div className={styles.footer}>
              <p className={styles.price}>{t.visit.price[region]}</p>
              <OpenModalBtn customClass={styles.btnPrimary} title={t.visit.cta} service={`EyeDetect з виїздом · ${loc}`} />
            </div>
          </Reveal>
        </ul>
      </div>
    </section>
  );
};

export default CityVisitSection;
