import "./globals.scss";
import dynamic from "next/dynamic";
import { GoogleTagManager } from "@next/third-parties/google";
import { Toaster } from "sonner";
import { SiteProvider } from "@/context/SiteContext";
import TranslatorProvider from "@/translator/TranslatorProvider";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

const DynamicModal = dynamic(() =>
  import("@/components/Modal/Modal")
);


export const metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SEO_URL),
  title: "Поліграф у Львові: швидка і надійна перевірка з EyeDetect",
  description:
    "Детектор брехні EyeDetect у Львові – сучасний метод перевірки з гарантованою точністю для будь-яких ситуацій. Понад 500 задоволених клієнтів!",
  keywords: [
    "EyeDetect",
    "Львові",
    "Детектор брехні",
    "Консультація",
    "Перевірка",
    "Надійна перевірка",
    "Сучасний поліграф",
    "Поліграф-тестування",
  ],
  alternates: {
    canonical: process.env.NEXT_PUBLIC_SEO_URL,
  },
  
};


export default function RootLayout({ children }) {
  
  const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID;
  return (
    <html lang="uk-UA">
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
          <TranslatorProvider>
            <Header />
            <main>{children}</main>
            <Footer />
            <DynamicModal />
            <Toaster
              richColors
              position="top-center"
              toastOptions={{
                style: { background: "green", color: "white" },
              }}
            />
          </TranslatorProvider>
        </SiteProvider>
      </body>
    </html>
  );
}