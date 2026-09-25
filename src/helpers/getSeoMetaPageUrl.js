import { i18n } from "@/dictionaries/i18n.config";

export const getSeoMetaPageUrl = (lang) => lang === i18n.defaultLocale ? `${process.env.NEXT_PUBLIC_SEO_URL}` : `${process.env.NEXT_PUBLIC_SEO_URL}${lang}/`;

// Адреса головної сторінки мови без кінцевого слеша: /ru/ віддає 308 на /ru,
// тож canonical, hreflang і breadcrumbs мають вести одразу на /ru.
export const getHomeUrl = (lang) => getSeoMetaPageUrl(lang).replace(/(\/(?:ru|en))\/$/, "$1");
