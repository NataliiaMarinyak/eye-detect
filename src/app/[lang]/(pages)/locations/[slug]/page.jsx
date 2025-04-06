import MachineSection from "@/sections/machineSection/MachineSection";
import { FAQData } from "@/data/FAQData";
// import { cookies } from "next/headers";
import { getCityData } from "@/helpers/getCityData";
import dynamic from "next/dynamic";
import { getDictionary } from "@/helpers/getDictionary";
import { i18n } from "@/dictionaries/i18n.config";
import { getSeoMetaPageUrl } from "@/helpers/getSeoMetaPageUrl";

const DynamicServicesSection = dynamic(() =>
  import("@/sections/servicesSection/ServicesSection")
);

const DynamicTownsSection = dynamic(() =>
  import("@/sections/townsSection/TownsSection")
);

const DynamicVideoSection = dynamic(() =>
  import("@/sections/videoSection/VideoSection")
);

const DynamicGuaranteeSection = dynamic(() =>
  import("@/sections/guaranteeSection/GuaranteeSection")
);

const DynamicHomeFAQSection = dynamic(() =>
  import("@/sections/homeSections/homeFAQSection/HomeFAQSection")
);

const DynamicHomeConditionsSection = dynamic(() =>
  import("@/sections/homeSections/homeConditionsSection/HomeConditionsSection")
);

export async function generateMetadata({ params }) {
  const { slug, lang } = params;
  // console.log("params", params);
  // const language = cookies().get("language")?.value || "uk";
  const {seoLocationIdPage} = await getDictionary(lang);

  const data = getCityData(slug);

  const title = lang === i18n.defaultLocale ? data.mainTitle : data.mainTitleRus;
  const description =
    lang === i18n.defaultLocale ? data.mainDescription : data.mainDescriptionRus;
    const keywords = seoLocationIdPage.seoMetaKeywords;
    const titleOpenGraph = seoLocationIdPage.seoMetaTitleOpenGraph;
    const descriptionOpenGraph = seoLocationIdPage.seoMetaDescriptionOpenGraph;
  
    const seoMetaPageUrl = getSeoMetaPageUrl(lang);

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: `${seoMetaPageUrl}locations/${slug}`,
      languages: {
        'uk': `${process.env.NEXT_PUBLIC_SEO_URL}locations/${slug}`,
        'ru': `${process.env.NEXT_PUBLIC_SEO_URL}ru/locations/${slug}`,
      },
    },
    openGraph: {
      title: titleOpenGraph,
      url: `${seoMetaPageUrl}locations/${slug}`,
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

const LocationIdPage = async ({ params }) => {
  const { lang } = params;
  const dictionary = await getDictionary(lang);
  const slugId = params?.slug;
  const dataId = getCityData(slugId);
  const {seoLocationIdPage} = await getDictionary(lang);

  const pageUrlJsonLd = getSeoMetaPageUrl(lang);

  const name_01 = seoLocationIdPage.seoMetaNameJsonLd_1;
  const name_02 = seoLocationIdPage.seoMetaNameJsonLd_2;
  const name_03 = seoLocationIdPage.seoMetaNameJsonLd_3;

  const cityIdName = lang === i18n.defaultLocale ? dataId?.city : dataId?.cityRus;

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
      {
        "@type": "ListItem",
        position: 3,
        item: {
          "@id": `${pageUrlJsonLd}locations/${slugId}`,
          name: `${name_03} ${cityIdName}`,
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
      <MachineSection lang={lang} dictionary={dictionary} slug={slugId} />
      <DynamicServicesSection
        lang={lang}
        dictionary={dictionary}
        slug={slugId}
      />
      <DynamicTownsSection lang={lang} slug={slugId} />
      <DynamicVideoSection lang={lang} dictionary={dictionary} slug={slugId} />
      <DynamicGuaranteeSection lang={lang} dictionary={dictionary} />
      <DynamicHomeFAQSection
        lang={lang}
        dictionary={dictionary}
        data={FAQData}
      />
      <DynamicHomeConditionsSection dictionary={dictionary} />
    </>
  );
};

export default LocationIdPage;
