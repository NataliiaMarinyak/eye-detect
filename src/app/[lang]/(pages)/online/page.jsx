import PageHero from "@/sections/pageHero/PageHero";
import OnlineSections from "@/sections/onlinePage/OnlineSections";
import { getOnlinePage } from "@/data/pages/onlinePage";
import { getDictionary } from "@/helpers/getDictionary";
import { getContentFaqJsonLd } from "@/helpers/getContentFaqJsonLd";
import { buildPageMetadata, breadcrumbsJsonLd } from "@/helpers/buildPageMetadata";
import { getSeoMetaPageUrl } from "@/helpers/getSeoMetaPageUrl";

export async function generateMetadata({ params }) {
  const { lang } = params;
  const d = getOnlinePage(lang);
  return buildPageMetadata({ lang, path: "online", title: d.seo.title, description: d.seo.description, keywords: d.seo.keywords });
}

const OnlinePage = async ({ params }) => {
  const { lang } = params;
  const d = getOnlinePage(lang);
  const dictionary = await getDictionary(lang);

  const crumbs = breadcrumbsJsonLd(lang, [["", d.seo.crumbHome], ["online", d.seo.crumb]]);
  const product = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "VerifEye",
    description: d.seo.description,
    brand: { "@type": "Brand", name: "Converus" },
    offers: [
      { "@type": "Offer", price: 2500, priceCurrency: "UAH", availability: "https://schema.org/InStock", url: `${getSeoMetaPageUrl(lang)}online`, seller: { "@id": `${process.env.NEXT_PUBLIC_SEO_URL}#business` } },
      { "@type": "Offer", price: 4000, priceCurrency: "UAH", availability: "https://schema.org/InStock", url: `${getSeoMetaPageUrl(lang)}online`, seller: { "@id": `${process.env.NEXT_PUBLIC_SEO_URL}#business` } },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(crumbs) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(product) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(getContentFaqJsonLd(d.faq)) }} />
      <PageHero
        eyebrow={d.hero.eyebrow}
        title={d.hero.h1}
        sub={d.hero.sub}
        facts={d.hero.facts}
        primary={d.hero.primary}
        service="VerifEye онлайн"
        photo="/images/converus/verifeye-test.webp"
        photoAlt="VerifEye"
      />
      <OnlineSections d={d} lang={lang} dictionary={dictionary} />
    </>
  );
};

export default OnlinePage;
