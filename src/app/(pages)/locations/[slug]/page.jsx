import MachineSection from "@/sections/machineSection/MachineSection";
// import ServicesSection from "@/sections/servicesSection/ServicesSection";
// import TownsSection from "@/sections/townsSection/TownsSection";
// import VideoSection from "@/sections/videoSection/VideoSection";
// import GuaranteeSection from "@/sections/guaranteeSection/GuaranteeSection";
// import HomeFAQSection from "@/sections/homeSections/homeFAQSection/HomeFAQSection";
// import HomeConditionsSection from "@/sections/homeSections/homeConditionsSection/HomeConditionsSection";
import { FAQData } from "@/data/FAQData";
import { cookies } from 'next/headers';
import { getCityData } from "@/helpers/getCityData";
import dynamic from "next/dynamic";


const DynamicServicesSection = dynamic(() =>
  import("@/sections/servicesSection/ServicesSection")
);

const DynamicTownsSection = dynamic(() =>
  import("@/sections/townsSection/TownsSection")
);

const DynamicVideoSection = dynamic(() =>
  import("@/sections/videoSection/VideoSection")
);

const DynamicGuaranteeSection = dynamic(() =>
  import("@/sections/guaranteeSection/GuaranteeSection")
);

const DynamicHomeFAQSection = dynamic(() =>
  import("@/sections/homeSections/homeFAQSection/HomeFAQSection")
);

const DynamicHomeConditionsSection = dynamic(() =>
  import("@/sections/homeSections/homeConditionsSection/HomeConditionsSection")
);

export async function generateMetadata({ params }) {
  const { slug } = params;
  const language = cookies().get('language')?.value || 'ua';

  const data = getCityData(slug);
  const title = language === 'ua' ? data.seoTitle : data.seoTitleRus;
  const description = language === 'ua' ? data.mainDescription : data.mainDescriptionRus;

  return {
    title,
    description,
    keywords: [
      "EyeDetect",
      "Перевірка вірності",
      "Детектор брехні",
      "Консультація",
      "Тестування в Україні",
      "Перевірка на поліграфі",
      "Тест перед весіллям",
      "Перевірка персоналу",
      "Службові розслідування",
      "Поліграф-тестування",
      "Умови тестування"
    ],
  };
}


const LocationIdPage = () => {


  return (
    <>
      <MachineSection />
      {/* <ServicesSection /> */}
      <DynamicServicesSection />
      {/* <TownsSection /> */}
      <DynamicTownsSection />
      {/* <VideoSection /> */}
      <DynamicVideoSection />
      {/* <GuaranteeSection /> */}
      <DynamicGuaranteeSection />
      {/* <HomeFAQSection data={FAQData} /> */}
      <DynamicHomeFAQSection data={FAQData} />
      {/* <HomeConditionsSection /> */}
      <DynamicHomeConditionsSection />
    </>
  )
}


export default LocationIdPage;









// import VideoSection from "@/sections/videoSection/VideoSection";
// import ServicesSection from "@/sections/servicesSection/ServicesSection";
// import TownsSection from "@/sections/townsSection/TownsSection";
// import GuaranteeSection from "@/sections/guaranteeSection/GuaranteeSection";
// import HomeFAQSection from "@/sections/homeSections/homeFAQSection/HomeFAQSection";
// import HomeConditionsSection from "@/sections/homeSections/homeConditionsSection/HomeConditionsSection";
// import { ukrainianCitiesData } from "@/data/ukrainianCitiesData";
// import { europeanCitiesData } from "@/data/europeanCitiesData";
// import { FAQData } from "@/data/FAQData";


// const LocationIdPage = ({ params }) => {
//     const { slug } = params;

//     const allCitiesArray = [...ukrainianCitiesData, ...europeanCitiesData];

//     const getCityData = (slug) => {
//         const data = allCitiesArray?.find(item => item.slug === slug);
//         return data;
//     }

//     const cityData = getCityData(slug);

//     return (
//         <>
//             <VideoSection data={cityData} />
//             <ServicesSection data={cityData} />
//             <TownsSection data={cityData} />
//             <GuaranteeSection />
//             <HomeFAQSection data={FAQData} />
//             <HomeConditionsSection />
//         </>
//     )
// }


// export default LocationIdPage;