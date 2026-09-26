import dynamic from "next/dynamic";
import ConsultationSection from "@/sections/consultationSection/ConsultationSection";
import { getDictionary } from "@/helpers/getDictionary";
import { getSeoMetaPageUrl, getHomeUrl } from "@/helpers/getSeoMetaPageUrl";


const DynamicSpecialistSection = dynamic(() =>
  import("@/sections/specialistSection/SpecialistSection")
);

const DynamicHomeCertificatesSection = dynamic(() =>
  import(
    "@/sections/homeSections/homeCertificatesSection/HomeCertificatesSection"
  )
);

export async function generateMetadata({ params }) {
  const { lang } = params;
  const {seoAboutUsPage} = await getDictionary(lang);

  const title = seoAboutUsPage.seoMetaMainTitle;
  const description = seoAboutUsPage.seoMetaMainDescription;
  const keywords = seoAboutUsPage.seoMetaKeywords;
  const titleOpenGraph = seoAboutUsPage.seoMetaTitleOpenGraph;
  const descriptionOpenGraph = seoAboutUsPage.seoMetaDescriptionOpenGraph;

  const seoMetaPageUrl = getSeoMetaPageUrl(lang);

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: `${seoMetaPageUrl}about-us`,
      languages: {
        'uk': `${process.env.NEXT_PUBLIC_SEO_URL}about-us`,
        'x-default': `${process.env.NEXT_PUBLIC_SEO_URL}about-us`,
        'ru': `${process.env.NEXT_PUBLIC_SEO_URL}ru/about-us`,
        en: `${process.env.NEXT_PUBLIC_SEO_URL}en/about-us`,
      },
    },
    openGraph: {
      title: titleOpenGraph,
      url: `${seoMetaPageUrl}about-us`,
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

const AboutUsPage = async ({ params }) => {
  const { lang } = params;
  const dictionary = await getDictionary(lang);

  const {seoAboutUsPage} = await getDictionary(lang);

  const pageUrlJsonLd = getSeoMetaPageUrl(lang);

  const name_01 = seoAboutUsPage.seoMetaNameJsonLd_1;
  const name_02 = seoAboutUsPage.seoMetaNameJsonLd_2;

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
          "@id": `${pageUrlJsonLd}about-us`,
          name: name_02,
        },
      },
    ],
  };

  // Хто проводить тести: для Google це сигнал експертності сторінки.
  const byLang = (v) => v[lang] || v.uk;
  const siteUrl = process.env.NEXT_PUBLIC_SEO_URL;
  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${siteUrl}#nataliia-marynyak`,
    name: byLang({ uk: "Наталя Мариняк", ru: "Наталья Мариняк", en: "Nataliia Marynyak" }),
    jobTitle: byLang({
      uk: "Дипломований психолог, сертифікований спеціаліст EyeDetect (Converus), VerifEye",
      ru: "Дипломированный психолог, сертифицированный специалист EyeDetect (Converus), VerifEye",
      en: "Qualified psychologist, certified EyeDetect (Converus) and VerifEye specialist",
    }),
    url: `${pageUrlJsonLd}about-us`,
    image: `${siteUrl}images/specialist-natalia-portrait.webp`,
    telephone: "+380686833368",
    worksFor: { "@id": `${siteUrl}#business` },
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: byLang({
        uk: "Львівський державний університет внутрішніх справ",
        ru: "Львовский государственный университет внутренних дел",
        en: "Lviv State University of Internal Affairs",
      }),
    },
    hasCredential: {
      "@type": "EducationalOccupationalCredential",
      credentialCategory: "certification",
      name: byLang({
        uk: "Сертифікований тестувальник та адміністратор системи EyeDetect",
        ru: "Сертифицированный тестер и системный администратор EyeDetect",
        en: "Certified EyeDetect Test Proctor and System Administrator",
      }),
      recognizedBy: { "@type": "Organization", name: "Converus", url: "https://converus.com" },
    },
    knowsAbout: ["EyeDetect", "VerifEye", byLang({ uk: "детектор брехні", ru: "детектор лжи", en: "lie detection" })],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />
      <ConsultationSection dictionary={dictionary} />
      <DynamicSpecialistSection lang={lang} dictionary={dictionary} />
      <DynamicHomeCertificatesSection
        isOnHomePage={false}
        lang={lang}
        dictionary={dictionary}
      />
    </>
  );
};

export default AboutUsPage;
