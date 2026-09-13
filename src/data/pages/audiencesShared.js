// Спільні блоки для сторінок /for/*: CTA і «Як проходить перевірка». Ключі: uk, ru, en.

export const cta = {
  uk: (service) => ({ type: "cta", title: "Обговорити вашу задачу", text: "Напишіть, кого і що потрібно перевірити. Відповімо протягом години в робочий час і запропонуємо формат тесту під вашу ситуацію.", button: "Отримати пропозицію", service, secondaryHref: "/faq", secondaryLabel: "Питання і відповіді" }),
  ru: (service) => ({ type: "cta", title: "Обсудить вашу задачу", text: "Напишите, кого и что нужно проверить. Ответим в течение часа в рабочее время и предложим формат теста под вашу ситуацию.", button: "Получить предложение", service, secondaryHref: "/faq", secondaryLabel: "Вопросы и ответы" }),
  en: (service) => ({ type: "cta", title: "Discuss your case", text: "Tell us who and what needs to be checked. We reply within an hour during business hours and suggest a test format for your situation.", button: "Get a proposal", service, secondaryHref: "/faq", secondaryLabel: "Questions and answers" }),
};

export const howVerifeye = {
  uk: { type: "steps", tone: "white", title: "Як проходить VerifEye онлайн", items: [
    { title: "Погодження питань", text: "Разом формулюємо питання про конкретні факти. Кандидат бачить їх заздалегідь і дає письмову згоду." },
    { title: "Посилання на телефон", text: "Кандидат отримує посилання й інструкцію: тиха кімната, добре освітлення, телефон на підставці. Посилання відкриває безкоштовний застосунок VerifEye." },
    { title: "Тест до 15 хвилин", text: "Питання звучать голосом, кандидат відповідає вголос. Фронтальна камера фіксує зіницю, рухи очей і моргання." },
    { title: "PDF-звіт до 5 хвилин", text: "Алгоритм Converus рахує оцінку достовірності, звіт приходить на пошту. Спеціаліст пояснює результат." },
  ] },
  ru: { type: "steps", tone: "white", title: "Как проходит VerifEye онлайн", items: [
    { title: "Согласование вопросов", text: "Вместе формулируем вопросы о конкретных фактах. Кандидат видит их заранее и даёт письменное согласие." },
    { title: "Ссылка на телефон", text: "Кандидат получает ссылку и инструкцию: тихая комната, хорошее освещение, телефон на подставке. Ссылка открывает бесплатное приложение VerifEye." },
    { title: "Тест до 15 минут", text: "Вопросы звучат голосом, кандидат отвечает вслух. Фронтальная камера фиксирует зрачок, движения глаз и моргание." },
    { title: "PDF-отчёт до 5 минут", text: "Алгоритм Converus считает оценку достоверности, отчёт приходит на почту. Специалист объясняет результат." },
  ] },
  en: { type: "steps", tone: "white", title: "How VerifEye online works", items: [
    { title: "Agreeing on the questions", text: "Together we formulate questions about specific facts. The candidate sees them in advance and gives written consent." },
    { title: "A link to the phone", text: "The candidate receives a link and instructions: a quiet room, good lighting, the phone on a stand. The link opens the free VerifEye app." },
    { title: "Test: up to 15 minutes", text: "The questions are spoken, and the candidate answers aloud. The front camera records the pupil, eye movements, and blinking." },
    { title: "PDF report within 5 minutes", text: "The Converus algorithm computes a Credibility Score, and the report is emailed to you. The examiner explains the result." },
  ] },
};

export const how = {
  uk: { type: "steps", tone: "white", title: "Як проходить перевірка", items: [
    { title: "Погодження питань", text: "Разом формулюємо конкретні питання про факти. Ви отримуєте текст заздалегідь." },
    { title: "Тест 15–30 хвилин", text: "Людина відповідає «правда» або «неправда» на екрані, камера фіксує реакції очей. Датчиків на тілі немає." },
    { title: "Оцінка за 5 хвилин", text: "Дані шифруються і надсилаються на сервер Converus, алгоритм рахує оцінку достовірності від 1 до 99." },
    { title: "Звіт і пояснення", text: "Ви отримуєте PDF-звіт одразу після тесту, спеціаліст пояснює, що означають цифри і що робити далі." },
  ] },
  ru: { type: "steps", tone: "white", title: "Как проходит проверка", items: [
    { title: "Согласование вопросов", text: "Вместе формулируем конкретные вопросы о фактах. Вы получаете текст заранее." },
    { title: "Тест 15–30 минут", text: "Человек отвечает «правда» или «неправда» на экране, камера фиксирует реакции глаз. Датчиков на теле нет." },
    { title: "Оценка за 5 минут", text: "Данные шифруются и отправляются на сервер Converus, алгоритм считает оценку достоверности от 1 до 99." },
    { title: "Отчёт и пояснение", text: "Вы получаете PDF-отчёт сразу после теста, специалист объясняет, что означают цифры и что делать дальше." },
  ] },
  en: { type: "steps", tone: "white", title: "How the test works", items: [
    { title: "Agreeing on the questions", text: "Together we formulate specific questions about facts. You receive the wording in advance." },
    { title: "Test: 15–30 minutes", text: "The person answers “true” or “false” on screen while the camera records eye reactions. No sensors on the body." },
    { title: "Scoring in 5 minutes", text: "The data is encrypted and sent to the Converus server; the algorithm computes a Credibility Score from 1 to 99." },
    { title: "Report and explanation", text: "You receive a PDF report right after the test, and the examiner explains what the numbers mean and what to do next." },
  ] },
};
