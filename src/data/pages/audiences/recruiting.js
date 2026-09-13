// Сторінка /for/recruiting: рекрутингові, кадрові та аутстафінгові агенції.
// Перевірка кандидатів як послуга для клієнтів агенції. Ключі: uk, ru, en.

import { cta, how } from "../audiencesShared";

export const recruiting = {
  slug: "recruiting",
  uk: {
    seo: { title: "Детектор брехні для рекрутингової агенції: перевірка кандидатів", description: "Перевірка кандидатів як послуга для клієнтів агенції. VerifEye онлайн до співбесіди за 10 хвилин, EyeDetect для ключових позицій, 6–8 людей за день.", keywords: ["детектор брехні для рекрутингової агенції", "перевірка кандидатів для кадрової агенції", "поліграф аутстафінг персоналу", "перевірка кандидатів онлайн VerifEye", "EyeDetect масовий підбір"], crumbHome: "Головна", crumb: "Для рекрутингових агенцій" },
    hero: { eyebrow: "Рекрутинговим, кадровим і аутстафінговим агенціям", h1: "Детектор брехні для рекрутингової агенції", sub: "Агенція додає перевірку кандидата до своєї послуги і передає клієнту звіт разом із резюме. VerifEye проходять онлайн з телефона до співбесіди, EyeDetect у Львові або з виїздом до клієнта закриває ключові позиції. Кандидат читає всі питання заздалегідь і проходить тест лише за письмовою згодою.", facts: ["VerifEye до співбесіди за 10 хвилин", "6–8 кандидатів за день з виїздом", "точність 84–90%", "звіт по кожному одразу після тесту"] },
    blocks: [
      { type: "cards", title: "Де це допомагає", items: [
        { title: "Перевірка як частина послуги", text: "Клієнт отримує від агенції не лише резюме і рекомендації, а й результат тесту по фінальних кандидатах. Це аргумент у тендері на підбір і причина обрати саме вашу агенцію." },
        { title: "Масовий підбір", text: "Склад, роздріб, логістика, кол-центр, виробництво. Кандидат проходить VerifEye на своєму телефоні ще до співбесіди, і рекрутер витрачає час лише на тих, хто пройшов." },
        { title: "Ключові позиції клієнта", text: "Фінансовий директор, головний бухгалтер, керівник закупівель, адміністратор систем. Для таких вакансій радимо EyeDetect на обладнанні: 30–45 хвилин, звіт одразу." },
        { title: "Аутстафінг і аутсорсинг персоналу", text: "Людина працює на об'єкті клієнта, але числиться за агенцією. Крадіжка чи витік у клієнта стає проблемою агенції. Перевірка перед виведенням на об'єкт знижує цей ризик." },
        { title: "Менше гарантійних замін", text: "Якщо кандидат не пройшов випробувальний термін через крадіжку або неправду в резюме, агенція шукає заміну безкоштовно. Тест до офера зменшує кількість таких випадків." },
        { title: "Чесність резюме", text: "Реальний досвід, справжня причина звільнення, конфлікти з попереднім керівництвом. Питання формулюються про конкретні факти, а не про враження." },
      ] },
      { type: "list", title: "Що можна перевірити", cols: 3, items: ["крадіжки на попередній роботі", "справжня причина звільнення", "правдивість досвіду та освіти в резюме", "вживання наркотиків за останній рік", "дисциплінарні стягнення і конфлікти", "передача даних попереднього роботодавця", "паралельна робота на конкурента", "підроблені документи чи довідки", "приховані зв'язки з конкурентами клієнта"] },
      how.uk,
      { type: "text", title: "Партнерська модель для агенції", paragraphs: [
        "Агенція перепродає перевірку клієнту як частину пакета або окрему опцію і сама визначає ціну для клієнта. Ми працюємо через агенцію: погоджуємо теми з рекрутером, надсилаємо посилання кандидатам, повертаємо звіти. Ціни для бізнесу індивідуальні і залежать від кількості тестів на місяць. Розрахунок надсилаємо того ж дня.",
        "Два формати. VerifEye: кандидат проходить тест на своєму смартфоні з будь-якого міста, близько 10 хвилин, точність 84–89%, від 2 500 ₴. EyeDetect: 30–45 хвилин у кабінеті у Львові або з виїздом до клієнта, 6–8 людей за день, точність 86–90%, від 5 500 ₴. виїзд по Львову і області до 50 км включено, Західна Україна +2 000 ₴, інші регіони від 12 000 ₴ разом з тестом.",
        "Кандидат проходить тест лише за письмовою згодою і може відмовитись. Питання стосуються конкретних фактів і періодів: гроші, майно, документи, робота. Теми здоров'я, політики, релігії та приватного життя не перевіряються. Результат не є доказом у суді, це підстава для кадрового рішення клієнта.",
      ] },
      { type: "table", title: "Який формат обрати", columns: ["", "VerifEye онлайн", "EyeDetect"], rows: [
        ["Де проходить", "на телефоні кандидата, будь-яке місто", "кабінет у Львові або виїзд до клієнта"],
        ["Час на людину", "близько 10 хвилин", "30–45 хвилин"],
        ["Точність", "84–89%", "86–90%"],
        ["Ціна за тест", "від 2 500 ₴", "від 5 500 ₴"],
        ["Для кого", "масовий підбір, лінійні позиції, інші міста", "керівники, фінансові посади, доступ до грошей і даних"],
      ] },
      cta.uk("EyeDetect для рекрутингової агенції"),
    ],
  },
  ru: {
    seo: { title: "Детектор лжи для рекрутингового агентства: проверка кандидатов", description: "Проверка кандидатов как услуга для клиентов агентства. VerifEye онлайн до собеседования за 10 минут, EyeDetect для ключевых позиций, 6–8 человек в день.", keywords: ["детектор лжи для рекрутингового агентства", "проверка кандидатов для кадрового агентства", "полиграф аутстаффинг персонала", "проверка кандидатов онлайн VerifEye", "EyeDetect массовый подбор"], crumbHome: "Главная", crumb: "Для рекрутинговых агентств" },
    hero: { eyebrow: "Рекрутинговым, кадровым и аутстаффинговым агентствам", h1: "Детектор лжи для рекрутингового агентства", sub: "Агентство добавляет проверку кандидата к своей услуге и передаёт клиенту отчёт вместе с резюме. VerifEye проходят онлайн с телефона до собеседования, EyeDetect во Львове или с выездом к клиенту закрывает ключевые позиции. Кандидат читает все вопросы заранее и проходит тест только с письменного согласия.", facts: ["VerifEye до собеседования за 10 минут", "6–8 кандидатов в день с выездом", "точность 84–90%", "отчёт по каждому сразу после теста"] },
    blocks: [
      { type: "cards", title: "Где это помогает", items: [
        { title: "Проверка как часть услуги", text: "Клиент получает от агентства не только резюме и рекомендации, но и результат теста по финальным кандидатам. Это аргумент в тендере на подбор и причина выбрать именно ваше агентство." },
        { title: "Массовый подбор", text: "Склад, розница, логистика, колл-центр, производство. Кандидат проходит VerifEye на своём телефоне ещё до собеседования, и рекрутер тратит время только на тех, кто прошёл." },
        { title: "Ключевые позиции клиента", text: "Финансовый директор, главный бухгалтер, руководитель закупок, администратор систем. Для таких вакансий рекомендуем EyeDetect на оборудовании: 30–45 минут, отчёт сразу." },
        { title: "Аутстаффинг и аутсорсинг персонала", text: "Человек работает на объекте клиента, но числится за агентством. Кража или утечка у клиента становится проблемой агентства. Проверка перед выводом на объект снижает этот риск." },
        { title: "Меньше гарантийных замен", text: "Если кандидат не прошёл испытательный срок из-за кражи или неправды в резюме, агентство ищет замену бесплатно. Тест до офера уменьшает количество таких случаев." },
        { title: "Честность резюме", text: "Реальный опыт, настоящая причина увольнения, конфликты с предыдущим руководством. Вопросы формулируются о конкретных фактах, а не о впечатлениях." },
      ] },
      { type: "list", title: "Что можно проверить", cols: 3, items: ["кражи на предыдущей работе", "настоящая причина увольнения", "правдивость опыта и образования в резюме", "употребление наркотиков за последний год", "дисциплинарные взыскания и конфликты", "передача данных предыдущего работодателя", "параллельная работа на конкурента", "поддельные документы или справки", "скрытые связи с конкурентами клиента"] },
      how.ru,
      { type: "text", title: "Партнёрская модель для агентства", paragraphs: [
        "Агентство перепродаёт проверку клиенту как часть пакета или отдельную опцию и само определяет цену для клиента. Мы работаем через агентство: согласовываем темы с рекрутером, отправляем ссылки кандидатам, возвращаем отчёты. Цены для бизнеса индивидуальные и зависят от количества тестов в месяц. Расчёт отправляем в тот же день.",
        "Два формата. VerifEye: кандидат проходит тест на своём смартфоне из любого города, около 10 минут, точность 84–89%, от 2 500 ₴. EyeDetect: 30–45 минут в кабинете во Львове или с выездом к клиенту, 6–8 человек в день, точность 86–90%, от 5 500 ₴. выезд по Львову и области до 50 км включён, Западная Украина +2 000 ₴, другие регионы от 12 000 ₴ вместе с тестом.",
        "Кандидат проходит тест только с письменного согласия и может отказаться. Вопросы касаются конкретных фактов и периодов: деньги, имущество, документы, работа. Темы здоровья, политики, религии и частной жизни не проверяются. Результат не является доказательством в суде, это основание для кадрового решения клиента.",
      ] },
      { type: "table", title: "Какой формат выбрать", columns: ["", "VerifEye онлайн", "EyeDetect"], rows: [
        ["Где проходит", "на телефоне кандидата, любой город", "кабинет во Львове или выезд к клиенту"],
        ["Время на человека", "около 10 минут", "30–45 минут"],
        ["Точность", "84–89%", "86–90%"],
        ["Цена за тест", "от 2 500 ₴", "от 5 500 ₴"],
        ["Для кого", "массовый подбор, линейные позиции, другие города", "руководители, финансовые должности, доступ к деньгам и данным"],
      ] },
      cta.ru("EyeDetect для рекрутингового агентства"),
    ],
  },
  en: {
    seo: { title: "Lie Detector for Recruiting Agencies: Candidate Screening", description: "Candidate screening as a service for your agency's clients. VerifEye online before the interview in 10 minutes, EyeDetect for key roles, 6–8 people a day.", keywords: ["lie detector for recruiting agencies", "candidate screening for staffing agencies", "polygraph for outstaffing personnel", "online candidate screening VerifEye", "EyeDetect high-volume hiring"], crumbHome: "Home", crumb: "For recruiting agencies" },
    hero: { eyebrow: "For recruiting, staffing, and outstaffing agencies", h1: "Lie Detector for Recruiting Agencies", sub: "The agency adds candidate screening to its service and hands the client a report along with the resume. Candidates take VerifEye online from a phone before the interview; EyeDetect in Lviv or on-site at the client covers key positions. The candidate reads all questions in advance and takes the test only with written consent.", facts: ["VerifEye before the interview in 10 minutes", "6–8 candidates a day on-site", "84–90% accuracy", "report on each person right after the test"] },
    blocks: [
      { type: "cards", title: "Where it helps", items: [
        { title: "Screening as part of the service", text: "The client receives from the agency not only resumes and references, but also test results for the final candidates. It is an argument in a recruiting tender and a reason to choose your agency." },
        { title: "High-volume hiring", text: "Warehouse, retail, logistics, call center, manufacturing. The candidate takes VerifEye on their own phone before the interview, and the recruiter spends time only on those who passed." },
        { title: "The client's key positions", text: "CFO, chief accountant, head of procurement, systems administrator. For such vacancies we recommend EyeDetect on the equipment: 30–45 minutes, report right away." },
        { title: "Outstaffing and staff outsourcing", text: "The person works at the client's site but is employed by the agency. Theft or a leak at the client becomes the agency's problem. Screening before placement reduces that risk." },
        { title: "Fewer guarantee replacements", text: "If a candidate fails probation because of theft or a false resume, the agency finds a replacement for free. A test before the offer reduces the number of such cases." },
        { title: "Resume honesty", text: "Real experience, the actual reason for leaving, conflicts with previous management. Questions are phrased about specific facts, not impressions." },
      ] },
      { type: "list", title: "What can be tested", cols: 3, items: ["theft at a previous job", "the real reason for leaving", "accuracy of experience and education in the resume", "drug use in the past year", "disciplinary actions and conflicts", "passing on a previous employer's data", "working for a competitor in parallel", "forged documents or certificates", "hidden ties to the client's competitors"] },
      how.en,
      { type: "text", title: "Partner model for agencies", paragraphs: [
        "The agency resells the screening to the client as part of a package or as a separate option and sets its own price for the client. We work through the agency: we agree on topics with the recruiter, send links to candidates, and return the reports. Business pricing is individual and depends on the number of tests per month. We send a quote the same day.",
        "Two formats. VerifEye: the candidate takes the test on their own smartphone from any city, about 10 minutes, 84–89% accuracy, from UAH 2,500. EyeDetect: 30–45 minutes in our Lviv office or on-site at the client, 6–8 people a day, 86–90% accuracy, from UAH 5,500. Travel within Lviv and up to 50 km around it is included, Western Ukraine +UAH 2,000, other regions from UAH 12,000 including the test.",
        "The candidate takes the test only with written consent and may refuse. Questions concern specific facts and periods: money, property, documents, work. Health, politics, religion, and private life are not tested. The result is not admissible evidence in court; it is a basis for the client's hiring decision.",
      ] },
      { type: "table", title: "Which format to choose", columns: ["", "VerifEye online", "EyeDetect"], rows: [
        ["Where", "on the candidate's phone, any city", "our Lviv office or on-site at the client"],
        ["Time per person", "about 10 minutes", "30–45 minutes"],
        ["Accuracy", "84–89%", "86–90%"],
        ["Price per test", "from UAH 2,500", "from UAH 5,500"],
        ["Best for", "high-volume hiring, entry-level roles, other cities", "managers, finance roles, access to money and data"],
      ] },
      cta.en("EyeDetect for recruiting agencies"),
    ],
  },
};
