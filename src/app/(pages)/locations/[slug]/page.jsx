import VideoSection from "@/sections/videoSection/VideoSection";
import ServicesSection from "@/sections/servicesSection/ServicesSection";
import GuaranteeSection from "@/sections/guaranteeSection/GuaranteeSection";
import HomeFAQSection from "@/sections/homeSections/homeFAQSection/HomeFAQSection";
import HomeConditionsSection from "@/sections/homeSections/homeConditionsSection/HomeConditionsSection";
import { ukrainianCitiesData } from "@/data/ukrainianCitiesData";
import { europeanCitiesData } from "@/data/europeanCitiesData";


const LocationIdPage = ({ params }) => {
    const { slug } = params;

    const allCitiesArray = [...ukrainianCitiesData, ...europeanCitiesData];

    const getCityData = (slug) => {
        const data = allCitiesArray?.find(item => item.slug === slug);
        return data;
    }

    const cityData = getCityData(slug);

    return (
        <>
            <VideoSection data={cityData} />
            <ServicesSection data={cityData} />
            <GuaranteeSection />
            <HomeFAQSection />
            <HomeConditionsSection />
        </>
    )
}


export default LocationIdPage;