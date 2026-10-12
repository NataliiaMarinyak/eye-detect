import Link from "next/link";
import { notFound } from "next/navigation";
import OpenModalBtn from "@/components/Buttons/OpenModalBtn/OpenModalBtn";
import ContentFaq from "@/components/ContentFaq/ContentFaq";
import { blogPosts, blogShared, getPost, getRelatedPosts } from "@/data/pages/blogData";
import { keepNumbers } from "@/data/pages/cityTexts";
import { getSituationsList } from "@/data/pages/situationsData";
import { getContentFaqJsonLd } from "@/helpers/getContentFaqJsonLd";
import { buildPageMetadata, breadcrumbsJsonLd } from "@/helpers/buildPageMetadata";
import { getSeoMetaPageUrl } from "@/helpers/getSeoMetaPageUrl";
import { i18n } from "@/dictionaries/i18n.config";
import styles from "../blog.module.scss";

const localHref = (lang, path) => (lang === i18n.defaultLocale ? path : `/${lang}${path}`);
// Адреса сторінки сайту починається з «/»: у даних статті її пишемо без мови, префікс додається тут.
const isInternal = (href) => typeof href === "string" && href.startsWith("/");

export async function generateStaticParams() {
  return i18n.locales.flatMap((lang) => blogPosts.map((p) => ({ lang, slug: p.slug })));
}

export async function generateMetadata({ params }) {
  const { lang, slug } = params;
  const p = getPost(slug, lang);
  if (!p) return {};
  return buildPageMetadata({ lang, path: `blog/${slug}`, title: p.seoTitle || p.title, description: p.seoDescription || p.description });
}

const PostPage = ({ params }) => {
  const { lang, slug } = params;
  const p = getPost(slug, lang);
  if (!p) notFound();
  const t = blogShared[lang] || blogShared.uk;
  // «Ще з блогу»: у кожної статті свій набір (див. getRelatedPosts), а не три найновіші на всіх.
  const others = getRelatedPosts(slug, lang);
  // Сторінка ситуації, про яку ця стаття (поле situation у даних статті).
  const topic = p.situation ? getSituationsList(lang).find((x) => x.slug === p.situation) : null;

  const crumbs = breadcrumbsJsonLd(lang, [["", t.crumbHome], ["blog", t.crumb], [`blog/${slug}`, p.title]]);
  const article = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: p.h1,
    description: p.description,
    datePublished: p.date,
    dateModified: p.date,
    inLanguage: lang,
    mainEntityOfPage: `${getSeoMetaPageUrl(lang)}blog/${slug}`,
    author: { "@type": "Person", name: "Наталя Мариняк" },
    publisher: { "@type": "Organization", name: "EyeDetect Lviv", url: process.env.NEXT_PUBLIC_SEO_URL },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(crumbs) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(article) }} />
      {p.faq && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(getContentFaqJsonLd(p.faq)) }} />}
      <article className={styles.article}>
        <div className={`container ${styles.articleInner}`}>
          <nav className={styles.crumbs} aria-label="breadcrumb">
            <Link href={localHref(lang, "/")}>{t.crumbHome}</Link>
            <span>/</span>
            <Link href={localHref(lang, "/blog")}>{t.crumb}</Link>
          </nav>
          <h1 className={styles.h1}>{p.h1}</h1>
          <p className={styles.lead}>{p.lead}</p>
          <div className={styles.prose}>
            {p.sections.map((s) => (
              <div key={s.h2}>
                <h2>{s.h2}</h2>
                {/* keepNumbers: лише для тексту на екрані, щоб «12 000 ₴» не розривалось між рядками. */}
                {s.paragraphs.map((para, i) => <p key={i}>{keepNumbers(para)}</p>)}
                {s.list && (
                  <ul>
                    {s.list.map((li) => <li key={li}><span>{keepNumbers(li)}</span></li>)}
                  </ul>
                )}
                {s.links?.length > 0 && (
                  <div className={styles.sectionLinks}>
                    {s.links.map((l) =>
                      isInternal(l.href) ? (
                        <a key={l.href} href={localHref(lang, l.href)}>{l.text}</a>
                      ) : (
                        <a key={l.href} href={l.href} target="_blank" rel="noopener noreferrer">{l.text}</a>
                      )
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
          {topic && (
            <p className={styles.topic}>
              <span className={styles.topicLabel}>{t.situationLabel}:{" "}</span>
              <a href={localHref(lang, `/situations/${topic.slug}`)} className={styles.topicLink}>{topic.h1}</a>
            </p>
          )}
        </div>
      </article>
      {/* Питання цієї статті стоять перед «Ще з блогу»: вони продовжують текст, а список веде з нього геть. */}
      {p.faq && <ContentFaq items={p.faq} lang={lang} />}
      {others.length > 0 && (
        <section className={styles.relatedSection}>
          <div className={`container ${styles.articleInner}`}>
            <div className={p.faq ? `${styles.related} ${styles.relatedAfterFaq}` : styles.related}>
              <h2 className={styles.relatedTitle}>{t.related}</h2>
              <ul className={styles.relatedList}>
                {others.map((o) => (
                  <li key={o.slug}><Link href={localHref(lang, `/blog/${o.slug}`)}>{o.title}</Link></li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      )}
      <section className={styles.cta}>
        <div className={`container ${styles.ctaInner}`}>
          <div>
            <h2 className={styles.ctaTitle}>{t.ctaTitle}</h2>
            <p className={styles.ctaText}>{t.ctaText}</p>
          </div>
          <div className={styles.ctaActions}>
            <a href={localHref(lang, "/online")} className={styles.ctaSecondary}>{t.ctaOnline}</a>
            {/* service — «Питання за статтею · заголовок статті»: голий заголовок після слова «Послуга» читався б як назва послуги. У заявці й далі видно, з якої статті прийшла людина. */}
            <OpenModalBtn customClass={styles.ctaPrimary} title={t.ctaBook} service={t.ctaService ? `${t.ctaService} · ${p.h1}` : p.h1} />
          </div>
        </div>
      </section>
    </>
  );
};

export default PostPage;
