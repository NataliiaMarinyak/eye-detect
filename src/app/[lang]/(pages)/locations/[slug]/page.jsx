import dynamic from "next/dynamic";
import { notFound } from "next/navigation";
import PageHero from "@/sections/pageHero/PageHero";
import CityVisitSection from "@/sections/cityVisitSection/CityVisitSection";
import CityQuizBanner from "@/sections/cityQuizBanner/CityQuizBanner";
import CityUniqueSection from "@/sections/cityUniqueSection/CityUniqueSection";
import CitySituationsSection from "@/sections/citySituationsSection/CitySituationsSection";
import CityTownsSection from "@/sections/cityTownsSection/CityTownsSection";
import CityCasesSection from "@/sections/cityCasesSection/CityCasesSection";
import { getCityUnique, mergeCityFaq } from "@/data/cityUnique";
import { getCitySections } from "@/data/pages/citySections";
import ContentFaq from "@/components/ContentFaq/ContentFaq";
import { getCityData, getAllCities } from "@/helpers/getCityData";
import { getCityLocative, getCityRegion, getCityDistance } from "@/helpers/cityMeta";
import { cityTexts, fill, keepShortWords } from "@/data/pages/cityTexts";
import { getDictionary } from "@/helpers/getDictionary";
import { getContentFaqJsonLd } from "@/helpers/getContentFaqJsonLd";
import { buildPageMetadata, breadcrumbsJsonLd } from "@/helpers/buildPageMetadata";
import { getSeoMetaPageUrl } from "@/helpers/getSeoMetaPageUrl";
import { i18n } from "@/dictionaries/i18n.config";
import { getCityEn } from "@/data/cityEn";

const DynamicServicesSection = dynamic(() => import("@/sections/servicesSection/ServicesSection"));
const DynamicTownsSection = dynamic(() => import("@/sections/townsSection/TownsSection"));
const DynamicGuaranteeSection = dynamic(() => import("@/sections/guaranteeSection/GuaranteeSection"));

// Опис фото в герої для міст з унікальним блоком (замість повтору H1).
const heroPhotoAlt = {
  uk: "Людина проходить тест на детекторі брехні EyeDetect",
  ru: "Человек проходит тест на детекторе лжи EyeDetect",
  en: "Person taking an EyeDetect lie detector test",
};

// Усі міста рендеряться на етапі збірки, невідомий slug дає 404.
export async function generateStaticParams() {
  return i18n.locales.flatMap((lang) => getAllCities().map((c) => ({ lang, slug: c.slug })));
}

// Дані сторінки міста: локатив («у Києві»), регіон, відстань, заповнені тексти.
const getCityPage = (slug, lang) => {
  const data = getCityData(slug);
  if (!data) return null;
  const isUk = lang === i18n.defaultLocale;
  const t = cityTexts[lang] || cityTexts.uk;
  const loc = getCityLocative(data, lang);
  const region = getCityRegion(slug, data.country);
  const km = getCityDistance(slug);
  const cityLocal = lang === "en" ? getCityEn(slug) : isUk ? data.city : data.cityRus;
  const vars = { loc, city: cityLocal, km: km || "" };
  return { data, t, loc, region, km, vars, isUk };
};

export async function generateMetadata({ params }) {
  const { slug, lang } = params;
  const p = getCityPage(slug, lang);
  if (!p) return {};
  const { seoLocationIdPage } = await getDictionary(lang);
  const u = getCityUnique(slug, lang);
  return buildPageMetadata({
    lang,
    path: `locations/${slug}`,
    title: u?.seoTitle || fill(p.t.title, p.vars),
    description: u?.seoDescription || (lang === "en" ? fill(p.t.sub[p.region], p.vars) : p.isUk ? p.data.mainDescription : p.data.mainDescriptionRus),
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

  const cityName = vars.city;
  const unique = getCityUnique(slug, lang);
  // Унікальні питання міста першими; шаблонні з тим самим key (replaces) не дублюються.
  const faq = mergeCityFaq(unique?.faq, t.faq[region].map((f) => ({ key: f.key, q: fill(f.q, vars), a: fill(f.a, vars) })));
  const sections = unique ? getCitySections(lang) : null;

  const crumbs = breadcrumbsJsonLd(lang, [
    ["", seoLocationIdPage.seoMetaNameJsonLd_1],
    ["locations", seoLocationIdPage.seoMetaNameJsonLd_2],
    [`locations/${slug}`, unique ? cityName : `${seoLocationIdPage.seoMetaNameJsonLd_3} ${cityName}`],
  ]);

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: fill(t.h1, vars),
    serviceType: { uk: "Детектор брехні EyeDetect", ru: "Детектор лжи EyeDetect", en: "EyeDetect lie detector test" }[lang],
    areaServed: { "@type": "City", name: cityName },
    provider: {
      "@type": "LocalBusiness",
      name: "EyeDetect Lviv",
      telephone: "+380686833368",
      address: { "@type": "PostalAddress", streetAddress: { uk: "вул. Городоцька, 45", ru: "ул. Городоцкая, 45", en: "45 Horodotska St." }[lang], addressLocality: { uk: "Львів", ru: "Львов", en: "Lviv" }[lang], postalCode: "79000", addressCountry: "UA" },
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
        quizLabel={t.quiz.heroCta}
        service={lang === "en" ? `EyeDetect on-site · ${loc}` : `EyeDetect з виїздом · ${loc}`}
        secondaryHref={`${lang === "uk" ? "" : "/" + lang}/online`}
        secondaryLabel={t.online.cta}
        photo="/images/converus/eyedetect-examinee.webp"
        photoAlt={unique ? heroPhotoAlt[lang] : fill(t.h1, vars)}
      />
      {unique && <CityUniqueSection title={fill(t.uniqueTitle, vars)} intro={unique.intro} facts={unique.facts} />}
      <CityVisitSection t={t} region={region} loc={loc} km={km} vars={vars} dictionary={dictionary} lang={lang} quizCta={!!unique} />
      <CityQuizBanner title={fill(t.quiz.title, vars)} text={t.quiz.text} button={t.quiz.button} phoneLabel={t.quiz.phone} />
      {unique ? <CitySituationsSection lang={lang} {...sections.situations} /> : <DynamicServicesSection lang={lang} dictionary={dictionary} slug={slug} />}
      {unique && <CityCasesSection cases={unique.cases || sections.commonCases} />}
      {unique ? <CityTownsSection lang={lang} towns={unique.towns} /> : lang !== "en" && <DynamicTownsSection lang={lang} slug={slug} />}
      <DynamicGuaranteeSection lang={lang} dictionary={dictionary} compact items={getCitySections(lang).guarantee} />
      <ContentFaq items={faq} lang={lang} title={keepShortWords(fill(t.faqTitle, vars))} />
      <CityQuizBanner title={fill(t.quiz.finalTitle, vars)} text={t.quiz.finalText} button={t.quiz.button} phoneLabel={t.quiz.phone} variant="dark" />
    </>
  );
};

export default LocationIdPage;
