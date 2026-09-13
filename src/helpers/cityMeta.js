import { i18n } from "@/dictionaries/i18n.config";
import { getCityEn } from "@/data/cityEn";

// Міста, куди виїзд неможливий: сторінки закриті, 308 на /locations.
export const EXCLUDED_CITIES = ["donetsk", "luhansk"];

// Міста рівня А: є попит у пошуку, отримують повний блок «виїзд».
export const TIER_A = [
  "kyiv", "lutsk", "vinnytsia", "ternopil", "rivne", "chernivtsi", "ivano-frankivsk",
  "uzhgorod", "odesa", "dnipro", "kharkiv",
  "prague", "warsaw", "chisinau", "tallinn", "vilnius", "riga", "bratislava",
  "berlin", "vienna", "dublin", "podgorica", "belgrade", "madrid",
];

// Захід України: доплата за виїзд за таблицею цін (+2 000 ₴).
const UA_WEST = ["lutsk", "rivne", "ternopil", "ivano-frankivsk", "chernivtsi", "uzhgorod", "khmelnytskyi"];

// Орієнтовна відстань від Львова автомобілем, км (для блоку «виїзд»).
const DISTANCE_KM = {
  lutsk: 150, rivne: 210, ternopil: 130, "ivano-frankivsk": 135, chernivtsi: 270, uzhgorod: 265,
  khmelnytskyi: 240, vinnytsia: 365, zhytomyr: 400, kyiv: 540, cherkasy: 580, kropyvnytskyi: 640,
  odesa: 800, mykolaiv: 760, kherson: 830, dnipro: 900, zaporizhzhia: 950, poltava: 870,
  kharkiv: 1000, sumy: 1000, chernihiv: 650,
  warsaw: 390, krakow: 330, bratislava: 640, prague: 750, budapest: 560, vienna: 700, berlin: 900,
  chisinau: 620, vilnius: 750, riga: 1000, tallinn: 1300, belgrade: 1100, podgorica: 1400,
};

export const getCityRegion = (slug, country = "") => {
  if (UA_WEST.includes(slug)) return "ua-west";
  if (/Україна|Украина/.test(country)) return "ua-other";
  return "eu";
};

export const getCityDistance = (slug) => DISTANCE_KM[slug] || null;

export const isTierA = (slug) => TIER_A.includes(slug);

// «у Києві» / «в Одесі» з наявного seoTitle («Детектор брехні у Києві з EyeDetect…»).
export const getCityLocative = (data, lang) => {
  if (lang === "en") return `in ${getCityEn(data.slug)}`;
  const isUk = lang === i18n.defaultLocale;
  const title = (isUk ? data.seoTitle : data.seoTitleRus) || "";
  const m = isUk
    ? title.match(/^Детектор брехні ((?:у|в) .+?) з EyeDetect/)
    : title.match(/^Детектор лжи ((?:в|во) .+?) с EyeDetect/);
  if (m) return m[1];
  return `${isUk ? "у" : "в"} ${isUk ? data.city : data.cityRus}`;
};
