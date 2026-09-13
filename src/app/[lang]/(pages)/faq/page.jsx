import PageHero from "@/sections/pageHero/PageHero";
import ContentFaq from "@/components/ContentFaq/ContentFaq";
import OpenModalBtn from "@/components/Buttons/OpenModalBtn/OpenModalBtn";
import { getContentFaqJsonLd } from "@/helpers/getContentFaqJsonLd";
import { getFaqPage, getFaqItems } from "@/data/pages/faqPage";
import { buildPageMetadata, breadcrumbsJsonLd } from "@/helpers/buildPageMetadata";
import styles from "./faq.module.scss";

export async function generateMetadata({ params }) {
  const { lang } = params;
  const d = getFaqPage(lang);
  return buildPageMetadata({
    lang,
    path: "faq",
    title: d.seo.title,
    description: d.seo.description,
    keywords: d.seo.keywords,
  });
}

// База знань: усі питання про EyeDetect, VerifEye і поліграф, згруповані за темами.
const FaqPage = ({ params }) => {
  const { lang } = params;
  const d = getFaqPage(lang);
  const crumbs = breadcrumbsJsonLd(lang, [["", d.seo.crumbHome], ["faq", d.seo.crumb]]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(crumbs) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(getContentFaqJsonLd(getFaqItems(lang))) }} />
      <PageHero eyebrow={d.hero.eyebrow} title={d.hero.h1} sub={d.hero.sub} facts={d.hero.facts} />

      <nav className={styles.toc} aria-label={d.seo.crumb}>
        <div className={`container ${styles.tocInner}`}>
          {d.sections.map((s, i) => (
            <a key={s.title} href={`#faq-${i}`} className={styles.tocLink}>{s.title}</a>
          ))}
        </div>
      </nav>

      {d.sections.map((s, i) => (
        <div key={s.title} id={`faq-${i}`} className={styles.group}>
          <ContentFaq items={s.items} lang={lang} title={s.title} />
        </div>
      ))}

      <section className={styles.cta}>
        <div className={`container ${styles.ctaInner}`}>
          <h2 className={styles.ctaTitle}>{d.cta.title}</h2>
          <p className={styles.ctaText}>{d.cta.text}</p>
          <OpenModalBtn customClass={styles.ctaBtn} title={d.cta.button} service="EyeDetect" />
        </div>
      </section>
    </>
  );
};

export default FaqPage;
