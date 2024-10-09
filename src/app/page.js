import HeroSection from "../sections/homeSections/heroSection/HeroSection";
import HomeAboutSection from "@/sections/homeSections/homeAboutSection/HomeAboutSection";
import HomeCertificatesSection from "@/sections/homeSections/homeCertificatesSection/HomeCertificatesSection";
import HomeAdvantagesSection from "@/sections/homeSections/homeAdvantagesSection/HomeAdvantagesSection";
import HomeClientsSection from "@/sections/homeSections/homeClientsSection/HomeClientsSection";
import HomeTestingSection from "@/sections/homeSections/homeTestingSection/HomeTestingSection";
import HomeDirectionsSection from "@/sections/homeSections/homeDirectionsSection/HomeDirectionsSection";
import HomeCountriesSection from "@/sections/homeSections/homeCountriesSection/HomeCountriesSection";
import HomeFAQSection from "@/sections/homeSections/homeFAQSection/HomeFAQSection";
import HomeConditionsSection from "@/sections/homeSections/homeConditionsSection/HomeConditionsSection";
import HomeOrderSection from "@/sections/homeSections/homeOrderSection/HomeOrderSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <HomeAboutSection />
      <HomeCertificatesSection isOnHomePage={true} />
      <HomeAdvantagesSection />
      <HomeClientsSection />
      <HomeTestingSection />
      <HomeDirectionsSection />
      <HomeCountriesSection />
      <HomeFAQSection />
      <HomeConditionsSection />
      <HomeOrderSection />
    </>
  );
}

// import Image from "next/image";
// import styles from "./page.module.css";

// export default function Home() {
//   return (
//     <div className={styles.page}>
//       <main className={styles.main}>
//         <Image
//           className={styles.logo}
//           src="https://nextjs.org/icons/next.svg"
//           alt="Next.js logo"
//           width={180}
//           height={38}
//           priority
//         />
//         <ol>
//           <li>
//             Get started by editing <code>src/app/page.js</code>.
//           </li>
//           <li>Save and see your changes instantly.</li>
//         </ol>

//         <div className={styles.ctas}>
//           <a
//             className={styles.primary}
//             href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <Image
//               className={styles.logo}
//               src="https://nextjs.org/icons/vercel.svg"
//               alt="Vercel logomark"
//               width={20}
//               height={20}
//             />
//             Deploy now
//           </a>
//           <a
//             href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//             className={styles.secondary}
//           >
//             Read our docs
//           </a>
//         </div>
//       </main>
//       <footer className={styles.footer}>
//         <a
//           href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <Image
//             aria-hidden
//             src="https://nextjs.org/icons/file.svg"
//             alt="File icon"
//             width={16}
//             height={16}
//           />
//           Learn
//         </a>
//         <a
//           href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <Image
//             aria-hidden
//             src="https://nextjs.org/icons/window.svg"
//             alt="Window icon"
//             width={16}
//             height={16}
//           />
//           Examples
//         </a>
//         <a
//           href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <Image
//             aria-hidden
//             src="https://nextjs.org/icons/globe.svg"
//             alt="Globe icon"
//             width={16}
//             height={16}
//           />
//           Go to nextjs.org →
//         </a>
//       </footer>
//     </div>
//   );
// }
