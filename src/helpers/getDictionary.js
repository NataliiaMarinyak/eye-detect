import "server-only";

const dictionaries = {
  ua: () => import("@/dictionaries/ua.json").then((module) => module.default),
  ru: () => import("@/dictionaries/ru.json").then((module) => module.default),
};

export const getDictionary = async (locale) => dictionaries[locale]();
