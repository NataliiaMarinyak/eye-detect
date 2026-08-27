import PricesSection from "@/sections/pricesSection/PricesSection";
import { pricingGroups, CURRENCY } from "@/data/pricingData";
import { getDictionary } from "@/helpers/getDictionary";
import { getSeoMetaPageUrl } from "@/helpers/getSeoMetaPageUrl";
import { i18n } from "@/dictionaries/i18n.config";

export async function generateMetadata({ params }) {
  const { lang } = params;
  const { seoPricesPage } = await getDictionary(lang);

  const seoMetaPageUrl = getSeoMetaPageUrl(lang);

  return {
    title: seoPricesPage.seoMetaMainTitle,
    description: seoPricesPage.seoMetaMainDescription,
    keywords: seoPricesPage.seoMetaKeywords,
    alternates: {
      canonical: `${seoMetaPageUrl}prices`,
      languages: {
        uk: `${process.env.NEXT_PUBLIC_SEO_URL}prices`,
        ru: `${process.env.NEXT_PUBLIC_SEO_URL}ru/prices`,
      },
    },
    openGraph: {
      title: seoPricesPage.seoMetaTitleOpenGraph,
      url: `${seoMetaPageUrl}prices`,
      description: seoPricesPage.seoMetaDescriptionOpenGraph,
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

const PricesPage = async ({ params }) => {
  const { lang } = params;
  const dictionary = await getDictionary(lang);
  const { seoPricesPage } = dictionary;
  const isUk = lang === i18n.defaultLocale;

  const pageUrlJsonLd = getSeoMetaPageUrl(lang);

  const breadcrumbsJsonLd = {
    "@context": "http://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        item: { "@id": pageUrlJsonLd, name: seoPricesPage.seoMetaNameJsonLd_1 },
      },
      {
        "@type": "ListItem",
        position: 2,
        item: {
          "@id": `${pageUrlJsonLd}prices`,
          name: seoPricesPage.seoMetaNameJsonLd_2,
        },
      },
    ],
  };

  // Offer-розмітка: щоб ціна потрапляла у сніпет видачі й була читабельною
  // для пошукових систем та AI-асистентів.
  const offers = pricingGroups
    .filter((group) => group.id !== "travel")
    .flatMap((group) =>
      group.items
        .filter((item) => typeof item.price === "number")
        .map((item) => ({
          "@type": "Offer",
          name: isUk ? item.name : item.nameRus,
          price: item.price,
          priceCurrency: CURRENCY,
          availability: "https://schema.org/InStock",
          url: `${pageUrlJsonLd}prices`,
        }))
    );

  const serviceJsonLd = {
    "@context": "http://schema.org",
    "@type": "Service",
    name: isUk
      ? "Перевірка на поліграфі EyeDetect"
      : "Проверка на полиграфе EyeDetect",
    serviceType: isUk ? "Послуги поліграфа" : "Услуги полиграфа",
    provider: {
      "@type": "LocalBusiness",
      name: isUk
        ? "Детектор брехні Львів. Поліграф EyeDetect"
        : "Детектор лжи Львов. Полиграф EyeDetect",
      telephone: "+380686833368",
      address: {
        "@type": "PostalAddress",
        streetAddress: isUk ? "вул. Городоцька, 45" : "ул. Городоцкая, 45",
        addressLocality: isUk ? "Львів" : "Львов",
        postalCode: "79000",
        addressCountry: "UA",
      },
      url: process.env.NEXT_PUBLIC_SEO_URL,
    },
    areaServed: isUk ? "Україна" : "Украина",
    offers,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbsJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <PricesSection lang={lang} dictionary={dictionary} />
    </>
  );
};

export default PricesPage;
