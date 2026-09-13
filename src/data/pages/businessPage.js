// Зміст сторінки /business. Ключі: uk, ru. Ціни за особу беруться зі src/data/pricingData.js.
export const businessPage = {
  uk: {
    seo: {
      title: "Перевірка персоналу на детекторі брехні — EyeDetect для бізнесу",
      description: "Перевірка кандидатів і працівників на EyeDetect: 6–8 осіб за день, без датчиків, звіт одразу після тесту. Крадіжки, витік інформації, розслідування. Виїзд в офіс по Україні.",
      keywords: ["перевірка персоналу на поліграфі", "перевірка працівників детектор брехні", "поліграф для бізнесу", "службове розслідування поліграф", "скринінг кандидатів"],
      crumbHome: "Головна",
      crumb: "Для бізнесу",
    },
    hero: {
      eyebrow: "Для бізнесу",
      h1: "Перевірка персоналу на детекторі брехні: 6–8 осіб за один день",
      sub: "Найм, планова перевірка, крадіжка чи витік. Приїжджаємо з обладнанням EyeDetect у ваш офіс, кожен тест 30–45 хвилин, звіт по кожній людині одразу після тесту. Без датчиків на тілі, з письмовою згодою кожного.",
      facts: ["6–8 осіб за день", "виїзд в офіс", "звіт по кожному одразу після тесту", "письмова згода працівника"],
      primary: "Отримати пропозицію",
    },
    cases: {
      title: "Коли бізнес звертається",
      items: [
        { title: "Найм на посади з доступом до грошей", text: "Касири, водії, бухгалтери, охорона, керівники філій. Один тест до підписання договору дешевший за одну крадіжку після.", slug: "hiring" },
        { title: "Планова перевірка", text: "Раз на пів року або рік для тих, хто має доступ до каси, складу, бази клієнтів. Сама наявність перевірок знижує кількість порушень.", slug: null },
        { title: "Крадіжка або нестача", text: "Зникли гроші чи товар. Перевіряємо тих, хто мав доступ, і звужуємо коло за один день замість звинувачень навмання.", slug: "theft" },
        { title: "Витік інформації", text: "Конкуренти знають ціни або базу клієнтів. Перевіряємо конкретний факт передачі даних у тих, хто мав доступ.", slug: "leak" },
      ],
    },
    why: {
      title: "Чому EyeDetect для масової перевірки вигідніший",
      rows: [
        ["", "EyeDetect", "Класичний поліграф"],
        ["Осіб за день", "6–8", "2–3"],
        ["Час на людину", "30–45 хвилин", "2–4 години"],
        ["Датчики на тілі", "немає", "манжета, датчики, електроди"],
        ["Хто оцінює", "алгоритм, однаково для всіх", "поліграфолог"],
        ["Звіт", "одразу після тесту, по кожному", "1–3 дні"],
        ["Час усієї команди", "один робочий день", "кілька днів"],
      ],
    },
    process: {
      title: "Як організовується",
      steps: [
        { title: "Погодження тем", text: "Обговорюємо, що саме перевіряємо, і формулюємо 2–4 питання, однакові для всіх. Ви отримуєте текст питань заздалегідь." },
        { title: "Згода працівників", text: "Кожен підписує згоду на тест і читає питання. Відмова не є доказом провини, і змушувати нікого не можна." },
        { title: "Тестування в офісі", text: "Потрібна тиха кімната зі столом і розеткою. Обладнання привозимо. 6–8 осіб за робочий день." },
        { title: "Звіти і розмова", text: "Того ж дня ви отримуєте PDF по кожній людині і пояснення, як читати бали. Далі рішення за вами." },
      ],
    },
    pricing: {
      title: "Скільки коштує",
      note: "Ціни для бізнесу індивідуальні: залежать від кількості осіб, тем і міста. Напишіть, скільки людей і що потрібно перевірити, і ми надішлемо розрахунок того ж дня.",
      travel: "Виїзд по Львівській області безкоштовно. Інші області України — 12 000 ₴ під ключ, разом із тестом. За кордоном дорога і приміщення окремо.",
    },
    industries: {
      title: "Рішення для вашої галузі",
      items: [
        { title: "Банки і фінансові компанії", text: "Доступ до рахунків, кредити, база клієнтів.", href: "/for/finance" },
        { title: "Охоронні компанії", text: "Ключі, коди, об'єкти замовників.", href: "/for/security" },
        { title: "HR і рекрутери", text: "Перевірка кандидатів зі смартфона до співбесіди.", href: "/for/hr" },
        { title: "Юристи і детективи", text: "Оцінка клієнтів, свідків і версій.", href: "/for/lawyers" },
        { title: "Рекрутингові агенції", text: "Перевірка кандидатів як послуга для ваших клієнтів.", href: "/for/recruiting" },
        { title: "Інші галузі", text: "Логістика, ритейл, мілтех, клініки, страхові, рекрутинг та інші.", href: "/for" },
      ],
    },
    legal: {
      title: "Законність і конфіденційність",
      items: [
        "Перевірка законна за письмовою згодою працівника. Питання стосуються лише роботи: гроші, майно, інформація, документи. Приватне життя не чіпаємо.",
        "Результат не є доказом у суді. Це підстава для внутрішнього рішення, розмови або службового розслідування.",
        "Звіти отримує лише уповноважена особа. Ми не зберігаємо результати довше, ніж потрібно для видачі, і не обговорюємо перевірки з третіми особами.",
      ],
    },
    faq: [
      { q: "Чи може працівник відмовитися від тесту?", a: "Так. Тест лише добровільний. Відмову без пояснення керівник бачить і робить висновки сам. У трудовому договорі можна передбачити перевірки для посад із доступом до цінностей." },
      { q: "Скільки людей за день?", a: "6–8 осіб при виїзді в офіс. Для більшої кількості плануємо два дні або два виїзди." },
      { q: "Чи можна перевіряти віддалених працівників?", a: "Так, через VerifEye з телефона, від 2 500 ₴ за людину. Для крадіжок і розслідувань радимо EyeDetect у кабінеті або з виїздом." },
      { q: "Що отримує керівник?", a: "PDF-звіт по кожній людині: оцінка від 1 до 99 по кожному питанню, загальний висновок, деталі відповідей. Плюс пояснення спеціаліста." },
      { q: "Чи повідомляти команду заздалегідь?", a: "Так. Оголошення про перевірку саме по собі дає результат: частина порушників зізнається або звільняється до тесту." },
    ],
    cta: { title: "Отримати пропозицію для вашої компанії", text: "Напишіть, скільки людей і що потрібно перевірити. Надішлемо розрахунок і дати того ж дня.", button: "Отримати пропозицію" },
  },
  ru: {
    seo: {
      title: "Проверка персонала на детекторе лжи — EyeDetect для бизнеса",
      description: "Проверка кандидатов и сотрудников на EyeDetect: 6–8 человек в день, без датчиков, отчёт по каждому сразу после теста. Кражи, утечка информации, служебные расследования. Выезд в офис по Украине.",
      keywords: ["проверка персонала на полиграфе", "проверка сотрудников детектор лжи", "полиграф для бизнеса", "служебное расследование полиграф", "скрининг кандидатов"],
      crumbHome: "Главная",
      crumb: "Для бизнеса",
    },
    hero: {
      eyebrow: "Для бизнеса",
      h1: "Проверка персонала на детекторе лжи: 6–8 человек за один день",
      sub: "Найм, плановая проверка, кража или утечка. Приезжаем с оборудованием EyeDetect в ваш офис, каждый тест 30–45 минут, отчёт по каждому человеку сразу после теста. Без датчиков на теле, с письменным согласием каждого.",
      facts: ["6–8 человек в день", "выезд в офис", "отчёт по каждому сразу после теста", "письменное согласие сотрудника"],
      primary: "Получить предложение",
    },
    cases: {
      title: "Когда бизнес обращается",
      items: [
        { title: "Найм на должности с доступом к деньгам", text: "Кассиры, водители, бухгалтеры, охрана, руководители филиалов. Один тест до подписания договора дешевле одной кражи после.", slug: "hiring" },
        { title: "Плановая проверка", text: "Раз в полгода или год для тех, кто имеет доступ к кассе, складу, базе клиентов. Само наличие проверок снижает количество нарушений.", slug: null },
        { title: "Кража или недостача", text: "Пропали деньги или товар. Проверяем тех, кто имел доступ, и сужаем круг за один день вместо обвинений наугад.", slug: "theft" },
        { title: "Утечка информации", text: "Конкуренты знают цены или базу клиентов. Проверяем конкретный факт передачи данных у тех, кто имел доступ.", slug: "leak" },
      ],
    },
    why: {
      title: "Почему EyeDetect для массовой проверки выгоднее",
      rows: [
        ["", "EyeDetect", "Классический полиграф"],
        ["Человек в день", "6–8", "2–3"],
        ["Время на человека", "30–45 минут", "2–4 часа"],
        ["Датчики на теле", "нет", "манжета, датчики, электроды"],
        ["Кто оценивает", "алгоритм, одинаково для всех", "полиграфолог"],
        ["Отчёт", "сразу после теста, по каждому", "1–3 дня"],
        ["Время всей команды", "один рабочий день", "несколько дней"],
      ],
    },
    process: {
      title: "Как организуется",
      steps: [
        { title: "Согласование тем", text: "Обсуждаем, что именно проверяем, и формулируем 2–4 вопроса, одинаковых для всех. Вы получаете текст вопросов заранее." },
        { title: "Согласие сотрудников", text: "Каждый подписывает согласие на тест и читает вопросы. Отказ не является доказательством вины, и заставлять никого нельзя." },
        { title: "Тестирование в офисе", text: "Нужна тихая комната со столом и розеткой. Оборудование привозим. 6–8 человек за рабочий день." },
        { title: "Отчёты и разговор", text: "В тот же день вы получаете PDF по каждому человеку и пояснение, как читать баллы. Дальше решение за вами." },
      ],
    },
    pricing: {
      title: "Сколько стоит",
      note: "Цены для бизнеса индивидуальные: зависят от количества людей, тем и города. Напишите, сколько людей и что нужно проверить, и мы отправим расчёт в тот же день.",
      travel: "Выезд по Львовской области бесплатно. Другие области Украины — 12 000 ₴ под ключ, вместе с тестом. За границей дорога и помещение отдельно.",
    },
    industries: {
      title: "Решения для вашей отрасли",
      items: [
        { title: "Банки и финансовые компании", text: "Доступ к счетам, кредиты, база клиентов.", href: "/for/finance" },
        { title: "Охранные компании", text: "Ключи, коды, объекты заказчиков.", href: "/for/security" },
        { title: "HR и рекрутеры", text: "Проверка кандидатов со смартфона до собеседования.", href: "/for/hr" },
        { title: "Юристы и детективы", text: "Оценка клиентов, свидетелей и версий.", href: "/for/lawyers" },
        { title: "Рекрутинговые агентства", text: "Проверка кандидатов как услуга для ваших клиентов.", href: "/for/recruiting" },
        { title: "Другие отрасли", text: "Логистика, ритейл, милтех, клиники, страховые, рекрутинг и другие.", href: "/for" },
      ],
    },
    legal: {
      title: "Законность и конфиденциальность",
      items: [
        "Проверка законна с письменного согласия сотрудника. Вопросы касаются только работы: деньги, имущество, информация, документы. Частную жизнь не трогаем.",
        "Результат не является доказательством в суде. Это основание для внутреннего решения, разговора или служебного расследования.",
        "Отчёты получает только уполномоченное лицо. Мы не храним результаты дольше, чем нужно для выдачи, и не обсуждаем проверки с третьими лицами.",
      ],
    },
    faq: [
      { q: "Может ли сотрудник отказаться от теста?", a: "Да. Тест только добровольный. Отказ без объяснения руководитель видит и делает выводы сам. В трудовом договоре можно предусмотреть проверки для должностей с доступом к ценностям." },
      { q: "Сколько человек в день?", a: "6–8 человек при выезде в офис. Для большего количества планируем два дня или два выезда." },
      { q: "Можно ли проверять удалённых сотрудников?", a: "Да, через VerifEye с телефона, от 2 500 ₴ за человека. Для краж и расследований советуем EyeDetect в кабинете или с выездом." },
      { q: "Что получает руководитель?", a: "PDF-отчёт по каждому человеку: оценка от 1 до 99 по каждому вопросу, общий вывод, детали ответов. Плюс пояснение специалиста." },
      { q: "Сообщать ли команде заранее?", a: "Да. Объявление о проверке само по себе даёт результат: часть нарушителей признаётся или увольняется до теста." },
    ],
    cta: { title: "Получить предложение для вашей компании", text: "Напишите, сколько людей и что нужно проверить. Отправим расчёт и даты в тот же день.", button: "Получить предложение" },
  },
  en: {
    seo: {
      title: "Employee lie detector screening — EyeDetect for business",
      description: "Screening candidates and employees with EyeDetect: 6–8 people per day, no sensors, report right after the test. Theft, information leaks, investigations. On-site visits to your office across Ukraine.",
      keywords: ["employee polygraph screening", "employee lie detector test", "polygraph for business", "internal investigation polygraph", "candidate screening"],
      crumbHome: "Home",
      crumb: "For business",
    },
    hero: {
      eyebrow: "For business",
      h1: "Employee lie detector screening: 6–8 people in one day",
      sub: "Hiring, periodic screening, theft, or a leak. We bring the EyeDetect equipment to your office, each test takes 30–45 minutes, and a report on each person is ready right after the test. No sensors on the body, with written consent from everyone.",
      facts: ["6–8 people per day", "on-site at your office", "report on each person right after the test", "written consent from the employee"],
      primary: "Get a proposal",
    },
    cases: {
      title: "When businesses come to us",
      items: [
        { title: "Hiring for positions with access to money", text: "Cashiers, drivers, accountants, security staff, branch managers. One test before signing the contract costs less than one theft after it.", slug: "hiring" },
        { title: "Periodic screening", text: "Every six months or once a year for those with access to cash, the warehouse, or the client database. The mere existence of screening reduces the number of violations.", slug: null },
        { title: "Theft or shortage", text: "Money or goods have gone missing. We test those who had access and narrow the circle in one day instead of accusing people at random.", slug: "theft" },
        { title: "Information leak", text: "Competitors know your prices or your client database. We check the specific fact of data being passed on among those who had access.", slug: "leak" },
      ],
    },
    why: {
      title: "Why EyeDetect is more cost-effective for mass screening",
      rows: [
        ["", "EyeDetect", "Classic polygraph"],
        ["People per day", "6–8", "2–3"],
        ["Time per person", "30–45 minutes", "2–4 hours"],
        ["Sensors on the body", "none", "cuff, sensors, electrodes"],
        ["Who evaluates", "the algorithm, the same for everyone", "the polygraph examiner"],
        ["Report", "right after the test, for each person", "1–3 days"],
        ["Time of the whole team", "one working day", "several days"],
      ],
    },
    process: {
      title: "How it is organized",
      steps: [
        { title: "Agreeing on the topics", text: "We discuss what exactly is being checked and formulate 2–4 questions, the same for everyone. You receive the text of the questions in advance." },
        { title: "Employee consent", text: "Each person signs a consent form and reads the questions. Refusal is not proof of guilt, and no one may be forced." },
        { title: "Testing at your office", text: "A quiet room with a table and a power outlet is needed. We bring the equipment. 6–8 people per working day." },
        { title: "Reports and debrief", text: "The same day you receive a PDF on each person and an explanation of how to read the scores. The decision is then yours." },
      ],
    },
    pricing: {
      title: "What it costs",
      note: "Business pricing is individual: it depends on the number of people, the topics, and the city. Tell us how many people and what needs to be checked, and we will send a quote the same day.",
      travel: "Travel within the Lviv region is free. Other regions of Ukraine: UAH 12,000 all-inclusive, test included. Abroad, travel and premises are charged separately.",
    },
    industries: {
      title: "Solutions for your industry",
      items: [
        { title: "Banks and financial companies", text: "Access to accounts, loans, the client database.", href: "/for/finance" },
        { title: "Security companies", text: "Keys, codes, client sites.", href: "/for/security" },
        { title: "HR and recruiters", text: "Screening candidates from a smartphone before the interview.", href: "/for/hr" },
        { title: "Lawyers and private investigators", text: "Assessing clients, witnesses, and versions of events.", href: "/for/lawyers" },
        { title: "Recruiting agencies", text: "Candidate screening as a service for your clients.", href: "/for/recruiting" },
        { title: "Other industries", text: "Logistics, retail, miltech, clinics, insurers, recruiting and more.", href: "/for" },
      ],
    },
    legal: {
      title: "Legality and confidentiality",
      items: [
        "Screening is legal with the employee's written consent. Questions concern work only: money, property, information, documents. We do not touch private life.",
        "The result is not admissible as evidence in court. It is grounds for an internal decision, a conversation, or an internal investigation.",
        "Reports go only to the authorized person. We do not keep results longer than needed to deliver them, and we do not discuss screenings with third parties.",
      ],
    },
    faq: [
      { q: "Can an employee refuse the test?", a: "Yes. The test is strictly voluntary. A refusal without explanation is visible to the manager, who draws their own conclusions. An employment contract can provide for screening in positions with access to valuables." },
      { q: "How many people per day?", a: "6–8 people for an on-site visit to your office. For larger numbers we plan two days or two visits." },
      { q: "Can remote employees be tested?", a: "Yes, via VerifEye from a phone, from UAH 2,500 per person. For theft and investigations we recommend EyeDetect in our Lviv office or on-site." },
      { q: "What does the manager receive?", a: "A PDF report on each person: a score from 1 to 99 for each question, an overall conclusion, and details of the answers. Plus an explanation from the examiner." },
      { q: "Should the team be notified in advance?", a: "Yes. The announcement of a screening produces results by itself: some of the offenders confess or resign before the test." },
    ],
    cta: { title: "Get a proposal for your company", text: "Tell us how many people and what needs to be checked. We will send a quote and available dates the same day.", button: "Get a proposal" },
  },
};

export const getBusinessPage = (lang) => businessPage[lang] || businessPage.uk;
