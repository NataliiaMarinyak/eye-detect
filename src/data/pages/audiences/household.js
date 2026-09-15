// Аудиторія /for/household: родини, які наймають нянь, доглядальниць, домашній персонал,
// водіїв, а також приватні школи й садочки. Ключі: uk, ru, en.

import { cta, how } from "../audiencesShared";

export const household = {
  slug: "household",
  uk: {
    seo: { title: "Детектор брехні для няні та домашнього персоналу — EyeDetect", description: "Перевірка няні, доглядальниці, домробітниці, водія перед наймом: EyeDetect у Львові або VerifEye онлайн за 15–20 хвилин. Також для садочків і шкіл.", keywords: ["перевірка няні детектор брехні", "поліграф для домашнього персоналу", "перевірка доглядальниці", "перевірка водія перед наймом", "перевірка вихователя садочок"], crumbHome: "Головна", crumb: "Для родин і домашнього персоналу" },
    hero: { eyebrow: "Родинам, приватним школам і садочкам", h1: "Детектор брехні для няні та домашнього персоналу", sub: "Ви довіряєте людині дитину, літніх батьків або ключі від дому, маючи рекомендацію і дві години співбесіди. EyeDetect дає ще одне джерело інформації: відповіді на конкретні питання про минуле, оцінені алгоритмом. Тест проходить спокійно, без датчиків, і триває 30–45 хвилин.", facts: ["30–45 хвилин у кабінеті", "VerifEye онлайн за 15–20 хвилин", "точність 86–90%", "лише за згодою людини"] },
    blocks: [
      { type: "cards", title: "Де це допомагає", items: [
        { title: "Няня для дитини", text: "Чи були раніше скарги від сімей, чи застосовувала фізичне покарання, чи залишала дитину без нагляду. Питання про факти з попередніх місць роботи, які не перевірити за рекомендацією." },
        { title: "Доглядальниця для літньої людини", text: "Гроші і документи літньої людини, ліки, поводження з підопічним. Перевіряємо конкретні дії на попередніх місцях і, за потреби, після інциденту у вашій родині." },
        { title: "Домробітниця, кухар, садівник", text: "Зникнення прикрас, готівки чи речей у домі, де бувають кілька людей. Тест дозволяє спокійно зняти підозру з тих, хто не причетний, і не зіпсувати стосунки безпідставними звинуваченнями." },
        { title: "Сімейний водій", text: "Аварії, позбавлення прав, вживання алкоголю за кермом, використання авто в особистих цілях. Питання про конкретні події за конкретний період." },
        { title: "Вихователі і персонал садочка чи школи", text: "Приватний заклад відповідає перед батьками за кожного працівника. Перевірка при наймі і при скарзі батьків, коли є лише слово дитини проти слова дорослого." },
      ] },
      { type: "list", title: "Що можна перевірити", cols: 3, items: ["фізичне покарання або грубість щодо дитини", "залишення дитини чи підопічного без нагляду", "крадіжка грошей, прикрас, речей у домі", "приховані звільнення за порушення на попередній роботі", "вживання алкоголю чи наркотиків на роботі", "передача інформації про сім'ю стороннім", "приховані судимості чи адміністративні порушення", "аварії і водіння в нетверезому стані", "справжність досвіду і рекомендацій"] },
      how.uk,
      { type: "text", title: "Що варто знати родині", paragraphs: [
        "Тест проходять лише за письмовою згодою, і кандидат може відмовитись. Це нормально проговорити на співбесіді: перевірка є частиною умов найму, як і рекомендації. Питання формулюємо разом із вами заздалегідь і лише про конкретні факти: дії, події, періоди. Не питаємо про здоров'я, приватне життя, релігію чи переконання. Результат в Україні не є доказом у суді, це інформація для вашого рішення.",
        "Для швидкого відбору між кількома кандидатами підходить VerifEye: онлайн-тест зі смартфона, 15–20 хвилин, точність 84–89%, від 2 500 ₴. Кандидатка з іншого міста проходить його вдома. Для остаточного рішення щодо людини, яка щодня буде з дитиною чи літньою людиною, радимо EyeDetect у кабінеті у Львові на вул. Городоцькій, 45: 30–45 хвилин, точність 86–90%, від 5 500 ₴, звіт одразу.",
        "Тест проводить Наталя Мариняк, психолог, сертифікований Converus Test Proctor. Кандидат читає всі питання перед тестом, тому несподіванок немає. Звіт отримуєте лише ви.",
      ] },
      { type: "cards", title: "Як обговорити перевірку з кандидатом", items: [
        { title: "Скажіть заздалегідь", text: "Згадайте перевірку в оголошенні або на першій співбесіді. Тоді вона сприймається як стандартна умова, а не як недовіра до конкретної людини." },
        { title: "Покажіть питання", text: "Кандидат бачить усі питання до тесту. Чесній людині нема чого хвилюватись, і зазвичай вона погоджується без заперечень." },
        { title: "Перевіряйте всіх однаково", text: "Один і той самий набір питань для всіх кандидатів на посаду. Це чесно щодо людей і дає вам порівнювані результати." },
        { title: "Результат не є вироком", text: "Оцінка нижче порогу означає лише, що конкретне питання варто обговорити. Спеціаліст пояснить, що показує звіт і як його читати." },
      ] },
      cta.uk("EyeDetect для домашнього персоналу"),
    ],
  },
  ru: {
    seo: { title: "Детектор лжи для няни и домашнего персонала — EyeDetect", description: "Проверка няни, сиделки, домработницы, водителя перед наймом: EyeDetect во Львове или VerifEye онлайн за 15–20 минут. Также для садиков и школ.", keywords: ["проверка няни детектор лжи", "полиграф для домашнего персонала", "проверка сиделки", "проверка водителя перед наймом", "проверка воспитателя садик"], crumbHome: "Главная", crumb: "Для семей и домашнего персонала" },
    hero: { eyebrow: "Семьям, частным школам и садикам", h1: "Детектор лжи для няни и домашнего персонала", sub: "Вы доверяете человеку ребёнка, пожилых родителей или ключи от дома, имея рекомендацию и два часа собеседования. EyeDetect даёт ещё один источник информации: ответы на конкретные вопросы о прошлом, оценённые алгоритмом. Тест проходит спокойно, без датчиков, и длится 30–45 минут.", facts: ["30–45 минут в кабинете", "VerifEye онлайн за 15–20 минут", "точность 86–90%", "только с согласия человека"] },
    blocks: [
      { type: "cards", title: "Где это помогает", items: [
        { title: "Няня для ребёнка", text: "Были ли раньше жалобы от семей, применяла ли физическое наказание, оставляла ли ребёнка без присмотра. Вопросы о фактах с предыдущих мест работы, которые не проверить по рекомендации." },
        { title: "Сиделка для пожилого человека", text: "Деньги и документы пожилого человека, лекарства, обращение с подопечным. Проверяем конкретные действия на предыдущих местах и, при необходимости, после инцидента в вашей семье." },
        { title: "Домработница, повар, садовник", text: "Пропажа украшений, наличных или вещей в доме, где бывают несколько человек. Тест позволяет спокойно снять подозрение с непричастных и не испортить отношения беспочвенными обвинениями." },
        { title: "Семейный водитель", text: "Аварии, лишение прав, употребление алкоголя за рулём, использование авто в личных целях. Вопросы о конкретных событиях за конкретный период." },
        { title: "Воспитатели и персонал садика или школы", text: "Частное заведение отвечает перед родителями за каждого сотрудника. Проверка при найме и при жалобе родителей, когда есть только слово ребёнка против слова взрослого." },
      ] },
      { type: "list", title: "Что можно проверить", cols: 3, items: ["физическое наказание или грубость к ребёнку", "оставление ребёнка или подопечного без присмотра", "кража денег, украшений, вещей в доме", "скрытые увольнения за нарушения на предыдущей работе", "употребление алкоголя или наркотиков на работе", "передача информации о семье посторонним", "скрытые судимости или административные нарушения", "аварии и вождение в нетрезвом состоянии", "подлинность опыта и рекомендаций"] },
      how.ru,
      { type: "text", title: "Что стоит знать семье", paragraphs: [
        "Тест проходят только с письменного согласия, и кандидат может отказаться. Это нормально проговорить на собеседовании: проверка является частью условий найма, как и рекомендации. Вопросы формулируем вместе с вами заранее и только о конкретных фактах: действия, события, периоды. Не спрашиваем о здоровье, частной жизни, религии или убеждениях. Результат в Украине не является доказательством в суде, это информация для вашего решения.",
        "Для быстрого отбора между несколькими кандидатами подходит VerifEye: онлайн-тест со смартфона, 15–20 минут, точность 84–89%, от 2 500 ₴. Кандидатка из другого города проходит его дома. Для окончательного решения о человеке, который каждый день будет с ребёнком или пожилым человеком, советуем EyeDetect в кабинете во Львове на ул. Городоцкой, 45: 30–45 минут, точность 86–90%, от 5 500 ₴, отчёт сразу.",
        "Тест проводит Наталия Марыняк, психолог, сертифицированный Converus Test Proctor. Кандидат читает все вопросы перед тестом, поэтому неожиданностей нет. Отчёт получаете только вы.",
      ] },
      { type: "cards", title: "Как обсудить проверку с кандидатом", items: [
        { title: "Скажите заранее", text: "Упомяните проверку в объявлении или на первом собеседовании. Тогда она воспринимается как стандартное условие, а не как недоверие к конкретному человеку." },
        { title: "Покажите вопросы", text: "Кандидат видит все вопросы до теста. Честному человеку нечего волноваться, и обычно он соглашается без возражений." },
        { title: "Проверяйте всех одинаково", text: "Один и тот же набор вопросов для всех кандидатов на должность. Это честно по отношению к людям и даёт вам сравнимые результаты." },
        { title: "Результат не приговор", text: "Оценка ниже порога означает лишь, что конкретный вопрос стоит обсудить. Специалист объяснит, что показывает отчёт и как его читать." },
      ] },
      cta.ru("EyeDetect для домашнего персонала"),
    ],
  },
  en: {
    seo: { title: "Lie Detector for Nannies and Household Staff — EyeDetect", description: "Screening a nanny, caregiver, housekeeper, or driver before hiring: EyeDetect in Lviv or VerifEye online in 15–20 minutes. Also for kindergartens and schools.", keywords: ["nanny lie detector test", "polygraph for household staff", "caregiver screening", "driver screening before hiring", "kindergarten teacher screening"], crumbHome: "Home", crumb: "For families and household staff" },
    hero: { eyebrow: "For families, private schools, and kindergartens", h1: "Lie Detector for Nannies and Household Staff", sub: "You entrust a person with your child, your elderly parents, or the keys to your home on the strength of a reference and a two-hour interview. EyeDetect adds one more source of information: answers to specific questions about the past, scored by an algorithm. The test is calm, has no sensors, and takes 30–45 minutes.", facts: ["30–45 minutes in our office", "VerifEye online in 15–20 minutes", "86–90% accuracy", "only with the person's consent"] },
    blocks: [
      { type: "cards", title: "Where it helps", items: [
        { title: "A nanny for your child", text: "Whether there were complaints from previous families, whether she used physical punishment, whether she left a child unattended. Questions about facts from previous jobs that a reference cannot verify." },
        { title: "A caregiver for an elderly person", text: "The elderly person's money and documents, medication, treatment of the person in their care. We check specific actions at previous jobs and, if needed, after an incident in your family." },
        { title: "Housekeeper, cook, gardener", text: "Jewelry, cash, or belongings going missing in a home where several people come and go. The test lets you calmly clear those who were not involved and avoid damaging relationships with unfounded accusations." },
        { title: "Family driver", text: "Accidents, license suspensions, drinking and driving, using the car for personal purposes. Questions about specific events within a specific period." },
        { title: "Teachers and staff at a kindergarten or school", text: "A private institution answers to parents for every employee. Screening at hiring and after a parent's complaint, when it is only a child's word against an adult's." },
      ] },
      { type: "list", title: "What can be tested", cols: 3, items: ["physical punishment or rough treatment of a child", "leaving a child or dependent unattended", "theft of money, jewelry, belongings in the home", "hidden dismissals for misconduct at a previous job", "alcohol or drug use at work", "passing information about the family to outsiders", "hidden convictions or administrative offenses", "accidents and drunk driving", "authenticity of experience and references"] },
      how.en,
      { type: "text", title: "What a family should know", paragraphs: [
        "The test is taken only with written consent, and the candidate may refuse. It is normal to raise this at the interview: the test is part of the hiring conditions, like references. We phrase the questions together with you in advance, and only about specific facts: actions, events, periods. We do not ask about health, private life, religion, or beliefs. In Ukraine, the result is not admissible evidence in court; it is information for your decision.",
        "For a quick first screen of several candidates, VerifEye works well: an online test from a smartphone, 15–20 minutes, 84–89% accuracy, from UAH 2,500. A candidate from another city takes it at home. For the final decision about someone who will be with your child or elderly parent every day, we recommend EyeDetect in our Lviv office at 45 Horodotska St.: 30–45 minutes, 86–90% accuracy, from UAH 5,500, report right away.",
        "The test is conducted by Nataliia Marynyak, psychologist, certified Converus Test Proctor. The candidate reads all the questions before the test, so there are no surprises. Only you receive the report.",
      ] },
      { type: "cards", title: "How to discuss the test with a candidate", items: [
        { title: "Mention it in advance", text: "Include the test in the job posting or at the first interview. Then it is seen as a standard condition, not as distrust of one particular person." },
        { title: "Show the questions", text: "The candidate sees all the questions before the test. An honest person has nothing to worry about and usually agrees without objection." },
        { title: "Test everyone the same way", text: "The same set of questions for every candidate for the position. It is fair to the people and gives you comparable results." },
        { title: "The result is not a verdict", text: "A score below the threshold only means that a specific question is worth discussing. The examiner explains what the report shows and how to read it." },
      ] },
      cta.en("EyeDetect for household staff"),
    ],
  },
};
