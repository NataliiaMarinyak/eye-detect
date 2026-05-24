// ! test with GPT

import { NextResponse } from "next/server";
import { i18n } from "@/dictionaries/i18n.config";

export function middleware(request) {
  const { pathname } = request.nextUrl;

  // Пропускаємо системні файли
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.startsWith("/favicon.ico") ||
    pathname.startsWith("/robots") ||
    pathname.startsWith("/sitemap") ||
    pathname.match(/\.(png|jpg|jpeg|svg|gif|webp|ico|avif)$/)
  ) {
    return NextResponse.next();
  }

  // SEO fix: редирект /uk або /uk/... -> / або /... (308 permanent)
  // Запобігає дублюванню сторінок у Google Search Console
  if (pathname === `/${i18n.defaultLocale}` || pathname.startsWith(`/${i18n.defaultLocale}/`)) {
    const cleanPath = pathname.replace(new RegExp(`^/${i18n.defaultLocale}`), "") || "/";
    const url = request.nextUrl.clone();
    url.pathname = cleanPath;
    return NextResponse.redirect(url, 308);
  }

  // Якщо шлях не має локалі - rewrite на дефолтну (uk) без зміни URL
  const pathnameIsMissingLocale = i18n.locales.every(
    (locale) =>
      !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  );

  if (pathnameIsMissingLocale) {
    return NextResponse.rewrite(
      new URL(`/${i18n.defaultLocale}${pathname}`, request.url)
    );
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml).*)",
  ],
};
