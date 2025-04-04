import { cookies } from "next/headers";
import ContactsSection from "@/sections/contactsSection/ContactsSection";
import { getDictionary } from "@/helpers/getDictionary";

export async function generateMetadata({ params }) {
  const data = {
    mainTitle: "Контакти EyeDetect – поліграф у Львові, Україні та Європі",
    mainTitleRus: "Контакты EyeDetect - полиграф во Львове, Украине и Европе",
    mainDescription:
      "Зв’яжіться для перевірки на детекторі брехні EyeDetect. Адреса офісу у Львові та можливість виїзду по Україні та Європі. Консультації та виїзні послуги.",
    mainDescriptionRus:
      "Свяжитесь для проверки на детекторе лжи EyeDetect. Адрес офиса во Львове и возможность выезда по Украине и Европе. Консультации и выездные услуги.",
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
      "Виїзні послуги",
      "Детектор брехні",
      "Консультація",
      "Перевірка",
    ],
    alternates: {
      canonical: `${process.env.NEXT_PUBLIC_SEO_URL}contacts`,
    },
  };
}

const ContactsPage = async ({ params }) => {
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
          "@id": `${process.env.NEXT_PUBLIC_SEO_URL}contacts`,
          name: "Контакти EyeDetect.",
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
      <ContactsSection lang={lang} dictionary={dictionary} />
    </>
  );
};

export default ContactsPage;
