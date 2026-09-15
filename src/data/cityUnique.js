// Унікальний контент для сторінок міст: SEO, вступ, факти, питання, міста країни. Ключ — slug.
// Зразок на одному місті для погодження формату.
// faq[].replaces — ключі шаблонних питань (cityTexts faq.eu), які це питання замінює.
export const cityUnique = {
  tallinn: {
    uk: {
      seoTitle: "Детектор брехні в Таллінні: онлайн або виїзд",
      seoDescription: "Перевірка на детекторі брехні в Таллінні: офісу в Естонії немає — онлайн-тест VerifEye з телефона сьогодні або виїзд спеціаліста з EyeDetect під кілька заявок.",
      intro: "Таллінн — столиця Естонії з великою російськомовною та українською громадою, тому тест тут часто потрібен рідною мовою. Найшвидший варіант — онлайн-тест VerifEye зі смартфона, його можна пройти вже сьогодні. Для тесту EyeDetect спеціаліст приїжджає зі Львова з обладнанням; дату погоджуємо заздалегідь, коли в регіоні збирається кілька заявок.",
      facts: [["Від Львова", "≈ 1 300 км"], ["Онлайн-тест", "≈ 48 € (2 500 ₴)"], ["Мова тесту", "українська, російська, англійська, німецька"]],
      faq: [
        { q: "Чи можна пройти тест у Таллінні російською?", a: "Так. Тест можна пройти українською, російською, англійською або німецькою. Питання формулюємо разом, і людина читає їх заздалегідь.", replaces: ["language"] },
        { q: "Скільки чекати на виїзд до Таллінна і як усе відбувається?", a: "Виїзд до Балтії плануємо, коли в регіоні збирається кілька заявок; чекати зазвичай доводиться кілька тижнів. Дату погоджуємо заздалегідь, спеціаліст приїжджає зі Львова з обладнанням EyeDetect, тест проводимо у вашому офісі або в орендованому приміщенні. Якщо відповідь потрібна швидше, онлайн-тест VerifEye можна пройти вже сьогодні, звіт у PDF — до 5 хвилин після тесту.", replaces: ["visit", "online"] },
      ],
      towns: {
        title: "Тарту, Нарва та інші міста Естонії",
        text: "Онлайн-тест VerifEye можна пройти з будь-якого міста Естонії. Виїзд з EyeDetect до інших міст — на тих самих умовах: дату призначаємо, коли в регіоні збирається кілька заявок.",
        list: "Тарту · Нарва · Пярну · Кохтла-Ярве · Вільянді · Раквере · Маарду · Кейла · Йихві",
        nearbyLabel: "Інші міста регіону:",
        nearby: [["riga", "Рига"], ["vilnius", "Вільнюс"], ["helsinki", "Гельсінкі"]],
      },
    },
    ru: {
      seoTitle: "Детектор лжи в Таллине: онлайн или выезд",
      seoDescription: "Проверка на детекторе лжи в Таллине: офиса в Эстонии нет — онлайн-тест VerifEye с телефона сегодня или выезд специалиста с EyeDetect под несколько заявок.",
      intro: "Таллин (местные часто пишут «Таллинн») — столица Эстонии с большой русскоязычной и украинской общиной, поэтому тест здесь часто нужен на родном языке. Самый быстрый вариант — онлайн-тест VerifEye со смартфона, его можно пройти уже сегодня. Для теста EyeDetect специалист приезжает из Львова с оборудованием; дату согласовываем заранее, когда в регионе собирается несколько заявок.",
      facts: [["От Львова", "≈ 1 300 км"], ["Онлайн-тест", "≈ 48 € (2 500 ₴)"], ["Язык теста", "украинский, русский, английский, немецкий"]],
      faq: [
        { q: "Можно ли пройти тест в Таллине на русском?", a: "Да. Тест можно пройти на украинском, русском, английском или немецком. Вопросы формулируем вместе, и человек читает их заранее.", replaces: ["language"] },
        { q: "Сколько ждать выезда в Таллин и как всё проходит?", a: "Выезд в страны Балтии планируем, когда в регионе собирается несколько заявок; ждать обычно приходится несколько недель. Дату согласовываем заранее, специалист приезжает из Львова с оборудованием EyeDetect, тест проводим в вашем офисе или в арендованном помещении. Если ответ нужен быстрее, онлайн-тест VerifEye можно пройти уже сегодня, отчёт в PDF — до 5 минут после теста.", replaces: ["visit", "online"] },
      ],
      towns: {
        title: "Тарту, Нарва и другие города Эстонии",
        text: "Онлайн-тест VerifEye можно пройти из любого города Эстонии. Выезд с EyeDetect в другие города — на тех же условиях: дату назначаем, когда в регионе собирается несколько заявок.",
        list: "Тарту · Нарва · Пярну · Кохтла-Ярве · Вильянди · Раквере · Маарду · Кейла · Йыхви",
        nearbyLabel: "Другие города региона:",
        nearby: [["riga", "Рига"], ["vilnius", "Вильнюс"], ["helsinki", "Хельсинки"]],
      },
    },
    en: {
      seoTitle: "Lie Detector Test in Tallinn: Online or On-Site",
      seoDescription: "Lie detector test in Tallinn: we have no office in Estonia. Take the VerifEye smartphone test today or book an EyeDetect visit once several requests come in.",
      intro: "Tallinn is Estonia's capital with large Russian-speaking and Ukrainian communities, so people here often need the test in their native language. The fastest option is the VerifEye smartphone test, which you can take today. For an EyeDetect test, a specialist travels from Lviv with the equipment; we agree on the date in advance, once several requests come in from the region.",
      facts: [["From Lviv", "≈ 1,300 km"], ["Online test", "≈ €48 (UAH 2,500)"], ["Test language", "Ukrainian, Russian, English, German"]],
      faq: [
        { q: "Can I take the test in Russian in Tallinn?", a: "Yes. You can take the test in Ukrainian, Russian, English or German. We draw up the questions together with you, and the person reads them in advance.", replaces: ["language"] },
        { q: "How long is the wait for a visit to Tallinn, and how does it work?", a: "We plan trips to the Baltics once several requests come in from the region; the wait is usually a few weeks. The date is agreed in advance, a specialist comes from Lviv with EyeDetect equipment, and the test takes place in your office or a rented room. If you need an answer sooner, you can take the VerifEye online test today and get the PDF report within 5 minutes after the test.", replaces: ["visit", "online"] },
      ],
      towns: {
        title: "Tartu, Narva and other towns in Estonia",
        text: "The VerifEye online test can be taken from any town in Estonia. EyeDetect visits to other towns work the same way: we set the date once several requests come in from the region.",
        list: "Tartu · Narva · Pärnu · Kohtla-Järve · Viljandi · Rakvere · Maardu · Keila · Jõhvi",
        nearbyLabel: "Other cities in the region:",
        nearby: [["riga", "Riga"], ["vilnius", "Vilnius"], ["helsinki", "Helsinki"]],
      },
    },
  },
};

export const getCityUnique = (slug, lang) => cityUnique[slug]?.[lang] || null;

// Спершу питання міста, далі шаблонні, крім тих, чий key замінено (replaces). Лишаємо тільки {q, a}.
export const mergeCityFaq = (uniqueFaq = [], templateFaq = []) => {
  const replaced = new Set(uniqueFaq.flatMap((f) => f.replaces || []));
  return [
    ...uniqueFaq.map(({ q, a }) => ({ q, a })),
    ...templateFaq.filter((f) => !replaced.has(f.key)).map(({ q, a }) => ({ q, a })),
  ];
};
