// Тексти шаблону міської сторінки. {loc} = «у Києві», {city} = «Київ», {km} = відстань.
//
// Сторінка бере тексти через getCityTexts(lang, slug, region) (у кінці файла), а не напряму з cityTexts:
//   • h1 — заголовок для міст Європи, h1Ua — для міст України (зі словом «поліграф», яке люди шукають);
//   • coverage — абзац «де є обладнання EyeDetect», лише для міст України;
//   • partner — заміни для міст зі списку PARTNER_CITIES: там тест EyeDetect проводить партнер
//     у власному кабінеті (сімейна перевірка 8 500 ₴, скринінг і крадіжка від 5 500 ₴; виїзд до клієнта по місту 8 500 ₴, по області 12 000 ₴), тому речення про виїзд і «офісу немає» звучать інакше.

// Міста, де тест EyeDetect проводить наш партнер у власному кабінеті (факт власника, 09.10.2026).
// Єдине місце зі списком: від нього залежать перший екран, блок «Як пройти тест», шаблонні питання,
// запасний meta description і назва послуги в JSON-LD. Назв партнерів на сайті не пишемо.
export const PARTNER_CITIES = ["kyiv", "zaporizhzhia"];
export const isPartnerCity = (slug) => PARTNER_CITIES.includes(slug);

export const cityTexts = {
  uk: {
    title: "Детектор брехні {loc}: виїзд EyeDetect або онлайн VerifEye",
    h1: "Детектор брехні {loc}: виїзд спеціаліста або тест онлайн сьогодні",
    h1Ua: "Поліграф і детектор брехні {loc}: виїзд або онлайн-тест",
    sub: {
      "ua-west": "Шукаєте перевірку на поліграфі {loc}? EyeDetect від Converus (США) — детектор брехні за реакціями очей, без датчиків на тілі. Кабінет у Львові, виїзд спеціаліста за домовленістю або онлайн-тест VerifEye з телефона вже сьогодні.",
      "ua-other": "Шукаєте перевірку на поліграфі {loc}? EyeDetect від Converus (США) — детектор брехні за реакціями очей, без датчиків на тілі. Спеціаліст приїжджає з обладнанням, а онлайн-тест VerifEye можна пройти з телефона вже сьогодні.",
      eu: "Онлайн-тест VerifEye з телефона вже сьогодні або виїзд спеціаліста з обладнанням EyeDetect {loc}. Технологія Converus (США), звіт у PDF до 5 хвилин.",
    },
    facts: ["онлайн сьогодні", "виїзд з обладнанням", "6–8 осіб за день", "PDF до 5 хвилин"],
    eyebrow: "Виїзд і онлайн",
    // Назва послуги для заявки (Telegram) мовою сторінки.
    service: "EyeDetect з виїздом",
    coverage: "Обладнання EyeDetect є в нашому офісі у Львові та в наших партнерів у Києві й Запоріжжі. В інші міста України привозимо його самі. Онлайн-тест VerifEye працює з будь-якого міста.",
    visitTitle: "Як пройти тест {loc}",
    online: {
      title: "Онлайн сьогодні: VerifEye",
      text: "Ви отримуєте посилання, людина проходить тест з телефона у тихій кімнаті, 15–20 хвилин. Звіт у PDF до 5 хвилин після тесту, пояснення спеціаліста того ж дня. Підходить для перевірки на вірність і для кандидатів на роботу.",
      price: "від 2 500 ₴",
      cta: "Пройти онлайн",
    },
    visit: {
      title: "Виїзд спеціаліста з EyeDetect",
      text: {
        "ua-west": "Відстань від Львова — близько {km} км. Приїжджаємо з обладнанням у ваш офіс або домовляємося про тихе приміщення. За день можна перевірити 6–8 осіб.",
        "ua-other": "Відстань від Львова — близько {km} км, тому виїзд плануємо заздалегідь і поєднуємо з іншими заявками в регіоні. Приїжджаємо з обладнанням у ваш офіс або готель. За день можна перевірити 6–8 осіб.",
        eu: "Виїзд плануємо під заявки: збираємо кілька запитів у регіоні і призначаємо дату. Тест {loc} проводимо у вашому офісі або в орендованому приміщенні. За день можна перевірити 6–8 осіб.",
      },
      textNoKm: {
        "ua-west": "Приїжджаємо з обладнанням у ваш офіс або домовляємося про тихе приміщення. За день можна перевірити 6–8 осіб.",
        "ua-other": "Виїзд плануємо заздалегідь і поєднуємо з іншими заявками в регіоні. Приїжджаємо з обладнанням у ваш офіс або готель. За день можна перевірити 6–8 осіб.",
        eu: "Виїзд плануємо під заявки: збираємо кілька запитів у регіоні і призначаємо дату. Тест проходить у вашому офісі або в орендованому приміщенні. За день можна перевірити 6–8 осіб.",
      },
      price: {
        "ua-west": "12 000 ₴ під ключ, разом із тестом",
        "ua-other": "12 000 ₴ під ключ, разом із тестом",
        eu: "тест від 10 000 ₴ + дорога і приміщення",
      },
      cta: "Замовити виїзд",
    },
    lvivNote: "Ще один варіант: приїхати до Львова, вул. Городоцька, 45. Тест від 5 500 ₴ без доплати за виїзд, дата без прив'язки до інших заявок.",
    faqTitle: "Питання про тест {loc}",
    faq: {
      "ua-west": [
        { key: "speed", q: "Як швидко можна пройти тест з виїздом {loc}?", a: "Зазвичай протягом 2–5 робочих днів після узгодження питань і оплати. Онлайн-тест VerifEye доступний уже сьогодні." },
        { key: "room", q: "Чи потрібне спеціальне приміщення?", a: "Ні. Достатньо тихої кімнати зі столом, стільцем і розеткою. Обладнання привозимо з собою." },
        { key: "capacity", q: "Скільки людей можна перевірити за один виїзд?", a: "6–8 осіб за день. Для більшої кількості плануємо два дні." },
        { key: "price", q: "Скільки коштує тест з виїздом {loc}?", a: "12 000 ₴ під ключ, разом із тестом для однієї людини. Для кількох осіб вартість виїзду ділиться, точну суму назве спеціаліст." },
        { key: "online", q: "Чи можна пройти тест онлайн замість виїзду?", a: "Так, VerifEye з телефона від 2 500 ₴. Для перевірок на вірність і кандидатів це часто зручніше." },
      ],
      "ua-other": [
        { key: "speed", q: "Як швидко можна пройти тест з виїздом {loc}?", a: "Виїзд у далекі регіони плануємо за 1–2 тижні і поєднуємо кілька заявок. Онлайн-тест VerifEye доступний уже сьогодні." },
        { key: "room", q: "Чи потрібне спеціальне приміщення?", a: "Ні. Достатньо тихої кімнати зі столом, стільцем і розеткою. Обладнання привозимо з собою." },
        { key: "capacity", q: "Скільки людей можна перевірити за один виїзд?", a: "6–8 осіб за день. Для більшої кількості плануємо два дні." },
        { key: "price", q: "Скільки коштує тест з виїздом {loc}?", a: "12 000 ₴ під ключ, разом із тестом для однієї людини. Для кількох осіб вартість виїзду ділиться, точну суму назве спеціаліст." },
        { key: "online", q: "Чи можна пройти тест онлайн замість виїзду?", a: "Так, VerifEye з телефона від 2 500 ₴, звіт у PDF до 5 хвилин після тесту. Для перевірок на вірність і кандидатів це часто зручніше." },
      ],
      // key — щоб унікальні питання міста могли замінити шаблонні (mergeCityFaq).
      eu: [
        { key: "visit", q: "Як відбувається виїзд {loc}?", a: "Збираємо кілька заявок у регіоні і призначаємо дату. Дорога зі Львова і приміщення для тесту оплачуються окремо від вартості тесту." },
        { key: "price", q: "Скільки коштує тест {loc}?", a: "EyeDetect від 10 000 ₴ за одне питання, 15 000 ₴ за три. Плюс квитки зі Львова і оренда приміщення. VerifEye онлайн від 2 500 ₴ без доплат." },
        { key: "language", q: "Якою мовою проходить тест?", a: "Українською, російською, англійською або німецькою. Питання формулюємо разом, і людина читає їх заздалегідь." },
        { key: "online", q: "Чи можна пройти тест онлайн, не чекаючи виїзду?", a: "Так, VerifEye з телефона доступний уже сьогодні, звіт у PDF до 5 хвилин після тесту." },
        { key: "legal", q: "Чи законно це в країні, де я живу?", a: "Ми проводимо лише добровільні тести за письмовою згодою. Неповнолітні проходять тест тільки за письмовою згодою батьків і в їхній присутності. Результат не є судовим доказом; чи можна використати його у вашій країні для конкретної мети, уточніть у місцевого юриста." },
      ],
    },
    noOffice: "Офісу {loc} у нас немає. Ми працюємо лише виїздом до клієнта з обладнанням EyeDetect або онлайн через VerifEye.",
    quiz: {
      heroCta: "Розрахувати точну вартість",
      title: "Скільки коштуватиме тест {loc}?",
      text: "Дайте відповідь на 5 коротких питань — спеціаліст порахує точну вартість виїзду або онлайн-тесту і передзвонить. Це безкоштовно і ні до чого не зобов'язує.",
      button: "Розрахувати вартість",
      finalTitle: "Не знаєте, з чого почати {loc}?",
      finalText: "Кілька коротких питань — і ми підберемо формат, виїзд до вас чи онлайн, та назвемо ціну.",
      phone: "Або телефонуйте",
    },
    uniqueTitle: "Детектор брехні {loc}: що варто знати",
    ctaTitle: "Готові дізнатися правду {loc}?",
    ctaText: "Залиште заявку або зателефонуйте. Відповімо цілодобово, протягом 15–30 хвилин.",
    // Заміни для міст-партнерів (PARTNER_CITIES): власного офісу немає, тест проводить партнер у своєму кабінеті.
    partner: {
      title: "Поліграф {loc}: EyeDetect у партнера або онлайн",
      h1: "Поліграф і детектор брехні {loc}: у партнера або онлайн",
      description: "Детектор брехні {loc}: тест EyeDetect у кабінеті нашого партнера від 5 500 ₴, виїзд до клієнта або онлайн-тест VerifEye з телефона сьогодні, від 2 500 ₴.",
      sub: "Шукаєте перевірку на поліграфі {loc}? EyeDetect від Converus (США) — детектор брехні за реакціями очей, без датчиків на тілі. Тест проводить наш партнер у своєму кабінеті, є й виїзд до клієнта, а онлайн-тест VerifEye можна пройти з телефона вже сьогодні.",
      facts: ["онлайн сьогодні", "EyeDetect у кабінеті партнера", "виїзд до клієнта", "PDF до 5 хвилин"],
      eyebrow: "У партнера й онлайн",
      service: "EyeDetect у партнера",
      noOffice: "Власного офісу {loc} у нас немає. Тест EyeDetect тут проводить наш партнер у своєму кабінеті: сімейна перевірка — 8 500 ₴, скринінг і перевірка у справі про крадіжку — від 5 500 ₴. Виїзд до клієнта: по місту — 8 500 ₴, по області — 12 000 ₴. Онлайн-тест VerifEye доступний уже сьогодні.",
      visit: {
        title: "EyeDetect у кабінеті партнера",
        text: "Тест EyeDetect {loc} проводить наш партнер у власному кабінеті, тож чекати на виїзд зі Львова не потрібно. Питання узгоджуємо заздалегідь, і людина читає їх до тесту. Сам тест триває 30–45 хвилин.",
        price: "від 5 500 ₴",
        cta: "Записатися на тест",
      },
      // Третя картка блоку «Як пройти тест», лише для міст-партнерів: виїзд до клієнта. Речення й ціни ті самі,
      // що в плашці noOffice і в текстах цих міст. Не додавати «під ключ», «разом із тестом» і хто саме їде.
      // title — ще й назва послуги у вікні заявки («Виїзд до клієнта · у Києві»).
      clientVisit: {
        title: "Виїзд до клієнта",
        text: "Виїзд до клієнта зручний, коли приїхати до кабінету не виходить. Дату виїзду узгоджуємо після заявки.",
        price: "по місту — 8 500 ₴, по області — 12 000 ₴",
        cta: "Замовити виїзд",
      },
      // Ті самі key, що й у звичайних питаннях: унікальні питання міста замінюють їх через replaces.
      faq: [
        { key: "speed", q: "Як швидко можна пройти тест EyeDetect {loc}?", a: "Дату й час узгоджуємо з партнером, у кабінеті якого проходить тест. Найближчий вільний час назвемо після заявки. Дату виїзду до клієнта теж узгоджуємо після заявки. Онлайн-тест VerifEye доступний уже сьогодні." },
        { key: "room", q: "Де проходить тест EyeDetect {loc}?", a: "У кабінеті нашого партнера: обладнання вже на місці, везти його зі Львова не потрібно. Власного офісу {loc} у нас немає; адресу кабінету повідомляємо під час запису. Можливий і виїзд до клієнта, по місту чи в область." },
        { key: "price", q: "Скільки коштує тест EyeDetect {loc}?", a: "У кабінеті партнера сімейна перевірка коштує 8 500 ₴, скринінг і перевірка у справі про крадіжку — від 5 500 ₴. Виїзд до клієнта: по місту — 8 500 ₴, по області — 12 000 ₴. Точну суму для вашого випадку назвемо після заявки. Онлайн-тест VerifEye: 2 500 ₴ за одне питання, 4 000 ₴ за три, 6 000 ₴ за шість." },
        { key: "online", q: "Чи можна пройти тест онлайн, не їдучи до кабінету?", a: "Так, VerifEye з телефона від 2 500 ₴, звіт у PDF до 5 хвилин після тесту. Для перевірок на вірність і кандидатів це часто зручніше." },
      ],
      quiz: {
        text: "Дайте відповідь на 5 коротких питань — спеціаліст порахує точну вартість тесту в партнера, виїзду або онлайн-тесту і передзвонить. Це безкоштовно і ні до чого не зобов'язує.",
        finalText: "Кілька коротких питань — і ми підберемо формат, тест у кабінеті партнера, виїзд до вас чи онлайн, та назвемо ціну.",
      },
    },
  },
  ru: {
    title: "Детектор лжи {loc}: выезд EyeDetect или онлайн VerifEye",
    h1: "Детектор лжи {loc}: выезд специалиста или тест онлайн сегодня",
    h1Ua: "Полиграф и детектор лжи {loc}: выезд или онлайн-тест",
    sub: {
      "ua-west": "Ищете проверку на полиграфе {loc}? EyeDetect от Converus (США) — детектор лжи по реакциям глаз, без датчиков на теле. Кабинет во Львове, выезд специалиста по договорённости или онлайн-тест VerifEye с телефона уже сегодня.",
      "ua-other": "Ищете проверку на полиграфе {loc}? EyeDetect от Converus (США) — детектор лжи по реакциям глаз, без датчиков на теле. Специалист приезжает с оборудованием, а онлайн-тест VerifEye можно пройти с телефона уже сегодня.",
      eu: "Онлайн-тест VerifEye с телефона уже сегодня или выезд специалиста с оборудованием EyeDetect {loc}. Технология Converus (США), отчёт в PDF до 5 минут.",
    },
    facts: ["онлайн сегодня", "выезд с оборудованием", "6–8 человек в день", "PDF до 5 минут"],
    eyebrow: "Выезд и онлайн",
    service: "EyeDetect с выездом",
    coverage: "Оборудование EyeDetect есть в нашем офисе во Львове и у наших партнёров в Киеве и Запорожье. В другие города Украины привозим его сами. Онлайн-тест VerifEye работает из любого города.",
    visitTitle: "Как пройти тест {loc}",
    online: {
      title: "Онлайн сегодня: VerifEye",
      text: "Вы получаете ссылку, человек проходит тест с телефона в тихой комнате, 15–20 минут. Отчёт в PDF до 5 минут после теста, пояснение специалиста в тот же день. Подходит для проверки на верность и для кандидатов на работу.",
      price: "от 2 500 ₴",
      cta: "Пройти онлайн",
    },
    visit: {
      title: "Выезд специалиста с EyeDetect",
      text: {
        "ua-west": "Расстояние от Львова — около {km} км. Приезжаем с оборудованием в ваш офис или договариваемся о тихом помещении. За день можно проверить 6–8 человек.",
        "ua-other": "Расстояние от Львова — около {km} км, поэтому выезд планируем заранее и объединяем с другими заявками в регионе. Приезжаем с оборудованием в ваш офис или отель. За день можно проверить 6–8 человек.",
        eu: "Выезд планируем под заявки: собираем несколько запросов в регионе и назначаем дату. Тест {loc} проводим в вашем офисе или в арендованном помещении. За день можно проверить 6–8 человек.",
      },
      textNoKm: {
        "ua-west": "Приезжаем с оборудованием в ваш офис или договариваемся о тихом помещении. За день можно проверить 6–8 человек.",
        "ua-other": "Выезд планируем заранее и объединяем с другими заявками в регионе. Приезжаем с оборудованием в ваш офис или отель. За день можно проверить 6–8 человек.",
        eu: "Выезд планируем под заявки: собираем несколько запросов в регионе и назначаем дату. Тест проходит в вашем офисе или в арендованном помещении. За день можно проверить 6–8 человек.",
      },
      price: {
        "ua-west": "12 000 ₴ под ключ, вместе с тестом",
        "ua-other": "12 000 ₴ под ключ, вместе с тестом",
        eu: "тест от 10 000 ₴ + дорога и помещение",
      },
      cta: "Заказать выезд",
    },
    lvivNote: "Ещё один вариант: приехать во Львов, ул. Городоцкая, 45. Тест от 5 500 ₴ без доплаты за выезд, дата без привязки к другим заявкам.",
    faqTitle: "Вопросы о тесте {loc}",
    faq: {
      "ua-west": [
        { key: "speed", q: "Как быстро можно пройти тест с выездом {loc}?", a: "Обычно в течение 2–5 рабочих дней после согласования вопросов и оплаты. Онлайн-тест VerifEye доступен уже сегодня." },
        { key: "room", q: "Нужно ли специальное помещение?", a: "Нет. Достаточно тихой комнаты со столом, стулом и розеткой. Оборудование привозим с собой." },
        { key: "capacity", q: "Сколько людей можно проверить за один выезд?", a: "6–8 человек в день. Для большего количества планируем два дня." },
        { key: "price", q: "Сколько стоит тест с выездом {loc}?", a: "12 000 ₴ под ключ, вместе с тестом для одного человека. Для нескольких человек стоимость выезда делится, точную сумму назовёт специалист." },
        { key: "online", q: "Можно ли пройти тест онлайн вместо выезда?", a: "Да, VerifEye с телефона от 2 500 ₴. Для проверок на верность и кандидатов это часто удобнее." },
      ],
      "ua-other": [
        { key: "speed", q: "Как быстро можно пройти тест с выездом {loc}?", a: "Выезд в дальние регионы планируем за 1–2 недели и объединяем несколько заявок. Онлайн-тест VerifEye доступен уже сегодня." },
        { key: "room", q: "Нужно ли специальное помещение?", a: "Нет. Достаточно тихой комнаты со столом, стулом и розеткой. Оборудование привозим с собой." },
        { key: "capacity", q: "Сколько людей можно проверить за один выезд?", a: "6–8 человек в день. Для большего количества планируем два дня." },
        { key: "price", q: "Сколько стоит тест с выездом {loc}?", a: "12 000 ₴ под ключ, вместе с тестом для одного человека. Для нескольких человек стоимость выезда делится, точную сумму назовёт специалист." },
        { key: "online", q: "Можно ли пройти тест онлайн вместо выезда?", a: "Да, VerifEye с телефона от 2 500 ₴, отчёт в PDF до 5 минут после теста. Для проверок на верность и кандидатов это часто удобнее." },
      ],
      eu: [
        { key: "visit", q: "Как происходит выезд {loc}?", a: "Собираем несколько заявок в регионе и назначаем дату. Дорога из Львова и помещение для теста оплачиваются отдельно от стоимости теста." },
        { key: "price", q: "Сколько стоит тест {loc}?", a: "EyeDetect от 10 000 ₴ за один вопрос, 15 000 ₴ за три. Плюс билеты из Львова и аренда помещения. VerifEye онлайн от 2 500 ₴ без доплат." },
        { key: "language", q: "На каком языке проходит тест?", a: "На украинском, русском, английском или немецком. Вопросы формулируем вместе, и человек читает их заранее." },
        { key: "online", q: "Можно ли пройти тест онлайн, не дожидаясь выезда?", a: "Да, VerifEye с телефона доступен уже сегодня, отчёт в PDF до 5 минут после теста." },
        { key: "legal", q: "Законно ли это в стране, где я живу?", a: "Мы проводим только добровольные тесты с письменного согласия. Несовершеннолетние проходят тест только с письменного согласия родителей и в их присутствии. Результат не является судебным доказательством; можно ли использовать его в вашей стране для конкретной цели, уточните у местного юриста." },
      ],
    },
    noOffice: "Офиса {loc} у нас нет. Мы работаем только выездом к клиенту с оборудованием EyeDetect или онлайн через VerifEye.",
    quiz: {
      heroCta: "Рассчитать точную стоимость",
      title: "Сколько будет стоить тест {loc}?",
      text: "Ответьте на 5 коротких вопросов — специалист посчитает точную стоимость выезда или онлайн-теста и перезвонит. Это бесплатно и ни к чему не обязывает.",
      button: "Рассчитать стоимость",
      finalTitle: "Не знаете, с чего начать {loc}?",
      finalText: "Несколько коротких вопросов — и мы подберём формат, выезд к вам или онлайн, и назовём цену.",
      phone: "Или звоните",
    },
    uniqueTitle: "Детектор лжи {loc}: что стоит знать",
    ctaTitle: "Готовы узнать правду {loc}?",
    ctaText: "Оставьте заявку или позвоните. Ответим круглосуточно, в течение 15–30 минут.",
    partner: {
      title: "Полиграф {loc}: EyeDetect у партнёра или онлайн",
      h1: "Полиграф и детектор лжи {loc}: у партнёра или онлайн",
      description: "Детектор лжи {loc}: тест EyeDetect в кабинете нашего партнёра от 5 500 ₴, выезд к клиенту или онлайн-тест VerifEye с телефона сегодня, от 2 500 ₴.",
      sub: "Ищете проверку на полиграфе {loc}? EyeDetect от Converus (США) — детектор лжи по реакциям глаз, без датчиков на теле. Тест проводит наш партнёр в своём кабинете, есть и выезд к клиенту, а онлайн-тест VerifEye можно пройти с телефона уже сегодня.",
      facts: ["онлайн сегодня", "EyeDetect в кабинете партнёра", "выезд к клиенту", "PDF до 5 минут"],
      eyebrow: "У партнёра и онлайн",
      service: "EyeDetect у партнёра",
      noOffice: "Собственного офиса {loc} у нас нет. Тест EyeDetect здесь проводит наш партнёр в своём кабинете: семейная проверка — 8 500 ₴, скрининг и проверка по делу о краже — от 5 500 ₴. Выезд к клиенту: по городу — 8 500 ₴, по области — 12 000 ₴. Онлайн-тест VerifEye доступен уже сегодня.",
      visit: {
        title: "EyeDetect в кабинете партнёра",
        text: "Тест EyeDetect {loc} проводит наш партнёр в собственном кабинете, поэтому ждать выезда из Львова не нужно. Вопросы согласовываем заранее, и человек читает их до теста. Сам тест длится 30–45 минут.",
        price: "от 5 500 ₴",
        cta: "Записаться на тест",
      },
      clientVisit: {
        title: "Выезд к клиенту",
        text: "Выезд к клиенту удобен, когда приехать в кабинет не получается. Дату выезда согласовываем после заявки.",
        price: "по городу — 8 500 ₴, по области — 12 000 ₴",
        cta: "Заказать выезд",
      },
      faq: [
        { key: "speed", q: "Как быстро можно пройти тест EyeDetect {loc}?", a: "Дату и время согласовываем с партнёром, в кабинете которого проходит тест. Ближайшее свободное время назовём после заявки. Дату выезда к клиенту тоже согласовываем после заявки. Онлайн-тест VerifEye доступен уже сегодня." },
        { key: "room", q: "Где проходит тест EyeDetect {loc}?", a: "В кабинете нашего партнёра: оборудование уже на месте, везти его из Львова не нужно. Собственного офиса {loc} у нас нет; адрес кабинета сообщаем при записи. Возможен и выезд к клиенту, по городу или в область." },
        { key: "price", q: "Сколько стоит тест EyeDetect {loc}?", a: "В кабинете партнёра семейная проверка стоит 8 500 ₴, скрининг и проверка по делу о краже — от 5 500 ₴. Выезд к клиенту: по городу — 8 500 ₴, по области — 12 000 ₴. Точную сумму для вашего случая назовём после заявки. Онлайн-тест VerifEye: 2 500 ₴ за один вопрос, 4 000 ₴ за три, 6 000 ₴ за шесть." },
        { key: "online", q: "Можно ли пройти тест онлайн, не приезжая в кабинет?", a: "Да, VerifEye с телефона от 2 500 ₴, отчёт в PDF до 5 минут после теста. Для проверок на верность и кандидатов это часто удобнее." },
      ],
      quiz: {
        text: "Ответьте на 5 коротких вопросов — специалист посчитает точную стоимость теста у партнёра, выезда или онлайн-теста и перезвонит. Это бесплатно и ни к чему не обязывает.",
        finalText: "Несколько коротких вопросов — и мы подберём формат, тест в кабинете партнёра, выезд к вам или онлайн, и назовём цену.",
      },
    },
  },
  en: {
    title: "Lie detector {loc}: EyeDetect on-site visit or VerifEye online",
    h1: "Lie detector {loc}: specialist visit or online test today",
    h1Ua: "Lie detector test {loc}: on-site visit or online",
    sub: {
      "ua-west": "Looking for a polygraph test {loc}? EyeDetect by Converus (USA) is a lie detector that reads eye reactions, with no sensors attached to the body. Office in Lviv, visits to {city} by arrangement, or the VerifEye online test from your phone today.",
      "ua-other": "Looking for a polygraph test {loc}? EyeDetect by Converus (USA) is a lie detector that reads eye reactions, with no sensors attached to the body. A specialist brings the equipment to {city}, or you can take the VerifEye online test from your phone today.",
      eu: "VerifEye online test from your phone today, or a specialist visit to {city} with EyeDetect equipment. Converus technology (USA), PDF report within 5 minutes.",
    },
    facts: ["online today", "on-site with equipment", "6–8 people per day", "PDF within 5 minutes"],
    eyebrow: "On-site and online",
    service: "EyeDetect on-site",
    coverage: "EyeDetect equipment is available at our office in Lviv and at our partners in Kyiv and Zaporizhzhia. We bring it to other cities in Ukraine ourselves. The VerifEye online test works from any city.",
    visitTitle: "How to take the test {loc}",
    online: {
      title: "Online today: VerifEye",
      text: "You receive a link, the person takes the test from a phone in a quiet room, in 15–20 minutes. The PDF report comes within 5 minutes after the test, the examiner's explanation the same day. Suitable for fidelity checks and job candidates.",
      price: "from UAH 2,500",
      cta: "Take the online test",
    },
    visit: {
      title: "Specialist visit with EyeDetect",
      text: {
        "ua-west": "{city} is about {km} km from Lviv. We bring the equipment to your office or arrange a quiet room. 6–8 people can be tested in a day.",
        "ua-other": "{city} is about {km} km from Lviv, so we plan the trip in advance and combine it with other requests in the region. We bring the equipment to your office or hotel. 6–8 people can be tested in a day.",
        eu: "Visits to {city} are scheduled around requests: we collect several requests in the region and set a date. The test takes place in your office or a rented room. 6–8 people can be tested in a day.",
      },
      textNoKm: {
        "ua-west": "We bring the equipment to your office or arrange a quiet room. 6–8 people can be tested in a day.",
        "ua-other": "We plan the trip in advance and combine it with other requests in the region. We bring the equipment to your office or hotel. 6–8 people can be tested in a day.",
        eu: "Visits are scheduled around requests: we collect several requests in the region and set a date. The test takes place in your office or a rented room. 6–8 people can be tested in a day.",
      },
      price: {
        "ua-west": "UAH 12,000 all-inclusive, test included",
        "ua-other": "UAH 12,000 all-inclusive, test included",
        eu: "test from UAH 10,000 + travel and venue",
      },
      cta: "Request a visit",
    },
    lvivNote: "Another option: come to Lviv, 45 Horodotska St. Test from UAH 5,500 with no travel surcharge, and the date does not depend on other requests.",
    faqTitle: "Questions about the test {loc}",
    faq: {
      "ua-west": [
        { key: "speed", q: "How soon can you come to {city}?", a: "Usually within 2–5 business days after the questions are agreed and payment is made. The VerifEye online test is available today." },
        { key: "room", q: "Do we need a special room?", a: "No. A quiet room with a table, a chair and a power outlet is enough. We bring the equipment with us." },
        { key: "capacity", q: "How many people can be tested in one visit?", a: "6–8 people per day. For larger groups we plan two days." },
        { key: "price", q: "How much does a visit to {city} cost?", a: "UAH 12,000 all-inclusive, test included, for one person. For several people the travel cost is shared; a specialist will tell you the exact amount." },
        { key: "online", q: "Can the test be taken online instead of a visit?", a: "Yes, VerifEye from a phone from UAH 2,500. For fidelity checks and job candidates this is often more convenient." },
      ],
      "ua-other": [
        { key: "speed", q: "How soon can you come to {city}?", a: "Visits to distant regions are planned 1–2 weeks ahead and combined with several requests. The VerifEye online test is available today." },
        { key: "room", q: "Do we need a special room?", a: "No. A quiet room with a table, a chair and a power outlet is enough. We bring the equipment with us." },
        { key: "capacity", q: "How many people can be tested in one visit?", a: "6–8 people per day. For larger groups we plan two days." },
        { key: "price", q: "How much does a visit to {city} cost?", a: "UAH 12,000 all-inclusive, test included, for one person. For several people the travel cost is shared; a specialist will tell you the exact amount." },
        { key: "online", q: "Can the test be taken online instead of a visit?", a: "Yes, VerifEye from a phone from UAH 2,500, PDF report within 5 minutes after the test. For fidelity checks and job candidates this is often more convenient." },
      ],
      eu: [
        { key: "visit", q: "How does a visit to {city} work?", a: "We collect several requests in the region and set a date. Travel from Lviv and the test venue are paid separately from the test price." },
        { key: "price", q: "How much does the test cost {loc}?", a: "EyeDetect from UAH 10,000 for one issue, UAH 15,000 for three. Plus tickets from Lviv and room rental. VerifEye online from UAH 2,500 with no surcharges." },
        { key: "language", q: "What language is the test in?", a: "Ukrainian, Russian, English or German. We formulate the questions together, and the person reads them in advance." },
        { key: "online", q: "Can the test be taken online without waiting for a visit?", a: "Yes, VerifEye from a phone is available today, PDF report within 5 minutes after the test." },
        { key: "legal", q: "Is this legal in the country where I live?", a: "We only conduct voluntary tests with written consent. Minors take the test only with written consent from their parents and with the parents present. The result is not court evidence; please check with a local lawyer whether it can be used for a specific purpose in your country." },
      ],
    },
    noOffice: "We have no office {loc}. We only work by travelling to the client with EyeDetect equipment or online via VerifEye.",
    quiz: {
      heroCta: "Calculate the exact price",
      title: "How much will the test {loc} cost?",
      text: "Answer 5 short questions and a specialist will calculate the exact price of a visit or an online test and call you back. Free and with no obligation.",
      button: "Calculate the price",
      finalTitle: "Not sure where to start {loc}?",
      finalText: "A few short questions, and we will suggest the format, a visit to you or online, and give you a price.",
      phone: "Or call",
    },
    uniqueTitle: "Lie detector test {loc}: what to know",
    ctaTitle: "Ready to learn the truth {loc}?",
    ctaText: "Send a request or call us. We reply 24/7, within 15–30 minutes.",
    partner: {
      title: "Polygraph {loc}: EyeDetect at a partner office or online",
      h1: "Lie detector test {loc}: partner office or online",
      description: "Lie detector test {loc}: EyeDetect at our partner's office from UAH 5,500, a visit to the client, or the VerifEye online test today from UAH 2,500.",
      sub: "Looking for a polygraph test {loc}? EyeDetect by Converus (USA) is a lie detector that reads eye reactions, with no sensors attached to the body. Our partner runs the test at the partner's own office, a visit to the client is also available, and the VerifEye online test can be taken from your phone today.",
      facts: ["online today", "EyeDetect at a partner office", "visit to the client", "PDF within 5 minutes"],
      eyebrow: "Partner office and online",
      service: "EyeDetect at a partner office",
      noOffice: "We have no office of our own {loc}. Here the EyeDetect test is run by our partner at the partner's own office: a family test costs UAH 8,500; screening and a theft-related test cost from UAH 5,500. A visit to the client: UAH 8,500 within the city, UAH 12,000 in the region. The VerifEye online test is available today.",
      visit: {
        title: "EyeDetect at a partner's office",
        text: "In {city}, the EyeDetect test is run by our partner at the partner's own office, so there is no need to wait for a visit from Lviv. We agree the questions in advance, and the person reads them before the test. The test itself takes 30–45 minutes.",
        price: "from UAH 5,500",
        cta: "Book a test",
      },
      clientVisit: {
        title: "Visit to the client",
        text: "A visit to the client is convenient when coming to the office is not possible. The date of the visit is agreed after you send a request.",
        price: "UAH 8,500 within the city, UAH 12,000 in the region",
        cta: "Request a visit",
      },
      faq: [
        { key: "speed", q: "How soon can I take the EyeDetect test {loc}?", a: "We agree the date and time with the partner whose office hosts the test, and tell you the nearest available slot after you send a request. The date of a visit to the client is also agreed after you send a request. The VerifEye online test is available today." },
        { key: "room", q: "Where does the EyeDetect test take place {loc}?", a: "At our partner's office: the equipment is already there, so nothing has to be brought from Lviv. We have no office of our own {loc}; you get the address when you book. A visit to the client, within the city or in the region, is also possible." },
        { key: "price", q: "How much does the EyeDetect test cost {loc}?", a: "At the partner's office a family test costs UAH 8,500; screening and a theft-related test cost from UAH 5,500. A visit to the client: UAH 8,500 within the city, UAH 12,000 in the region. We will tell you the exact amount for your case after you send a request. VerifEye online test: UAH 2,500 for one question, UAH 4,000 for three, UAH 6,000 for six." },
        { key: "online", q: "Can the test be taken online without going to the office?", a: "Yes, VerifEye from a phone from UAH 2,500, PDF report within 5 minutes after the test. For fidelity checks and job candidates this is often more convenient." },
      ],
      quiz: {
        text: "Answer 5 short questions and a specialist will calculate the exact price of a test at the partner's office, a visit or an online test and call you back. Free and with no obligation.",
        finalText: "A few short questions, and we will suggest the format, a test at the partner's office, a visit to you or online, and give you a price.",
      },
    },
  },
};

// Регіони України в ключах sub / visit.text / visit.price / faq.
const UA_REGIONS = ["ua-west", "ua-other"];
const forUaRegions = (value) => Object.fromEntries(UA_REGIONS.map((r) => [r, value]));

// Тексти сторінки конкретного міста. region — результат getCityRegion (helpers/cityMeta.js).
// Місто України отримує h1Ua; місто-партнер — ще й заміни з блоку partner. Форма об'єкта та сама,
// що й у cityTexts[lang], тому секції (CityVisitSection тощо) нічого не знають про партнерів.
// Єдиний виняток — поле clientVisit (третя картка «Виїзд до клієнта»): воно є тільки в міст-партнерів.
export const getCityTexts = (lang, slug, region) => {
  const base = cityTexts[lang] || cityTexts.uk;
  if (region === "eu") return base;
  const ua = { ...base, h1: base.h1Ua };
  if (!isPartnerCity(slug)) return ua;
  const p = base.partner;
  return {
    ...ua,
    title: p.title,
    h1: p.h1,
    description: p.description,
    facts: p.facts,
    eyebrow: p.eyebrow,
    service: p.service,
    noOffice: p.noOffice,
    sub: { ...base.sub, ...forUaRegions(p.sub) },
    visit: {
      ...base.visit,
      title: p.visit.title,
      cta: p.visit.cta,
      text: { ...base.visit.text, ...forUaRegions(p.visit.text) },
      textNoKm: { ...base.visit.textNoKm, ...forUaRegions(p.visit.text) },
      price: { ...base.visit.price, ...forUaRegions(p.visit.price) },
    },
    // Є лише в міст-партнерів: за цим полем CityVisitSection показує третю картку «Виїзд до клієнта».
    clientVisit: p.clientVisit,
    faq: { ...base.faq, ...forUaRegions(p.faq) },
    quiz: { ...base.quiz, ...p.quiz },
  };
};

export const fill = (s, vars) => (s || "").replace(/\{(\w+)\}/g, (_, k) => (vars[k] ?? ""));

// Короткі прийменники не лишаються в кінці рядка заголовка: «у Таллінні» переноситься разом.
// Вираз без «погляду назад» (?<=…): функція працює й у браузері (рядок «Послуга» у вікні заявки),
// а Safari до версії 16.4 такого виразу не розуміє і зупиняє сторінку з помилкою. Тому шукаємо ланцюжок
// коротких слів після початку рядка, пробілу, «(» чи лапки і робимо пробіли в ньому нерозривними.
// Результат той самий, що й у попереднього виразу.
export const keepShortWords = (s) =>
  (s || "").replace(
    /(^|[\s«(])((?:(?:у|в|і|й|з|із|та|до|на|о|а|и|к|с|по|за|от|in|to|a|an|of|or)\s+)+)/giu,
    (_, before, run) => before + glueSpaces(run)
  );
// Пробіли всередині ланцюжка коротких слів стають нерозривними (у лапках нижче — нерозривний пробіл).
const glueSpaces = (run) => run.replace(/\s+/g, " ");

// Числа й одиниці не розриваються між рядками: «12 000 ₴», «1 000 км», «UAH 12,000».
// Лише для тексту на екрані: у мета-теги й розмітку для пошуковика (JSON-LD) не підставляти.
const NBSP = String.fromCharCode(0xa0); // нерозривний пробіл
export const keepNumbers = (s) =>
  (s || "")
    .replace(/(\d) (?=\d{3}(?!\d))/g, `$1${NBSP}`)
    .replace(/(\d) (?=₴|%|грн(?![а-яіїєґ])|км(?![а-яіїєґ])|km(?![a-z]))/giu, `$1${NBSP}`)
    .replace(/\bUAH (?=\d)/g, `UAH${NBSP}`);

// Слово з дефісом у заголовку не розривається після дефіса: «онлайн-тест», «Івано-Франківську».
// Після дефіса ставиться невидимий з'єднувач слів; сам дефіс і текст не змінюються.
const WORD_JOINER = String.fromCharCode(0x2060);
export const keepHyphens = (s) => (s || "").replace(/(\p{L})-(?=\p{L})/gu, `$1-${WORD_JOINER}`);
