// Унікальний контент для сторінок міст: SEO, вступ, факти, питання. Ключ — slug.
// Зразок на одному місті для погодження формату.
export const cityUnique = {
  tallinn: {
    uk: {
      seoTitle: "Детектор брехні в Таллінні: онлайн або виїзд",
      seoDescription: "Перевірка на детекторі брехні в Таллінні: офісу в Естонії немає — онлайн-тест VerifEye з телефона сьогодні або виїзд спеціаліста з EyeDetect під кілька заявок.",
      intro: "Таллінн — столиця Естонії з великою російськомовною та українською громадою, тому тест тут часто потрібен рідною мовою. Офісу в Таллінні в нас немає: найшвидше пройти онлайн-тест VerifEye зі смартфона, а виїзд із обладнанням EyeDetect призначаємо, коли в Балтії збирається кілька заявок. Час у Таллінні той самий, що й у Києві, тож консультація й тест проходять у звичному для вас режимі.",
      facts: [["Від Львова", "≈ 1 300 км"], ["Онлайн-тест", "≈ 55 € (2 500 ₴)"], ["Мова тесту", "українська або російська"]],
      faq: [
        { q: "Чи можна пройти тест у Таллінні російською?", a: "Так. Питання формулюємо українською або російською, людина читає їх заздалегідь і проходить тест тією мовою, яку краще розуміє." },
        { q: "Скільки чекати на виїзд до Таллінна?", a: "Виїзд до Балтії плануємо, коли збирається кілька заявок у регіоні, зазвичай це кілька тижнів. Якщо відповідь потрібна швидше, онлайн-тест VerifEye можна пройти вже сьогодні." },
      ],
    },
    ru: {
      seoTitle: "Детектор лжи в Таллинне: онлайн или выезд",
      seoDescription: "Проверка на детекторе лжи в Таллинне: офиса в Эстонии нет — онлайн-тест VerifEye с телефона сегодня или выезд специалиста с EyeDetect под несколько заявок.",
      intro: "Таллинн — столица Эстонии с большой русскоязычной и украинской общиной, поэтому тест здесь часто нужен на родном языке. Офиса в Таллинне у нас нет: быстрее всего пройти онлайн-тест VerifEye со смартфона, а выезд с оборудованием EyeDetect назначаем, когда в Прибалтике собирается несколько заявок. Время в Таллинне то же, что и в Киеве, поэтому консультация и тест проходят в привычном для вас режиме.",
      facts: [["От Львова", "≈ 1 300 км"], ["Онлайн-тест", "≈ 55 € (2 500 ₴)"], ["Язык теста", "русский или украинский"]],
      faq: [
        { q: "Можно ли пройти тест в Таллинне на русском?", a: "Да. Вопросы формулируем на русском или украинском, человек читает их заранее и проходит тест на том языке, который лучше понимает." },
        { q: "Сколько ждать выезда в Таллинн?", a: "Выезд в Прибалтику планируем, когда собирается несколько заявок в регионе, обычно это несколько недель. Если ответ нужен быстрее, онлайн-тест VerifEye можно пройти уже сегодня." },
      ],
    },
    en: {
      seoTitle: "Lie Detector Test in Tallinn: Online or Visit",
      seoDescription: "Lie detector test in Tallinn: we have no office in Estonia — take the VerifEye smartphone test today or book an EyeDetect specialist visit when requests collect.",
      intro: "Tallinn is Estonia's capital with large Russian-speaking and Ukrainian communities, so people here often need the test in their native language. We have no office in Tallinn: the fastest option is the VerifEye smartphone test, and an on-site EyeDetect visit is scheduled once several requests collect in the Baltics. Tallinn is in the same time zone as Kyiv, so consultation and testing fit your usual schedule.",
      facts: [["From Lviv", "≈ 1,300 km"], ["Online test", "≈ €55 (UAH 2,500)"], ["Test language", "Ukrainian or Russian"]],
      faq: [
        { q: "Can the test in Tallinn be taken in Russian?", a: "Yes. We write the questions in Russian or Ukrainian, the person reads them in advance and takes the test in the language they understand best." },
        { q: "How long is the wait for a visit to Tallinn?", a: "We plan trips to the Baltics once several requests collect in the region, usually within a few weeks. If you need an answer sooner, the VerifEye online test is available today." },
      ],
    },
  },
};

export const getCityUnique = (slug, lang) => cityUnique[slug]?.[lang] || null;
