// Сторінка /for/logistics: логістика, дистрибуція, склади, автопарки. Ключі: uk, ru, en.

import { cta, how } from "../audiencesShared";

export const logistics = {
  slug: "logistics",
  uk: {
    seo: { title: "Детектор брехні для логістики: водії, склад, експедитори", description: "EyeDetect для логістики, складів і автопарків: недостачі, злив пального, «ліві» рейси, крадіжки зі складу. Виїзд на склад, 6–8 осіб за день, звіт одразу.", keywords: ["детектор брехні для логістики", "перевірка водіїв на поліграфі", "перевірка комірників", "недостача на складі перевірка", "EyeDetect склад", "поліграф автопарк"], crumbHome: "Головна", crumb: "Для логістики і складів" },
    hero: { eyebrow: "Логістика, дистрибуція, склади, автопарки", h1: "Детектор брехні для логістичної компанії", sub: "Водій, експедитор і комірник щодня залишаються наодинці з товаром, пальним і накладними. EyeDetect за 30–45 хвилин перевіряє конкретні факти: чи зливав пальне, чи возив «лівий» вантаж, чи виносив зі складу. Приїжджаємо на склад або базу і перевіряємо 6–8 осіб за день.", facts: ["6–8 осіб за день на складі", "30–45 хвилин на людину", "точність 86–90%", "звіт по кожному одразу"] },
    blocks: [
      { type: "cards", title: "Де це допомагає", items: [
        { title: "Недостача після інвентаризації", text: "Ревізія показала мінус, а доступ до зони мали десять людей. Тест на одне питання для кожного, хто мав доступ, за день показує, кого перевіряти далі, а кого зняти з підозри." },
        { title: "Злив пального і «ліві» рейси", text: "Витрата не сходиться з GPS і нормами, у маршруті з'являються зайві кілометри. Питання про конкретні дії за конкретний період: чи зливали пальне, чи перевозили вантаж не за накладною." },
        { title: "Крадіжка зі складу", text: "Товар зникає з полиць, палет або під час приймання. Перевірка комірників, вантажників і водіїв-експедиторів, які працювали у зміну." },
        { title: "Змова з клієнтом чи постачальником", text: "Водій або експедитор домовляється з точкою: недовіз оформлюють як повну поставку, різницю ділять. Тест перевіряє факт домовленості і отриманої вигоди." },
        { title: "Найм водіїв і комірників", text: "Перш ніж віддати людині фуру з товаром на мільйон, корисно знати, чи були крадіжки на попередній роботі і чи вживає вона наркотики або алкоголь за кермом." },
        { title: "Планові перевірки", text: "Раз на пів року або рік для матеріально відповідальних осіб. Коли команда знає про регулярну перевірку, кількість недостач падає ще до першого тесту." },
      ] },
      { type: "list", title: "Що можна перевірити", cols: 3, items: ["крадіжка товару зі складу або з машини", "злив або продаж пального", "перевезення вантажу повз накладні", "змова з клієнтом чи постачальником", "підміна товару при прийомці", "фіктивні пошкодження і списання", "вживання наркотиків або алкоголю за кермом", "передача даних про маршрути і вантажі стороннім", "крадіжки на попередніх місцях роботи"] },
      how.uk,
      { type: "table", title: "Який формат обрати", columns: ["", "EyeDetect з виїздом", "VerifEye онлайн"], rows: [
        ["Де проходить", "на вашому складі чи базі", "на телефоні водія, у будь-якому місті"],
        ["Час на людину", "30–45 хвилин", "близько 10 хвилин"],
        ["Осіб за день", "6–8", "без обмеження, кожен у свій час"],
        ["Точність", "86–90%", "84–89%"],
        ["Кому підходить", "склад, автопарк, службове розслідування", "водії в рейсі, філії в інших містах, кандидати з регіонів"],
        ["Вартість", "від 5 500 ₴, для бізнесу за запитом", "від 2 500 ₴"],
      ] },
      { type: "text", title: "Що варто знати керівнику логістики", paragraphs: [
        "Перевірка проходить лише за письмовою згодою працівника, він може відмовитись. Питання стосуються тільки роботи: товар, пальне, накладні, маршрути, гроші. Ми не питаємо про здоров'я, політику, релігію чи приватне життя. Результат в Україні не є доказом у суді, це підстава для внутрішнього рішення чи службового розслідування.",
        "Для складу або автопарку зручніший виїзд: привозимо обладнання, потрібна тиха кімната зі столом і розеткою. Виїзд по Львівській області входить у вартість, по Західній Україні +2 000 ₴, в інші регіони від 12 000 ₴ разом із тестом. Для водіїв у рейсі і філій в інших містах є VerifEye: тест зі смартфона за 10 хвилин.",
        "Тест проводить Наталя Мариняк, психолог, сертифікований Converus Test Proctor. Кабінет у Львові, вул. Городоцька, 45. Ціни для бізнесу залежать від кількості осіб, тем і міста, розрахунок надсилаємо того ж дня.",
      ] },
      cta.uk("EyeDetect для логістичної компанії"),
    ],
  },
  ru: {
    seo: { title: "Детектор лжи для логистики: водители, склад, экспедиторы", description: "EyeDetect для логистики, складов и автопарков: недостачи, слив топлива, «левые» рейсы, кражи со склада. Выезд на склад, 6–8 человек в день, отчёт сразу.", keywords: ["детектор лжи для логистики", "проверка водителей на полиграфе", "проверка кладовщиков", "недостача на складе проверка", "EyeDetect склад", "полиграф автопарк"], crumbHome: "Главная", crumb: "Для логистики и складов" },
    hero: { eyebrow: "Логистика, дистрибуция, склады, автопарки", h1: "Детектор лжи для логистической компании", sub: "Водитель, экспедитор и кладовщик каждый день остаются наедине с товаром, топливом и накладными. EyeDetect за 30–45 минут проверяет конкретные факты: сливал ли топливо, возил ли «левый» груз, выносил ли со склада. Приезжаем на склад или базу и проверяем 6–8 человек в день.", facts: ["6–8 человек в день на складе", "30–45 минут на человека", "точность 86–90%", "отчёт по каждому сразу"] },
    blocks: [
      { type: "cards", title: "Где это помогает", items: [
        { title: "Недостача после инвентаризации", text: "Ревизия показала минус, а доступ к зоне имели десять человек. Тест на один вопрос для каждого, кто имел доступ, за день показывает, кого проверять дальше, а кого снять с подозрения." },
        { title: "Слив топлива и «левые» рейсы", text: "Расход не сходится с GPS и нормами, в маршруте появляются лишние километры. Вопросы о конкретных действиях за конкретный период: сливали ли топливо, перевозили ли груз не по накладной." },
        { title: "Кража со склада", text: "Товар исчезает с полок, паллет или во время приёмки. Проверка кладовщиков, грузчиков и водителей-экспедиторов, которые работали в смену." },
        { title: "Сговор с клиентом или поставщиком", text: "Водитель или экспедитор договаривается с точкой: недовоз оформляют как полную поставку, разницу делят. Тест проверяет факт договорённости и полученной выгоды." },
        { title: "Наём водителей и кладовщиков", text: "Прежде чем отдать человеку фуру с товаром на миллион, полезно знать, были ли кражи на предыдущей работе и употребляет ли он наркотики или алкоголь за рулём." },
        { title: "Плановые проверки", text: "Раз в полгода или год для материально ответственных лиц. Когда команда знает о регулярной проверке, количество недостач падает ещё до первого теста." },
      ] },
      { type: "list", title: "Что можно проверить", cols: 3, items: ["кража товара со склада или из машины", "слив или продажа топлива", "перевозка груза мимо накладных", "сговор с клиентом или поставщиком", "подмена товара при приёмке", "фиктивные повреждения и списания", "употребление наркотиков или алкоголя за рулём", "передача данных о маршрутах и грузах посторонним", "кражи на предыдущих местах работы"] },
      how.ru,
      { type: "table", title: "Какой формат выбрать", columns: ["", "EyeDetect с выездом", "VerifEye онлайн"], rows: [
        ["Где проходит", "на вашем складе или базе", "на телефоне водителя, в любом городе"],
        ["Время на человека", "30–45 минут", "около 10 минут"],
        ["Человек в день", "6–8", "без ограничения, каждый в своё время"],
        ["Точность", "86–90%", "84–89%"],
        ["Кому подходит", "склад, автопарк, служебное расследование", "водители в рейсе, филиалы в других городах, кандидаты из регионов"],
        ["Стоимость", "от 5 500 ₴, для бизнеса по запросу", "от 2 500 ₴"],
      ] },
      { type: "text", title: "Что стоит знать руководителю логистики", paragraphs: [
        "Проверка проходит только с письменного согласия сотрудника, он может отказаться. Вопросы касаются только работы: товар, топливо, накладные, маршруты, деньги. Мы не спрашиваем о здоровье, политике, религии или частной жизни. Результат в Украине не является доказательством в суде, это основание для внутреннего решения или служебного расследования.",
        "Для склада или автопарка удобнее выезд: привозим оборудование, нужна тихая комната со столом и розеткой. Выезд по Львовской области входит в стоимость, по Западной Украине +2 000 ₴, в другие регионы от 12 000 ₴ вместе с тестом. Для водителей в рейсе и филиалов в других городах есть VerifEye: тест со смартфона за 10 минут.",
        "Тест проводит Наталия Мариняк, психолог, сертифицированный Converus Test Proctor. Кабинет во Львове, ул. Городоцкая, 45. Цены для бизнеса зависят от количества человек, тем и города, расчёт отправляем в тот же день.",
      ] },
      cta.ru("EyeDetect для логистической компании"),
    ],
  },
  en: {
    seo: { title: "Lie Detector for Logistics: Drivers, Warehouse, Forwarders", description: "EyeDetect for logistics, warehouses, and fleets: shortages, fuel siphoning, off-the-books trips, warehouse theft. On-site, 6–8 people a day, report right away.", keywords: ["lie detector for logistics", "polygraph test for drivers", "warehouse staff screening", "warehouse shortage investigation", "EyeDetect warehouse", "polygraph for fleets"], crumbHome: "Home", crumb: "For logistics and warehouses" },
    hero: { eyebrow: "Logistics, distribution, warehouses, fleets", h1: "Lie Detector for a Logistics Company", sub: "Drivers, forwarders, and warehouse staff are alone with goods, fuel, and delivery notes every day. In 30–45 minutes EyeDetect checks specific facts: siphoning fuel, carrying off-the-books cargo, taking goods out of the warehouse. We come to your warehouse or depot and test 6–8 people a day.", facts: ["6–8 people a day at the warehouse", "30–45 minutes per person", "86–90% accuracy", "report on each person right away"] },
    blocks: [
      { type: "cards", title: "Where it helps", items: [
        { title: "Shortage after a stock count", text: "The audit shows a loss, and ten people had access to the area. A single-issue test for everyone with access shows in one day whom to look at further and whom to clear." },
        { title: "Fuel siphoning and off-the-books trips", text: "Consumption does not match GPS and norms, extra kilometers appear on the route. Questions about specific actions within a specific period: siphoning fuel, carrying cargo not listed on the delivery note." },
        { title: "Warehouse theft", text: "Goods disappear from shelves, pallets, or during receiving. Testing of the warehouse staff, loaders, and driver-forwarders who worked the shift." },
        { title: "Collusion with a customer or supplier", text: "A driver or forwarder makes a deal with the delivery point: a short delivery is recorded as complete and the difference is split. The test checks the fact of the deal and the benefit received." },
        { title: "Hiring drivers and warehouse staff", text: "Before handing someone a truck with a million worth of goods, it helps to know whether they stole at a previous job and whether they use drugs or alcohol while driving." },
        { title: "Scheduled testing", text: "Every six months or once a year for staff with material responsibility. When the team knows testing is regular, the number of shortages drops before the first test." },
      ] },
      { type: "list", title: "What can be tested", cols: 3, items: ["theft of goods from the warehouse or vehicle", "siphoning or selling fuel", "carrying cargo not on the delivery notes", "collusion with a customer or supplier", "substituting goods during receiving", "fake damage and write-offs", "drug or alcohol use while driving", "passing route and cargo data to outsiders", "theft at previous jobs"] },
      how.en,
      { type: "table", title: "Which format to choose", columns: ["", "EyeDetect on-site", "VerifEye online"], rows: [
        ["Where", "at your warehouse or depot", "on the driver's phone, in any city"],
        ["Time per person", "30–45 minutes", "about 10 minutes"],
        ["People per day", "6–8", "no limit, each at their own time"],
        ["Accuracy", "86–90%", "84–89%"],
        ["Best for", "warehouse, fleet, internal investigation", "drivers on the road, branches in other cities, candidates from other regions"],
        ["Price", "from UAH 5,500, business pricing on request", "from UAH 2,500"],
      ] },
      { type: "text", title: "What a logistics manager should know", paragraphs: [
        "Testing is done only with the employee's written consent, and they may refuse. Questions concern work only: goods, fuel, delivery notes, routes, money. We do not ask about health, politics, religion, or private life. In Ukraine the result is not admissible evidence in court; it is grounds for an internal decision or an internal investigation.",
        "For a warehouse or fleet, on-site testing is more convenient: we bring the equipment and need a quiet room with a table and a power outlet. Travel within Lviv and up to 50 km around it is included, Western Ukraine is +UAH 2,000, other regions from UAH 12,000 including the test. For drivers on the road and branches in other cities there is VerifEye: a 10-minute test from a smartphone.",
        "The test is conducted by Nataliia Marynyak, psychologist, certified Converus Test Proctor. Office in Lviv, 45 Horodotska St. Business pricing depends on the number of people, topics, and city; we send a quote the same day.",
      ] },
      cta.en("EyeDetect for a logistics company"),
    ],
  },
};
