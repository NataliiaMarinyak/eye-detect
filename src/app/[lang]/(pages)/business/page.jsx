import PageHero from "@/sections/pageHero/PageHero";
import BusinessSections from "@/sections/businessPage/BusinessSections";
import { getBusinessPage } from "@/data/pages/businessPage";
import { getDictionary } from "@/helpers/getDictionary";
import { getContentFaqJsonLd } from "@/helpers/getContentFaqJsonLd";
import { buildPageMetadata, breadcrumbsJsonLd } from "@/helpers/buildPageMetadata";

export async function generateMetadata({ params }) {
  const { lang } = params;
  const d = getBusinessPage(lang);
  return buildPageMetadata({ lang, path: "business", title: d.seo.title, description: d.seo.description, keywords: d.seo.keywords });
}

const BusinessPage = async ({ params }) => {
  const { lang } = params;
  const d = getBusinessPage(lang);
  const dictionary = await getDictionary(lang);
  const crumbs = breadcrumbsJsonLd(lang, [["", d.seo.crumbHome], ["business", d.seo.crumb]]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(crumbs) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(getContentFaqJsonLd(d.faq)) }} />
      <PageHero
        eyebrow={d.hero.eyebrow}
        title={d.hero.h1}
        sub={d.hero.sub}
        facts={d.hero.facts}
        primary={d.hero.primary}
        service="EyeDetect для бізнесу"
        photo="/images/converus/eyedetect-examinee.webp"
        photoAlt={d.hero.h1}
      />
      <BusinessSections d={d} lang={lang} dictionary={dictionary} />
    </>
  );
};

export default BusinessPage;
