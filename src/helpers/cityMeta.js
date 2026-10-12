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

// Захід України: окремий регіон лише для тексту про відстань; ціна виїзду однакова по Україні (12 000 ₴ під ключ). Виняток — міста-партнери (PARTNER_CITIES): там виїзд до клієнта по місту 8 500 ₴, по області 12 000 ₴.
const UA_WEST = ["lutsk", "rivne", "ternopil", "ivano-frankivsk", "chernivtsi", "uzhgorod", "khmelnytskyi"];

// Орієнтовна відстань від Львова автомобілем, км (для блоку «виїзд»).
// Для міст з унікальним контентом звірено з маршрутами 15.09.2026.
// Цифра тут має збігатися з відстанню у вступі сторінки міста (src/data/cityUnique/<slug>.js): 09.10.2026 так виправлено
// Черкаси, Кропивницький, Миколаїв, Херсон, Запоріжжя, Суми, Чернігів і Будапешт (перевірено за маршрутами).
const DISTANCE_KM = {
  lutsk: 150, rivne: 210, ternopil: 130, "ivano-frankivsk": 135, chernivtsi: 270, uzhgorod: 265,
  khmelnytskyi: 240, vinnytsia: 365, zhytomyr: 400, kyiv: 540, cherkasy: 700, kropyvnytskyi: 690,
  odesa: 800, mykolaiv: 800, kherson: 880, dnipro: 950, zaporizhzhia: 970, poltava: 870,
  kharkiv: 1000, sumy: 870, chernihiv: 690,
  warsaw: 390, krakow: 330, bratislava: 670, prague: 860, budapest: 580, vienna: 790, berlin: 920,
  chisinau: 570, vilnius: 800, riga: 1000, tallinn: 1300, belgrade: 1000, podgorica: 1350,
};

export const getCityRegion = (slug, country = "") => {
  if (UA_WEST.includes(slug)) return "ua-west";
  if (/Україна|Украина/.test(country)) return "ua-other";
  return "eu";
};

// Місто України (а не Європи): отримує H1 зі словом «поліграф» і абзац про те, де є обладнання EyeDetect.
// Список міст, де тест проводить партнер у власному кабінеті, — PARTNER_CITIES у data/pages/cityTexts.js.
export const isUaRegion = (region) => region === "ua-west" || region === "ua-other";

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
