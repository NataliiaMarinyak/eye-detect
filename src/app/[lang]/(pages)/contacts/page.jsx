import ContactsSection from "@/sections/contactsSection/ContactsSection";
import HomeOrderSection from "@/sections/homeSections/homeOrderSection/HomeOrderSection";
import { getDictionary } from "@/helpers/getDictionary";
import { getSeoMetaPageUrl, getHomeUrl } from "@/helpers/getSeoMetaPageUrl";
import { getBusinessJsonLd } from "@/helpers/getBusinessJsonLd";


export async function generateMetadata({ params }) {
  const { lang } = params;
  const {seoContactsPage} = await getDictionary(lang);

  const title = seoContactsPage.seoMetaMainTitle;
  const description = seoContactsPage.seoMetaMainDescription;
  const keywords = seoContactsPage.seoMetaKeywords;
  const titleOpenGraph = seoContactsPage.seoMetaTitleOpenGraph;
  const descriptionOpenGraph = seoContactsPage.seoMetaDescriptionOpenGraph;

  const seoMetaPageUrl = getSeoMetaPageUrl(lang);

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: `${seoMetaPageUrl}contacts`,
      languages: {
        'uk': `${process.env.NEXT_PUBLIC_SEO_URL}contacts`,
        'ru': `${process.env.NEXT_PUBLIC_SEO_URL}ru/contacts`,
        en: `${process.env.NEXT_PUBLIC_SEO_URL}en/contacts`,
      },
    },
    openGraph: {
      title: titleOpenGraph,
      url: `${seoMetaPageUrl}contacts`,
      description: descriptionOpenGraph,
      siteName: "EyeDetect",
      type: "website",
      images: [
        {
          url: "images/seo_images/opengraph-image-1200-630.png",
          type: "image/png",
          width: 1200,
          height: 630,
          alt: "EyeDetect",
        },
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
      ],
      locale: lang,
    },
  };
}

const ContactsPage = async ({ params }) => {
  const { lang } = params;
  const dictionary = await getDictionary(lang);
  const {seoContactsPage} = await getDictionary(lang);

  const pageUrlJsonLd = getSeoMetaPageUrl(lang);

  const name_01 = seoContactsPage.seoMetaNameJsonLd_1;
  const name_02 = seoContactsPage.seoMetaNameJsonLd_2;

  const jsonLd = {
    "@context": "http://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        item: {
          "@id": getHomeUrl(lang),
          name: name_01,
        },
      },
      {
        "@type": "ListItem",
        position: 2,
        item: {
          "@id": `${pageUrlJsonLd}contacts`,
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getBusinessJsonLd(lang)) }}
      />
      <ContactsSection lang={lang} dictionary={dictionary} />
      <HomeOrderSection lang={lang} dictionary={dictionary} />
    </>
  );
};

export default ContactsPage;
