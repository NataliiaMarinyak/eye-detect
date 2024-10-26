import localFont from "next/font/local";
import "./globals.scss";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import { SiteProvider } from "@/context/SiteContext";
import Modal from "@/components/Modal/Modal";
import TranslatorProvider from "@/translator/TranslatorProvider";
import { Toaster } from "sonner";

const ukraineHeadRegular = localFont({
  src: "./fonts/e-UkraineHead-Regular.otf",
  variable: "--font-ukraine-head-regular",
  weight: "400",
});
const ukraineBold = localFont({
  src: "./fonts/e-Ukraine-Bold.otf",
  variable: "--font-ukraine-bold",
  weight: "700",
});
const ukraineRegular = localFont({
  src: "./fonts/e-Ukraine-Regular.otf",
  variable: "--font-ukraine-regular",
  weight: "400",
});

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
      <body
        className={`${ukraineHeadRegular.variable} ${ukraineBold.variable} ${ukraineRegular.variable}`}
      >
        <SiteProvider>
          <TranslatorProvider>
            <Header />
            <main>{children}</main>
            <Footer />
            <Modal />
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

// import localFont from "next/font/local";
// import "./globals.scss";

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

// export const metadata = {
//   title: "EyeDetect",
//   description: "Сучасний науковий поліграф",
// };

// export default function RootLayout({ children }) {
//   return (
//     <html lang="en">
//       <body className={`${geistSans.variable} ${geistMono.variable}`}>
//         {children}
//       </body>
//     </html>
//   );
// }
