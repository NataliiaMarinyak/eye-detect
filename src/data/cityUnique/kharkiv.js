// Унікальний контент сторінки Харкова (uk/ru/en). Закон і дорога — з перевірених фактів на 15.09.2026; випадки — спільний блок.
// faq[].replaces — ключі шаблонних питань (cityTexts faq), які це питання замінює.
export const kharkiv = {
  uk: {
    seoTitle: "Поліграф і детектор брехні в Харкові: ціна, виїзд, онлайн",
    seoDescription: "Поліграф у Харкові: онлайн-тест VerifEye з телефона сьогодні від 2 500 ₴ або виїзд спеціаліста з EyeDetect — 12 000 ₴ під ключ. Звіт за 5 хвилин.",
    updated: "2026-10-09",
    intro: "Харків — друге за величиною місто України, і зі Львова до нього близько 1 000 км. Найшвидший варіант — онлайн-тест VerifEye зі смартфона, його можна пройти вже сьогодні. Для тесту EyeDetect спеціаліст їде зі Львова з обладнанням близько 13 годин поїздом; виїзд плануємо за 1–2 тижні й поєднуємо з іншими заявками.",
    facts: [["Від Львова", "≈ 1 000 км, 13 год поїздом"], ["Виїзд", "12 000 ₴ під ключ"], ["Онлайн-тест", "від 2 500 ₴"]],
    faq: [
      { q: "Де пройти поліграф у Харкові?", a: "Офісу в Харкові немає, тому є два варіанти. Онлайн-тест VerifEye можна пройти вже сьогодні з телефона, вдома чи в офісі. Тест EyeDetect проводимо під час виїзду: спеціаліст приїжджає зі Львова з обладнанням у ваш офіс або в іншу тиху кімнату." },
      { q: "Скільки коштує детектор брехні в Харкові?", a: "Виїзд спеціаліста з EyeDetect до Харкова коштує 12 000 ₴ під ключ, разом із тестом для однієї людини. Якщо тест проходять кілька людей, вартість виїзду ділиться, точну суму назве спеціаліст. Онлайн-тест VerifEye: 2 500 ₴ за одне питання, 4 000 ₴ за три, 6 000 ₴ за шість, без доплат.", replaces: ["price"] },
      { q: "Як швидко спеціаліст може приїхати до Харкова?", a: "Виїзд до Харкова плануємо за 1–2 тижні й поєднуємо з іншими заявками. Дорога зі Львова займає близько 13 годин найшвидшим поїздом або 13–14,5 години автомобілем без зупинок. Під час воєнного стану військові адміністрації можуть вводити комендантську годину й обмежувати рух, тому дорога може тривати довше. Онлайн-тест VerifEye доступний уже сьогодні.", replaces: ["speed"], sources: [["Укрзалізниця: розклад Львів — Харків", "https://uz.gov.ua/passengers/timetable/?from_station=23200&to_station=22100&by_route=1"], ["Poizdato: поїзди Львів — Харків", "https://poizdato.net/rozklad-poizdiv/lviv--kharkiv/"], ["Закон про правовий режим воєнного стану", "https://zakon.rada.gov.ua/laws/show/389-19"]] },
      { q: "Чи можна замовити перевірку на вірність у Харкові?", a: "Так, і виїзд для цього не потрібен: онлайн-тест VerifEye коштує від 2 500 ₴. Тест проходить партнер, якого підозрюють, або обидва партнери, кожен окремо. Перевірку проводимо лише за письмовою згодою людини, яка проходить тест." },
      { q: "Якою мовою можна пройти тест у Харкові?", a: "Українською, російською, англійською або німецькою. Питання формулюємо разом, і людина читає їх заздалегідь." },
      { q: "Чи законна перевірка на поліграфі в Україні?", a: "Жоден закон України не забороняє приватний добровільний тест на поліграфі й не регулює його окремо. Діють загальні правила про персональні дані: потрібна добровільна й поінформована згода людини. Ми проводимо тест лише за письмовою згодою, а неповнолітніх — тільки за письмовою згодою батьків і в їхній присутності. Для перевірки працівників і кандидатів правила суворіші, тому спершу порадьтеся з юристом. Верховний Суд у кримінальних справах 2023–2024 років не визнавав висновок поліграфолога самостійним доказом, і наш результат теж не є судовим доказом.", sources: [["Закон про захист персональних даних", "https://zakon.rada.gov.ua/laws/show/2297-17"], ["Верховний Суд, справа 183/3452/19 (2023)", "https://reyestr.court.gov.ua/Review/108686155"], ["Верховний Суд, справа 760/23990/17 (2024)", "https://reyestr.court.gov.ua/Review/117757884"]] },
    ],
    towns: {
      title: "Лозова, Чугуїв та інші міста Харківської області",
      text: "Онлайн-тест VerifEye можна пройти з будь-якого міста Харківської області. Виїзд з EyeDetect до інших міст — на тих самих умовах: 12 000 ₴ під ключ.",
      list: "Лозова · Чугуїв",
      nearbyLabel: "Інші міста регіону:",
      nearby: [["poltava", "Полтава"], ["sumy", "Суми"], ["dnipro", "Дніпро"]],
    },
    // local: джерела — https://uk.wikipedia.org/wiki/Харків, https://uk.wikipedia.org/wiki/Лозова
    local: {
      title: "Харків і детектор брехні: онлайн для одного питання, виїзд для команди",
      paragraphs: [
        "Харків — місто університетів і науково-дослідних інститутів, машинобудівних заводів, великих ринків та ІТ-компаній. У такому місті багато колективів, де кілька людей мають доступ до одного й того самого: до коду замовника, до каси торгової точки, до складу з комплектуючими. Коли щось зникає або потрапляє до сторонніх, підозра лягає на всіх одразу, і на тих, хто нічого не брав, теж. Тест перевіряє одну конкретну подію, і пройти його може кожен, хто мав доступ.",
        "Від нашого офісу у Львові до Харкова — майже вся країна із заходу на схід, і дорога в один бік забирає в спеціаліста понад пів доби. Тому одне приватне питання, про вірність, борг чи сімейні гроші, простіше перевірити онлайн. Тест VerifEye людина проходить зі свого телефона в тихій кімнаті за 15–20 хвилин, а звіт у PDF приходить протягом 5 хвилин. Чекати на виїзд для цього не потрібно.",
        "Виїзд з EyeDetect до Харкова виправданий, коли перевірити треба кількох людей за один день або коли вам важливо, щоб спеціаліст був поруч. Місце для тесту просте: переговорна у вашому офісі або номер у готелі, аби там було тихо й були стіл і розетка; про приміщення домовляємося до приїзду. Один тест триває 30–45 хвилин, тож за день спеціаліст приймає кількох людей по черзі, а вартість виїзду ділиться між ними. Працівник проходить тест лише за власною письмовою згодою, і перед такою перевіркою радимо порадитися з юристом. Ціни на обидва тести — нижче на цій сторінці.",
        "Поліграфом у розмові називають будь-який детектор брехні, тож уточнимо, чим ми тестуємо в Харкові: під час виїзду це EyeDetect, онлайн — VerifEye, і обидва оцінюють реакції очей, без датчиків на тілі. Класичний поліграф — інший метод, і його ми не пропонуємо. Жителям Лозової, де розташований великий залізничний вузол, чи Чугуєва їхати до Харкова не потрібно: онлайн-тест працює з будь-якого міста області.",
        "Ось три вигадані приклади з харківських реалій. Вони показують, як має звучати питання для тесту: один факт, названий період, відповідь «так» або «ні».",
      ],
      points: [
        "ІТ-команда, з якої пішов розробник: «З 1 березня цього року ви передавали код проєкту людям поза командою?»",
        "Торгова точка на ринку, де не зійшлися залишки: «У вересні цього року ви продавали товар, не проводячи гроші через касу?»",
        "Відділ постачання на заводі: «За останні 12 місяців ви отримували гроші або подарунки від постачальників?»",
      ],
    },
  },
  ru: {
    seoTitle: "Детектор лжи и полиграф в Харькове: цена, выезд, онлайн",
    seoDescription: "Полиграф в Харькове: онлайн-тест VerifEye с телефона сегодня от 2 500 ₴ или выезд специалиста с EyeDetect — 12 000 ₴ под ключ. Отчёт за 5 минут.",
    updated: "2026-10-09",
    intro: "Харьков — второй по величине город Украины, и из Львова до него около 1 000 км. Самый быстрый вариант — онлайн-тест VerifEye со смартфона, его можно пройти уже сегодня. Для теста EyeDetect специалист едет из Львова с оборудованием около 13 часов поездом; выезд планируем за 1–2 недели и объединяем с другими заявками.",
    facts: [["От Львова", "≈ 1 000 км, 13 ч поездом"], ["Выезд", "12 000 ₴ под ключ"], ["Онлайн-тест", "от 2 500 ₴"]],
    faq: [
      { q: "Где пройти полиграф в Харькове?", a: "Офиса в Харькове нет, поэтому есть два варианта. Онлайн-тест VerifEye можно пройти уже сегодня с телефона, дома или в офисе. Тест EyeDetect проводим во время выезда: специалист приезжает из Львова с оборудованием в ваш офис или в другую тихую комнату." },
      { q: "Сколько стоит детектор лжи в Харькове?", a: "Выезд специалиста с EyeDetect в Харьков стоит 12 000 ₴ под ключ, вместе с тестом для одного человека. Если тест проходят несколько человек, стоимость выезда делится, точную сумму назовёт специалист. Онлайн-тест VerifEye: 2 500 ₴ за один вопрос, 4 000 ₴ за три, 6 000 ₴ за шесть, без доплат.", replaces: ["price"] },
      { q: "Как быстро специалист может приехать в Харьков?", a: "Выезд в Харьков планируем за 1–2 недели и объединяем с другими заявками. Дорога из Львова занимает около 13 часов на самом быстром поезде или 13–14,5 часа на машине без остановок. Во время военного положения военные администрации могут вводить комендантский час и ограничивать движение, поэтому дорога может занять больше времени. Онлайн-тест VerifEye доступен уже сегодня.", replaces: ["speed"], sources: [["Укрзализныця: расписание Львов — Харьков", "https://uz.gov.ua/passengers/timetable/?from_station=23200&to_station=22100&by_route=1"], ["Poizdato: поезда Львов — Харьков", "https://poizdato.net/rozklad-poizdiv/lviv--kharkiv/"], ["Закон о правовом режиме военного положения", "https://zakon.rada.gov.ua/laws/show/389-19"]] },
      { q: "Можно ли заказать проверку на верность в Харькове?", a: "Да, и выезд для этого не нужен: онлайн-тест VerifEye стоит от 2 500 ₴. Тест проходит партнёр, которого подозревают, или оба партнёра, каждый отдельно. Проверку проводим только с письменного согласия человека, который проходит тест." },
      { q: "На каком языке можно пройти тест в Харькове?", a: "На украинском, русском, английском или немецком. Вопросы формулируем вместе, и человек читает их заранее." },
      { q: "Законна ли проверка на полиграфе в Украине?", a: "Ни один закон Украины не запрещает частный добровольный тест на полиграфе и не регулирует его отдельно. Действуют общие правила о персональных данных: нужно добровольное и информированное согласие человека. Мы проводим тест только с письменного согласия, а несовершеннолетних — только с письменного согласия родителей и в их присутствии. Для проверки сотрудников и кандидатов правила строже, поэтому сначала посоветуйтесь с юристом. Верховный Суд в уголовных делах 2023–2024 годов не признавал заключение полиграфолога самостоятельным доказательством, и наш результат тоже не является судебным доказательством.", sources: [["Закон о защите персональных данных", "https://zakon.rada.gov.ua/laws/show/2297-17"], ["Верховный Суд, дело 183/3452/19 (2023)", "https://reyestr.court.gov.ua/Review/108686155"], ["Верховный Суд, дело 760/23990/17 (2024)", "https://reyestr.court.gov.ua/Review/117757884"]] },
    ],
    towns: {
      title: "Лозовая, Чугуев и другие города Харьковской области",
      text: "Онлайн-тест VerifEye можно пройти из любого города Харьковской области. Выезд с EyeDetect в другие города — на тех же условиях: 12 000 ₴ под ключ.",
      list: "Лозовая · Чугуев",
      nearbyLabel: "Другие города региона:",
      nearby: [["poltava", "Полтава"], ["sumy", "Сумы"], ["dnipro", "Днепр"]],
    },
    local: {
      title: "Харьков и детектор лжи: онлайн для одного вопроса, выезд для команды",
      paragraphs: [
        "Харьков — город университетов и научно-исследовательских институтов, машиностроительных заводов, больших рынков и ИТ-компаний. В таком городе много коллективов, где у нескольких человек есть доступ к одному и тому же: к коду заказчика, к кассе торговой точки, к складу с комплектующими. Когда что-то пропадает или попадает к посторонним, подозрение ложится на всех сразу, в том числе на тех, кто ничего не брал. Тест проверяет одно конкретное событие, и пройти его может каждый, у кого был доступ.",
        "От нашего офиса во Львове до Харькова — почти вся страна с запада на восток, и дорога в одну сторону занимает у специалиста больше половины суток. Поэтому один личный вопрос, о верности, долге или семейных деньгах, проще проверить онлайн. Тест VerifEye человек проходит со своего телефона в тихой комнате за 15–20 минут, а отчёт в PDF приходит в течение 5 минут. Ждать выезда для этого не нужно.",
        "Выезд с EyeDetect в Харьков оправдан, когда проверить нужно нескольких человек за один день или когда вам важно, чтобы специалист был рядом. Место для теста простое: переговорная в вашем офисе или номер в отеле, лишь бы там было тихо и были стол и розетка; о помещении договариваемся до приезда. Один тест длится 30–45 минут, поэтому за день специалист принимает нескольких человек по очереди, а стоимость выезда делится между ними. Сотрудник проходит тест только с собственного письменного согласия, и перед такой проверкой советуем поговорить с юристом. Цены на оба теста — ниже на этой странице.",
        "Полиграфом в разговоре называют любой детектор лжи, поэтому уточним, чем мы тестируем в Харькове: на выезде это EyeDetect, онлайн — VerifEye, и оба оценивают реакции глаз, без датчиков на теле. Классический полиграф — другой метод, и его мы не предлагаем. Жителям Лозовой, где находится крупный железнодорожный узел, или Чугуева ехать в Харьков не нужно: онлайн-тест работает из любого города области.",
        "Вот три вымышленных примера из харьковских реалий. Они показывают, как должен звучать вопрос для теста: один факт, названный период, ответ «да» или «нет».",
      ],
      points: [
        "ИТ-команда, из которой ушёл разработчик: «С 1 марта этого года вы передавали код проекта людям вне команды?»",
        "Торговая точка на рынке, где не сошлись остатки: «В сентябре этого года вы продавали товар, не проводя деньги через кассу?»",
        "Отдел снабжения на заводе: «За последние 12 месяцев вы получали деньги или подарки от поставщиков?»",
      ],
    },
  },
  en: {
    seoTitle: "Lie Detector Test in Kharkiv: Price, Visit or Online",
    seoDescription: "Lie detector test in Kharkiv: take the VerifEye phone test today from UAH 2,500 or book an EyeDetect visit for UAH 12,000 all-inclusive. Report in 5 minutes.",
    updated: "2026-10-09",
    intro: "Kharkiv is Ukraine's second-largest city, about 1,000 km from Lviv. The fastest option is the VerifEye smartphone test, which you can take today. For an EyeDetect test, a specialist travels from Lviv with the equipment, about 13 hours by train; we plan the visit 1–2 weeks ahead and combine it with other requests.",
    facts: [["From Lviv", "≈ 1,000 km, 13 h by train"], ["Visit", "UAH 12,000 all-inclusive"], ["Online test", "from UAH 2,500"]],
    faq: [
      { q: "Where can I take a polygraph test in Kharkiv?", a: "We have no office in Kharkiv, so there are two options. You can take the VerifEye online test today on your phone, at home or at work. The EyeDetect test takes place during a visit: a specialist comes from Lviv with the equipment to your office or another quiet room." },
      { q: "How much does a lie detector test cost in Kharkiv?", a: "An EyeDetect specialist visit to Kharkiv costs UAH 12,000 all-inclusive, test included, for one person. For several people the travel cost is shared; a specialist will tell you the exact amount. VerifEye online test: UAH 2,500 for one question, UAH 4,000 for three, UAH 6,000 for six, with no extra charges.", replaces: ["price"] },
      { q: "How soon can a specialist come to Kharkiv?", a: "Visits to Kharkiv are planned 1–2 weeks ahead and combined with other requests. The trip from Lviv takes about 13 hours by the fastest train, or 13–14.5 hours by car without stops. Under martial law, military administrations may impose a curfew and restrict movement, so the trip can take longer. The VerifEye online test is available today.", replaces: ["speed"], sources: [["Ukrzaliznytsia: Lviv–Kharkiv timetable", "https://uz.gov.ua/passengers/timetable/?from_station=23200&to_station=22100&by_route=1"], ["Poizdato: Lviv–Kharkiv trains", "https://poizdato.net/rozklad-poizdiv/lviv--kharkiv/"], ["Law on the Legal Regime of Martial Law", "https://zakon.rada.gov.ua/laws/show/389-19"]] },
      { q: "Can I book a lie detector test for infidelity in Kharkiv?", a: "Yes, and no visit is needed: the VerifEye online test costs from UAH 2,500. The partner under suspicion takes the test, or both partners take separate tests. We test only with written consent from the person taking the test." },
      { q: "What languages can I take the test in?", a: "Ukrainian, Russian, English or German. We draw up the questions together with you, and the person reads them in advance." },
      { q: "Is a polygraph test legal in Ukraine?", a: "No Ukrainian law bans private voluntary polygraph tests or regulates them specifically. General personal data rules apply, so the person must give voluntary, informed consent. We test only with written consent, and minors only with written consent from their parents and with the parents present. The rules for testing employees and job candidates are stricter, so talk to a lawyer first. In criminal cases in 2023–2024, Ukraine's Supreme Court did not accept a polygraph examiner's conclusion as independent evidence, and our result is not court evidence either.", sources: [["Law on Personal Data Protection", "https://zakon.rada.gov.ua/laws/show/2297-17"], ["Supreme Court, case 183/3452/19 (2023)", "https://reyestr.court.gov.ua/Review/108686155"], ["Supreme Court, case 760/23990/17 (2024)", "https://reyestr.court.gov.ua/Review/117757884"]] },
    ],
    towns: {
      title: "Lozova, Chuhuiv and other towns in Kharkiv Oblast",
      text: "The VerifEye online test can be taken from any town in Kharkiv Oblast. EyeDetect visits to other towns work the same way: UAH 12,000 all-inclusive.",
      list: "Lozova · Chuhuiv",
      nearbyLabel: "Other cities in the region:",
      nearby: [["poltava", "Poltava"], ["sumy", "Sumy"], ["dnipro", "Dnipro"]],
    },
    local: {
      title: "Kharkiv and the lie detector: online for one question, a visit for a team",
      paragraphs: [
        "Kharkiv is a city of universities and research institutes, machine-building plants, large markets and IT companies. In a city like this there are many teams where several people have access to the same thing: a client's code, the till at a market stall, a warehouse of components. When something goes missing or ends up with outsiders, suspicion falls on everyone at once, including those who took nothing. The test checks one specific event, and anyone who had access can take it.",
        "From our office in Lviv, Kharkiv lies almost the whole country away, west to east, and the trip one way takes a specialist more than half a day. So a single private question, about fidelity, a debt or family money, is easier to check online. The person takes the VerifEye test on their own phone in a quiet room; it lasts 15–20 minutes, and the PDF report arrives within 5 minutes. For this, nobody has to wait for a visit.",
        "An EyeDetect visit to Kharkiv makes sense when several people need to be tested in one day, or when you want the specialist in the room. The place itself is simple: a meeting room in your office or a hotel room, so long as it is quiet and there are a table and a socket; we settle on the room before we come. One test takes 30–45 minutes, so the specialist sees several people in turn during the day, and the travel cost is shared between them. An employee takes the test only with their own written consent, and we advise talking to a lawyer before such a test. Prices for both tests are further down this page.",
        "In everyday speech any lie detector is called a polygraph, so let us be clear about what we test with in Kharkiv: EyeDetect during a visit and VerifEye online, and both read eye reactions, with no sensors on the body. A classic polygraph is a different method, and we do not offer it. People in Lozova, home to a major railway junction, or in Chuhuiv do not need to travel to Kharkiv: the online test works from any town in the oblast.",
        "Here are three made-up examples drawn from Kharkiv life. They show how a test question should sound: one fact, a named period, a yes or no answer.",
      ],
      points: [
        "An IT team that a developer has just left: “Since March 1 this year, have you passed the project code to anyone outside the team?”",
        "A market stall where the stock count did not add up: “In September this year, did you sell goods without putting the money through the till?”",
        "A purchasing department at a plant: “In the last 12 months, have you received money or gifts from suppliers?”",
      ],
    },
  },
};
