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

// 21 місто України з власною сторінкою /locations/<slug>. Львова тут немає:
// його сторінка — головна, а /locations/lviv віддає 308 на неї (middleware.js).
export const getUkrainianCityPages = () => getUkrainianCities().filter((c) => c.slug !== "lviv");

export const getCityData = (slug) => allCitiesArray.find((item) => item.slug === slug);
