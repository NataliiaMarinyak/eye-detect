import ConsultationSection from "@/sections/consultationSection/ConsultationSection";
import { cookies } from 'next/headers';
import dynamic from "next/dynamic";

const DynamicSpecialistSection = dynamic(() =>
  import("@/sections/specialistSection/SpecialistSection")
);

const DynamicHomeCertificatesSection = dynamic(() =>
  import("@/sections/homeSections/homeCertificatesSection/HomeCertificatesSection")
);


export async function generateMetadata({ params }) {

  const data = {
    mainTitle: "Наталя Мариняк – професійний поліграфолог EyeDetect",
    mainTitleRus: "Наталья Мариняк - профессиональный полиграфолог EyeDetect",
    mainDescription: "Отримайте експертну консультацію та професійну перевірку на детекторі брехні EyeDetect. Наталя Мариняк гарантує якість і конфіденційність.",
    mainDescriptionRus: "Получите экспертную консультацию и профессиональную проверку на детекторе лжи EyeDetect. Наталья Мариняк гарантирует качество и конфиденциальность.",
  };

  const language = cookies().get('language')?.value || 'ua';

  const title = language === 'ua' ? data.mainTitle : data.mainTitleRus;
  const description = language === 'ua' ? data.mainDescription : data.mainDescriptionRus;


  return {
    title,
    description,
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
      <DynamicSpecialistSection />
      <DynamicHomeCertificatesSection isOnHomePage={false} />
    </>
  )
}


export default AboutUsPage;