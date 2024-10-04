import { locationsData } from "./locationsData";

export const navLinks = [
  {
    title: "Головна",
    titleRu: "Главная",
    href: "/",
  },
  {
    title: "Про нас",
    titleRu: "О нас",
    href: "/about-us",
  },
  {
    title: "Локацї",
    titleRu: "Локацї",
    href: "/locations",
    subMenu: locationsData,
  },
  {
    title: "Контакти",
    titleRu: "Контакти",
    href: "/contacts",
  },
];
