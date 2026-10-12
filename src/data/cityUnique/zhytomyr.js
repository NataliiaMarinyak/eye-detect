// Унікальний контент сторінки Житомира (uk/ru/en). Дорога і право — з перевірених фактів на 15.09.2026; випадки — спільний блок.
// faq[].replaces — ключі шаблонних питань (cityTexts faq), які це питання замінює.
export const zhytomyr = {
  uk: {
    seoTitle: "Поліграф у Житомирі: детектор брехні з виїздом або онлайн",
    seoDescription: "Поліграф у Житомирі: виїзд спеціаліста зі Львова з EyeDetect за 12 000 ₴ під ключ або онлайн-тест VerifEye з телефона вже сьогодні, від 2 500 ₴.",
    updated: "2026-10-09",
    intro: "Житомир — центр Житомирської області, приблизно за 400 км від Львова. Найшвидший варіант — онлайн-тест VerifEye зі смартфона, його можна пройти вже сьогодні. Для тесту EyeDetect спеціаліст приїжджає зі Львова з обладнанням: автобусом дорога займає 6–7 годин, автомобілем — близько 5–6 годин.",
    facts: [["Від Львова", "≈ 400 км, 6–7 год автобусом"], ["Виїзд", "12 000 ₴ під ключ"], ["Онлайн-тест", "від 2 500 ₴"]],
    faq: [
      { q: "Де пройти поліграф у Житомирі?", a: "Офісу в Житомирі немає, але є три варіанти. Онлайн-тест VerifEye можна пройти вже сьогодні з телефона, у тихій кімнаті вдома чи в офісі. Тест EyeDetect проводимо під час виїзду: спеціаліст приїжджає зі Львова з обладнанням у ваш офіс або в іншу тиху кімнату. Третій варіант — тест EyeDetect у кабінеті нашого партнера в Києві, якщо ви однаково там буваєте." },
      { q: "Скільки коштує детектор брехні в Житомирі?", a: "Виїзд спеціаліста з EyeDetect до Житомира коштує 12 000 ₴ під ключ, разом із тестом для однієї людини. Для кількох осіб вартість виїзду ділиться, точну суму назве спеціаліст. Онлайн-тест VerifEye: 2 500 ₴ за одне питання, 4 000 ₴ за три, 6 000 ₴ за шість, без доплат.", replaces: ["price"] },
      { q: "Як швидко спеціаліст може приїхати до Житомира?", a: "Виїзд до Житомира плануємо за 1–2 тижні й поєднуємо з іншими заявками. Дорога зі Львова автобусом займає 6–7 годин, найшвидші рейси — 5 годин 40 хвилин. Автомобілем — близько 5–6 годин. Прямий поїзд лише один, і він іде понад 13 годин, тому їдемо автобусом або автомобілем. Онлайн-тест VerifEye доступний уже сьогодні.", replaces: ["speed"], sources: [["Укрзалізниця: розклад Львів — Житомир", "https://www.uz.gov.ua/passengers/timetable/?from_station=23200&to_station=22400&by_route=1"], ["Inbus: автобуси Львів — Житомир", "https://inbus.ua/en/bus-lviv-zhytomyr"], ["Degruz: відстань Львів — Житомир", "https://degruz.ua/rasstojanija-mezhdu-gorodami/lvov-zhitomir"]] },
      { q: "Чи можна перевірити партнера на зраду в Житомирі?", a: "Так. Тест перевіряє одну конкретну підозру, наприклад зраду за певний період. Його проходить партнер, якого підозрюють, або обидва партнери, кожен окремо. Тест добровільний, за письмовою згодою. Онлайн-тест VerifEye коштує від 2 500 ₴, і виїзд для нього не потрібен." },
      { q: "Якою мовою можна пройти тест у Житомирі?", a: "Українською, російською, англійською або німецькою. Питання формулюємо разом, і людина читає їх заздалегідь." },
      { q: "Чи законна перевірка на поліграфі в Україні?", a: "Жоден закон України не забороняє приватний добровільний тест на поліграфі й не регулює його окремо. Діють загальні правила, зокрема Закон «Про захист персональних даних»: дані можна обробляти за добровільною й поінформованою згодою людини. Ми проводимо тест лише за письмовою згодою, а неповнолітніх — тільки за письмовою згодою батьків і в їхній присутності. Для перевірки працівників і кандидатів правила суворіші, тому порадьтеся з юристом. Верховний Суд у кримінальних справах 2023–2024 років не визнавав висновок поліграфолога самостійним доказом, і наш результат теж не є судовим доказом.", sources: [["Закон про захист персональних даних", "https://zakon.rada.gov.ua/laws/show/2297-17"], ["Верховний Суд, справа 183/3452/19 (2023)", "https://reyestr.court.gov.ua/Review/108686155"], ["Верховний Суд, справа 760/23990/17 (2024)", "https://reyestr.court.gov.ua/Review/117757884"]] },
    ],
    towns: {
      title: "Бердичів, Коростень та інші міста Житомирської області",
      text: "Онлайн-тест VerifEye можна пройти з будь-якого міста Житомирської області. Виїзд з EyeDetect до інших міст — на тих самих умовах: 12 000 ₴ під ключ.",
      list: "Бердичів · Коростень · Малин · Звягель · Ружин",
      nearbyLabel: "Інші міста регіону:",
      nearby: [["kyiv", "Київ"], ["vinnytsia", "Вінниця"], ["rivne", "Рівне"]],
    },
    // local: джерела — https://uk.wikipedia.org/wiki/Житомир, https://uk.wikipedia.org/wiki/Житомирська_область, https://uk.wikipedia.org/wiki/Бердичів, https://uk.wikipedia.org/wiki/Коростень
    local: {
      title: "Житомир на трасі Київ — Львів: три способи пройти перевірку на поліграфі",
      paragraphs: [
        "Житомир стоїть на трасі, що з'єднує Київ зі Львовом: до Львова звідси близько 400 км, до Києва — близько 130. Тому, крім онлайн-тесту й виїзду спеціаліста, у житомирян є ще одна можливість. Онлайн-тест VerifEye проходять із телефона. З EyeDetect до Житомира приїжджає наш спеціаліст зі Львова. А якщо ви буваєте в Києві, тест EyeDetect можна пройти там, у кабінеті нашого партнера.",
        "Виїзд до Житомира коштує 12 000 ₴ під ключ. Спеціаліст їде зі Львова автобусом або автомобілем, дорога в один бік займає від п'яти до семи годин, і таку поїздку ми плануємо на тиждень-два наперед. Якщо тест потрібен одній людині й вона однаково буває в столиці, можна не чекати на виїзд: день і годину підбираємо разом із партнером після вашої заявки. У кабінеті київського партнера сімейна перевірка коштує 8 500 ₴, а скринінг і перевірка у справі про крадіжку — від 5 500 ₴. Якщо ж перевірити треба кількох людей або людина не може відлучитися з міста, зручніший виїзд: для нього досить тихої кімнати у вашому офісі чи в житомирському готелі, де є стіл і розетка.",
        "Те, що в Житомирі звуть поліграфом, у нас працює інакше, ніж класичний прилад: EyeDetect і VerifEye зчитують реакції очей, і жодних датчиків на тілі немає. Класичного поліграфа ми не пропонуємо.",
        "Бердичів і Коростень — залізничні вузли області, але їхати звідти заради тесту нікуди не обов'язково: онлайн-тест VerifEye проходять із телефона і там, і в Малині, Звягелі чи Ружині.",
        "Північ Житомирщини — це Полісся: в області багато лісу й великі поклади граніту, габро та лабрадориту, а в самому Житомирі основні галузі — легка, переробна й харчова промисловість. Звідси й приклади. Уявімо каменеобробний цех, де готових плит на складі менше, ніж мало вийти з блоків, а майстер каже, що решта пішла в брак. Або швейний цех, де власниця підозрює, що на її обладнанні й з її тканини шиють чужі замовлення. Або подружжя, у якому чоловік працює в столиці й буває вдома лише на вихідних. Питання до тесту могли б звучати так:",
      ],
      points: [
        "З 1 серпня 2026 року ви продавали плити з цеху, не оформивши замовлення?",
        "У вересні 2026 року ви шили в цеху замовлення, про які не знала власниця?",
        "З 1 березня 2026 року, працюючи в Києві, ви мали статевий контакт з іншою жінкою?",
      ],
    },
  },
  ru: {
    seoTitle: "Полиграф в Житомире: детектор лжи с выездом или онлайн",
    seoDescription: "Полиграф в Житомире: выезд специалиста из Львова с EyeDetect за 12 000 ₴ под ключ или онлайн-тест VerifEye с телефона уже сегодня, от 2 500 ₴.",
    updated: "2026-10-09",
    intro: "Житомир — центр Житомирской области, примерно в 400 км от Львова. Самый быстрый вариант — онлайн-тест VerifEye со смартфона, его можно пройти уже сегодня. Для теста EyeDetect специалист приезжает из Львова с оборудованием: на автобусе дорога занимает 6–7 часов, на машине — около 5–6 часов.",
    facts: [["От Львова", "≈ 400 км, 6–7 ч автобусом"], ["Выезд", "12 000 ₴ под ключ"], ["Онлайн-тест", "от 2 500 ₴"]],
    faq: [
      { q: "Где пройти полиграф в Житомире?", a: "Офиса в Житомире нет, но есть три варианта. Онлайн-тест VerifEye можно пройти уже сегодня с телефона, в тихой комнате дома или в офисе. Тест EyeDetect проводим во время выезда: специалист приезжает из Львова с оборудованием в ваш офис или в другую тихую комнату. Третий вариант — тест EyeDetect в кабинете нашего партнёра в Киеве, если вы всё равно там бываете." },
      { q: "Сколько стоит детектор лжи в Житомире?", a: "Выезд специалиста с EyeDetect в Житомир стоит 12 000 ₴ под ключ, вместе с тестом для одного человека. Для нескольких человек стоимость выезда делится, точную сумму назовёт специалист. Онлайн-тест VerifEye: 2 500 ₴ за один вопрос, 4 000 ₴ за три, 6 000 ₴ за шесть, без доплат.", replaces: ["price"] },
      { q: "Как быстро специалист может приехать в Житомир?", a: "Выезд в Житомир планируем за 1–2 недели и объединяем с другими заявками. Дорога из Львова на автобусе занимает 6–7 часов, самые быстрые рейсы — 5 часов 40 минут. На машине — около 5–6 часов. Прямой поезд только один, и он идёт больше 13 часов, поэтому едем автобусом или на машине. Онлайн-тест VerifEye доступен уже сегодня.", replaces: ["speed"], sources: [["Укрзализныця: расписание Львов — Житомир", "https://www.uz.gov.ua/passengers/timetable/?from_station=23200&to_station=22400&by_route=1"], ["Inbus: автобусы Львов — Житомир", "https://inbus.ua/en/bus-lviv-zhytomyr"], ["Degruz: расстояние Львов — Житомир", "https://degruz.ua/rasstojanija-mezhdu-gorodami/lvov-zhitomir"]] },
      { q: "Можно ли проверить партнёра на измену в Житомире?", a: "Да. Тест проверяет одно конкретное подозрение, например измену за определённый период. Его проходит партнёр, которого подозревают, или оба партнёра, каждый отдельно. Тест добровольный, с письменного согласия. Онлайн-тест VerifEye стоит от 2 500 ₴, и выезд для него не нужен." },
      { q: "На каком языке можно пройти тест в Житомире?", a: "На украинском, русском, английском или немецком. Вопросы формулируем вместе, и человек читает их заранее." },
      { q: "Законна ли проверка на полиграфе в Украине?", a: "Ни один закон Украины не запрещает частный добровольный тест на полиграфе и не регулирует его отдельно. Действуют общие правила, в том числе Закон «О защите персональных данных»: данные можно обрабатывать с добровольного и информированного согласия человека. Мы проводим тест только с письменного согласия, а несовершеннолетних — только с письменного согласия родителей и в их присутствии. Для проверки сотрудников и кандидатов правила строже, поэтому посоветуйтесь с юристом. Верховный Суд в уголовных делах 2023–2024 годов не признавал заключение полиграфолога самостоятельным доказательством, и наш результат тоже не является судебным доказательством.", sources: [["Закон о защите персональных данных", "https://zakon.rada.gov.ua/laws/show/2297-17"], ["Верховный Суд, дело 183/3452/19 (2023)", "https://reyestr.court.gov.ua/Review/108686155"], ["Верховный Суд, дело 760/23990/17 (2024)", "https://reyestr.court.gov.ua/Review/117757884"]] },
    ],
    towns: {
      title: "Бердичев, Коростень и другие города Житомирской области",
      text: "Онлайн-тест VerifEye можно пройти из любого города Житомирской области. Выезд с EyeDetect в другие города — на тех же условиях: 12 000 ₴ под ключ.",
      list: "Бердичев · Коростень · Малин · Звягель · Ружин",
      nearbyLabel: "Другие города региона:",
      nearby: [["kyiv", "Киев"], ["vinnytsia", "Винница"], ["rivne", "Ровно"]],
    },
    local: {
      title: "Житомир на трассе Киев — Львов: три способа пройти проверку на полиграфе",
      paragraphs: [
        "Житомир стоит на трассе, которая соединяет Киев со Львовом: до Львова отсюда около 400 км, до Киева — около 130. Поэтому, кроме онлайн-теста и выезда специалиста, у житомирян есть ещё одна возможность. Онлайн-тест VerifEye проходят с телефона. С EyeDetect в Житомир приезжает наш специалист из Львова. А если вы бываете в Киеве, тест EyeDetect можно пройти там, в кабинете нашего партнёра.",
        "Выезд в Житомир стоит 12 000 ₴ под ключ. Специалист едет из Львова автобусом или на машине, дорога в одну сторону занимает от пяти до семи часов, и такую поездку мы планируем на неделю-две вперёд. Если тест нужен одному человеку и он всё равно бывает в столице, можно не ждать выезда: день и час подбираем вместе с партнёром после вашей заявки. В кабинете киевского партнёра семейная проверка стоит 8 500 ₴, а скрининг и проверка по делу о краже — от 5 500 ₴. Если же проверить нужно нескольких человек или человек не может уехать из города, удобнее выезд: для него достаточно тихой комнаты в вашем офисе или в житомирской гостинице, где есть стол и розетка.",
        "То, что в Житомире называют полиграфом, у нас работает иначе, чем классический прибор: EyeDetect и VerifEye считывают реакции глаз, и никаких датчиков на теле нет. Классический полиграф мы не предлагаем.",
        "Бердичев и Коростень — железнодорожные узлы области, но ехать оттуда ради теста никуда не обязательно: онлайн-тест VerifEye проходят с телефона и там, и в Малине, Звягеле или Ружине.",
        "Север Житомирской области — это Полесье: в области много леса и большие залежи гранита, габбро и лабрадорита, а в самом Житомире основные отрасли — лёгкая, перерабатывающая и пищевая промышленность. Отсюда и примеры. Представим камнеобрабатывающий цех, где готовых плит на складе меньше, чем должно было выйти из блоков, а мастер говорит, что остальное ушло в брак. Или швейный цех, где владелица подозревает, что на её оборудовании и из её ткани шьют чужие заказы. Или супругов, у которых муж работает в столице и бывает дома только по выходным. Вопросы к тесту могли бы звучать так:",
      ],
      points: [
        "С 1 августа 2026 года вы продавали плиты из цеха, не оформив заказ?",
        "В сентябре 2026 года вы шили в цехе заказы, о которых не знала владелица?",
        "С 1 марта 2026 года, работая в Киеве, вы имели половой контакт с другой женщиной?",
      ],
    },
  },
  en: {
    seoTitle: "Lie Detector Test in Zhytomyr: Visit or Online",
    seoDescription: "Lie detector test in Zhytomyr: book an EyeDetect visit for UAH 12,000 all-inclusive, or take the VerifEye online test from UAH 2,500. Report in 5 minutes.",
    updated: "2026-10-09",
    intro: "Zhytomyr is the administrative centre of the Zhytomyr region, about 400 km from Lviv. The fastest option is the VerifEye smartphone test, which you can take today. For an EyeDetect test, a specialist travels from Lviv with the equipment: the bus takes 6–7 hours, and the drive takes about 5–6 hours.",
    facts: [["From Lviv", "≈ 400 km, 6–7 h by bus"], ["Visit", "UAH 12,000 all-inclusive"], ["Online test", "from UAH 2,500"]],
    faq: [
      { q: "Where can I take a polygraph test in Zhytomyr?", a: "We have no office in Zhytomyr, but there are three options. You can take the VerifEye online test today on your phone, in a quiet room at home or at work. The EyeDetect test takes place during a visit: a specialist comes from Lviv with the equipment to your office or another quiet room. The third option is the EyeDetect test at our partner's office in Kyiv, if you go there anyway." },
      { q: "How much does a lie detector test cost in Zhytomyr?", a: "An EyeDetect specialist visit to Zhytomyr costs UAH 12,000 all-inclusive, test included, for one person. For several people the travel cost is shared; a specialist will tell you the exact amount. VerifEye online test: UAH 2,500 for one question, UAH 4,000 for three, UAH 6,000 for six, with no extra charges.", replaces: ["price"] },
      { q: "How soon can a specialist come to Zhytomyr?", a: "Visits to Zhytomyr are planned 1–2 weeks ahead and combined with other requests. The trip from Lviv takes 6–7 hours by bus, and the fastest services take 5 hours 40 minutes. By car it takes about 5–6 hours. There is only one direct train, and it takes more than 13 hours, so we travel by bus or by car. The VerifEye online test is available today.", replaces: ["speed"], sources: [["Ukrzaliznytsia: Lviv — Zhytomyr timetable", "https://www.uz.gov.ua/passengers/timetable/?from_station=23200&to_station=22400&by_route=1"], ["Inbus: Lviv — Zhytomyr buses", "https://inbus.ua/en/bus-lviv-zhytomyr"], ["Degruz: Lviv — Zhytomyr distance", "https://degruz.ua/rasstojanija-mezhdu-gorodami/lvov-zhitomir"]] },
      { q: "Can my partner take a lie detector test for infidelity in Zhytomyr?", a: "Yes. The test checks one specific suspicion, for example infidelity over a certain period. The partner under suspicion takes it, or both partners take separate tests. The test is voluntary and requires written consent. The VerifEye online test costs from UAH 2,500 and needs no visit." },
      { q: "What languages can I take the test in?", a: "Ukrainian, Russian, English or German. We draw up the questions together with you, and the person reads them in advance." },
      { q: "Is a lie detector test legal in Ukraine?", a: "No Ukrainian law bans private voluntary polygraph tests or regulates them specifically. General rules apply, including the Law on Personal Data Protection: data may be processed with the person's voluntary, informed consent. We test only with written consent, and minors only with written consent from their parents and with the parents present. The rules for testing employees and job candidates are stricter, so talk to a lawyer. In criminal cases in 2023–2024, Ukraine's Supreme Court did not accept a polygraph examiner's conclusion as stand-alone evidence, and our result is not court evidence either.", sources: [["Law on Personal Data Protection", "https://zakon.rada.gov.ua/laws/show/2297-17"], ["Supreme Court, case 183/3452/19 (2023)", "https://reyestr.court.gov.ua/Review/108686155"], ["Supreme Court, case 760/23990/17 (2024)", "https://reyestr.court.gov.ua/Review/117757884"]] },
    ],
    towns: {
      title: "Berdychiv, Korosten and other towns in the Zhytomyr region",
      text: "The VerifEye online test can be taken from any town in the Zhytomyr region. EyeDetect visits to other towns work the same way: UAH 12,000 all-inclusive.",
      list: "Berdychiv · Korosten · Malyn · Zviahel · Ruzhyn",
      nearbyLabel: "Other cities in the region:",
      nearby: [["kyiv", "Kyiv"], ["vinnytsia", "Vinnytsia"], ["rivne", "Rivne"]],
    },
    local: {
      title: "Zhytomyr on the Kyiv–Lviv highway: three ways to take a polygraph test",
      paragraphs: [
        "Zhytomyr stands on the highway that links Kyiv with Lviv: Lviv is about 400 km away, Kyiv about 130. So besides the online test and a specialist visit, people in Zhytomyr have one more option. The VerifEye online test is taken on a phone. For an EyeDetect test, our specialist comes to Zhytomyr from Lviv. And if you happen to be in Kyiv, you can take the EyeDetect test there, at our partner's office.",
        "A visit to Zhytomyr costs UAH 12,000 all-inclusive. The specialist travels from Lviv by bus or by car, five to seven hours one way, and we plan such a trip one to two weeks ahead. If one person needs the test and goes to the capital anyway, waiting for a visit is unnecessary: the day and the hour are arranged with the partner once you send a request. At the Kyiv partner's office a family test costs UAH 8,500, while screening and a theft-related test cost from UAH 5,500. If several people need to be tested, or the person cannot leave town, a visit is more convenient: a quiet room at your office or in a Zhytomyr hotel will do, provided there is a table and a socket.",
        "What people in Zhytomyr call a polygraph works differently here from the classic device: EyeDetect and VerifEye read the reactions of the eyes, and the body is left free of sensors. We do not offer a classic polygraph.",
        "Berdychiv and Korosten are railway junctions of the region, but nobody has to travel from there for a test: the VerifEye online test is taken on a phone there, and in Malyn, Zviahel or Ruzhyn too.",
        "The north of the Zhytomyr region is Polissia: the region has a lot of forest and large deposits of granite, gabbro and labradorite, while the city's main industries are light industry, processing and food production. Hence the examples. Imagine a stone-cutting workshop with fewer finished slabs in stock than the blocks should have yielded, where the foreman says the rest went to waste. Or a sewing workshop whose owner suspects that outside orders are being sewn on her machines and from her fabric. Or a couple where the husband works in the capital and is home only at weekends. The test questions might read like this:",
      ],
      points: [
        "Since August 1, 2026, have you sold slabs from the workshop without recording the order?",
        "In September 2026, did you sew orders in the workshop that the owner did not know about?",
        "Since March 1, 2026, while working in Kyiv, have you had sexual contact with another woman?",
      ],
    },
  },
};
