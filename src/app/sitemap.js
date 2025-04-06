import { europeanCitiesData } from "@/data/europeanCitiesData";
import { ukrainianCitiesData } from "@/data/ukrainianCitiesData";

// export const runtime = "edge"; // або 'node' якщо edge не підходить
export const dynamic = "force-static";

const baseUrl = process.env.NEXT_PUBLIC_SEO_URL;
const allCitiesArray = [...ukrainianCitiesData, ...europeanCitiesData];


export default async function sitemap() {
  const today = new Date().toISOString().split("T")[0];

    const oneCity = allCitiesArray?.map((el) => ({
        url: `${baseUrl}locations/${el.slug}`,
        lastModified: today,
        changeFrequency: "monthly",
        priority: 0.5,
        alternates: {
          languages: {
            uk: `${baseUrl}locations/${el.slug}`,
            ru: `${baseUrl}ru/locations/${el.slug}`,
          },
        },
      }));

    const routes = [
      { href: "", priority: 1.0 },
      { href: "about-us", priority: 0.8 },
      { href: "locations", priority: 0.8 },
      { href: "contacts", priority: 0.6 },
      { href: "privacy-policy", priority: 0.6 },
    ]?.map((route) => ({
      url: `${baseUrl}${route.href}`,
      lastModified: today,
      changeFrequency: "monthly",
      priority: route.priority,
      alternates: {
        languages: {
          uk: `${baseUrl}${route.href}`,
          ru: `${baseUrl}ru/${route.href}`,
        },
      },
    }));

    return [...routes, ...oneCity];

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
