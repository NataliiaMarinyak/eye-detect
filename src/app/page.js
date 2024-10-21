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
import { FAQDataHome } from "@/data/FAQDataHome";


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
      <HomeFAQSection data={FAQDataHome} />
      <HomeConditionsSection />
      <HomeOrderSection />
    </>
  );
}