import dynamic from "next/dynamic";
import { notFound } from "next/navigation";
import PageHero from "@/sections/pageHero/PageHero";
import CityVisitSection from "@/sections/cityVisitSection/CityVisitSection";
import ContentFaq from "@/components/ContentFaq/ContentFaq";
import { getCityData, getAllCities } from "@/helpers/getCityData";
import { getCityLocative, getCityRegion, getCityDistance } from "@/helpers/cityMeta";
import { cityTexts, fill } from "@/data/pages/cityTexts";
import { getDictionary } from "@/helpers/getDictionary";
import { getContentFaqJsonLd } from "@/helpers/getContentFaqJsonLd";
import { buildPageMetadata, breadcrumbsJsonLd } from "@/helpers/buildPageMetadata";
import { getSeoMetaPageUrl } from "@/helpers/getSeoMetaPageUrl";
import { i18n } from "@/dictionaries/i18n.config";

const DynamicServicesSection = dynamic(() => import("@/sections/servicesSection/ServicesSection"));
const DynamicTownsSection = dynamic(() => import("@/sections/townsSection/TownsSection"));
const DynamicVideoSection = dynamic(() => import("@/sections/videoSection/VideoSection"));
const DynamicGuaranteeSection = dynamic(() => import("@/sections/guaranteeSection/GuaranteeSection"));

// Усі міста рендеряться на етапі збірки, невідомий slug дає 404.
export async function generateStaticParams() {
  return i18n.locales.flatMap((lang) => getAllCities().map((c) => ({ lang, slug: c.slug })));
}

// Дані сторінки міста: локатив («у Києві»), регіон, відстань, заповнені тексти.
const getCityPage = (slug, lang) => {
  const data = getCityData(slug);
  if (!data) return null;
  const isUk = lang === i18n.defaultLocale;
  const t = cityTexts[isUk ? "uk" : "ru"];
  const loc = getCityLocative(data, lang);
  const region = getCityRegion(slug, data.country);
  const km = getCityDistance(slug);
  const vars = { loc, city: isUk ? data.city : data.cityRus, km: km || "" };
  return { data, t, loc, region, km, vars, isUk };
};

export async function generateMetadata({ params }) {
  const { slug, lang } = params;
  const p = getCityPage(slug, lang);
  if (!p) return {};
  const { seoLocationIdPage } = await getDictionary(lang);
  return buildPageMetadata({
    lang,
    path: `locations/${slug}`,
    title: fill(p.t.title, p.vars),
    description: p.isUk ? p.data.mainDescription : p.data.mainDescriptionRus,
    keywords: seoLocationIdPage.seoMetaKeywords,
  });
}

const LocationIdPage = async ({ params }) => {
  const { lang, slug } = params;
  const p = getCityPage(slug, lang);
  if (!p) notFound();
  const dictionary = await getDictionary(lang);
  const { seoLocationIdPage } = dictionary;
  const { data, t, loc, region, km, vars, isUk } = p;

  const cityName = isUk ? data.city : data.cityRus;
  const faq = t.faq[region].map((f) => ({ q: fill(f.q, vars), a: fill(f.a, vars) }));

  const crumbs = breadcrumbsJsonLd(lang, [
    ["", seoLocationIdPage.seoMetaNameJsonLd_1],
    ["locations", seoLocationIdPage.seoMetaNameJsonLd_2],
    [`locations/${slug}`, `${seoLocationIdPage.seoMetaNameJsonLd_3} ${cityName}`],
  ]);

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: fill(t.h1, vars),
    serviceType: isUk ? "Детектор брехні EyeDetect" : "Детектор лжи EyeDetect",
    areaServed: { "@type": "City", name: cityName },
    provider: {
      "@type": "LocalBusiness",
      name: "EyeDetect Lviv",
      telephone: "+380686833368",
      address: { "@type": "PostalAddress", streetAddress: isUk ? "вул. Городоцька, 45" : "ул. Городоцкая, 45", addressLocality: isUk ? "Львів" : "Львов", postalCode: "79000", addressCountry: "UA" },
      url: process.env.NEXT_PUBLIC_SEO_URL,
    },
    url: `${getSeoMetaPageUrl(lang)}locations/${slug}`,
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(crumbs) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(getContentFaqJsonLd(faq)) }} />
      <PageHero
        eyebrow={t.eyebrow}
        title={fill(t.h1, vars)}
        sub={fill(t.sub[region], vars)}
        facts={t.facts}
        primary={t.visit.cta}
        secondaryHref="#visit"
        secondaryLabel={t.online.cta}
        photo="/images/converus/eyedetect-examinee.webp"
        photoAlt={fill(t.h1, vars)}
      />
      <CityVisitSection t={t} region={region} loc={loc} km={km} dictionary={dictionary} lang={lang} />
      <DynamicServicesSection lang={lang} dictionary={dictionary} slug={slug} />
      <DynamicVideoSection lang={lang} dictionary={dictionary} slug={slug} />
      <DynamicTownsSection lang={lang} slug={slug} />
      <DynamicGuaranteeSection lang={lang} dictionary={dictionary} />
      <ContentFaq items={faq} lang={lang} title={fill(t.faqTitle, vars)} />
    </>
  );
};

export default LocationIdPage;
