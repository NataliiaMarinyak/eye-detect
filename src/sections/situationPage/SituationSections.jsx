import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal/Reveal";
import OpenModalBtn from "@/components/Buttons/OpenModalBtn/OpenModalBtn";
import ContentFaq from "@/components/ContentFaq/ContentFaq";
import { i18n } from "@/dictionaries/i18n.config";
import styles from "./SituationSections.module.scss";

const localHref = (lang, path) => (lang === i18n.defaultLocale ? path : `/${lang}${path}`);

// Секції сторінки ситуації. Дані: src/data/pages/situationsData.js
const SituationSections = ({ s, lang, others, dictionary }) => {
  const t = s.shared;
  return (
    <>
      {/* Як вирішує */}
      <section className={styles.white}>
        <div className={`container ${styles.container}`}>
          <Reveal>
            <h2 className={styles.title}>{t.howTitle}</h2>
          </Reveal>
          <ul className={s.how.length === 4 ? styles.cards2 : styles.cards3}>
            {s.how.map((it, i) => (
              <Reveal as="li" key={it.title} delay={i * 0.06} className={styles.card}>
                <h3 className={styles.cardTitle}>{it.title}</h3>
                <p className={styles.cardText}>{it.text}</p>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* Приклади питань */}
      <section>
        <div className={`container ${styles.container}`}>
          <Reveal>
            <h2 className={styles.title}>{t.questionsTitle}</h2>
            <p className={styles.subTitle}>{t.questionsNote}</p>
          </Reveal>
          <ul className={styles.questions}>
            {s.questions.map((q, i) => (
              <Reveal as="li" key={i} delay={i * 0.05} className={styles.question}>
                <span className={styles.qNum}>R{i + 1}</span>
                <p>{q}</p>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* Формат і ціна */}
      <section className={styles.white}>
        <div className={`container ${styles.container}`}>
          <Reveal>
            <h2 className={styles.title}>{t.formatTitle}</h2>
            <p className={styles.subTitle}>{t.priceNote}</p>
          </Reveal>
          <ul className={styles.formats}>
            {[t.online, t.office].map((f, i) => (
              <Reveal as="li" key={f.title} delay={i * 0.08} className={styles.format}>
                <h3 className={styles.cardTitle}>{f.title}</h3>
                <p className={styles.cardText}>{f.text}</p>
                <div className={styles.formatFooter}>
                  <p className={styles.price}>{f.price}</p>
                  {i === 0 ? (
                    <a href={`${lang === "uk" ? "" : "/" + lang}/online`} className={styles.btnSecondary}>{f.cta}</a>
                  ) : (
                    <OpenModalBtn customClass={styles.btnPrimary} title={f.cta} service={`EyeDetect · ${s.h1}`} />
                  )}
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* Зразок звіту */}
      <section>
        <div className={`container ${styles.reportGrid}`}>
          <Reveal>
            <h2 className={styles.title}>{t.reportTitle}</h2>
            <p className={styles.subTitle}>{dictionary.homeReport.subTitle}</p>
            <ul className={styles.points}>
              {dictionary.homeReport.points.map((p) => (
                <li key={p}>
                  <svg aria-hidden="true"><use href="/sprite.svg#icon-check-solid" /></svg>
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.1} className={styles.reportFigure}>
            <div className={styles.reportImg}>
              <Image src={s.report} alt={t.reportCaption} width={1488} height={1595} sizes="(max-width: 1023px) 100vw, 440px" />
            </div>
            <p className={styles.caption}>{t.reportCaption}</p>
          </Reveal>
        </div>
      </section>

      <ContentFaq items={s.faq} lang={lang} />

      {/* CTA */}
      <section className={styles.cta}>
        <div className={`container ${styles.ctaInner}`}>
          <Reveal>
            <h2 className={styles.ctaTitle}>{t.ctaTitle}</h2>
            <p className={styles.ctaText}>{t.ctaText}</p>
          </Reveal>
          <div className={styles.ctaActions}>
            <a href={`${lang === "uk" ? "" : "/" + lang}/online`} className={styles.ctaSecondary}>{dictionary.buttons.testOnline}</a>
            <OpenModalBtn customClass={styles.ctaPrimary} title={dictionary.buttons.orderConsultation} />
          </div>
        </div>
      </section>

      {/* Інші ситуації */}
      <section className={styles.white}>
        <div className={`container ${styles.container}`}>
          <h2 className={styles.titleSmall}>{t.otherTitle}</h2>
          <ul className={styles.others}>
            {others.map((o) => (
              <li key={o.slug}>
                <Link href={localHref(lang, `/situations/${o.slug}`)} className={styles.otherLink}>
                  <span className={styles.otherIcon}><svg aria-hidden="true"><use href={o.icon} /></svg></span>
                  <span>{o.nav}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
};

export default SituationSections;
