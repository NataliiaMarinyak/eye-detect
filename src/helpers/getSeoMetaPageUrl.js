import { i18n } from "@/dictionaries/i18n.config";

export const getSeoMetaPageUrl = (lang) => lang === i18n.defaultLocale ? `${process.env.NEXT_PUBLIC_SEO_URL}` : `${process.env.NEXT_PUBLIC_SEO_URL}${lang}/`;