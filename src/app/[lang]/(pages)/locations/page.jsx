import { cookies } from "next/headers";
import dynamic from "next/dynamic";
import LocationSection from "@/sections/locationSection/LocationSection";
import { getDictionary } from "@/helpers/getDictionary";

const DynamicUkrainianCitiesSection = dynamic(() =>
  import("@/sections/ukrainianCitiesSection/UkrainianCitiesSection")
);

const DynamicEuropeanCitiesSection = dynamic(() =>
  import("@/sections/europeanCitiesSection/EuropeanCitiesSection")
);

export async function generateMetadata({ params }) {
  const data = {
    mainTitle: "Локації поліграфа EyeDetect: тестування в Україні та Європі",
    mainTitleRus:
      "Локации полиграфа EyeDetect: тестирование в Украине и Европе",
    mainDescription:
      "EyeDetect доступний у вашому регіоні! Знайдіть зручні локації в Україні та Європі для перевірки на детекторі брехні. Зручний запис і консультація.",
    mainDescriptionRus:
      "EyeDetect доступен в вашем регионе! Найдите удобные локации в Украине и Европе для проверки на детекторе лжи. Удобная запись и консультация.",
  };

  const language = cookies().get("language")?.value || "ua";

  const title = language === "ua" ? data.mainTitle : data.mainTitleRus;
  const description =
    language === "ua" ? data.mainDescription : data.mainDescriptionRus;

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
    alternates: {
      canonical: `${process.env.NEXT_PUBLIC_SEO_URL}locations`,
    },
  };
}

const LocationsPage = async ({ params }) => {
  const { lang } = params;
  const dictionary = await getDictionary(lang);

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
    ],
  };
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <LocationSection lang={lang} dictionary={dictionary} />
      <DynamicUkrainianCitiesSection lang={lang} dictionary={dictionary} />
      <DynamicEuropeanCitiesSection lang={lang} dictionary={dictionary} />
    </>
  );
};

export default LocationsPage;
