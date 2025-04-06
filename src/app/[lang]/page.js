import dynamic from "next/dynamic";
import HeroSection from "@/sections/homeSections/heroSection/HeroSection";
import { FAQDataHome } from "@/data/FAQDataHome";
import { getDictionary } from "@/helpers/getDictionary";
import { getSeoMetaPageUrl } from "@/helpers/getSeoMetaPageUrl";


const DynamicHomeAboutSection = dynamic(() =>
  import("@/sections/homeSections/homeAboutSection/HomeAboutSection")
);

const DynamicHomeCertificatesSection = dynamic(() =>
  import(
    "@/sections/homeSections/homeCertificatesSection/HomeCertificatesSection"
  )
);
const DynamicHomeAdvantagesSection = dynamic(() =>
  import("@/sections/homeSections/homeAdvantagesSection/HomeAdvantagesSection")
);
const DynamicHomeClientsSection = dynamic(() =>
  import("@/sections/homeSections/homeClientsSection/HomeClientsSection")
);
const DynamicHomeTestingSection = dynamic(() =>
  import("@/sections/homeSections/homeTestingSection/HomeTestingSection")
);
const DynamicHomeDirectionsSection = dynamic(() =>
  import("@/sections/homeSections/homeDirectionsSection/HomeDirectionsSection")
);
const DynamicHomeCountriesSection = dynamic(() =>
  import("@/sections/homeSections/homeCountriesSection/HomeCountriesSection")
);
const DynamicHomeFAQSection = dynamic(() =>
  import("@/sections/homeSections/homeFAQSection/HomeFAQSection")
);
const DynamicHomeConditionsSection = dynamic(() =>
  import("@/sections/homeSections/homeConditionsSection/HomeConditionsSection")
);

const DynamicHomeOrderSection = dynamic(() =>
  import("@/sections/homeSections/homeOrderSection/HomeOrderSection")
);

export async function generateMetadata({ params }) {
  const { lang } = params;
  const {seoMainPage} = await getDictionary(lang);

  const title = seoMainPage.seoMetaMainTitle;
  const description = seoMainPage.seoMetaMainDescription;
  const keywords = seoMainPage.seoMetaKeywords;
  const titleOpenGraph = seoMainPage.seoMetaTitleOpenGraph;
  const descriptionOpenGraph = seoMainPage.seoMetaDescriptionOpenGraph;

  const seoMetaPageUrl = getSeoMetaPageUrl(lang);

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: `${seoMetaPageUrl}`,
      languages: {
        'uk': `${process.env.NEXT_PUBLIC_SEO_URL}`,
        'ru': `${process.env.NEXT_PUBLIC_SEO_URL}ru/`,
      },
    },
    openGraph: {
      title: titleOpenGraph,
      url: `${seoMetaPageUrl}`,
      description: descriptionOpenGraph,
      siteName: "EyeDetect",
      type: "website",
      images: [
        {
          url: "images/seo_images/opengraph-image-400x300.png",
          type: "image/png",
          width: 400,
          height: 300,
          alt: "EyeDetect",
        },
        {
          url: "images/seo_images/twitter-image-800x600.png",
          type: "image/png",
          width: 800,
          height: 600,
          alt: "EyeDetect",
        },
        {
          url: "images/seo_images/opengraph-image-1200-630.png",
          type: "image/png",
          width: 1200,
          height: 630,
          alt: "EyeDetect",
        },
      ],
      locale: lang,
    },
  };
}

export default async function Home({ params }) {
  const { lang } = params;
  const {seoMainPage} = await getDictionary(lang);

  const pageUrlJsonLd = getSeoMetaPageUrl(lang);

  const name_01 = seoMainPage.seoMetaNameJsonLd_1;

  const jsonLd = {
    "@context": "http://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: {
      "@type": "ListItem",
      position: 1,
      item: {
        "@id": pageUrlJsonLd,
        name: name_01,
      },
    },
  };

  const dictionary = await getDictionary(lang);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HeroSection dictionary={dictionary} />
      <DynamicHomeAboutSection lang={lang} dictionary={dictionary} />
      <DynamicHomeCertificatesSection
        isOnHomePage={true}
        lang={lang}
        dictionary={dictionary}
      />
      <DynamicHomeAdvantagesSection lang={lang} dictionary={dictionary} />
      <DynamicHomeClientsSection lang={lang} dictionary={dictionary} />
      <DynamicHomeTestingSection lang={lang} />
      <DynamicHomeDirectionsSection lang={lang} dictionary={dictionary} />
      <DynamicHomeCountriesSection lang={lang} dictionary={dictionary} />
      <DynamicHomeFAQSection
        data={FAQDataHome}
        lang={lang}
        dictionary={dictionary}
      />
      <DynamicHomeConditionsSection dictionary={dictionary} />
      <DynamicHomeOrderSection lang={lang} dictionary={dictionary} />
    </>
  );
}
