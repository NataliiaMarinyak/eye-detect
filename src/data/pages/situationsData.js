// Сторінки ситуацій /situations/[slug]. Ключі: uk, ru, en. Нові ситуації у ./situations/*.js.
import { premarital } from "./situations/premarital";
import { familyMoney } from "./situations/family-money";
import { gambling } from "./situations/gambling";
import { secondOpinion } from "./situations/second-opinion";
// Приклади питань це формулювання того типу, що реально використовуються в тестах,
// без даних клієнтів.
const shared = {
  uk: {
    crumbHome: "Головна",
    crumbSection: "Ситуації",
    howTitle: "Як це вирішує тест",
    questionsTitle: "Які питання можна перевірити",
    questionsNote: "Питання завжди про факти й події за конкретний період. Не про думки, наміри чи почуття.",
    formatTitle: "Онлайн чи в кабінеті",
    priceTitle: "Скільки коштує",
    priceNote: "Ціна за один тест. За кордоном окремо оплачується дорога і приміщення.",
    online: { title: "VerifEye онлайн", text: "15 хвилин з телефона, з будь-якого міста. Звіт у PDF за 20 хвилин.", price: "від 2 500 ₴", cta: "Пройти онлайн" },
    office: { title: "EyeDetect у кабінеті або з виїздом", text: "30–45 хвилин на обладнанні Converus у Львові або з виїздом. Звіт одразу після тесту.", price: "від 5 500 ₴", cta: "Записатися" },
    reportTitle: "Що ви отримаєте",
    reportCaption: "Справжній звіт EyeDetect, персональні дані розмито.",
    ctaTitle: "Готові дізнатися правду?",
    ctaText: "Залиште заявку або зателефонуйте. Відповімо в робочий час протягом години.",
    otherTitle: "Інші ситуації",
  },
  ru: {
    crumbHome: "Главная",
    crumbSection: "Ситуации",
    howTitle: "Как это решает тест",
    questionsTitle: "Какие вопросы можно проверить",
    questionsNote: "Вопросы всегда о фактах и событиях за конкретный период. Не о мыслях, намерениях или чувствах.",
    formatTitle: "Онлайн или в кабинете",
    priceTitle: "Сколько стоит",
    priceNote: "Цена за один тест. За границей отдельно оплачивается дорога и помещение.",
    online: { title: "VerifEye онлайн", text: "15 минут с телефона, из любого города. Отчёт в PDF за 20 минут.", price: "от 2 500 ₴", cta: "Пройти онлайн" },
    office: { title: "EyeDetect в кабинете или с выездом", text: "30–45 минут на оборудовании Converus во Львове или с выездом. Отчёт сразу после теста.", price: "от 5 500 ₴", cta: "Записаться" },
    reportTitle: "Что вы получите",
    reportCaption: "Настоящий отчёт EyeDetect, персональные данные размыты.",
    ctaTitle: "Готовы узнать правду?",
    ctaText: "Оставьте заявку или позвоните. Ответим в рабочее время в течение часа.",
    otherTitle: "Другие ситуации",
  },
  en: {
    crumbHome: "Home",
    crumbSection: "Situations",
    howTitle: "How the test solves it",
    questionsTitle: "What questions can be tested",
    questionsNote: "Questions are always about facts and events within a specific period. Not about thoughts, intentions, or feelings.",
    formatTitle: "Online or in our Lviv office",
    priceTitle: "What it costs",
    priceNote: "Price per test. For tests abroad, travel and venue are billed separately.",
    online: { title: "VerifEye online", text: "15 minutes from a phone, from any city. PDF report within 20 minutes.", price: "from UAH 2,500", cta: "Take the online test" },
    office: { title: "EyeDetect in our Lviv office or on-site", text: "30–45 minutes on Converus equipment in Lviv or on-site (we come to you). Report right after the test.", price: "from UAH 5,500", cta: "Book a test" },
    reportTitle: "What you get",
    reportCaption: "A real EyeDetect report, personal data blurred.",
    ctaTitle: "Ready to find out the truth?",
    ctaText: "Send a request or call us. We reply within an hour during business hours.",
    otherTitle: "Other situations",
  },
};

export const situations = [
  {
    slug: "fidelity",
    icon: "/sprite.svg#icon-rings",
    report: "/images/report-sample-eyedetect.webp",
    uk: {
      nav: "Вірність",
      seo: {
        title: "Перевірка на вірність на детекторі брехні — у кабінеті або онлайн",
        description: "Тест на вірність партнера: EyeDetect у Львові за 30–45 хв або VerifEye онлайн з телефона за 15 хв. Конкретні питання, результат за 45 хвилин, повна конфіденційність.",
        keywords: ["перевірка на вірність", "тест на вірність", "детектор брехні зрада", "поліграф вірність", "перевірити партнера"],
      },
      h1: "Перевірка на вірність на детекторі брехні",
      sub: "Коли підозри не дають жити, а розмови ходять по колу, тест дає конкретну відповідь на конкретні питання. Конкретні питання про конкретний період, результат за 45 хвилин, і ніхто, крім вас, його не побачить.",
      facts: ["результат за 45 хвилин", "онлайн або в кабінеті", "лише ви бачите звіт"],
      how: [
        { title: "Питання про факти, а не про почуття", text: "Ми не питаємо «чи кохаєш». Ми питаємо, чи був статевий контакт з іншою людиною з конкретної дати, чи було романтичне листування, чи були приховані витрати. На такі питання є однозначна відповідь." },
        { title: "Обидва партнери читають питання заздалегідь", text: "Перед тестом людина читає повне пояснення кожного питання: що вважається контактом, що ні, за який період. Несподіванок і пасток немає: обидва партнери розуміють питання однаково ще до тесту." },
        { title: "Спогади не спотворюють результат", text: "Класичний поліграф реагує на емоцію, а її може викликати й спогад про зраду в минулих стосунках. В EyeDetect увага прикута до тексту: твердження змінюються кожні 5–7 секунд, на асоціації не лишається часу. Тому для тестів на вірність ризик хибного результату нижчий." },
        { title: "Оцінка по кожному питанню окремо", text: "Звіт показує бал від 1 до 99 по кожній темі. Буває, що за статевим контактом людина чиста, а за листуванням ні. Ви бачите повну картину, а не одне слово «брехав»." },
      ],
      questions: [
        "З 12 березня 2023 року ви мали статевий контакт з іншою людиною?",
        "За останні 6 місяців ви таємно від партнера мали романтичне спілкування з іншою людиною?",
        "За останні 6 місяців ви таємно витрачали більше 100 доларів на іншу людину?",
        "У вас є приховані акаунти або переписки, про які партнер не знає?",
      ],
      faq: [
        { q: "Чи можна перевірити партнера без його згоди?", a: "Ні. Тест проходить лише добровільно, з письмовою згодою. Відмова від тесту теж інформація, але змусити людину неможливо." },
        { q: "Партнер в іншому місті. Що робити?", a: "VerifEye онлайн: ми надсилаємо посилання, людина проходить тест з телефона у тихій кімнаті, звіт приходить вам на пошту за 20 хвилин." },
        { q: "Що, як результат «невизначений»?", a: "Так буває не більше ніж у 10 випадках зі 100, найчастіше через втому або хвилювання. Повторний тест зі знижкою 50%." },
        { q: "Чи дізнається хтось про тест?", a: "Ні. Тест можна пройти анонімно: без імені та фото, лише під номером. На сервер Converus для підрахунку йдуть тільки координати рухів очей, розмір зіниці та відповіді «правда/неправда». Це не фото і не біометрія, за цими даними людину неможливо впізнати. Ми не публікуємо фото й відгуки без дозволу, не обговорюємо перевірки і не зберігаємо звіти довше, ніж потрібно для видачі результату." },
      ],
    },
    ru: {
      nav: "Верность",
      seo: {
        title: "Проверка на верность на детекторе лжи — в кабинете или онлайн",
        description: "Тест на верность партнёра: EyeDetect во Львове за 30–45 мин или VerifEye онлайн с телефона за 15 мин. Конкретные вопросы, результат за 45 минут, полная конфиденциальность.",
        keywords: ["проверка на верность", "тест на верность", "детектор лжи измена", "полиграф верность", "проверить партнёра"],
      },
      h1: "Проверка на верность на детекторе лжи",
      sub: "Когда подозрения не дают жить, а разговоры ходят по кругу, тест даёт конкретный ответ на конкретные вопросы. Конкретные вопросы о конкретном периоде, результат за 45 минут, и никто, кроме вас, его не увидит.",
      facts: ["результат за 45 минут", "онлайн или в кабинете", "только вы видите отчёт"],
      how: [
        { title: "Вопросы о фактах, а не о чувствах", text: "Мы не спрашиваем «любишь ли». Мы спрашиваем, был ли половой контакт с другим человеком с конкретной даты, была ли романтическая переписка, были ли скрытые траты. На такие вопросы есть однозначный ответ." },
        { title: "Оба партнёра читают вопросы заранее", text: "Перед тестом человек читает полное объяснение каждого вопроса: что считается контактом, что нет, за какой период. Неожиданностей и ловушек нет: оба партнёра понимают вопросы одинаково ещё до теста." },
        { title: "Воспоминания не искажают результат", text: "Классический полиграф реагирует на эмоцию, а её может вызвать и воспоминание об измене в прошлых отношениях. В EyeDetect внимание приковано к тексту: утверждения меняются каждые 5–7 секунд, на ассоциации не остаётся времени. Поэтому для тестов на верность риск ложного результата ниже." },
        { title: "Оценка по каждому вопросу отдельно", text: "Отчёт показывает балл от 1 до 99 по каждой теме. Бывает, что по половому контакту человек чист, а по переписке нет. Вы видите полную картину, а не одно слово «врал»." },
      ],
      questions: [
        "С 12 марта 2023 года вы имели половой контакт с другим человеком?",
        "За последние 6 месяцев вы тайно от партнёра имели романтическое общение с другим человеком?",
        "За последние 6 месяцев вы тайно тратили больше 100 долларов на другого человека?",
        "У вас есть скрытые аккаунты или переписки, о которых партнёр не знает?",
      ],
      faq: [
        { q: "Можно ли проверить партнёра без его согласия?", a: "Нет. Тест проходит только добровольно, с письменным согласием. Отказ от теста тоже информация, но заставить человека невозможно." },
        { q: "Партнёр в другом городе. Что делать?", a: "VerifEye онлайн: мы отправляем ссылку, человек проходит тест с телефона в тихой комнате, отчёт приходит вам на почту за 20 минут." },
        { q: "Что, если результат «неопределённый»?", a: "Так бывает не больше чем в 10 случаях из 100, чаще всего из-за усталости или волнения. Повторный тест со скидкой 50%." },
        { q: "Узнает ли кто-то о тесте?", a: "Нет. Тест можно пройти анонимно: без имени и фото, только под номером. На сервер Converus для подсчёта идут только координаты движений глаз, размер зрачка и ответы «правда/неправда». Это не фото и не биометрия, по этим данным человека невозможно узнать. Мы не публикуем фото и отзывы без разрешения, не обсуждаем проверки и не храним отчёты дольше, чем нужно для выдачи результата." },
      ],
    },
    en: {
      nav: "Fidelity",
      seo: {
        title: "Fidelity Test on a Lie Detector — In Our Lviv Office or Online",
        description: "Partner fidelity test: EyeDetect in Lviv in 30–45 minutes or VerifEye online from a phone in 15 minutes. Specific questions, result in 45 minutes, full confidentiality.",
        keywords: ["fidelity test", "infidelity lie detector test", "cheating polygraph test", "polygraph fidelity", "test my partner"],
      },
      h1: "Fidelity Test on a Lie Detector",
      sub: "When suspicion makes life unbearable and every conversation goes in circles, the test gives a specific answer to specific questions. Specific questions about a specific period, a result in 45 minutes, and no one but you will see it.",
      facts: ["result in 45 minutes", "online or in our Lviv office", "only you see the report"],
      how: [
        { title: "Questions about facts, not feelings", text: "We do not ask “do you love me”. We ask whether there was sexual contact with another person since a specific date, whether there was romantic correspondence, whether there were hidden expenses. Such questions have a clear yes-or-no answer." },
        { title: "Both partners read the questions in advance", text: "Before the test, the person reads a full explanation of every question: what counts as contact, what does not, and for which period. There are no surprises or traps: both partners understand the questions the same way before the test begins." },
        { title: "Memories do not distort the result", text: "A classic polygraph reacts to emotion, and emotion can also be triggered by the memory of cheating in a past relationship. In EyeDetect, attention is locked on the text: statements change every 5–7 seconds, leaving no time for associations. That is why the risk of a false result is lower in fidelity tests." },
        { title: "A separate score for each question", text: "The report shows a score from 1 to 99 for each topic. It happens that a person is clean on sexual contact but not on correspondence. You see the full picture, not a single word: “lied”." },
      ],
      questions: [
        "Since March 12, 2023, have you had sexual contact with another person?",
        "In the last 6 months, have you secretly had a romantic relationship with another person behind your partner's back?",
        "In the last 6 months, have you secretly spent more than 100 dollars on another person?",
        "Do you have hidden accounts or conversations your partner does not know about?",
      ],
      faq: [
        { q: "Can I test my partner without their consent?", a: "No. The test is taken voluntarily only, with written consent. A refusal is also information, but no one can be forced to take the test." },
        { q: "My partner is in another city. What can we do?", a: "VerifEye online: we send a link, the person takes the test from a phone in a quiet room, and the report arrives in your inbox within 20 minutes." },
        { q: "What if the result is “inconclusive”?", a: "This happens in no more than 10 cases out of 100, most often because of fatigue or nervousness. A repeat test is 50% off." },
        { q: "Will anyone find out about the test?", a: "No. The test can be taken anonymously: no name or photo, only a number. Only eye-movement coordinates, pupil size, and the “true/false” answers are sent to the Converus server for scoring. This is not a photo and not biometrics; a person cannot be identified from this data. We do not publish photos or reviews without permission, do not discuss tests, and do not keep reports longer than needed to deliver the result." },
      ],
    },
  },
  {
    slug: "theft",
    icon: "/sprite.svg#icon-money",
    report: "/images/report-sample-theft.webp",
    uk: {
      nav: "Крадіжка",
      seo: {
        title: "Крадіжка або нестача: перевірка причетних на детекторі брехні",
        description: "Зникли гроші, товар або нестача в касі. EyeDetect перевіряє 6–8 осіб за день і показує, хто причетний, без звинувачень навмання. Львів і виїзд по Україні.",
        keywords: ["крадіжка на роботі поліграф", "перевірка на крадіжку", "нестача каса поліграф", "хто вкрав детектор брехні", "перевірка працівників крадіжка"],
      },
      h1: "Крадіжка на роботі: перевірка на детекторі брехні",
      sub: "Зникла виручка, товар зі складу або гроші з сейфа. Підозрюєте всіх і нікого. Тест по 30–45 хвилин на людину дає по кожному чітку відповідь: причетний чи ні.",
      facts: ["6–8 осіб за день", "виїзд у ваш офіс", "звіт по кожному одразу після тесту"],
      how: [
        { title: "Питання про конкретний епізод", text: "Не «чи ви чесна людина», а «чи брали ви гроші з каси 14 серпня», «чи знаєте ви, хто взяв». Чим конкретніше питання, тим точніший результат." },
        { title: "Невинні не бояться тесту", text: "Найчастіше після оголошення про перевірку винний зізнається або звільняється сам. Решта проходять тест спокійно і отримують підтвердження, що до них претензій нема." },
        { title: "Звіт для рішення, а не для суду", text: "Результат допомагає вам ухвалити кадрове рішення і спрямувати внутрішнє розслідування. Доказом у суді він не є, і ми про це кажемо чесно." },
      ],
      questions: [
        "Ви брали гроші з каси компанії без дозволу за останні 3 місяці?",
        "Ви знаєте, хто саме взяв товар зі складу 14 серпня?",
        "Ви обманювали роботодавця більше ніж на 100 доларів за час роботи?",
        "Ви привласнювали базу клієнтів або документи компанії?",
      ],
      faq: [
        { q: "Скільки людей можна перевірити за день?", a: "6–8 осіб при виїзді в офіс. Для більшої кількості плануємо два дні." },
        { q: "Чи можна змусити працівника пройти тест?", a: "Ні. Лише письмова згода. Але відмова без причини сама по собі багато говорить керівнику." },
        { q: "Що робити з результатом?", a: "Це підстава для розмови, внутрішньої перевірки або кадрового рішення. Ми пояснюємо звіт і радимо, як діяти далі, але рішення за вами." },
        { q: "Чи можна перевірити віддалених працівників?", a: "Так, через VerifEye з телефона. Для крадіжок радимо все ж EyeDetect у кабінеті, бо контроль умов вищий." },
      ],
    },
    ru: {
      nav: "Кража",
      seo: {
        title: "Кража или недостача: проверка причастных на детекторе лжи",
        description: "Пропали деньги, товар или недостача в кассе. EyeDetect проверяет 6–8 человек в день и показывает, кто причастен, без обвинений наугад. Львов и выезд по Украине.",
        keywords: ["кража на работе полиграф", "проверка на кражу", "недостача касса полиграф", "кто украл детектор лжи", "проверка сотрудников кража"],
      },
      h1: "Кража на работе: проверка на детекторе лжи",
      sub: "Пропала выручка, товар со склада или деньги из сейфа. Подозреваете всех и никого. Тест по 30–45 минут на человека даёт по каждому чёткий ответ: причастен или нет.",
      facts: ["6–8 человек в день", "выезд в ваш офис", "отчёт по каждому сразу после теста"],
      how: [
        { title: "Вопросы о конкретном эпизоде", text: "Не «честный ли вы человек», а «брали ли вы деньги из кассы 14 августа», «знаете ли вы, кто взял». Чем конкретнее вопрос, тем точнее результат." },
        { title: "Невиновные не боятся теста", text: "Чаще всего после объявления о проверке виновный признаётся или увольняется сам. Остальные проходят тест спокойно и получают подтверждение, что к ним претензий нет." },
        { title: "Отчёт для решения, а не для суда", text: "Результат помогает вам принять кадровое решение и направить внутреннее расследование. Доказательством в суде он не является, и мы говорим об этом честно." },
      ],
      questions: [
        "Вы брали деньги из кассы компании без разрешения за последние 3 месяца?",
        "Вы знаете, кто именно взял товар со склада 14 августа?",
        "Вы обманывали работодателя больше чем на 100 долларов за время работы?",
        "Вы присваивали базу клиентов или документы компании?",
      ],
      faq: [
        { q: "Сколько людей можно проверить за день?", a: "6–8 человек при выезде в офис. Для большего количества планируем два дня." },
        { q: "Можно ли заставить сотрудника пройти тест?", a: "Нет. Только письменное согласие. Но отказ без причины сам по себе многое говорит руководителю." },
        { q: "Что делать с результатом?", a: "Это основание для разговора, внутренней проверки или кадрового решения. Мы объясняем отчёт и советуем, как действовать дальше, но решение за вами." },
        { q: "Можно ли проверить удалённых сотрудников?", a: "Да, через VerifEye с телефона. Для краж всё же советуем EyeDetect в кабинете, потому что контроль условий выше." },
      ],
    },
    en: {
      nav: "Theft",
      seo: {
        title: "Theft or Shortage: Lie Detector Test for Those Involved",
        description: "Missing money, missing goods, or a cash shortage. EyeDetect tests 6–8 people per day and shows who is involved, without random accusations. Lviv and on-site across Ukraine.",
        keywords: ["workplace theft polygraph", "theft lie detector test", "cash shortage polygraph", "who stole lie detector", "employee theft screening"],
      },
      h1: "Workplace Theft: Lie Detector Test",
      sub: "Revenue is missing, goods are gone from the warehouse, or money is gone from the safe. You suspect everyone and no one. A 30–45 minute test per person gives a clear answer for each: involved or not.",
      facts: ["6–8 people per day", "on-site at your office", "report on each person right after the test"],
      how: [
        { title: "Questions about a specific incident", text: "Not “are you an honest person”, but “did you take money from the register on August 14”, “do you know who took it”. The more specific the question, the more accurate the result." },
        { title: "The innocent are not afraid of the test", text: "Most often, once a test is announced, the guilty person confesses or quits on their own. The rest take the test calmly and receive confirmation that there are no claims against them." },
        { title: "A report for a decision, not for court", text: "The result helps you make a personnel decision and focus an internal investigation. It is not evidence in court, and we say so honestly." },
      ],
      questions: [
        "In the last 3 months, have you taken money from the company register without permission?",
        "Do you know exactly who took the goods from the warehouse on August 14?",
        "During your employment, have you cheated your employer out of more than 100 dollars?",
        "Have you taken the client database or company documents for yourself?",
      ],
      faq: [
        { q: "How many people can be tested in a day?", a: "6–8 people when we come to your office. For larger groups we plan two days." },
        { q: "Can an employee be forced to take the test?", a: "No. Written consent only. But a refusal without a reason says a lot to a manager on its own." },
        { q: "What do I do with the result?", a: "It is grounds for a conversation, an internal review, or a personnel decision. We explain the report and advise on next steps, but the decision is yours." },
        { q: "Can remote employees be tested?", a: "Yes, via VerifEye from a phone. For theft cases we still recommend EyeDetect in our Lviv office, because the conditions are better controlled." },
      ],
    },
  },
  {
    slug: "leak",
    icon: "/sprite.svg#icon-competitors",
    report: "/images/report-sample-business.webp",
    uk: {
      nav: "Витік інформації",
      seo: {
        title: "Витік інформації: перевірка працівників на детекторі брехні",
        description: "Конкуренти дізналися ціни, клієнтську базу або плани. EyeDetect перевіряє, хто передавав дані, без звинувачень навмання. 6–8 осіб за день, звіт одразу після тесту.",
        keywords: ["витік інформації перевірка", "поліграф витік даних", "перевірка персоналу на лояльність", "хто злив базу клієнтів", "комерційна таємниця поліграф"],
      },
      h1: "Витік інформації: знайти джерело на детекторі брехні",
      sub: "Конкурент знає ваші ціни, клієнт отримав пропозицію від когось із вашої бази, або плани стали відомі до оголошення. Тест перевіряє конкретний факт передачі, а не «лояльність взагалі».",
      facts: ["питання про конкретний факт", "виїзд у ваш офіс", "конфіденційно для команди"],
      how: [
        { title: "Спочатку звужуємо коло", text: "Разом визначаємо, хто мав доступ до інформації, що витекла. Зазвичай це 3–10 людей. Їх і перевіряємо, решту команди не чіпаємо." },
        { title: "Питання про передачу, а не про думки", text: "«Ви передавали базу клієнтів стороннім особам з січня?», «Ви обговорювали ціни компанії з конкурентами?». Це факти, які людина або робила, або ні." },
        { title: "Результат по кожному окремо", text: "Ви отримуєте звіт на кожного перевіреного. Часто виявляється, що витік ненавмисний: людина «просто розповіла». Тест і це показує." },
      ],
      questions: [
        "З 1 січня ви передавали дані клієнтів компанії стороннім особам?",
        "Ви обговорювали закупівельні ціни компанії з представниками конкурентів?",
        "Ви копіювали робочі документи на особисті носії або пошту?",
        "Ви маєте домовленості з іншим офісом про перехід на роботу?",
      ],
      faq: [
        { q: "Чи може працівник відмовитися?", a: "Так. Тест добровільний. Але в трудовому договорі можна передбачити перевірки при доступі до конфіденційної інформації, і тоді відмова стає підставою для рішень." },
        { q: "Команда дізнається, кого підозрюють?", a: "Ні, якщо ви цього не хочете. Перевірку можна подати як планову для всіх, хто має доступ." },
        { q: "Скільки триває перевірка відділу з 8 людей?", a: "Один робочий день з виїздом у ваш офіс. Звіти надсилаємо того ж вечора." },
      ],
    },
    ru: {
      nav: "Утечка информации",
      seo: {
        title: "Утечка информации: проверка сотрудников на детекторе лжи",
        description: "Конкуренты узнали цены, клиентскую базу или планы. EyeDetect проверяет, кто передавал данные, без обвинений наугад. 6–8 человек в день, отчёт сразу после теста.",
        keywords: ["утечка информации проверка", "полиграф утечка данных", "проверка персонала на лояльность", "кто слил базу клиентов", "коммерческая тайна полиграф"],
      },
      h1: "Утечка информации: найти источник на детекторе лжи",
      sub: "Конкурент знает ваши цены, клиент получил предложение от кого-то из вашей базы, или планы стали известны до объявления. Тест проверяет конкретный факт передачи, а не «лояльность вообще».",
      facts: ["вопросы о конкретном факте", "выезд в ваш офис", "конфиденциально для команды"],
      how: [
        { title: "Сначала сужаем круг", text: "Вместе определяем, кто имел доступ к утёкшей информации. Обычно это 3–10 человек. Их и проверяем, остальную команду не трогаем." },
        { title: "Вопросы о передаче, а не о мыслях", text: "«Вы передавали базу клиентов посторонним лицам с января?», «Вы обсуждали цены компании с конкурентами?». Это факты, которые человек либо делал, либо нет." },
        { title: "Результат по каждому отдельно", text: "Вы получаете отчёт на каждого проверенного. Часто оказывается, что утечка ненамеренная: человек «просто рассказал». Тест и это показывает." },
      ],
      questions: [
        "С 1 января вы передавали данные клиентов компании посторонним лицам?",
        "Вы обсуждали закупочные цены компании с представителями конкурентов?",
        "Вы копировали рабочие документы на личные носители или почту?",
        "У вас есть договорённости с другим офисом о переходе на работу?",
      ],
      faq: [
        { q: "Может ли сотрудник отказаться?", a: "Да. Тест добровольный. Но в трудовом договоре можно предусмотреть проверки при доступе к конфиденциальной информации, и тогда отказ становится основанием для решений." },
        { q: "Команда узнает, кого подозревают?", a: "Нет, если вы этого не хотите. Проверку можно подать как плановую для всех, кто имеет доступ." },
        { q: "Сколько длится проверка отдела из 8 человек?", a: "Один рабочий день с выездом в ваш офис. Отчёты отправляем в тот же вечер." },
      ],
    },
    en: {
      nav: "Information leak",
      seo: {
        title: "Information Leak: Lie Detector Test for Employees",
        description: "Competitors learned your prices, client base, or plans. EyeDetect checks who passed the data on, without random accusations. 6–8 people per day, report right after the test.",
        keywords: ["information leak investigation", "data leak polygraph", "employee loyalty screening", "who leaked the client base", "trade secret polygraph"],
      },
      h1: "Information Leak: Find the Source with a Lie Detector",
      sub: "A competitor knows your prices, a client received an offer from someone in your database, or plans became known before the announcement. The test checks a specific act of disclosure, not “loyalty in general”.",
      facts: ["questions about a specific fact", "on-site at your office", "confidential for the team"],
      how: [
        { title: "First we narrow the circle", text: "Together we identify who had access to the leaked information. Usually that is 3–10 people. We test them and leave the rest of the team alone." },
        { title: "Questions about disclosure, not opinions", text: "“Have you passed the client database to outside parties since January?”, “Have you discussed company prices with competitors?”. These are facts a person either did or did not do." },
        { title: "A separate result for each person", text: "You receive a report on every person tested. It often turns out the leak was unintentional: someone “just mentioned it”. The test shows that too." },
      ],
      questions: [
        "Since January 1, have you passed company client data to outside parties?",
        "Have you discussed the company's purchase prices with representatives of competitors?",
        "Have you copied work documents to personal drives or email?",
        "Do you have an arrangement with another firm to move there?",
      ],
      faq: [
        { q: "Can an employee refuse?", a: "Yes. The test is voluntary. But an employment contract can provide for testing when an employee has access to confidential information, and then a refusal becomes grounds for decisions." },
        { q: "Will the team find out who is suspected?", a: "Not if you do not want them to. The test can be presented as a routine check for everyone with access." },
        { q: "How long does it take to test a department of 8?", a: "One business day on-site at your office. We send the reports the same evening." },
      ],
    },
  },
  {
    slug: "hiring",
    icon: "/sprite.svg#icon-search",
    report: "/images/report-sample-business.webp",
    uk: {
      nav: "Кандидат на роботу",
      seo: {
        title: "Перевірка кандидата на детекторі брехні перед прийомом на роботу",
        description: "Перевірка кандидата на EyeDetect за 30–45 хвилин: судимості, наркотики, крадіжки на попередніх місцях, приховані факти в резюме. Звіт одразу після тесту, Львів і виїзд.",
        keywords: ["перевірка кандидата поліграф", "поліграф при прийомі на роботу", "перевірка персоналу перед наймом", "скринінг кандидатів детектор брехні", "які питання задають на поліграфі при прийомі на роботу"],
      },
      h1: "Перевірка кандидата на детекторі брехні перед наймом",
      sub: "Касир, водій, бухгалтер, охоронець, няня, керівник з доступом до грошей. Один тест до підписання договору дешевший за одну крадіжку після.",
      facts: ["30–45 хвилин на кандидата", "стандартні теми або ваші", "звіт одразу після тесту"],
      how: [
        { title: "Стандартний набір тем", text: "Крадіжки на попередніх місцях роботи, вживання наркотиків, приховані судимості, підроблені документи або досвід у резюме, зв'язки з конкурентами. Ви обираєте, що важливо для посади." },
        { title: "Кандидат знає питання заздалегідь", text: "Перед тестом він читає всі теми з поясненнями. Це законно, чесно і часто саме на цьому етапі кандидат сам розповідає те, що приховував." },
        { title: "Однакова процедура для всіх", text: "Алгоритм не має настрою і симпатій. Усі кандидати на одну посаду проходять однаковий тест, тому результати можна порівнювати." },
      ],
      questions: [
        "За останні 5 років ви брали гроші або товар у роботодавця без дозволу?",
        "За останні 12 місяців ви вживали важкі наркотичні речовини?",
        "Ви вказали в резюме неправдиву інформацію про досвід або освіту?",
        "Вас звільняли за порушення, які ви приховали від нас?",
      ],
      faq: [
        { q: "Чи законно перевіряти кандидатів на поліграфі в Україні?", a: "Так, за письмовою згодою кандидата. Питання стосуються лише фактів, важливих для посади, без втручання в приватне життя." },
        { q: "Які питання задають на поліграфі при прийомі на роботу?", a: "Про крадіжки, наркотики, судимості, підробку документів, зв'язки з конкурентами, причини звільнення з попередніх місць. Список погоджується з вами заздалегідь." },
        { q: "Скільки коштує перевірка кандидата?", a: "Ціна для бізнесу за запитом і залежить від кількості людей і тем. Напишіть нам, надішлемо пропозицію того ж дня." },
        { q: "Кандидат в іншому місті?", a: "VerifEye онлайн з телефона за 15 хвилин. Для посад з доступом до грошей радимо EyeDetect у кабінеті." },
      ],
    },
    ru: {
      nav: "Кандидат на работу",
      seo: {
        title: "Проверка кандидата на детекторе лжи перед приёмом на работу",
        description: "Проверка кандидата на EyeDetect за 30–45 минут: судимости, наркотики, кражи на предыдущих местах, скрытые факты в резюме. Отчёт сразу после теста, Львов и выезд.",
        keywords: ["проверка кандидата полиграф", "полиграф при приёме на работу", "проверка персонала перед наймом", "скрининг кандидатов детектор лжи", "какие вопросы задают на полиграфе при приёме на работу"],
      },
      h1: "Проверка кандидата на детекторе лжи перед наймом",
      sub: "Кассир, водитель, бухгалтер, охранник, няня, руководитель с доступом к деньгам. Один тест до подписания договора дешевле одной кражи после.",
      facts: ["30–45 минут на кандидата", "стандартные темы или ваши", "отчёт сразу после теста"],
      how: [
        { title: "Стандартный набор тем", text: "Кражи на предыдущих местах работы, употребление наркотиков, скрытые судимости, поддельные документы или опыт в резюме, связи с конкурентами. Вы выбираете, что важно для должности." },
        { title: "Кандидат знает вопросы заранее", text: "Перед тестом он читает все темы с пояснениями. Это законно, честно и часто именно на этом этапе кандидат сам рассказывает то, что скрывал." },
        { title: "Одинаковая процедура для всех", text: "У алгоритма нет настроения и симпатий. Все кандидаты на одну должность проходят одинаковый тест, поэтому результаты можно сравнивать." },
      ],
      questions: [
        "За последние 5 лет вы брали деньги или товар у работодателя без разрешения?",
        "За последние 12 месяцев вы употребляли тяжёлые наркотические вещества?",
        "Вы указали в резюме ложную информацию об опыте или образовании?",
        "Вас увольняли за нарушения, которые вы скрыли от нас?",
      ],
      faq: [
        { q: "Законно ли проверять кандидатов на полиграфе в Украине?", a: "Да, с письменного согласия кандидата. Вопросы касаются только фактов, важных для должности, без вмешательства в частную жизнь." },
        { q: "Какие вопросы задают на полиграфе при приёме на работу?", a: "О кражах, наркотиках, судимостях, подделке документов, связях с конкурентами, причинах увольнения с предыдущих мест. Список согласовывается с вами заранее." },
        { q: "Сколько стоит проверка кандидата?", a: "Цена для бизнеса по запросу и зависит от количества людей и тем. Напишите нам, отправим предложение в тот же день." },
        { q: "Кандидат в другом городе?", a: "VerifEye онлайн с телефона за 15 минут. Для должностей с доступом к деньгам советуем EyeDetect в кабинете." },
      ],
    },
    en: {
      nav: "Job candidate",
      seo: {
        title: "Pre-Employment Lie Detector Test for Job Candidates",
        description: "Candidate screening on EyeDetect in 30–45 minutes: criminal records, drugs, theft at previous jobs, hidden facts in the resume. Report right after the test, Lviv and on-site.",
        keywords: ["candidate polygraph test", "pre-employment polygraph", "pre-hire screening", "candidate lie detector screening", "what questions are asked on a pre-employment polygraph"],
      },
      h1: "Pre-Employment Lie Detector Test for Job Candidates",
      sub: "Cashier, driver, accountant, security guard, nanny, manager with access to money. One test before the contract is signed costs less than one theft after.",
      facts: ["30–45 minutes per candidate", "standard topics or yours", "report right after the test"],
      how: [
        { title: "A standard set of topics", text: "Theft at previous jobs, drug use, hidden criminal records, forged documents or experience in the resume, ties to competitors. You choose what matters for the position." },
        { title: "The candidate knows the questions in advance", text: "Before the test, they read all topics with explanations. This is legal, fair, and often it is at this stage that the candidate volunteers what they had been hiding." },
        { title: "The same procedure for everyone", text: "The algorithm has no moods or preferences. All candidates for the same position take the same test, so results can be compared." },
      ],
      questions: [
        "In the last 5 years, have you taken money or goods from an employer without permission?",
        "In the last 12 months, have you used hard drugs?",
        "Did you state false information about your experience or education in your resume?",
        "Have you been fired for misconduct that you concealed from us?",
      ],
      faq: [
        { q: "Is it legal to polygraph job candidates in Ukraine?", a: "Yes, with the candidate's written consent. Questions cover only facts relevant to the position, without intruding into private life." },
        { q: "What questions are asked on a pre-employment polygraph?", a: "About theft, drugs, criminal records, document forgery, ties to competitors, reasons for leaving previous jobs. The list is agreed with you in advance." },
        { q: "How much does candidate screening cost?", a: "Business pricing is on request and depends on the number of people and topics. Write to us and we will send a proposal the same day." },
        { q: "The candidate is in another city?", a: "VerifEye online from a phone in 15 minutes. For positions with access to money we recommend EyeDetect in our Lviv office." },
      ],
    },
  },
  {
    slug: "dispute",
    icon: "/sprite.svg#icon-books",
    report: "/images/report-sample-eyedetect.webp",
    uk: {
      nav: "Спір без доказів",
      seo: {
        title: "Слово проти слова: перевірка на детекторі брехні у спірних ситуаціях",
        description: "Коли є лише версії сторін і жодного доказу: борг, домовленість, звинувачення, конфлікт у родині чи бізнесі. Тест дає об'єктивну основу для рішення за одну зустріч.",
        keywords: ["спір без доказів поліграф", "перевірка правдивості слів", "детектор брехні конфлікт", "хто бреше перевірка", "поліграф борг домовленість"],
      },
      h1: "Слово проти слова: детектор брехні як основа для рішення",
      sub: "Один каже, що віддав борг, інший, що ні. Партнер звинувачує в порушенні домовленості. Родич заперечує те, що бачили інші. Тест перевіряє конкретну версію подій.",
      facts: ["одна зустріч", "обидві сторони можуть пройти", "звіт одразу після тесту"],
      how: [
        { title: "Формулюємо версію як факт", text: "«Ви передали 5 000 доларів 3 травня» або «Ви не отримували цих грошей». Кожна сторона може пройти тест по своїй версії, і звіт покаже, яка з них витримує перевірку." },
        { title: "Обидві сторони в рівних умовах", text: "Однакові питання, однакова процедура, один і той самий алгоритм. Ніхто не може сказати, що до нього поставилися упереджено." },
        { title: "Основа для домовленості", text: "У більшості спорів після тесту сторони домовляються самі: одна з них розуміє, що далі заперечувати марно. Це дешевше і швидше за суд." },
      ],
      questions: [
        "3 травня ви отримали від Андрія 5 000 доларів готівкою?",
        "Ви особисто пошкодили автомобіль сусіда в ніч на 10 липня?",
        "Ви домовлялися з партнером про поділ прибутку порівну?",
        "Ви казали правду, коли стверджували, що не були в квартирі 20 серпня?",
      ],
      faq: [
        { q: "Чи візьме суд результат до уваги?", a: "В Україні результат тесту не є доказом. Але сторони часто використовують його для мирової угоди або як підставу для інших дій." },
        { q: "Що, як пройде лише одна сторона?", a: "Це теж результат. Якщо одна сторона підтверджує свою версію тестом, а інша відмовляється, картина стає зрозумілішою." },
        { q: "Чи можна пройти онлайн?", a: "Так, VerifEye з телефона. Для важливих сум і рішень радимо EyeDetect у кабінеті." },
      ],
    },
    ru: {
      nav: "Спор без доказательств",
      seo: {
        title: "Слово против слова: проверка на детекторе лжи в спорных ситуациях",
        description: "Когда есть только версии сторон и ни одного доказательства: долг, договорённость, обвинение, конфликт в семье или бизнесе. Тест даёт объективную основу для решения за одну встречу.",
        keywords: ["спор без доказательств полиграф", "проверка правдивости слов", "детектор лжи конфликт", "кто врёт проверка", "полиграф долг договорённость"],
      },
      h1: "Слово против слова: детектор лжи как основа для решения",
      sub: "Один говорит, что отдал долг, другой, что нет. Партнёр обвиняет в нарушении договорённости. Родственник отрицает то, что видели другие. Тест проверяет конкретную версию событий.",
      facts: ["одна встреча", "обе стороны могут пройти", "отчёт сразу после теста"],
      how: [
        { title: "Формулируем версию как факт", text: "«Вы передали 5 000 долларов 3 мая» или «Вы не получали этих денег». Каждая сторона может пройти тест по своей версии, и отчёт покажет, какая из них выдерживает проверку." },
        { title: "Обе стороны в равных условиях", text: "Одинаковые вопросы, одинаковая процедура, один и тот же алгоритм. Никто не может сказать, что к нему отнеслись предвзято." },
        { title: "Основа для договорённости", text: "В большинстве споров после теста стороны договариваются сами: одна из них понимает, что дальше отрицать бесполезно. Это дешевле и быстрее суда." },
      ],
      questions: [
        "3 мая вы получили от Андрея 5 000 долларов наличными?",
        "Вы лично повредили автомобиль соседа в ночь на 10 июля?",
        "Вы договаривались с партнёром о разделе прибыли поровну?",
        "Вы говорили правду, когда утверждали, что не были в квартире 20 августа?",
      ],
      faq: [
        { q: "Примет ли суд результат во внимание?", a: "В Украине результат теста не является доказательством. Но стороны часто используют его для мирового соглашения или как основание для других действий." },
        { q: "Что, если пройдёт только одна сторона?", a: "Это тоже результат. Если одна сторона подтверждает свою версию тестом, а другая отказывается, картина становится понятнее." },
        { q: "Можно ли пройти онлайн?", a: "Да, VerifEye с телефона. Для важных сумм и решений советуем EyeDetect в кабинете." },
      ],
    },
    en: {
      nav: "Dispute without evidence",
      seo: {
        title: "Word Against Word: Lie Detector Test in Disputed Situations",
        description: "When there are only two sides' versions and no evidence: a debt, an agreement, an accusation, a conflict in the family or in business. The test gives an objective basis for a decision in a single session.",
        keywords: ["dispute without evidence polygraph", "truth verification test", "lie detector conflict", "who is lying test", "polygraph debt agreement"],
      },
      h1: "Word Against Word: A Lie Detector as the Basis for a Decision",
      sub: "One says the debt was repaid, the other says it was not. A partner alleges a breach of an agreement. A relative denies what others saw. The test checks a specific version of events.",
      facts: ["one session", "both sides can take it", "report right after the test"],
      how: [
        { title: "We phrase the version as a fact", text: "“You handed over 5,000 dollars on May 3” or “You did not receive that money”. Each side can take the test on their own version, and the report shows which one holds up." },
        { title: "Both sides on equal terms", text: "The same questions, the same procedure, the same algorithm. No one can say they were treated with bias." },
        { title: "A basis for settlement", text: "In most disputes, the sides reach an agreement on their own after the test: one of them realizes there is no point denying it further. This is cheaper and faster than court." },
      ],
      questions: [
        "On May 3, did you receive 5,000 dollars in cash from Andrii?",
        "Did you personally damage your neighbor's car on the night of July 10?",
        "Did you agree with your partner to split the profit equally?",
        "Were you telling the truth when you claimed you were not in the apartment on August 20?",
      ],
      faq: [
        { q: "Will a court take the result into account?", a: "In Ukraine, a test result is not evidence. But the sides often use it to reach a settlement or as grounds for further action." },
        { q: "What if only one side takes the test?", a: "That is also a result. If one side confirms its version with the test and the other refuses, the picture becomes clearer." },
        { q: "Can it be done online?", a: "Yes, VerifEye from a phone. For significant sums and decisions we recommend EyeDetect in our Lviv office." },
      ],
    },
  },
  premarital,
  familyMoney,
  gambling,
  secondOpinion,
];

export const getSituation = (slug, lang) => {
  const s = situations.find((x) => x.slug === slug);
  if (!s) return null;
  const l = s[lang] ? lang : "uk";
  return { slug: s.slug, icon: s.icon, report: s.report, ...s[l], shared: shared[l] };
};

export const getSituationsList = (lang) =>
  situations.map((s) => ({ slug: s.slug, icon: s.icon, nav: (s[lang] || s.uk).nav, h1: (s[lang] || s.uk).h1 }));
