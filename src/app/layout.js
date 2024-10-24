import localFont from "next/font/local";
import "./globals.scss";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import { SiteProvider } from "@/context/SiteContext";
import Modal from "@/components/Modal/Modal";
import TranslatorProvider from "@/translator/TranslatorProvider";

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
  title: "EyeDetect",
  description: "Сучасний науковий поліграф",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${ukraineHeadRegular.variable} ${ukraineBold.variable} ${ukraineRegular.variable}`}
      // style={{ overflowX: "hidden" }}
      >
        <SiteProvider>
          <TranslatorProvider>
            <Header />
            <main>{children}</main>
            <Footer />
            <Modal />
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
