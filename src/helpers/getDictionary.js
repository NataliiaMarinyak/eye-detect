// import "server-only";

// const dictionaries = {
//   uk: () => import("@/dictionaries/uk.json").then((module) => module.default),
//   ru: () => import("@/dictionaries/ru.json").then((module) => module.default),
// };

// export const getDictionary = async (locale) => dictionaries[locale]();


import "server-only";

const dictionaries = {
  uk: () => import("@/dictionaries/uk.json").then((m) => m.default),
  ru: () => import("@/dictionaries/ru.json").then((m) => m.default),
};

export const getDictionary = async (locale) => {
  const loadDictionary = dictionaries[locale];
  if (!loadDictionary) {
    throw new Error(`Unsupported locale: ${locale}`);
  }
  return loadDictionary();
};