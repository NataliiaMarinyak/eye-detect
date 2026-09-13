import Image from "next/image";
import Reveal from "@/components/Reveal/Reveal";
import OpenModalBtn from "@/components/Buttons/OpenModalBtn/OpenModalBtn";
import ContentFaq from "@/components/ContentFaq/ContentFaq";
import styles from "./EyedetectSections.module.scss";

// Секції сторінки /eyedetect. Дані: src/data/pages/eyedetectPage.js
const EyedetectSections = ({ d, lang }) => (
  <>
    {/* Що фіксує */}
    <section className={styles.white}>
      <div className={`container ${styles.container}`}>
        <Reveal>
          <h2 className={styles.title}>{d.how.title}</h2>
        </Reveal>
        <div className={styles.howGrid}>
          <ul className={styles.cards3}>
            {d.how.items.map((it, i) => (
              <Reveal as="li" key={it.title} delay={i * 0.06} className={styles.card}>
                <h3 className={styles.cardTitle}>{it.title}</h3>
                <p className={styles.cardText}>{it.text}</p>
              </Reveal>
            ))}
          </ul>
          <Reveal className={styles.stationPhoto}>
            <Image
              src="/images/converus/eyedetect-station.webp"
              alt="EyeDetect"
              width={1000}
              height={1125}
              sizes="(max-width: 1023px) 100vw, 380px"
            />
          </Reveal>
        </div>
      </div>
    </section>

    {/* Кроки */}
    <section>
      <div className={`container ${styles.container}`}>
        <Reveal>
          <h2 className={styles.title}>{d.process.title}</h2>
        </Reveal>
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
    </section>

    {/* Порівняння */}
    <section className={styles.white}>
      <div className={`container ${styles.container}`}>
        <Reveal>
          <h2 className={styles.title}>{d.compare.title}</h2>
          <p className={styles.subTitle}>{d.compare.sub}</p>
        </Reveal>
        <Reveal className={styles.tableWrap}>
          <table className={styles.table}>
            <thead>
              <tr>
                {d.compare.columns.map((c, i) => (
                  <th key={i} scope="col">{c}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {d.compare.rows.map((r) => (
                <tr key={r[0]}>
                  <th scope="row">{r[0]}</th>
                  {r.slice(1).map((c, i) => (
                    <td key={i}>{c}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </Reveal>
        <p className={styles.tableHint}>{lang === "uk" ? "Гортайте таблицю вбік →" : "Листайте таблицу вбок →"}</p>
      </div>
    </section>

    {/* Обмеження */}
    <section>
      <div className={`container ${styles.container}`}>
        <Reveal>
          <h2 className={styles.title}>{d.limits.title}</h2>
        </Reveal>
        <ul className={styles.limits}>
          {d.limits.items.map((t, i) => (
            <Reveal as="li" key={i} delay={i * 0.04} className={styles.limit}>
              <span className={styles.limitNum}>{i + 1}</span>
              <p>{t}</p>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>

    {/* Асоціації та хибні результати */}
    {d.focus && (
      <section>
        <div className={`container ${styles.container}`}>
          <Reveal className={styles.science}>
            <h2 className={styles.title}>{d.focus.title}</h2>
            {d.focus.paragraphs.map((t, i) => (
              <p key={i} className={styles.scienceText}>{t}</p>
            ))}
          </Reveal>
        </div>
      </section>
    )}

    {/* Наука */}
    <section className={styles.white}>
      <div className={`container ${styles.container}`}>
        <Reveal className={styles.science}>
          <h2 className={styles.title}>{d.science.title}</h2>
          <p className={styles.scienceText}>{d.science.text}</p>
          <ul className={styles.links}>
            {d.science.links.map((l) => (
              <li key={l.href}>
                {l.href.startsWith("/") ? (
                  <a href={`${lang === "uk" ? "" : "/" + lang}${l.href}`}>{l.label}</a>
                ) : (
                  <a href={l.href} target="_blank" rel="noopener noreferrer">
                    {l.label}
                  </a>
                )}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>

    {/* FAQ */}
    <ContentFaq items={d.faq} lang={lang} />

    {/* CTA */}
    <section className={styles.cta}>
      <div className={`container ${styles.ctaInner}`}>
        <Reveal>
          <h2 className={styles.ctaTitle}>{d.cta.title}</h2>
          <p className={styles.ctaText}>{d.cta.text}</p>
        </Reveal>
        <div className={styles.ctaActions}>
          <a href={`${lang === "uk" ? "" : "/" + lang}/online`} className={styles.ctaSecondary}>
            {d.cta.online}
          </a>
          <OpenModalBtn customClass={styles.ctaPrimary} title={d.cta.book} service="EyeDetect" />
        </div>
      </div>
    </section>
  </>
);

export default EyedetectSections;
