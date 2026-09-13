import PageHero from "@/sections/pageHero/PageHero";
import InfoSections from "@/sections/infoPage/InfoSections";
import { getConverusPage } from "@/data/pages/converusPage";
import { buildPageMetadata, breadcrumbsJsonLd } from "@/helpers/buildPageMetadata";

export async function generateMetadata({ params }) {
  const { lang } = params;
  const d = getConverusPage(lang);
  return buildPageMetadata({ lang, path: "converus", title: d.seo.title, description: d.seo.description, keywords: d.seo.keywords });
}

// Про розробника: історія, наука, протоколи, обладнання, порівняння методів.
const ConverusPage = ({ params }) => {
  const { lang } = params;
  const d = getConverusPage(lang);
  const crumbs = breadcrumbsJsonLd(lang, [["", d.seo.crumbHome], ["converus", d.seo.crumb]]);
  const org = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Converus, Inc.",
    url: "https://converus.com/",
    foundingDate: "2009",
    address: { "@type": "PostalAddress", streetAddress: "610 S 850 E, Ste 4", addressLocality: "Lehi", addressRegion: "UT", postalCode: "84043", addressCountry: "US" },
    brand: [{ "@type": "Brand", name: "EyeDetect" }, { "@type": "Brand", name: "VerifEye" }, { "@type": "Brand", name: "EyeDetect+" }],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(crumbs) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(org) }} />
      <PageHero eyebrow={d.hero.eyebrow} title={d.hero.h1} sub={d.hero.sub} facts={d.hero.facts} photo="/images/converus/eyedetect-station-front.webp" photoAlt="EyeDetect" />
      <InfoSections blocks={d.blocks} lang={lang} />
    </>
  );
};

export default ConverusPage;
