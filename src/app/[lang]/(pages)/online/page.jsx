import PageHero from "@/sections/pageHero/PageHero";
import OnlineSections from "@/sections/onlinePage/OnlineSections";
import { getOnlinePage } from "@/data/pages/onlinePage";
import { getDictionary } from "@/helpers/getDictionary";
import { getContentFaqJsonLd } from "@/helpers/getContentFaqJsonLd";
import { buildPageMetadata, breadcrumbsJsonLd } from "@/helpers/buildPageMetadata";
import { getSeoMetaPageUrl } from "@/helpers/getSeoMetaPageUrl";
import { getLocalizedField } from "@/helpers/getLocalizedField";
import { pricingGroups, CURRENCY } from "@/data/pricingData";

export async function generateMetadata({ params }) {
  const { lang } = params;
  const d = getOnlinePage(lang);
  return buildPageMetadata({ lang, path: "online", title: d.seo.title, description: d.seo.description, keywords: d.seo.keywords });
}

const OnlinePage = async ({ params }) => {
  const { lang } = params;
  const d = getOnlinePage(lang);
  const dictionary = await getDictionary(lang);

  const crumbs = breadcrumbsJsonLd(lang, [["", d.seo.crumbHome], ["online", d.seo.crumb]]);

  // Service-розмітка з тих самих даних, що й на /prices (pricingGroups, група "online"):
  // ціни в одному місці, кожна пропозиція має назву мовою сторінки.
  const pageUrl = getSeoMetaPageUrl(lang);
  const onlineGroup = pricingGroups.find((group) => group.id === "online");
  const onlineOffers = (onlineGroup?.items || [])
    .filter((item) => typeof item.price === "number")
    .map((item) => ({
      "@type": "Offer",
      name: getLocalizedField(item, "name", lang),
      price: item.price,
      priceCurrency: CURRENCY,
      availability: "https://schema.org/InStock",
      url: `${pageUrl}online`,
    }));

  const serviceJsonLd = {
    "@context": "http://schema.org",
    "@type": "Service",
    name: { uk: "Онлайн-тест VerifEye зі смартфона", ru: "Онлайн-тест VerifEye со смартфона", en: "VerifEye online smartphone test" }[lang],
    serviceType: { uk: "Онлайн-детектор брехні", ru: "Онлайн-детектор лжи", en: "Online lie detection" }[lang],
    description: d.seo.description,
    brand: { "@type": "Brand", name: "Converus" },
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
    areaServed: { uk: "Весь світ", ru: "Весь мир", en: "Worldwide" }[lang],
    url: `${pageUrl}online`,
    offers: onlineOffers,
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(crumbs) }} />
      {onlineOffers.length > 0 && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />
      )}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(getContentFaqJsonLd(d.faq)) }} />
      <PageHero
        eyebrow={d.hero.eyebrow}
        title={d.hero.h1}
        sub={d.hero.sub}
        facts={d.hero.facts}
        primary={d.hero.primary}
        secondaryHref={`${lang === "uk" ? "" : "/" + lang}/free-test`}
        secondaryLabel={{ uk: "Спробувати безкоштовно", ru: "Попробовать бесплатно", en: "Try it for free" }[lang]}
        service={{ uk: "VerifEye онлайн", ru: "VerifEye онлайн", en: "VerifEye online" }[lang] || "VerifEye онлайн"}
        photo="/images/converus/verifeye-test.webp"
        photoAlt="VerifEye"
      />
      <OnlineSections d={d} lang={lang} dictionary={dictionary} />
    </>
  );
};

export default OnlinePage;
