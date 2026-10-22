import dynamic from "next/dynamic";
import { notFound } from "next/navigation";
import PageHero from "@/sections/pageHero/PageHero";
import CityVisitSection from "@/sections/cityVisitSection/CityVisitSection";
import CityQuizBanner from "@/sections/cityQuizBanner/CityQuizBanner";
import CityUniqueSection from "@/sections/cityUniqueSection/CityUniqueSection";
import CityLocalSection from "@/sections/cityLocalSection/CityLocalSection";
import CitySituationsSection from "@/sections/citySituationsSection/CitySituationsSection";
import CityTownsSection from "@/sections/cityTownsSection/CityTownsSection";
import CityCasesSection from "@/sections/cityCasesSection/CityCasesSection";
import CityReviewedBy, { getReviewer } from "@/sections/cityReviewedBy/CityReviewedBy";
import { getCityUnique, mergeCityFaq } from "@/data/cityUnique";
import { getCitySections } from "@/data/pages/citySections";
import ContentFaq from "@/components/ContentFaq/ContentFaq";
import { getCityData, getAllCities } from "@/helpers/getCityData";
import { getCityLocative, getCityRegion, getCityDistance, isUaRegion } from "@/helpers/cityMeta";
import { getCityTexts, fill, keepShortWords, keepHyphens, keepNumbers, isPartnerCity, NEAREST_OFFICE } from "@/data/pages/cityTexts";
import { getDictionary } from "@/helpers/getDictionary";
import { getContentFaqJsonLd } from "@/helpers/getContentFaqJsonLd";
import { buildPageMetadata, breadcrumbsJsonLd } from "@/helpers/buildPageMetadata";
import { getSeoMetaPageUrl } from "@/helpers/getSeoMetaPageUrl";
import { i18n } from "@/dictionaries/i18n.config";
import { getCityEn } from "@/data/cityEn";

const DynamicServicesSection = dynamic(() => import("@/sections/servicesSection/ServicesSection"));
const DynamicTownsSection = dynamic(() => import("@/sections/townsSection/TownsSection"));
const DynamicGuaranteeSection = dynamic(() => import("@/sections/guaranteeSection/GuaranteeSection"));

// Дата останньої перевірки текстів міст з унікальним контентом (якщо в місті не вказано updated).
const CITY_UPDATED = "2026-09-15";

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

// Відстань для тексту картки з розділювачем тисяч, як у текстах міст: «1 000» (uk, ru), «1,000» (en).
// Інакше в Харкові поруч стояли б «1 000 км» у вступі і «1000 км» у картці виїзду.
const formatKm = (km, lang) => (km ? String(km).replace(/\B(?=(\d{3})+(?!\d))/g, lang === "en" ? "," : " ") : "");

// Куди веде рядок «Третій спосіб…» під картками (NEAREST_OFFICE): блок про Львів на головній
// або блок «Як пройти тест» на сторінці міста-партнера, з мовним префіксом.
const officeHref = (target, lang) => {
  const prefix = lang === "uk" ? "" : `/${lang}`;
  return target === "lviv" ? `${prefix || "/"}#lviv` : `${prefix}/locations/${target}#visit`;
};

// Дані сторінки міста: локатив («у Києві»), регіон, відстань, заповнені тексти.
// getCityTexts сам підставляє H1 для міст України і тексти «у партнера» для Києва й Запоріжжя (PARTNER_CITIES).
const getCityPage = (slug, lang) => {
  const data = getCityData(slug);
  if (!data) return null;
  const isUk = lang === i18n.defaultLocale;
  const loc = getCityLocative(data, lang);
  const region = getCityRegion(slug, data.country);
  const t = getCityTexts(lang, slug, region);
  const km = getCityDistance(slug);
  const cityLocal = lang === "en" ? getCityEn(slug) : isUk ? data.city : data.cityRus;
  const vars = { loc, city: cityLocal, km: formatKm(km, lang) };
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
    // Запасний опис (коли місто не має свого): у міста-партнера свій шаблон — кабінет партнера від 5 500 ₴, виїзд до клієнта, онлайн.
    description:
      u?.seoDescription ||
      (p.t.description
        ? fill(p.t.description, p.vars)
        : lang === "en" ? fill(p.t.sub[p.region], p.vars) : p.isUk ? p.data.mainDescription : p.data.mainDescriptionRus),
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
  // Чи є в міста довгий текст (поле local): та сама умова, за якою CityLocalSection показує блок.
  const hasLocal = !!unique?.local?.title && (unique.local.paragraphs || []).some(Boolean);

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

  // Хто перевірив відповіді і коли (лише для сторінок з унікальним контентом).
  const reviewer = getReviewer(lang);
  const webPageJsonLd = unique && {
    "@context": "https://schema.org",
    "@type": "WebPage",
    url: `${getSeoMetaPageUrl(lang)}locations/${slug}`,
    name: unique.seoTitle,
    inLanguage: lang,
    dateModified: unique.updated || CITY_UPDATED,
    reviewedBy: { "@type": "Person", name: reviewer.name, jobTitle: reviewer.role, url: `${getSeoMetaPageUrl(lang)}about-us` },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(crumbs) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(getContentFaqJsonLd(faq)) }} />
      {webPageJsonLd && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageJsonLd) }} />}
      {/* keepHyphens — лише до шаблону заголовка («онлайн-тест» не розривається), а не до назви міста:
          «в Івано-Франківську:» одним шматком ширше за екран телефона (344 px проти 320), там перенос після дефіса потрібен. */}
      <PageHero
        eyebrow={t.eyebrow}
        title={keepShortWords(fill(keepHyphens(t.h1), vars))}
        priceLine={t.heroPrice ? keepNumbers(t.heroPrice) : undefined}
        sub={fill(t.sub[region], vars)}
        facts={t.facts}
        primary={t.visit.cta}
        quizLabel={t.quiz.heroCta}
        service={`${t.service} · ${loc}`}
        secondaryHref={`${lang === "uk" ? "" : "/" + lang}/online`}
        secondaryLabel={t.online.cta}
        photo="/images/converus/eyedetect-examinee.webp"
        photoAlt={unique ? heroPhotoAlt[lang] : fill(t.h1, vars)}
      />
      {/* visitLink: тихе посилання під фактами на блок «Як пройти тест» (#visit), лише коли між ними стоїть довгий текст міста. */}
      {unique && (
        <CityUniqueSection
          title={fill(t.uniqueTitle, vars)}
          intro={unique.intro}
          facts={unique.facts}
          note={isUaRegion(region) ? t.coverage : undefined}
          visitLink={hasLocal ? fill(t.visitTitle, vars) : undefined}
        />
      )}
      {/* Текст лише цього міста (поле local у src/data/cityUnique/<slug>.js); якщо його немає, блок порожній. */}
      <CityLocalSection local={unique?.local} />
      {/* У місті-партнері кнопка картки відкриває звичайне вікно заявки («EyeDetect у партнера · у Києві»):
          у розрахунку вартості варіанта «кабінет партнера» немає. У решти міст з унікальним текстом — розрахунок. */}
      <CityVisitSection
        t={t}
        region={region}
        loc={loc}
        km={km}
        vars={vars}
        dictionary={dictionary}
        lang={lang}
        quizCta={!!unique && !isPartnerCity(slug)}
        officeLink={NEAREST_OFFICE[slug] && t.officeLink ? { text: t.officeLink[NEAREST_OFFICE[slug]], href: officeHref(NEAREST_OFFICE[slug], lang) } : undefined}
      />
      <CityQuizBanner title={fill(t.quiz.title, vars)} text={t.quiz.text} button={t.quiz.button} phoneLabel={t.quiz.phone} />
      {unique ? <CitySituationsSection lang={lang} {...sections.situations} /> : <DynamicServicesSection lang={lang} dictionary={dictionary} slug={slug} />}
      {/* Спільний блок «З чим до нас звертаються» прибрано (рішення власника 22.10.2026): він повторював «У яких ситуаціях…».
          Лишається тільки власний блок міста, якщо він є (зараз лише в Таллінна). */}
      {unique?.cases && <CityCasesSection cases={unique.cases} />}
      {unique ? <CityTownsSection lang={lang} towns={unique.towns} /> : lang !== "en" && <DynamicTownsSection lang={lang} slug={slug} />}
      <DynamicGuaranteeSection lang={lang} dictionary={dictionary} compact items={getCitySections(lang).guarantee} />
      <ContentFaq items={faq} lang={lang} title={keepShortWords(fill(t.faqTitle, vars))} />
      {unique && <CityReviewedBy lang={lang} updated={unique.updated || CITY_UPDATED} />}
      <CityQuizBanner title={fill(t.quiz.finalTitle, vars)} text={t.quiz.finalText} button={t.quiz.button} phoneLabel={t.quiz.phone} variant="dark" />
    </>
  );
};

export default LocationIdPage;
