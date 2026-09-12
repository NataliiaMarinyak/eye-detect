import Link from "next/link";
import Image from "next/image";
import Reveal from "@/components/Reveal/Reveal";
import OpenModalBtn from "@/components/Buttons/OpenModalBtn/OpenModalBtn";
import ContentFaq from "@/components/ContentFaq/ContentFaq";
import { pricingGroups } from "@/data/pricingData";
import { i18n } from "@/dictionaries/i18n.config";
import styles from "./BusinessSections.module.scss";

const localHref = (lang, path) => (lang === i18n.defaultLocale ? path : `/${lang}${path}`);
const MORE = { uk: "Детальніше", ru: "Подробнее", en: "Learn more" };

// Секції сторінки /business. Дані: src/data/pages/businessPage.js; ціни з pricingData.
const BusinessSections = ({ d, lang, dictionary }) => {
  const isUk = lang === i18n.defaultLocale;
  const business = pricingGroups.find((g) => g.id === "business");

  return (
    <>
      {/* Коли звертаються */}
      <section className={styles.white}>
        <div className={`container ${styles.container}`}>
          <Reveal><h2 className={styles.title}>{d.cases.title}</h2></Reveal>
          <ul className={styles.cases}>
            {d.cases.items.map((c, i) => (
              <Reveal as="li" key={c.title} delay={i * 0.06} className={styles.card}>
                <h3 className={styles.cardTitle}>{c.title}</h3>
                <p className={styles.cardText}>{c.text}</p>
                {c.slug && (
                  <Link className={styles.more} href={localHref(lang, `/situations/${c.slug}`)}>{MORE[lang] || MORE.uk}</Link>
                )}
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* Порівняння */}
      <section>
        <div className={`container ${styles.container}`}>
          <Reveal><h2 className={styles.title}>{d.why.title}</h2></Reveal>
          <Reveal className={styles.tableWrap}>
            <table className={styles.table}>
              <thead>
                <tr>{d.why.rows[0].map((c, i) => <th key={i} scope="col">{c}</th>)}</tr>
              </thead>
              <tbody>
                {d.why.rows.slice(1).map((r) => (
                  <tr key={r[0]}>
                    <th scope="row">{r[0]}</th>
                    {r.slice(1).map((c, i) => <td key={i}>{c}</td>)}
                  </tr>
                ))}
              </tbody>
            </table>
          </Reveal>
          <p className={styles.tableHint}>{isUk ? "Гортайте таблицю вбік →" : "Листайте таблицу вбок →"}</p>
        </div>
      </section>

      {/* Як організовується + фото */}
      <section className={styles.white}>
        <div className={`container ${styles.stepsGrid}`}>
          <div className={styles.container}>
            <Reveal><h2 className={styles.title}>{d.process.title}</h2></Reveal>
            <ol className={styles.steps}>
              {d.process.steps.map((s, i) => (
                <Reveal as="li" key={s.title} delay={i * 0.05} className={styles.step}>
                  <p className={styles.stepNum}>{String(i + 1).padStart(2, "0")}</p>
                  <div>
                    <h3 className={styles.stepTitle}>{s.title}</h3>
                    <p className={styles.stepText}>{s.text}</p>
                  </div>
                </Reveal>
              ))}
            </ol>
          </div>
          <Reveal className={styles.photo}>
            <Image src="/images/converus/eyedetect-station-angle.webp" alt="EyeDetect" width={1000} height={1338} sizes="(max-width: 1023px) 70vw, 360px" />
          </Reveal>
        </div>
      </section>

      {/* Ціни */}
      <section id="prices">
        <div className={`container ${styles.container}`}>
          <Reveal>
            <h2 className={styles.title}>{d.pricing.title}</h2>
            <p className={styles.subTitle}>{d.pricing.note}</p>
          </Reveal>
          <Reveal className={styles.priceBox}>
            <ul className={styles.priceList}>
              {business.items.map((it, i) => (
                <li key={i} className={styles.priceRow}>
                  <span>{isUk ? it.name : it.nameRus}</span>
                  <span className={styles.priceVal}>{isUk ? it.priceLabel : it.priceLabelRus}</span>
                </li>
              ))}
            </ul>
            <p className={styles.travel}>{d.pricing.travel}</p>
            <OpenModalBtn customClass={styles.btn} title={d.hero.primary} />
          </Reveal>
        </div>
      </section>

      {/* Законність */}
      <section className={styles.white}>
        <div className={`container ${styles.container}`}>
          <Reveal><h2 className={styles.title}>{d.legal.title}</h2></Reveal>
          <ul className={styles.legal}>
            {d.legal.items.map((t, i) => (
              <Reveal as="li" key={i} delay={i * 0.05} className={styles.legalItem}>
                <span className={styles.legalNum}>{i + 1}</span>
                <p>{t}</p>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <ContentFaq items={d.faq} lang={lang} />

      <section className={styles.cta}>
        <div className={`container ${styles.ctaInner}`}>
          <Reveal>
            <h2 className={styles.ctaTitle}>{d.cta.title}</h2>
            <p className={styles.ctaText}>{d.cta.text}</p>
          </Reveal>
          <OpenModalBtn customClass={styles.ctaPrimary} title={d.cta.button} />
        </div>
      </section>
    </>
  );
};

export default BusinessSections;
