import HeroSection from "../sections/homeSections/heroSection/HeroSection";
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
      <DynamicHomeAboutSection />
      <DynamicHomeCertificatesSection isOnHomePage={true} />
      <DynamicHomeAdvantagesSection />
      <DynamicHomeClientsSection />
      <DynamicHomeTestingSection />
      <DynamicHomeDirectionsSection />
      <DynamicHomeCountriesSection />
      <DynamicHomeFAQSection data={FAQDataHome} />
      <DynamicHomeConditionsSection />
      <DynamicHomeOrderSection />
    </>
  );
}