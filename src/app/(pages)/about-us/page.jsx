import ConsultationSection from "@/sections/consultationSection/ConsultationSection";
import SpecialistSection from "@/sections/specialistSection/SpecialistSection";
import HomeCertificatesSection from "@/sections/homeSections/homeCertificatesSection/HomeCertificatesSection";

export async function generateMetadata({ params }) {
    
    return {
      title: "Наталя Мариняк – професійний поліграфолог EyeDetect",
    description:
      "Отримайте експертну консультацію та професійну перевірку на детекторі брехні EyeDetect. Наталя Мариняк гарантує якість і конфіденційність.",
      keywords: [
        "EyeDetect",
        "Наталя Мариняк",
        "Детектор брехні",
        "Консультація",
        "Перевірка",
        "Професійний поліграфолог",
        "Поліграфолог",
      ],
    };
  }


const AboutUsPage = () => {
    return (
        <>
            <ConsultationSection />
            <SpecialistSection />
            <HomeCertificatesSection isOnHomePage={false} />
        </>
    )
}


export default AboutUsPage;