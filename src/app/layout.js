import "./globals.scss";
import dynamic from "next/dynamic";
import { Toaster } from "sonner";
import { SiteProvider } from "@/context/SiteContext";
import TranslatorProvider from "@/translator/TranslatorProvider";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

const DynamicModal = dynamic(() =>
  import("@/components/Modal/Modal")
);


export const metadata = {
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
};


export default function RootLayout({ children }) {
  return (
    <html lang="uk-UA">
      <body>
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