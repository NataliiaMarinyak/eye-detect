import Link from "next/link";
import { blogShared, getPosts } from "@/data/pages/blogData";
import { buildPageMetadata, breadcrumbsJsonLd } from "@/helpers/buildPageMetadata";
import { i18n } from "@/dictionaries/i18n.config";
import styles from "./blog.module.scss";

const localHref = (lang, path) => (lang === i18n.defaultLocale ? path : `/${lang}${path}`);
const fmtDate = (d, lang) => new Date(d).toLocaleDateString(lang === "ru" ? "ru-RU" : "uk-UA", { day: "numeric", month: "long", year: "numeric" });

export async function generateMetadata({ params }) {
  const { lang } = params;
  const t = blogShared[lang] || blogShared.uk;
  return buildPageMetadata({ lang, path: "blog", title: t.title, description: t.sub });
}

const BlogPage = ({ params }) => {
  const { lang } = params;
  const t = blogShared[lang] || blogShared.uk;
  const posts = getPosts(lang);
  const crumbs = breadcrumbsJsonLd(lang, [["", t.crumbHome], ["blog", t.crumb]]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(crumbs) }} />
      <section className={styles.section}>
        <div className={`container ${styles.container}`}>
          <h1 className={styles.title}>{t.title}</h1>
          <p className={styles.sub}>{t.sub}</p>
          <ul className={styles.list}>
            {posts.map((p) => (
              <li key={p.slug} className={styles.card}>
                <p className={styles.date}>{fmtDate(p.date, lang)}</p>
                <h2 className={styles.cardTitle}>
                  <Link href={localHref(lang, `/blog/${p.slug}`)}>{p.title}</Link>
                </h2>
                <p className={styles.cardText}>{p.description}</p>
                <Link className={styles.more} href={localHref(lang, `/blog/${p.slug}`)}>{t.readMore}</Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
};

export default BlogPage;
