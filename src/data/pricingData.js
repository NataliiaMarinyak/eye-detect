// Прайс на тестування EyeDetect.
// Ціни редагуються тут — сторінка /prices, блок у героєві та розмітка Offer
// беруть їх звідси, тож правити треба лише в одному місці.

export const PRICE_FROM = 5500;
export const CURRENCY = "UAH";

export const pricingGroups = [
  {
    id: "private",
    title: "Приватні перевірки",
    titleRus: "Частные проверки",
    titleEng: "Private testing",
    items: [
      {
        name: "Перевірка на вірність — одне питання",
        nameRus: "Проверка на верность — один вопрос",
        nameEng: "Fidelity test — one issue",
        price: 5500,
        priceLabel: "5 500 ₴",
        priceLabelRus: "5 500 ₴",
        priceLabelEng: "UAH 5,500",
      },
      {
        name: "Розширена перевірка — до трьох тем",
        nameRus: "Расширенная проверка — до трёх тем",
        nameEng: "Extended test — up to three issues",
        price: 8500,
        priceLabel: "8 500 ₴",
        priceLabelRus: "8 500 ₴",
        priceLabelEng: "UAH 8,500",
      },
      {
        name: "Перевірка для пари — обидва партнери",
        nameRus: "Проверка для пары — оба партнёра",
        nameEng: "Couples test — both partners",
        price: 9900,
        priceLabel: "9 900 ₴",
        priceLabelRus: "9 900 ₴",
        priceLabelEng: "UAH 9,900",
      },
    ],
  },
  {
    id: "business",
    title: "Для бізнесу",
    titleRus: "Для бизнеса",
    titleEng: "For business",
    items: [
      {
        name: "Перевірка кандидата або працівника",
        nameRus: "Проверка кандидата или сотрудника",
        nameEng: "Candidate or employee screening",
        price: 4500,
        priceLabel: "4 500 ₴ / особа",
        priceLabelRus: "4 500 ₴ / человек",
        priceLabelEng: "UAH 4,500 / person",
      },
      {
        name: "Від 3 осіб",
        nameRus: "От 3 человек",
        nameEng: "From 3 people",
        price: 3900,
        priceLabel: "3 900 ₴ / особа",
        priceLabelRus: "3 900 ₴ / человек",
        priceLabelEng: "UAH 3,900 / person",
      },
      {
        name: "Від 10 осіб",
        nameRus: "От 10 человек",
        nameEng: "From 10 people",
        price: 3200,
        priceLabel: "3 200 ₴ / особа",
        priceLabelRus: "3 200 ₴ / человек",
        priceLabelEng: "UAH 3,200 / person",
      },
      {
        name: "Службове розслідування",
        nameRus: "Служебное расследование",
        nameEng: "Internal investigation",
        price: 8000,
        priceLabel: "від 8 000 ₴",
        priceLabelRus: "от 8 000 ₴",
        priceLabelEng: "from UAH 8,000",
      },
    ],
  },
  {
    id: "travel",
    title: "Виїзд до клієнта",
    titleRus: "Выезд к клиенту",
    titleEng: "Travel to the client",
    items: [
      {
        name: "Львів і область до 50 км",
        nameRus: "Львов и область до 50 км",
        nameEng: "Lviv and region, up to 50 km",
        priceLabel: "включено",
        priceLabelRus: "включено",
        priceLabelEng: "included",
      },
      {
        name: "Західна Україна",
        nameRus: "Западная Украина",
        nameEng: "Western Ukraine",
        priceLabel: "+2 000 ₴",
        priceLabelRus: "+2 000 ₴",
        priceLabelEng: "+UAH 2,000",
      },
      {
        name: "Інші області України",
        nameRus: "Другие области Украины",
        nameEng: "Other regions of Ukraine",
        priceLabel: "від 12 000 ₴ разом із тестом",
        priceLabelRus: "от 12 000 ₴ вместе с тестом",
        priceLabelEng: "from UAH 12,000 including the test",
      },
    ],
  },
];

// Модифікатори — показуємо окремим рядком під таблицею.
export const pricingNotes = [
  {
    text: "Тест у день звернення — +30% до вартості.",
    textRus: "Тест в день обращения — +30% к стоимости.",
    textEng: "Same-day testing — +30%.",
  },
  {
    text: "Знижка 800 ₴ на заявку через сайт — код EYE25.",
    textRus: "Скидка 800 ₴ на заявку через сайт — код EYE25.",
    textEng: "UAH 800 off when you book through the site — code EYE25.",
  },
];

// Що клієнт отримує за ці гроші.
export const pricingIncluded = [
  {
    text: "Бесіда перед тестом: разом формулюємо конкретні питання.",
    textRus: "Беседа перед тестом: вместе формулируем конкретные вопросы.",
    textEng: "Pre-test interview: we formulate the specific questions together.",
  },
  {
    text: "Сам тест — 30–45 хвилин, без датчиків на тілі.",
    textRus: "Сам тест — 30–45 минут, без датчиков на теле.",
    textEng: "The test itself — 30–45 minutes, no body sensors.",
  },
  {
    text: "Автоматичний підрахунок результату алгоритмом, без людської оцінки.",
    textRus: "Автоматический подсчёт результата алгоритмом, без человеческой оценки.",
    textEng: "Automated algorithmic scoring, with no examiner judgement involved.",
  },
  {
    text: "Письмовий висновок із показником достовірності (Credibility Score).",
    textRus: "Письменное заключение с показателем достоверности (Credibility Score).",
    textEng: "A written report with a Credibility Score.",
  },
];

// Порівняння зі світовими цінами — курс НБУ станом на 27.08.2026.
export const pricingComparison = {
  text: "У Великій Британії такий самий тест EyeDetect коштує £595 — це близько 36 000 ₴. У Львові — 5 500 ₴. Технологія, обладнання та сертифікація ті самі.",
  textRus: "В Великобритании такой же тест EyeDetect стоит £595 — это около 36 000 ₴. Во Львове — 5 500 ₴. Технология, оборудование и сертификация те же.",
  textEng: "In the UK the same EyeDetect test costs £595 — about UAH 36,000. In Lviv it is UAH 5,500. Same technology, same equipment, same certification.",
};
