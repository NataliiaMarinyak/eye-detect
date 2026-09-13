// Сторінка /for/real-estate: забудовники, агенції нерухомості, керуючі компанії. Ключі: uk, ru, en.

import { cta, how } from "../audiencesShared";

export const realEstate = {
  slug: "real-estate",
  uk: {
    seo: { title: "Детектор брехні для забудовників і агенцій нерухомості", description: "EyeDetect для забудовників, агенцій нерухомості і керуючих компаній: відкати від підрядників, витік бази клієнтів, угоди повз агенцію, завищені кошториси.", keywords: ["детектор брехні для забудовника", "поліграф агенція нерухомості", "перевірка прораба на відкати", "витік клієнтської бази перевірка", "EyeDetect нерухомість"], crumbHome: "Головна", crumb: "Для забудовників і агенцій нерухомості" },
    hero: { eyebrow: "Забудовники, агенції нерухомості, керуючі компанії", h1: "Детектор брехні для забудовника чи агенції нерухомості", sub: "Прораб підписує акти з підрядником, менеджер із продажу веде базу на сотні клієнтів, керуюча компанія розпоряджається грошима мешканців. EyeDetect за 30–45 хвилин перевіряє конкретні факти: чи отримував відкат, чи передавав базу, чи проводив угоду повз агенцію. У кабінеті у Львові або з виїздом на об'єкт.", facts: ["30–45 хвилин на людину", "точність 86–90%", "у Львові або на об'єкті", "звіт одразу після тесту"] },
    blocks: [
      { type: "cards", title: "Де це допомагає", items: [
        { title: "Відкати від підрядників і постачальників", text: "Прораб або керівник проєкту обирає підрядника за винагороду, акти підписуються на роботи, яких не було. Питання про факт отримання грошей чи вигоди за конкретний період." },
        { title: "Завищення кошторисів", text: "Матеріали в кошторисі дорожчі за ринок, обсяги більші за фактичні, різниця осідає в ланцюжку. Перевірка тих, хто складав і погоджував кошторис." },
        { title: "Витік клієнтської бази", text: "Клієнти агенції отримують дзвінки від конкурентів, база з CRM з'являється у сторонніх. Перевіряємо факт передачі даних у тих, хто мав доступ." },
        { title: "Угоди повз агенцію", text: "Рієлтор зводить покупця і продавця напряму і забирає комісію собі. Тест на одне питання про конкретні об'єкти і клієнтів." },
        { title: "Керуюча компанія і ОСББ", text: "Гроші мешканців, договори з обслуговуючими фірмами, закупівлі. Перевірка бухгалтера, голови і менеджерів після скарг або аудиту." },
        { title: "Найм на ключові позиції", text: "Прораб, керівник проєкту, менеджер із продажу, бухгалтер. Один тест до підписання договору дешевший за один відкат після." },
      ] },
      { type: "list", title: "Що можна перевірити", cols: 3, items: ["отримання відкату від підрядника чи постачальника", "підписання актів на невиконані роботи", "завищення обсягів і цін у кошторисі", "передача бази клієнтів стороннім", "угоди з клієнтами повз агенцію", "приховані комісії від покупця чи продавця", "розголошення умов угод конкурентам", "привласнення авансів і грошей мешканців", "крадіжки матеріалів з будмайданчика"] },
      how.uk,
      { type: "table", title: "Кого і коли перевіряти", columns: ["Кого", "Коли", "Формат"], rows: [
        ["Прораб, керівник проєкту", "після аудиту кошторису, перед новим об'єктом", "EyeDetect на об'єкті або у Львові, 30–45 хвилин"],
        ["Менеджер із продажу, рієлтор", "після витоку бази або підозри на угоду повз агенцію", "EyeDetect у кабінеті, тест на одне питання"],
        ["Бухгалтер, керівник керуючої компанії", "після скарг мешканців або розбіжностей в аудиті", "EyeDetect у Львові або з виїздом"],
        ["Кандидати на ключові позиції", "до підписання договору", "EyeDetect 30–45 хвилин або VerifEye онлайн 10 хвилин"],
        ["Філії і рієлтори в інших містах", "планова перевірка раз на пів року чи рік", "VerifEye зі смартфона, від 2 500 ₴"],
      ] },
      { type: "text", title: "Що варто знати керівнику", paragraphs: [
        "Перевірка проходить лише за письмовою згодою працівника, він може відмовитись. Питання стосуються тільки роботи: гроші, документи, клієнти, підрядники. Ми не питаємо про здоров'я, політику, релігію чи приватне життя. Результат в Україні не є доказом у суді, це підстава для внутрішнього рішення чи службового розслідування.",
        "Для будівельної компанії зручніший виїзд на об'єкт або в офіс: 6–8 осіб за день, потрібна тиха кімната зі столом і розеткою. Виїзд по Львівській області входить у вартість, по Західній Україні +2 000 ₴, в інші регіони від 12 000 ₴ разом із тестом. Агенції з кількома менеджерами часто простіше прийти в кабінет у Львові.",
        "Тест проводить Наталія Мариняк, психолог, сертифікований Converus Test Proctor. Кабінет у Львові, вул. Городоцька, 45. Тест від 5 500 ₴, ціни для бізнесу залежать від кількості осіб, тем і міста, розрахунок надсилаємо того ж дня.",
      ] },
      cta.uk("EyeDetect для забудовника чи агенції нерухомості"),
    ],
  },
  ru: {
    seo: { title: "Детектор лжи для застройщиков и агентств недвижимости", description: "EyeDetect для застройщиков, агентств недвижимости и управляющих компаний: откаты от подрядчиков, утечка базы клиентов, сделки мимо агентства, завышенные сметы.", keywords: ["детектор лжи для застройщика", "полиграф агентство недвижимости", "проверка прораба на откаты", "утечка клиентской базы проверка", "EyeDetect недвижимость"], crumbHome: "Главная", crumb: "Для застройщиков и агентств недвижимости" },
    hero: { eyebrow: "Застройщики, агентства недвижимости, управляющие компании", h1: "Детектор лжи для застройщика или агентства недвижимости", sub: "Прораб подписывает акты с подрядчиком, менеджер по продажам ведёт базу на сотни клиентов, управляющая компания распоряжается деньгами жильцов. EyeDetect за 30–45 минут проверяет конкретные факты: получал ли откат, передавал ли базу, проводил ли сделку мимо агентства. В кабинете во Львове или с выездом на объект.", facts: ["30–45 минут на человека", "точность 86–90%", "во Львове или на объекте", "отчёт сразу после теста"] },
    blocks: [
      { type: "cards", title: "Где это помогает", items: [
        { title: "Откаты от подрядчиков и поставщиков", text: "Прораб или руководитель проекта выбирает подрядчика за вознаграждение, акты подписываются на работы, которых не было. Вопросы о факте получения денег или выгоды за конкретный период." },
        { title: "Завышение смет", text: "Материалы в смете дороже рынка, объёмы больше фактических, разница оседает в цепочке. Проверка тех, кто составлял и согласовывал смету." },
        { title: "Утечка клиентской базы", text: "Клиенты агентства получают звонки от конкурентов, база из CRM появляется у посторонних. Проверяем факт передачи данных у тех, кто имел доступ." },
        { title: "Сделки мимо агентства", text: "Риелтор сводит покупателя и продавца напрямую и забирает комиссию себе. Тест на один вопрос о конкретных объектах и клиентах." },
        { title: "Управляющая компания и ОСМД", text: "Деньги жильцов, договоры с обслуживающими фирмами, закупки. Проверка бухгалтера, председателя и менеджеров после жалоб или аудита." },
        { title: "Наём на ключевые позиции", text: "Прораб, руководитель проекта, менеджер по продажам, бухгалтер. Один тест до подписания договора дешевле одного отката после." },
      ] },
      { type: "list", title: "Что можно проверить", cols: 3, items: ["получение отката от подрядчика или поставщика", "подписание актов на невыполненные работы", "завышение объёмов и цен в смете", "передача базы клиентов посторонним", "сделки с клиентами мимо агентства", "скрытые комиссии от покупателя или продавца", "разглашение условий сделок конкурентам", "присвоение авансов и денег жильцов", "кражи материалов со стройплощадки"] },
      how.ru,
      { type: "table", title: "Кого и когда проверять", columns: ["Кого", "Когда", "Формат"], rows: [
        ["Прораб, руководитель проекта", "после аудита сметы, перед новым объектом", "EyeDetect на объекте или во Львове, 30–45 минут"],
        ["Менеджер по продажам, риелтор", "после утечки базы или подозрения на сделку мимо агентства", "EyeDetect в кабинете, тест на один вопрос"],
        ["Бухгалтер, руководитель управляющей компании", "после жалоб жильцов или расхождений в аудите", "EyeDetect во Львове или с выездом"],
        ["Кандидаты на ключевые позиции", "до подписания договора", "EyeDetect 30–45 минут или VerifEye онлайн 10 минут"],
        ["Филиалы и риелторы в других городах", "плановая проверка раз в полгода или год", "VerifEye со смартфона, от 2 500 ₴"],
      ] },
      { type: "text", title: "Что стоит знать руководителю", paragraphs: [
        "Проверка проходит только с письменного согласия сотрудника, он может отказаться. Вопросы касаются только работы: деньги, документы, клиенты, подрядчики. Мы не спрашиваем о здоровье, политике, религии или частной жизни. Результат в Украине не является доказательством в суде, это основание для внутреннего решения или служебного расследования.",
        "Для строительной компании удобнее выезд на объект или в офис: 6–8 человек в день, нужна тихая комната со столом и розеткой. Выезд по Львовской области входит в стоимость, по Западной Украине +2 000 ₴, в другие регионы от 12 000 ₴ вместе с тестом. Агентству с несколькими менеджерами часто проще прийти в кабинет во Львове.",
        "Тест проводит Наталия Мариняк, психолог, сертифицированный Converus Test Proctor. Кабинет во Львове, ул. Городоцкая, 45. Тест от 5 500 ₴, цены для бизнеса зависят от количества человек, тем и города, расчёт отправляем в тот же день.",
      ] },
      cta.ru("EyeDetect для застройщика или агентства недвижимости"),
    ],
  },
  en: {
    seo: { title: "Lie Detector for Developers and Real Estate Agencies", description: "EyeDetect for developers, real estate agencies, and property managers: contractor kickbacks, client database leaks, deals behind the agency, padded estimates.", keywords: ["lie detector for developers", "polygraph for real estate agency", "foreman kickback screening", "client database leak investigation", "EyeDetect real estate"], crumbHome: "Home", crumb: "For developers and real estate agencies" },
    hero: { eyebrow: "Developers, real estate agencies, property management companies", h1: "Lie Detector for a Developer or Real Estate Agency", sub: "A foreman signs acceptance certificates with a contractor, a sales manager keeps a database of hundreds of clients, a property management company handles residents' money. In 30–45 minutes EyeDetect checks specific facts: receiving a kickback, passing on the database, closing a deal behind the agency's back. In our Lviv office or on-site at your project.", facts: ["30–45 minutes per person", "86–90% accuracy", "in Lviv or on-site", "report right after the test"] },
    blocks: [
      { type: "cards", title: "Where it helps", items: [
        { title: "Kickbacks from contractors and suppliers", text: "A foreman or project manager picks a contractor for a reward, and certificates are signed for work that was never done. Questions about the fact of receiving money or benefits within a specific period." },
        { title: "Inflated estimates", text: "Materials in the estimate cost more than the market, volumes exceed the actual ones, and the difference settles somewhere along the chain. Testing of those who prepared and approved the estimate." },
        { title: "Client database leak", text: "The agency's clients get calls from competitors, and the CRM database turns up with outsiders. We check the fact of passing on data among those who had access." },
        { title: "Deals bypassing the agency", text: "An agent connects the buyer and seller directly and keeps the commission. A single-issue test about specific properties and clients." },
        { title: "Property management companies and condo associations", text: "Residents' money, contracts with service firms, procurement. Testing of the accountant, the chair, and managers after complaints or an audit." },
        { title: "Hiring for key positions", text: "Foreman, project manager, sales manager, accountant. One test before signing the contract costs less than one kickback after." },
      ] },
      { type: "list", title: "What can be tested", cols: 3, items: ["receiving a kickback from a contractor or supplier", "signing certificates for work not performed", "inflating volumes and prices in the estimate", "passing the client database to outsiders", "deals with clients bypassing the agency", "hidden commissions from the buyer or seller", "disclosing deal terms to competitors", "misappropriating deposits and residents' money", "theft of materials from the construction site"] },
      how.en,
      { type: "table", title: "Whom and when to test", columns: ["Who", "When", "Format"], rows: [
        ["Foreman, project manager", "after an estimate audit, before a new project", "EyeDetect on-site or in Lviv, 30–45 minutes"],
        ["Sales manager, real estate agent", "after a database leak or a suspected deal behind the agency's back", "EyeDetect in our office, single-issue test"],
        ["Accountant, head of a property management company", "after residents' complaints or audit discrepancies", "EyeDetect in Lviv or on-site"],
        ["Candidates for key positions", "before signing the contract", "EyeDetect 30–45 minutes or VerifEye online 10 minutes"],
        ["Branches and agents in other cities", "scheduled testing every six months or once a year", "VerifEye from a smartphone, from UAH 2,500"],
      ] },
      { type: "text", title: "What a manager should know", paragraphs: [
        "Testing is done only with the employee's written consent, and they may refuse. Questions concern work only: money, documents, clients, contractors. We do not ask about health, politics, religion, or private life. In Ukraine the result is not admissible evidence in court; it is grounds for an internal decision or an internal investigation.",
        "For a construction company, on-site testing at the project or office is more convenient: 6–8 people a day, and we need a quiet room with a table and a power outlet. Travel within the Lviv region is included, Western Ukraine is +UAH 2,000, other regions from UAH 12,000 including the test. For an agency with a few managers it is often simpler to come to our Lviv office.",
        "The test is conducted by Nataliia Marynyak, psychologist, certified Converus Test Proctor. Office in Lviv, 45 Horodotska St. Tests start from UAH 5,500; business pricing depends on the number of people, topics, and city, and we send a quote the same day.",
      ] },
      cta.en("EyeDetect for a developer or real estate agency"),
    ],
  },
};
