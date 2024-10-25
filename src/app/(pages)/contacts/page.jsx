import ContactsSection from "@/sections/contactsSection/ContactsSection";

export async function generateMetadata({ params }) {
    
    return {
      title: "Контакти EyeDetect – поліграф у Львові, Україні та Європі",
    description:
      "Зв’яжіться для перевірки на детекторі брехні EyeDetect. Адреса офісу у Львові та можливість виїзду по Україні та Європі. Консультації та виїзні послуги.",
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