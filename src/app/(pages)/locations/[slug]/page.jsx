import VideoSection from "@/sections/videoSection/VideoSection";
import ServicesSection from "@/sections/servicesSection/ServicesSection";
import TownsSection from "@/sections/townsSection/TownsSection";
import GuaranteeSection from "@/sections/guaranteeSection/GuaranteeSection";
import HomeFAQSection from "@/sections/homeSections/homeFAQSection/HomeFAQSection";
import HomeConditionsSection from "@/sections/homeSections/homeConditionsSection/HomeConditionsSection";
import { FAQData } from "@/data/FAQData";
import { cookies } from 'next/headers';
import { getCityData } from "@/helpers/getCityData";

export async function generateMetadata({ params }) {
    const { slug } = params;
    const language = cookies().get('language')?.value || 'ua';

    const data = getCityData(slug);
    const title = language === 'ru' ? data.mainTitleRus : data.mainTitle;
    const description = language === 'ru' ? data.mainDescriptionRus : data.mainDescription;

    return {
        title,
        description,
    };
}


const LocationIdPage = () => {


    return (
        <>
            <VideoSection />
            <ServicesSection />
            <TownsSection />
            <GuaranteeSection />
            <HomeFAQSection data={FAQData} />
            <HomeConditionsSection />
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