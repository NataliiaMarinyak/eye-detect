import LocationSection from "@/sections/locationSection/LocationSection";
import UkrainianCitiesSection from "@/sections/ukrainianCitiesSection/UkrainianCitiesSection";
import EuropeanCitiesSection from "@/sections/europeanCitiesSection/EuropeanCitiesSection";

export async function generateMetadata({ params }) {
    
    return {
      title: "Локації поліграфа EyeDetect: тестування в Україні та Європі",
    description:
      "EyeDetect доступний у вашому регіоні! Знайдіть зручні локації в Україні та Європі для перевірки на детекторі брехні. Зручний запис і консультація.",
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
            <UkrainianCitiesSection />
            <EuropeanCitiesSection />
        </>
    )
}


export default LocationsPage;