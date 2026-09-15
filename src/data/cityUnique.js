// Унікальний контент для сторінок міст: SEO, вступ, факти, питання, міста країни. Ключ — slug.
// Зразок на одному місті для погодження формату.
// faq[].replaces — ключі шаблонних питань (cityTexts faq.eu), які це питання замінює.
export const cityUnique = {
  tallinn: {
    uk: {
      seoTitle: "Детектор брехні в Таллінні: онлайн або виїзд",
      seoDescription: "Перевірка на детекторі брехні в Таллінні: офісу в Естонії немає — онлайн-тест VerifEye з телефона сьогодні або виїзд спеціаліста з EyeDetect під кілька заявок.",
      intro: "Таллінн — столиця Естонії з великою російськомовною та українською громадою, тому тест тут часто потрібен рідною мовою. Найшвидший варіант — онлайн-тест VerifEye зі смартфона, його можна пройти вже сьогодні. Для тесту EyeDetect спеціаліст приїжджає зі Львова з обладнанням; дату погоджуємо заздалегідь, коли в регіоні збирається кілька заявок.",
      facts: [["Від Львова", "≈ 1 300 км, 30–40 год автобусом"], ["Онлайн-тест", "≈ 48 € (2 500 ₴)"], ["Мова тесту", "українська, російська, англійська, німецька"]],
      faq: [
        { q: "Де пройти детектор брехні в Таллінні?", a: "Офісу в Таллінні немає, тому є два варіанти. Онлайн-тест VerifEye можна пройти вже сьогодні з телефона, у тихій кімнаті вдома чи в офісі. Тест EyeDetect проводимо під час виїзду спеціаліста: у вашому офісі або в орендованому приміщенні в Таллінні." },
        { q: "Скільки коштує детектор брехні в Таллінні?", a: "Онлайн-тест VerifEye: 2 500 ₴ (≈ 48 €) за одне питання, 4 000 ₴ (≈ 78 €) за три, 6 000 ₴ (≈ 116 €) за шість, без доплат. EyeDetect з виїздом: від 10 000 ₴ (≈ 190 €) за одне питання і 15 000 ₴ (≈ 290 €) за три, окремо оплачуються дорога зі Львова і приміщення. Оплата в гривнях, суми в євро орієнтовні.", replaces: ["price"] },
        { q: "Скільки чекати на виїзд до Таллінна і як усе відбувається?", a: "Виїзд до Балтії плануємо, коли в регіоні збирається кілька заявок; чекати зазвичай доводиться кілька тижнів. Дату погоджуємо заздалегідь, спеціаліст приїжджає зі Львова з обладнанням EyeDetect, тест проводимо у вашому офісі або в орендованому приміщенні. Якщо відповідь потрібна швидше, онлайн-тест VerifEye можна пройти вже сьогодні, звіт у PDF — до 5 хвилин після тесту.", replaces: ["visit", "online"] },
        { q: "Скільки коштує дорога спеціаліста до Таллінна?", a: "Автобусом зі Львова до Таллінна їхати 30–40 годин, квиток в один бік коштує орієнтовно 3 400–6 000 ₴ залежно від дат. Швидше автобусом до Варшави (10–11 годин) і літаком до Таллінна (близько 2 годин), але це дорожче через багаж з обладнанням. Дорога і приміщення оплачуються окремо від тесту, точну суму назвемо, коли будуть відомі дати." },
        { q: "Чи можна перевірити на вірність у парі?", a: "Так. Тест перевіряє одну конкретну підозру, наприклад зраду за певний період. Його проходить партнер, щодо якого є підозра, або обидва партнери, кожен свій тест. Тест добровільний, за письмовою згодою. Онлайн VerifEye коштує від 2 500 ₴ (≈ 48 €) за один тест." },
        { q: "Чи можна пройти тест у Таллінні російською?", a: "Так. Тест можна пройти українською, російською, англійською або німецькою. Питання формулюємо разом, і людина читає їх заздалегідь.", replaces: ["language"] },
        { q: "Чи законний тест на детекторі брехні в Естонії?", a: "Окремого закону про поліграф в Естонії немає. Приватний добровільний тест підпадає під загальні правила ЄС про персональні дані (GDPR), тому потрібна письмова згода. Для перевірки працівників і кандидатів правила суворіші: перед такою перевіркою обов'язково порадьтеся з юристом. Суди Естонії досі не визнавали результати поліграфа доказом у кримінальних справах, і наш результат теж не є судовим доказом.", replaces: ["legal"] },
      ],
      cases: {
        title: "Випадки з Естонії",
        note: "Реальні звернення з Естонії. Без імен і деталей, за якими можна впізнати людей.",
        items: [
          { label: "Сім'я · VerifEye онлайн", title: "Зникли гроші вдома", text: "Удома зникли гроші. Тест VerifEye проходив підліток 16 років — за письмовою згодою батьків і в їхній присутності. Після тесту — зізнання." },
          { label: "Пара", title: "Підозра у зраді", text: "Один із партнерів підозрював іншого у зраді. Результат тесту вказав на неправдиву відповідь на питання про зраду, а згодом підозра підтвердилась." },
          { label: "HR компанії", title: "Перевірка кандидатів", text: "Компанія з арбітражу трафіку перевіряла кандидатів перед наймом: чи не зливали вони офери конкурентам. Результати перевірок згодом підтвердились у роботі." },
        ],
        disclaimer: "Результат тесту не є судовим доказом. Те, що в цих випадках він збігся з подальшими фактами, не гарантує такого самого результату в іншій ситуації.",
      },
      towns: {
        title: "Тарту, Нарва та інші міста Естонії",
        text: "Онлайн-тест VerifEye можна пройти з будь-якого міста Естонії. Виїзд з EyeDetect до інших міст — на тих самих умовах: дату призначаємо, коли в регіоні збирається кілька заявок.",
        list: "Тарту · Нарва · Пярну · Кохтла-Ярве · Вільянді · Раквере · Маарду · Кейла · Йихві",
        nearbyLabel: "Інші міста регіону:",
        nearby: [["riga", "Рига"], ["vilnius", "Вільнюс"], ["helsinki", "Гельсінкі"]],
      },
    },
    ru: {
      seoTitle: "Детектор лжи в Таллинне: онлайн или выезд",
      seoDescription: "Проверка на детекторе лжи в Таллинне: офиса в Эстонии нет — онлайн-тест VerifEye с телефона сегодня или выезд специалиста с EyeDetect под несколько заявок.",
      intro: "Таллинн (также пишут «Таллин») — столица Эстонии с большой русскоязычной и украинской общиной, поэтому тест здесь часто нужен на родном языке. Самый быстрый вариант — онлайн-тест VerifEye со смартфона, его можно пройти уже сегодня. Для теста EyeDetect специалист приезжает из Львова с оборудованием; дату согласовываем заранее, когда в регионе собирается несколько заявок.",
      facts: [["От Львова", "≈ 1 300 км, 30–40 ч автобусом"], ["Онлайн-тест", "≈ 48 € (2 500 ₴)"], ["Язык теста", "украинский, русский, английский, немецкий"]],
      faq: [
        { q: "Где пройти детектор лжи в Таллинне?", a: "Офиса в Таллинне нет, поэтому есть два варианта. Онлайн-тест VerifEye можно пройти уже сегодня с телефона, в тихой комнате дома или в офисе. Тест EyeDetect проводим во время выезда специалиста: в вашем офисе или в арендованном помещении в Таллинне." },
        { q: "Сколько стоит детектор лжи в Таллинне?", a: "Онлайн-тест VerifEye: 2 500 ₴ (≈ 48 €) за один вопрос, 4 000 ₴ (≈ 78 €) за три, 6 000 ₴ (≈ 116 €) за шесть, без доплат. EyeDetect с выездом: от 10 000 ₴ (≈ 190 €) за один вопрос и 15 000 ₴ (≈ 290 €) за три, отдельно оплачиваются дорога из Львова и помещение. Оплата в гривнах, суммы в евро ориентировочные.", replaces: ["price"] },
        { q: "Сколько ждать выезда в Таллинн и как всё проходит?", a: "Выезд в страны Балтии планируем, когда в регионе собирается несколько заявок; ждать обычно приходится несколько недель. Дату согласовываем заранее, специалист приезжает из Львова с оборудованием EyeDetect, тест проводим в вашем офисе или в арендованном помещении. Если ответ нужен быстрее, онлайн-тест VerifEye можно пройти уже сегодня, отчёт в PDF — до 5 минут после теста.", replaces: ["visit", "online"] },
        { q: "Сколько стоит дорога специалиста до Таллинна?", a: "На автобусе из Львова до Таллинна ехать 30–40 часов, билет в одну сторону стоит ориентировочно 3 400–6 000 ₴ в зависимости от дат. Быстрее автобусом до Варшавы (10–11 часов) и самолётом до Таллинна (около 2 часов), но это дороже из-за багажа с оборудованием. Дорога и помещение оплачиваются отдельно от теста, точную сумму назовём, когда будут известны даты." },
        { q: "Можно ли проверить пару на верность?", a: "Да. Тест проверяет одно конкретное подозрение, например измену за определённый период. Его проходит партнёр, в отношении которого есть подозрение, или оба партнёра, каждый свой тест. Тест добровольный, с письменного согласия. Онлайн VerifEye стоит от 2 500 ₴ (≈ 48 €) за один тест." },
        { q: "Можно ли пройти тест в Таллинне на русском?", a: "Да. Тест можно пройти на украинском, русском, английском или немецком. Вопросы формулируем вместе, и человек читает их заранее.", replaces: ["language"] },
        { q: "Законен ли тест на детекторе лжи в Эстонии?", a: "Отдельного закона о полиграфе в Эстонии нет. Частный добровольный тест подпадает под общие правила ЕС о персональных данных (GDPR), поэтому нужно письменное согласие. Для проверки сотрудников и кандидатов правила строже: перед такой проверкой обязательно посоветуйтесь с юристом. Суды Эстонии до сих пор не признавали результаты полиграфа доказательством по уголовным делам, и наш результат тоже не является судебным доказательством.", replaces: ["legal"] },
      ],
      cases: {
        title: "Случаи из Эстонии",
        note: "Реальные обращения из Эстонии. Без имён и деталей, по которым можно узнать людей.",
        items: [
          { label: "Семья · VerifEye онлайн", title: "Пропали деньги дома", text: "Дома пропали деньги. Тест VerifEye проходил подросток 16 лет — с письменного согласия родителей и в их присутствии. После теста — признание." },
          { label: "Пара", title: "Подозрение в измене", text: "Один из партнёров подозревал другого в измене. Результат теста указал на неправдивый ответ на вопрос об измене, а позже подозрение подтвердилось." },
          { label: "HR компании", title: "Проверка кандидатов", text: "Компания из сферы арбитража трафика проверяла кандидатов перед наймом: не сливали ли они офферы конкурентам. Результаты проверок позже подтвердились в работе." },
        ],
        disclaimer: "Результат теста не является судебным доказательством. То, что в этих случаях он совпал с дальнейшими фактами, не гарантирует такого же результата в другой ситуации.",
      },
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
      facts: [["From Lviv", "≈ 1,300 km, 30–40 h by bus"], ["Online test", "≈ €48 (UAH 2,500)"], ["Test language", "Ukrainian, Russian, English, German"]],
      faq: [
        { q: "Where can I take a lie detector test in Tallinn?", a: "We have no office in Tallinn, so there are two options. You can take the VerifEye online test today on your phone, in a quiet room at home or at work. The EyeDetect test takes place during a specialist visit, in your office or a rented room in Tallinn." },
        { q: "How much does a lie detector test cost in Tallinn?", a: "VerifEye online test: UAH 2,500 (≈ €48) for one question, UAH 4,000 (≈ €78) for three, UAH 6,000 (≈ €116) for six, with no extra charges. EyeDetect with a visit: from UAH 10,000 (≈ €190) for one question and UAH 15,000 (≈ €290) for three, plus travel from Lviv and the venue. Payment is in hryvnias; euro amounts are approximate.", replaces: ["price"] },
        { q: "How long is the wait for a visit to Tallinn, and how does it work?", a: "We plan trips to the Baltics once several requests come in from the region; the wait is usually a few weeks. The date is agreed in advance, a specialist comes from Lviv with EyeDetect equipment, and the test takes place in your office or a rented room. If you need an answer sooner, you can take the VerifEye online test today and get the PDF report within 5 minutes after the test.", replaces: ["visit", "online"] },
        { q: "How much does the specialist's travel to Tallinn cost?", a: "By bus from Lviv to Tallinn the trip takes 30–40 hours, and a one-way ticket costs roughly UAH 3,400–6,000 depending on the dates. A bus to Warsaw (10–11 hours) and a flight to Tallinn (about 2 hours) is faster, but it costs more because of the luggage with the equipment. Travel and the venue are paid separately from the test; we give the exact amount once the dates are known." },
        { q: "Can a couple take a fidelity test?", a: "Yes. The test checks one specific suspicion, for example infidelity over a certain period. The partner under suspicion takes it, or both partners take separate tests. The test is voluntary and requires written consent. The VerifEye online test costs from UAH 2,500 (≈ €48) per test." },
        { q: "Can I take the test in Russian in Tallinn?", a: "Yes. You can take the test in Ukrainian, Russian, English or German. We draw up the questions together with you, and the person reads them in advance.", replaces: ["language"] },
        { q: "Is a lie detector test legal in Estonia?", a: "Estonia has no specific law on polygraph tests. A private voluntary test falls under the general EU data protection rules (GDPR), so written consent is required. The rules for testing employees and job candidates are stricter: talk to a lawyer before such a test. Estonian courts have so far not accepted polygraph results as evidence in criminal cases, and our result is not court evidence either.", replaces: ["legal"] },
      ],
      cases: {
        title: "Cases from Estonia",
        note: "Real requests from Estonia, without names or details that could identify anyone.",
        items: [
          { label: "Family · VerifEye online", title: "Money missing at home", text: "Money went missing at home. A 16-year-old took the VerifEye test with the parents’ written consent and in their presence. After the test, the teenager confessed." },
          { label: "Couple", title: "Suspected infidelity", text: "One partner suspected the other of cheating. The test result indicated a deceptive answer to the infidelity question, and the suspicion was later confirmed." },
          { label: "Company HR", title: "Candidate screening", text: "An affiliate marketing company screened job candidates for leaking offers to competitors. The results were later confirmed on the job." },
        ],
        disclaimer: "The test result is not court evidence. The fact that it matched later events in these cases does not guarantee the same result in another situation.",
      },
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
