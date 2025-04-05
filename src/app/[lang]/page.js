import dynamic from "next/dynamic";
import HeroSection from "@/sections/homeSections/heroSection/HeroSection";
import { FAQDataHome } from "@/data/FAQDataHome";
import { getDictionary } from "@/helpers/getDictionary";

const DynamicHomeAboutSection = dynamic(() =>
  import("@/sections/homeSections/homeAboutSection/HomeAboutSection")
);

const DynamicHomeCertificatesSection = dynamic(() =>
  import(
    "@/sections/homeSections/homeCertificatesSection/HomeCertificatesSection"
  )
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

export default async function Home({ params }) {
  const { lang } = params;

  const jsonLd = {
    "@context": "http://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: {
      "@type": "ListItem",
      position: 1,
      item: {
        "@id": process.env.NEXT_PUBLIC_SEO_URL,
        name: "Головна сторінка Поліграф.",
      },
    },
  };

  const dictionary = await getDictionary(lang);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HeroSection dictionary={dictionary} />
      <DynamicHomeAboutSection lang={lang} dictionary={dictionary} />
      <DynamicHomeCertificatesSection
        isOnHomePage={true}
        lang={lang}
        dictionary={dictionary}
      />
      <DynamicHomeAdvantagesSection lang={lang} dictionary={dictionary} />
      <DynamicHomeClientsSection lang={lang} dictionary={dictionary} />
      <DynamicHomeTestingSection lang={lang} />
      <DynamicHomeDirectionsSection lang={lang} dictionary={dictionary} />
      <DynamicHomeCountriesSection lang={lang} dictionary={dictionary} />
      <DynamicHomeFAQSection
        data={FAQDataHome}
        lang={lang}
        dictionary={dictionary}
      />
      <DynamicHomeConditionsSection dictionary={dictionary} />
      <DynamicHomeOrderSection lang={lang} dictionary={dictionary} />
    </>
  );
}
