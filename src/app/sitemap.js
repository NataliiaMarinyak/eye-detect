import { getAllCities } from "@/helpers/getCityData";
import { blogPosts } from "@/data/pages/blogData";
import { audiences } from "@/data/pages/audiencesData";
import { situations } from "@/data/pages/situationsData";

// export const runtime = "edge"; // або 'node' якщо edge не підходить
export const dynamic = "force-static";

const baseUrl = process.env.NEXT_PUBLIC_SEO_URL;
// Львів веде головна сторінка, а /locations/lviv віддає 308 на неї —
// тож у sitemap його не подаємо. Донецьк і Луганськ виключені в getAllCities.
const allCitiesArray = getAllCities().filter((el) => el.slug !== "lviv");


// Кожна мовна версія — окремий запис у sitemap з посиланнями на всі три версії
// (так радить Google для hreflang у sitemap).
const withLanguages = (path, priority, lastModified) => {
  const languages = {
    uk: `${baseUrl}${path}`,
    // головна мови — без кінцевого слеша (/ru/ віддає 308 на /ru)
    ru: path ? `${baseUrl}ru/${path}` : `${baseUrl}ru`,
    en: path ? `${baseUrl}en/${path}` : `${baseUrl}en`,
  };
  return Object.values(languages).map((url) => ({
    url,
    lastModified,
    changeFrequency: "monthly",
    priority,
    alternates: { languages },
  }));
};

export default async function sitemap() {
  const today = new Date().toISOString().split("T")[0];

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

  return routes.flatMap((route) => withLanguages(route.href, route.priority, today));
}

// todo new code

// import { NextResponse } from 'next/server';
// import { ukrainianCitiesData } from '@/data/ukrainianCitiesData';
// import { europeanCitiesData } from '@/data/europeanCitiesData';

// const baseUrl = process.env.NEXT_PUBLIC_SEO_URL

// export async function GET() {
//   const today = new Date().toISOString().split('T')[0];
//   const allCities = [...ukrainianCitiesData, ...europeanCitiesData];

//   let xml = `<?xml version="1.0" encoding="UTF-8"?>
// <urlset
//   xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
//   xmlns:xhtml="http://www.w3.org/1999/xhtml"
// >
// `;

//   // Основні сторінки
//   const staticRoutes = [
//     { path: '', priority: 1.0 },
//     { path: 'about-us', priority: 0.8 },
//     { path: 'locations', priority: 0.8 },
//     { path: 'contacts', priority: 0.6 },
//     { path: 'privacy-policy', priority: 0.6 },
//   ];

//   for (const route of staticRoutes) {
//     const url = `${baseUrl}/${route.path}`.replace(/\/+$/, '');
//     const urlRu = `${baseUrl}/ru/${route.path}`.replace(/\/+$/, '');

//     xml += `
//   <url>
//     <loc>${url}</loc>
//     <lastmod>${today}</lastmod>
//     <changefreq>monthly</changefreq>
//     <priority>${route.priority}</priority>
//     <xhtml:link rel="alternate" hreflang="uk" href="${url}" />
//     <xhtml:link rel="alternate" hreflang="ru" href="${urlRu}" />
//   </url>
// `;
//   }

//   // Міста
//   for (const city of allCities) {
//     const url = `${baseUrl}/locations/${city.slug}`;
//     const urlRu = `${baseUrl}/ru/locations/${city.slug}`;

//     xml += `
//   <url>
//     <loc>${url}</loc>
//     <lastmod>${today}</lastmod>
//     <changefreq>monthly</changefreq>
//     <priority>0.5</priority>
//     <xhtml:link rel="alternate" hreflang="uk" href="${url}" />
//     <xhtml:link rel="alternate" hreflang="ru" href="${urlRu}" />
//   </url>
// `;
//   }

//   xml += `</urlset>`;

//   return new NextResponse(xml, {
//     headers: {
//       'Content-Type': 'application/xml',
//     },
//   });
// }
