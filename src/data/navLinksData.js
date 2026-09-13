export const navLinksData = [
  {
    title: "Головна",
    titleRus: "Главная",
    titleEng: "Home",
    href: "/",
  },
  {
    title: "EyeDetect",
    titleRus: "EyeDetect",
    titleEng: "EyeDetect",
    href: "/eyedetect",
  },
  {
    title: "VerifEye онлайн",
    titleRus: "VerifEye онлайн",
    titleEng: "VerifEye online",
    href: "/online",
  },
  {
    title: "Для бізнесу",
    titleRus: "Для бизнеса",
    titleEng: "For business",
    href: "/business",
  },
  {
    title: "Ціни",
    titleRus: "Цены",
    titleEng: "Prices",
    href: "/prices",
  },
  {
    title: "Про нас",
    titleRus: "О нас",
    titleEng: "About",
    href: "/about-us",
  },
  {
    title: "Локації",
    titleRus: "Локации",
    titleEng: "Locations",
    href: "/locations",
  },
  {
    title: "Контакти",
    titleRus: "Контакты",
    titleEng: "Contact",
    href: "/contacts",
  },
];

// Підвал: те саме меню плюс блог.
export const footerLinksData = [
  ...navLinksData,
  {
    title: "Питання і відповіді",
    titleRus: "Вопросы и ответы",
    titleEng: "FAQ",
    href: "/faq",
  },
  {
    title: "Блог",
    titleRus: "Блог",
    titleEng: "Blog",
    href: "/blog",
  },
];
