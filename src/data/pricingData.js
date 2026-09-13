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
        name: "Розширена перевірка — до трьох запитань",
        nameRus: "Расширенная проверка — до трёх вопросов",
        nameEng: "Extended test — up to three issues",
        price: 8500,
        priceLabel: "8 500 ₴",
        priceLabelRus: "8 500 ₴",
        priceLabelEng: "UAH 8,500",
      },
      {
        name: "Перевірка для пари — по одному тесту EyeDetect кожному, до трьох запитань",
        nameRus: "Проверка для пары — по одному тесту EyeDetect каждому, до трёх вопросов",
        nameEng: "Couples test — one EyeDetect test each, up to three issues",
        price: 15000,
        priceLabel: "15 000 ₴",
        priceLabelRus: "15 000 ₴",
        priceLabelEng: "UAH 15,000",
      },
    ],
  },
  {
    id: "online",
    title: "Онлайн-тест VerifEye",
    titleRus: "Онлайн-тест VerifEye",
    titleEng: "VerifEye online test",
    items: [
      {
        name: "Онлайн-тест — одне питання",
        nameRus: "Онлайн-тест — один вопрос",
        nameEng: "Online test — one issue",
        price: 2500,
        priceLabel: "2 500 ₴",
        priceLabelRus: "2 500 ₴",
        priceLabelEng: "UAH 2,500",
      },
      {
        name: "Онлайн-тест — до трьох питань",
        nameRus: "Онлайн-тест — до трёх вопросов",
        nameEng: "Online test — up to three issues",
        price: 4000,
        priceLabel: "4 000 ₴",
        priceLabelRus: "4 000 ₴",
        priceLabelEng: "UAH 4,000",
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
        priceLabel: "за запитом",
        priceLabelRus: "по запросу",
        priceLabelEng: "on request",
      },
      {
        name: "Група від 3 осіб, виїзд в офіс",
        nameRus: "Группа от 3 человек, выезд в офис",
        nameEng: "Group of 3+, on-site",
        priceLabel: "ціна за особу нижча",
        priceLabelRus: "цена за человека ниже",
        priceLabelEng: "lower per-person rate",
      },
      {
        name: "Службове розслідування",
        nameRus: "Служебное расследование",
        nameEng: "Internal investigation",
        priceLabel: "за запитом",
        priceLabelRus: "по запросу",
        priceLabelEng: "on request",
      },
    ],
  },
  {
    id: "abroad",
    title: "За кордоном",
    titleRus: "За границей",
    titleEng: "Abroad",
    items: [
      {
        name: "EyeDetect — одне питання",
        nameRus: "EyeDetect — один вопрос",
        nameEng: "EyeDetect — one issue",
        price: 10000,
        priceLabel: "10 000 ₴",
        priceLabelRus: "10 000 ₴",
        priceLabelEng: "UAH 10,000",
      },
      {
        name: "EyeDetect — до трьох питань",
        nameRus: "EyeDetect — до трёх вопросов",
        nameEng: "EyeDetect — up to three issues",
        price: 15000,
        priceLabel: "15 000 ₴",
        priceLabelRus: "15 000 ₴",
        priceLabelEng: "UAH 15,000",
      },
      {
        name: "Дорога зі Львова і приміщення для тесту",
        nameRus: "Дорога из Львова и помещение для теста",
        nameEng: "Travel from Lviv and a test venue",
        priceLabel: "оплачуються окремо",
        priceLabelRus: "оплачиваются отдельно",
        priceLabelEng: "paid separately",
      },
      {
        name: "VerifEye онлайн",
        nameRus: "VerifEye онлайн",
        nameEng: "VerifEye online",
        priceLabel: "2 500 / 4 000 ₴, без доплат",
        priceLabelRus: "2 500 / 4 000 ₴, без доплат",
        priceLabelEng: "UAH 2,500 / 4,000, no surcharge",
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
    text: "Доплати нижче стосуються тестів EyeDetect у кабінеті або з виїздом. Для VerifEye онлайн доплат немає.",
    textRus: "Доплаты ниже относятся к тестам EyeDetect в кабинете или с выездом. Для VerifEye онлайн доплат нет.",
    textEng: "The surcharges below apply to EyeDetect tests in office or on-site. VerifEye online has no surcharges.",
  },
  {
    text: "Тест у день звернення — +30% до вартості.",
    textRus: "Тест в день обращения — +30% к стоимости.",
    textEng: "Same-day testing — +30%.",
  },
  {
    text: "Терміновий тест без черги протягом години — +100% до вартості.",
    textRus: "Срочный тест без очереди в течение часа — +100% к стоимости.",
    textEng: "Urgent test within an hour, no queue — +100%.",
  },
  {
    text: "Тест у неділю — +100% до вартості.",
    textRus: "Тест в воскресенье — +100% к стоимости.",
    textEng: "Sunday testing — +100%.",
  },
  {
    text: "Знижка 800 ₴ на заявку через сайт — код EYE25.",
    textRus: "Скидка 800 ₴ на заявку через сайт — код EYE25.",
    textEng: "UAH 800 off when you book through the site — code EYE25.",
  },
];

// Зняття ризику: головне заперечення на цю суму — «а якщо результат
// буде невизначеним». Показуємо відповідь одразу під таблицею.
// «Невизначений» = алгоритм не зміг оцінити тест (порушені інструкції,
// відповіді навмання, проблеми з очима чи освітленням). Це не «правда» і не «брехня».
export const pricingGuarantee = {
  text: "Якщо результат тесту виявиться невизначеним (алгоритм не зміг оцінити тест через порушені інструкції, відповіді навмання, проблеми з очима чи освітленням) — повторний тест зі знижкою 50%.",
  textRus:
    "Если результат теста окажется неопределённым (алгоритм не смог оценить тест из-за нарушенных инструкций, ответов наугад, проблем с глазами или освещением) — повторный тест со скидкой 50%.",
  textEng:
    "If the test result is inconclusive, the retest is 50% off.",
};

// Що клієнт отримує за ці гроші.
export const pricingIncluded = [
  {
    text: "Бесіда перед тестом: разом формулюємо конкретні питання.",
    textRus: "Беседа перед тестом: вместе формулируем конкретные вопросы.",
    textEng: "Pre-test interview: we formulate the specific questions together.",
  },
  {
    text: "Сам тест: EyeDetect 30–45 хвилин у кабінеті або з виїздом, VerifEye близько 10 хвилин зі смартфона. Без датчиків на тілі.",
    textRus: "Сам тест: EyeDetect 30–45 минут в кабинете или с выездом, VerifEye около 10 минут со смартфона. Без датчиков на теле.",
    textEng: "The test itself: EyeDetect 30–45 minutes in office or on-site, VerifEye about 10 minutes on a smartphone. No body sensors.",
  },
  {
    text: "Оцінку рахує алгоритм Converus однаково для всіх. Спеціаліст готує питання, стежить за умовами тесту і пояснює звіт.",
    textRus: "Оценку считает алгоритм Converus одинаково для всех. Специалист готовит вопросы, следит за условиями теста и объясняет отчёт.",
    textEng: "The Converus algorithm scores every test the same way. The examiner prepares the questions, controls test conditions and explains the report.",
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
