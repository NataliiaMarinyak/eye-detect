// Лендинг /free-test: безкоштовний тест VerifEye «на цифру». Ключі: uk, ru, en.
// Людина залишає ім'я, телефон і обирає формат (онлайн чи в кабінеті), ми надсилаємо посилання
// на справжній тест VerifEye, у якому вона загадує цифру, а алгоритм її визначає. Лід-магніт під запит
// «детектор брехні онлайн безкоштовно».

// Назва послуги, вікно заявки і вибір формату для безкоштовного тесту. Окремий невеликий об'єкт:
// його імпортує вікно заявки, щоб не тягнути в браузер увесь текст лендингу
// (тому freeTestPage нижче на нього не посилається).
// leadOptions — підписи українською для заявки в Telegram (спеціаліст читає однаково з будь-якої мови).
const FREE_TEST_LEAD_OPTIONS = ["Онлайн зі смартфона", "У кабінеті у Львові"];

export const freeTestForm = {
  uk: {
    service: "Безкоштовний тест VerifEye на цифру",
    modalTitle: "Заявка на безкоштовний тест",
    modalText: "Напишемо цілодобово, протягом 15–30 хвилин. Надішлемо посилання на тест на цифру або узгодимо час у кабінеті у Львові. Оплата не потрібна.",
    choice: { title: "Як пройти тест? *", options: FREE_TEST_LEAD_OPTIONS, error: "Оберіть, як пройти тест.", leadKey: "Формат", leadOptions: FREE_TEST_LEAD_OPTIONS },
  },
  ru: {
    service: "Бесплатный тест VerifEye на цифру",
    modalTitle: "Заявка на бесплатный тест",
    modalText: "Напишем круглосуточно, в течение 15–30 минут. Отправим ссылку на тест на цифру или согласуем время в кабинете во Львове. Оплата не нужна.",
    choice: { title: "Как пройти тест? *", options: ["Онлайн со смартфона", "В кабинете во Львове"], error: "Выберите, как пройти тест.", leadKey: "Формат", leadOptions: FREE_TEST_LEAD_OPTIONS },
  },
  en: {
    service: "Free VerifEye number test",
    modalTitle: "Free test request",
    modalText: "We will message you 24/7, within 15–30 minutes. We will send the link to the number test or agree on a time in our Lviv office. No payment needed.",
    choice: { title: "How would you like to take the test? *", options: ["Online from a smartphone", "In our Lviv office"], error: "Please choose how to take the test.", leadKey: "Формат", leadOptions: FREE_TEST_LEAD_OPTIONS },
  },
};

export const getFreeTestForm = (lang) => freeTestForm[lang] || freeTestForm.uk;

// Чи відкрите вікно заявки саме для безкоштовного тесту (за назвою послуги будь-якою мовою).
export const isFreeTestService = (service = "") => Object.values(freeTestForm).some((f) => f.service === service);

export const freeTestPage = {
  uk: {
    seo: {
      title: "Детектор брехні онлайн безкоштовно: тест VerifEye на цифру",
      description: "Спробуйте справжній детектор брехні онлайн безкоштовно. Загадайте цифру, пройдіть тест VerifEye зі смартфона за кілька хвилин, і алгоритм Converus назве вашу цифру.",
      keywords: ["детектор брехні онлайн безкоштовно", "поліграф онлайн безкоштовно", "тест на детекторі брехні безкоштовно", "перевірити себе на детекторі брехні", "verifeye безкоштовно"],
      crumbHome: "Головна",
      crumb: "Безкоштовний тест",
    },
    hero: {
      eyebrow: "Безкоштовно · справжній VerifEye від Converus",
      h1: "Детектор брехні онлайн безкоштовно: спробуйте на собі",
      sub: "Це не гра і не застосунок-жарт. Ви записуєте цифру від 1 до 6 і нікому її не кажете, потім близько 5 хвилин відповідаєте на запитання у застосунку VerifEye, заперечуючи всі цифри, зокрема й свою. Алгоритм Converus визначає вашу цифру за реакціями очей. Спробуйте технологію на собі, перш ніж замовляти справжню перевірку.",
      facts: ["0 ₴, без зобов'язань", "близько 5 хвилин зі смартфона", "той самий VerifEye, що й у платних тестах", "звіт із результатом того ж дня"],
      primary: "Отримати безкоштовний тест",
    },
    blocks: [
      { type: "steps", tone: "white", title: "Як це відбувається", items: [
        { title: "Залишаєте ім'я і телефон", text: "Зв'язуємось цілодобово, протягом 15–30 хвилин, і надсилаємо посилання на тест у застосунку VerifEye для iPhone або Android." },
        { title: "Записуєте цифру від 1 до 6", text: "Нікому її не кажете. Сідаєте у тихій кімнаті з рівним освітленням, без окулярів, телефон перед обличчям, погляд трохи вище камери." },
        { title: "Проходите тест", text: "Спочатку короткий тренувальний тест з літерами, потім запитання про цифри. На всі ви відповідаєте «Неправда», тобто заперечуєте і свою цифру теж. Час на відповідь обмежений. Камера фіксує реакції очей: зіницю, рухи, моргання." },
        { title: "Отримуєте звіт", text: "Алгоритм Converus автоматично показує цифру, на яку була найбільша реакція ваших очей. Ми надсилаємо вам звіт того ж дня. Далі вирішуєте самі, чи потрібен справжній тест." },
      ] },
      { type: "cards", title: "Чому це чесний тест, а не фокус", cols: 2, items: [
        { title: "Те саме обладнання", text: "Тест на цифру проходить у тому самому застосунку VerifEye і на тому самому сервері Converus, що й платні перевірки на вірність чи для кандидатів." },
        { title: "Реакції, які не контролюються", text: "Коли ви чуєте свою цифру і кажете «Неправда», зіниця і рухи очей реагують інакше, ніж на решту цифр, навіть якщо ви намагаєтесь виглядати спокійно. Саме це вимірює алгоритм, а не ваш голос чи міміку." },
        { title: "Оцінку рахує алгоритм, а не людина", text: "Спеціаліст не впливає на результат і надсилає вам звіт, у якому є 4 фото з тесту. Звіт бачите лише ви і спеціаліст." },
        { title: "Це демонстрація, а не перевірка", text: "Тест на цифру показує принцип. Справжня перевірка будується на ваших питаннях і триває 15–20 хвилин онлайн або 30–45 хвилин у кабінеті." },
      ] },
      { type: "list", title: "Що потрібно від вас", cols: 3, items: ["смартфон iPhone або Android з фронтальною камерою", "стабільний Wi-Fi", "тиха кімната без вікна чи телевізора за спиною", "рівне освітлення обличчя", "без окулярів, лінзи можна лишити", "кілька вільних хвилин"] },
      { type: "text", title: "Можна пройти і у Львові, без смартфона", paragraphs: [
        "Тест на цифру можна пройти безкоштовно офлайн: у кабінеті у Львові на станції EyeDetect, за попереднім записом. Фото для цього не потрібні.",
        "Щоб записатись, залиште ім'я і телефон у формі нижче та оберіть «У кабінеті у Львові». Або зателефонуйте: +380 68 68 333 68.",
      ] },
      { type: "image", title: "Як виглядає звіт числового тесту", src: "/images/report-sample-verifeye-number.webp", alt: "Звіт числового тесту VerifEye", caption: "Справжній звіт VerifEye: чотири фото під час тесту, якість даних і цифра, на яку була найбільша реакція очей. Персональні дані розмито.", width: 1100, height: 1557 },
      { type: "text", tone: "white", title: "Готові до справжнього тесту на ваші питання?", paragraphs: [
        "Справжній онлайн-тест VerifEye на ваші питання коштує від 2 500 ₴ і триває 15–20 хвилин, звіт у PDF до 5 хвилин після тесту. Точність 84–89% за даними Converus. Підходить для перевірки на вірність, кандидатів на роботу і людей в інших містах.",
        "Якщо потрібна максимальна точність і письмовий звіт одразу після тесту, є EyeDetect у кабінеті у Львові або з виїздом: 30–45 хвилин, точність 86–90%, від 5 500 ₴.",
        "Безкоштовний тест ні до чого не зобов'язує. Ваш номер ми використовуємо лише для того, щоб надіслати посилання і результат.",
      ] },
    ],
    form: {
      title: "Отримати безкоштовний тест на цифру",
      text: "Залиште ім'я і телефон та оберіть формат. Напишемо цілодобово, протягом 15–30 хвилин. Надішлемо посилання на тест VerifEye або запишемо вас у кабінет.",
      // Назва послуги і вибір формату — у freeTestForm.uk (getFreeTestForm).
    },
    faq: [
      { q: "Це справді безкоштовно?", a: "Так. Тест на цифру ми даємо безкоштовно, щоб ви побачили технологію на собі. Платити не потрібно ні до, ні після." },
      { q: "Чи можна пройти тест на цифру не зі смартфона?", a: "Так. У кабінеті у Львові тест на цифру можна пройти безкоштовно на станції EyeDetect за попереднім записом. Фото при цьому не робляться." },
      { q: "Чи дізнаєтесь ви щось особисте про мене?", a: "Ні. Тест лише про цифру, яку ви загадали. Ніяких особистих питань. Застосунок робить фото для звіту, на сервер Converus йдуть реакції очей і ваші відповіді. Звіт бачите лише ви і спеціаліст." },
      { q: "Що, як алгоритм не вгадає?", a: "Таке трапляється, найчастіше через порушені умови: погане світло, окуляри, шум, розмову під час тесту. Тоді можна пройти ще раз." },
      { q: "Чи можна дати тест другові чи партнеру?", a: "Так. Залиште свій телефон, а посилання перешлете кому хочете. Проходити тест має та людина, яка загадала цифру." },
    ],
  },
  ru: {
    seo: {
      title: "Детектор лжи онлайн бесплатно: тест VerifEye на цифру",
      description: "Попробуйте настоящий детектор лжи онлайн бесплатно. Загадайте цифру, пройдите тест VerifEye со смартфона за несколько минут, и алгоритм Converus назовёт вашу цифру.",
      keywords: ["детектор лжи онлайн бесплатно", "полиграф онлайн бесплатно", "тест на детекторе лжи бесплатно", "проверить себя на детекторе лжи", "verifeye бесплатно"],
      crumbHome: "Главная",
      crumb: "Бесплатный тест",
    },
    hero: {
      eyebrow: "Бесплатно · настоящий VerifEye от Converus",
      h1: "Детектор лжи онлайн бесплатно: попробуйте на себе",
      sub: "Это не игра и не приложение-шутка. Вы записываете цифру от 1 до 6 и никому её не говорите, потом около 5 минут отвечаете на вопросы в приложении VerifEye, отрицая все цифры, включая свою. Алгоритм Converus определяет вашу цифру по реакциям глаз. Попробуйте технологию на себе, прежде чем заказывать настоящую проверку.",
      facts: ["0 ₴, без обязательств", "около 5 минут со смартфона", "тот же VerifEye, что и в платных тестах", "отчёт с результатом в тот же день"],
      primary: "Получить бесплатный тест",
    },
    blocks: [
      { type: "steps", tone: "white", title: "Как это происходит", items: [
        { title: "Оставляете имя и телефон", text: "Связываемся круглосуточно, в течение 15–30 минут, и отправляем ссылку на тест в приложении VerifEye для iPhone или Android." },
        { title: "Записываете цифру от 1 до 6", text: "Никому её не говорите. Садитесь в тихой комнате с ровным освещением, без очков, телефон перед лицом, взгляд чуть выше камеры." },
        { title: "Проходите тест", text: "Сначала короткий тренировочный тест с буквами, потом вопросы о цифрах. На все вы отвечаете «Неправда», то есть отрицаете и свою цифру тоже. Время на ответ ограничено. Камера фиксирует реакции глаз: зрачок, движения, моргание." },
        { title: "Получаете отчёт", text: "Алгоритм Converus автоматически показывает цифру, на которую была самая сильная реакция ваших глаз. Мы отправляем вам отчёт в тот же день. Дальше решаете сами, нужен ли настоящий тест." },
      ] },
      { type: "cards", title: "Почему это честный тест, а не фокус", cols: 2, items: [
        { title: "То же оборудование", text: "Тест на цифру проходит в том же приложении VerifEye и на том же сервере Converus, что и платные проверки на верность или для кандидатов." },
        { title: "Реакции, которые не контролируются", text: "Когда вы слышите свою цифру и говорите «Неправда», зрачок и движения глаз реагируют иначе, чем на остальные цифры, даже если вы стараетесь выглядеть спокойно. Именно это измеряет алгоритм, а не ваш голос или мимику." },
        { title: "Оценку считает алгоритм, а не человек", text: "Специалист не влияет на результат и отправляет вам отчёт, в котором есть 4 фото из теста. Отчёт видите только вы и специалист." },
        { title: "Это демонстрация, а не проверка", text: "Тест на цифру показывает принцип. Настоящая проверка строится на ваших вопросах и длится 15–20 минут онлайн или 30–45 минут в кабинете." },
      ] },
      { type: "list", title: "Что нужно от вас", cols: 3, items: ["смартфон iPhone или Android с фронтальной камерой", "стабильный Wi-Fi", "тихая комната без окна или телевизора за спиной", "ровное освещение лица", "без очков, линзы можно оставить", "несколько свободных минут"] },
      { type: "text", title: "Можно пройти и во Львове, без смартфона", paragraphs: [
        "Тест на цифру можно пройти бесплатно офлайн: в кабинете во Львове на станции EyeDetect, по предварительной записи. Фото для этого не нужны.",
        "Чтобы записаться, оставьте имя и телефон в форме ниже и выберите «В кабинете во Львове». Или позвоните: +380 68 68 333 68.",
      ] },
      { type: "image", title: "Как выглядит отчёт числового теста", src: "/images/report-sample-verifeye-number.webp", alt: "Отчёт числового теста VerifEye", caption: "Настоящий отчёт VerifEye: четыре фото во время теста, качество данных и цифра, на которую была самая сильная реакция глаз. Персональные данные размыты.", width: 1100, height: 1557 },
      { type: "text", tone: "white", title: "Готовы к настоящему тесту на ваши вопросы?", paragraphs: [
        "Настоящий онлайн-тест VerifEye на ваши вопросы стоит от 2 500 ₴ и длится 15–20 минут, отчёт в PDF до 5 минут после теста. Точность 84–89% по данным Converus. Подходит для проверки на верность, кандидатов на работу и людей в других городах.",
        "Если нужна максимальная точность и письменный отчёт сразу после теста, есть EyeDetect в кабинете во Львове или с выездом: 30–45 минут, точность 86–90%, от 5 500 ₴.",
        "Бесплатный тест ни к чему не обязывает. Ваш номер мы используем только для того, чтобы отправить ссылку и результат.",
      ] },
    ],
    form: {
      title: "Получить бесплатный тест на цифру",
      text: "Оставьте имя и телефон и выберите формат. Напишем круглосуточно, в течение 15–30 минут. Отправим ссылку на тест VerifEye или запишем вас в кабинет.",
      // Назва послуги і вибір формату — у freeTestForm.ru (getFreeTestForm).
    },
    faq: [
      { q: "Это действительно бесплатно?", a: "Да. Тест на цифру мы даём бесплатно, чтобы вы увидели технологию на себе. Платить не нужно ни до, ни после." },
      { q: "Можно ли пройти тест на цифру не со смартфона?", a: "Да. В кабинете во Львове тест на цифру можно пройти бесплатно на станции EyeDetect по предварительной записи. Фото при этом не делаются." },
      { q: "Узнаете ли вы что-то личное обо мне?", a: "Нет. Тест только о цифре, которую вы загадали. Никаких личных вопросов. Приложение делает фото для отчёта, на сервер Converus идут реакции глаз и ваши ответы. Отчёт видите только вы и специалист." },
      { q: "Что, если алгоритм не угадает?", a: "Такое случается, чаще всего из-за нарушенных условий: плохой свет, очки, шум, разговор во время теста. Тогда можно пройти ещё раз." },
      { q: "Можно ли дать тест другу или партнёру?", a: "Да. Оставьте свой телефон, а ссылку перешлёте кому хотите. Проходить тест должен тот человек, который загадал цифру." },
    ],
  },
  en: {
    seo: {
      title: "Free Online Lie Detector: the VerifEye Number Test",
      description: "Try a real online lie detector for free. Think of a number, take a short VerifEye test on your smartphone, and the Converus algorithm names your number.",
      keywords: ["free online lie detector", "free online polygraph", "free lie detector test", "test yourself on a lie detector", "verifeye free"],
      crumbHome: "Home",
      crumb: "Free test",
    },
    hero: {
      eyebrow: "Free · real VerifEye by Converus",
      h1: "Free online lie detector: try it on yourself",
      sub: "This is not a game or a joke app. You write down a digit from 1 to 6 and tell no one, then spend about 5 minutes answering questions in the VerifEye app, denying every digit including your own. The Converus algorithm identifies your digit from your eye reactions. Try the technology on yourself before you order a real test.",
      facts: ["free, no obligations", "about 5 minutes on a smartphone", "the same VerifEye used in paid tests", "report with the result the same day"],
      primary: "Get the free test",
    },
    blocks: [
      { type: "steps", tone: "white", title: "How it works", items: [
        { title: "Leave your name and phone", text: "We contact you 24/7, within 15–30 minutes, and send a link to the test in the VerifEye app for iPhone or Android." },
        { title: "Write down a digit from 1 to 6", text: "Tell no one. Sit in a quiet room with even lighting, no glasses, phone in front of your face, eyes slightly above the camera." },
        { title: "Take the test", text: "First a short practice test with letters, then questions about digits. You answer “False” to all of them, denying your own digit too. Answer time is limited. The camera records eye reactions: pupil, movements, blinks." },
        { title: "Get the report", text: "The Converus algorithm automatically shows the digit your eyes reacted to most strongly. We send you the report the same day. Then you decide whether you need a real test." },
      ] },
      { type: "cards", title: "Why this is an honest test, not a trick", cols: 2, items: [
        { title: "The same equipment", text: "The number test runs in the same VerifEye app and on the same Converus server as paid fidelity or candidate tests." },
        { title: "Reactions you cannot control", text: "When you hear your digit and say “False”, your pupil and eye movements react differently than to the other digits, even if you try to look calm. That is what the algorithm measures, not your voice or facial expression." },
        { title: "The score comes from the algorithm, not a person", text: "The examiner does not influence the result and sends you the report, which includes 4 photos from the test. Only you and the examiner see the report." },
        { title: "A demonstration, not an examination", text: "The number test shows the principle. A real test is built on your questions and takes 15–20 minutes online or 30–45 minutes in the office." },
      ] },
      { type: "list", title: "What you need", cols: 3, items: ["an iPhone or Android smartphone with a front camera", "stable Wi-Fi", "a quiet room with no window or TV behind you", "even lighting on the face", "no glasses, contact lenses are fine", "a few free minutes"] },
      { type: "text", title: "You can also try it in Lviv, without a smartphone", paragraphs: [
        "The number test can also be taken for free offline: at the EyeDetect station in our Lviv office, by appointment. No photos are needed for it.",
        "To book, leave your name and phone in the form below and choose “In our Lviv office”. Or call +380 68 68 333 68.",
      ] },
      { type: "image", title: "What the number test report looks like", src: "/images/report-sample-verifeye-number.webp", alt: "VerifEye number test report", caption: "A real VerifEye report: four photos taken during the test, data quality, and the digit with the strongest eye reaction. Personal data blurred.", width: 1100, height: 1557 },
      { type: "text", tone: "white", title: "Ready for a real test on your own questions?", paragraphs: [
        "A real VerifEye online test on your questions costs from UAH 2,500 and takes 15–20 minutes, with a PDF report within 5 minutes after the test. Accuracy 84–89% according to Converus. Suitable for fidelity checks, job candidates and people in other cities.",
        "If you need maximum accuracy and a written report right after the test, there is EyeDetect in our Lviv office or on-site: 30–45 minutes, 86–90% accuracy, from UAH 5,500.",
        "The free test creates no obligations. We use your number only to send the link and the result.",
      ] },
    ],
    form: {
      title: "Get the free number test",
      text: "Leave your name and phone and choose a format. We will message you 24/7, within 15–30 minutes. We will send the VerifEye test link or book your visit to our office.",
      // Назва послуги і вибір формату — у freeTestForm.en (getFreeTestForm).
    },
    faq: [
      { q: "Is it really free?", a: "Yes. We give the number test for free so you can see the technology on yourself. No payment before or after." },
      { q: "Can I take the number test without a smartphone?", a: "Yes. In our Lviv office the number test can be taken for free on the EyeDetect station by appointment. No photos are taken." },
      { q: "Will you learn anything personal about me?", a: "No. The test is only about the digit you chose. No personal questions. The app takes photos for the report; eye reactions and your answers go to the Converus server. Only you and the examiner see the report." },
      { q: "What if the algorithm gets it wrong?", a: "It happens, most often because the conditions were broken: poor light, glasses, noise, talking during the test. Then you can take it again." },
      { q: "Can I give the test to a friend or partner?", a: "Yes. Leave your phone number and forward the link to anyone you like. The person who chose the digit must be the one taking the test." },
    ],
  },
};

export const getFreeTestPage = (lang) => freeTestPage[lang] || freeTestPage.uk;
