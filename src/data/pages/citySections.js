// Шаблонні тексти нових блоків міської сторінки (міста з cityUnique). Ключі: uk, ru, en.
// Ситуації ведуть на існуючі сторінки /situations/[slug] (див. situationsData.js).
export const citySections = {
  uk: {
    situations: {
      title: "У яких ситуаціях замовляють перевірку",
      more: "Детальніше",
      items: [
        { slug: "theft", title: "Крадіжка або зникнення грошей", text: "Коли під підозрою кілька людей, кожен відповідає на ті самі питання. Результат не є судовим доказом і не замінює звернення до поліції." },
        { slug: "fidelity", title: "Зрада у стосунках", text: "Перевіряємо конкретну підозру: питання формулюємо разом, людина читає їх заздалегідь. Тест добровільний, за письмовою згодою." },
        { slug: "hiring", title: "Кандидат або працівник", text: "Перевірка перед наймом або під час роботи за погодженими темами, наприклад крадіжки на попередньому місці роботи чи зв'язки з конкурентами." },
        { slug: "dispute", title: "Спір без доказів", text: "Борг, домовленість чи звинувачення, коли є лише слово проти слова: тест перевіряє конкретну версію подій. Результат не є судовим доказом." },
      ],
    },
    // Пункти гарантії від «ми» (у спільних даних confidentialityGuaranteeData вони від першої особи).
    // Типові звернення для міст без власних випадків (власник: «в загальному, не по кожній країні»).
    commonCases: {
      title: "З чим до нас звертаються",
      note: "Типові звернення з різних міст і країн, без імен і деталей.",
      items: [
        { label: "Компанії", title: "Арбітраж трафіку", text: "Перевірка кандидатів і працівників: чи не передають вони офери компанії конкурентам." },
        { label: "Компанії", title: "Колцентри", text: "Перевірка операторів перед наймом і службові розслідування, коли у працівників є доступ до грошей чи бази клієнтів." },
        { label: "Бізнес і сім'ї", title: "Крадіжка на роботі чи вдома", text: "Коли під підозрою кілька людей, кожен проходить тест з тими самими питаннями. Неповнолітні — лише за письмовою згодою батьків і в їхній присутності." },
        { label: "Пари", title: "Підозра у зраді", text: "Тест перевіряє одну конкретну підозру за певний період. Питання формулюємо разом, людина читає їх заздалегідь." },
      ],
      disclaimer: "Результат тесту не є судовим доказом.",
    },
    guarantee: [
      "Не публікуємо фото чи відео перевірок на сайті чи в соцмережах.",
      "Не обговорюємо перевірки з колегами на форумах чи в чатах.",
      "Не розголошуємо інформацію про компанії або приватних осіб, з якими співпрацюємо.",
    ],
  },
  ru: {
    situations: {
      title: "В каких ситуациях заказывают проверку",
      more: "Подробнее",
      items: [
        { slug: "theft", title: "Кража или пропажа денег", text: "Когда под подозрением несколько человек, каждый отвечает на одни и те же вопросы. Результат не является судебным доказательством и не заменяет обращения в полицию." },
        { slug: "fidelity", title: "Измена в отношениях", text: "Проверяем конкретное подозрение: вопросы формулируем вместе, человек читает их заранее. Тест добровольный, с письменного согласия." },
        { slug: "hiring", title: "Кандидат или сотрудник", text: "Проверка перед наймом или во время работы по согласованным темам, например кражи на прошлом месте работы или связи с конкурентами." },
        { slug: "dispute", title: "Спор без доказательств", text: "Долг, договорённость или обвинение, когда есть только слово против слова: тест проверяет конкретную версию событий. Результат не является судебным доказательством." },
      ],
    },
    commonCases: {
      title: "С чем к нам обращаются",
      note: "Типичные обращения из разных городов и стран, без имён и деталей.",
      items: [
        { label: "Компании", title: "Арбитраж трафика", text: "Проверка кандидатов и сотрудников: не передают ли они офферы компании конкурентам." },
        { label: "Компании", title: "Колл-центры", text: "Проверка операторов перед наймом и служебные расследования, когда у сотрудников есть доступ к деньгам или базе клиентов." },
        { label: "Бизнес и семьи", title: "Кража на работе или дома", text: "Когда под подозрением несколько человек, каждый проходит тест с одними и теми же вопросами. Несовершеннолетние — только с письменного согласия родителей и в их присутствии." },
        { label: "Пары", title: "Подозрение в измене", text: "Тест проверяет одно конкретное подозрение за определённый период. Вопросы формулируем вместе, человек читает их заранее." },
      ],
      disclaimer: "Результат теста не является судебным доказательством.",
    },
    guarantee: [
      "Не публикуем фото или видео проверок на сайте или в соцсетях.",
      "Не обсуждаем проверки с коллегами на форумах или в чатах.",
      "Не разглашаем информацию о компаниях или частных лицах, с которыми сотрудничаем.",
    ],
  },
  en: {
    situations: {
      title: "Common reasons to book a test",
      more: "Learn more",
      items: [
        { slug: "theft", title: "Theft or missing money", text: "When several people are under suspicion, each of them answers the same questions. The result is not court evidence and is no substitute for reporting to the police." },
        { slug: "fidelity", title: "Infidelity in a relationship", text: "We check one specific suspicion: we draw up the questions together with you, and the person reads them in advance. The test is voluntary and requires written consent." },
        { slug: "hiring", title: "Job candidate or employee", text: "Screening before hiring or during employment on agreed topics, such as theft at a previous job or ties to competitors." },
        { slug: "dispute", title: "Dispute without evidence", text: "A debt, an agreement or an accusation where it is one person's word against another's: the test checks a specific version of events. The result is not court evidence." },
      ],
    },
    commonCases: {
      title: "What people come to us with",
      note: "Typical requests from different cities and countries, without names or details.",
      items: [
        { label: "Companies", title: "Traffic arbitrage", text: "Screening candidates and employees to check whether they pass the company's offers to competitors." },
        { label: "Companies", title: "Call centres", text: "Screening operators before hiring, and internal investigations when staff have access to money or the client database." },
        { label: "Businesses and families", title: "Theft at work or at home", text: "When several people are under suspicion, each takes the test with the same questions. Minors take it only with written consent from their parents and with the parents present." },
        { label: "Couples", title: "Suspected infidelity", text: "The test checks one specific suspicion over a certain period. We draw up the questions together, and the person reads them in advance." },
      ],
      disclaimer: "The test result is not court evidence.",
    },
    guarantee: [
      "We do not publish photos or videos of tests on our website or social media.",
      "We do not discuss tests with colleagues in forums or chats.",
      "We do not disclose any information about the companies or private clients we work with.",
    ],
  },
};

export const getCitySections = (lang) => citySections[lang] || citySections.uk;
