import PrivacyPolicySection from "@/sections/privacyPolicySection/PrivacyPolicySection";
import { getDictionary } from "@/helpers/getDictionary";
import { getSeoMetaPageUrl } from "@/helpers/getSeoMetaPageUrl";

export async function generateMetadata({ params }) {
  const { lang } = params;
  const {seoPryvacyPolicyPage} = await getDictionary(lang);

  const title = seoPryvacyPolicyPage.seoMetaMainTitle;
  const description = seoPryvacyPolicyPage.seoMetaMainDescription;
  const keywords = seoPryvacyPolicyPage.seoMetaKeywords;
  const titleOpenGraph = seoPryvacyPolicyPage.seoMetaTitleOpenGraph;
  const descriptionOpenGraph = seoPryvacyPolicyPage.seoMetaDescriptionOpenGraph;

  const seoMetaPageUrl = getSeoMetaPageUrl(lang);

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: `${seoMetaPageUrl}privacy-policy`,
      languages: {
        'uk': `${process.env.NEXT_PUBLIC_SEO_URL}privacy-policy`,
        'ru': `${process.env.NEXT_PUBLIC_SEO_URL}ru/privacy-policy`,
      },
    },
    openGraph: {
      title: titleOpenGraph,
      url: `${seoMetaPageUrl}privacy-policy`,
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

const PryvacyPolicyPage = async ({ params }) => {
  const { lang } = params;
  const dictionary = await getDictionary(lang);
  const {seoPryvacyPolicyPage} = await getDictionary(lang);

  const pageUrlJsonLd = getSeoMetaPageUrl(lang);

  const name_01 = seoPryvacyPolicyPage.seoMetaNameJsonLd_1;
  const name_02 = seoPryvacyPolicyPage.seoMetaNameJsonLd_2;

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
          "@id": `${pageUrlJsonLd}privacy-policy`,
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
      <PrivacyPolicySection lang={lang} />
    </>
  );
};

export default PryvacyPolicyPage;
