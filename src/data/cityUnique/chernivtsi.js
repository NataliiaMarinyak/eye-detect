// Унікальний контент сторінки Чернівців (uk/ru/en). Дорога і право — з перевірених фактів на 15.09.2026.
// faq[].replaces — ключі шаблонних питань (cityTexts faq), які це питання замінює.
export const chernivtsi = {
  uk: {
    seoTitle: "Поліграф у Чернівцях: детектор брехні, виїзд і онлайн",
    seoDescription: "Поліграф і детектор брехні в Чернівцях: виїзд спеціаліста з EyeDetect — 12 000 ₴ під ключ, онлайн-тест VerifEye сьогодні — від 2 500 ₴. Звіт за 5 хвилин.",
    updated: "2026-10-09",
    intro: "Чернівці — центр Буковини, і поїздів Інтерсіті зі Львова сюди немає. Найшвидший варіант — онлайн-тест VerifEye зі смартфона, його можна пройти вже сьогодні. Для тесту EyeDetect спеціаліст приїжджає зі Львова з обладнанням: найшвидший поїзд їде близько 4,5 години, автомобілем — близько 5 годин без зупинок.",
    facts: [["Від Львова", "≈ 270 км, 4,5 год поїздом"], ["Виїзд", "12 000 ₴ під ключ"], ["Онлайн-тест", "від 2 500 ₴"]],
    faq: [
      { q: "Де пройти поліграф у Чернівцях?", a: "Офісу в Чернівцях немає, тому є два варіанти. Онлайн-тест VerifEye можна пройти вже сьогодні з телефона, у тихій кімнаті вдома чи в офісі. Для тесту EyeDetect спеціаліст приїжджає зі Львова з обладнанням у ваш офіс або в тихе приміщення, про яке домовимося." },
      { q: "Скільки коштує поліграф у Чернівцях?", a: "Виїзд спеціаліста з EyeDetect до Чернівців — 12 000 ₴ під ключ, разом із тестом для однієї людини. Якщо тест проходять кілька людей, вартість виїзду ділиться, точну суму назве спеціаліст. Онлайн-тест VerifEye: 2 500 ₴ за одне питання, 4 000 ₴ за три, 6 000 ₴ за шість, без доплат.", replaces: ["price"] },
      { q: "Як швидко ви можете приїхати до Чернівців?", a: "Зазвичай протягом 2–5 робочих днів після узгодження питань і оплати. Зі Львова найшвидший поїзд їде близько 4,5 години, автомобілем — близько 5 годин без зупинок. Онлайн-тест VerifEye можна пройти вже сьогодні: тест триває 15–20 хвилин, звіт у PDF — до 5 хвилин після тесту.", replaces: ["speed"], sources: [["Укрзалізниця: розклад Львів — Чернівці", "https://uz.gov.ua/passengers/timetable/?from_station=23200&to_station=23500&by_route=1"], ["Укрзалізниця: поїзд № 233", "https://uz.gov.ua/passengers/timetable/?ntrain=107002&by_id=1"], ["Poizdato: поїзди Львів — Чернівці", "https://poizdato.net/rozklad-poizdiv/lviv--chernivtsi/"]] },
      { q: "Чи можна перевірити партнера на зраду в Чернівцях?", a: "Так. Тест перевіряє одну конкретну підозру, наприклад зраду за певний період. Його проходить партнер, якого підозрюють, або обидва партнери, кожен окремо. Тест добровільний, за письмовою згодою. Онлайн-тест VerifEye коштує від 2 500 ₴." },
      { q: "Якою мовою можна пройти тест?", a: "Українською, російською, англійською або німецькою. Іншими мовами, зокрема румунською, тест не проводимо. Питання формулюємо разом, і людина читає їх заздалегідь." },
      { q: "Чи законний тест на поліграфі в Україні?", a: "Жоден закон України не забороняє приватний добровільний тест на поліграфі і не регулює його окремо. Діють загальні правила, зокрема Закон «Про захист персональних даних»: згода на обробку даних має бути добровільною і поінформованою. Ми проводимо тест лише за письмовою згодою, а неповнолітніх — тільки за письмовою згодою батьків і в їхній присутності. Для перевірки працівників і кандидатів правила суворіші, тому перед такою перевіркою порадьтеся з юристом. Верховний Суд у кримінальних справах 2023–2024 років не визнавав висновок поліграфолога самостійним доказом, і наш результат теж не є судовим доказом.", sources: [["Закон про захист персональних даних", "https://zakon.rada.gov.ua/laws/show/2297-17"], ["Верховний Суд, справа 183/3452/19 (2023)", "https://reyestr.court.gov.ua/Review/108686155"], ["Верховний Суд, справа 760/23990/17 (2024)", "https://reyestr.court.gov.ua/Review/117757884"]] },
    ],
    towns: {
      title: "Новодністровськ, Сторожинець та інші міста Чернівецької області",
      text: "Онлайн-тест VerifEye можна пройти з будь-якого міста області. Виїзд з EyeDetect до інших міст — на тих самих умовах: 12 000 ₴ під ключ.",
      list: "Новодністровськ · Сторожинець · Хотин · Кіцмань · Заставна",
      nearbyLabel: "Інші міста регіону:",
      nearby: [["ivano-frankivsk", "Івано-Франківськ"], ["ternopil", "Тернопіль"], ["khmelnytskyi", "Хмельницький"]],
    },
    // local: джерела — https://uk.wikipedia.org/wiki/Чернівці, https://uk.wikipedia.org/wiki/Чернівецька_область
    local: {
      title: "Чернівці, ринок і кордон поруч: з чого почати перевірку на поліграфі",
      paragraphs: [
        "Чернівці — передусім торгове місто: торгівля тут важить більше за промисловість, на великому міському ринку працюють тисячі підприємців, а малий бізнес — це здебільшого крамниці, послуги й кафе. У промисловості помітне місце посідає легка: швейні, трикотажні, взуттєві підприємства. До пункту пропуску на румунському кордоні звідси близько 40 км, до молдовського — трохи далі, і через місто проходить міжнародна траса.",
        "Дорога зі Львова до Чернівців і назад забирає цілий день, тому виїзд спеціаліста ми плануємо заздалегідь, а їхати до нашого львівського офісу заради тесту на 30–45 хвилин мало кому зручно. Через це радимо починати з онлайн-тесту VerifEye з телефона: їхати нікуди не треба, а до виїзду можна повернутися пізніше, якщо він знадобиться. Виїзд з EyeDetect має сенс, коли тест потрібен кільком людям одразу, наприклад усім працівникам цеху чи магазину: спеціаліст тестує їх за один візит. Для тесту вистачить тихого приміщення, де є стіл і розетка; яке саме — ваш офіс, готельний номер чи кімната при цеху, — вирішуємо разом до поїздки. Ціни на обидва варіанти є в блоці нижче.",
        "Ще дві місцеві подробиці. Для чималої частини жителів області рідна мова румунська, але тест є лише українською, російською, англійською та німецькою, тож людина має вільно читати однією з них. А з Новодністровська, Хотина, Сторожинця чи Кіцмані їхати до обласного центру не обов'язково: онлайн-тест проходять там, де людина живе.",
        "Слово «поліграф» у розмові означає будь-який детектор брехні, тому так називають і нашу перевірку. Проводимо її на EyeDetect і VerifEye: вони стежать за реакціями очей, а тіло лишається без датчиків; класичний поліграф працює інакше, і серед наших послуг його немає.",
        "Тепер приклади з життя торгового міста. Уявімо швейний цех, де після великого замовлення бракує тканини й кількох готових виробів, а в цеху працюють п'ятеро швачок. Другий приклад: подружжя з ранку до вечора торгує на ринку й шукає няню для дворічної доньки; перш ніж залишити з нею дитину, батьки хочуть спитати про її попередню роботу. Третій: виторг за кілька днів лежав удома до закупівлі товару, частина грошей зникла, а в квартирі тоді були тільки свої. Тест проходить лише той, хто дав письмову згоду, а питання стосується однієї події:",
      ],
      points: [
        "Швачкам: «Від 1 до 20 вересня ви виносили з цеху тканину або готові вироби без дозволу власниці?»",
        "Няні: «За останній рік роботи нянею ви залишали дитину саму вдома?»",
        "Членам родини: «Від 5 до 8 жовтня ви брали гроші з шафи у спальні?»",
      ],
    },
  },
  ru: {
    seoTitle: "Полиграф в Черновцах: детектор лжи, выезд и онлайн",
    seoDescription: "Полиграф и детектор лжи в Черновцах: выезд специалиста с EyeDetect — 12 000 ₴ под ключ, онлайн-тест VerifEye сегодня — от 2 500 ₴. Отчёт за 5 минут.",
    updated: "2026-10-09",
    intro: "Черновцы — центр Буковины, и поездов Интерсити из Львова сюда нет. Самый быстрый вариант — онлайн-тест VerifEye со смартфона, его можно пройти уже сегодня. Для теста EyeDetect специалист приезжает из Львова с оборудованием: самый быстрый поезд идёт около 4,5 часа, на машине — около 5 часов без остановок.",
    facts: [["От Львова", "≈ 270 км, 4,5 ч поездом"], ["Выезд", "12 000 ₴ под ключ"], ["Онлайн-тест", "от 2 500 ₴"]],
    faq: [
      { q: "Где пройти полиграф в Черновцах?", a: "Офиса в Черновцах нет, поэтому есть два варианта. Онлайн-тест VerifEye можно пройти уже сегодня с телефона, в тихой комнате дома или в офисе. Для теста EyeDetect специалист приезжает из Львова с оборудованием в ваш офис или в тихое помещение, о котором договоримся." },
      { q: "Сколько стоит полиграф в Черновцах?", a: "Выезд специалиста с EyeDetect в Черновцы — 12 000 ₴ под ключ, вместе с тестом для одного человека. Если тест проходят несколько человек, стоимость выезда делится, точную сумму назовёт специалист. Онлайн-тест VerifEye: 2 500 ₴ за один вопрос, 4 000 ₴ за три, 6 000 ₴ за шесть, без доплат.", replaces: ["price"] },
      { q: "Как быстро вы можете приехать в Черновцы?", a: "Обычно в течение 2–5 рабочих дней после согласования вопросов и оплаты. Из Львова самый быстрый поезд идёт около 4,5 часа, на машине — около 5 часов без остановок. Онлайн-тест VerifEye можно пройти уже сегодня: тест длится 15–20 минут, отчёт в PDF — до 5 минут после теста.", replaces: ["speed"], sources: [["Укрзализныця: расписание Львов — Черновцы", "https://uz.gov.ua/passengers/timetable/?from_station=23200&to_station=23500&by_route=1"], ["Укрзализныця: поезд № 233", "https://uz.gov.ua/passengers/timetable/?ntrain=107002&by_id=1"], ["Poizdato: поезда Львов — Черновцы", "https://poizdato.net/rozklad-poizdiv/lviv--chernivtsi/"]] },
      { q: "Можно ли проверить партнёра на измену в Черновцах?", a: "Да. Тест проверяет одно конкретное подозрение, например измену за определённый период. Его проходит партнёр, которого подозревают, или оба партнёра, каждый отдельно. Тест добровольный, с письменного согласия. Онлайн-тест VerifEye стоит от 2 500 ₴." },
      { q: "На каком языке можно пройти тест?", a: "На украинском, русском, английском или немецком. На других языках, в том числе на румынском, тест не проводим. Вопросы формулируем вместе, и человек читает их заранее." },
      { q: "Законен ли тест на полиграфе в Украине?", a: "Ни один закон Украины не запрещает частный добровольный тест на полиграфе и не регулирует его отдельно. Действуют общие правила, в том числе Закон «О защите персональных данных»: согласие на обработку данных должно быть добровольным и информированным. Мы проводим тест только с письменного согласия, а несовершеннолетних — только с письменного согласия родителей и в их присутствии. Для проверки сотрудников и кандидатов правила строже, поэтому перед такой проверкой посоветуйтесь с юристом. Верховный Суд в уголовных делах 2023–2024 годов не признавал заключение полиграфолога самостоятельным доказательством, и наш результат тоже не является судебным доказательством.", sources: [["Закон о защите персональных данных", "https://zakon.rada.gov.ua/laws/show/2297-17"], ["Верховный Суд, дело 183/3452/19 (2023)", "https://reyestr.court.gov.ua/Review/108686155"], ["Верховный Суд, дело 760/23990/17 (2024)", "https://reyestr.court.gov.ua/Review/117757884"]] },
    ],
    towns: {
      title: "Новоднестровск, Сторожинец и другие города Черновицкой области",
      text: "Онлайн-тест VerifEye можно пройти из любого города области. Выезд с EyeDetect в другие города — на тех же условиях: 12 000 ₴ под ключ.",
      list: "Новоднестровск · Сторожинец · Хотин · Кицмань · Заставна",
      nearbyLabel: "Другие города региона:",
      nearby: [["ivano-frankivsk", "Ивано-Франковск"], ["ternopil", "Тернополь"], ["khmelnytskyi", "Хмельницкий"]],
    },
    local: {
      title: "Черновцы, рынок и граница рядом: с чего начать проверку на полиграфе",
      paragraphs: [
        "Черновцы — прежде всего торговый город: торговля здесь значит больше, чем промышленность, на большом городском рынке работают тысячи предпринимателей, а малый бизнес — это в основном магазины, услуги и кафе. В промышленности заметное место занимает лёгкая: швейные, трикотажные, обувные предприятия. До пункта пропуска на румынской границе отсюда около 40 км, до молдавского — немного дальше, и через город проходит международная трасса.",
        "Дорога из Львова в Черновцы и обратно занимает целый день, поэтому выезд специалиста мы планируем заранее, а ехать в наш львовский офис ради теста на 30–45 минут мало кому удобно. Вот почему советуем начинать с онлайн-теста VerifEye с телефона: ехать никуда не нужно, а к выезду можно вернуться позже, если он понадобится. Выезд с EyeDetect имеет смысл, когда тест нужен сразу нескольким людям, например всем работникам цеха или магазина: специалист тестирует их за один визит. Для теста хватит тихого помещения, где есть стол и розетка; какого именно — ваш офис, гостиничный номер или комната при цехе, — решаем вместе до поездки. Цены на оба варианта есть в блоке ниже.",
        "Ещё две местные подробности. Для немалой части жителей области родной язык румынский, но тест есть только на украинском, русском, английском и немецком, поэтому человек должен свободно читать на одном из них. А из Новоднестровска, Хотина, Сторожинца или Кицмани ехать в областной центр не обязательно: онлайн-тест проходят там, где человек живёт.",
        "Слово «полиграф» в разговоре означает любой детектор лжи, поэтому так называют и нашу проверку. Проводим её на EyeDetect и VerifEye: они следят за реакциями глаз, а тело остаётся без датчиков; классический полиграф работает иначе, и среди наших услуг его нет.",
        "Теперь примеры из жизни торгового города. Представим швейный цех, где после большого заказа не хватает ткани и нескольких готовых изделий, а в цеху работают пять швей. Второй пример: супруги с утра до вечера торгуют на рынке и ищут няню для двухлетней дочери; прежде чем оставить с ней ребёнка, родители хотят спросить о её предыдущей работе. Третий: выручка за несколько дней лежала дома до закупки товара, часть денег пропала, а в квартире тогда были только свои. Тест проходит только тот, кто дал письменное согласие, а вопрос касается одного события:",
      ],
      points: [
        "Швеям: «С 1 по 20 сентября вы выносили из цеха ткань или готовые изделия без разрешения владелицы?»",
        "Няне: «За последний год работы няней вы оставляли ребёнка одного дома?»",
        "Членам семьи: «С 5 по 8 октября вы брали деньги из шкафа в спальне?»",
      ],
    },
  },
  en: {
    seoTitle: "Lie Detector Test in Chernivtsi: EyeDetect Visit or Online",
    seoDescription: "Lie detector test in Chernivtsi: EyeDetect visit from Lviv for UAH 12,000 all-inclusive, or VerifEye online test today from UAH 2,500. Report in 5 minutes.",
    updated: "2026-10-09",
    intro: "Chernivtsi is the main city of Bukovina, and there are no Intercity trains to it from Lviv. The fastest option is the VerifEye smartphone test, which you can take today. For an EyeDetect test, a specialist travels from Lviv with the equipment: about 4.5 hours by the fastest train or about 5 hours by car without stops.",
    facts: [["From Lviv", "≈ 270 km, 4.5 h by train"], ["Visit", "UAH 12,000 all-inclusive"], ["Online test", "from UAH 2,500"]],
    faq: [
      { q: "Where can I take a polygraph test in Chernivtsi?", a: "We have no office in Chernivtsi, so there are two options. You can take the VerifEye online test today on your phone, in a quiet room at home or at work. For an EyeDetect test, a specialist comes from Lviv with the equipment to your office or to a quiet room we agree on." },
      { q: "How much does a lie detector test cost in Chernivtsi?", a: "An EyeDetect specialist visit to Chernivtsi costs UAH 12,000 all-inclusive, test included, for one person. If several people take the test, the visit cost is shared; a specialist will tell you the exact amount. VerifEye online test: UAH 2,500 for one question, UAH 4,000 for three, UAH 6,000 for six, with no extra charges.", replaces: ["price"] },
      { q: "How soon can you come to Chernivtsi?", a: "Usually within 2–5 business days after the questions are agreed and payment is made. From Lviv, the fastest train takes about 4.5 hours, and the drive takes about 5 hours without stops. You can take the VerifEye online test today: the test takes 15–20 minutes, and the PDF report comes within 5 minutes after the test.", replaces: ["speed"], sources: [["Ukrzaliznytsia: Lviv–Chernivtsi timetable", "https://uz.gov.ua/passengers/timetable/?from_station=23200&to_station=23500&by_route=1"], ["Ukrzaliznytsia: train No. 233", "https://uz.gov.ua/passengers/timetable/?ntrain=107002&by_id=1"], ["Poizdato: Lviv–Chernivtsi trains", "https://poizdato.net/rozklad-poizdiv/lviv--chernivtsi/"]] },
      { q: "Can my partner take a lie detector test for infidelity in Chernivtsi?", a: "Yes. The test checks one specific suspicion, for example infidelity over a certain period. The partner under suspicion takes it, or both partners take separate tests. The test is voluntary and requires written consent. The VerifEye online test costs from UAH 2,500." },
      { q: "What languages can I take the test in?", a: "Ukrainian, Russian, English or German. We do not run the test in other languages, including Romanian. We draw up the questions together with you, and the person reads them in advance." },
      { q: "Is a polygraph test legal in Ukraine?", a: "No Ukrainian law bans private voluntary polygraph tests or regulates them specifically. General rules apply, including the Law on Personal Data Protection: consent to data processing must be voluntary and informed. We test only with written consent, and minors only with written consent from their parents and with the parents present. The rules for testing employees and job candidates are stricter, so talk to a lawyer before such a test. In criminal cases in 2023–2024, Ukraine's Supreme Court did not accept a polygraph examiner's conclusion as independent evidence, and our result is not court evidence either.", sources: [["Law on Personal Data Protection", "https://zakon.rada.gov.ua/laws/show/2297-17"], ["Supreme Court, case 183/3452/19 (2023)", "https://reyestr.court.gov.ua/Review/108686155"], ["Supreme Court, case 760/23990/17 (2024)", "https://reyestr.court.gov.ua/Review/117757884"]] },
    ],
    towns: {
      title: "Novodnistrovsk, Storozhynets and other towns in the Chernivtsi region",
      text: "The VerifEye online test can be taken from any town in the region. EyeDetect visits to other towns work the same way: UAH 12,000 all-inclusive.",
      list: "Novodnistrovsk · Storozhynets · Khotyn · Kitsman · Zastavna",
      nearbyLabel: "Other cities in the region:",
      nearby: [["ivano-frankivsk", "Ivano-Frankivsk"], ["ternopil", "Ternopil"], ["khmelnytskyi", "Khmelnytskyi"]],
    },
    local: {
      title: "Chernivtsi, a market city near the border: where to start with a polygraph test",
      paragraphs: [
        "Chernivtsi is above all a trading city: trade matters more here than industry, thousands of traders work at the large city market, and small business mostly means shops, services and cafés. Within industry, light industry stands out: sewing, knitwear and footwear businesses. The border crossing into Romania is about 40 km away, the one into Moldova a little further, and an international highway runs through the city.",
        "The trip from Lviv to Chernivtsi and back takes a whole day, so we plan a specialist visit in advance, and travelling to our Lviv office for a 30–45 minute test suits few people. That is why our advice is to begin with VerifEye online, on a phone: no travel is needed, and you can come back to the idea of a visit later if it turns out to be necessary. An EyeDetect visit makes sense when several people need a test at once, for example everyone who works in a workshop or a shop: a specialist tests them in one visit. The test itself needs little: a quiet place with a table and a power outlet; whether that is your office, a hotel room or a room next to the workshop, we decide together before the trip. Prices for both options are in the block below.",
        "Two more local details. Romanian is the mother tongue of a sizeable share of the region's residents, but the test exists only in Ukrainian, Russian, English and German, so the person has to read one of them fluently. And there is no need to travel to the regional capital from Novodnistrovsk, Khotyn, Storozhynets or Kitsman: the online test is taken wherever the person lives.",
        "In conversation, any lie detector goes by the name of polygraph, which is why our test gets called that too. We run it on EyeDetect and VerifEye, which look at eye reactions and leave the body without sensors; a classic polygraph works differently, and it is not among our services.",
        "Now some examples from life in a trading city. Imagine a sewing workshop where, after a big order, fabric and several finished garments are missing, and five seamstresses work there. A second example: a couple who trade at the market from morning till evening are looking for a nanny for their two-year-old daughter; before leaving the child with her, the parents want to ask about her previous job. A third: several days' takings were kept at home until the next purchase of stock, part of the money disappeared, and only family members were in the flat at the time. Only a person who has given written consent takes the test, and the question is about one event:",
      ],
      points: [
        "For the seamstresses: “Between September 1 and September 20, did you take fabric or finished garments out of the workshop without the owner's permission?”",
        "For the nanny: “In your last year of working as a nanny, did you leave a child alone at home?”",
        "For the family members: “Between October 5 and October 8, did you take money from the wardrobe in the bedroom?”",
      ],
    },
  },
};
