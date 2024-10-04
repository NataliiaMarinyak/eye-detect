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
    title: "Локації",
    titleRu: "Локации",
    href: "/locations",
    subMenu: locationsData,
  },
  {
    title: "Контакти",
    titleRu: "Контакты",
    href: "/contacts",
  },
];
