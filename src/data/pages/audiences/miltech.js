// Сторінка /for/miltech: мілтех, оборонні виробники, підрядники ЗСУ.
// Перевірка перед наданням доступу до чутливої інформації і періодично. Ключі: uk, ru, en.

import { cta, how } from "../audiencesShared";

export const miltech = {
  slug: "miltech",
  uk: {
    seo: { title: "Детектор брехні для мілтех-компанії: допуск до чутливих даних", description: "EyeDetect для оборонних виробників і підрядників ЗСУ: перевірка перед допуском до креслень і постачальників, зв'язки з РФ, витік, крадіжка комплектуючих.", keywords: ["детектор брехні для мілтех", "поліграф оборонне підприємство", "перевірка працівників допуск до інформації", "перевірка на зв'язки з РФ", "EyeDetect підрядник ЗСУ"], crumbHome: "Головна", crumb: "Для мілтех і оборонних компаній" },
    hero: { eyebrow: "Мілтех-компаніям, оборонним виробникам і підрядникам ЗСУ", h1: "Детектор брехні для мілтех-компаній і оборонних підрядників", sub: "Креслення, постачальники, обсяги і терміни поставок цікавлять противника не менше, ніж готовий виріб. EyeDetect перевіряє факти: контакти з РФ і окупованими територіями, передача файлів стороннім, крадіжка комплектуючих. Тест доповнює внутрішню перевірку служби безпеки і проводиться на вашому об'єкті.", facts: ["виїзд на об'єкт по всій Україні", "30–45 хвилин на людину, 6–8 за день", "точність 86–90%", "звіт лише уповноваженій особі"] },
    blocks: [
      { type: "cards", title: "Де це допомагає", items: [
        { title: "Допуск до чутливої інформації", text: "Перед тим як інженер, технолог чи менеджер закупівель отримає доступ до креслень, технічних завдань і бази постачальників. Один тест до надання доступу, а не розслідування після витоку." },
        { title: "Зв'язки з РФ і окупованими територіями", text: "Контакти з представниками РФ, поїздки на окуповані території, передача інформації родичам чи знайомим за період. Питання лише про факти контактів, не про погляди чи походження." },
        { title: "Витік креслень і документації", text: "Копіювання файлів на носії, фотографування на виробництві, пересилання через месенджери. Перевірка тих, хто мав доступ до конкретного проєкту." },
        { title: "База постачальників і ціни", text: "Хто у вас купує плати, оптику, двигуни, акумулятори і за скільки, часто цінніше за сам виріб. Витік цієї інформації зриває поставки. Перевіряємо факт передачі даних." },
        { title: "Крадіжка комплектуючих", text: "Дрібні компоненти зникають зі складу і виробництва непомітно, а на ринку мають ціну. Перевірка кола осіб з доступом звужує коло за один день." },
        { title: "Періодична перевірка", text: "Раз на 6–12 місяців для тих, хто працює з чутливою інформацією. Коли команда знає, що перевірка є частиною правил, кількість порушень падає." },
      ] },
      { type: "list", title: "Що можна перевірити", cols: 3, items: ["передача креслень чи файлів стороннім", "контакти з представниками РФ за період", "поїздки на окуповані території", "фотографування на виробництві", "крадіжка комплектуючих і матеріалів", "передача даних про постачальників і ціни", "хабарі від постачальників", "приховані зв'язки з конкурентами", "неправдиві дані при оформленні на роботу"] },
      how.uk,
      { type: "text", title: "Що важливо знати службі безпеки", paragraphs: [
        "Тест доповнює внутрішню перевірку служби безпеки, а не замінює її. Він не є формальним допуском і не створює юридичних наслідків сам по собі. Результат не є доказом у суді, це підстава для рішення про доступ або службового розслідування. Перевірка проводиться лише за письмовою згодою, працівник може відмовитись.",
        "Питання стосуються лише конкретних фактів і періодів: передача файлів, контакти, поїздки, гроші, майно. Погляди, походження, родинні зв'язки як такі, здоров'я, політика і релігія не перевіряються. Текст питань ви погоджуєте заздалегідь, працівник читає їх перед тестом.",
        "Конфіденційність. Тест проходить на вашому об'єкті, у вашому приміщенні, на нашому обладнанні. Дані шифруються і надсилаються на сервер Converus для розрахунку оцінки. PDF-звіт отримує лише уповноважена особа. За бажанням тест прив'язується до номера, а не до імені, і фото не робиться. Формат: EyeDetect 30–45 хвилин на людину, 6–8 людей за день, від 5 500 ₴. виїзд по Львову і області до 50 км включено, Західна Україна +2 000 ₴, інші регіони від 12 000 ₴ разом з тестом. Ціни для бізнесу індивідуальні, розрахунок надсилаємо того ж дня.",
      ] },
      { type: "cards", title: "Коли проводити перевірку", items: [
        { title: "Перед наданням доступу", text: "Нові працівники і ті, кого переводять на проєкт із чутливою інформацією. Тест до відкриття доступу до креслень і систем." },
        { title: "Періодично", text: "Раз на 6–12 місяців для інженерів, закупівельників, складу і ІТ. Питання про період з попередньої перевірки." },
        { title: "Після інциденту", text: "Витік, нестача комплектуючих, підозра на контакт з противником. Перевірка всіх, хто мав доступ, за один-два виїзди." },
        { title: "Підрядники і тимчасовий персонал", text: "Монтажники, водії, охорона, аутсорс. Ті, хто бачить виробництво, але не проходив вашу внутрішню перевірку." },
      ], cols: 2 },
      cta.uk("EyeDetect для мілтех-компанії"),
    ],
  },
  ru: {
    seo: { title: "Детектор лжи для милтех-компании: допуск к чувствительным данным", description: "EyeDetect для оборонных производителей и подрядчиков ВСУ: проверка перед допуском к чертежам и поставщикам, связи с РФ, утечка, кража комплектующих. Выезд.", keywords: ["детектор лжи для милтех", "полиграф оборонное предприятие", "проверка сотрудников допуск к информации", "проверка на связи с РФ", "EyeDetect подрядчик ВСУ"], crumbHome: "Главная", crumb: "Для милтех и оборонных компаний" },
    hero: { eyebrow: "Милтех-компаниям, оборонным производителям и подрядчикам ВСУ", h1: "Детектор лжи для милтех-компаний и оборонных подрядчиков", sub: "Чертежи, поставщики, объёмы и сроки поставок интересуют противника не меньше, чем готовое изделие. EyeDetect проверяет факты: контакты с РФ и оккупированными территориями, передача файлов посторонним, кража комплектующих. Тест дополняет внутреннюю проверку службы безопасности и проводится на вашем объекте.", facts: ["выезд на объект по всей Украине", "30–45 минут на человека, 6–8 в день", "точность 86–90%", "отчёт только уполномоченному лицу"] },
    blocks: [
      { type: "cards", title: "Где это помогает", items: [
        { title: "Допуск к чувствительной информации", text: "Перед тем как инженер, технолог или менеджер закупок получит доступ к чертежам, техническим заданиям и базе поставщиков. Один тест до предоставления доступа, а не расследование после утечки." },
        { title: "Связи с РФ и оккупированными территориями", text: "Контакты с представителями РФ, поездки на оккупированные территории, передача информации родственникам или знакомым за период. Вопросы только о фактах контактов, не о взглядах или происхождении." },
        { title: "Утечка чертежей и документации", text: "Копирование файлов на носители, фотографирование на производстве, пересылка через мессенджеры. Проверка тех, кто имел доступ к конкретному проекту." },
        { title: "База поставщиков и цены", text: "Кто у вас покупает платы, оптику, двигатели, аккумуляторы и за сколько, часто ценнее самого изделия. Утечка этой информации срывает поставки. Проверяем факт передачи данных." },
        { title: "Кража комплектующих", text: "Мелкие компоненты исчезают со склада и производства незаметно, а на рынке имеют цену. Проверка круга лиц с доступом сужает круг за один день." },
        { title: "Периодическая проверка", text: "Раз в 6–12 месяцев для тех, кто работает с чувствительной информацией. Когда команда знает, что проверка является частью правил, количество нарушений падает." },
      ] },
      { type: "list", title: "Что можно проверить", cols: 3, items: ["передача чертежей или файлов посторонним", "контакты с представителями РФ за период", "поездки на оккупированные территории", "фотографирование на производстве", "кража комплектующих и материалов", "передача данных о поставщиках и ценах", "взятки от поставщиков", "скрытые связи с конкурентами", "ложные данные при оформлении на работу"] },
      how.ru,
      { type: "text", title: "Что важно знать службе безопасности", paragraphs: [
        "Тест дополняет внутреннюю проверку службы безопасности, а не заменяет её. Он не является формальным допуском и не создаёт юридических последствий сам по себе. Результат не является доказательством в суде, это основание для решения о доступе или служебного расследования. Проверка проводится только с письменного согласия, сотрудник может отказаться.",
        "Вопросы касаются только конкретных фактов и периодов: передача файлов, контакты, поездки, деньги, имущество. Взгляды, происхождение, родственные связи как таковые, здоровье, политика и религия не проверяются. Текст вопросов вы согласовываете заранее, сотрудник читает их перед тестом.",
        "Конфиденциальность. Тест проходит на вашем объекте, в вашем помещении, на нашем оборудовании. Данные шифруются и отправляются на сервер Converus для расчёта оценки. PDF-отчёт получает только уполномоченное лицо. По желанию тест привязывается к номеру, а не к имени, и фото не делается. Формат: EyeDetect 30–45 минут на человека, 6–8 человек в день, от 5 500 ₴. выезд по Львову и области до 50 км включён, Западная Украина +2 000 ₴, другие регионы от 12 000 ₴ вместе с тестом. Цены для бизнеса индивидуальные, расчёт отправляем в тот же день.",
      ] },
      { type: "cards", title: "Когда проводить проверку", items: [
        { title: "Перед предоставлением доступа", text: "Новые сотрудники и те, кого переводят на проект с чувствительной информацией. Тест до открытия доступа к чертежам и системам." },
        { title: "Периодически", text: "Раз в 6–12 месяцев для инженеров, закупщиков, склада и ИТ. Вопросы о периоде с предыдущей проверки." },
        { title: "После инцидента", text: "Утечка, недостача комплектующих, подозрение на контакт с противником. Проверка всех, кто имел доступ, за один-два выезда." },
        { title: "Подрядчики и временный персонал", text: "Монтажники, водители, охрана, аутсорс. Те, кто видит производство, но не проходил вашу внутреннюю проверку." },
      ], cols: 2 },
      cta.ru("EyeDetect для милтех-компании"),
    ],
  },
  en: {
    seo: { title: "Lie Detector for Defense Tech Companies: Sensitive Access", description: "EyeDetect for defense manufacturers and military contractors: screening before access to drawings and suppliers, ties to Russia, leaks, theft of components.", keywords: ["lie detector for defense tech", "polygraph for defense manufacturer", "employee screening for sensitive access", "screening for ties to Russia", "EyeDetect defense contractor"], crumbHome: "Home", crumb: "For defense tech companies" },
    hero: { eyebrow: "For defense tech companies, defense manufacturers, and contractors of the Armed Forces", h1: "Lie Detector for Defense Tech Companies and Contractors", sub: "Drawings, suppliers, volumes, and delivery dates interest the enemy no less than the finished product. EyeDetect checks facts: contacts with Russia and occupied territories, passing files to outsiders, theft of components. The test complements your security department's internal vetting and is run at your site.", facts: ["on-site anywhere in Ukraine", "30–45 minutes per person, 6–8 a day", "86–90% accuracy", "report only to the authorized person"] },
    blocks: [
      { type: "cards", title: "Where it helps", items: [
        { title: "Access to sensitive information", text: "Before an engineer, process technologist, or procurement manager gets access to drawings, technical specifications, and the supplier database. One test before granting access, instead of an investigation after a leak." },
        { title: "Ties to Russia and occupied territories", text: "Contacts with representatives of Russia, trips to occupied territories, passing information to relatives or acquaintances within a period. Questions only about the facts of contact, not about views or origin." },
        { title: "Leaks of drawings and documentation", text: "Copying files to media, taking photos on the production floor, forwarding via messengers. Testing those who had access to a specific project." },
        { title: "Supplier database and prices", text: "Who sells you boards, optics, motors, batteries, and at what price is often worth more than the product itself. A leak of this information disrupts supply. We test the fact of passing on the data." },
        { title: "Theft of components", text: "Small components disappear from the warehouse and production floor unnoticed, and they have a market price. Testing the people with access narrows the circle in a single day." },
        { title: "Periodic screening", text: "Every 6–12 months for those who work with sensitive information. When the team knows screening is part of the rules, the number of violations drops." },
      ] },
      { type: "list", title: "What can be tested", cols: 3, items: ["passing drawings or files to outsiders", "contacts with representatives of Russia within a period", "trips to occupied territories", "taking photos on the production floor", "theft of components and materials", "passing on supplier and pricing data", "bribes from suppliers", "hidden ties to competitors", "false information when being hired"] },
      how.en,
      { type: "text", title: "What the security department should know", paragraphs: [
        "The test complements the security department's internal vetting; it does not replace it. It is not a formal clearance and creates no legal consequences on its own. The result is not admissible evidence in court; it is a basis for an access decision or an internal investigation. Testing is done only with written consent, and the employee may refuse.",
        "Questions concern only specific facts and periods: passing files, contacts, trips, money, property. Views, origin, family ties as such, health, politics, and religion are not tested. You approve the wording of the questions in advance, and the employee reads them before the test.",
        "Confidentiality. The test takes place at your site, in your premises, on our equipment. The data is encrypted and sent to the Converus server for scoring. Only the authorized person receives the PDF report. On request, the test is tied to a number rather than a name, and no photo is taken. Format: EyeDetect, 30–45 minutes per person, 6–8 people a day, from UAH 5,500. Travel within Lviv and up to 50 km around it is included, Western Ukraine +UAH 2,000, other regions from UAH 12,000 including the test. Business pricing is individual; we send a quote the same day.",
      ] },
      { type: "cards", title: "When to run the screening", items: [
        { title: "Before granting access", text: "New employees and those being moved to a project with sensitive information. A test before access to drawings and systems is opened." },
        { title: "Periodically", text: "Every 6–12 months for engineers, procurement, warehouse, and IT. Questions cover the period since the previous screening." },
        { title: "After an incident", text: "A leak, missing components, a suspected contact with the enemy. Testing everyone who had access in one or two site visits." },
        { title: "Contractors and temporary staff", text: "Installers, drivers, guards, outsourced staff. Those who see the production floor but have not been through your internal vetting." },
      ], cols: 2 },
      cta.en("EyeDetect for defense tech companies"),
    ],
  },
};
