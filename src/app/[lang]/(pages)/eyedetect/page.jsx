import PageHero from "@/sections/pageHero/PageHero";
import EyedetectSections from "@/sections/eyedetectPage/EyedetectSections";
import { getContentFaqJsonLd } from "@/helpers/getContentFaqJsonLd";
import { getEyedetectPage } from "@/data/pages/eyedetectPage";
import { getDictionary } from "@/helpers/getDictionary";
import { buildPageMetadata, breadcrumbsJsonLd } from "@/helpers/buildPageMetadata";

export async function generateMetadata({ params }) {
  const { lang } = params;
  const d = getEyedetectPage(lang);
  return buildPageMetadata({
    lang,
    path: "eyedetect",
    title: d.seo.title,
    description: d.seo.description,
    keywords: d.seo.keywords,
  });
}

const EyedetectPage = async ({ params }) => {
  const { lang } = params;
  const d = getEyedetectPage(lang);
  const dictionary = await getDictionary(lang);

  const crumbs = breadcrumbsJsonLd(lang, [
    ["", d.seo.crumbHome],
    ["eyedetect", d.seo.crumb],
  ]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(crumbs) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(getContentFaqJsonLd(d.faq)) }} />
      <PageHero
        eyebrow={d.hero.eyebrow}
        title={d.hero.h1}
        sub={d.hero.sub}
        facts={d.hero.facts}
        primary={dictionary.buttons.bookLviv}
        secondaryHref={`${lang === "uk" ? "" : "/" + lang}/online`}
        secondaryLabel={dictionary.buttons.testOnline}
        photo="/images/converus/eyedetect-examinee.webp"
        photoAlt="EyeDetect"
      />
      <EyedetectSections d={d} lang={lang} />
    </>
  );
};

export default EyedetectPage;
