import LocationSection from "@/sections/locationSection/LocationSection";
import { cookies } from 'next/headers';
import dynamic from "next/dynamic";

const DynamicUkrainianCitiesSection = dynamic(() =>
  import("@/sections/ukrainianCitiesSection/UkrainianCitiesSection")
);

const DynamicEuropeanCitiesSection = dynamic(() =>
  import("@/sections/europeanCitiesSection/EuropeanCitiesSection")
);

export async function generateMetadata({ params }) {

  const data = {
    mainTitle: "Локації поліграфа EyeDetect: тестування в Україні та Європі",
    mainTitleRus: "Локации полиграфа EyeDetect: тестирование в Украине и Европе",
    mainDescription: "EyeDetect доступний у вашому регіоні! Знайдіть зручні локації в Україні та Європі для перевірки на детекторі брехні. Зручний запис і консультація.",
    mainDescriptionRus: "EyeDetect доступен в вашем регионе! Найдите удобные локации в Украине и Европе для проверки на детекторе лжи. Удобная запись и консультация.",
  };

  const language = cookies().get('language')?.value || 'ua';

  const title = language === 'ua' ? data.mainTitle : data.mainTitleRus;
  const description = language === 'ua' ? data.mainDescription : data.mainDescriptionRus;


  return {
    title,
    description,
    keywords: [
      "EyeDetect",
      "Локації",
      "Детектор брехні",
      "Консультація",
      "Тестування в Україні",
      "Локації поліграфа",
      "Локації в Європі",
    ],
  };
}


const LocationsPage = () => {
  return (
    <>
      <LocationSection />
      <DynamicUkrainianCitiesSection />
      <DynamicEuropeanCitiesSection />
    </>
  )
}


export default LocationsPage;