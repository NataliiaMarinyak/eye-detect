import { notFound } from "next/navigation";
import PageHero from "@/sections/pageHero/PageHero";
import InfoSections from "@/sections/infoPage/InfoSections";
import { audiences, getAudience } from "@/data/pages/audiencesData";
import { buildPageMetadata, breadcrumbsJsonLd } from "@/helpers/buildPageMetadata";
import { i18n } from "@/dictionaries/i18n.config";

const PHOTOS = {
  lawyers: "/images/converus/eyedetect-examinee.webp",
  finance: "/images/converus/eyedetect-station-front.webp",
  security: "/images/converus/eyedetect-station-white.webp",
  hr: "/images/converus/verifeye-test.webp",
  counselors: "/images/converus/eyedetect-examinee.webp",
  recruiting: "/images/converus/verifeye-test.webp",
  miltech: "/images/converus/eyedetect-station-angle.webp",
  "remote-teams": "/images/converus/verifeye-test-2.webp",
  logistics: "/images/converus/eyedetect-station-white.webp",
  retail: "/images/converus/eyedetect-examinee.webp",
  "real-estate": "/images/converus/eyedetect-station-front.webp",
  medical: "/images/converus/eyedetect-station-white.webp",
  household: "/images/converus/verifeye-test-2.webp",
  insurance: "/images/converus/eyedetect-examinee.webp",
  franchise: "/images/converus/eyedetect-station-angle.webp",
};

export function generateStaticParams() {
  return i18n.locales.flatMap((lang) => audiences.map((a) => ({ lang, slug: a.slug })));
}

export async function generateMetadata({ params }) {
  const { lang, slug } = params;
  const d = getAudience(slug, lang);
  if (!d) return {};
  return buildPageMetadata({ lang, path: `for/${slug}`, title: d.seo.title, description: d.seo.description, keywords: d.seo.keywords });
}

// Сторінки для окремих аудиторій: юристи, банки, охорона, HR, психологи.
const AudiencePage = ({ params }) => {
  const { lang, slug } = params;
  const d = getAudience(slug, lang);
  if (!d) notFound();
  const crumbs = breadcrumbsJsonLd(lang, [["", d.seo.crumbHome], [`for/${slug}`, d.seo.crumb]]);
  const service = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: d.seo.crumb,
    description: d.seo.description,
    provider: { "@id": `${process.env.NEXT_PUBLIC_SEO_URL}#business` },
    areaServed: { "@type": "Country", name: { uk: "Україна", ru: "Украина", en: "Ukraine" }[lang] || "Україна" },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(crumbs) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(service) }} />
      <PageHero eyebrow={d.hero.eyebrow} title={d.hero.h1} sub={d.hero.sub} facts={d.hero.facts} primary={d.blocks.at(-1)?.button} service={d.blocks.at(-1)?.service} photo={PHOTOS[slug] || "/images/converus/eyedetect-examinee.webp"} photoAlt={d.seo.crumb} />
      <InfoSections blocks={d.blocks} lang={lang} />
    </>
  );
};

export default AudiencePage;
