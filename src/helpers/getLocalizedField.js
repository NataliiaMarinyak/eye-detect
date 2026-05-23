/**
 * Returns the localized value of an item for the given locale.
 *
 * Data files use this naming convention:
 *   - Ukrainian (default): baseKey            (e.g. "title")
 *   - Russian:             baseKey + "Rus"    (e.g. "titleRus")
 *   - English:             baseKey + "Eng"    (e.g. "titleEng")
 *
 * If the locale-specific field is missing, falls back to Ukrainian.
 */
export const getLocalizedField = (item, baseKey, lang) => {
  if (!item || !baseKey) return "";

  const suffixMap = {
    uk: "",
    ru: "Rus",
    en: "Eng",
  };

  const suffix = suffixMap[lang] ?? "";
  const localizedKey = suffix ? `${baseKey}${suffix}` : baseKey;

  return item[localizedKey] ?? item[baseKey] ?? "";
};
