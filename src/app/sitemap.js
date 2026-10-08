import { getAllCities } from "@/helpers/getCityData";
import { blogPosts } from "@/data/pages/blogData";
import { audiences } from "@/data/pages/audiencesData";
import { situations } from "@/data/pages/situationsData";
import lastmod from "@/data/lastmod.json";

// export const runtime = "edge"; // або 'node' якщо edge не підходить
export const dynamic = "force-static";

const baseUrl = process.env.NEXT_PUBLIC_SEO_URL;
// Львів веде головна сторінка, а /locations/lviv віддає 308 на неї —
// тож у sitemap його не подаємо. Донецьк і Луганськ виключені в getAllCities.
const allCitiesArray = getAllCities().filter((el) => el.slug !== "lviv");

// Дата останньої зміни контенту кожної сторінки лежить у src/data/lastmod.json. Файл генерує
// `npm run lastmod` з історії git (локально: на Vercel клон неглибокий), його комітимо.
// Маршрут без запису отримує сталу дату, а не «сьогодні»: інакше кожна збірка казала б Google,
// що сторінка змінилась.
const LASTMOD_FALLBACK = "2026-10-08";

// Кожна мовна версія — окремий запис у sitemap з посиланнями на всі три версії
// (так радить Google для hreflang у sitemap).
const withLanguages = (path, priority, lastModified) => {
  const languages = {
    uk: `${baseUrl}${path}`,
    // головна мови — без кінцевого слеша (/ru/ віддає 308 на /ru)
    ru: path ? `${baseUrl}ru/${path}` : `${baseUrl}ru`,
    en: path ? `${baseUrl}en/${path}` : `${baseUrl}en`,
  };
  const withDefault = { ...languages, "x-default": languages.uk };
  return Object.values(languages).map((url) => ({
    url,
    lastModified,
    changeFrequency: "monthly",
    priority,
    alternates: { languages: withDefault },
  }));
};

export default async function sitemap() {
  const routes = [
    { href: "", priority: 1.0 },
    { href: "prices", priority: 0.9 },
    { href: "eyedetect", priority: 0.9 },
    { href: "online", priority: 0.9 },
    { href: "free-test", priority: 0.8 },
    { href: "business", priority: 0.9 },
    { href: "situations", priority: 0.8 },
    ...situations.map((s) => ({ href: `situations/${s.slug}`, priority: 0.8 })),
    { href: "faq", priority: 0.8 },
    { href: "converus", priority: 0.7 },
    { href: "for", priority: 0.8 },
    ...audiences.map((a) => ({ href: `for/${a.slug}`, priority: 0.7 })),
    { href: "blog", priority: 0.7 },
    ...blogPosts.map((p) => ({ href: `blog/${p.slug}`, priority: 0.6 })),
    { href: "about-us", priority: 0.8 },
    { href: "locations", priority: 0.8 },
    { href: "contacts", priority: 0.6 },
    { href: "privacy-policy", priority: 0.6 },
    ...allCitiesArray.map((el) => ({ href: `locations/${el.slug}`, priority: 0.5 })),
  ];

  return routes.flatMap((route) => withLanguages(route.href, route.priority, lastmod[route.href] || LASTMOD_FALLBACK));
}
