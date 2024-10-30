import MachineSection from "@/sections/machineSection/MachineSection";
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
      <DynamicServicesSection />
      <DynamicTownsSection />
      <DynamicVideoSection />
      <DynamicGuaranteeSection />
      <DynamicHomeFAQSection data={FAQData} />
      <DynamicHomeConditionsSection />
    </>
  )
}


export default LocationIdPage;