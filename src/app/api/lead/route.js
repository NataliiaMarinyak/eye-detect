import { NextResponse } from "next/server";

// Приймає заявку з форми і надсилає її в Telegram із сервера.
// Токен бота і chat_id живуть лише тут, у змінних середовища, і не потрапляють у браузер.
export const runtime = "nodejs";

const clean = (v, max) => String(v || "").replace(/\s+/g, " ").trim().slice(0, max);
// Для повідомлення зберігаємо переноси рядків (квіз надсилає відповіді по рядку).
const cleanMultiline = (v, max) =>
  String(v || "")
    .replace(/\r/g, "")
    .split("\n")
    .map((l) => l.replace(/[ \t]+/g, " ").trim())
    .filter(Boolean)
    .join("\n")
    .slice(0, max);

// Копія заявки в таблицю власника «Поліграф — заявки і оплати з сайтів» (вкладка «Айдетект», 01.11.2026).
// Адреса й ключ — лише у змінних середовища Vercel (SHEET_WEBHOOK, SHEET_KEY); без них або при збої заявка все одно йде в Telegram.
const lineOf = (text, label) => {
  const m = String(text || "").match(new RegExp(`^${label}:[ \\t]*(.*)$`, "m"));
  return m ? m[1].trim() : "";
};

async function copyToSheet({ name, tel, email, comment, page, attribution, service }) {
  const url = process.env.SHEET_WEBHOOK;
  const key = process.env.SHEET_KEY;
  if (!url || !key) return;
  const src = lineOf(attribution, "Джерело");
  const source = /^Google Ads/.test(src)
    ? "Google Ads"
    : /chatgpt|openai|perplexity|gemini|copilot|claude|deepseek/i.test(src)
      ? "ChatGPT / ШІ"
      : /maps/i.test(src)
        ? "Google Карти"
        : /органіка|^Пошук/.test(src)
          ? "Google пошук"
          : /Прямий/.test(src)
            ? "Пряме / закладки"
            : "Інше";
  const campaign = [src.replace(/^Google Ads(?: \/ )?/, ""), lineOf(attribution, "Ключове слово")]
    .filter((s) => s && s !== src)
    .join(" · ");
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), 6000);
  try {
    await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json; charset=utf-8" },
      body: JSON.stringify({
        key,
        site: "eye-polygraph.com",
        source,
        campaign,
        service: /VerifEye/i.test(service) ? "VerifEye" : "EyeDetect",
        name,
        phone: tel,
        contact: email,
        answers: [service, comment].filter(Boolean).join("\n"),
        comment: src,
        page: lineOf(attribution, "Перша сторінка") || page,
        query: lineOf(attribution, "Ключове слово"),
      }),
      signal: controller.signal,
    });
  } catch {
    // таблиця недоступна — заявка вже в Telegram
  } finally {
    clearTimeout(timer);
  }
}

export async function POST(request) {
  let body;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "bad_json" }, { status: 400 });
  }

  const name = clean(body.name, 60);
  // Контакт беремо з запасом (64 символи): формат і кількість цифр перевіряємо нижче.
  const rawTel = clean(body.tel, 64);
  const email = clean(body.email, 120);
  const comment = cleanMultiline(body.comment, 1500);
  const page = clean(body.page, 200);
  const attribution = cleanMultiline(body.attribution, 600);
  const service = clean(body.service, 120);

  if (!name) {
    return NextResponse.json({ ok: false, error: "missing_fields" }, { status: 400 });
  }
  // Пастка для ботів: приховане поле має лишатися порожнім.
  if (body.website) {
    return NextResponse.json({ ok: true });
  }

  // Та сама перевірка, що й у формах: телефон 9–15 цифр («+» лише першим, пробіли, дужки й дефіси прибираємо).
  // @username приймаємо лише із заявки, де обрано зв'язок у Telegram (channel: "telegram").
  // Рішення власника 16.09.2026: телефон без перевірок (формати різні в різних країнах).
  // Порожній контакт приймаємо і позначаємо в заявці.
  const tel = rawTel && rawTel !== "Контакт не вказано" ? rawTel : "контакт не вказано";

  const api = process.env.TELEGRAM_API;
  // Заявки з квіза можна слати в окремий чат (TELEGRAM_QUIZ_CHAT_ID), інакше в загальний.
  const isQuiz = service.startsWith("Квіз");
  const chatId = (isQuiz && process.env.TELEGRAM_QUIZ_CHAT_ID) || process.env.TELEGRAM_CHAT_ID;
  if (!api || !chatId) {
    return NextResponse.json({ ok: false, error: "not_configured" }, { status: 500 });
  }

  const lines = [
    `Нова заявка з сайту${page ? ` (${page})` : ""}`,
    service ? `Послуга: ${service}` : null,
    `Ім'я: ${name}`,
    tel.startsWith("@") ? `Telegram: ${tel}` : `Телефон: ${tel}`,
    email ? `Email: ${email}` : null,
    comment ? (comment.includes("\n") ? `\n${comment}` : `Повідомлення: ${comment}`) : null,
    attribution ? `\n${attribution}` : null,
  ].filter(Boolean);

  try {
    const res = await fetch(api, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ chat_id: chatId, text: lines.join("\n") }),
    });
    if (!res.ok) throw new Error(`telegram ${res.status}`);
    await copyToSheet({ name, tel, email, comment, page, attribution, service });
    return NextResponse.json({ ok: true });
  } catch (e) {
    return NextResponse.json({ ok: false, error: "send_failed" }, { status: 502 });
  }
}
