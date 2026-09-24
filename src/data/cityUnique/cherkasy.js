// Унікальний контент сторінки Черкас (uk/ru/en). Дорога і право — з перевірених фактів на 15.09.2026.
// faq[].replaces — ключі шаблонних питань (cityTexts faq), які це питання замінює.
export const cherkasy = {
  uk: {
    seoTitle: "Поліграф Черкаси: детектор брехні з виїздом або онлайн",
    seoDescription: "Детектор брехні в Черкасах: виїзд спеціаліста з EyeDetect — 12 000 ₴ під ключ або онлайн-тест VerifEye від 2 500 ₴. Звіт за 5 хвилин.",
    intro: "Черкаси — обласний центр на Дніпрі, приблизно за 700 км від Львова. Найшвидший варіант — онлайн-тест VerifEye зі смартфона, його можна пройти вже сьогодні. Для тесту EyeDetect спеціаліст приїжджає зі Львова з обладнанням: прямий нічний поїзд іде близько 11 годин, автомобілем дорога займає 11–12 годин.",
    facts: [["Від Львова", "≈ 700 км, 11 год поїздом"], ["Виїзд", "12 000 ₴ під ключ"], ["Онлайн-тест", "від 2 500 ₴"]],
    faq: [
      { q: "Де пройти поліграф у Черкасах?", a: "Офісу в Черкасах у нас немає, тому є два варіанти. Онлайн-тест VerifEye можна пройти вже сьогодні з телефона, у тихій кімнаті вдома чи на роботі. Тест EyeDetect проводимо під час виїзду: спеціаліст привозить обладнання зі Львова у ваш офіс, готель або іншу тиху кімнату, про яку домовляємося заздалегідь." },
      { q: "Скільки коштує поліграф у Черкасах?", a: "Виїзд спеціаліста з EyeDetect до Черкас — 12 000 ₴ під ключ, разом із тестом для однієї людини. Якщо тест проходять кілька людей, вартість виїзду ділиться між ними, точну суму назве спеціаліст. Онлайн-тест VerifEye: 2 500 ₴ за одне питання, 4 000 ₴ за три, 6 000 ₴ за шість, без доплат.", replaces: ["price"] },
      { q: "Як швидко спеціаліст може приїхати до Черкас?", a: "Виїзд до Черкас плануємо за 1–2 тижні і поєднуємо з іншими заявками в регіоні. Дорога зі Львова довга: прямий нічний поїзд іде близько 11 годин, автомобілем — 700–730 км і 11–12 годин залежно від маршруту, автобусом зазвичай 12–13 годин. Нічний поїзд прибуває вранці, тому тест призначаємо на той самий день. Онлайн-тест VerifEye можна пройти вже сьогодні.", replaces: ["speed"], sources: [["Укрзалізниця: розклад станції Черкаси", "https://www.uz.gov.ua/passengers/timetable/?station=23340&by_station=1"], ["BiletyPlus: автобуси Львів — Черкаси", "https://bus.biletyplus.ua/ua/avtobusi/lvov/cherkassy"], ["DELLA: відстань Львів — Черкаси", "https://della.com.ua/distance/?cities=5071%2C5210"]] },
      { q: "Чи можна перевірити партнера на зраду в Черкасах?", a: "Так. Тест перевіряє одну конкретну підозру, наприклад зраду за певний період. Його проходить партнер, якого підозрюють, або обидва партнери, кожен окремо. Тест добровільний, за письмовою згодою. Для Черкас частіше обирають онлайн-тест VerifEye: від 2 500 ₴, без виїзду і вже сьогодні." },
      { q: "Якою мовою проходить тест у Черкасах?", a: "Українською, російською, англійською або німецькою. Питання узгоджуємо заздалегідь, і людина бачить їх перед тестом. Це стосується і виїзду з EyeDetect, і онлайн-тесту VerifEye." },
      { q: "Чи законна перевірка на поліграфі в Україні?", a: "Жоден закон України не забороняє приватний добровільний тест на поліграфі й не регулює його окремо. Діють загальні правила, зокрема Закон «Про захист персональних даних»: дані можна обробляти за добровільною й поінформованою згодою людини. Ми проводимо тест лише за письмовою згодою, а неповнолітніх — тільки за письмовою згодою батьків і в їхній присутності. Для перевірки працівників і кандидатів правила суворіші, ніж для приватного тесту, тому порадьтеся з юристом. Верховний Суд у кримінальних справах 2023–2024 років не визнавав висновок поліграфолога самостійним доказом, і наш результат теж не є судовим доказом.", sources: [["Закон про захист персональних даних", "https://zakon.rada.gov.ua/laws/show/2297-17"], ["Верховний Суд, справа 183/3452/19 (2023)", "https://reyestr.court.gov.ua/Review/108686155"], ["Верховний Суд, справа 760/23990/17 (2024)", "https://reyestr.court.gov.ua/Review/117757884"]] },
    ],
    towns: {
      title: "Умань, Сміла та інші міста Черкаської області",
      text: "Онлайн-тест VerifEye можна пройти з будь-якого міста Черкаської області. Виїзд з EyeDetect до інших міст — на тих самих умовах: 12 000 ₴ під ключ, як і всюди в Україні, крім Львівської області.",
      list: "Ватутіне · Золотоноша · Канів · Сміла · Умань",
      nearbyLabel: "Інші міста регіону:",
      nearby: [["kyiv", "Київ"], ["poltava", "Полтава"], ["kropyvnytskyi", "Кропивницький"]],
    },
  },
  ru: {
    seoTitle: "Полиграф Черкассы: детектор лжи с выездом или онлайн",
    seoDescription: "Детектор лжи в Черкассах: выезд специалиста с EyeDetect — 12 000 ₴ под ключ или онлайн-тест VerifEye от 2 500 ₴. Отчёт за 5 минут.",
    intro: "Черкассы — областной центр на Днепре, примерно в 700 км от Львова. Самый быстрый вариант — онлайн-тест VerifEye со смартфона, его можно пройти уже сегодня. Для теста EyeDetect специалист приезжает из Львова с оборудованием: прямой ночной поезд идёт около 11 часов, на машине дорога занимает 11–12 часов.",
    facts: [["От Львова", "≈ 700 км, 11 ч поездом"], ["Выезд", "12 000 ₴ под ключ"], ["Онлайн-тест", "от 2 500 ₴"]],
    faq: [
      { q: "Где пройти полиграф в Черкассах?", a: "Офиса в Черкассах у нас нет, поэтому есть два варианта. Онлайн-тест VerifEye можно пройти уже сегодня с телефона, в тихой комнате дома или на работе. Тест EyeDetect проводим во время выезда: специалист привозит оборудование из Львова в ваш офис, отель или другую тихую комнату, о которой договариваемся заранее." },
      { q: "Сколько стоит полиграф в Черкассах?", a: "Выезд специалиста с EyeDetect в Черкассы — 12 000 ₴ под ключ, вместе с тестом для одного человека. Если тест проходят несколько человек, стоимость выезда делится между ними, точную сумму назовёт специалист. Онлайн-тест VerifEye: 2 500 ₴ за один вопрос, 4 000 ₴ за три, 6 000 ₴ за шесть, без доплат.", replaces: ["price"] },
      { q: "Как быстро специалист может приехать в Черкассы?", a: "Выезд в Черкассы планируем за 1–2 недели и объединяем с другими заявками в регионе. Дорога из Львова длинная: прямой ночной поезд идёт около 11 часов, на машине — 700–730 км и 11–12 часов в зависимости от маршрута, на автобусе обычно 12–13 часов. Ночной поезд приходит утром, поэтому тест назначаем на тот же день. Онлайн-тест VerifEye можно пройти уже сегодня.", replaces: ["speed"], sources: [["Укрзализныця: расписание станции Черкассы", "https://www.uz.gov.ua/passengers/timetable/?station=23340&by_station=1"], ["BiletyPlus: автобусы Львов — Черкассы", "https://bus.biletyplus.ua/ua/avtobusi/lvov/cherkassy"], ["DELLA: расстояние Львов — Черкассы", "https://della.com.ua/distance/?cities=5071%2C5210"]] },
      { q: "Можно ли проверить партнёра на измену в Черкассах?", a: "Да. Тест проверяет одно конкретное подозрение, например измену за определённый период. Его проходит партнёр, которого подозревают, или оба партнёра, каждый отдельно. Тест добровольный, с письменного согласия. Для Черкасс чаще выбирают онлайн-тест VerifEye: от 2 500 ₴, без выезда и уже сегодня." },
      { q: "На каком языке проходит тест в Черкассах?", a: "На украинском, русском, английском или немецком. Вопросы согласовываем заранее, и человек видит их перед тестом. Это касается и выезда с EyeDetect, и онлайн-теста VerifEye." },
      { q: "Законна ли проверка на полиграфе в Украине?", a: "Ни один закон Украины не запрещает частный добровольный тест на полиграфе и не регулирует его отдельно. Действуют общие правила, в том числе Закон «О защите персональных данных»: данные можно обрабатывать с добровольного и информированного согласия человека. Мы проводим тест только с письменного согласия, а несовершеннолетних — только с письменного согласия родителей и в их присутствии. Для проверки сотрудников и кандидатов правила строже, чем для частного теста, поэтому посоветуйтесь с юристом. Верховный Суд в уголовных делах 2023–2024 годов не признавал заключение полиграфолога самостоятельным доказательством, и наш результат тоже не является судебным доказательством.", sources: [["Закон о защите персональных данных", "https://zakon.rada.gov.ua/laws/show/2297-17"], ["Верховный Суд, дело 183/3452/19 (2023)", "https://reyestr.court.gov.ua/Review/108686155"], ["Верховный Суд, дело 760/23990/17 (2024)", "https://reyestr.court.gov.ua/Review/117757884"]] },
    ],
    towns: {
      title: "Умань, Смела и другие города Черкасской области",
      text: "Онлайн-тест VerifEye можно пройти из любого города Черкасской области. Выезд с EyeDetect в другие города — на тех же условиях: 12 000 ₴ под ключ, как и везде в Украине, кроме Львовской области.",
      list: "Ватутино · Золотоноша · Канев · Смела · Умань",
      nearbyLabel: "Другие города региона:",
      nearby: [["kyiv", "Киев"], ["poltava", "Полтава"], ["kropyvnytskyi", "Кропивницкий"]],
    },
  },
  en: {
    seoTitle: "Lie Detector Test in Cherkasy: Visit or Online",
    seoDescription: "Lie detector test in Cherkasy: an EyeDetect visit costs UAH 12,000 all-inclusive, or take the VerifEye online test from UAH 2,500. Report in 5 minutes.",
    intro: "Cherkasy is a regional centre on the Dnipro, about 700 km from Lviv. The fastest option is the VerifEye smartphone test, which you can take today. For an EyeDetect test, a specialist travels from Lviv with the equipment: the direct night train takes about 11 hours, and the drive takes 11–12 hours.",
    facts: [["From Lviv", "≈ 700 km, 11 h by train"], ["Visit", "UAH 12,000 all-inclusive"], ["Online test", "from UAH 2,500"]],
    faq: [
      { q: "Where can I take a polygraph test in Cherkasy?", a: "We have no office in Cherkasy, so there are two options. You can take the VerifEye online test today on your phone, in a quiet room at home or at work. The EyeDetect test takes place during a visit: a specialist brings the equipment from Lviv to your office, hotel or another quiet room we agree on in advance." },
      { q: "How much does a polygraph test cost in Cherkasy?", a: "A specialist visit to Cherkasy with EyeDetect costs UAH 12,000 all-inclusive, test included, for one person. If several people take the test, the travel cost is shared between them; a specialist will tell you the exact amount. VerifEye online test: UAH 2,500 for one question, UAH 4,000 for three, UAH 6,000 for six, with no extra charges.", replaces: ["price"] },
      { q: "How soon can a specialist come to Cherkasy?", a: "Visits to Cherkasy are planned 1–2 weeks ahead and combined with other requests in the region. The trip from Lviv is long: the direct night train takes about 11 hours, the drive is 700–730 km and 11–12 hours depending on the route, and the bus usually takes 12–13 hours. The night train arrives in the morning, so we schedule the test for the same day. You can take the VerifEye online test today.", replaces: ["speed"], sources: [["Ukrzaliznytsia: Cherkasy station timetable", "https://www.uz.gov.ua/passengers/timetable/?station=23340&by_station=1"], ["BiletyPlus: Lviv — Cherkasy buses", "https://bus.biletyplus.ua/ua/avtobusi/lvov/cherkassy"], ["DELLA: Lviv — Cherkasy distance", "https://della.com.ua/distance/?cities=5071%2C5210"]] },
      { q: "Can my partner take a lie detector test for infidelity in Cherkasy?", a: "Yes. The test checks one specific suspicion, for example infidelity over a certain period. The partner under suspicion takes it, or both partners take separate tests. The test is voluntary and requires written consent. For Cherkasy most people choose the VerifEye online test: from UAH 2,500, no visit needed, and available today." },
      { q: "What language is the test in Cherkasy?", a: "Ukrainian, Russian, English or German. We agree the questions in advance, and the person sees them before the test. This applies both to an EyeDetect visit and to the VerifEye online test." },
      { q: "Is a lie detector test legal in Ukraine?", a: "No Ukrainian law bans private voluntary polygraph tests or regulates them specifically. General rules apply, including the Law on Personal Data Protection: data may be processed with the person's voluntary, informed consent. We test only with written consent, and minors only with written consent from their parents and with the parents present. The rules for testing employees and job candidates are stricter than for a private test, so talk to a lawyer. In criminal cases in 2023–2024, Ukraine's Supreme Court did not accept a polygraph examiner's conclusion as stand-alone evidence, and our result is not court evidence either.", sources: [["Law on Personal Data Protection", "https://zakon.rada.gov.ua/laws/show/2297-17"], ["Supreme Court, case 183/3452/19 (2023)", "https://reyestr.court.gov.ua/Review/108686155"], ["Supreme Court, case 760/23990/17 (2024)", "https://reyestr.court.gov.ua/Review/117757884"]] },
    ],
    towns: {
      title: "Uman, Smila and other towns in the Cherkasy region",
      text: "The VerifEye online test can be taken from any town in the Cherkasy region. EyeDetect visits to other towns work the same way: UAH 12,000 all-inclusive, as anywhere in Ukraine outside the Lviv region.",
      list: "Kaniv · Smila · Uman · Vatutine · Zolotonosha",
      nearbyLabel: "Other cities in the region:",
      nearby: [["kyiv", "Kyiv"], ["poltava", "Poltava"], ["kropyvnytskyi", "Kropyvnytskyi"]],
    },
  },
};
