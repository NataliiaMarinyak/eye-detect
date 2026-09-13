import Link from "next/link";
import { notFound } from "next/navigation";
import OpenModalBtn from "@/components/Buttons/OpenModalBtn/OpenModalBtn";
import ContentFaq from "@/components/ContentFaq/ContentFaq";
import { blogPosts, blogShared, getPost, getPosts } from "@/data/pages/blogData";
import { getContentFaqJsonLd } from "@/helpers/getContentFaqJsonLd";
import { buildPageMetadata, breadcrumbsJsonLd } from "@/helpers/buildPageMetadata";
import { getSeoMetaPageUrl } from "@/helpers/getSeoMetaPageUrl";
import { i18n } from "@/dictionaries/i18n.config";
import styles from "../blog.module.scss";

const localHref = (lang, path) => (lang === i18n.defaultLocale ? path : `/${lang}${path}`);

export async function generateStaticParams() {
  return i18n.locales.flatMap((lang) => blogPosts.map((p) => ({ lang, slug: p.slug })));
}

export async function generateMetadata({ params }) {
  const { lang, slug } = params;
  const p = getPost(slug, lang);
  if (!p) return {};
  return buildPageMetadata({ lang, path: `blog/${slug}`, title: p.title, description: p.description });
}

const PostPage = ({ params }) => {
  const { lang, slug } = params;
  const p = getPost(slug, lang);
  if (!p) notFound();
  const t = blogShared[lang] || blogShared.uk;
  const others = getPosts(lang).filter((x) => x.slug !== slug).slice(0, 3);

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
                {s.paragraphs.map((para, i) => <p key={i}>{para}</p>)}
                {s.list && (
                  <ul>
                    {s.list.map((li) => <li key={li}><span>{li}</span></li>)}
                  </ul>
                )}
              </div>
            ))}
          </div>
          {others.length > 0 && (
            <div className={styles.related}>
              <h2 className={styles.relatedTitle}>{t.related}</h2>
              <ul className={styles.relatedList}>
                {others.map((o) => (
                  <li key={o.slug}><Link href={localHref(lang, `/blog/${o.slug}`)}>{o.title}</Link></li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </article>
      {p.faq && <ContentFaq items={p.faq} lang={lang} />}
      <section className={styles.cta}>
        <div className={`container ${styles.ctaInner}`}>
          <div>
            <h2 className={styles.ctaTitle}>{t.ctaTitle}</h2>
            <p className={styles.ctaText}>{t.ctaText}</p>
          </div>
          <div className={styles.ctaActions}>
            <a href={localHref(lang, "/online")} className={styles.ctaSecondary}>{t.ctaOnline}</a>
            <OpenModalBtn customClass={styles.ctaPrimary} title={t.ctaBook} />
          </div>
        </div>
      </section>
    </>
  );
};

export default PostPage;
