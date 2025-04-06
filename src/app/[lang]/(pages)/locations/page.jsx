import dynamic from "next/dynamic";
import LocationSection from "@/sections/locationSection/LocationSection";
import { getDictionary } from "@/helpers/getDictionary";
// import { i18n } from "@/dictionaries/i18n.config";
import { getSeoMetaPageUrl } from "@/helpers/getSeoMetaPageUrl";

const DynamicUkrainianCitiesSection = dynamic(() =>
  import("@/sections/ukrainianCitiesSection/UkrainianCitiesSection")
);

const DynamicEuropeanCitiesSection = dynamic(() =>
  import("@/sections/europeanCitiesSection/EuropeanCitiesSection")
);

export async function generateMetadata({ params }) {
  const { lang } = params;
  const {seoLocationsPage} = await getDictionary(lang);

  const title = seoLocationsPage.seoMetaMainTitle;
  const description = seoLocationsPage.seoMetaMainDescription;
  const keywords = seoLocationsPage.seoMetaKeywords;
  const titleOpenGraph = seoLocationsPage.seoMetaTitleOpenGraph;
  const descriptionOpenGraph = seoLocationsPage.seoMetaDescriptionOpenGraph;

  const seoMetaPageUrl = getSeoMetaPageUrl(lang);

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: `${seoMetaPageUrl}locations`,
      languages: {
        'uk': `${process.env.NEXT_PUBLIC_SEO_URL}locations`,
        'ru': `${process.env.NEXT_PUBLIC_SEO_URL}ru/locations`,
      },
    },
    openGraph: {
      title: titleOpenGraph,
      url: `${seoMetaPageUrl}locations`,
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

const LocationsPage = async ({ params }) => {
  const { lang } = params;
  const dictionary = await getDictionary(lang);
  const {seoLocationsPage} = await getDictionary(lang);

  const pageUrlJsonLd = getSeoMetaPageUrl(lang);

  const name_01 = seoLocationsPage.seoMetaNameJsonLd_1;
  const name_02 = seoLocationsPage.seoMetaNameJsonLd_2;

  const jsonLd = {
    "@context": "http://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        item: {
          "@id": pageUrlJsonLd,
          name: name_01,
        },
      },
      {
        "@type": "ListItem",
        position: 2,
        item: {
          "@id": `${pageUrlJsonLd}locations`,
          name: name_02,
        },
      },
    ],
  };
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <LocationSection lang={lang} dictionary={dictionary} />
      <DynamicUkrainianCitiesSection lang={lang} dictionary={dictionary} />
      <DynamicEuropeanCitiesSection lang={lang} dictionary={dictionary} />
    </>
  );
};

export default LocationsPage;
