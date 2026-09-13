// Лендинг /free-test: безкоштовний тест VerifEye «на цифру». Ключі: uk, ru, en.
// Людина залишає ім'я і телефон, ми надсилаємо посилання на справжній тест VerifEye,
// у якому вона загадує цифру, а алгоритм її визначає. Лід-магніт під запит
// «детектор брехні онлайн безкоштовно».

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
      sub: "Це не гра і не застосунок-жарт. Ви записуєте число від 1 до 6 і нікому його не кажете, потім близько 5 хвилин відповідаєте на запитання у застосунку VerifEye, заперечуючи всі числа, зокрема й своє. Алгоритм Converus визначає ваше число за реакціями очей. Так ви на собі відчуєте, як працює технологія, перш ніж замовляти справжню перевірку.",
      facts: ["0 ₴, без зобов'язань", "близько 5 хвилин зі смартфона", "той самий VerifEye, що й у платних тестах", "звіт із результатом того ж дня"],
      primary: "Отримати безкоштовний тест",
    },
    blocks: [
      { type: "steps", tone: "white", title: "Як це відбувається", items: [
        { title: "Залишаєте ім'я і телефон", text: "Ми зв'язуємось у робочий час і надсилаємо посилання на тест у застосунку VerifEye для iPhone або Android." },
        { title: "Записуєте число від 1 до 6", text: "Нікому його не кажете. Сідаєте у тихій кімнаті з рівним освітленням, без окулярів, телефон перед обличчям, погляд трохи вище камери." },
        { title: "Проходите тест", text: "Спочатку короткий тренувальний тест з літерами, потім запитання про числа. На всі ви відповідаєте «Неправда», тобто заперечуєте і своє число теж. Час на відповідь обмежений. Камера фіксує реакції очей: зіницю, рухи, моргання." },
        { title: "Отримуєте звіт", text: "Алгоритм Converus рахує реакції і ставить ваше число на перше місце у звіті. Ми надсилаємо вам звіт того ж дня. Далі вирішуєте самі, чи потрібен справжній тест." },
      ] },
      { type: "cards", title: "Чому це чесний тест, а не фокус", cols: 2, items: [
        { title: "Те саме обладнання", text: "Тест на цифру проходить у тому самому застосунку VerifEye і на тому самому сервері Converus, що й платні перевірки на вірність чи для кандидатів." },
        { title: "Реакції, які не контролюються", text: "Коли ви чуєте своє число і кажете «Неправда», зіниця і рухи очей реагують інакше, ніж на решту чисел, навіть якщо ви намагаєтесь виглядати спокійно. Саме це вимірює алгоритм, а не ваш голос чи міміку." },
        { title: "Ніхто не дивиться на вас", text: "Оцінку рахує алгоритм, а не людина. Спеціаліст лише готує посилання і передає результат." },
        { title: "Це демонстрація, а не перевірка", text: "Тест на число показує принцип. Справжня перевірка будується на ваших питаннях і триває близько 10 хвилин онлайн або 30–45 хвилин у кабінеті." },
      ] },
      { type: "list", title: "Що потрібно від вас", cols: 3, items: ["смартфон iPhone або Android з фронтальною камерою", "стабільний Wi-Fi", "тиха кімната без вікна чи телевізора за спиною", "рівне освітлення обличчя", "без окулярів, лінзи можна лишити", "кілька вільних хвилин"] },
      { type: "image", title: "Як виглядає звіт числового тесту", src: "/images/report-sample-verifeye-number.webp", alt: "Звіт числового тесту VerifEye", caption: "Справжній звіт VerifEye: чотири фото під час тесту, якість даних і перше місце для числа, яке визначив алгоритм. Персональні дані розмито.", width: 1100, height: 1557 },
      { type: "text", tone: "white", title: "Що далі, якщо технологія переконала", paragraphs: [
        "Справжній онлайн-тест VerifEye на ваші питання коштує від 2 500 ₴ і триває близько 10 хвилин. Точність 84–89% за даними Converus. Підходить для перевірки на вірність, кандидатів на роботу і людей в інших містах.",
        "Якщо потрібна максимальна точність і письмовий звіт одразу після тесту, є EyeDetect у кабінеті у Львові або з виїздом: 30–45 хвилин, точність 86–90%, від 5 500 ₴.",
        "Безкоштовний тест ні до чого не зобов'язує. Ваш номер ми використовуємо лише для того, щоб надіслати посилання і результат.",
      ] },
    ],
    form: {
      title: "Отримати безкоштовний тест на цифру",
      text: "Залиште ім'я і телефон. Напишемо у робочий час і надішлемо посилання на тест VerifEye.",
      service: "Безкоштовний тест VerifEye на цифру",
    },
    faq: [
      { q: "Це справді безкоштовно?", a: "Так. Тест на цифру ми даємо безкоштовно, щоб ви побачили технологію на собі. Платити не потрібно ні до, ні після." },
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
      sub: "Это не игра и не приложение-шутка. Вы записываете число от 1 до 6 и никому его не говорите, потом около 5 минут отвечаете на вопросы в приложении VerifEye, отрицая все числа, включая своё. Алгоритм Converus определяет ваше число по реакциям глаз. Так вы на себе почувствуете, как работает технология, прежде чем заказывать настоящую проверку.",
      facts: ["0 ₴, без обязательств", "около 5 минут со смартфона", "тот же VerifEye, что и в платных тестах", "отчёт с результатом в тот же день"],
      primary: "Получить бесплатный тест",
    },
    blocks: [
      { type: "steps", tone: "white", title: "Как это происходит", items: [
        { title: "Оставляете имя и телефон", text: "Мы связываемся в рабочее время и отправляем ссылку на тест в приложении VerifEye для iPhone или Android." },
        { title: "Записываете число от 1 до 6", text: "Никому его не говорите. Садитесь в тихой комнате с ровным освещением, без очков, телефон перед лицом, взгляд чуть выше камеры." },
        { title: "Проходите тест", text: "Сначала короткий тренировочный тест с буквами, потом вопросы о числах. На все вы отвечаете «Неправда», то есть отрицаете и своё число тоже. Время на ответ ограничено. Камера фиксирует реакции глаз: зрачок, движения, моргание." },
        { title: "Получаете отчёт", text: "Алгоритм Converus считает реакции и ставит ваше число на первое место в отчёте. Мы отправляем вам отчёт в тот же день. Дальше решаете сами, нужен ли настоящий тест." },
      ] },
      { type: "cards", title: "Почему это честный тест, а не фокус", cols: 2, items: [
        { title: "То же оборудование", text: "Тест на цифру проходит в том же приложении VerifEye и на том же сервере Converus, что и платные проверки на верность или для кандидатов." },
        { title: "Реакции, которые не контролируются", text: "Когда вы слышите своё число и говорите «Неправда», зрачок и движения глаз реагируют иначе, чем на остальные числа, даже если вы стараетесь выглядеть спокойно. Именно это измеряет алгоритм, а не ваш голос или мимику." },
        { title: "Никто на вас не смотрит", text: "Оценку считает алгоритм, а не человек. Специалист лишь готовит ссылку и передаёт результат." },
        { title: "Это демонстрация, а не проверка", text: "Тест на число показывает принцип. Настоящая проверка строится на ваших вопросах и длится около 10 минут онлайн или 30–45 минут в кабинете." },
      ] },
      { type: "list", title: "Что нужно от вас", cols: 3, items: ["смартфон iPhone или Android с фронтальной камерой", "стабильный Wi-Fi", "тихая комната без окна или телевизора за спиной", "ровное освещение лица", "без очков, линзы можно оставить", "несколько свободных минут"] },
      { type: "image", title: "Как выглядит отчёт числового теста", src: "/images/report-sample-verifeye-number.webp", alt: "Отчёт числового теста VerifEye", caption: "Настоящий отчёт VerifEye: четыре фото во время теста, качество данных и первое место для числа, которое определил алгоритм. Персональные данные размыты.", width: 1100, height: 1557 },
      { type: "text", tone: "white", title: "Что дальше, если технология убедила", paragraphs: [
        "Настоящий онлайн-тест VerifEye на ваши вопросы стоит от 2 500 ₴ и длится около 10 минут. Точность 84–89% по данным Converus. Подходит для проверки на верность, кандидатов на работу и людей в других городах.",
        "Если нужна максимальная точность и письменный отчёт сразу после теста, есть EyeDetect в кабинете во Львове или с выездом: 30–45 минут, точность 86–90%, от 5 500 ₴.",
        "Бесплатный тест ни к чему не обязывает. Ваш номер мы используем только для того, чтобы отправить ссылку и результат.",
      ] },
    ],
    form: {
      title: "Получить бесплатный тест на цифру",
      text: "Оставьте имя и телефон. Напишем в рабочее время и отправим ссылку на тест VerifEye.",
      service: "Бесплатный тест VerifEye на цифру",
    },
    faq: [
      { q: "Это действительно бесплатно?", a: "Да. Тест на цифру мы даём бесплатно, чтобы вы увидели технологию на себе. Платить не нужно ни до, ни после." },
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
      sub: "This is not a game or a joke app. You write down a number from 1 to 6 and tell no one, then spend about 5 minutes answering questions in the VerifEye app, denying every number including your own. The Converus algorithm identifies your number from your eye reactions. You feel how the technology works on yourself before ordering a real test.",
      facts: ["free, no obligations", "about 5 minutes on a smartphone", "the same VerifEye used in paid tests", "report with the result the same day"],
      primary: "Get the free test",
    },
    blocks: [
      { type: "steps", tone: "white", title: "How it works", items: [
        { title: "Leave your name and phone", text: "We contact you during business hours and send a link to the test in the VerifEye app for iPhone or Android." },
        { title: "Write down a number from 1 to 6", text: "Tell no one. Sit in a quiet room with even lighting, no glasses, phone in front of your face, eyes slightly above the camera." },
        { title: "Take the test", text: "First a short practice test with letters, then questions about numbers. You answer “False” to all of them, denying your own number too. Answer time is limited. The camera records eye reactions: pupil, movements, blinks." },
        { title: "Get the report", text: "The Converus algorithm scores the reactions and puts your number in first place in the report. We send you the report the same day. Then you decide whether you need a real test." },
      ] },
      { type: "cards", title: "Why this is an honest test, not a trick", cols: 2, items: [
        { title: "The same equipment", text: "The number test runs in the same VerifEye app and on the same Converus server as paid fidelity or candidate tests." },
        { title: "Reactions you cannot control", text: "When you hear your number and say “False”, your pupil and eye movements react differently than to the other numbers, even if you try to look calm. That is what the algorithm measures, not your voice or facial expression." },
        { title: "No one is watching you", text: "The score is computed by the algorithm, not a person. The examiner only prepares the link and passes on the result." },
        { title: "A demonstration, not an examination", text: "The number test shows the principle. A real test is built on your questions and takes about 10 minutes online or 30–45 minutes in the office." },
      ] },
      { type: "list", title: "What you need", cols: 3, items: ["an iPhone or Android smartphone with a front camera", "stable Wi-Fi", "a quiet room with no window or TV behind you", "even lighting on the face", "no glasses, contact lenses are fine", "a few free minutes"] },
      { type: "image", title: "What the number test report looks like", src: "/images/report-sample-verifeye-number.webp", alt: "VerifEye number test report", caption: "A real VerifEye report: four photos taken during the test, data quality, and first place for the number the algorithm identified. Personal data blurred.", width: 1100, height: 1557 },
      { type: "text", tone: "white", title: "What comes next if the technology convinced you", paragraphs: [
        "A real VerifEye online test on your questions costs from UAH 2,500 and takes about 10 minutes. Accuracy 84–89% according to Converus. Suitable for fidelity checks, job candidates and people in other cities.",
        "If you need maximum accuracy and a written report right after the test, there is EyeDetect in our Lviv office or on-site: 30–45 minutes, 86–90% accuracy, from UAH 5,500.",
        "The free test creates no obligations. We use your number only to send the link and the result.",
      ] },
    ],
    form: {
      title: "Get the free number test",
      text: "Leave your name and phone. We will message you during business hours and send the VerifEye test link.",
      service: "Free VerifEye number test",
    },
    faq: [
      { q: "Is it really free?", a: "Yes. We give the number test for free so you can see the technology on yourself. No payment before or after." },
      { q: "Will you learn anything personal about me?", a: "No. The test is only about the number you chose. No personal questions. The app takes a photo for the report; eye reactions and your answers go to the Converus server. Only you and the examiner see the report." },
      { q: "What if the algorithm gets it wrong?", a: "It happens, most often because the conditions were broken: poor light, glasses, noise, talking during the test. Then you can take it again." },
      { q: "Can I give the test to a friend or partner?", a: "Yes. Leave your phone number and forward the link to anyone you like. The person who chose the number must be the one taking the test." },
    ],
  },
};

export const getFreeTestPage = (lang) => freeTestPage[lang] || freeTestPage.uk;
