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
    alternates: {
      canonical: `${process.env.NEXT_PUBLIC_SEO_URL}locations/${slug}`,
    },
  };
}


const LocationIdPage = ({params}) => {
  const slugId =  params?.slug;
  const dataId = getCityData(slugId);
  const jsonLd = {
    "@context": "http://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        item: {
          "@id": process.env.NEXT_PUBLIC_SEO_URL,
          name: "Головна сторінка Поліграф.",
        },
      },
      {
        "@type": "ListItem",
        position: 2,
        item: {
          "@id": `${process.env.NEXT_PUBLIC_SEO_URL}locations`,
          name: "Локації EyeDetect.",
        },
      },
      {
        "@type": "ListItem",
        position: 3,
        item: {
          "@id": `${process.env.NEXT_PUBLIC_SEO_URL}locations/${slugId}`,
          name: `Сучасний поліграф EyeDetect ${dataId?.city}.`,
        },
      },
    ],
  };

  return (
    <>
    <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
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