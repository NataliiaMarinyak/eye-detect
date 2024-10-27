import HeroSection from "../sections/homeSections/heroSection/HeroSection";
// import HomeAboutSection from "@/sections/homeSections/homeAboutSection/HomeAboutSection";
// import HomeCertificatesSection from "@/sections/homeSections/homeCertificatesSection/HomeCertificatesSection";
// import HomeAdvantagesSection from "@/sections/homeSections/homeAdvantagesSection/HomeAdvantagesSection";
// import HomeClientsSection from "@/sections/homeSections/homeClientsSection/HomeClientsSection";
// import HomeTestingSection from "@/sections/homeSections/homeTestingSection/HomeTestingSection";
// import HomeDirectionsSection from "@/sections/homeSections/homeDirectionsSection/HomeDirectionsSection";
// import HomeCountriesSection from "@/sections/homeSections/homeCountriesSection/HomeCountriesSection";
// import HomeFAQSection from "@/sections/homeSections/homeFAQSection/HomeFAQSection";
// import HomeConditionsSection from "@/sections/homeSections/homeConditionsSection/HomeConditionsSection";
// import HomeOrderSection from "@/sections/homeSections/homeOrderSection/HomeOrderSection";
import { FAQDataHome } from "@/data/FAQDataHome";
import dynamic from "next/dynamic";


const DynamicHomeAboutSection = dynamic(() =>
  import("@/sections/homeSections/homeAboutSection/HomeAboutSection")
);

const DynamicHomeCertificatesSection = dynamic(() =>
  import("@/sections/homeSections/homeCertificatesSection/HomeCertificatesSection")
);
const DynamicHomeAdvantagesSection = dynamic(() =>
  import("@/sections/homeSections/homeAdvantagesSection/HomeAdvantagesSection")
);
const DynamicHomeClientsSection = dynamic(() =>
  import("@/sections/homeSections/homeClientsSection/HomeClientsSection")
);
const DynamicHomeTestingSection = dynamic(() =>
  import("@/sections/homeSections/homeTestingSection/HomeTestingSection")
);
const DynamicHomeDirectionsSection = dynamic(() =>
  import("@/sections/homeSections/homeDirectionsSection/HomeDirectionsSection")
);
const DynamicHomeCountriesSection = dynamic(() =>
  import("@/sections/homeSections/homeCountriesSection/HomeCountriesSection")
);
const DynamicHomeFAQSection = dynamic(() =>
  import("@/sections/homeSections/homeFAQSection/HomeFAQSection")
);
const DynamicHomeConditionsSection = dynamic(() =>
  import("@/sections/homeSections/homeConditionsSection/HomeConditionsSection")
);

const DynamicHomeOrderSection = dynamic(() =>
  import("@/sections/homeSections/homeOrderSection/HomeOrderSection")
);

export default function Home() {

  return (
    <>
      <HeroSection />
      {/* <HomeAboutSection /> */}
      <DynamicHomeAboutSection />
      {/* <HomeCertificatesSection isOnHomePage={true} /> */}
      <DynamicHomeCertificatesSection isOnHomePage={true} />
      {/* <HomeAdvantagesSection /> */}
      <DynamicHomeAdvantagesSection />
      {/* <HomeClientsSection /> */}
      <DynamicHomeClientsSection />
      {/* <HomeTestingSection /> */}
      <DynamicHomeTestingSection />
      {/* <HomeDirectionsSection /> */}
      <DynamicHomeDirectionsSection />
      {/* <HomeCountriesSection /> */}
      <DynamicHomeCountriesSection />
      {/* <HomeFAQSection data={FAQDataHome} /> */}
      <DynamicHomeFAQSection data={FAQDataHome} />
      {/* <HomeConditionsSection /> */}
      <DynamicHomeConditionsSection />
      {/* <HomeOrderSection /> */}
      <DynamicHomeOrderSection />
    </>
  );
}