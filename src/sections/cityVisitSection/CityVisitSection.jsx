import Reveal from "@/components/Reveal/Reveal";
import OpenModalBtn from "@/components/Buttons/OpenModalBtn/OpenModalBtn";
import PriceQuizBtn from "@/components/Buttons/PriceQuizBtn/PriceQuizBtn";
import { fill, keepShortWords } from "@/data/pages/cityTexts";
import styles from "./CityVisitSection.module.scss";

// Назва послуги для форми заявки і Telegram — мовою сторінки.
const VISIT_SERVICE = { uk: "EyeDetect з виїздом", ru: "EyeDetect с выездом", en: "EyeDetect on-site" };

// Блок «Як пройти тест у {місто}»: онлайн сьогодні або виїзд спеціаліста.
// Тексти залежать від регіону (захід України / інша Україна / Європа).
// quizCta: кнопка картки виїзду відкриває розрахунок вартості замість вікна консультації.
const CityVisitSection = ({ t, region, loc, km, vars, dictionary, lang, quizCta = false }) => {
  const v = vars || { loc, km: km || "", city: loc };
  const visitText = km ? t.visit.text[region] : t.visit.textNoKm[region];

  return (
    <section id="visit" className={styles.section}>
      <div className={`container ${styles.container}`}>
        <Reveal>
          <h2 className={styles.title}>{keepShortWords(fill(t.visitTitle, v))}</h2>
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
              {quizCta ? (
                <PriceQuizBtn customClass={styles.btnPrimary} title={t.visit.cta} />
              ) : (
                <OpenModalBtn customClass={styles.btnPrimary} title={t.visit.cta} service={`${VISIT_SERVICE[lang] || VISIT_SERVICE.uk} · ${loc}`} />
              )}
            </div>
          </Reveal>
        </ul>
      </div>
    </section>
  );
};

export default CityVisitSection;
