// Унікальний контент сторінки Запоріжжя (uk/ru/en). Право — з перевірених фактів на 15.09.2026.
// Місто-партнер (PARTNER_CITIES у data/pages/cityTexts.js, факт власника від 09.10.2026): тест EyeDetect проводить
// партнер у власному кабінеті: сімейна перевірка 8 500 ₴, скринінг і крадіжка від 5 500 ₴. Виїзд до клієнта під ключ, разом із тестом, за людину: по Запоріжжю 8 500 ₴, по області 12 000 ₴ (відповіді власника 22.10.2026). Адресу й назву партнера тут не пишемо.
// faq[].replaces — ключі шаблонних питань (cityTexts faq), які це питання замінює.
export const zaporizhzhia = {
  uk: {
    seoTitle: "Поліграф у Запоріжжі: детектор брехні в партнера або онлайн",
    seoDescription: "Детектор брехні в Запоріжжі: тест EyeDetect у кабінеті партнера від 5 500 ₴, виїзд по місту 8 500 ₴ або онлайн-тест VerifEye з телефона сьогодні, від 2 500 ₴.",
    updated: "2026-10-09",
    intro: "Запоріжжя — обласний центр на Дніпрі, приблизно за 970 км від Львова. Найшвидший варіант — онлайн-тест VerifEye зі смартфона, його можна пройти вже сьогодні. Тест EyeDetect у Запоріжжі проводить наш партнер у своєму кабінеті; є й виїзд до клієнта, по місту або в область.",
    facts: [["У кабінеті партнера", "від 5 500 ₴"], ["Виїзд до клієнта", "по місту 8 500 ₴, по області 12 000 ₴"], ["Онлайн-тест", "від 2 500 ₴"]],
    faq: [
      { q: "Де пройти поліграф у Запоріжжі?", a: "Власного офісу в Запоріжжі у нас немає, але є три варіанти. Онлайн-тест VerifEye можна пройти вже сьогодні з телефона, у тихій кімнаті вдома чи на роботі. Тест EyeDetect проводить наш партнер у своєму кабінеті в Запоріжжі; адресу кабінету повідомляємо під час запису. Третій варіант — виїзд до клієнта, по місту або в область.", replaces: ["room"] },
      { q: "Скільки коштує детектор брехні в Запоріжжі?", a: "У кабінеті партнера в Запоріжжі сімейна перевірка, наприклад на вірність, коштує 8 500 ₴, а скринінг кандидатів і працівників та перевірка у справі про крадіжку — від 5 500 ₴ за людину. Виїзд до клієнта під ключ, разом із тестом, за людину: по Запоріжжю — 8 500 ₴, по Запорізькій області — 12 000 ₴. Точну суму для вашого випадку назвемо після заявки. Онлайн-тест VerifEye: 2 500 ₴ за одне питання, 4 000 ₴ за три, 6 000 ₴ за шість, без доплат.", replaces: ["price"] },
      { q: "Як швидко можна пройти тест у Запоріжжі?", a: "Онлайн-тест VerifEye доступний уже сьогодні. Дату й час тесту EyeDetect узгоджуємо з партнером, у кабінеті якого він проходить; найближчий вільний час назвемо після заявки. Дату виїзду до клієнта теж узгоджуємо після заявки.", replaces: ["speed"] },
      { q: "Чи можна перевірити партнера на зраду в Запоріжжі?", a: "Так. Тест перевіряє одну конкретну підозру, наприклад зраду за певний період. Його проходить партнер, якого підозрюють, або обидва партнери, кожен окремо. Тест добровільний, за письмовою згодою. Онлайн-тест VerifEye коштує від 2 500 ₴, і їхати для нього нікуди не потрібно." },
      { q: "Чи законна перевірка на поліграфі в Україні?", a: "Жоден закон України не забороняє і окремо не регулює приватні добровільні тести на поліграфі. Діють загальні правила захисту персональних даних: згода людини має бути добровільною і поінформованою. Ми проводимо тест лише за письмовою згодою, а неповнолітніх — тільки за письмовою згодою батьків і в їхній присутності. Для перевірки працівників і кандидатів правила суворіші, тому перед такою перевіркою порадьтеся з юристом. Верховний Суд у кримінальних справах 2023–2024 років не визнавав висновок поліграфолога самостійним доказом, і наш результат теж не є судовим доказом.", sources: [["Закон про захист персональних даних", "https://zakon.rada.gov.ua/laws/show/2297-17"], ["Верховний Суд, справа 183/3452/19 (2023)", "https://reyestr.court.gov.ua/Review/108686155"], ["Верховний Суд, справа 760/23990/17 (2024)", "https://reyestr.court.gov.ua/Review/117757884"]] },
    ],
    towns: {
      title: "Інші міста Запорізької області",
      text: "Онлайн-тест VerifEye можна пройти з будь-якого міста області, де є інтернет. Виїзд до клієнта по області коштує 12 000 ₴ під ключ за людину. Він можливий лише до підконтрольних Україні міст, куди на день виїзду безпечно доїхати, тому місце й дату узгоджуємо заздалегідь. Тест EyeDetect можна пройти й у кабінеті нашого партнера в Запоріжжі.",
      list: "",
      nearbyLabel: "Інші міста регіону:",
      nearby: [["dnipro", "Дніпро"], ["kharkiv", "Харків"], ["kropyvnytskyi", "Кропивницький"]],
    },
    // local: джерела — https://uk.wikipedia.org/wiki/Запоріжжя, https://uk.wikipedia.org/wiki/Хортиця
    local: {
      title: "Поліграф у Запоріжжі: промислове місто, де EyeDetect уже на місці",
      paragraphs: [
        "Запоріжжя виросло як місто заводів: чорна й кольорова металургія, машинобудування, енергетика, а ще річковий порт і важливий залізничний вузол. Воно лежить на обох берегах Дніпра, а між ними — Хортиця, найбільший острів на річці. Лівим берегом майже через усю забудову тягнеться проспект Соборний завдовжки близько 11 км. У такому довгому місті варто заздалегідь зважити, що вам зручніше: приїхати до кабінету, замовити виїзд до себе чи пройти онлайн-тест удома.",
        "Від Львова до Запоріжжя приблизно 970 км. До інших таких далеких міст спеціаліст їде з обладнанням, і дату доводиться прив'язувати до дороги. Запоріжжя — один із двох винятків: тут, як і в Києві, обладнання EyeDetect уже є в кабінеті нашого партнера. Тому день і годину тесту підбираємо разом із партнером, а не під розклад поїздів. Якщо ж ви або людина, яку перевіряють, працюєте позмінно й не хочете їхати через місто після роботи, є онлайн-тест VerifEye: його проходять з телефона в тихій кімнаті вдома, у вихідний чи між змінами, однаково з правого берега і з лівого.",
        "Ось приклади ситуацій, які легко уявити в промисловому місті. Перший: у цеху металообробки після інвентаризації бракує мідного кабелю, а ключ від комори мали четверо людей. Другий: керівник підозрює, що працівник відділу закупівель отримує гроші від постачальника за вибір його пропозиції. Третій, уже не про роботу: людина позичила знайомому гроші без розписки, а тепер той каже, що все повернув. У кожному випадку тест перевіряє один конкретний факт за названий період; приклади питань — у списку нижче. Працівника можна тестувати лише тоді, коли він сам письмово на це погодився, і перед такою перевіркою варто звернутися до юриста.",
        "Слово «поліграф» у побуті означає будь-який детектор брехні, тому саме його зазвичай і пишуть у пошуку. У Запоріжжі за цим словом стоять EyeDetect у кабінеті партнера та онлайн-тест VerifEye: обидва оцінюють реакції очей і обходяться без датчиків на тілі, а класичного поліграфа ми не пропонуємо. Мешканцям інших міст Запорізької області їхати до обласного центру не обов'язково: онлайн-тест працює всюди, де є інтернет. Вартість тесту в кабінеті партнера, виїзду до клієнта та онлайн-тесту — у блоці з цінами нижче на сторінці.",
      ],
      points: [
        "Працівникові цеху: «Між 1 і 15 вересня 2026 року ви виносили мідний кабель із комори цеху?»",
        "Працівникові відділу закупівель: «З 1 січня 2026 року ви отримували гроші від постачальників за вибір їхньої пропозиції?»",
        "Знайомому, який позичав гроші: «Ви повернули всю суму, яку позичили в травні 2025 року?»",
      ],
    },
  },
  ru: {
    seoTitle: "Полиграф в Запорожье: детектор лжи у партнёра или онлайн",
    seoDescription: "Детектор лжи в Запорожье: тест EyeDetect в кабинете партнёра от 5 500 ₴, выезд по городу 8 500 ₴ или онлайн-тест VerifEye с телефона сегодня, от 2 500 ₴.",
    updated: "2026-10-09",
    intro: "Запорожье — областной центр на Днепре, примерно в 970 км от Львова. Самый быстрый вариант — онлайн-тест VerifEye со смартфона, его можно пройти уже сегодня. Тест EyeDetect в Запорожье проводит наш партнёр в своём кабинете; есть и выезд к клиенту, по городу или в область.",
    facts: [["В кабинете партнёра", "от 5 500 ₴"], ["Выезд к клиенту", "по городу 8 500 ₴, по области 12 000 ₴"], ["Онлайн-тест", "от 2 500 ₴"]],
    faq: [
      { q: "Где пройти полиграф в Запорожье?", a: "Собственного офиса в Запорожье у нас нет, но есть три варианта. Онлайн-тест VerifEye можно пройти уже сегодня с телефона, в тихой комнате дома или на работе. Тест EyeDetect проводит наш партнёр в своём кабинете в Запорожье; адрес кабинета сообщаем при записи. Третий вариант — выезд к клиенту, по городу или в область.", replaces: ["room"] },
      { q: "Сколько стоит детектор лжи в Запорожье?", a: "В кабинете партнёра в Запорожье семейная проверка, например на верность, стоит 8 500 ₴, а скрининг кандидатов и сотрудников и проверка по делу о краже — от 5 500 ₴ за человека. Выезд к клиенту под ключ, вместе с тестом, за человека: по Запорожью — 8 500 ₴, по Запорожской области — 12 000 ₴. Точную сумму для вашего случая назовём после заявки. Онлайн-тест VerifEye: 2 500 ₴ за один вопрос, 4 000 ₴ за три, 6 000 ₴ за шесть, без доплат.", replaces: ["price"] },
      { q: "Как быстро можно пройти тест в Запорожье?", a: "Онлайн-тест VerifEye доступен уже сегодня. Дату и время теста EyeDetect согласовываем с партнёром, в кабинете которого он проходит; ближайшее свободное время назовём после заявки. Дату выезда к клиенту тоже согласовываем после заявки.", replaces: ["speed"] },
      { q: "Можно ли проверить партнёра на измену в Запорожье?", a: "Да. Тест проверяет одно конкретное подозрение, например измену за определённый период. Его проходит партнёр, которого подозревают, или оба партнёра, каждый отдельно. Тест добровольный, с письменного согласия. Онлайн-тест VerifEye стоит от 2 500 ₴, и ехать для него никуда не нужно." },
      { q: "Законна ли проверка на полиграфе в Украине?", a: "Ни один закон Украины не запрещает и отдельно не регулирует частные добровольные тесты на полиграфе. Действуют общие правила защиты персональных данных: согласие человека должно быть добровольным и информированным. Мы проводим тест только с письменного согласия, а несовершеннолетних — только с письменного согласия родителей и в их присутствии. Для проверки сотрудников и кандидатов правила строже, поэтому перед такой проверкой посоветуйтесь с юристом. Верховный Суд в уголовных делах 2023–2024 годов не признавал заключение полиграфолога самостоятельным доказательством, и наш результат тоже не является судебным доказательством.", sources: [["Закон о защите персональных данных", "https://zakon.rada.gov.ua/laws/show/2297-17"], ["Верховный Суд, дело 183/3452/19 (2023)", "https://reyestr.court.gov.ua/Review/108686155"], ["Верховный Суд, дело 760/23990/17 (2024)", "https://reyestr.court.gov.ua/Review/117757884"]] },
    ],
    towns: {
      title: "Другие города Запорожской области",
      text: "Онлайн-тест VerifEye можно пройти из любого города области, где есть интернет. Выезд к клиенту по области стоит 12 000 ₴ под ключ за человека. Он возможен только в подконтрольные Украине города, куда в день выезда безопасно доехать, поэтому место и дату согласовываем заранее. Тест EyeDetect можно пройти и в кабинете нашего партнёра в Запорожье.",
      list: "",
      nearbyLabel: "Другие города региона:",
      nearby: [["dnipro", "Днепр"], ["kharkiv", "Харьков"], ["kropyvnytskyi", "Кропивницкий"]],
    },
    local: {
      title: "Полиграф в Запорожье: промышленный город, где EyeDetect уже на месте",
      paragraphs: [
        "Запорожье выросло как город заводов: чёрная и цветная металлургия, машиностроение, энергетика, а ещё речной порт и важный железнодорожный узел. Город стоит на обоих берегах Днепра, а между ними — Хортица, самый большой остров на реке. По левому берегу почти через всю застройку тянется проспект Соборный длиной около 11 км. В таком длинном городе стоит заранее взвесить, что вам удобнее: приехать в кабинет, заказать выезд к себе или пройти онлайн-тест дома.",
        "От Львова до Запорожья примерно 970 км. В другие такие же далёкие города специалист едет с оборудованием, и дату приходится привязывать к дороге. Запорожье — одно из двух исключений: здесь, как и в Киеве, оборудование EyeDetect уже есть в кабинете нашего партнёра. Поэтому день и час теста подбираем вместе с партнёром, а не под расписание поездов. Если же вы или человек, которого проверяют, работаете посменно и не хотите ехать через город после работы, есть онлайн-тест VerifEye: его проходят с телефона в тихой комнате дома, в выходной или между сменами, одинаково с правого берега и с левого.",
        "Вот примеры ситуаций, которые легко представить в промышленном городе. Первый: в цехе металлообработки после инвентаризации не хватает медного кабеля, а ключ от кладовой был у четверых. Второй: руководитель подозревает, что сотрудник отдела закупок получает деньги от поставщика за выбор его предложения. Третий, уже не о работе: человек одолжил знакомому деньги без расписки, а теперь тот говорит, что всё вернул. В каждом случае тест проверяет один конкретный факт за названный период; примеры вопросов — в списке ниже. Сотрудника можно тестировать только тогда, когда он сам письменно на это согласился, и перед такой проверкой стоит обратиться к юристу.",
        "Слово «полиграф» в быту означает любой детектор лжи, поэтому именно его обычно и пишут в поиске. В Запорожье за этим словом стоят EyeDetect в кабинете партнёра и онлайн-тест VerifEye: оба оценивают реакции глаз и обходятся без датчиков на теле, а классический полиграф мы не предлагаем. Жителям других городов Запорожской области ехать в областной центр не обязательно: онлайн-тест работает везде, где есть интернет. Стоимость теста в кабинете партнёра, выезда к клиенту и онлайн-теста — в блоке с ценами ниже на странице.",
      ],
      points: [
        "Работнику цеха: «Между 1 и 15 сентября 2026 года вы выносили медный кабель из кладовой цеха?»",
        "Сотруднику отдела закупок: «С 1 января 2026 года вы получали деньги от поставщиков за выбор их предложения?»",
        "Знакомому, который брал в долг: «Вы вернули всю сумму, которую заняли в мае 2025 года?»",
      ],
    },
  },
  en: {
    seoTitle: "Lie Detector Test in Zaporizhzhia: Partner Office or Online",
    seoDescription: "Lie detector test in Zaporizhzhia: EyeDetect at our partner's office from UAH 5,500, a visit within the city for UAH 8,500, or VerifEye online from UAH 2,500.",
    updated: "2026-10-09",
    intro: "Zaporizhzhia is a regional centre on the Dnipro river, about 970 km from Lviv. The fastest option is the VerifEye smartphone test, which you can take today. In Zaporizhzhia the EyeDetect test is run by our partner at the partner's own office; a visit to the client, within the city or in the region, is also available.",
    facts: [["At the partner's office", "from UAH 5,500"], ["Visit to the client", "UAH 8,500 in the city, UAH 12,000 in the region"], ["Online test", "from UAH 2,500"]],
    faq: [
      { q: "Where can I take a polygraph test in Zaporizhzhia?", a: "We have no office of our own in Zaporizhzhia, but there are three options. You can take the VerifEye online test today on your phone, in a quiet room at home or at work. The EyeDetect test is run by our partner at the partner's own office in Zaporizhzhia; you get the address when you book. The third option is a visit to the client, within the city or in the region.", replaces: ["room"] },
      { q: "How much does a lie detector test cost in Zaporizhzhia?", a: "At our partner's office in Zaporizhzhia a family test, for example a fidelity test, costs UAH 8,500, while screening of job candidates and staff and a theft-related test cost from UAH 5,500 per person. A visit to the client, all-inclusive with the test, costs UAH 8,500 per person within Zaporizhzhia and UAH 12,000 in the Zaporizhzhia region. We will tell you the exact amount for your case after you send a request. VerifEye online test: UAH 2,500 for one question, UAH 4,000 for three, UAH 6,000 for six, with no extra charges.", replaces: ["price"] },
      { q: "How soon can I take the test in Zaporizhzhia?", a: "The VerifEye online test is available today. We agree the date and time of an EyeDetect test with the partner whose office hosts it, and tell you the nearest available slot after you send a request. The date of a visit to the client is also agreed after you send a request.", replaces: ["speed"] },
      { q: "Can my partner take a lie detector test for infidelity in Zaporizhzhia?", a: "Yes. The test checks one specific suspicion, for example infidelity over a certain period. The partner under suspicion takes it, or both partners take separate tests. The test is voluntary and requires written consent. The VerifEye online test costs from UAH 2,500, and you do not need to travel anywhere for it." },
      { q: "Is a polygraph test legal in Ukraine?", a: "No Ukrainian law bans or specifically regulates private voluntary polygraph tests. The general rules on personal data protection apply: a person's consent must be voluntary and informed. We test only with written consent, and minors only with written consent from their parents and with the parents present. The rules for testing employees and job candidates are stricter, so talk to a lawyer before such a test. In criminal cases in 2023–2024, Ukraine's Supreme Court did not accept a polygraph examiner's conclusion as independent evidence, and our result is not court evidence either.", sources: [["Personal Data Protection Law", "https://zakon.rada.gov.ua/laws/show/2297-17"], ["Supreme Court, case 183/3452/19 (2023)", "https://reyestr.court.gov.ua/Review/108686155"], ["Supreme Court, case 760/23990/17 (2024)", "https://reyestr.court.gov.ua/Review/117757884"]] },
    ],
    towns: {
      title: "Other towns in the Zaporizhzhia region",
      text: "The VerifEye online test can be taken from any town in the region that has an internet connection. A visit to the client in the region costs UAH 12,000 per person, all-inclusive. It is possible only to towns under Ukrainian control that are safe to reach on the day of the visit, so we agree the place and date in advance. The EyeDetect test can also be taken at our partner's office in Zaporizhzhia.",
      list: "",
      nearbyLabel: "Other cities in the region:",
      nearby: [["dnipro", "Dnipro"], ["kharkiv", "Kharkiv"], ["kropyvnytskyi", "Kropyvnytskyi"]],
    },
    local: {
      title: "Polygraph in Zaporizhzhia: an industrial city where EyeDetect is already on site",
      paragraphs: [
        "Zaporizhzhia grew up as a city of factories: ferrous and non-ferrous metallurgy, machine building and energy, plus a river port and an important railway junction. It lies on both banks of the Dnipro, with Khortytsia, the largest island on the river, between them. On the left bank, Sobornyi Avenue runs for about 11 km through almost the whole built-up area. In a city this long, it is worth deciding in advance what suits you better: coming to an office, booking a visit to your place or taking the online test at home.",
        "Zaporizhzhia is about 970 km from Lviv. To other cities that far away, a specialist travels with the equipment, and the date has to be tied to the journey. Zaporizhzhia is one of two exceptions: here, as in Kyiv, EyeDetect equipment is already in place at our partner's office. So we pick the day and time of the test together with the partner rather than around a train timetable. And if you or the person being tested work shifts and do not want to cross the city after work, there is the VerifEye online test, done on a phone at home in a quiet room, on a day off or between shifts, from the right bank and the left bank alike.",
        "Here are examples of situations that are easy to picture in an industrial city. First: after a stock count, a metalworking shop is short of copper cable, and four people had a key to the storeroom. Second: a manager suspects that someone in the purchasing department takes money from a supplier for choosing that supplier's offer. Third, no longer about work: a person lent money to an acquaintance with nothing in writing, and now the acquaintance says it has all been repaid. In each case the test checks one specific fact within a named period; example questions are in the list below. An employee can be tested only after agreeing to it in writing, and a lawyer's advice is worth getting before a check of this kind.",
        "In everyday speech, “polygraph” means any lie detector, which is why people usually type that word into a search. In Zaporizhzhia, what stands behind the word is EyeDetect at the partner's office and the VerifEye online test: both assess eye reactions and do without any sensors on the body, and we offer no classic polygraph test. People in other towns of the Zaporizhzhia region do not have to travel to the regional centre: the online test works anywhere with an internet connection. The cost of the test at the partner's office, of a visit to the client and of the online test is in the prices block further down the page.",
      ],
      points: [
        "For a shop-floor worker: “Between September 1 and September 15, 2026, did you take copper cable out of the workshop storeroom?”",
        "For a purchasing employee: “Since January 1, 2026, have you received money from suppliers for choosing their offer?”",
        "For an acquaintance who borrowed money: “Have you repaid the full amount you borrowed in May 2025?”",
      ],
    },
  },
};
