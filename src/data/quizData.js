// Квіз розрахунку вартості (вікно поверх сторінки). Замінює adsquiz (price.eye-polygraph.com).
// Логіка за зразком квізів з розгалуженням: крок 1 обирає гілку, кроки 2–3 залежать від неї,
// кроки 4–5 спільні, далі форма контакту і подяка. Завжди «Крок N з 5».
// Ціну клієнту не показуємо: мета квіза отримати телефон, суму називає спеціаліст на дзвінку.
// Орієнтовний розрахунок і джерело трафіку йдуть лише в заявку в Telegram (рішення замовника 13.09.2026).
// Мови: поки лише uk.

import { pricingGroups } from "@/data/pricingData";

const price = (groupId, index) => pricingGroups.find((g) => g.id === groupId)?.items[index]?.price;

export const QUIZ_PRICES = {
  officeOne: price("private", 0) ?? 5500,
  officeThree: price("private", 1) ?? 8500,
  couple: price("private", 2) ?? 15000,
  onlineOne: price("online", 0) ?? 2500,
  onlineThree: price("online", 1) ?? 4000,
  otherRegionTurnkey: 12000,
  siteDiscount: 800,
};

export const quizData = {
  uk: {
    fab: "Розрахувати вартість",
    stepOf: "Крок {n} з 5",
    lastStep: "Останній крок",
    headline: "Дізнайтесь вартість перевірки на детекторі брехні за 30 секунд",
    gift: "Знижка 800 ₴ за заявку через сайт",
    giftNote: "Знижку врахуємо під час підтвердження запису.",
    back: "Назад",
    close: "Закрити",

    // Крок 1: обирає гілку
    q1: {
      k: "Що перевірити",
      q: "Що потрібно перевірити?",
      o: [
        { v: "theft", l: "Крадіжка або зникли гроші", i: "💸" },
        { v: "fidelity", l: "Зрада у стосунках", i: "💔" },
        { v: "hiring", l: "Кандидат або працівник", i: "👔" },
        { v: "personal", l: "Особиста ситуація: звинувачення, спір, залежність", i: "💬" },
      ],
    },

    // Кроки 2–3 для кожної гілки
    branches: {
      theft: [
        { k: "Де сталося", q: "Де це сталося?", o: ["На роботі, у компанії", "Вдома, у родині", "В іншому місці", "Поки не ясно"] },
        { k: "Під підозрою", q: "Скільки людей під підозрою?", o: ["1 людина", "2–5 людей", "Більше 5 людей", "Поки не знаю"] },
      ],
      fidelity: [
        { k: "Кого перевіряємо", q: "Кого потрібно перевірити?", o: ["Партнера чи партнерку", "Себе, щоб довести невинність", "Обох", "Поки не знаю"] },
        { k: "Що з'ясувати", q: "Що саме хочете з'ясувати?", o: ["Фізична зрада", "Приховане листування чи знайомства", "Приховані гроші чи витрати", "Усе разом"] },
      ],
      hiring: [
        { k: "Скільки людей", q: "Скільки кандидатів чи працівників?", o: ["1 людина", "2–5 людей", "6–15 людей", "Більше 15 людей"] },
        { k: "Що важливо", q: "Що для вас найважливіше?", o: ["Крадіжки на попередній роботі", "Залежності, борги, судимості", "Зв'язки з конкурентами", "Повна перевірка"] },
      ],
      personal: [
        { k: "Кого перевіряємо", q: "Кого потрібно перевірити?", o: ["Себе, щоб довести правду", "Члена родини", "Іншу людину", "Поки не знаю"] },
        { k: "Про що йдеться", q: "Про що йдеться?", o: ["Підозра на брехню", "Залежність: алкоголь, наркотики, азартні ігри", "Гроші чи борги", "Інша тема"] },
      ],
    },

    // Кроки 4–5 для всіх
    common: [
      { k: "Формат", q: "Який формат зручніший?", o: ["Онлайн зі смартфона (VerifEye)", "У кабінеті у Львові (EyeDetect)", "Виїзд до вас (EyeDetect)", "Не знаю, порадьте"] },
      { k: "Терміновість", q: "Наскільки терміново?", o: ["Терміново: сьогодні або завтра", "Цього тижня", "Протягом місяця", "Планую заздалегідь"] },
    ],

    contact: {
      title: "Куди надіслати вартість і вільні дати?",
      sub: "Точна ціна під вашу ситуацію, як проходить тест і найближчі дати. Конфіденційно.",
      summary: "Ваші відповіді:",
      whyTitle: "Навіщо нам ваш контакт",
      whyText: "Кожна ситуація різна. Ціна залежить від формату, кількості людей і питань, тому ми рахуємо її окремо і повідомляємо особисто.",
      whyGet: {
        online: "точну вартість і посилання на онлайн-тест",
        office: "точну вартість і вільний час у кабінеті у Львові",
        visit: "точну вартість з виїздом до вас",
        unsure: "точну вартість і пораду, який формат вам підходить",
      },
      whyGroup: " з ціною за людину для групи",
      whyPoints: [
        "Ви отримаєте {get}, порядок тесту і вільні дати.",
        "Відповімо туди, де вам зручно: дзвінок, Telegram, Viber чи WhatsApp.",
        "Зв'яжемось один раз щодо вашої заявки. Без розсилок і без передачі третім особам.",
        "Заявка ні до чого не зобов'язує і безкоштовна.",
      ],
      name: "Ім'я *",
      phone: "Телефон",
      channelTitle: "Як зручніше зв'язатись?",
      channels: ["Дзвінок", "Telegram", "Viber", "WhatsApp"],
      comment: "Коментар (за бажанням)",
      errName: "Вкажіть, як до вас звертатись.",
      errPhone: "Вкажіть номер телефону.",
      button: "Отримати вартість і дати",
      sending: "Надсилаємо…",
      fail: "Не вдалося надіслати. Зателефонуйте нам: ",
      note: "Дані конфіденційні.",
      privacy: "Політика конфіденційності",
    },

    done: {
      title: "Дякуємо! Заявку отримано",
      text: "Спеціаліст порахує точну вартість і зв'яжеться з вами протягом 15–30 хвилин у робочий час. Терміново: ",
      telegram: "Написати в Telegram",
      close: "Закрити",
    },
  },
};

export const getQuiz = (lang) => quizData[lang] || quizData.uk;

// Кроки для обраної гілки
export const quizSteps = (t, branch) => [t.q1, ...(branch ? t.branches[branch] : [{}, {}]), ...t.common];

const fmt = (n) => `${n.toLocaleString("uk-UA").replace(/ /g, " ")} ₴`;

// Орієнтовна сума для спеціаліста (клієнт не бачить). answers: масив текстів відповідей по кроках.
export const estimateQuiz = (branch, answers, t) => {
  const P = QUIZ_PRICES;
  const a2 = answers[1] || "";
  const a3 = answers[2] || "";
  const format = answers[3] || "";
  const online = format.startsWith("Онлайн");
  const visit = format.startsWith("Виїзд");

  let people = 1;
  let group = false;
  if (branch === "theft" || branch === "hiring") {
    const n = branch === "theft" ? a3 : a2;
    if (/^2–5/.test(n)) { people = 3; group = true; }
    else if (/6–15|Більше/.test(n)) { people = 6; group = true; }
  }
  const couple = branch === "fidelity" && a2 === "Обох";
  if (couple) people = 2;
  const threeQ = (branch === "fidelity" && a3 === "Усе разом") || (branch === "hiring" && a3 === "Повна перевірка");

  const per = online ? (threeQ ? P.onlineThree : P.onlineOne) : threeQ ? P.officeThree : P.officeOne;
  let sum = couple && !online ? P.couple : per * people;
  const parts = [];
  if (group) parts.push(`від ${fmt(per)} за людину, група ${people === 3 ? "2–5" : "6+"}`);
  else parts.push(fmt(sum));
  if (!group) parts.push(`зі знижкою ${fmt(Math.max(0, sum - P.siteDiscount))}`);
  if (visit) parts.push("виїзд: Львівська обл. безкоштовно, інші області 12 000 ₴ під ключ");
  if (threeQ) parts.push("до 3 питань");
  if (format.startsWith("Не знаю")) parts.push("формат не обрано");
  return parts.join("; ");
};

// Джерело трафіку для заявки
export const trafficSource = () => {
  if (typeof window === "undefined") return "";
  try {
    const q = new URLSearchParams(window.location.search);
    if (q.get("gclid") || q.get("gbraid") || q.get("wbraid")) return "Google Ads";
    const src = (q.get("utm_source") || "").toLowerCase();
    const med = (q.get("utm_medium") || "").toLowerCase();
    if (["cpc", "ppc", "paid", "paid_social"].includes(med)) return `Реклама: ${src || "?"}`;
    if (src) return `Кампанія: ${src}`;
    const ref = document.referrer || "";
    if (!ref) return "Прямий захід";
    const host = new URL(ref).hostname.replace(/^www\./, "");
    if (host === window.location.hostname.replace(/^www\./, "")) return "Внутрішній перехід";
    if (host.includes("google.")) return "Google органіка";
    if (/facebook|instagram|tiktok|t\.me|telegram/.test(host)) return `Соцмережі: ${host}`;
    return `Сайт: ${host}`;
  } catch {
    return "";
  }
};
