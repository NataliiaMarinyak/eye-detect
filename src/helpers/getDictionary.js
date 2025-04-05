import "server-only";

const dictionaries = {
  uk: () => import("@/dictionaries/uk.json").then((module) => module.default),
  ru: () => import("@/dictionaries/ru.json").then((module) => module.default),
};

export const getDictionary = async (locale) => dictionaries[locale]();
