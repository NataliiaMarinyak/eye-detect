import { getSeoMetaPageUrl } from "@/helpers/getSeoMetaPageUrl";

// Організація і місцевий бізнес: адреса, телефон, графік, соцмережі, послуги.
// Спільний для головної і контактів, щоб дані ніде не розходилися.
export const getBusinessJsonLd = (lang) => {
  const byLang = (values) => values[lang] || values.uk;
  const siteUrl = process.env.NEXT_PUBLIC_SEO_URL;
  const pageUrl = getSeoMetaPageUrl(lang);

  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${siteUrl}#business`,
    name: byLang({ uk: "Детектор брехні EyeDetect у Львові", ru: "Детектор лжи EyeDetect во Львове", en: "EyeDetect Lie Detector in Lviv" }),
    url: siteUrl,
    telephone: "+380686833368",
    image: `${siteUrl}images/seo_images/opengraph-image-1200-630.png`,
    address: {
      "@type": "PostalAddress",
      streetAddress: byLang({ uk: "вул. Городоцька, 45", ru: "ул. Городоцкая, 45", en: "45 Horodotska St." }),
      addressLocality: byLang({ uk: "Львів", ru: "Львов", en: "Lviv" }),
      postalCode: "79000",
      addressCountry: "UA",
    },
    // Працюємо цілодобово.
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      opens: "00:00",
      closes: "23:59",
    },
    areaServed: [
      { "@type": "Country", name: byLang({ uk: "Україна", ru: "Украина", en: "Ukraine" }) },
      { "@type": "Place", name: byLang({ uk: "Європа", ru: "Европа", en: "Europe" }) },
    ],
    employee: { "@id": `${siteUrl}#nataliia-marynyak` },
    sameAs: ["https://t.me/Detecteye", "https://www.facebook.com/share/1527nF4Rwh/", "https://www.instagram.com/eye_detect", "https://www.tiktok.com/@www.eyepolygraph"],
    makesOffer: [
      { "@type": "Offer", name: "EyeDetect", price: 5500, priceCurrency: "UAH", url: `${pageUrl}prices` },
      { "@type": "Offer", name: "VerifEye", price: 2500, priceCurrency: "UAH", url: `${pageUrl}online` },
    ],
  };
};
