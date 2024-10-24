import { europeanCitiesData } from "@/data/europeanCitiesData";
import { ukrainianCitiesData } from "@/data/ukrainianCitiesData";


const allCitiesArray = [...ukrainianCitiesData, ...europeanCitiesData];


export const getCityData = (slug) => {
    const data = allCitiesArray?.find(item => item.slug === slug);

    return data;
}