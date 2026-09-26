import PricesSection from "@/sections/pricesSection/PricesSection";
import { pricingGroups, CURRENCY } from "@/data/pricingData";
import { getDictionary } from "@/helpers/getDictionary";
import { getLocalizedField } from "@/helpers/getLocalizedField";
import { getSeoMetaPageUrl, getHomeUrl } from "@/helpers/getSeoMetaPageUrl";
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
        en: `${process.env.NEXT_PUBLIC_SEO_URL}en/prices`,
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
        item: { "@id": getHomeUrl(lang), name: seoPricesPage.seoMetaNameJsonLd_1 },
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
  const offersOf = (keep) => pricingGroups
    .filter((group) => group.id !== "travel" && keep(group))
    .flatMap((group) =>
      group.items
        .filter((item) => typeof item.price === "number")
        .map((item) => ({
          "@type": "Offer",
          name: getLocalizedField(item, "name", lang),
          price: item.price,
          priceCurrency: CURRENCY,
          availability: "https://schema.org/InStock",
          url: `${pageUrlJsonLd}prices`,
        }))
    );
  const offers = offersOf((g) => g.id !== "online");
  const onlineOffers = offersOf((g) => g.id === "online");

  const serviceJsonLd = {
    "@context": "http://schema.org",
    "@type": "Service",
    name: { uk: "Перевірка на поліграфі EyeDetect", ru: "Проверка на полиграфе EyeDetect", en: "EyeDetect polygraph test" }[lang],
    serviceType: { uk: "Послуги поліграфа", ru: "Услуги полиграфа", en: "Polygraph services" }[lang],
    provider: {
      "@type": "LocalBusiness",
      name: { uk: "Детектор брехні Львів. Поліграф EyeDetect", ru: "Детектор лжи Львов. Полиграф EyeDetect", en: "Lie Detector Lviv. EyeDetect Polygraph" }[lang],
      telephone: "+380686833368",
      address: {
        "@type": "PostalAddress",
        streetAddress: { uk: "вул. Городоцька, 45", ru: "ул. Городоцкая, 45", en: "45 Horodotska St." }[lang],
        addressLocality: { uk: "Львів", ru: "Львов", en: "Lviv" }[lang],
        postalCode: "79000",
        addressCountry: "UA",
      },
      url: process.env.NEXT_PUBLIC_SEO_URL,
    },
    areaServed: { uk: "Україна", ru: "Украина", en: "Ukraine" }[lang],
    offers,
  };

  const verifeyeJsonLd = {
    "@context": "http://schema.org",
    "@type": "Service",
    name: { uk: "Онлайн-тест VerifEye зі смартфона", ru: "Онлайн-тест VerifEye со смартфона", en: "VerifEye online smartphone test" }[lang],
    serviceType: { uk: "Онлайн-детектор брехні", ru: "Онлайн-детектор лжи", en: "Online lie detection" }[lang],
    brand: { "@type": "Brand", name: "Converus" },
    provider: serviceJsonLd.provider,
    areaServed: { uk: "Весь світ", ru: "Весь мир", en: "Worldwide" }[lang],
    url: `${pageUrlJsonLd}online`,
    offers: onlineOffers,
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
      {onlineOffers.length > 0 && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(verifeyeJsonLd) }} />
      )}
      <PricesSection lang={lang} dictionary={dictionary} />
    </>
  );
};

export default PricesPage;
