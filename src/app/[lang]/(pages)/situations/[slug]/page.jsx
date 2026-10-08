import { notFound } from "next/navigation";
import PageHero from "@/sections/pageHero/PageHero";
import SituationSections from "@/sections/situationPage/SituationSections";
import { situations, getSituation, getSituationsList } from "@/data/pages/situationsData";
import { getPostsBySituation } from "@/data/pages/blogData";
import { getDictionary } from "@/helpers/getDictionary";
import { getContentFaqJsonLd } from "@/helpers/getContentFaqJsonLd";
import { buildPageMetadata, breadcrumbsJsonLd } from "@/helpers/buildPageMetadata";
import { i18n } from "@/dictionaries/i18n.config";

export async function generateStaticParams() {
  return i18n.locales.flatMap((lang) => situations.map((s) => ({ lang, slug: s.slug })));
}

export async function generateMetadata({ params }) {
  const { lang, slug } = params;
  const s = getSituation(slug, lang);
  if (!s) return {};
  return buildPageMetadata({
    lang,
    path: `situations/${slug}`,
    title: s.seo.title,
    description: s.seo.description,
    keywords: s.seo.keywords,
  });
}

const SituationPage = async ({ params }) => {
  const { lang, slug } = params;
  const s = getSituation(slug, lang);
  if (!s) notFound();
  const dictionary = await getDictionary(lang);
  const others = getSituationsList(lang).filter((x) => x.slug !== slug);
  // Статті блогу про цю ситуацію; якщо їх немає, блок «Статті на цю тему» не показується.
  const posts = getPostsBySituation(slug, lang).map((p) => ({ slug: p.slug, title: p.title }));

  const crumbs = breadcrumbsJsonLd(lang, [
    ["", s.shared.crumbHome],
    [`situations/${slug}`, s.nav],
  ]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(crumbs) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(getContentFaqJsonLd(s.faq)) }} />
      <PageHero
        eyebrow={s.shared.crumbSection}
        title={s.h1}
        sub={s.sub}
        facts={s.facts}
        primary={dictionary.buttons.orderConsultation}
        service={`EyeDetect · ${s.h1}`}
        secondaryHref={`${lang === "uk" ? "" : "/" + lang}/online`}
        secondaryLabel={dictionary.buttons.testOnline}
      />
      <SituationSections s={s} lang={lang} others={others} posts={posts} dictionary={dictionary} />
    </>
  );
};

export default SituationPage;
