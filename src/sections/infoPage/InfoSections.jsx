import Reveal from "@/components/Reveal/Reveal";
import OpenModalBtn from "@/components/Buttons/OpenModalBtn/OpenModalBtn";
import { i18n } from "@/dictionaries/i18n.config";
import styles from "./InfoSections.module.scss";

// Універсальний рендер інформаційних сторінок (/converus, /for/*).
// blocks: масив блоків різних типів; дані лежать у src/data/pages/*.
const localHref = (lang, path) => (path.startsWith("/") && lang !== i18n.defaultLocale ? `/${lang}${path}` : path);

const Head = ({ title, sub, small }) =>
  title || sub ? (
    <Reveal>
      {title && <h2 className={small ? styles.titleSmall : styles.title}>{title}</h2>}
      {sub && <p className={styles.subTitle}>{sub}</p>}
    </Reveal>
  ) : null;

const Block = ({ b, lang }) => {
  switch (b.type) {
    case "text":
      return (
        <section className={b.tone === "white" ? styles.white : ""}>
          <div className={`container ${styles.container} ${styles.narrow}`}>
            <Head title={b.title} sub={b.sub} />
            <Reveal className={styles.prose}>
              {b.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </Reveal>
          </div>
        </section>
      );
    case "cards":
      return (
        <section className={b.tone === "white" ? styles.white : ""}>
          <div className={`container ${styles.container}`}>
            <Head title={b.title} sub={b.sub} />
            <ul className={b.cols === 2 ? styles.cards2 : styles.cards3}>
              {b.items.map((it, i) => (
                <Reveal as="li" key={it.title} delay={i * 0.06} className={styles.card}>
                  {it.badge && <p className={styles.badge}>{it.badge}</p>}
                  <h3 className={styles.cardTitle}>{it.title}</h3>
                  <p className={styles.cardText}>{it.text}</p>
                  {it.href && (
                    <a href={localHref(lang, it.href)} className={styles.cardLink}>
                      {{ uk: "Детальніше", ru: "Подробнее", en: "Learn more" }[lang] || "Детальніше"}
                    </a>
                  )}
                </Reveal>
              ))}
            </ul>
          </div>
        </section>
      );
    case "steps":
      return (
        <section className={b.tone === "white" ? styles.white : ""}>
          <div className={`container ${styles.container}`}>
            <Head title={b.title} sub={b.sub} />
            <ol className={styles.steps}>
              {b.items.map((it, i) => (
                <Reveal as="li" key={it.title} delay={i * 0.06} className={styles.step}>
                  <span className={styles.stepNum}>{String(i + 1).padStart(2, "0")}</span>
                  <div>
                    <h3 className={styles.stepTitle}>{it.title}</h3>
                    <p className={styles.stepText}>{it.text}</p>
                  </div>
                </Reveal>
              ))}
            </ol>
          </div>
        </section>
      );
    case "list":
      return (
        <section className={b.tone === "white" ? styles.white : ""}>
          <div className={`container ${styles.container}`}>
            <Head title={b.title} sub={b.sub} />
            <Reveal as="ul" className={b.cols === 2 ? styles.list2 : styles.list3}>
              {b.items.map((t) => (
                <li key={t} className={styles.listItem}>
                  <svg aria-hidden="true">
                    <use href="/sprite.svg#icon-check-solid" />
                  </svg>
                  <span>{t}</span>
                </li>
              ))}
            </Reveal>
          </div>
        </section>
      );
    case "table":
      return (
        <section className={b.tone === "white" ? styles.white : ""}>
          <div className={`container ${styles.container}`}>
            <Head title={b.title} sub={b.sub} />
            <Reveal className={styles.tableWrap}>
              <table className={styles.table}>
                <thead>
                  <tr>
                    {b.columns.map((c, i) => (
                      <th key={i} scope="col">{c}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {b.rows.map((r) => (
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
            <p className={styles.tableHint}>{{ uk: "Гортайте таблицю вбік →", ru: "Листайте таблицу вбок →", en: "Scroll the table sideways →" }[lang]}</p>
            {b.note && <p className={styles.note}>{b.note}</p>}
          </div>
        </section>
      );
    case "timeline":
      return (
        <section className={b.tone === "white" ? styles.white : ""}>
          <div className={`container ${styles.container}`}>
            <Head title={b.title} sub={b.sub} />
            <ol className={styles.timeline}>
              {b.items.map((it, i) => (
                <Reveal as="li" key={it.year + it.text.slice(0, 10)} delay={i * 0.04} className={styles.tlItem}>
                  <span className={styles.tlYear}>{it.year}</span>
                  <p className={styles.tlText}>{it.text}</p>
                </Reveal>
              ))}
            </ol>
          </div>
        </section>
      );
    case "stats":
      return (
        <section className={styles.statsSection}>
          <div className="container">
            <ul className={styles.stats}>
              {b.items.map((it) => (
                <li key={it.label} className={styles.stat}>
                  <span className={styles.statValue}>{it.value}</span>
                  <span className={styles.statLabel}>{it.label}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>
      );
    case "quote":
      return (
        <section>
          <div className={`container ${styles.container} ${styles.narrow}`}>
            <Reveal as="blockquote" className={styles.quote}>
              <p>{b.text}</p>
              <footer>{b.author}</footer>
            </Reveal>
          </div>
        </section>
      );
    case "cta":
      return (
        <section className={styles.cta}>
          <div className={`container ${styles.ctaInner}`}>
            <h2 className={styles.ctaTitle}>{b.title}</h2>
            <p className={styles.ctaText}>{b.text}</p>
            <div className={styles.ctaActions}>
              <OpenModalBtn customClass={styles.ctaPrimary} title={b.button} service={b.service || ""} />
              {b.secondaryHref && (
                <a href={localHref(lang, b.secondaryHref)} className={styles.ctaSecondary}>
                  {b.secondaryLabel}
                </a>
              )}
            </div>
          </div>
        </section>
      );
    default:
      return null;
  }
};

const InfoSections = ({ blocks = [], lang = "uk" }) => (
  <>
    {blocks.map((b, i) => (
      <Block key={i} b={b} lang={lang} />
    ))}
  </>
);

export default InfoSections;
