import "@/app/globals.scss";
import dynamic from "next/dynamic";
import { GoogleTagManager } from "@next/third-parties/google";
import { Toaster } from "sonner";
import { SiteProvider } from "@/context/SiteContext";
// import TranslatorProvider from "@/translator/TranslatorProvider";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import CallWidget from "@/components/CallWidget/CallWidget";
import PriceFloatBtn from "@/components/PriceFloatBtn/PriceFloatBtn";
import { i18n } from "@/dictionaries/i18n.config";
import { getDictionary } from "@/helpers/getDictionary";

const DynamicModal = dynamic(() => import("@/components/Modal/Modal"));

export const metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SEO_URL),
  // title: "Поліграф у Львові: швидка і надійна перевірка з EyeDetect",
  // description:
  //   "Детектор брехні EyeDetect у Львові – сучасний метод перевірки з гарантованою точністю для будь-яких ситуацій. Понад 500 задоволених клієнтів!",
  // keywords: [
  //   "EyeDetect",
  //   "Львові",
  //   "Детектор брехні",
  //   "Консультація",
  //   "Перевірка",
  //   "Надійна перевірка",
  //   "Сучасний поліграф",
  //   "Поліграф-тестування",
  // ],
  // alternates: {
  //   canonical: process.env.NEXT_PUBLIC_SEO_URL,
  // },
  // openGraph: {
  //   title: "Поліграф у Львові: швидка і надійна перевірка з EyeDetect✅",
  //   url: process.env.NEXT_PUBLIC_SEO_URL,
  //   description:
  //     "Детектор брехні EyeDetect у Львові 👆 сучасний метод перевірки з гарантованою точністю для будь-яких ситуацій. Понад 500 задоволених клієнтів!",
  //   siteName: "EyeDetect",
  //   type: "website",
  //   images: [
  //     {
  //       url: "images/seo_images/opengraph-image-400x300.png",
  //       type: "image/png",
  //       width: 400,
  //       height: 300,
  //       alt: "EyeDetect",
  //     },
  //     {
  //       url: "images/seo_images/twitter-image-800x600.png",
  //       type: "image/png",
  //       width: 800,
  //       height: 600,
  //       alt: "EyeDetect",
  //     },
  //     {
  //       url: "images/seo_images/opengraph-image-1200-630.png",
  //       type: "image/png",
  //       width: 1200,
  //       height: 630,
  //       alt: "EyeDetect",
  //     },
  //   ],
  //   locale: "uk",
  // },
};

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

export default async function RootLayout({ children, params }) {
  const { lang } = params;
  const dictionary = await getDictionary(lang);

  const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID;
  return (
    <html lang={lang}>
      <GoogleTagManager gtmId={`${GTM_ID}`} />
      <body>
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        <SiteProvider>
          {/* <TranslatorProvider> */}
          <Header lang={lang} dictionary={dictionary} />
          <main>{children}</main>
          <Footer dictionary={dictionary} lang={lang} />
          <DynamicModal dictionary={dictionary} />
          <Toaster
            richColors
            position="top-center"
            toastOptions={{
              style: { background: "green", color: "white" },
            }}
          />
          {/* </TranslatorProvider> */}
        </SiteProvider>
        <PriceFloatBtn title={dictionary.buttons.calculatePrice} />
        <CallWidget />
      </body>
    </html>
  );
}
