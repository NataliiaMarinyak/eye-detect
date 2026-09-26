// Сторінки для окремих аудиторій /for/[slug]: юристи, банки, охоронні компанії,
// HR, психологи. Побудовано за галузевими флаєрами Converus, адаптовано до наших
// послуг в Україні (EyeDetect у Львові або з виїздом, VerifEye онлайн). Ключі: uk, ru, en.

import { cta, how } from "./audiencesShared";
import { recruiting } from "./audiences/recruiting";
import { miltech } from "./audiences/miltech";
import { remoteTeams } from "./audiences/remote-teams";
import { logistics } from "./audiences/logistics";
import { retail } from "./audiences/retail";
import { realEstate } from "./audiences/real-estate";
import { medical } from "./audiences/medical";
import { household } from "./audiences/household";
import { insurance } from "./audiences/insurance";
import { franchise } from "./audiences/franchise";

export const audiences = [
  {
    slug: "lawyers",
    uk: {
      seo: { title: "Детектор брехні для адвокатів і детективів — EyeDetect", description: "Тест EyeDetect за 30–45 хвилин для оцінки клієнтів, свідків і версій у справі. Точність 86–90% у тестах на одне питання. Звіт одразу, Львів або виїзд.", keywords: ["детектор брехні для адвоката", "поліграф для детектива", "перевірка свідка детектор брехні", "EyeDetect розслідування"], crumbHome: "Головна", crumb: "Для юристів і детективів" },
      hero: { eyebrow: "Юристам і приватним детективам", h1: "Детектор брехні для адвокатів і детективів", sub: "EyeDetect дає адвокату і детективу швидку відповідь: чи правдива конкретна версія подій. Тест на одне питання триває 30–45 хвилин, оцінку рахує алгоритм, а не людина. Результат не є доказом у суді, але економить тижні роботи не в тому напрямку.", facts: ["30–45 хвилин на тест", "точність 86–90%", "звіт одразу після тесту", "Львів або виїзд"] },
      blocks: [
        { type: "cards", title: "Де це допомагає", items: [
          { title: "Оцінка справи на старті", text: "Перш ніж будувати захист, корисно знати, чи каже клієнт правду про ключовий факт. Тест дає відповідь за одну зустріч і дозволяє обрати реалістичну стратегію." },
          { title: "Свідки і сторони конфлікту", text: "Коли є лише «слово проти слова», тест показує, чия версія тримається. Часто цього достатньо, щоб сторони домовились без суду." },
          { title: "Внутрішні розслідування", text: "Крадіжка, витік, шахрайство в компанії клієнта: перевірка тих, хто мав доступ, звужує коло за один день." },
          { title: "Сімейні спори", text: "Приховані активи при розлученні, невірність, порушення домовленостей. Питання про конкретні факти за конкретний період." },
          { title: "Переговори", text: "Результат тесту, який підтверджує версію клієнта, стає аргументом у досудових переговорах, навіть якщо формально доказом не є." },
          { title: "Обвинувачення без доказів", text: "Тест допомагає невинній людині показати, що її версія правдива, коли інших підтверджень немає." },
        ] },
        { type: "list", title: "Що можна перевірити", cols: 3, items: ["крадіжка грошей, товару, зброї, пального", "шахрайство і підроблені документи", "витік конфіденційної інформації", "хабарі і неправомірна вигода", "приховані активи і рахунки", "вживання наркотиків", "невірність: фізичний контакт, листування", "насильство або погрози", "участь у події: виконавець, спільник, свідок"] },
        how.uk,
        { type: "text", title: "Що варто знати юристу", paragraphs: [
          "Результат EyeDetect в Україні не є судовим доказом. Це інструмент оцінки, як і будь-який детектор брехні. Єдиний відомий випадок допуску результатів EyeDetect як доказу стався у суді штату Нью-Мексико у 2018 році. Замість «висновку для суду» ми готуємо до PDF-звіту супровідний лист спеціаліста: що перевіряли, як, і що означає результат.",
          "Тест перевіряє лише факти і події, а не наміри чи думки. Питання формулюються про конкретну дію за конкретний період, наприклад «чи брали ви гроші з сейфа після 1 березня».",
          "Людина проходить тест лише за письмовою згодою. Перед тестом вона читає всі питання, тому несподіванок немає. Якщо клієнт хоче пройти тест і додатково класичний поліграф, ці два методи вимірюють різне. За даними Converus, якщо тести провести окремо і їхні результати збігаються, упевненість у висновку близько 97%. Це не точність одного тесту EyeDetect.",
        ] },
        cta.uk("EyeDetect для юристів"),
      ],
    },
    ru: {
      seo: { title: "Детектор лжи для адвокатов и детективов — EyeDetect", description: "Тест EyeDetect за 30–45 минут для оценки клиентов, свидетелей и версий в деле. Точность 86–90% в тестах на один вопрос. Отчёт сразу, Львов или выезд.", keywords: ["детектор лжи для адвоката", "полиграф для детектива", "проверка свидетеля детектор лжи", "EyeDetect расследование"], crumbHome: "Главная", crumb: "Для юристов и детективов" },
      hero: { eyebrow: "Юристам и частным детективам", h1: "Детектор лжи для адвокатов и детективов", sub: "EyeDetect даёт адвокату и детективу быстрый ответ: правдива ли конкретная версия событий. Тест на один вопрос длится 30–45 минут, оценку считает алгоритм, а не человек. Результат не является доказательством в суде, но экономит недели работы не в том направлении.", facts: ["30–45 минут на тест", "точность 86–90%", "отчёт сразу после теста", "Львов или выезд"] },
      blocks: [
        { type: "cards", title: "Где это помогает", items: [
          { title: "Оценка дела на старте", text: "Прежде чем строить защиту, полезно знать, говорит ли клиент правду о ключевом факте. Тест даёт ответ за одну встречу и позволяет выбрать реалистичную стратегию." },
          { title: "Свидетели и стороны конфликта", text: "Когда есть только «слово против слова», тест показывает, чья версия держится. Часто этого достаточно, чтобы стороны договорились без суда." },
          { title: "Внутренние расследования", text: "Кража, утечка, мошенничество в компании клиента: проверка тех, кто имел доступ, сужает круг за один день." },
          { title: "Семейные споры", text: "Скрытые активы при разводе, неверность, нарушение договорённостей. Вопросы о конкретных фактах за конкретный период." },
          { title: "Переговоры", text: "Результат теста, подтверждающий версию клиента, становится аргументом в досудебных переговорах, даже если формально доказательством не является." },
          { title: "Обвинение без доказательств", text: "Тест помогает невиновному человеку показать, что его версия правдива, когда других подтверждений нет." },
        ] },
        { type: "list", title: "Что можно проверить", cols: 3, items: ["кража денег, товара, оружия, топлива", "мошенничество и поддельные документы", "утечка конфиденциальной информации", "взятки и неправомерная выгода", "скрытые активы и счета", "употребление наркотиков", "неверность: физический контакт, переписка", "насилие или угрозы", "участие в событии: исполнитель, сообщник, свидетель"] },
        how.ru,
        { type: "text", title: "Что стоит знать юристу", paragraphs: [
          "Результат EyeDetect в Украине не является судебным доказательством. Это инструмент оценки, как и любой детектор лжи. Единственный известный случай допуска результатов EyeDetect как доказательства произошёл в суде штата Нью-Мексико в 2018 году. Вместо «заключения для суда» мы готовим к PDF-отчёту сопроводительное письмо специалиста: что проверяли, как и что означает результат.",
          "Тест проверяет только факты и события, а не намерения или мысли. Вопросы формулируются о конкретном действии за конкретный период, например «брали ли вы деньги из сейфа после 1 марта».",
          "Человек проходит тест только с письменного согласия. Перед тестом он читает все вопросы, поэтому неожиданностей нет. Если клиент хочет пройти тест и дополнительно классический полиграф, эти два метода измеряют разное. По данным Converus, если тесты провести отдельно и их результаты совпадают, уверенность в выводе около 97%. Это не точность одного теста EyeDetect.",
        ] },
        cta.ru("EyeDetect для юристов"),
      ],
    },
    en: {
      seo: { title: "Lie Detector for Lawyers and Investigators — EyeDetect", description: "A 30–45 minute EyeDetect test to assess clients, witnesses and versions in a case. 86–90% accuracy in single-issue tests. Report right after, Lviv or on-site.", keywords: ["lie detector for lawyers", "polygraph for private investigators", "witness lie detector test", "EyeDetect investigation"], crumbHome: "Home", crumb: "For lawyers and investigators" },
      hero: { eyebrow: "For lawyers and private investigators", h1: "Lie Detector for Lawyers and Private Investigators", sub: "EyeDetect gives a lawyer or investigator a fast answer: is a specific version of events true? A single-issue test takes 30–45 minutes, and the score is computed by an algorithm, not a person. The result is not admissible evidence in court, but it saves weeks of work in the wrong direction.", facts: ["30–45 minutes per test", "86–90% accuracy", "report right after the test", "Lviv or on-site"] },
      blocks: [
        { type: "cards", title: "Where it helps", items: [
          { title: "Assessing a case at the start", text: "Before building a defense, it helps to know whether the client is telling the truth about the key fact. The test gives an answer in one meeting and lets you choose a realistic strategy." },
          { title: "Witnesses and parties to a dispute", text: "When it is only one word against another, the test shows whose version holds up. Often that is enough for the parties to settle without going to court." },
          { title: "Internal investigations", text: "Theft, a leak, or fraud at a client's company: testing those who had access narrows the circle in a single day." },
          { title: "Family disputes", text: "Hidden assets in a divorce, infidelity, broken agreements. Questions about specific facts within a specific period." },
          { title: "Negotiations", text: "A test result that confirms the client's version becomes an argument in pre-trial negotiations, even though it is not formally evidence." },
          { title: "Accusations without evidence", text: "The test helps an innocent person show that their version is true when there is no other corroboration." },
        ] },
        { type: "list", title: "What can be tested", cols: 3, items: ["theft of money, goods, weapons, fuel", "fraud and forged documents", "leaks of confidential information", "bribes and improper benefits", "hidden assets and accounts", "drug use", "infidelity: physical contact, correspondence", "violence or threats", "involvement in an event: perpetrator, accomplice, witness"] },
        how.en,
        { type: "text", title: "What a lawyer should know", paragraphs: [
          "In Ukraine, an EyeDetect result is not admissible evidence in court. It is an assessment tool, like any lie detector. The only known case of EyeDetect results being admitted as evidence occurred in a New Mexico state court in 2018. Instead of a “court opinion” we prepare a cover letter from the examiner to accompany the PDF report: what was tested, how, and what the result means.",
          "The test checks only facts and events, not intentions or thoughts. Questions are phrased about a specific action within a specific period, for example “Did you take money from the safe after March 1?”",
          "A person takes the test only with written consent. Before the test they read all the questions, so there are no surprises. If the client wants to take the test and additionally a classic polygraph, the two methods measure different things. According to Converus, if the tests are run separately and their results agree, confidence in the conclusion is about 97%. This is not the accuracy of a single EyeDetect test.",
        ] },
        cta.en("EyeDetect for lawyers"),
      ],
    },
  },
  {
    slug: "finance",
    uk: {
      seo: { title: "Детектор брехні для банків і фінкомпаній — EyeDetect", description: "EyeDetect для банків, кредитних спілок, фінансових і страхових компаній: перевірка кандидатів і тих, хто має доступ до грошей. 6–8 осіб за день, виїзд в офіс.", keywords: ["перевірка працівників банку", "поліграф для фінансової компанії", "скринінг персоналу детектор брехні", "EyeDetect банк"], crumbHome: "Головна", crumb: "Для банків і фінансових компаній" },
      hero: { eyebrow: "Банкам і фінансовим компаніям", h1: "Перевірка працівників банку на детекторі брехні", sub: "Досвідчений менеджер із 25 роками стажу і новий касир однаково мають доступ до рахунків. Перевірка кандидатів перед наймом і періодична перевірка працівників на EyeDetect знижує ризик крадіжок, шахрайства і витоку даних клієнтів.", facts: ["6–8 осіб за день", "виїзд в офіс", "звіт по кожному одразу після тесту", "письмова згода працівника"] },
      blocks: [
        { type: "cards", title: "Які ризики закриває перевірка", items: [
          { title: "Крадіжка з рахунків клієнтів", text: "Найчастіший сценарій у банках світу: працівник роками списує невеликі суми з неактивних рахунків. Періодична перевірка тих, хто має доступ, зупиняє це на старті." },
          { title: "Шахрайство з кредитами і документами", text: "Оформлення кредитів на підставних осіб, підроблені довідки, «свої» клієнти. Питання про конкретні дії за конкретний період." },
          { title: "Витік бази клієнтів", text: "Передача даних конкурентам або шахраям. Перевіряємо факт передачі у тих, хто мав доступ до бази." },
          { title: "Відмивання грошей і хабарі", text: "Проведення підозрілих операцій за винагороду, зв'язки з кримінальними групами. Стандартні теми EyeDetect для фінансового сектору." },
          { title: "Найм на позиції з доступом", text: "Касири, операціоністи, кредитні менеджери, інкасатори, ІТ-адміністратори. Один тест до підписання договору дешевший за одну крадіжку після." },
          { title: "Стримувальний ефект", text: "Коли команда знає, що періодична перевірка є частиною правил, кількість порушень падає ще до першого тесту." },
        ] },
        { type: "table", title: "Чому не класичний поліграф", columns: ["", "EyeDetect", "Класичний поліграф"], rows: [
          ["Осіб за день з одним обладнанням", "6–8", "2–3"],
          ["Час на людину", "30–45 хвилин", "2–4 години"],
          ["Датчики на тілі", "немає", "манжета, трубки, електроди"],
          ["Хто оцінює", "алгоритм, однаково для всіх", "поліграфолог"],
          ["Точність скринінгу (дані Converus і APA)", "86–90%", "85%"],
          ["Звіт", "одразу після тесту, по кожному", "1–3 дні"],
        ] },
        how.uk,
        { type: "text", title: "Конфіденційність і законність", paragraphs: [
          "Перевірка проводиться лише за письмовою згодою працівника. Питання стосуються тільки роботи: гроші, майно, інформація, документи. Приватного життя не торкаємось.",
          "Звіти отримує лише уповноважена особа. За бажанням тест прив'язується не до імені, а до номера, і фото не робиться. Результат не є доказом у суді, це підстава для внутрішнього рішення чи службового розслідування.",
          "Ціни для бізнесу індивідуальні і залежать від кількості осіб, тем і міста. Розрахунок надсилаємо того ж дня.",
        ] },
        cta.uk("EyeDetect для банку / фінкомпанії"),
      ],
    },
    ru: {
      seo: { title: "Детектор лжи для банков и финкомпаний — EyeDetect", description: "EyeDetect для банков, кредитных союзов, финансовых и страховых компаний: проверка кандидатов и тех, кто имеет доступ к деньгам. 6–8 человек в день, выезд.", keywords: ["проверка сотрудников банка", "полиграф для финансовой компании", "скрининг персонала детектор лжи", "EyeDetect банк"], crumbHome: "Главная", crumb: "Для банков и финансовых компаний" },
      hero: { eyebrow: "Банкам и финансовым компаниям", h1: "Проверка сотрудников банка на детекторе лжи", sub: "Опытный менеджер с 25 годами стажа и новый кассир одинаково имеют доступ к счетам. Проверка кандидатов перед наймом и периодическая проверка сотрудников на EyeDetect снижает риск краж, мошенничества и утечки данных клиентов.", facts: ["6–8 человек в день", "выезд в офис", "отчёт по каждому сразу после теста", "письменное согласие сотрудника"] },
      blocks: [
        { type: "cards", title: "Какие риски закрывает проверка", items: [
          { title: "Кража со счетов клиентов", text: "Самый частый сценарий в банках мира: сотрудник годами списывает небольшие суммы с неактивных счетов. Периодическая проверка тех, кто имеет доступ, останавливает это на старте." },
          { title: "Мошенничество с кредитами и документами", text: "Оформление кредитов на подставных лиц, поддельные справки, «свои» клиенты. Вопросы о конкретных действиях за конкретный период." },
          { title: "Утечка базы клиентов", text: "Передача данных конкурентам или мошенникам. Проверяем факт передачи у тех, кто имел доступ к базе." },
          { title: "Отмывание денег и взятки", text: "Проведение подозрительных операций за вознаграждение, связи с криминальными группами. Стандартные темы EyeDetect для финансового сектора." },
          { title: "Найм на позиции с доступом", text: "Кассиры, операционисты, кредитные менеджеры, инкассаторы, ИТ-администраторы. Один тест до подписания договора дешевле одной кражи после." },
          { title: "Сдерживающий эффект", text: "Когда команда знает, что периодическая проверка является частью правил, количество нарушений падает ещё до первого теста." },
        ] },
        { type: "table", title: "Почему не классический полиграф", columns: ["", "EyeDetect", "Классический полиграф"], rows: [
          ["Человек в день с одним оборудованием", "6–8", "2–3"],
          ["Время на человека", "30–45 минут", "2–4 часа"],
          ["Датчики на теле", "нет", "манжета, трубки, электроды"],
          ["Кто оценивает", "алгоритм, одинаково для всех", "полиграфолог"],
          ["Точность скрининга (данные Converus и APA)", "86–90%", "85%"],
          ["Отчёт", "сразу после теста, по каждому", "1–3 дня"],
        ] },
        how.ru,
        { type: "text", title: "Конфиденциальность и законность", paragraphs: [
          "Проверка проводится только с письменного согласия сотрудника. Вопросы касаются только работы: деньги, имущество, информация, документы. Частной жизни не касаемся.",
          "Отчёты получает только уполномоченное лицо. По желанию тест привязывается не к имени, а к номеру, и фото не делается. Результат не является доказательством в суде, это основание для внутреннего решения или служебного расследования.",
          "Цены для бизнеса индивидуальные и зависят от количества людей, тем и города. Расчёт отправляем в тот же день.",
        ] },
        cta.ru("EyeDetect для банка / финкомпании"),
      ],
    },
    en: {
      seo: { title: "Lie Detector Screening for Banks and Financial Companies", description: "EyeDetect for banks, credit unions, financial and insurance companies: screening candidates and staff with access to money. 6–8 people per day, on-site.", keywords: ["bank employee screening", "polygraph for financial companies", "employee screening lie detector", "EyeDetect bank"], crumbHome: "Home", crumb: "For banks and financial companies" },
      hero: { eyebrow: "For banks and financial companies", h1: "Lie Detector Screening for Bank Employees", sub: "A seasoned manager with 25 years of service and a new teller have the same access to accounts. Pre-employment screening and periodic EyeDetect testing of employees reduce the risk of theft, fraud, and client data leaks.", facts: ["6–8 people per day", "on-site at your office", "report on each person right after the test", "employee's written consent"] },
      blocks: [
        { type: "cards", title: "Which risks screening covers", items: [
          { title: "Theft from client accounts", text: "The most common scenario in banks worldwide: an employee skims small amounts from dormant accounts for years. Periodic testing of those with access stops it early." },
          { title: "Loan and document fraud", text: "Loans issued to straw borrowers, forged certificates, “friendly” clients. Questions about specific actions within a specific period." },
          { title: "Client database leaks", text: "Passing data to competitors or fraudsters. We test the fact of disclosure among those who had access to the database." },
          { title: "Money laundering and bribes", text: "Processing suspicious transactions for a reward, ties to criminal groups. Standard EyeDetect topics for the financial sector." },
          { title: "Hiring for positions with access", text: "Tellers, operations staff, loan officers, cash-in-transit staff, IT administrators. One test before signing the contract costs less than one theft after." },
          { title: "Deterrent effect", text: "When the team knows that periodic testing is part of the rules, the number of violations drops before the first test is even run." },
        ] },
        { type: "table", title: "Why not a classic polygraph", columns: ["", "EyeDetect", "Classic polygraph"], rows: [
          ["People per day with one device", "6–8", "2–3"],
          ["Time per person", "30–45 minutes", "2–4 hours"],
          ["Sensors on the body", "none", "cuff, tubes, electrodes"],
          ["Who scores", "algorithm, the same for everyone", "polygraph examiner"],
          ["Screening accuracy (Converus and APA data)", "86–90%", "85%"],
          ["Report", "right after the test, on each person", "1–3 days"],
        ] },
        how.en,
        { type: "text", title: "Confidentiality and legality", paragraphs: [
          "Testing is conducted only with the employee's written consent. Questions concern work only: money, property, information, documents. We do not touch on private life.",
          "Reports go only to the authorized person. On request, the test is linked to a number rather than a name, and no photo is taken. The result is not admissible evidence in court; it is grounds for an internal decision or an internal investigation.",
          "Business pricing is individual and depends on the number of people, topics, and city. We send a quote the same day.",
        ] },
        cta.en("EyeDetect for a bank / financial company"),
      ],
    },
  },
  {
    slug: "security",
    uk: {
      seo: { title: "Перевірка охоронців на детекторі брехні — EyeDetect", description: "Кандидат в охоронці може мати минуле, якого немає в базах. EyeDetect перевіряє крадіжки, наркотики, кримінальні зв'язки за 30–45 хвилин. 6–8 осіб за день.", keywords: ["перевірка охоронців детектор брехні", "поліграф охоронна компанія", "скринінг охорони", "EyeDetect охорона"], crumbHome: "Головна", crumb: "Для охоронних компаній" },
      hero: { eyebrow: "Охоронним компаніям", h1: "Перевірка охоронців на детекторі брехні", sub: "Довідка про несудимість і тест на наркотики не показують того, за що людину не спіймали. EyeDetect за 30–45 хвилин перевіряє кандидата на крадіжки, вживання наркотиків, зв'язки з кримінальними групами і чесність анкети. Розслідування інциденту на об'єкті займає 30–45 хвилин на людину.", facts: ["30–45 хвилин на кандидата", "6–8 осіб за день", "точність 86–90%", "виїзд в офіс"] },
      blocks: [
        { type: "cards", title: "Коли охоронні компанії звертаються", items: [
          { title: "Найм охоронців", text: "Перевірка перед видачею ключів, кодів і доступу до об'єктів клієнтів. Один нечесний працівник на об'єкті замовника коштує репутації всієї компанії." },
          { title: "Інцидент на об'єкті", text: "Зникла зброя, товар зі складу, хтось пустив сторонніх. Тест на одне питання для тих, хто був на зміні, звужує коло за день." },
          { title: "Періодична перевірка", text: "Раз на пів року або рік для тих, хто працює на об'єктах із високою вартістю майна. Сам факт перевірок стримує порушення." },
          { title: "Тендери і вимоги замовників", text: "Великі замовники дедалі частіше просять підтвердження, що персонал перевірено. Звіт EyeDetect закриває це питання." },
        ], cols: 2 },
        { type: "list", title: "Типові теми перевірки", cols: 3, items: ["крадіжки на попередніх місцях роботи", "вживання наркотиків", "зв'язки з кримінальними групами", "правдивість анкети і резюме", "передача кодів і ключів стороннім", "зброя і незаконні дії", "хабарі за пропуск на об'єкт", "розголошення інформації про клієнтів"] },
        how.uk,
        cta.uk("EyeDetect для охоронної компанії"),
      ],
    },
    ru: {
      seo: { title: "Проверка охранников на детекторе лжи — EyeDetect", description: "Кандидат в охранники может иметь прошлое, которого нет в базах. EyeDetect проверяет кражи, наркотики, криминальные связи за 30–45 минут. 6–8 человек в день.", keywords: ["проверка охранников детектор лжи", "полиграф охранная компания", "скрининг охраны", "EyeDetect охрана"], crumbHome: "Главная", crumb: "Для охранных компаний" },
      hero: { eyebrow: "Охранным компаниям", h1: "Проверка охранников на детекторе лжи", sub: "Справка о несудимости и тест на наркотики не показывают того, за что человека не поймали. EyeDetect за 30–45 минут проверяет кандидата на кражи, употребление наркотиков, связи с криминальными группами и честность анкеты. Расследование инцидента на объекте занимает 30–45 минут на человека.", facts: ["30–45 минут на кандидата", "6–8 человек в день", "точность 86–90%", "выезд в офис"] },
      blocks: [
        { type: "cards", title: "Когда охранные компании обращаются", items: [
          { title: "Найм охранников", text: "Проверка перед выдачей ключей, кодов и доступа к объектам клиентов. Один нечестный сотрудник на объекте заказчика стоит репутации всей компании." },
          { title: "Инцидент на объекте", text: "Пропало оружие, товар со склада, кто-то пустил посторонних. Тест на один вопрос для тех, кто был на смене, сужает круг за день." },
          { title: "Периодическая проверка", text: "Раз в полгода или год для тех, кто работает на объектах с дорогим имуществом. Сам факт проверок сдерживает нарушения." },
          { title: "Тендеры и требования заказчиков", text: "Крупные заказчики всё чаще просят подтверждение, что персонал проверен. Отчёт EyeDetect закрывает этот вопрос." },
        ], cols: 2 },
        { type: "list", title: "Типичные темы проверки", cols: 3, items: ["кражи на предыдущих местах работы", "употребление наркотиков", "связи с криминальными группами", "правдивость анкеты и резюме", "передача кодов и ключей посторонним", "оружие и незаконные действия", "взятки за пропуск на объект", "разглашение информации о клиентах"] },
        how.ru,
        cta.ru("EyeDetect для охранной компании"),
      ],
    },
    en: {
      seo: { title: "Security Guard Screening on a Lie Detector — EyeDetect", description: "A guard candidate may have a past not found in databases. EyeDetect checks theft, drugs, and criminal ties in 30–45 minutes. On-site, 6–8 people per day.", keywords: ["security guard screening lie detector", "polygraph for security companies", "security staff screening", "EyeDetect security"], crumbHome: "Home", crumb: "For security companies" },
      hero: { eyebrow: "For security companies", h1: "Lie Detector Screening for Security Guards", sub: "A clean criminal record certificate and a drug test do not show what a person was never caught for. In 30–45 minutes, EyeDetect checks a candidate for theft, drug use, ties to criminal groups, and the honesty of their application form. Investigating an incident at a site takes 30–45 minutes per person.", facts: ["30–45 minutes per candidate", "6–8 people per day", "86–90% accuracy", "on-site at your office"] },
      blocks: [
        { type: "cards", title: "When security companies come to us", items: [
          { title: "Hiring guards", text: "Screening before handing over keys, codes, and access to client sites. One dishonest employee at a client's site costs the reputation of the whole company." },
          { title: "Incident at a site", text: "Missing weapons, goods gone from a warehouse, someone let in outsiders. A single-issue test for those who were on shift narrows the circle in a day." },
          { title: "Periodic testing", text: "Every six months or once a year for those working at sites with high-value property. The mere fact of testing deters violations." },
          { title: "Tenders and client requirements", text: "Large clients increasingly ask for confirmation that staff have been screened. An EyeDetect report settles that question." },
        ], cols: 2 },
        { type: "list", title: "Typical screening topics", cols: 3, items: ["theft at previous jobs", "drug use", "ties to criminal groups", "truthfulness of the application form and resume", "passing codes and keys to outsiders", "weapons and illegal activity", "bribes for access to a site", "disclosure of client information"] },
        how.en,
        cta.en("EyeDetect for a security company"),
      ],
    },
  },
  {
    slug: "hr",
    uk: {
      seo: { title: "VerifEye для HR: перевірка кандидатів зі смартфона, 15–20 хв", description: "Кандидат проходить VerifEye на своєму телефоні до співбесіди: крадіжки, наркотики, чесність резюме. 15–20 хвилин, точність 84–89%, PDF-звіт до 5 хвилин.", keywords: ["перевірка кандидатів онлайн", "VerifEye HR", "детектор брехні для найму", "скринінг кандидатів зі смартфона"], crumbHome: "Головна", crumb: "Для HR і рекрутерів" },
      hero: { eyebrow: "HR і рекрутерам", h1: "Онлайн детектор брехні для перевірки кандидатів", sub: "VerifEye — застосунок Converus, який за 15–20 хвилин перевіряє кандидата на його власному телефоні: чи чесне резюме, чи були крадіжки на попередній роботі, чи вживає наркотики. Ми готуємо питання, надсилаємо посилання, ви отримуєте результат. Для віддалених команд і регіональних філій.", facts: ["15–20 хвилин", "з будь-якого міста", "точність 84–89%", "від 2 500 ₴ за тест"] },
      blocks: [
        { type: "cards", title: "Чотири задачі HR, які закриває VerifEye", items: [
          { title: "Найм", text: "Оцінити правдивість кандидата ще до офера і не брати ризик у команду. Особливо для позицій із доступом до грошей, товару чи даних." },
          { title: "Запобігання шахрайству", text: "Відсіяти тих, хто вже крав або обманював роботодавця. Один тест дешевший за одну нестачу." },
          { title: "Культура чесності", text: "Коли перевірка є стандартною частиною найму, знижується кількість внутрішніх конфліктів і «сірих» схем." },
          { title: "Розвиток працівників", text: "Перевірка перед підвищенням на посаду з більшою відповідальністю, щоб рішення спиралось на дані, а не на враження." },
        ], cols: 2 },
        { type: "steps", tone: "white", title: "Як це працює для віддаленого кандидата", items: [
          { title: "Ви надсилаєте нам теми", text: "Наприклад: крадіжки на попередній роботі, вживання наркотиків, чесність резюме. Ми формулюємо питання за протоколом Converus." },
          { title: "Кандидат отримує посилання", text: "Посилання відкриває безкоштовний застосунок VerifEye на iPhone або Android. Потрібні тиха кімната, Wi-Fi і 30 вільних хвилин." },
          { title: "Тест 15–20 хвилин", text: "Застосунок озвучує питання, кандидат відповідає вголос, камера фіксує реакції очей. Читати нічого не треба." },
          { title: "Результат вам", text: "Оцінка достовірності і висновок приходять на пошту: звіт у PDF до 5 хвилин після тесту. Спеціаліст пояснює звіт і за потреби радить EyeDetect у кабінеті для ключових позицій." },
        ] },
        { type: "text", title: "Коли краще EyeDetect у кабінеті", paragraphs: [
          "VerifEye дає 84–89% точності залежно від умов: освітлення, телефона, тиші. Для масового найму на лінійні позиції цього достатньо. Для керівників, фінансових посад і службових розслідувань радимо EyeDetect на обладнанні зі спеціалістом поруч: точність 86–90%.",
          "Обидва тести проходять лише за письмовою згодою кандидата. Питання стосуються тільки роботи. Результат не є доказом у суді, це підстава для кадрового рішення.",
        ] },
        cta.uk("VerifEye для HR"),
      ],
    },
    ru: {
      seo: { title: "VerifEye для HR: проверка кандидатов со смартфона, 15–20 мин", description: "Кандидат проходит VerifEye на своём телефоне до собеседования: кражи, наркотики, честность резюме. 15–20 минут, точность 84–89%, PDF-отчёт до 5 минут.", keywords: ["проверка кандидатов онлайн", "VerifEye HR", "детектор лжи для найма", "скрининг кандидатов со смартфона"], crumbHome: "Главная", crumb: "Для HR и рекрутеров" },
      hero: { eyebrow: "HR и рекрутерам", h1: "Онлайн детектор лжи для проверки кандидатов", sub: "VerifEye — приложение Converus, которое за 15–20 минут проверяет кандидата на его собственном телефоне: честное ли резюме, были ли кражи на предыдущей работе, употребляет ли наркотики. Мы готовим вопросы, отправляем ссылку, вы получаете результат. Для удалённых команд и региональных филиалов.", facts: ["15–20 минут", "из любого города", "точность 84–89%", "от 2 500 ₴ за тест"] },
      blocks: [
        { type: "cards", title: "Четыре задачи HR, которые закрывает VerifEye", items: [
          { title: "Найм", text: "Оценить правдивость кандидата ещё до офера и не брать риск в команду. Особенно для позиций с доступом к деньгам, товару или данным." },
          { title: "Предотвращение мошенничества", text: "Отсеять тех, кто уже крал или обманывал работодателя. Один тест дешевле одной недостачи." },
          { title: "Культура честности", text: "Когда проверка является стандартной частью найма, снижается количество внутренних конфликтов и «серых» схем." },
          { title: "Развитие сотрудников", text: "Проверка перед повышением на должность с большей ответственностью, чтобы решение опиралось на данные, а не на впечатления." },
        ], cols: 2 },
        { type: "steps", tone: "white", title: "Как это работает для удалённого кандидата", items: [
          { title: "Вы отправляете нам темы", text: "Например: кражи на предыдущей работе, употребление наркотиков, честность резюме. Мы формулируем вопросы по протоколу Converus." },
          { title: "Кандидат получает ссылку", text: "Ссылка открывает бесплатное приложение VerifEye на iPhone или Android. Нужны тихая комната, Wi-Fi и 30 свободных минут." },
          { title: "Тест 15–20 минут", text: "Приложение озвучивает вопросы, кандидат отвечает вслух, камера фиксирует реакции глаз. Читать ничего не нужно." },
          { title: "Результат вам", text: "Оценка достоверности и вывод приходят на почту: отчёт в PDF до 5 минут после теста. Специалист объясняет отчёт и при необходимости советует EyeDetect в кабинете для ключевых позиций." },
        ] },
        { type: "text", title: "Когда лучше EyeDetect в кабинете", paragraphs: [
          "VerifEye даёт 84–89% точности в зависимости от условий: освещения, телефона, тишины. Для массового найма на линейные позиции этого достаточно. Для руководителей, финансовых должностей и служебных расследований советуем EyeDetect на оборудовании со специалистом рядом: точность 86–90%.",
          "Оба теста проходят только с письменного согласия кандидата. Вопросы касаются только работы. Результат не является доказательством в суде, это основание для кадрового решения.",
        ] },
        cta.ru("VerifEye для HR"),
      ],
    },
    en: {
      seo: { title: "VerifEye for HR: Smartphone Candidate Screening, 15–20 Min", description: "Candidates take VerifEye on their own phone before the interview: theft, drugs, resume honesty. 15–20 minutes, 84–89% accuracy, PDF report within 5 minutes.", keywords: ["online candidate screening", "VerifEye HR", "lie detector for hiring", "smartphone candidate screening"], crumbHome: "Home", crumb: "For HR and recruiters" },
      hero: { eyebrow: "For HR and recruiters", h1: "Online Lie Detector for Candidate Screening", sub: "VerifEye is a Converus app that checks a candidate on their own phone in 15–20 minutes: is the resume honest, was there theft at a previous job, do they use drugs. We prepare the questions and send the link; you receive the result. For remote teams and regional branches.", facts: ["15–20 minutes", "from any city", "84–89% accuracy", "from UAH 2,500 per test"] },
      blocks: [
        { type: "cards", title: "Four HR tasks VerifEye covers", items: [
          { title: "Hiring", text: "Assess a candidate's truthfulness before the offer and keep the risk out of your team. Especially for positions with access to money, goods, or data." },
          { title: "Fraud prevention", text: "Screen out those who have already stolen from or deceived an employer. One test costs less than one shortfall." },
          { title: "A culture of honesty", text: "When screening is a standard part of hiring, internal conflicts and “gray” schemes decrease." },
          { title: "Employee development", text: "Testing before promotion to a position with more responsibility, so the decision rests on data rather than impressions." },
        ], cols: 2 },
        { type: "steps", tone: "white", title: "How it works for a remote candidate", items: [
          { title: "You send us the topics", text: "For example: theft at a previous job, drug use, resume honesty. We formulate the questions following the Converus protocol." },
          { title: "The candidate receives a link", text: "The link opens the free VerifEye app on iPhone or Android. They need a quiet room, Wi-Fi, and 30 free minutes." },
          { title: "Test: 15–20 minutes", text: "The app reads the questions aloud, the candidate answers out loud, and the camera records eye reactions. There is nothing to read." },
          { title: "You get the result", text: "The Credibility Score and conclusion arrive by email: PDF report within 5 minutes after the test. The examiner explains the report and, if needed, recommends EyeDetect in our Lviv office for key positions." },
        ] },
        { type: "text", title: "When EyeDetect in our Lviv office is the better choice", paragraphs: [
          "VerifEye gives 84–89% accuracy depending on conditions: lighting, phone, quiet. For high-volume hiring for entry-level positions, that is enough. For managers, financial positions, and internal investigations, we recommend EyeDetect on dedicated equipment with the examiner present: 86–90% accuracy.",
          "Both tests are taken only with the candidate's written consent. Questions concern work only. The result is not admissible evidence in court; it is grounds for an HR decision.",
        ] },
        cta.en("VerifEye for HR"),
      ],
    },
  },
  {
    slug: "counselors",
    uk: {
      seo: { title: "EyeDetect для психологів і сімейних консультантів", description: "EyeDetect у роботі з невірністю та залежностями: 30–45 хвилин, без датчиків, звіт одразу після тесту. Факти замість здогадок для психологів і терапевтів.", keywords: ["детектор брехні для психолога", "перевірка на вірність психолог", "EyeDetect терапія залежностей", "тест для сімейного консультанта"], crumbHome: "Головна", crumb: "Для психологів і консультантів" },
      hero: { eyebrow: "Психологам і сімейним консультантам", h1: "Детектор брехні EyeDetect для психологів", sub: "Коли один партнер підозрює, а інший заперечує, терапія ходить по колу. Тест EyeDetect за 30–45 хвилин дає обом конкретну відповідь на конкретне питання і дозволяє працювати з реальністю, а не з версіями. Без датчиків, без екзаменатора з дротами, який ламає довіру в кабінеті.", facts: ["30–45 хвилин на тест", "без датчиків на тілі", "звіт одразу після тесту", "Львів або виїзд"] },
      blocks: [
        { type: "cards", title: "Де тест допомагає терапевту", items: [
          { title: "Невірність", text: "Питання про конкретні факти за конкретний період: контакт, листування, приховані витрати. Результат дає парі точку, від якої можна рухатись далі: до відновлення довіри або до чесного рішення." },
          { title: "Залежності", text: "Алкоголь, наркотики, азартні ігри, порнографія. Періодичний тест підтверджує тверезість і замінює постійні перевірки та підозри в родині." },
          { title: "Відновлення довіри", text: "Після зради «чиста» перевірка через три, шість, дванадцять місяців показує партнеру, що обіцянки виконуються. Це працює краще за слова." },
          { title: "Заперечення і гра", text: "Клієнт, який твердо вирішив тримати таємницю, може роками водити терапевта колами. Тест знімає цю гру і повертає роботу до суті." },
        ], cols: 2 },
        { type: "text", tone: "white", title: "Чому не класичний поліграф", paragraphs: [
          "Поліграф у кабінеті психолога працює проти терапії: дроти, манжета, сторонній екзаменатор і 2–3 години процедури руйнують атмосферу, яку ви будували. EyeDetect триває 30–45 хвилин, людина просто читає твердження з екрана, а оцінку рахує алгоритм.",
          "Ми проводимо тест у нашому кабінеті у Львові або приїжджаємо до вас. Питання погоджуємо з вами і з клієнтом заздалегідь, письмова згода обов'язкова. Звіт отримує той, кого визначить клієнт.",
        ] },
        how.uk,
        cta.uk("EyeDetect для психолога"),
      ],
    },
    ru: {
      seo: { title: "EyeDetect для психологов и семейных консультантов", description: "EyeDetect в работе с неверностью и зависимостями: 30–45 минут, без датчиков, отчёт сразу после теста. Факты вместо догадок для психологов и терапевтов.", keywords: ["детектор лжи для психолога", "проверка на верность психолог", "EyeDetect терапия зависимостей", "тест для семейного консультанта"], crumbHome: "Главная", crumb: "Для психологов и консультантов" },
      hero: { eyebrow: "Психологам и семейным консультантам", h1: "Детектор лжи EyeDetect для психологов", sub: "Когда один партнёр подозревает, а другой отрицает, терапия ходит по кругу. Тест EyeDetect за 30–45 минут даёт обоим конкретный ответ на конкретный вопрос и позволяет работать с реальностью, а не с версиями. Без датчиков, без экзаменатора с проводами, который ломает доверие в кабинете.", facts: ["30–45 минут на тест", "без датчиков на теле", "отчёт сразу после теста", "Львов или выезд"] },
      blocks: [
        { type: "cards", title: "Где тест помогает терапевту", items: [
          { title: "Неверность", text: "Вопросы о конкретных фактах за конкретный период: контакт, переписка, скрытые расходы. Результат даёт паре точку, от которой можно двигаться дальше: к восстановлению доверия или к честному решению." },
          { title: "Зависимости", text: "Алкоголь, наркотики, азартные игры, порнография. Периодический тест подтверждает трезвость и заменяет постоянные проверки и подозрения в семье." },
          { title: "Восстановление доверия", text: "После измены «чистая» проверка через три, шесть, двенадцать месяцев показывает партнёру, что обещания выполняются. Это работает лучше слов." },
          { title: "Отрицание и игра", text: "Клиент, который твёрдо решил хранить тайну, может годами водить терапевта по кругу. Тест снимает эту игру и возвращает работу к сути." },
        ], cols: 2 },
        { type: "text", tone: "white", title: "Почему не классический полиграф", paragraphs: [
          "Полиграф в кабинете психолога работает против терапии: провода, манжета, посторонний экзаменатор и 2–3 часа процедуры разрушают атмосферу, которую вы строили. EyeDetect длится 30–45 минут, человек просто читает утверждения с экрана, а оценку считает алгоритм.",
          "Мы проводим тест в нашем кабинете во Львове или приезжаем к вам. Вопросы согласовываем с вами и с клиентом заранее, письменное согласие обязательно. Отчёт получает тот, кого определит клиент.",
        ] },
        how.ru,
        cta.ru("EyeDetect для психолога"),
      ],
    },
    en: {
      seo: { title: "EyeDetect for Psychologists and Family Counselors", description: "EyeDetect for infidelity and addiction work: 30–45 minutes, no sensors, report right after the test. Facts, not guesses, for psychologists and therapists.", keywords: ["lie detector for psychologists", "fidelity test psychologist", "EyeDetect addiction therapy", "test for family counselors"], crumbHome: "Home", crumb: "For psychologists and counselors" },
      hero: { eyebrow: "For psychologists and family counselors", h1: "The EyeDetect Lie Detector for Psychologists", sub: "When one partner suspects and the other denies, therapy goes in circles. A 30–45 minute EyeDetect test gives both a specific answer to a specific question and lets you work with reality rather than competing versions. No sensors on the person being tested, nothing that breaks the trust in your office.", facts: ["30–45 minutes per test", "no sensors on the body", "report right after the test", "Lviv or on-site"] },
      blocks: [
        { type: "cards", title: "Where the test helps a therapist", items: [
          { title: "Infidelity", text: "Questions about specific facts within a specific period: contact, correspondence, hidden spending. The result gives the couple a point from which to move forward: toward rebuilding trust or toward an honest decision." },
          { title: "Addiction", text: "Alcohol, drugs, gambling, pornography. A periodic test confirms sobriety and replaces constant checking and suspicion in the family." },
          { title: "Rebuilding trust", text: "After an affair, a “clean” test at three, six, and twelve months shows the partner that promises are being kept. This works better than words." },
          { title: "Denial and games", text: "A client who is determined to keep a secret can lead a therapist in circles for years. The test ends that game and brings the work back to the point." },
        ], cols: 2 },
        { type: "text", tone: "white", title: "Why not a classic polygraph", paragraphs: [
          "A polygraph in a psychologist's office works against therapy: wires, a cuff, an outside examiner, and a 2–3 hour procedure destroy the atmosphere you have built. EyeDetect takes 30–45 minutes, the person simply reads statements on a screen, and an algorithm computes the score.",
          "We run the test in our Lviv office or come to you. Questions are agreed with you and the client in advance; written consent is mandatory. The report goes to whoever the client designates.",
        ] },
        how.en,
        cta.en("EyeDetect for psychologists"),
      ],
    },
  },
  recruiting,
  miltech,
  remoteTeams,
  logistics,
  retail,
  realEstate,
  medical,
  household,
  insurance,
  franchise,
];

export const getAudience = (slug, lang) => {
  const a = audiences.find((x) => x.slug === slug);
  if (!a) return null;
  return { slug: a.slug, ...(a[lang] || a.uk) };
};

export const getAudiencesList = (lang) => audiences.map((a) => ({ slug: a.slug, title: (a[lang] || a.uk).seo.crumb, sub: (a[lang] || a.uk).hero.h1 }));
