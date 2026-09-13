// Аналітика: події в dataLayer (GTM → GA4, Google Ads, Meta) і джерело трафіку для заявок.
//
// Події, які сайт шле в dataLayer (назви стабільні, на них налаштовані теги й конверсії в GTM):
//   lead_quiz        заявка з квіза           { lead_branch, lead_format, lead_source }
//   lead_form        заявка з форми           { lead_service, lead_source }
//   click_phone      натискання на номер      { link_location }
//   click_messenger  Telegram / Viber / WhatsApp { messenger, link_location }
//   quiz_open        відкрито квіз            { quiz_page }
//   quiz_step        відповідь у квізі        { step, answer }

const FIRST_KEY = "eye_attr_first"; // перший захід (зберігаємо 90 днів)
const LAST_KEY = "eye_attr_last"; // останній захід з рекламною міткою
const TTL = 90 * 24 * 60 * 60 * 1000;
const CLICK_IDS = ["gclid", "gbraid", "wbraid", "fbclid", "msclkid", "ttclid"];
const UTM = ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content"];

export const track = (event, params = {}) => {
  if (typeof window === "undefined") return;
  try {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ event, ...params });
  } catch {}
};

const read = (key) => {
  try {
    const v = JSON.parse(localStorage.getItem(key) || "null");
    if (v && Date.now() - v.ts < TTL) return v;
  } catch {}
  return null;
};

const write = (key, v) => {
  try {
    localStorage.setItem(key, JSON.stringify(v));
  } catch {}
};

// Чи прийшла людина з реклами (є мітка кліку або платний utm_medium)
export const hasAdParams = () => {
  if (typeof window === "undefined") return false;
  const q = new URLSearchParams(window.location.search);
  return CLICK_IDS.some((k) => q.get(k)) || UTM.some((k) => q.get(k));
};

const describe = (a) => {
  if (!a) return "";
  if (a.gclid || a.gbraid || a.wbraid) return `Google Ads${a.utm_campaign ? ` / ${a.utm_campaign}` : ""}`;
  if (a.fbclid && /cpc|paid|ads/i.test(a.utm_medium || "")) return `Meta Ads${a.utm_campaign ? ` / ${a.utm_campaign}` : ""}`;
  if (a.utm_source) return `${a.utm_source}${a.utm_medium ? ` / ${a.utm_medium}` : ""}${a.utm_campaign ? ` / ${a.utm_campaign}` : ""}`;
  if (a.fbclid) return "Facebook / Instagram";
  if (!a.referrer) return "Прямий захід";
  try {
    const host = new URL(a.referrer).hostname.replace(/^www\./, "");
    if (/google\./.test(host)) return "Google органіка";
    if (/bing\.|duckduckgo|yahoo/.test(host)) return `Пошук: ${host}`;
    if (/facebook|instagram|tiktok|t\.me|telegram|youtube/.test(host)) return `Соцмережі: ${host}`;
    return `Сайт: ${host}`;
  } catch {
    return "";
  }
};

// Запам'ятовуємо джерело на першому заході і при кожному заході з рекламною міткою.
export const captureAttribution = () => {
  if (typeof window === "undefined") return;
  const q = new URLSearchParams(window.location.search);
  const ref = document.referrer && !document.referrer.includes(window.location.hostname) ? document.referrer : "";
  const cur = { ts: Date.now(), landing: window.location.pathname, referrer: ref };
  [...CLICK_IDS, ...UTM].forEach((k) => {
    const v = q.get(k);
    if (v) cur[k] = v.slice(0, 200);
  });
  const isAd = CLICK_IDS.some((k) => cur[k]) || UTM.some((k) => cur[k]);
  if (!read(FIRST_KEY)) write(FIRST_KEY, cur);
  if (isAd) write(LAST_KEY, cur);
};

// Текст для заявки в Telegram і коротке джерело для подій
export const attributionForLead = () => {
  const first = read(FIRST_KEY);
  const last = read(LAST_KEY);
  const main = last || first;
  const source = describe(main);
  const lines = [];
  if (source) lines.push(`Джерело: ${source}`);
  if (main?.utm_term) lines.push(`Ключове слово: ${main.utm_term}`);
  if (main?.landing) lines.push(`Перша сторінка: ${main.landing}`);
  if (main?.gclid) lines.push(`gclid: ${main.gclid}`);
  if (first && last && describe(first) !== source) lines.push(`Перший захід: ${describe(first)}`);
  return { source, text: lines.join("\n") };
};
