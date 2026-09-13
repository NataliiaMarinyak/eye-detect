// Статті блогу. Кожна: slug, date, uk/ru { title, description, h1, lead, sections:[{h2, paragraphs:[...], list?:[...]}], faq? }.
// Тексти написані під конкретні запити з Search Console (див. docs/seo-structure-uk.md, розділ 10).
export const blogShared = {
  uk: { crumbHome: "Головна", crumb: "Блог", title: "Блог про детектор брехні", sub: "Як проходить тест, що можна перевірити, а що ні, і як не потрапити на застосунок-жарт. Пишемо просто, без міфів.", readMore: "Читати", published: "Опубліковано", related: "Ще з блогу", ctaTitle: "Є конкретне питання?", ctaText: "Напишіть нам, підкажемо, чи підходить тест для вашої ситуації.", ctaOnline: "Пройти онлайн", ctaBook: "Записатися" },
  ru: { crumbHome: "Главная", crumb: "Блог", title: "Блог о детекторе лжи", sub: "Как проходит тест, что можно проверить, а что нет, и как не попасть на приложение-шутку. Пишем просто, без мифов.", readMore: "Читать", published: "Опубликовано", related: "Ещё из блога", ctaTitle: "Есть конкретный вопрос?", ctaText: "Напишите нам, подскажем, подходит ли тест для вашей ситуации.", ctaOnline: "Пройти онлайн", ctaBook: "Записаться" },
  en: { crumbHome: "Home", crumb: "Blog", title: "Lie Detector Blog", sub: "How the test works, what can and cannot be checked, and how to avoid falling for a joke app. Plain language, no myths.", readMore: "Read", published: "Published", related: "More from the blog", ctaTitle: "Have a specific question?", ctaText: "Write to us and we will tell you whether the test fits your situation.", ctaOnline: "Take the online test", ctaBook: "Book a test" },
};

import { blogPosts2 } from "@/data/pages/blogData2";

const blogPosts1 = [
  {
    slug: "yaki-pytannya-stavlyat-na-poligrafi-pry-pryjomi-na-robotu",
    date: "2026-09-12",
    situation: "hiring",
    uk: {
      title: "Які питання ставлять на поліграфі при прийомі на роботу",
      description: "Які теми перевіряють на детекторі брехні перед наймом: крадіжки, наркотики, судимості, резюме, зв'язки з конкурентами. Як звучать питання і чи можна відмовитися.",
      h1: "Які питання ставлять на поліграфі при прийомі на роботу",
      lead: "Кандидати бояться цього тесту більше, ніж варто. Питання не про особисте життя і не про «чи ви хороша людина». Вони про конкретні факти, які важливі для посади, і всі їх людина читає заздалегідь.",
      sections: [
        { h2: "П'ять стандартних тем", paragraphs: ["Роботодавець зазвичай обирає 2–4 теми з цього списку. Більше за один тест перевірити не можна, бо точність падає."], list: ["Крадіжки на попередніх місцях роботи: гроші, товар, майно компанії.", "Вживання важких наркотиків за останні 12 місяців.", "Приховані судимості або кримінальні провадження.", "Неправдиві дані в резюме: освіта, досвід, причини звільнення.", "Зв'язки з конкурентами або намір передати їм інформацію."] },
        { h2: "Як звучить питання насправді", paragraphs: ["Не «чи ви чесні», а «За останні 5 років ви брали гроші або товар у роботодавця без дозволу?». Кожне питання має період, конкретну дію і однозначну відповідь. Перед тестом кандидат читає пояснення: що вважається крадіжкою, а що ні, наприклад, ручка зі столу не рахується.", "Потім те саме питання з'являється на екрані у вигляді тверджень: «Я не брав гроші у роботодавця без дозволу» і «Я брав гроші у роботодавця без дозволу». Людина відповідає «правда» або «неправда». Кожне твердження повторюється кілька разів у різних формулюваннях."] },
        { h2: "Чого не питають", paragraphs: ["Про релігію, політику, сексуальну орієнтацію, стан здоров'я, сімейні плани. Такі питання незаконні і безглузді для тесту. Якщо роботодавець наполягає на них, кандидат має право відмовитися саме від цих тем, а не від тесту загалом."] },
        { h2: "Чи можна відмовитися", paragraphs: ["Так. Тест лише добровільний, за письмовою згодою. Але роботодавець має право не брати людину, яка відмовилася без пояснень, якщо перевірка передбачена для посади. Тому чесна порада кандидату: якщо приховувати нема чого, тест лише допоможе."] },
        { h2: "Скільки триває і що отримує роботодавець", paragraphs: ["Тест на EyeDetect триває 30–45 хвилин, без датчиків на тілі. Роботодавець отримує звіт з оцінкою від 1 до 99 по кожній темі того ж дня. Результат не є доказом у суді, це підстава для кадрового рішення."] },
      ],
      faq: [
        { q: "Чи можна підготуватися до питань?", a: "Так, і це заохочується: кандидат читає всі питання заздалегідь. Підготовка означає виспатися і не хвилюватися, а не «навчитися обманювати»." },
        { q: "Що, як я колись узяв щось дрібне?", a: "Скажіть про це до тесту. Дрібні епізоди, названі наперед, не впливають на результат. Впливає приховування." },
      ],
    },
    ru: {
      title: "Какие вопросы задают на полиграфе при приёме на работу",
      description: "Список тем, которые проверяют на детекторе лжи перед наймом: кражи, наркотики, судимости, резюме, связи с конкурентами. Как формулируются вопросы и можно ли отказаться.",
      h1: "Какие вопросы задают на полиграфе при приёме на работу",
      lead: "Кандидаты боятся этого теста больше, чем стоит. Вопросы не о личной жизни и не о том, «хороший ли вы человек». Они о конкретных фактах, важных для должности, и все их человек читает заранее.",
      sections: [
        { h2: "Пять стандартных тем", paragraphs: ["Работодатель обычно выбирает 2–4 темы из этого списка. Больше за один тест проверить нельзя, потому что падает точность."], list: ["Кражи на предыдущих местах работы: деньги, товар, имущество компании.", "Употребление тяжёлых наркотиков за последние 12 месяцев.", "Скрытые судимости или уголовные производства.", "Ложные данные в резюме: образование, опыт, причины увольнения.", "Связи с конкурентами или намерение передать им информацию."] },
        { h2: "Как звучит вопрос на самом деле", paragraphs: ["Не «честны ли вы», а «За последние 5 лет вы брали деньги или товар у работодателя без разрешения?». У каждого вопроса есть период, конкретное действие и однозначный ответ. Перед тестом кандидат читает пояснение: что считается кражей, а что нет, например, ручка со стола не считается.", "Затем тот же вопрос появляется на экране в виде утверждений: «Я не брал деньги у работодателя без разрешения» и «Я брал деньги у работодателя без разрешения». Человек отвечает «правда» или «неправда». Каждое утверждение повторяется несколько раз в разных формулировках."] },
        { h2: "О чём не спрашивают", paragraphs: ["О религии, политике, сексуальной ориентации, состоянии здоровья, семейных планах. Такие вопросы незаконны и бессмысленны для теста. Если работодатель настаивает на них, кандидат вправе отказаться именно от этих тем, а не от теста в целом."] },
        { h2: "Можно ли отказаться", paragraphs: ["Да. Тест только добровольный, с письменного согласия. Но работодатель вправе не брать человека, который отказался без объяснений, если проверка предусмотрена для должности. Поэтому честный совет кандидату: если скрывать нечего, тест только поможет."] },
        { h2: "Сколько длится и что получает работодатель", paragraphs: ["Тест на EyeDetect длится 30–45 минут, без датчиков на теле. Работодатель получает отчёт с оценкой от 1 до 99 по каждой теме в тот же день. Результат не является доказательством в суде, это основание для кадрового решения."] },
      ],
      faq: [
        { q: "Можно ли подготовиться к вопросам?", a: "Да, и это поощряется: кандидат читает все вопросы заранее. Подготовка означает выспаться и не волноваться, а не «научиться обманывать»." },
        { q: "Что, если я когда-то взял что-то мелкое?", a: "Скажите об этом до теста. Мелкие эпизоды, названные заранее, не влияют на результат. Влияет сокрытие." },
      ],
    },
    en: {
      title: "What Questions Are Asked on a Pre-Employment Polygraph",
      description: "Which topics a pre-employment lie detector test covers: theft, drugs, criminal records, résumé claims, ties to competitors. How the questions are worded and whether you can decline.",
      h1: "What Questions Are Asked on a Pre-Employment Polygraph",
      lead: "Candidates fear this test more than they should. The questions are not about your private life and not about whether you are “a good person”. They are about specific facts that matter for the position, and the candidate reads all of them in advance.",
      sections: [
        { h2: "Five standard topics", paragraphs: ["An employer usually picks 2–4 topics from this list. More cannot be covered in a single test, because accuracy drops."], list: ["Theft at previous jobs: cash, goods, company property.", "Use of hard drugs in the last 12 months.", "Concealed criminal convictions or pending criminal proceedings.", "False information on the résumé: education, experience, reasons for leaving.", "Ties to competitors or an intention to pass information to them."] },
        { h2: "What a question actually sounds like", paragraphs: ["Not “are you honest”, but “In the last 5 years, have you taken money or goods from an employer without permission?”. Every question has a time period, a specific action and an unambiguous answer. Before the test the candidate reads an explanation: what counts as theft and what does not, for example, a pen from the desk does not count.", "Then the same question appears on the screen as statements: “I did not take money from an employer without permission” and “I took money from an employer without permission”. The person answers “true” or “false”. Each statement is repeated several times in different wordings."] },
        { h2: "What is not asked", paragraphs: ["Religion, politics, sexual orientation, health, family plans. Such questions are unlawful and pointless for the test. If an employer insists on them, the candidate has the right to decline those specific topics rather than the test as a whole."] },
        { h2: "Can you decline", paragraphs: ["Yes. The test is strictly voluntary and requires written consent. But the employer has the right not to hire someone who declined without explanation, if screening is part of the hiring process for the position. So the honest advice to a candidate: if there is nothing to hide, the test only helps."] },
        { h2: "How long it takes and what the employer receives", paragraphs: ["An EyeDetect test takes 30–45 minutes, with no sensors on the body. The employer receives a report with a score from 1 to 99 on each topic the same day. The result is not evidence in court; it is a basis for a hiring decision."] },
      ],
      faq: [
        { q: "Can I prepare for the questions?", a: "Yes, and it is encouraged: the candidate reads all the questions in advance. Preparation means getting a good night's sleep and staying calm, not “learning how to cheat”." },
        { q: "What if I once took something minor?", a: "Say so before the test. Minor episodes disclosed in advance do not affect the result. Concealment does." },
      ],
    },
  },
  {
    slug: "chy-mozhna-obmanuty-detektor-brekhni",
    date: "2026-09-04",
    situation: null,
    uk: {
      title: "Чи можна обманути детектор брехні: що працює, а що ні",
      description: "Кнопка в черевику, заспокійливі, рахування в умі, «повірити у власну брехню». Що з цього працює проти класичного поліграфа, а що проти EyeDetect.",
      h1: "Чи можна обманути детектор брехні",
      lead: "В інтернеті десятки порад, як «пройти поліграф». Більшість із них про класичний прилад із датчиками і про 1990-ті. Розберемо по черзі, що з цього досі працює і чому проти тесту за рухами очей не працює нічого з переліченого.",
      sections: [
        { h2: "Поради з інтернету і що з ними не так", paragraphs: ["Усі відомі способи протидії розраховані на класичний поліграф: він вимірює дихання, тиск і потовиділення, і ці показники можна змінити свідомо."], list: ["Кнопка в черевику, напруження м'язів: створює штучну реакцію на контрольні питання. Досвідчений поліграфолог бачить це на графіку, а EyeDetect не вимірює тіло взагалі.", "Заспокійливі або алкоголь: притупляють реакції рівномірно, і тест визнається недійсним. На EyeDetect людина у стані сп'яніння до тесту не допускається.", "Рахування в умі, згадування неприємного: працює лише на дихання і тиск. Зіниця при цьому теж змінюється, але однаково на всіх твердженнях, тому на висновок тесту це не впливає.", "«Повірити у власну брехню»: гарно звучить, але мозок усе одно витрачає більше зусиль на неправдиву відповідь. Саме це зусилля і фіксується."] },
        { h2: "Чому очі не обманюють", paragraphs: ["Зіниця розширюється на частки міліметра, коли мозок працює інтенсивніше. Свідомо керувати цим неможливо, як неможливо наказати серцю не битися. EyeDetect також фіксує швидкість читання, повернення до слів, час відповіді і помилки. Понад 50 показників на секунду, і людина жодного з них не контролює.", "Є ще одна деталь. Твердження на екрані повторюються багато разів у різних формулюваннях. Обманути один раз можна, обманювати однаково 60 разів поспіль ні."] },
        { h2: "Що буде, якщо спробувати", paragraphs: ["Алгоритм має окрему категорію «випадкові відповіді»: коли людина тисне кнопки навмання, затягує час або не читає текст. Такий тест визнається недійсним і не виглядає як «правдивий». Для замовника це теж інформація."] },
        { h2: "Що справді впливає на результат", paragraphs: ["Не хитрощі, а стан: недосипання, сильне хвилювання, погано сформульовані питання. Тому перед тестом ми пояснюємо кожне питання, даємо тренувальний тест і просимо виспатися. Невизначений результат буває не більше ніж у 10 випадках зі 100, і тоді ми пропонуємо повторний тест зі знижкою."] },
      ],
      faq: [
        { q: "А якщо людина дуже хвилюється, її визнають брехуном?", a: "Ні. Хвилювання однакове на всі питання, а алгоритм порівнює реакції на значущі і нейтральні твердження між собою." },
        { q: "Чи можна обманути онлайн-тест VerifEye?", a: "Той самий принцип, та сама камера, тільки в телефоні. Спроби дивитися вбік або читати не з екрана позначаються як недійсний тест." },
      ],
    },
    ru: {
      title: "Можно ли обмануть детектор лжи: что работает, а что нет",
      description: "Кнопка в ботинке, успокоительные, счёт в уме, «поверить в собственную ложь». Что из этого срабатывает против классического полиграфа, а что против EyeDetect. Честный ответ специалиста.",
      h1: "Можно ли обмануть детектор лжи",
      lead: "В интернете десятки советов, как «пройти полиграф». Большинство из них о классическом приборе с датчиками и о 1990-х. Разберём по очереди, что из этого до сих пор работает и почему против теста по движениям глаз не работает ничего из перечисленного.",
      sections: [
        { h2: "Советы из интернета и что с ними не так", paragraphs: ["Все известные способы противодействия рассчитаны на классический полиграф: он измеряет дыхание, давление и потоотделение, и эти показатели можно изменить сознательно."], list: ["Кнопка в ботинке, напряжение мышц: создаёт искусственную реакцию на контрольные вопросы. Опытный полиграфолог видит это на графике, а EyeDetect не измеряет тело вообще.", "Успокоительные или алкоголь: притупляют реакции равномерно, и тест признаётся недействительным. На EyeDetect человек в состоянии опьянения к тесту не допускается.", "Счёт в уме, воспоминание неприятного: работает только на дыхание и давление. Зрачок при этом тоже меняется, но одинаково на всех утверждениях, поэтому на вывод теста это не влияет.", "«Поверить в собственную ложь»: красиво звучит, но мозг всё равно тратит больше усилий на ложный ответ. Именно это усилие и фиксируется."] },
        { h2: "Почему глаза не обманывают", paragraphs: ["Зрачок расширяется на доли миллиметра, когда мозг работает интенсивнее. Сознательно управлять этим невозможно, как невозможно приказать сердцу не биться. EyeDetect также фиксирует скорость чтения, возвраты к словам, время ответа и ошибки. Более 50 показателей в секунду, и человек ни один из них не контролирует.", "Есть ещё одна деталь. Утверждения на экране повторяются много раз в разных формулировках. Обмануть один раз можно, обманывать одинаково 60 раз подряд нет."] },
        { h2: "Что будет, если попробовать", paragraphs: ["У алгоритма есть отдельная категория «случайные ответы»: когда человек жмёт кнопки наугад, тянет время или не читает текст. Такой тест признаётся недействительным и не выглядит как «правдивый». Для заказчика это тоже информация."] },
        { h2: "Что действительно влияет на результат", paragraphs: ["Не хитрости, а состояние: недосып, сильное волнение, плохо сформулированные вопросы. Поэтому перед тестом мы объясняем каждый вопрос, даём тренировочный тест и просим выспаться. Неопределённый результат бывает не больше чем в 10 случаях из 100, и тогда мы предлагаем повторный тест со скидкой."] },
      ],
      faq: [
        { q: "А если человек очень волнуется, его признают лжецом?", a: "Нет. Волнение одинаково на все вопросы, а алгоритм сравнивает реакции на значимые и нейтральные утверждения между собой." },
        { q: "Можно ли обмануть онлайн-тест VerifEye?", a: "Тот же принцип, та же камера, только в телефоне. Попытки смотреть в сторону или читать не с экрана помечаются как недействительный тест." },
      ],
    },
    en: {
      title: "Can You Beat a Lie Detector: What Works and What Does Not",
      description: "A tack in the shoe, sedatives, counting in your head, “believing your own lie”. Which of these work against a classic polygraph, and which work against EyeDetect.",
      h1: "Can You Beat a Lie Detector",
      lead: "The internet is full of tips on how to “pass a polygraph”. Most of them are about the classic device with sensors and about the 1990s. Let us go through them one by one: which still work, and why none of them work against a test based on eye movements.",
      sections: [
        { h2: "Tips from the internet and what is wrong with them", paragraphs: ["All the known countermeasures are designed for the classic polygraph: it measures breathing, blood pressure and sweating, and these can be changed deliberately."], list: ["A tack in the shoe, tensing muscles: creates an artificial reaction to control questions. An experienced polygraph examiner sees it on the chart, and EyeDetect does not measure the body at all.", "Sedatives or alcohol: blunt reactions evenly, and the test is declared invalid. On EyeDetect, a person under the influence is not admitted to the test.", "Counting in your head, recalling something unpleasant: affects only breathing and blood pressure. The pupil does change too, but equally on all statements, so it does not affect the test's conclusion.", "“Believing your own lie”: sounds good, but the brain still spends more effort on a false answer. That effort is exactly what is recorded."] },
        { h2: "Why the eyes do not lie", paragraphs: ["The pupil dilates by fractions of a millimeter when the brain works harder. This cannot be controlled consciously, just as you cannot order your heart to stop beating. EyeDetect also records reading speed, re-reading of words, response time and errors. More than 50 measurements per second, and the person controls none of them.", "There is one more detail. The statements on the screen are repeated many times in different wordings. You can lie once; you cannot lie consistently 60 times in a row."] },
        { h2: "What happens if you try", paragraphs: ["The algorithm has a separate category, “random responding”: when a person presses the buttons at random, stalls for time or does not read the text. Such a test is declared invalid and does not look “truthful”. For the client, that is information too."] },
        { h2: "What really affects the result", paragraphs: ["Not tricks, but condition: lack of sleep, severe anxiety, poorly worded questions. That is why before the test we explain every question, give a practice test and ask you to get a good night's sleep. An inconclusive result occurs in no more than 10 cases out of 100, and then we offer a retest at a discount."] },
      ],
      faq: [
        { q: "If a person is very nervous, will they be called a liar?", a: "No. Nervousness is the same across all questions, while the algorithm compares reactions to relevant and neutral statements against each other." },
        { q: "Can the VerifEye online test be beaten?", a: "Same principle, same camera, only in a phone. Attempts to look away or read from something other than the screen are flagged as an invalid test." },
      ],
    },
  },
  {
    slug: "yak-pidgotuvatysya-do-testu-na-detektori-brekhni",
    date: "2026-09-03",
    situation: null,
    uk: {
      title: "Як підготуватися до тесту на детекторі брехні",
      description: "Що робити напередодні тесту EyeDetect або VerifEye: сон, їжа, ліки, окуляри, одяг. Що взяти з собою і чого не робити. Коротка пам'ятка від спеціаліста.",
      h1: "Як підготуватися до тесту на детекторі брехні",
      lead: "Підготовка потрібна не для того, щоб «пройти», а щоб тест був дійсним з першого разу. Половина невизначених результатів це недосипання і поспіх.",
      sections: [
        { h2: "Напередодні", paragraphs: ["Три речі, які справді важливі."], list: ["Спати щонайменше 7 годин. Втома уповільнює читання і збиває алгоритм.", "Не вживати алкоголь за 24 години, наркотичні речовини за 72 години. Інакше тест не проводиться.", "Не міняти звичні ліки без потреби. Якщо приймаєте щось щодня, скажіть про це до тесту."] },
        { h2: "У день тесту", paragraphs: ["Поїсти за 1–2 години, щоб не було ні голоду, ні важкості. Кава в звичній кількості не заважає. Взяти окуляри або лінзи, якщо носите: тест проходить із ними. Прийти на 10 хвилин раніше, щоб не хвилюватися через запізнення."] },
        { h2: "Перед самим тестом", paragraphs: ["Ви прочитаєте всі питання з поясненнями. Якщо щось незрозуміло, запитайте, це нормально і навіть потрібно. Якщо є епізод, який стосується питання, скажіть про нього одразу: названий наперед, він не впливає на результат. Далі тренувальний тест на 5 хвилин, щоб звикнути до екрана і кнопок."] },
        { h2: "Під час тесту", paragraphs: ["Тримати підборіддя на підставці, рухати лише очима, читати кожне твердження повністю, відповідати чесно і не затягувати. Не розмовляти, не поправляти обладнання. Це все, що потрібно."] },
        { h2: "Для онлайн-тесту VerifEye", paragraphs: ["Тиха кімната, рівне світло без вікна за спиною, телефон на підставці на рівні очей, авіарежим з Wi-Fi, 20 вільних хвилин. Окуляри з сильними лінзами можуть заважати камері, тоді краще тест у кабінеті."] },
      ],
      faq: [
        { q: "Чи можна пройти тест під час хвороби?", a: "Застуда не заважає. Гарячка, сильний кашель або хвороба очей заважають, краще перенести." },
        { q: "Чи можна взяти з собою підтримку?", a: "До кабінету так, у кімнату тесту ні. Під час тесту в кімнаті лише людина і спеціаліст." },
      ],
    },
    ru: {
      title: "Как подготовиться к тесту на детекторе лжи",
      description: "Что делать накануне теста EyeDetect или VerifEye: сон, еда, лекарства, очки, одежда. Что взять с собой и чего не делать. Короткая памятка от специалиста.",
      h1: "Как подготовиться к тесту на детекторе лжи",
      lead: "Подготовка нужна не для того, чтобы «пройти», а чтобы тест был действительным с первого раза. Половина неопределённых результатов это недосып и спешка.",
      sections: [
        { h2: "Накануне", paragraphs: ["Три вещи, которые действительно важны."], list: ["Спать не менее 7 часов. Усталость замедляет чтение и сбивает алгоритм.", "Не употреблять алкоголь за 24 часа, наркотические вещества за 72 часа. Иначе тест не проводится.", "Не менять привычные лекарства без необходимости. Если принимаете что-то ежедневно, скажите об этом до теста."] },
        { h2: "В день теста", paragraphs: ["Поесть за 1–2 часа, чтобы не было ни голода, ни тяжести. Кофе в привычном количестве не мешает. Взять очки или линзы, если носите: тест проходит с ними. Прийти на 10 минут раньше, чтобы не волноваться из-за опоздания."] },
        { h2: "Перед самим тестом", paragraphs: ["Вы прочитаете все вопросы с пояснениями. Если что-то непонятно, спросите, это нормально и даже нужно. Если есть эпизод, который касается вопроса, скажите о нём сразу: названный заранее, он не влияет на результат. Дальше тренировочный тест на 5 минут, чтобы привыкнуть к экрану и кнопкам."] },
        { h2: "Во время теста", paragraphs: ["Держать подбородок на подставке, двигать только глазами, читать каждое утверждение полностью, отвечать честно и не тянуть время. Не разговаривать, не поправлять оборудование. Это всё, что нужно."] },
        { h2: "Для онлайн-теста VerifEye", paragraphs: ["Тихая комната, ровный свет без окна за спиной, телефон на подставке на уровне глаз, авиарежим с Wi-Fi, 20 свободных минут. Очки с сильными линзами могут мешать камере, тогда лучше тест в кабинете."] },
      ],
      faq: [
        { q: "Можно ли пройти тест во время болезни?", a: "Простуда не мешает. Температура, сильный кашель или болезнь глаз мешают, лучше перенести." },
        { q: "Можно ли взять с собой поддержку?", a: "В кабинет да, в комнату теста нет. Во время теста в комнате только человек и специалист." },
      ],
    },
    en: {
      title: "How to Prepare for a Lie Detector Test",
      description: "What to do the day before an EyeDetect or VerifEye test: sleep, food, medication, glasses, clothing. What to bring and what not to do. A short checklist from the examiner.",
      h1: "How to Prepare for a Lie Detector Test",
      lead: "Preparation is not about “passing”. It is about making the test valid on the first attempt. Half of all inconclusive results come down to lack of sleep and rushing.",
      sections: [
        { h2: "The day before", paragraphs: ["Three things that really matter."], list: ["Sleep at least 7 hours. Fatigue slows reading and throws off the algorithm.", "No alcohol for 24 hours, no drugs for 72 hours. Otherwise the test is not conducted.", "Do not change your regular medication unless necessary. If you take something daily, mention it before the test."] },
        { h2: "On the day of the test", paragraphs: ["Eat 1–2 hours before, so you are neither hungry nor overly full. Your usual amount of coffee is fine. Bring your glasses or contact lenses if you wear them: the test is taken with them on. Arrive 10 minutes early so you are not stressed about being late."] },
        { h2: "Right before the test", paragraphs: ["You will read all the questions with explanations. If anything is unclear, ask; that is normal and even necessary. If there is an episode related to a question, mention it right away: disclosed in advance, it does not affect the result. Then a 5-minute practice test to get used to the screen and the buttons."] },
        { h2: "During the test", paragraphs: ["Keep your chin on the rest, move only your eyes, read each statement in full, answer honestly and do not stall. Do not talk, do not adjust the equipment. That is all that is required."] },
        { h2: "For the VerifEye online test", paragraphs: ["A quiet room, even lighting with no window behind you, the phone on a stand at eye level, airplane mode with Wi-Fi on, 20 free minutes. Glasses with strong lenses can interfere with the camera; in that case the test in our Lviv office is the better option."] },
      ],
      faq: [
        { q: "Can I take the test while sick?", a: "A common cold is not a problem. A fever, a heavy cough or an eye condition are, so it is better to reschedule." },
        { q: "Can I bring someone for support?", a: "To the office, yes; into the test room, no. During the test only the examinee and the examiner are in the room." },
      ],
    },
  },
  {
    slug: "chy-ye-detektor-brekhni-dokazom-u-sudi",
    date: "2026-09-01",
    situation: "dispute",
    uk: {
      title: "Чи є результат детектора брехні доказом у суді в Україні",
      description: "Чесна відповідь: ні, результат тесту не є доказом. Але його використовують у мирових угодах, внутрішніх розслідуваннях і як підставу для рішень. Що каже закон.",
      h1: "Чи є результат детектора брехні доказом у суді",
      lead: "Коротко: ні. Ні класичний поліграф, ні EyeDetect не є доказом у розумінні кримінального чи цивільного процесу України. Довша відповідь цікавіша, бо тест усе одно змінює хід справ.",
      sections: [
        { h2: "Що каже закон", paragraphs: ["В Україні немає закону, який визнає результати психофізіологічних досліджень доказом. Суд може прийняти висновок як один із документів, але не зобов'язаний і зазвичай не бере його за основу рішення. Те саме стосується більшості країн ЄС. У США практика різниться між штатами, але й там результат рідко приймається без згоди обох сторін."] },
        { h2: "Де результат працює насправді", paragraphs: ["Три ситуації, в яких тест впливає на результат без суду."], list: ["Мирова угода. Коли одна сторона підтверджує свою версію тестом, а інша відмовляється проходити, переговори швидко закінчуються.", "Внутрішні розслідування в компанії. Роботодавець ухвалює кадрове рішення на підставі звіту і власного розслідування, суд тут не потрібен.", "Сімейні рішення. Питання вірності чи прихованих фінансів вирішуються між людьми, а не в суді, і тест дає їм основу для розмови."] },
        { h2: "Чому ми кажемо це чесно", paragraphs: ["Дехто обіцяє «висновок для суду». Ми ні, бо це неправда. Тест дає оцінку від 1 до 99 по кожному питанню і показує, яка версія подій витримує перевірку. Що з цим робити далі, вирішуєте ви, іноді з адвокатом."] },
        { h2: "Що можна отримати", paragraphs: ["Письмовий звіт з оцінками, датою, назвою тесту і підписом спеціаліста. Його можна долучити до матеріалів як документ. Він не змусить суд, але покаже вашу позицію і готовність до перевірки."] },
      ],
      faq: [
        { q: "Чи можна пройти тест на вимогу адвоката?", a: "Так. Адвокати замовляють тести, щоб зрозуміти позицію клієнта до процесу або підготувати мирову угоду." },
        { q: "Чи можна змусити іншу сторону пройти тест?", a: "Ні, лише добровільно. Відмова іншої сторони теж інформація для переговорів." },
      ],
    },
    ru: {
      title: "Является ли результат детектора лжи доказательством в суде в Украине",
      description: "Честный ответ: нет, результат теста не является доказательством. Но его используют в мировых соглашениях, внутренних расследованиях и как основание для решений. Что говорит закон и как это работает на практике.",
      h1: "Является ли результат детектора лжи доказательством в суде",
      lead: "Коротко: нет. Ни классический полиграф, ни EyeDetect не являются доказательством в понимании уголовного или гражданского процесса Украины. Длинный ответ интереснее, потому что тест всё равно меняет ход дел.",
      sections: [
        { h2: "Что говорит закон", paragraphs: ["В Украине нет закона, который признаёт результаты психофизиологических исследований доказательством. Суд может принять заключение как один из документов, но не обязан и обычно не берёт его за основу решения. То же касается большинства стран ЕС. В США практика различается между штатами, но и там результат редко принимается без согласия обеих сторон."] },
        { h2: "Где результат работает на самом деле", paragraphs: ["Три ситуации, в которых тест влияет на результат без суда."], list: ["Мировое соглашение. Когда одна сторона подтверждает свою версию тестом, а другая отказывается проходить, переговоры быстро заканчиваются.", "Внутренние расследования в компании. Работодатель принимает кадровое решение на основании отчёта и собственного расследования, суд здесь не нужен.", "Семейные решения. Вопросы верности или скрытых финансов решаются между людьми, а не в суде, и тест даёт им основу для разговора."] },
        { h2: "Почему мы говорим это честно", paragraphs: ["Некоторые обещают «заключение для суда». Мы нет, потому что это неправда. Тест даёт оценку от 1 до 99 по каждому вопросу и показывает, какая версия событий выдерживает проверку. Что с этим делать дальше, решаете вы, иногда с адвокатом."] },
        { h2: "Что можно получить", paragraphs: ["Письменный отчёт с оценками, датой, названием теста и подписью специалиста. Его можно приобщить к материалам как документ. Он не заставит суд, но покажет вашу позицию и готовность к проверке."] },
      ],
      faq: [
        { q: "Можно ли пройти тест по требованию адвоката?", a: "Да. Адвокаты заказывают тесты, чтобы понять позицию клиента до процесса или подготовить мировое соглашение." },
        { q: "Можно ли заставить другую сторону пройти тест?", a: "Нет, только добровольно. Отказ другой стороны тоже информация для переговоров." },
      ],
    },
    en: {
      title: "Is a Lie Detector Result Admissible as Evidence in a Ukrainian Court",
      description: "The honest answer: no, the test result is not evidence. But it is used in settlement agreements, internal investigations and as a basis for decisions. What the law says.",
      h1: "Is a Lie Detector Result Admissible as Evidence in Court",
      lead: "In short: no. Neither the classic polygraph nor EyeDetect counts as evidence under Ukrainian criminal or civil procedure. The longer answer is more interesting, because the test still changes how cases play out.",
      sections: [
        { h2: "What the law says", paragraphs: ["Ukraine has no law that recognizes the results of psychophysiological examinations as evidence. A court may accept the report as one of the documents in the file, but it is not obliged to and usually does not base its decision on it. The same applies to most EU countries. In the US, practice varies by state, but even there a result is rarely admitted without the consent of both parties."] },
        { h2: "Where the result actually works", paragraphs: ["Three situations where the test affects the outcome without a court."], list: ["Settlement agreements. When one party confirms its version with a test and the other refuses to take one, negotiations end quickly.", "Internal investigations in a company. The employer makes a personnel decision based on the report and its own investigation; no court is needed.", "Family decisions. Questions of fidelity or hidden finances are settled between people, not in court, and the test gives them a basis for the conversation."] },
        { h2: "Why we say this openly", paragraphs: ["Some promise a “report for court”. We do not, because that is not true. The test gives a score from 1 to 99 on each question and shows which version of events holds up under scrutiny. What to do with that next is up to you, sometimes together with a lawyer."] },
        { h2: "What you can get", paragraphs: ["A written report with scores, the date, the name of the test and the examiner's signature. It can be added to the case file as a document. It will not bind the court, but it will show your position and your willingness to be tested."] },
      ],
      faq: [
        { q: "Can I take the test at my lawyer's request?", a: "Yes. Lawyers order tests to understand their client's position before proceedings or to prepare a settlement agreement." },
        { q: "Can the other party be forced to take the test?", a: "No, only voluntarily. The other party's refusal is also information for the negotiations." },
      ],
    },
  },
];

export const blogPosts = [...blogPosts1, ...blogPosts2];

export const getPost = (slug, lang) => {
  const p = blogPosts.find((x) => x.slug === slug);
  if (!p) return null;
  return { slug: p.slug, date: p.date, situation: p.situation, ...(p[lang] || p.uk) };
};

export const getPosts = (lang) =>
  [...blogPosts]
    .sort((a, b) => (a.date < b.date ? 1 : -1))
    .map((p) => ({ slug: p.slug, date: p.date, ...(p[lang] || p.uk) }));
