import Image from "next/image";
import Reveal from "@/components/Reveal/Reveal";
import OpenModalBtn from "@/components/Buttons/OpenModalBtn/OpenModalBtn";
import ContentFaq from "@/components/ContentFaq/ContentFaq";
import styles from "./OnlineSections.module.scss";

// Секції сторінки /online. Дані: src/data/pages/onlinePage.js
const OnlineSections = ({ d, lang, dictionary }) => (
  <>
    {/* Чому справжній */}
    <section className={styles.white}>
      <div className={`container ${styles.container}`}>
        <Reveal><h2 className={styles.title}>{d.why.title}</h2></Reveal>
        <ul className={styles.cards3}>
          {d.why.items.map((it, i) => (
            <Reveal as="li" key={it.title} delay={i * 0.06} className={styles.card}>
              <h3 className={styles.cardTitle}>{it.title}</h3>
              <p className={styles.cardText}>{it.text}</p>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>

    {/* Кроки + фото */}
    <section>
      <div className={`container ${styles.stepsGrid}`}>
        <div className={styles.container}>
          <Reveal><h2 className={styles.title}>{d.steps.title}</h2></Reveal>
          <ol className={styles.steps}>
            {d.steps.items.map((s, i) => (
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
        <Reveal className={styles.phone}>
          <Image src="/images/converus/verifeye-phone.webp" alt="VerifEye" width={900} height={1260} sizes="(max-width: 1023px) 60vw, 320px" />
        </Reveal>
      </div>
    </section>

    {/* Ціни */}
    <section id="prices" className={styles.white}>
      <div className={`container ${styles.container}`}>
        <Reveal>
          <h2 className={styles.title}>{d.prices.title}</h2>
          <p className={styles.subTitle}>{d.prices.note}</p>
        </Reveal>
        <ul className={styles.prices}>
          {d.prices.items.map((p, i) => (
            <Reveal as="li" key={p.name} delay={i * 0.08} className={`${styles.priceCard} ${p.featured ? styles.featured : ""}`}>
              <p className={styles.priceName}>{p.name}</p>
              <p className={styles.priceValue}>{p.price}</p>
              <p className={styles.cardText}>{p.desc}</p>
              <OpenModalBtn customClass={styles.btn} title={d.hero.primary} />
            </Reveal>
          ))}
        </ul>
        <Reveal><p className={styles.upgrade}>{d.prices.upgrade}</p></Reveal>
      </div>
    </section>

    {/* Коли підходить */}
    <section>
      <div className={`container ${styles.container}`}>
        <Reveal><h2 className={styles.title}>{d.fit.title}</h2></Reveal>
        <div className={styles.fit}>
          {[d.fit.good, d.fit.bad].map((col, i) => (
            <Reveal key={col.title} delay={i * 0.08} className={styles.fitCol}>
              <h3 className={styles.cardTitle}>{col.title}</h3>
              <ul className={styles.fitList}>
                {col.items.map((t) => (
                  <li key={t}>
                    <svg aria-hidden="true"><use href={i === 0 ? "/sprite.svg#icon-check-solid" : "/sprite.svg#icon-cross-in-circle"} /></svg>
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>

    {/* Вимоги */}
    <section className={styles.white}>
      <div className={`container ${styles.container}`}>
        <Reveal><h2 className={styles.title}>{d.requirements.title}</h2></Reveal>
        <ul className={styles.reqs}>
          {d.requirements.items.map((t, i) => (
            <Reveal as="li" key={t} delay={i * 0.04} className={styles.req}>
              <span className={styles.reqNum}>{i + 1}</span>
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

export default OnlineSections;
