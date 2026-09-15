// Зміст сторінки /eyedetect (технологія). Ключі: uk, ru. en додамо, коли ввімкнемо мову.
export const eyedetectPage = {
  uk: {
    seo: {
      title: "EyeDetect — детектор брехні за рухами очей: як працює і точність",
      description:
        "EyeDetect: камера 60 кадрів за секунду фіксує мимовільні реакції очей. Без датчиків, 30–45 хвилин, точність 86–90% за даними Converus. Обмеження і різниця з класичним поліграфом.",
      keywords: ["EyeDetect", "eye detect", "детектор брехні за очима", "як працює EyeDetect", "точність EyeDetect", "EyeDetect чи поліграф"],
      crumbHome: "Головна",
      crumb: "Технологія EyeDetect",
    },
    hero: {
      eyebrow: "Технологія Converus, США",
      h1: "Детектор брехні EyeDetect: як він працює",
      sub: "Тест без датчиків на тілі: камера фіксує мимовільні реакції очей, алгоритм Converus рахує оцінку достовірності, а спеціаліст готує питання і пояснює звіт. Нижче чесно про принцип, точність і обмеження.",
      facts: ["30–45 хвилин", "без датчиків", "висновок формує алгоритм", "звіт одразу після тесту"],
    },
    how: {
      title: "Що саме фіксує EyeDetect",
      items: [
        { title: "Зіниця", text: "Коли людина бреше, мозок працює інтенсивніше, і зіниця мимовільно розширюється на частки міліметра. Камера з частотою 60 кадрів за секунду це бачить, людина ні." },
        { title: "Рухи і фіксації погляду", text: "Швидкість читання твердження, повернення до окремих слів, тривалість фіксацій. Брехня змінює те, як людина читає." },
        { title: "Час і точність відповіді", text: "Час на кожну відповідь, кількість помилок і тайм-аутів. Разом із даними про зіницю і погляд це десятки показників, які алгоритм зважує в одну оцінку достовірності." },
      ],
    },
    process: {
      title: "Як проходить тест, крок за кроком",
      steps: [
        { title: "Розмова і питання", text: "Ви пояснюєте ситуацію. Разом формулюємо від одного до трьох конкретних питань про факти, а не про думки чи наміри." },
        { title: "Передтестові інструкції", text: "Людина читає, що саме означає кожне питання, які випадки враховуються, а які ні. Це усуває двозначність до початку тесту." },
        { title: "Практичний тест", text: "Кілька тренувальних тверджень, щоб звикнути до екрана, темпу і двох кнопок «правда» і «неправда»." },
        { title: "Основний тест", text: "30–45 хвилин перед монітором. Кожне питання зустрічається у різних формулюваннях багато разів, підборіддя на підставці, руки на мишці." },
        { title: "Звіт", text: "Алгоритм Converus рахує оцінку достовірності від 1 до 99: по тесту в цілому, а в тесті на кілька тем — по кожній темі. 50 і вище — «заслуговує на довіру», нижче 50 — «не заслуговує довіри». Звіт у PDF одразу після тесту, спеціаліст пояснює, що з ним робити." },
      ],
    },
    compare: {
      title: "EyeDetect, VerifEye і класичний поліграф",
      sub: "Три інструменти, три різні ситуації. Таблиця без прикрас, щоб ви обрали правильно.",
      columns: ["", "EyeDetect", "VerifEye", "Класичний поліграф"],
      rows: [
        ["Де проходить", "Кабінет у Львові або виїзд", "Будь-де, з телефона", "Кабінет поліграфолога"],
        ["Тривалість", "30–45 хвилин", "15–20 хвилин", "2–4 години"],
        ["Датчики на тілі", "Немає", "Немає", "Манжета, датчики дихання, електроди"],
        ["Хто формує висновок", "Алгоритм; спеціаліст готує питання і пояснює звіт", "Алгоритм; спеціаліст готує питання і пояснює звіт", "Поліграфолог"],
        ["Точність (дані виробника)", "86–90% залежно від типу тесту", "84–89%", "залежить від спеціаліста"],
        ["Кількість питань", "1–3", "1–3", "1–4"],
        ["Ціна від", "5 500 ₴", "2 500 ₴", "від 6 000 ₴ у різних кабінетах"],
        ["Коли обирати", "Потрібен точніший результат і письмовий звіт одразу після тесту", "Людина в іншому місті або потрібна швидка відповідь на 1–3 питання", "Коли потрібен саме класичний метод"],
      ],
    },
    limits: {
      title: "Обмеження, про які кажемо одразу",
      items: [
        "Точність 86–90% (88% у скринінгових тестах, 90% у діагностичних на одне питання, дані Converus) — це частка правильних серед тестів із визначеним результатом. Отже, 10–14 зі 100 визначених результатів можуть бути хибними, тому ми ставимо конкретні питання. Невизначені результати в цей відсоток не входять, їх повторюємо за наш рахунок.",
        "Тест перевіряє факти й події, а не думки, наміри чи почуття. «Чи любиш ти мене» перевірити неможливо, «чи був статевий контакт з іншою людиною з березня» можливо.",
        "Результат не є доказом у суді в Україні. Він допомагає ухвалити рішення, а не замінює слідство.",
        "Не тестуємо людей у стані сп'яніння. За даними Converus, на результат впливають травми мозку та хвороби або ліки, що змінюють зіницю чи швидкість реакції: хвороба Паркінсона, діабет, розсіяний склероз, деякі препарати і краплі для очей. Тривожні розлади, ПТСР, вагітність, антидепресанти тесту не заважають. Converus тестує з 11 років, ми приймаємо з 14 лише за письмовою згодою і в присутності батьків. За потреби перед тестом проводимо коротку перевірку реакції зіниць.",
        "Людина має погодитися на тест письмово. Примусова перевірка не проводиться.",
      ],
    },
    focus: {
      title: "Чому спогади й асоціації не спотворюють результат",
      paragraphs: [
        "Класичний поліграф реагує на емоцію. А емоцію викликає не лише брехня, а й асоціація: згадайте смак лимона, і рот наповниться слиною, хоча лимона немає. Так само працює пам'ять. Якщо людину колись зраджували або вона сама зраджувала в інших стосунках, питання про вірність піднімає цей спогад, тіло реагує, і поліграф фіксує реакцію, яка не має стосунку до нинішньої ситуації. У тестах на вірність це головне джерело хибних результатів.",
        "В EyeDetect людина зайнята іншим. Твердження змінюються кожні 5–7 секунд, треба прочитати кожне, зрозуміти і відповісти «правда» чи «неправда». Увага прикута до тексту, на асоціації й спогади просто не лишається часу. Алгоритм порівнює, як людина читає і відповідає на різні теми, а не наскільки вона хвилюється.",
        "Тому EyeDetect краще підходить для питань, які зачіпають особисте: вірність, минулі стосунки, сімейні конфлікти. Ми додатково знімаємо ризик формулюванням: питання лише про конкретні дії за конкретний період, і людина читає їх до тесту.",
      ],
    },
    science: {
      title: "Наука за технологією",
      text: "EyeDetect розробили в Університеті Юти професори Джон Кірчер і Девід Раскін, які до цього десятиліттями досліджували класичний поліграф. Технологію запатентовано, результати опубліковано в рецензованих журналах, а з 2014 року нею користуються поліцейські відділки, банки й корпорації у понад 60 країнах.",
      links: [
        { label: "Converus, розробник технології", href: "https://converus.com/" },
        { label: "Список сертифікованих партнерів Converus", href: "https://converus.com/find-a-partner/" },
        { label: "Усі питання і відповіді про EyeDetect на нашому сайті", href: "/faq" },
      ],
    },
    faq: [
      { q: "Чи можна обманути EyeDetect?", a: "Свідомо контролювати зіницю і мікрорухи очей неможливо, а твердження змінюються кожні 5–7 секунд, тому на прийоми проти класичного поліграфа просто немає часу. Якщо людина відповідає навмання, затягує відповіді або не читає твердження, тест визнається недійсним, і ми проводимо його повторно за наш рахунок." },
      { q: "Чим EyeDetect кращий за поліграф?", a: "Він швидший, без датчиків на тілі, а оцінку рахує алгоритм однаково для всіх. Він не кращий у всьому: класичний поліграф дає більше свободи в діалозі. Для конкретних фактичних питань EyeDetect зазвичай зручніший." },
      { q: "Скільки питань можна перевірити за один тест?", a: "Від одного до трьох. Чим менше питань, тим вища точність по кожному. Протокол технічно дозволяє чотири теми, але для точності ми радимо не більше трьох, а для складних ситуацій проводимо два тести." },
      { q: "Що людина бачить на екрані?", a: "Твердження на кшталт «Я не мала статевого контакту з іншим чоловіком з березня 2023 року» і дві кнопки: правда або неправда. Кожне питання повторюється у різних формулюваннях." },
      { q: "Чи потрібна підготовка?", a: "Виспатися, не вживати алкоголь за добу, взяти окуляри, якщо носите. Перед тестом людина читає всі питання, несподіванок немає." },
    ],
    cta: { title: "Готові перевірити?", text: "Запишіться на тест у Львові або пройдіть VerifEye онлайн уже сьогодні.", online: "Пройти онлайн", book: "Записатися на EyeDetect" },
  },
  ru: {
    seo: {
      title: "EyeDetect — детектор лжи по движениям глаз: как работает и точность",
      description:
        "EyeDetect: камера 60 кадров в секунду фиксирует непроизвольные реакции глаз. Без датчиков, 30–45 минут, точность 86–90% по данным Converus. Ограничения и отличия от классического полиграфа.",
      keywords: ["EyeDetect", "eye detect", "детектор лжи по глазам", "как работает EyeDetect", "точность EyeDetect", "EyeDetect или полиграф"],
      crumbHome: "Главная",
      crumb: "Технология EyeDetect",
    },
    hero: {
      eyebrow: "Технология Converus, США",
      h1: "Детектор лжи EyeDetect: как он работает",
      sub: "Тест без датчиков на теле: камера фиксирует непроизвольные реакции глаз, алгоритм Converus считает оценку достоверности, а специалист готовит вопросы и объясняет отчёт. Ниже честно о принципе, точности и ограничениях.",
      facts: ["30–45 минут", "без датчиков", "заключение формирует алгоритм", "отчёт сразу после теста"],
    },
    how: {
      title: "Что именно фиксирует EyeDetect",
      items: [
        { title: "Зрачок", text: "Когда человек лжёт, мозг работает интенсивнее, и зрачок непроизвольно расширяется на доли миллиметра. Камера с частотой 60 кадров в секунду это видит, человек нет." },
        { title: "Движения и фиксации взгляда", text: "Скорость чтения утверждения, возвраты к отдельным словам, длительность фиксаций. Ложь меняет то, как человек читает." },
        { title: "Время и точность ответа", text: "Время на каждый ответ, количество ошибок и тайм-аутов. Вместе с данными о зрачке и взгляде это десятки показателей, которые алгоритм взвешивает в одну оценку достоверности." },
      ],
    },
    process: {
      title: "Как проходит тест, шаг за шагом",
      steps: [
        { title: "Разговор и вопросы", text: "Вы объясняете ситуацию. Вместе формулируем от одного до трёх конкретных вопросов о фактах, а не о мыслях или намерениях." },
        { title: "Предтестовые инструкции", text: "Человек читает, что именно означает каждый вопрос, какие случаи учитываются, а какие нет. Это убирает двусмысленность до начала теста." },
        { title: "Практический тест", text: "Несколько тренировочных утверждений, чтобы привыкнуть к экрану, темпу и двум кнопкам «правда» и «неправда»." },
        { title: "Основной тест", text: "30–45 минут перед монитором. Каждый вопрос встречается в разных формулировках много раз, подбородок на подставке, руки на мышке." },
        { title: "Отчёт", text: "Алгоритм Converus считает оценку достоверности от 1 до 99: по тесту в целом, а в тесте на несколько тем — по каждой теме. 50 и выше — «заслуживает доверия», ниже 50 — «не заслуживает доверия». Отчёт в PDF сразу после теста, специалист объясняет, что с ним делать." },
      ],
    },
    compare: {
      title: "EyeDetect, VerifEye и классический полиграф",
      sub: "Три инструмента, три разные ситуации. Таблица без прикрас, чтобы вы выбрали правильно.",
      columns: ["", "EyeDetect", "VerifEye", "Классический полиграф"],
      rows: [
        ["Где проходит", "Кабинет во Львове или выезд", "Где угодно, с телефона", "Кабинет полиграфолога"],
        ["Длительность", "30–45 минут", "15–20 минут", "2–4 часа"],
        ["Датчики на теле", "Нет", "Нет", "Манжета, датчики дыхания, электроды"],
        ["Кто формирует заключение", "Алгоритм; специалист готовит вопросы и объясняет отчёт", "Алгоритм; специалист готовит вопросы и объясняет отчёт", "Полиграфолог"],
        ["Точность (данные производителя)", "86–90% в зависимости от типа теста", "84–89%", "зависит от специалиста"],
        ["Количество вопросов", "1–3", "1–3", "1–4"],
        ["Цена от", "5 500 ₴", "2 500 ₴", "от 6 000 ₴ в разных кабинетах"],
        ["Когда выбирать", "Нужен более точный результат и письменный отчёт сразу после теста", "Человек в другом городе или нужен быстрый ответ на 1–3 вопроса", "Когда нужен именно классический метод"],
      ],
    },
    limits: {
      title: "Ограничения, о которых говорим сразу",
      items: [
        "Точность 86–90% (88% в скрининговых тестах, 90% в диагностических на один вопрос, данные Converus) — это доля правильных среди тестов с определённым результатом. Значит, 10–14 из 100 определённых результатов могут быть ошибочными, поэтому мы ставим конкретные вопросы. Неопределённые результаты в этот процент не входят, их повторяем за наш счёт.",
        "Тест проверяет факты и события, а не мысли, намерения или чувства. «Любишь ли ты меня» проверить невозможно, «был ли половой контакт с другим человеком с марта» возможно.",
        "Результат не является доказательством в суде в Украине. Он помогает принять решение, а не заменяет следствие.",
        "Не тестируем людей в состоянии опьянения. По данным Converus, на результат влияют травмы мозга и болезни или лекарства, меняющие зрачок или скорость реакции: болезнь Паркинсона, диабет, рассеянный склероз, некоторые препараты и капли для глаз. Тревожные расстройства, ПТСР, беременность, антидепрессанты тесту не мешают. Converus тестирует с 11 лет, мы принимаем с 14 только с письменного согласия и в присутствии родителей. При необходимости перед тестом проводим короткую проверку реакции зрачков.",
        "Человек должен согласиться на тест письменно. Принудительная проверка не проводится.",
      ],
    },
    focus: {
      title: "Почему воспоминания и ассоциации не искажают результат",
      paragraphs: [
        "Классический полиграф реагирует на эмоцию. А эмоцию вызывает не только ложь, но и ассоциация: вспомните вкус лимона, и рот наполнится слюной, хотя лимона нет. Так же работает память. Если человеку когда-то изменяли или он сам изменял в других отношениях, вопрос о верности поднимает это воспоминание, тело реагирует, и полиграф фиксирует реакцию, не имеющую отношения к нынешней ситуации. В тестах на верность это главный источник ложных результатов.",
        "В EyeDetect человек занят другим. Утверждения меняются каждые 5–7 секунд, нужно прочитать каждое, понять и ответить «правда» или «неправда». Внимание приковано к тексту, на ассоциации и воспоминания просто не остаётся времени. Алгоритм сравнивает, как человек читает и отвечает на разные темы, а не насколько он волнуется.",
        "Поэтому EyeDetect лучше подходит для вопросов, затрагивающих личное: верность, прошлые отношения, семейные конфликты. Мы дополнительно снимаем риск формулировкой: вопросы только о конкретных действиях за конкретный период, и человек читает их до теста.",
      ],
    },
    science: {
      title: "Наука за технологией",
      text: "EyeDetect разработали в Университете Юты профессора Джон Кирчер и Дэвид Раскин, которые до этого десятилетиями исследовали классический полиграф. Технология запатентована, результаты опубликованы в рецензируемых журналах, а с 2014 года ею пользуются полицейские участки, банки и корпорации более чем в 60 странах.",
      links: [
        { label: "Converus, разработчик технологии", href: "https://converus.com/" },
        { label: "Список сертифицированных партнёров Converus", href: "https://converus.com/find-a-partner/" },
        { label: "Все вопросы и ответы об EyeDetect на нашем сайте", href: "/faq" },
      ],
    },
    faq: [
      { q: "Можно ли обмануть EyeDetect?", a: "Сознательно контролировать зрачок и микродвижения глаз невозможно, а утверждения меняются каждые 5–7 секунд, поэтому на приёмы против классического полиграфа просто нет времени. Если человек отвечает наугад, затягивает ответы или не читает утверждения, тест признаётся недействительным, и мы проводим его повторно за наш счёт." },
      { q: "Чем EyeDetect лучше полиграфа?", a: "Он быстрее, без датчиков на теле, а оценку считает алгоритм одинаково для всех. Он не лучше во всём: классический полиграф даёт больше свободы в диалоге. Для конкретных фактических вопросов EyeDetect обычно удобнее." },
      { q: "Сколько вопросов можно проверить за один тест?", a: "От одного до трёх. Чем меньше вопросов, тем выше точность по каждому. Протокол технически позволяет четыре темы, но для точности мы советуем не больше трёх, а для сложных ситуаций проводим два теста." },
      { q: "Что человек видит на экране?", a: "Утверждения вроде «Я не имела полового контакта с другим мужчиной с марта 2023 года» и две кнопки: правда или неправда. Каждый вопрос повторяется в разных формулировках." },
      { q: "Нужна ли подготовка?", a: "Выспаться, не употреблять алкоголь за сутки, взять очки, если носите. Перед тестом человек читает все вопросы, неожиданностей нет." },
    ],
    cta: { title: "Готовы проверить?", text: "Запишитесь на тест во Львове или пройдите VerifEye онлайн уже сегодня.", online: "Пройти онлайн", book: "Записаться на EyeDetect" },
  },
  en: {
    seo: {
      title: "EyeDetect — the eye-movement lie detector: how it works and how accurate it is",
      description:
        "EyeDetect: a 60-frames-per-second camera records involuntary eye reactions. No sensors, 30–45 minutes, 86–90% accuracy according to Converus. Limitations and how it differs from a classic polygraph.",
      keywords: ["EyeDetect", "eye detect", "eye-tracking lie detector", "how EyeDetect works", "EyeDetect accuracy", "EyeDetect vs polygraph"],
      crumbHome: "Home",
      crumb: "EyeDetect technology",
    },
    hero: {
      eyebrow: "Converus technology, USA",
      h1: "The EyeDetect lie detector: how it works",
      sub: "A test with no sensors on the body: a camera records involuntary eye reactions, the Converus algorithm calculates a Credibility Score, and the examiner prepares the questions and explains the report. Below is an honest account of the principle, the accuracy, and the limitations.",
      facts: ["30–45 minutes", "no sensors", "the algorithm forms the conclusion", "report right after the test"],
    },
    how: {
      title: "What exactly EyeDetect records",
      items: [
        { title: "Pupil", text: "When a person lies, the brain works harder and the pupil involuntarily dilates by fractions of a millimeter. A camera running at 60 frames per second sees this; a human observer does not." },
        { title: "Eye movements and fixations", text: "How fast a statement is read, returns to individual words, how long the eyes fixate. Lying changes the way a person reads." },
        { title: "Response time and accuracy", text: "Time taken for each answer, the number of errors and time-outs. Together with the pupil and gaze data, this gives dozens of measures that the algorithm weighs into a single Credibility Score." },
      ],
    },
    process: {
      title: "How the test goes, step by step",
      steps: [
        { title: "Conversation and questions", text: "You explain the situation. Together we formulate one to three specific questions about facts, not about thoughts or intentions." },
        { title: "Pre-test instructions", text: "The person reads what exactly each question means, which cases count and which do not. This removes ambiguity before the test starts." },
        { title: "Practice test", text: "A few practice statements to get used to the screen, the pace, and the two buttons, “true” and “false”." },
        { title: "Main test", text: "30–45 minutes in front of a monitor. Each question appears many times in different wordings; the chin rests on a support, the hands stay on the mouse." },
        { title: "Report", text: "The Converus algorithm calculates a Credibility Score from 1 to 99: for the test as a whole, and in a multi-topic test for each topic. 50 and above means “credible”, below 50 means “not credible”. The PDF report is ready right after the test, and the examiner explains what to do with it." },
      ],
    },
    compare: {
      title: "EyeDetect, VerifEye, and the classic polygraph",
      sub: "Three tools, three different situations. A plain table so you can choose correctly.",
      columns: ["", "EyeDetect", "VerifEye", "Classic polygraph"],
      rows: [
        ["Where it takes place", "Our Lviv office or on-site", "Anywhere, from a phone", "Polygraph examiner's office"],
        ["Duration", "30–45 minutes", "15–20 minutes", "2–4 hours"],
        ["Sensors on the body", "None", "None", "Cuff, breathing sensors, electrodes"],
        ["Who forms the conclusion", "The algorithm; the examiner prepares the questions and explains the report", "The algorithm; the examiner prepares the questions and explains the report", "The polygraph examiner"],
        ["Accuracy (manufacturer data)", "86–90% depending on test type", "84–89%", "depends on the examiner"],
        ["Number of questions", "1–3", "1–3", "1–4"],
        ["Price from", "UAH 5,500", "UAH 2,500", "from UAH 6,000 at various offices"],
        ["When to choose", "You need a more accurate result and a written report right after the test", "The person is in another city, or you need a quick answer to 1–3 questions", "When the classic method itself is required"],
      ],
    },
    limits: {
      title: "Limitations we state up front",
      items: [
        "An accuracy of 86–90% (88% in screening tests, 90% in single-issue diagnostic tests, Converus data) is the share of correct results among tests with a definite result. So 10–14 out of 100 definite results may be wrong, which is why we ask specific questions. Inconclusive results are not included in this figure; we repeat those tests at our expense.",
        "The test checks facts and events, not thoughts, intentions, or feelings. “Do you love me” cannot be tested; “have you had sexual contact with another person since March” can.",
        "The result is not admissible as evidence in a Ukrainian court. It helps you make a decision; it does not replace an investigation.",
        "We do not test people under the influence of alcohol or drugs. According to Converus, the result is affected by brain injuries and by illnesses or medications that alter the pupil or reaction speed: Parkinson's disease, diabetes, multiple sclerosis, certain drugs and eye drops. Anxiety disorders, PTSD, pregnancy, and antidepressants do not interfere with the test. Converus tests from age 11; we accept from age 14 only with written parental consent and a parent present. If needed, we run a short pupil-response check before the test.",
        "The person must consent to the test in writing. We do not conduct forced testing.",
      ],
    },
    focus: {
      title: "Why memories and associations do not distort the result",
      paragraphs: [
        "A classic polygraph reacts to emotion. And emotion is triggered not only by a lie but also by association: think of the taste of a lemon and your mouth waters, though there is no lemon. Memory works the same way. If a person was once cheated on, or cheated themselves in another relationship, a question about fidelity brings up that memory, the body reacts, and the polygraph records a reaction that has nothing to do with the current situation. In fidelity tests this is the main source of false results.",
        "In EyeDetect the person is busy with something else. Statements change every 5–7 seconds; each one has to be read, understood, and answered “true” or “false”. Attention is locked on the text, and there is simply no time for associations and memories. The algorithm compares how the person reads and answers across different topics, not how nervous they are.",
        "That is why EyeDetect is better suited to questions that touch on personal matters: fidelity, past relationships, family conflicts. We further reduce the risk through wording: questions cover only specific actions over a specific period, and the person reads them before the test.",
      ],
    },
    science: {
      title: "The science behind the technology",
      text: "EyeDetect was developed at the University of Utah by professors John Kircher and David Raskin, who had spent decades researching the classic polygraph. The technology is patented, the results have been published in peer-reviewed journals, and since 2014 it has been used by police departments, banks, and corporations in more than 60 countries.",
      links: [
        { label: "Converus, developer of the technology", href: "https://converus.com/" },
        { label: "List of certified Converus partners", href: "https://converus.com/find-a-partner/" },
        { label: "All questions and answers about EyeDetect on our site", href: "/faq" },
      ],
    },
    faq: [
      { q: "Can EyeDetect be fooled?", a: "The pupil and the micro-movements of the eyes cannot be controlled consciously, and the statements change every 5–7 seconds, so there is simply no time for the countermeasures used against a classic polygraph. If a person answers at random, delays their answers, or does not read the statements, the test is declared invalid and we repeat it at our expense." },
      { q: "How is EyeDetect better than a polygraph?", a: "It is faster, has no sensors on the body, and the score is calculated by an algorithm in the same way for everyone. It is not better in every respect: a classic polygraph allows more freedom in dialogue. For specific factual questions, EyeDetect is usually more convenient." },
      { q: "How many questions can be tested in one session?", a: "One to three. The fewer the questions, the higher the accuracy for each. The protocol technically allows four topics, but for accuracy we recommend no more than three, and for complex situations we run two tests." },
      { q: "What does the person see on the screen?", a: "Statements such as “I have not had sexual contact with another man since March 2023” and two buttons: true or false. Each question is repeated in different wordings." },
      { q: "Is any preparation needed?", a: "Get a good night's sleep, avoid alcohol for 24 hours, and bring your glasses if you wear them. Before the test the person reads all the questions; there are no surprises." },
    ],
    cta: { title: "Ready to find out?", text: "Book a test in Lviv or take the VerifEye test online today.", online: "Take the online test", book: "Book an EyeDetect test" },
  },
};

export const getEyedetectPage = (lang) => eyedetectPage[lang] || eyedetectPage.uk;
