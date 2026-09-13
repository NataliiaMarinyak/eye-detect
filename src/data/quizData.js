// Квіз розрахунку вартості (вікно поверх сторінки). Замінює adsquiz (price.eye-polygraph.com).
// Логіка за зразком квізів з розгалуженням: крок 1 обирає гілку, кроки 2–3 залежать від неї,
// кроки 4–5 спільні, далі форма контакту і подяка. Завжди «Крок N з 5».
// Ціну клієнту не показуємо: мета квіза отримати телефон, суму називає спеціаліст на дзвінку.
// Орієнтовний розрахунок і джерело трафіку йдуть лише в заявку в Telegram (рішення замовника 13.09.2026).
// Мови: uk, ru, en. У заявку в Telegram відповіді йдуть українською (за індексами).

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
      call: "Зателефонувати зараз",
      close: "Закрити",
    },
  },
  ru: {
    stepOf: "Шаг {n} из 5",
    lastStep: "Последний шаг",
    headline: "Узнайте стоимость проверки на детекторе лжи за 30 секунд",
    gift: "Скидка 800 ₴ за заявку через сайт",
    giftNote: "Скидку учтём при подтверждении записи.",
    back: "Назад",
    close: "Закрыть",
    q1: {
      k: "Что проверить",
      q: "Что нужно проверить?",
      o: [
        { v: "theft", l: "Кража или пропали деньги", i: "💸" },
        { v: "fidelity", l: "Измена в отношениях", i: "💔" },
        { v: "hiring", l: "Кандидат или сотрудник", i: "👔" },
        { v: "personal", l: "Личная ситуация: обвинение, спор, зависимость", i: "💬" },
      ],
    },
    branches: {
      theft: [
        { k: "Где произошло", q: "Где это произошло?", o: ["На работе, в компании", "Дома, в семье", "В другом месте", "Пока не ясно"] },
        { k: "Под подозрением", q: "Сколько людей под подозрением?", o: ["1 человек", "2–5 человек", "Больше 5 человек", "Пока не знаю"] },
      ],
      fidelity: [
        { k: "Кого проверяем", q: "Кого нужно проверить?", o: ["Партнёра или партнёршу", "Себя, чтобы доказать невиновность", "Обоих", "Пока не знаю"] },
        { k: "Что выяснить", q: "Что именно хотите выяснить?", o: ["Физическая измена", "Скрытая переписка или знакомства", "Скрытые деньги или траты", "Всё вместе"] },
      ],
      hiring: [
        { k: "Сколько людей", q: "Сколько кандидатов или сотрудников?", o: ["1 человек", "2–5 человек", "6–15 человек", "Больше 15 человек"] },
        { k: "Что важно", q: "Что для вас важнее всего?", o: ["Кражи на прошлой работе", "Зависимости, долги, судимости", "Связи с конкурентами", "Полная проверка"] },
      ],
      personal: [
        { k: "Кого проверяем", q: "Кого нужно проверить?", o: ["Себя, чтобы доказать правду", "Члена семьи", "Другого человека", "Пока не знаю"] },
        { k: "О чём речь", q: "О чём идёт речь?", o: ["Подозрение на ложь", "Зависимость: алкоголь, наркотики, азартные игры", "Деньги или долги", "Другая тема"] },
      ],
    },
    common: [
      { k: "Формат", q: "Какой формат удобнее?", o: ["Онлайн со смартфона (VerifEye)", "В кабинете во Львове (EyeDetect)", "Выезд к вам (EyeDetect)", "Не знаю, посоветуйте"] },
      { k: "Срочность", q: "Насколько срочно?", o: ["Срочно: сегодня или завтра", "На этой неделе", "В течение месяца", "Планирую заранее"] },
    ],
    contact: {
      title: "Куда отправить стоимость и свободные даты?",
      name: "Имя *",
      phone: "Телефон",
      channelTitle: "Как удобнее связаться?",
      channels: ["Звонок", "Telegram", "Viber", "WhatsApp"],
      errName: "Укажите, как к вам обращаться.",
      button: "Получить стоимость и даты",
      sending: "Отправляем…",
      fail: "Не удалось отправить. Позвоните нам: ",
      privacy: "Политика конфиденциальности",
    },
    done: {
      title: "Спасибо! Заявка получена",
      text: "Специалист рассчитает точную стоимость и свяжется с вами в течение 15–30 минут в рабочее время. Срочно: ",
      call: "Позвонить сейчас",
      close: "Закрыть",
    },
  },
  en: {
    stepOf: "Step {n} of 5",
    lastStep: "Last step",
    headline: "Find out the cost of a lie detector test in 30 seconds",
    gift: "UAH 800 off when you request through the site",
    giftNote: "The discount is applied when we confirm your booking.",
    back: "Back",
    close: "Close",
    q1: {
      k: "What to check",
      q: "What needs to be checked?",
      o: [
        { v: "theft", l: "Theft or missing money", i: "💸" },
        { v: "fidelity", l: "Infidelity in a relationship", i: "💔" },
        { v: "hiring", l: "Job candidate or employee", i: "👔" },
        { v: "personal", l: "Personal matter: accusation, dispute, addiction", i: "💬" },
      ],
    },
    branches: {
      theft: [
        { k: "Where", q: "Where did it happen?", o: ["At work, in a company", "At home, in the family", "Somewhere else", "Not clear yet"] },
        { k: "Suspects", q: "How many people are suspected?", o: ["1 person", "2–5 people", "More than 5 people", "Not sure yet"] },
      ],
      fidelity: [
        { k: "Who is tested", q: "Who needs to be tested?", o: ["My partner", "Myself, to prove my innocence", "Both of us", "Not sure yet"] },
        { k: "What to find out", q: "What exactly do you want to find out?", o: ["Physical infidelity", "Hidden chats or contacts", "Hidden money or spending", "All of the above"] },
      ],
      hiring: [
        { k: "How many", q: "How many candidates or employees?", o: ["1 person", "2–5 people", "6–15 people", "More than 15 people"] },
        { k: "Priority", q: "What matters most to you?", o: ["Theft at a previous job", "Addictions, debts, criminal record", "Links to competitors", "Full screening"] },
      ],
      personal: [
        { k: "Who is tested", q: "Who needs to be tested?", o: ["Myself, to prove the truth", "A family member", "Another person", "Not sure yet"] },
        { k: "Topic", q: "What is it about?", o: ["Suspected lying", "Addiction: alcohol, drugs, gambling", "Money or debts", "Something else"] },
      ],
    },
    common: [
      { k: "Format", q: "Which format suits you?", o: ["Online from a smartphone (VerifEye)", "In our Lviv office (EyeDetect)", "On-site, we come to you (EyeDetect)", "Not sure, please advise"] },
      { k: "Urgency", q: "How urgent is it?", o: ["Urgent: today or tomorrow", "This week", "Within a month", "Planning ahead"] },
    ],
    contact: {
      title: "Where should we send the price and available dates?",
      name: "Name *",
      phone: "Phone",
      channelTitle: "How would you like us to contact you?",
      channels: ["Call", "Telegram", "Viber", "WhatsApp"],
      errName: "Please tell us your name.",
      button: "Get the price and dates",
      sending: "Sending…",
      fail: "Could not send. Please call us: ",
      privacy: "Privacy policy",
    },
    done: {
      title: "Thank you! Request received",
      text: "The examiner will calculate the exact price and contact you within 15–30 minutes during business hours. Urgent: ",
      call: "Call now",
      close: "Close",
    },
  },
};

export const getQuiz = (lang) => quizData[lang] || quizData.uk;

// Кроки для обраної гілки
export const quizSteps = (t, branch) => [t.q1, ...(branch ? t.branches[branch] : [{}, {}]), ...t.common];

const fmt = (n) => `${n.toLocaleString("uk-UA").replace(/ /g, " ")} ₴`;

// Орієнтовна сума для спеціаліста (клієнт не бачить). idx: індекси обраних варіантів по кроках.
// Кроки: 0 гілка, 1–2 питання гілки, 3 формат (0 онлайн, 1 кабінет, 2 виїзд, 3 не знаю), 4 терміновість.
export const estimateQuiz = (branch, idx) => {
  const P = QUIZ_PRICES;
  const format = idx[3];
  const online = format === 0;
  let people = 1;
  let group = false;
  if (branch === "theft" || branch === "hiring") {
    const n = branch === "theft" ? idx[2] : idx[1];
    if (n === 1) { people = 3; group = true; }
    else if (n === 2 || (branch === "hiring" && n === 3)) { people = 6; group = true; }
  }
  const couple = branch === "fidelity" && idx[1] === 2;
  if (couple) people = 2;
  const threeQ = (branch === "fidelity" || branch === "hiring") && idx[2] === 3;
  const per = online ? (threeQ ? P.onlineThree : P.onlineOne) : threeQ ? P.officeThree : P.officeOne;
  const sum = couple && !online ? P.couple : per * people;
  const parts = [];
  if (group) parts.push("від " + fmt(per) + " за людину, група " + (people === 3 ? "2–5" : "6+"));
  else parts.push(fmt(sum), "зі знижкою " + fmt(Math.max(0, sum - P.siteDiscount)));
  if (format === 2) parts.push("виїзд: Львівська обл. безкоштовно, інші області 12 000 ₴ під ключ");
  if (threeQ) parts.push("до 3 питань");
  if (format === 3) parts.push("формат не обрано");
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
