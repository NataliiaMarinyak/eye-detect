import { getSeoMetaPageUrl, getHomeUrl } from "@/helpers/getSeoMetaPageUrl";

const OG_IMAGES = [
  { url: "images/seo_images/opengraph-image-1200-630.png", type: "image/png", width: 1200, height: 630, alt: "EyeDetect" },
  { url: "images/seo_images/opengraph-image-400x300.png", type: "image/png", width: 400, height: 300, alt: "EyeDetect" },
  { url: "images/seo_images/twitter-image-800x600.png", type: "image/png", width: 800, height: 600, alt: "EyeDetect" },
];

/**
 * Єдиний спосіб зібрати metadata для внутрішньої сторінки:
 * title/description/canonical/hreflang/OpenGraph. Раніше цей блок
 * копіювався в кожній page.jsx.
 *
 * @param {object} p
 * @param {string} p.lang        поточна мова
 * @param {string} p.path        шлях без початкового слеша, напр. "eyedetect"
 * @param {string} p.title
 * @param {string} p.description
 * @param {string[]} [p.keywords]
 * @param {string} [p.ogTitle]
 * @param {string} [p.ogDescription]
 */
export const buildPageMetadata = ({ lang, path, title, description, keywords, ogTitle, ogDescription }) => {
  const base = process.env.NEXT_PUBLIC_SEO_URL;
  const pageUrl = `${getSeoMetaPageUrl(lang)}${path}`;
  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: pageUrl,
      languages: {
        uk: `${base}${path}`,
        ru: `${base}ru/${path}`,
        en: `${base}en/${path}`,
        "x-default": `${base}${path}`,
      },
    },
    openGraph: {
      title: ogTitle || title,
      url: pageUrl,
      description: ogDescription || description,
      siteName: "EyeDetect",
      type: "website",
      images: OG_IMAGES,
      locale: lang,
    },
  };
};

export const breadcrumbsJsonLd = (lang, items) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map(([path, name], i) => ({
    "@type": "ListItem",
    position: i + 1,
    item: { "@id": path ? `${getSeoMetaPageUrl(lang)}${path}` : getHomeUrl(lang), name },
  })),
});
