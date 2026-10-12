// Блок головної сторінки «Детектор брехні у Львові: як пройти тест» (sections/homeSections/homeLvivSection).
// Ключі: uk, ru, en. Кожна зміна тексту — одразу в трьох мовах.
//
// Звідки факти (нічого не вигадувати, правила — у CLAUDE.md):
//   • адреса, запис, тривалість — addressData.js, ContactsSection, FAQDataHome.js;
//   • окуляри або лінзи — стаття /blog/yak-pidgotuvatysya-do-testu-na-detektori-brekhni;
//   • міста області — townsInfo Львова в ukrainianCitiesData.js; кімната для виїзду — cityTexts.js;
//   • партнери в Києві й Запоріжжі, оригінал звіту в кабінеті системи — факти власника від 09.10.2026.
//
// ЦІН У ЦЬОМУ ФАЙЛІ НЕМАЄ. Картка з id "prices" показує рядки прямо з src/data/pricingData.js
// (усі позиції групи private і найдешевший онлайн-тест), тож після зміни прайсу тут нічого правити не треба.
//
// Посилання: href без мовного префікса, секція сама додає /ru або /en.
// \u00a0 у заголовках — нерозривний пробіл, щоб «вул. Городоцькій, 45» не розривалося між рядками.

const PREPARE_HREF = "/blog/yak-pidgotuvatysya-do-testu-na-detektori-brekhni";

export const homeLviv = {
  uk: {
    title: "Детектор брехні у Львові: як пройти тест",
    cards: [
      {
        id: "polygraph",
        title: "Шукаєте перевірку на поліграфі у Львові?",
        paragraphs: [
          "Поліграфом у побуті називають будь-який детектор брехні. Ми працюємо на EyeDetect від Converus (США): це детектор брехні за реакціями очей, без датчиків на тілі.",
          "Людина читає твердження на екрані й відповідає «правда» або «неправда», а камера фіксує зміни зіниць і рухи очей. Класичного поліграфа з датчиками ми не пропонуємо. Точність EyeDetect за даними Converus — 86–90%.",
          "Тест проходить лише добровільно, з письмовою згодою людини. Мови тесту: українська, російська, англійська, німецька.",
        ],
        link: { text: "Як працює EyeDetect", href: "/eyedetect" },
      },
      {
        id: "office",
        title: "Де пройти тест: кабінет на вул.\u00a0Городоцькій,\u00a045",
        paragraphs: [
          "Тести EyeDetect проводимо в кабінеті у Львові, на вулиці Городоцькій, 45. Приймаємо за попереднім записом: зателефонуйте або залиште заявку, відповідаємо цілодобово, протягом 15–30 хвилин.",
          "Спершу разом формулюємо питання, і людина читає їх до тесту. Сам тест триває 30–45 хвилин, увесь візит — близько години. Звіт готовий протягом 5 хвилин після тесту.",
          "Візьміть окуляри або лінзи, якщо носите: тест проходить із ними. За бажання тест у кабінеті можна пройти анонімно: без імені та фото, лише під номером.",
        ],
        link: { text: "Як підготуватися до тесту", href: PREPARE_HREF },
      },
      {
        id: "region",
        title: "Львівська область: виїзд безкоштовний",
        paragraphs: [
          "Якщо приїхати до Львова незручно, спеціаліст привозить обладнання сам. По всій Львівській області виїзд безкоштовний: ви платите лише за тест.",
          "Їздимо в Дрогобич, Стрий, Трускавець, Самбір, Борислав та інші міста області. На місці потрібна тиха кімната зі столом, стільцем і розеткою.",
          "За межами області: у Києві й Запоріжжі тест EyeDetect проводять наші партнери у своїх кабінетах, в інші міста України їдемо з обладнанням самі. Онлайн-тест VerifEye працює з будь-якого міста.",
        ],
        link: { text: "Онлайн-тест VerifEye", href: "/online" },
      },
      {
        id: "prices",
        title: "Скільки коштує детектор брехні у Львові",
        paragraphs: [
          "Ціна залежить від кількості людей і тем перевірки. Нижче фіксовані ціни на типові випадки; точну суму для вашої ситуації назве спеціаліст. По Львівській області доплати за виїзд немає.",
        ],
        note: "Якщо результат виявиться невизначеним, повторний тест проводимо за наш рахунок.",
        link: { text: "Усі ціни та що входить у вартість", href: "/prices" },
      },
    ],
    // Один абзац із посиланням усередині: before + [linkText] + after.
    trust: {
      before:
        "Бал рахує алгоритм Converus, і спеціаліст не може його змінити. Після тесту EyeDetect ви в нашій присутності відкриваєте оригінал звіту в кабінеті системи на нашому комп'ютері, тому звіт не можна купити чи підправити. Так само проходить і ",
      linkText: "перевірка на зраду у Львові",
      after: ": питання про факти за конкретний період, звіт бачите лише ви.",
      href: "/situations/fidelity",
    },
  },
  ru: {
    title: "Детектор лжи во Львове: как пройти тест",
    cards: [
      {
        id: "polygraph",
        title: "Ищете проверку на полиграфе во Львове?",
        paragraphs: [
          "Полиграфом в быту называют любой детектор лжи. Мы работаем на EyeDetect от Converus (США): это детектор лжи по реакциям глаз, без датчиков на теле.",
          "Человек читает утверждения на экране и отвечает «правда» или «неправда», а камера фиксирует изменения зрачков и движения глаз. Классический полиграф с датчиками мы не предлагаем. Точность EyeDetect по данным Converus — 86–90%.",
          "Тест проходит только добровольно, с письменного согласия человека. Языки теста: украинский, русский, английский, немецкий.",
        ],
        link: { text: "Как работает EyeDetect", href: "/eyedetect" },
      },
      {
        id: "office",
        title: "Где пройти тест: кабинет на ул.\u00a0Городоцкой,\u00a045",
        paragraphs: [
          "Тесты EyeDetect проводим в кабинете во Львове, на улице Городоцкой, 45. Принимаем по предварительной записи: позвоните или оставьте заявку, отвечаем круглосуточно, в течение 15–30 минут.",
          "Сначала вместе формулируем вопросы, и человек читает их до теста. Сам тест длится 30–45 минут, весь визит — около часа. Отчёт готов в течение 5 минут после теста.",
          "Возьмите очки или линзы, если носите: тест проходит с ними. При желании тест в кабинете можно пройти анонимно: без имени и фото, только под номером.",
        ],
        link: { text: "Как подготовиться к тесту", href: PREPARE_HREF },
      },
      {
        id: "region",
        title: "Львовская область: выезд бесплатный",
        paragraphs: [
          "Если приехать во Львов неудобно, специалист привозит оборудование сам. По всей Львовской области выезд бесплатный: вы платите только за тест.",
          "Ездим в Дрогобыч, Стрый, Трускавец, Самбор, Борислав и другие города области. На месте нужна тихая комната со столом, стулом и розеткой.",
          "За пределами области: в Киеве и Запорожье тест EyeDetect проводят наши партнёры в своих кабинетах, в другие города Украины едем с оборудованием сами. Онлайн-тест VerifEye работает из любого города.",
        ],
        link: { text: "Онлайн-тест VerifEye", href: "/online" },
      },
      {
        id: "prices",
        title: "Сколько стоит детектор лжи во Львове",
        paragraphs: [
          "Цена зависит от количества людей и тем проверки. Ниже фиксированные цены на типичные случаи; точную сумму для вашей ситуации назовёт специалист. По Львовской области доплаты за выезд нет.",
        ],
        note: "Если результат окажется неопределённым, повторный тест проводим за наш счёт.",
        link: { text: "Все цены и что входит в стоимость", href: "/prices" },
      },
    ],
    trust: {
      before:
        "Балл считает алгоритм Converus, и специалист не может его изменить. После теста EyeDetect вы в нашем присутствии открываете оригинал отчёта в кабинете системы на нашем компьютере, поэтому отчёт нельзя купить или подправить. Так же проходит и ",
      linkText: "проверка на измену во Львове",
      after: ": вопросы о фактах за конкретный период, отчёт видите только вы.",
      href: "/situations/fidelity",
    },
  },
  en: {
    title: "Lie detector test in Lviv: how to take it",
    cards: [
      {
        id: "polygraph",
        title: "Looking for a polygraph test in Lviv?",
        paragraphs: [
          "People often call any lie detector a polygraph. We work with EyeDetect by Converus (USA): a lie detector that reads eye reactions, with no sensors attached to the body.",
          "The person reads statements on a screen and answers “true” or “false”, while a camera records pupil changes and eye movements. We do not offer the classic polygraph with sensors. According to Converus, EyeDetect is 86–90% accurate.",
          "The test is voluntary only, with the person's written consent. Test languages: Ukrainian, Russian, English and German.",
        ],
        link: { text: "How EyeDetect works", href: "/eyedetect" },
      },
      {
        id: "office",
        title: "Where to take the test: our office at 45\u00a0Horodotska\u00a0St.",
        paragraphs: [
          "EyeDetect tests take place in our Lviv office at 45 Horodotska St. We work by appointment: call or leave a request, we reply 24/7, within 15–30 minutes.",
          "First we formulate the questions together, and the person reads them before the test. The test itself takes 30–45 minutes, the whole visit about an hour. The report is ready within 5 minutes after the test.",
          "Bring your glasses or contact lenses if you wear them: the test is taken with them on. If you prefer, the test in our office can be taken anonymously: no name or photo, only a number.",
        ],
        link: { text: "How to prepare for the test", href: PREPARE_HREF },
      },
      {
        id: "region",
        title: "Lviv region: travel is free",
        paragraphs: [
          "If coming to Lviv is inconvenient, the specialist brings the equipment to you. Travel is free anywhere in the Lviv region: you pay only for the test.",
          "We travel to Drohobych, Stryi, Truskavets, Sambir, Boryslav and other towns in the region. On site we need a quiet room with a table, a chair and a power outlet.",
          "Outside the region: in Kyiv and Zaporizhzhia the EyeDetect test is run by our partners at their own offices, and we bring the equipment to other cities in Ukraine ourselves. The VerifEye online test works from any city.",
        ],
        link: { text: "VerifEye online test", href: "/online" },
      },
      {
        id: "prices",
        title: "How much a lie detector test costs in Lviv",
        paragraphs: [
          "The price depends on the number of people and topics tested. Below are fixed prices for typical cases; the specialist will give you the exact amount for your situation. There is no travel surcharge within the Lviv region.",
        ],
        note: "If the result is inconclusive, we run the retest at our expense.",
        link: { text: "All prices and what is included", href: "/prices" },
      },
    ],
    trust: {
      before:
        "The score is calculated by the Converus algorithm, and the examiner cannot change it. After an EyeDetect test you open the original report in the system dashboard on our computer, in our presence, so a report cannot be bought or adjusted. The same applies to an ",
      linkText: "infidelity test in Lviv",
      after: ": questions about facts within a specific period, and only you see the report.",
      href: "/situations/fidelity",
    },
  },
};

// Чотири питання саме про Львів. Форма та сама, що й у src/data/FAQDataHome.js
// (question / questionRus / questionEng, answer / answerRus / answerEng): головна сторінка
// дописує їх у кінець спільного списку «Часті питання» і в розмітку FAQPage.
// Відповіді — звичайний текст без посилань і без цін (ціни лише в pricingData.js).
export const homeLvivFaq = [
  {
    question: "Чи проводите ви у Львові перевірку на класичному поліграфі?",
    questionRus: "Проводите ли вы во Львове проверку на классическом полиграфе?",
    questionEng: "Do you run classic polygraph tests in Lviv?",
    answer:
      "Ні, класичного поліграфа з датчиками ми не пропонуємо. У Львові ми працюємо на EyeDetect від Converus: це детектор брехні за реакціями очей. Людина читає твердження на екрані й відповідає «правда» або «неправда», тест триває 30–45 хвилин. У побуті такий тест теж часто називають перевіркою на поліграфі.",
    answerRus:
      "Нет, классический полиграф с датчиками мы не предлагаем. Во Львове мы работаем на EyeDetect от Converus: это детектор лжи по реакциям глаз. Человек читает утверждения на экране и отвечает «правда» или «неправда», тест длится 30–45 минут. В быту такой тест тоже часто называют проверкой на полиграфе.",
    answerEng:
      "No, we do not offer the classic polygraph with sensors. In Lviv we work with EyeDetect by Converus: a lie detector that reads eye reactions. The person reads statements on a screen and answers “true” or “false”, and the test takes 30–45 minutes. In everyday speech this kind of test is often called a polygraph test too.",
  },
  {
    question: "Чи можна у Львові перевірити чоловіка або дружину на зраду?",
    questionRus: "Можно ли во Львове проверить мужа или жену на измену?",
    questionEng: "Can I have my husband or wife tested for infidelity in Lviv?",
    answer:
      "Так, якщо людина згодна: тест проходить лише добровільно, з письмовою згодою. Питання формулюємо про факти за конкретний період, а не про почуття, і людина читає їх до тесту. Тест можна пройти в кабінеті на вул. Городоцькій, 45 або онлайн через VerifEye з телефона.",
    answerRus:
      "Да, если человек согласен: тест проходит только добровольно, с письменного согласия. Вопросы формулируем о фактах за конкретный период, а не о чувствах, и человек читает их до теста. Тест можно пройти в кабинете на ул. Городоцкой, 45 или онлайн через VerifEye с телефона.",
    answerEng:
      "Yes, if the person agrees: the test is voluntary only, with written consent. The questions are about facts within a specific period, not about feelings, and the person reads them before the test. The test can be taken in our office at 45 Horodotska St. or online with VerifEye from a phone.",
  },
  {
    question: "Чи можна пройти тест у Львові сьогодні або в неділю?",
    questionRus: "Можно ли пройти тест во Львове сегодня или в воскресенье?",
    questionEng: "Can I take the test in Lviv today or on a Sunday?",
    answer:
      "Приймаємо за попереднім записом, заявки й дзвінки — цілодобово. Терміновий тест без черги і тест у неділю можливі з доплатою, її розмір указано на сторінці цін. Онлайн-тест VerifEye можна пройти з телефона вже сьогодні, для нього доплат немає.",
    answerRus:
      "Принимаем по предварительной записи, заявки и звонки — круглосуточно. Срочный тест без очереди и тест в воскресенье возможны с доплатой, её размер указан на странице цен. Онлайн-тест VerifEye можно пройти с телефона уже сегодня, для него доплат нет.",
    answerEng:
      "We work by appointment and take calls and requests 24/7. An urgent test with no queue and a Sunday test are available for a surcharge, which is listed on the prices page. The VerifEye online test can be taken from a phone today, with no surcharges.",
  },
  {
    question: "Як переконатися, що результат тесту не підправили?",
    questionRus: "Как убедиться, что результат теста не подправили?",
    questionEng: "How can I be sure the test result was not adjusted?",
    answer:
      "Бал рахує алгоритм Converus на захищеному сервері, і спеціаліст не може його змінити. Після тесту EyeDetect у Львові ви в нашій присутності відкриваєте оригінал звіту в кабінеті системи на нашому комп'ютері. Через це звіт не можна купити чи підправити.",
    answerRus:
      "Балл считает алгоритм Converus на защищённом сервере, и специалист не может его изменить. После теста EyeDetect во Львове вы в нашем присутствии открываете оригинал отчёта в кабинете системы на нашем компьютере. Поэтому отчёт нельзя купить или подправить.",
    answerEng:
      "The score is calculated by the Converus algorithm on a secure server, and the examiner cannot change it. After an EyeDetect test in Lviv you open the original report in the system dashboard on our computer, in our presence. That is why a report cannot be bought or adjusted.",
  },
];
