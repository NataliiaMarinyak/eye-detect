// Унікальний контент сторінки Києва (uk/ru/en). Закон і дорога — з перевірених фактів на 15.09.2026; випадки — спільний блок.
// faq[].replaces — ключі шаблонних питань (cityTexts faq), які це питання замінює.
export const kyiv = {
  uk: {
    seoTitle: "Пройти поліграф у Києві: ціна, виїзд або онлайн",
    seoDescription: "Детектор брехні в Києві: офісу в місті немає. Виїзд спеціаліста з EyeDetect — 12 000 ₴ під ключ або онлайн-тест VerifEye сьогодні від 2 500 ₴.",
    intro: "Київ — столиця України, приблизно за 540 км від Львова. Найшвидший варіант — онлайн-тест VerifEye зі смартфона, його можна пройти вже сьогодні. Для тесту EyeDetect спеціаліст приїжджає зі Львова з обладнанням: найшвидшим поїздом Інтерсіті дорога займає близько 6 годин.",
    facts: [["Від Львова", "≈ 540 км, 6 год поїздом"], ["Виїзд", "12 000 ₴ під ключ"], ["Онлайн-тест", "від 2 500 ₴"]],
    faq: [
      { q: "Де пройти поліграф у Києві?", a: "Офісу в Києві немає, тому є два варіанти. Онлайн-тест VerifEye можна пройти вже сьогодні з телефона, у тихій кімнаті вдома чи в офісі. Тест EyeDetect проводимо під час виїзду: спеціаліст приїжджає зі Львова з обладнанням у ваш офіс або в іншу тиху кімнату. Єдиний кабінет — у Львові." },
      { q: "Скільки коштує перевірка на поліграфі в Києві?", a: "Виїзд спеціаліста з EyeDetect до Києва коштує 12 000 ₴ під ключ, разом із тестом для однієї людини. Для кількох осіб вартість виїзду ділиться, точну суму назве спеціаліст. Онлайн-тест VerifEye: 2 500 ₴ за одне питання, 4 000 ₴ за три, 6 000 ₴ за шість, без доплат.", replaces: ["price"] },
      { q: "Як швидко спеціаліст може приїхати до Києва?", a: "Виїзд до Києва плануємо за 1–2 тижні й поєднуємо з іншими заявками. Дорога зі Львова займає близько 6 годин найшвидшим поїздом або 7–8 годин автомобілем, не рахуючи зупинок. Онлайн-тест VerifEye доступний уже сьогодні.", replaces: ["speed"], sources: [["Укрзалізниця: розклад Львів — Київ", "https://uz.gov.ua/passengers/timetable/?from_station=23200&to_station=22000&by_route=1"], ["Poizdato: поїзди Львів — Київ", "https://poizdato.net/rozklad-poizdiv/lviv--kyiv/"]] },
      { q: "Чи можна пройти поліграф на зраду в Києві?", a: "Так. Тест перевіряє одну конкретну підозру, наприклад зраду за певний період. Його проходить партнер, якого підозрюють, або обидва партнери, кожен окремо. Тест добровільний, за письмовою згодою. Онлайн-тест VerifEye коштує від 2 500 ₴, і виїзд для нього не потрібен." },
      { q: "Чи можна перевірити працівників на поліграфі в Києві?", a: "Спеціаліст може приїхати з EyeDetect у ваш офіс у Києві, а кандидати можуть пройти онлайн-тест VerifEye з телефона. Тест проходить лише людина, яка дала письмову згоду. Для перевірки працівників і кандидатів правила суворіші, ніж для приватного тесту, тому перед такою перевіркою порадьтеся з юристом." },
      { q: "Чи законна перевірка на поліграфі в Україні?", a: "Жоден закон України не забороняє приватний добровільний тест на поліграфі й не регулює його окремо. Діють загальні правила, зокрема Закон «Про захист персональних даних»: дані можна обробляти за добровільною й поінформованою згодою людини. Ми проводимо тест лише за письмовою згодою, а неповнолітніх — тільки за письмовою згодою батьків і в їхній присутності. Для перевірки працівників і кандидатів правила суворіші, тому порадьтеся з юристом. Верховний Суд у кримінальних справах 2023–2024 років не визнавав висновок поліграфолога самостійним доказом, і наш результат теж не є судовим доказом.", sources: [["Закон про захист персональних даних", "https://zakon.rada.gov.ua/laws/show/2297-17"], ["Верховний Суд, справа 183/3452/19 (2023)", "https://reyestr.court.gov.ua/Review/108686155"], ["Верховний Суд, справа 760/23990/17 (2024)", "https://reyestr.court.gov.ua/Review/117757884"]] },
    ],
    towns: {
      title: "Біла Церква, Бровари та інші міста Київської області",
      text: "Онлайн-тест VerifEye можна пройти з будь-якого міста Київської області. Виїзд з EyeDetect до інших міст — на тих самих умовах: 12 000 ₴ під ключ, як і всюди в Україні, крім Львівської області.",
      list: "Березань · Біла Церква · Бориспіль · Бровари · Буча · Васильків · Ірпінь · Обухів · Переяслав · Ржищів · Славутич · Фастів",
      nearbyLabel: "Інші міста регіону:",
      nearby: [["zhytomyr", "Житомир"], ["chernihiv", "Чернігів"], ["cherkasy", "Черкаси"]],
    },
  },
  ru: {
    seoTitle: "Пройти полиграф в Киеве: цена, выезд или онлайн",
    seoDescription: "Проверка на детекторе лжи в Киеве: офиса в городе нет. Выезд специалиста с EyeDetect — 12 000 ₴ под ключ или онлайн-тест VerifEye сегодня от 2 500 ₴.",
    intro: "Киев — столица Украины, примерно в 540 км от Львова. Самый быстрый вариант — онлайн-тест VerifEye со смартфона, его можно пройти уже сегодня. Для теста EyeDetect специалист приезжает из Львова с оборудованием: на самом быстром поезде Интерсити дорога занимает около 6 часов.",
    facts: [["От Львова", "≈ 540 км, 6 ч поездом"], ["Выезд", "12 000 ₴ под ключ"], ["Онлайн-тест", "от 2 500 ₴"]],
    faq: [
      { q: "Где пройти полиграф в Киеве?", a: "Офиса в Киеве нет, поэтому есть два варианта. Онлайн-тест VerifEye можно пройти уже сегодня с телефона, в тихой комнате дома или в офисе. Тест EyeDetect проводим во время выезда: специалист приезжает из Львова с оборудованием в ваш офис или в другую тихую комнату. Единственный кабинет — во Львове." },
      { q: "Сколько стоит проверка на полиграфе в Киеве?", a: "Выезд специалиста с EyeDetect в Киев стоит 12 000 ₴ под ключ, вместе с тестом для одного человека. Для нескольких человек стоимость выезда делится, точную сумму назовёт специалист. Онлайн-тест VerifEye: 2 500 ₴ за один вопрос, 4 000 ₴ за три, 6 000 ₴ за шесть, без доплат.", replaces: ["price"] },
      { q: "Как быстро специалист может приехать в Киев?", a: "Выезд в Киев планируем за 1–2 недели и объединяем с другими заявками. Дорога из Львова занимает около 6 часов на самом быстром поезде или 7–8 часов на машине, не считая остановок. Онлайн-тест VerifEye доступен уже сегодня.", replaces: ["speed"], sources: [["Укрзализныця: расписание Львов — Киев", "https://uz.gov.ua/passengers/timetable/?from_station=23200&to_station=22000&by_route=1"], ["Poizdato: поезда Львов — Киев", "https://poizdato.net/rozklad-poizdiv/lviv--kyiv/"]] },
      { q: "Можно ли пройти полиграф на измену в Киеве?", a: "Да. Тест проверяет одно конкретное подозрение, например измену за определённый период. Его проходит партнёр, которого подозревают, или оба партнёра, каждый отдельно. Тест добровольный, с письменного согласия. Онлайн-тест VerifEye стоит от 2 500 ₴, и выезд для него не нужен." },
      { q: "Можно ли проверить сотрудников на полиграфе в Киеве?", a: "Специалист может приехать с EyeDetect в ваш офис в Киеве, а кандидаты могут пройти онлайн-тест VerifEye с телефона. Тест проходит только человек, который дал письменное согласие. Для проверки сотрудников и кандидатов правила строже, чем для частного теста, поэтому перед такой проверкой посоветуйтесь с юристом." },
      { q: "Законна ли проверка на полиграфе в Украине?", a: "Ни один закон Украины не запрещает частный добровольный тест на полиграфе и не регулирует его отдельно. Действуют общие правила, в том числе Закон «О защите персональных данных»: данные можно обрабатывать с добровольного и информированного согласия человека. Мы проводим тест только с письменного согласия, а несовершеннолетних — только с письменного согласия родителей и в их присутствии. Для проверки сотрудников и кандидатов правила строже, поэтому посоветуйтесь с юристом. Верховный Суд в уголовных делах 2023–2024 годов не признавал заключение полиграфолога самостоятельным доказательством, и наш результат тоже не является судебным доказательством.", sources: [["Закон о защите персональных данных", "https://zakon.rada.gov.ua/laws/show/2297-17"], ["Верховный Суд, дело 183/3452/19 (2023)", "https://reyestr.court.gov.ua/Review/108686155"], ["Верховный Суд, дело 760/23990/17 (2024)", "https://reyestr.court.gov.ua/Review/117757884"]] },
    ],
    towns: {
      title: "Белая Церковь, Бровары и другие города Киевской области",
      text: "Онлайн-тест VerifEye можно пройти из любого города Киевской области. Выезд с EyeDetect в другие города — на тех же условиях: 12 000 ₴ под ключ, как и везде в Украине, кроме Львовской области.",
      list: "Белая Церковь · Березань · Борисполь · Бровары · Буча · Васильков · Ирпень · Обухов · Переяслав · Ржищев · Славутич · Фастов",
      nearbyLabel: "Другие города региона:",
      nearby: [["zhytomyr", "Житомир"], ["chernihiv", "Чернигов"], ["cherkasy", "Черкассы"]],
    },
  },
  en: {
    seoTitle: "Lie Detector Test in Kyiv: Price, Visit or Online",
    seoDescription: "Lie detector test in Kyiv: no local office. Book an EyeDetect visit for UAH 12,000 all-inclusive or take the VerifEye online test today from UAH 2,500.",
    intro: "Kyiv is the capital of Ukraine, about 540 km from Lviv. The fastest option is the VerifEye smartphone test, which you can take today. For an EyeDetect test, a specialist travels from Lviv with the equipment: the fastest Intercity train takes about 6 hours.",
    facts: [["From Lviv", "≈ 540 km, 6 h by train"], ["Visit", "UAH 12,000 all-inclusive"], ["Online test", "from UAH 2,500"]],
    faq: [
      { q: "Where can I take a polygraph test in Kyiv?", a: "We have no office in Kyiv, so there are two options. You can take the VerifEye online test today on your phone, in a quiet room at home or at work. The EyeDetect test takes place during a visit: a specialist comes from Lviv with the equipment to your office or another quiet room. Our only office is in Lviv." },
      { q: "How much does a lie detector test cost in Kyiv?", a: "An EyeDetect specialist visit to Kyiv costs UAH 12,000 all-inclusive, test included, for one person. For several people the travel cost is shared; a specialist will tell you the exact amount. VerifEye online test: UAH 2,500 for one question, UAH 4,000 for three, UAH 6,000 for six, with no extra charges.", replaces: ["price"] },
      { q: "How soon can a specialist come to Kyiv?", a: "Visits to Kyiv are planned 1–2 weeks ahead and combined with other requests. The trip from Lviv takes about 6 hours by the fastest train, or 7–8 hours by car, not counting stops. The VerifEye online test is available today.", replaces: ["speed"], sources: [["Ukrzaliznytsia: Lviv–Kyiv timetable", "https://uz.gov.ua/passengers/timetable/?from_station=23200&to_station=22000&by_route=1"], ["Poizdato: Lviv–Kyiv trains", "https://poizdato.net/rozklad-poizdiv/lviv--kyiv/"]] },
      { q: "Can my partner take a lie detector test for infidelity in Kyiv?", a: "Yes. The test checks one specific suspicion, for example infidelity over a certain period. The partner under suspicion takes it, or both partners take separate tests. The test is voluntary and requires written consent. The VerifEye online test costs from UAH 2,500 and needs no visit." },
      { q: "Can we test employees with a lie detector in Kyiv?", a: "A specialist can bring EyeDetect to your office in Kyiv, and job candidates can take the VerifEye online test on a phone. Only a person who has given written consent takes the test. The rules for testing employees and job candidates are stricter than for a private test, so talk to a lawyer before such a test." },
      { q: "Is a lie detector test legal in Ukraine?", a: "No Ukrainian law bans private voluntary polygraph tests or regulates them specifically. General rules apply, including the Law on Personal Data Protection: data may be processed with the person's voluntary, informed consent. We test only with written consent, and minors only with written consent from their parents and with the parents present. The rules for testing employees and job candidates are stricter, so talk to a lawyer. In criminal cases in 2023–2024, Ukraine's Supreme Court did not accept a polygraph examiner's conclusion as stand-alone evidence, and our result is not court evidence either.", sources: [["Law on Personal Data Protection", "https://zakon.rada.gov.ua/laws/show/2297-17"], ["Supreme Court, case 183/3452/19 (2023)", "https://reyestr.court.gov.ua/Review/108686155"], ["Supreme Court, case 760/23990/17 (2024)", "https://reyestr.court.gov.ua/Review/117757884"]] },
    ],
    towns: {
      title: "Bila Tserkva, Brovary and other towns in the Kyiv region",
      text: "The VerifEye online test can be taken from any town in the Kyiv region. EyeDetect visits to other towns work the same way: UAH 12,000 all-inclusive, as anywhere in Ukraine outside the Lviv region.",
      list: "Berezan · Bila Tserkva · Boryspil · Brovary · Bucha · Vasylkiv · Irpin · Obukhiv · Pereiaslav · Rzhyshchiv · Slavutych · Fastiv",
      nearbyLabel: "Other cities in the region:",
      nearby: [["zhytomyr", "Zhytomyr"], ["chernihiv", "Chernihiv"], ["cherkasy", "Cherkasy"]],
    },
  },
};
