// import { cookies } from "next/headers";
import dynamic from "next/dynamic";
import ConsultationSection from "@/sections/consultationSection/ConsultationSection";
import { getDictionary } from "@/helpers/getDictionary";
import { i18n } from "@/dictionaries/i18n.config";

const DynamicSpecialistSection = dynamic(() =>
  import("@/sections/specialistSection/SpecialistSection")
);

const DynamicHomeCertificatesSection = dynamic(() =>
  import(
    "@/sections/homeSections/homeCertificatesSection/HomeCertificatesSection"
  )
);

export async function generateMetadata({ params }) {
  const { lang } = params;
  const data = {
    mainTitle: "Наталя Мариняк – професійний поліграфолог EyeDetect",
    mainTitleRus: "Наталья Мариняк - профессиональный полиграфолог EyeDetect",
    mainDescription:
      "Отримайте експертну консультацію та професійну перевірку на детекторі брехні EyeDetect. Наталя Мариняк гарантує якість і конфіденційність.",
    mainDescriptionRus:
      "Получите экспертную консультацию и профессиональную проверку на детекторе лжи EyeDetect. Наталья Мариняк гарантирует качество и конфиденциальность.",
  };

  // const language = cookies().get("language")?.value || "uk";

  const title = lang === i18n.locales[0] ? data.mainTitle : data.mainTitleRus;
  const description =
    lang === i18n.locales[0] ? data.mainDescription : data.mainDescriptionRus;

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
    alternates: {
      canonical: `${process.env.NEXT_PUBLIC_SEO_URL}about-us`,
    },
  };
}

const AboutUsPage = async ({ params }) => {
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
          "@id": `${process.env.NEXT_PUBLIC_SEO_URL}about-us`,
          name: "Сторінка про нас.",
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
      <ConsultationSection dictionary={dictionary} />
      <DynamicSpecialistSection lang={lang} dictionary={dictionary} />
      <DynamicHomeCertificatesSection
        isOnHomePage={false}
        lang={lang}
        dictionary={dictionary}
      />
    </>
  );
};

export default AboutUsPage;
