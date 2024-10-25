import ContactsSection from "@/sections/contactsSection/ContactsSection";
import { cookies } from 'next/headers';


export async function generateMetadata({ params }) {

  const data = {    
    mainTitle: "Контакти EyeDetect – поліграф у Львові, Україні та Європі",
    mainTitleRus: "Контакты EyeDetect - полиграф во Львове, Украине и Европе",
    mainDescription: "Зв’яжіться для перевірки на детекторі брехні EyeDetect. Адреса офісу у Львові та можливість виїзду по Україні та Європі. Консультації та виїзні послуги.",
    mainDescriptionRus: "Свяжитесь для проверки на детекторе лжи EyeDetect. Адрес офиса во Львове и возможность выезда по Украине и Европе. Консультации и выездные услуги.",
  };
    
  const language = cookies().get('language')?.value || 'ua';

  const title = language === 'ua' ? data.mainTitle : data.mainTitleRus;
  const description = language === 'ua' ? data.mainDescription : data.mainDescriptionRus;


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
    };
  }

const ContactsPage = () => {
    return (
        <>
            <ContactsSection />
        </>
    )
}


export default ContactsPage;