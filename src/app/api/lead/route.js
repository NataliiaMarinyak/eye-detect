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

export async function POST(request) {
  let body;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "bad_json" }, { status: 400 });
  }

  const name = clean(body.name, 60);
  const tel = clean(body.tel, 24);
  const email = clean(body.email, 120);
  const comment = cleanMultiline(body.comment, 1500);
  const page = clean(body.page, 200);
  const service = clean(body.service, 120);

  if (!name || !tel) {
    return NextResponse.json({ ok: false, error: "missing_fields" }, { status: 400 });
  }
  // Пастка для ботів: приховане поле має лишатися порожнім.
  if (body.website) {
    return NextResponse.json({ ok: true });
  }

  const api = process.env.TELEGRAM_API;
  const chatId = process.env.TELEGRAM_CHAT_ID;
  if (!api || !chatId) {
    return NextResponse.json({ ok: false, error: "not_configured" }, { status: 500 });
  }

  const lines = [
    `Нова заявка з сайту${page ? ` (${page})` : ""}`,
    service ? `Послуга: ${service}` : null,
    `Ім'я: ${name}`,
    `Телефон: ${tel}`,
    email ? `Email: ${email}` : null,
    comment ? (comment.includes("\n") ? `\n${comment}` : `Повідомлення: ${comment}`) : null,
  ].filter(Boolean);

  try {
    const res = await fetch(api, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ chat_id: chatId, text: lines.join("\n") }),
    });
    if (!res.ok) throw new Error(`telegram ${res.status}`);
    return NextResponse.json({ ok: true });
  } catch (e) {
    return NextResponse.json({ ok: false, error: "send_failed" }, { status: 502 });
  }
}
