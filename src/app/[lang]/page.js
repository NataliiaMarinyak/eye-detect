import dynamic from "next/dynamic";
import HeroSection from "@/sections/homeSections/heroSection/HeroSection";
import { FAQDataHome } from "@/data/FAQDataHome";
import { getDictionary } from "@/helpers/getDictionary";
import { getSeoMetaPageUrl } from "@/helpers/getSeoMetaPageUrl";
import { getFaqJsonLd } from "@/helpers/getFaqJsonLd";

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

const DynamicHomeOrderSection = dynamic(() =>
  import("@/sections/homeSections/homeOrderSection/HomeOrderSection")
);
const DynamicHomeStatsSection = dynamic(() =>
  import("@/sections/homeSections/homeStatsSection/HomeStatsSection")
);
const DynamicHomePathsSection = dynamic(() =>
  import("@/sections/homeSections/homePathsSection/HomePathsSection")
);
const DynamicHomeStepsSection = dynamic(() =>
  import("@/sections/homeSections/homeStepsSection/HomeStepsSection")
);
const DynamicHomeReportSection = dynamic(() =>
  import("@/sections/homeSections/homeReportSection/HomeReportSection")
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
        'en': `${process.env.NEXT_PUBLIC_SEO_URL}en/`,
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

  // Організація і місцевий бізнес: адреса, телефон, соцмережі, послуги.
  const isUk = lang === "uk";
  const businessJsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${process.env.NEXT_PUBLIC_SEO_URL}#business`,
    name: { uk: "Детектор брехні EyeDetect у Львові", ru: "Детектор лжи EyeDetect во Львове", en: "EyeDetect Lie Detector in Lviv" }[lang] || "Детектор брехні EyeDetect у Львові",
    url: process.env.NEXT_PUBLIC_SEO_URL,
    telephone: "+380686833368",
    image: `${process.env.NEXT_PUBLIC_SEO_URL}images/seo_images/opengraph-image-1200-630.png`,
    address: {
      "@type": "PostalAddress",
      streetAddress: isUk ? "вул. Городоцька, 45" : "ул. Городоцкая, 45",
      addressLocality: isUk ? "Львів" : "Львов",
      postalCode: "79000",
      addressCountry: "UA",
    },
    areaServed: [{ "@type": "Country", name: isUk ? "Україна" : "Украина" }, { "@type": "Place", name: isUk ? "Європа" : "Европа" }],
    sameAs: ["https://t.me/Detecteye", "https://www.facebook.com/share/1527nF4Rwh/", "https://www.instagram.com/eye_detect", "https://www.tiktok.com/@www.eyepolygraph"],
    makesOffer: [
      { "@type": "Offer", name: "EyeDetect", price: 5500, priceCurrency: "UAH", url: `${pageUrlJsonLd}prices` },
      { "@type": "Offer", name: "VerifEye", price: 2500, priceCurrency: "UAH", url: `${pageUrlJsonLd}online` },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(businessJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(getFaqJsonLd(FAQDataHome, lang)),
        }}
      />
      <HeroSection dictionary={dictionary} />
      <DynamicHomeStatsSection dictionary={dictionary} />
      <DynamicHomePathsSection dictionary={dictionary} />
      <DynamicHomeStepsSection dictionary={dictionary} />
      <DynamicHomeDirectionsSection lang={lang} dictionary={dictionary} />
      <DynamicHomeReportSection dictionary={dictionary} />
      <DynamicHomeAboutSection lang={lang} dictionary={dictionary} />
      <DynamicHomeCertificatesSection
        isOnHomePage={true}
        lang={lang}
        dictionary={dictionary}
      />
      <DynamicHomeClientsSection lang={lang} dictionary={dictionary} />
      <DynamicHomeFAQSection
        data={FAQDataHome}
        lang={lang}
        dictionary={dictionary}
      />
      <DynamicHomeOrderSection lang={lang} dictionary={dictionary} />
    </>
  );
}
