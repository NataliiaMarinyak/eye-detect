import Reveal from "@/components/Reveal/Reveal";
import OpenModalBtn from "@/components/Buttons/OpenModalBtn/OpenModalBtn";
import PriceQuizBtn from "@/components/Buttons/PriceQuizBtn/PriceQuizBtn";
import styles from "./CityVisitSection.module.scss";

// Блок «Як пройти тест у {місто}»: онлайн сьогодні або виїзд спеціаліста.
// Тексти залежать від регіону (захід України / інша Україна / Європа).
const CityVisitSection = ({ t, region, loc, km, dictionary, lang }) => {
  const visitText = km ? t.visit.text[region] : t.visit.textNoKm[region];

  return (
    <section id="visit" className={styles.section}>
      <div className={`container ${styles.container}`}>
        <Reveal>
          <h2 className={styles.title}>{t.visitTitle.replace("{loc}", loc)}</h2>
        </Reveal>
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
            <p className={styles.text}>{visitText.replace("{loc}", loc).replace("{km}", km || "")}</p>
            <div className={styles.footer}>
              <p className={styles.price}>{t.visit.price[region]}</p>
              <OpenModalBtn customClass={styles.btnPrimary} title={t.visit.cta} />
            </div>
          </Reveal>
        </ul>
        <Reveal className={styles.noteRow}>
          <p className={styles.note}>{t.lvivNote}</p>
          <PriceQuizBtn customClass={styles.quiz} title={dictionary.buttons.calculatePrice} />
        </Reveal>
      </div>
    </section>
  );
};

export default CityVisitSection;
