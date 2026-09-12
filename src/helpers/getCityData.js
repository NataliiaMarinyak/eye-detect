import { europeanCitiesData } from "@/data/europeanCitiesData";
import { ukrainianCitiesData } from "@/data/ukrainianCitiesData";
import { EXCLUDED_CITIES } from "@/helpers/cityMeta";

// Донецьк і Луганськ виключені: виїзд туди неможливий, сторінки дають 308 на /locations.
const allCitiesArray = [...ukrainianCitiesData, ...europeanCitiesData].filter(
  (c) => !EXCLUDED_CITIES.includes(c.slug)
);

export const getAllCities = () => allCitiesArray;

export const getUkrainianCities = () =>
  ukrainianCitiesData.filter((c) => !EXCLUDED_CITIES.includes(c.slug));

export const getCityData = (slug) => allCitiesArray.find((item) => item.slug === slug);
