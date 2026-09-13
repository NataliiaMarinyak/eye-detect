// Аудиторія /for/insurance: страхові компанії та відділи врегулювання збитків. Ключі: uk, ru, en.

import { cta, how } from "../audiencesShared";

export const insurance = {
  slug: "insurance",
  uk: {
    seo: { title: "Детектор брехні для страхової компанії — перевірка заяв EyeDetect", description: "EyeDetect для відділів врегулювання: заяви про ДТП, викрадення авто, майно. Інсценування, завищення збитків, змова з СТО. Тест 30–45 хвилин, звіт одразу.", keywords: ["детектор брехні для страхової", "поліграф страховий випадок", "перевірка заяви про ДТП", "страхове шахрайство перевірка", "EyeDetect страхування"], crumbHome: "Головна", crumb: "Для страхових компаній" },
    hero: { eyebrow: "Страховим компаніям і відділам врегулювання", h1: "Детектор брехні для страхової компанії", sub: "Частину заяв про страховий випадок не підтвердити і не спростувати документами: свідків немає, експертиза дає діапазон, а заявник наполягає. EyeDetect перевіряє конкретні факти події за 30–45 хвилин і дає оцінку від 1 до 99. Страхування було одним із перших сегментів, де Converus застосував EyeDetect у США.", facts: ["30–45 хвилин на заяву", "точність 90% на одне питання", "звіт одразу після тесту", "письмова згода заявника"] },
    blocks: [
      { type: "cards", title: "Де це допомагає", items: [
        { title: "ДТП без свідків", text: "Хто був за кермом, чи був водій тверезий, чи сталась подія там і тоді, як зазначено в заяві. Питання про конкретні факти, на які експертиза не відповідає." },
        { title: "Викрадення автомобіля", text: "Авто «викрали» після того, як власник перестав тягнути кредит, або воно виїхало за кордон з його відома. Перевіряємо, чи знав заявник, де авто, і чи передавав ключі." },
        { title: "Пошкодження майна: пожежа, залив, крадіжка", text: "Чи була пожежа випадковою, чи існували вкрадені речі, чи відповідає перелік втраченого дійсності. Питання лише про факти, не про наміри." },
        { title: "Завищення збитків", text: "Пошкодження з попередніх подій, дописані у поточний акт, чи ремонт, якого не робили. Тест перевіряє, чи заявник знає про включення до заяви того, чого не було." },
        { title: "Змова з СТО чи оцінювачем", text: "Акти на роботи, які не виконувались, завищені кошториси, «свої» майстерні. Перевіряємо і заявника, і, за згодою, працівника-партнера." },
        { title: "Власні співробітники", text: "Аварійні комісари і врегулювальники, які пропускають сумнівні заяви за винагороду. Перевірка при наймі і періодична перевірка тих, хто ухвалює рішення про виплату." },
      ] },
      { type: "list", title: "Що можна перевірити", cols: 3, items: ["хто керував авто в момент ДТП", "тверезість водія на момент події", "інсценування ДТП, викрадення чи пожежі", "знання заявника про місцезнаходження «викраденого» авто", "включення до заяви пошкоджень з попередніх подій", "існування заявленого майна на момент події", "змова з СТО, оцінювачем чи іншим учасником", "отримання винагороди врегулювальником", "приховане подвійне страхування або попередні виплати"] },
      how.uk,
      { type: "text", title: "Що варто знати відділу врегулювання", paragraphs: [
        "Результат EyeDetect в Україні не є доказом у суді. Це інструмент для внутрішнього рішення: пришвидшити виплату за чистою заявою, призначити додаткову експертизу чи передати матеріали до служби безпеки. Тест проходять лише за письмовою згодою заявника, і він може відмовитись. Питання формулюються про конкретні факти події, не про думки чи наміри.",
        "Пропозиція пройти тест сама по собі є фільтром: заявник із чистою справою зазвичай погоджується, бо це пришвидшує виплату. Ми допомагаємо сформулювати пропозицію так, щоб вона була коректною і не звучала як звинувачення.",
        "Один заявник у Львові проходить тест у кабінеті на вул. Городоцькій, 45, від 5 500 ₴. Для регіональних філій є виїзд: 6–8 тестів за день, Львівська область включена, Західна Україна +2 000 ₴, інші регіони від 12 000 ₴ разом із тестом. Для заявників в інших містах, де виїзд не окупається, є VerifEye: онлайн зі смартфона, близько 10 хвилин, точність 84–89%, від 2 500 ₴. Ціни для страхової компанії за запитом, залежать від обсягу заяв на місяць.",
      ] },
      { type: "table", title: "Який формат обрати", columns: ["Ситуація", "Формат", "Час і ціна"], rows: [
        ["Сумнівна заява на велику суму, заявник у Львові", "EyeDetect у кабінеті", "30–45 хвилин, від 5 500 ₴"],
        ["Кілька заяв у регіональній філії", "EyeDetect з виїздом", "6–8 тестів за день, ціна за запитом"],
        ["Заявник в іншому місті, невелика сума", "VerifEye онлайн зі смартфона", "близько 10 хвилин, від 2 500 ₴"],
        ["Перевірка врегулювальників і комісарів", "EyeDetect з виїздом в офіс", "6–8 осіб за день, ціна за запитом"],
      ] },
      cta.uk("EyeDetect для страхової компанії"),
    ],
  },
  ru: {
    seo: { title: "Детектор лжи для страховой — проверка заявлений EyeDetect", description: "EyeDetect для отделов урегулирования: заявления о ДТП, угоне авто, имуществе. Инсценировка, завышение убытков, сговор с СТО. Тест 30–45 минут, отчёт сразу.", keywords: ["детектор лжи для страховой", "полиграф страховой случай", "проверка заявления о ДТП", "страховое мошенничество проверка", "EyeDetect страхование"], crumbHome: "Главная", crumb: "Для страховых компаний" },
    hero: { eyebrow: "Страховым компаниям и отделам урегулирования", h1: "Детектор лжи для страховой компании", sub: "Часть заявлений о страховом случае не подтвердить и не опровергнуть документами: свидетелей нет, экспертиза даёт диапазон, а заявитель настаивает. EyeDetect проверяет конкретные факты события за 30–45 минут и даёт оценку от 1 до 99. Страхование было одним из первых сегментов, где Converus применил EyeDetect в США.", facts: ["30–45 минут на заявление", "точность 90% на один вопрос", "отчёт сразу после теста", "письменное согласие заявителя"] },
    blocks: [
      { type: "cards", title: "Где это помогает", items: [
        { title: "ДТП без свидетелей", text: "Кто был за рулём, был ли водитель трезв, произошло ли событие там и тогда, как указано в заявлении. Вопросы о конкретных фактах, на которые экспертиза не отвечает." },
        { title: "Угон автомобиля", text: "Авто «угнали» после того, как владелец перестал тянуть кредит, или оно выехало за границу с его ведома. Проверяем, знал ли заявитель, где авто, и передавал ли ключи." },
        { title: "Повреждение имущества: пожар, залив, кража", text: "Был ли пожар случайным, существовали ли украденные вещи, соответствует ли перечень утраченного действительности. Вопросы только о фактах, не о намерениях." },
        { title: "Завышение убытков", text: "Повреждения от предыдущих событий, дописанные в текущий акт, или ремонт, которого не делали. Тест проверяет, знает ли заявитель о включении в заявление того, чего не было." },
        { title: "Сговор с СТО или оценщиком", text: "Акты на работы, которые не выполнялись, завышенные сметы, «свои» мастерские. Проверяем и заявителя, и, с согласия, сотрудника-партнёра." },
        { title: "Собственные сотрудники", text: "Аварийные комиссары и урегулировщики, которые пропускают сомнительные заявления за вознаграждение. Проверка при найме и периодическая проверка тех, кто принимает решение о выплате." },
      ] },
      { type: "list", title: "Что можно проверить", cols: 3, items: ["кто управлял авто в момент ДТП", "трезвость водителя на момент события", "инсценировка ДТП, угона или пожара", "знание заявителя о местонахождении «угнанного» авто", "включение в заявление повреждений от предыдущих событий", "существование заявленного имущества на момент события", "сговор с СТО, оценщиком или другим участником", "получение вознаграждения урегулировщиком", "скрытое двойное страхование или предыдущие выплаты"] },
      how.ru,
      { type: "text", title: "Что стоит знать отделу урегулирования", paragraphs: [
        "Результат EyeDetect в Украине не является доказательством в суде. Это инструмент для внутреннего решения: ускорить выплату по чистому заявлению, назначить дополнительную экспертизу или передать материалы в службу безопасности. Тест проходят только с письменного согласия заявителя, и он может отказаться. Вопросы формулируются о конкретных фактах события, не о мыслях или намерениях.",
        "Предложение пройти тест само по себе является фильтром: заявитель с чистым делом обычно соглашается, потому что это ускоряет выплату. Мы помогаем сформулировать предложение так, чтобы оно было корректным и не звучало как обвинение.",
        "Один заявитель во Львове проходит тест в кабинете на ул. Городоцкой, 45, от 5 500 ₴. Для региональных филиалов есть выезд: 6–8 тестов в день, Львовская область включена, Западная Украина +2 000 ₴, другие регионы от 12 000 ₴ вместе с тестом. Для заявителей в других городах, где выезд не окупается, есть VerifEye: онлайн со смартфона, около 10 минут, точность 84–89%, от 2 500 ₴. Цены для страховой компании по запросу, зависят от объёма заявлений в месяц.",
      ] },
      { type: "table", title: "Какой формат выбрать", columns: ["Ситуация", "Формат", "Время и цена"], rows: [
        ["Сомнительное заявление на крупную сумму, заявитель во Львове", "EyeDetect в кабинете", "30–45 минут, от 5 500 ₴"],
        ["Несколько заявлений в региональном филиале", "EyeDetect с выездом", "6–8 тестов в день, цена по запросу"],
        ["Заявитель в другом городе, небольшая сумма", "VerifEye онлайн со смартфона", "около 10 минут, от 2 500 ₴"],
        ["Проверка урегулировщиков и комиссаров", "EyeDetect с выездом в офис", "6–8 человек в день, цена по запросу"],
      ] },
      cta.ru("EyeDetect для страховой компании"),
    ],
  },
  en: {
    seo: { title: "Lie Detector for Insurance Companies — Claim Verification", description: "EyeDetect for claims departments: accident, car theft, and property claims. Staged events, inflated losses, repair shop collusion. 30–45 minutes per claim.", keywords: ["lie detector for insurers", "polygraph insurance claim", "car accident claim verification", "insurance fraud testing", "EyeDetect insurance"], crumbHome: "Home", crumb: "For insurance companies" },
    hero: { eyebrow: "For insurance companies and claims departments", h1: "Lie Detector for Insurance Companies", sub: "Some claims can be neither confirmed nor refuted by documents: there are no witnesses, the expert gives a range, and the claimant insists. EyeDetect checks specific facts of the event in 30–45 minutes and returns a score from 1 to 99. Insurance was one of the first segments where Converus applied EyeDetect in the US.", facts: ["30–45 minutes per claim", "90% accuracy on a single issue", "report right after the test", "claimant's written consent"] },
    blocks: [
      { type: "cards", title: "Where it helps", items: [
        { title: "Accidents without witnesses", text: "Who was driving, whether the driver was sober, whether the event happened where and when the claim says. Questions about specific facts that an expert report cannot answer." },
        { title: "Car theft", text: "The car was “stolen” after the owner stopped keeping up with the loan, or it left the country with their knowledge. We check whether the claimant knew where the car was and whether they handed over the keys." },
        { title: "Property damage: fire, flooding, burglary", text: "Whether the fire was accidental, whether the stolen items existed, whether the list of lost property matches reality. Questions only about facts, not intentions." },
        { title: "Inflated losses", text: "Damage from earlier events added to the current report, or repairs that were never done. The test checks whether the claimant knows that things that did not happen were included in the claim." },
        { title: "Collusion with a repair shop or appraiser", text: "Invoices for work that was never done, inflated estimates, “friendly” workshops. We test the claimant and, with consent, the partner's employee." },
        { title: "Your own staff", text: "Loss adjusters and claims handlers who wave through doubtful claims for a reward. Screening at hiring and periodic testing of those who decide on payouts." },
      ] },
      { type: "list", title: "What can be tested", cols: 3, items: ["who was driving at the moment of the accident", "the driver's sobriety at the time of the event", "a staged accident, theft, or fire", "the claimant's knowledge of where the “stolen” car is", "inclusion of damage from earlier events in the claim", "existence of the claimed property at the time of the event", "collusion with a repair shop, appraiser, or other party", "a claims handler receiving a reward", "hidden double insurance or earlier payouts"] },
      how.en,
      { type: "text", title: "What a claims department should know", paragraphs: [
        "In Ukraine, an EyeDetect result is not admissible evidence in court. It is a tool for an internal decision: speed up payment on a clean claim, order an additional expert review, or pass the file to the security department. The test is taken only with the claimant's written consent, and they may refuse. Questions are phrased about specific facts of the event, not thoughts or intentions.",
        "The offer to take the test is itself a filter: a claimant with a clean case usually agrees, because it speeds up the payout. We help word the offer so that it is correct and does not sound like an accusation.",
        "A single claimant in Lviv takes the test in our office at 45 Horodotska St., from UAH 5,500. For regional branches there is on-site testing: 6–8 tests per day, Lviv region included, Western Ukraine +UAH 2,000, other regions from UAH 12,000 including the test. For claimants in other cities where a visit does not pay off, there is VerifEye: online from a smartphone, about 10 minutes, 84–89% accuracy, from UAH 2,500. Pricing for an insurance company is on request and depends on the monthly volume of claims.",
      ] },
      { type: "table", title: "Which format to choose", columns: ["Situation", "Format", "Time and price"], rows: [
        ["A doubtful high-value claim, claimant in Lviv", "EyeDetect in our Lviv office", "30–45 minutes, from UAH 5,500"],
        ["Several claims at a regional branch", "EyeDetect on-site", "6–8 tests per day, price on request"],
        ["Claimant in another city, small amount", "VerifEye online from a smartphone", "about 10 minutes, from UAH 2,500"],
        ["Screening claims handlers and adjusters", "EyeDetect on-site at your office", "6–8 people per day, price on request"],
      ] },
      cta.en("EyeDetect for an insurance company"),
    ],
  },
};
