// Повідомляє Bing та інші пошуковики протоколу IndexNow про нові й змінені адреси сайту,
// щоб вони не чекали наступного обходу. Google цей протокол не читає — для нього Search Console.
//
// Запускати ПІСЛЯ публікації на справжній сайт (до публікації файла ключа там ще немає, і запит відхилять):
//   npm run indexnow -- --since 2026-10-29     адреси з карти сайту з датою lastmod від цієї дати
//   npm run indexnow -- https://www.eye-polygraph.com/locations/kharkiv https://www.eye-polygraph.com/prices
//   npm run indexnow -- --all                  усі адреси з карти сайту (лише після великої перебудови)
// Додати --dry, щоб лише побачити список адрес без надсилання.
//
// Ключ не є секретом: протокол вимагає, щоб він лежав у відкритому файлі public/<ключ>.txt.
// Надсилати тільки справді змінені адреси: за масові повторні надсилання пошуковик перестає довіряти сигналу.

import { readdirSync, readFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const HOST = "www.eye-polygraph.com";
const ORIGIN = `https://${HOST}`;
const ENDPOINT = "https://api.indexnow.org/indexnow";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const publicDir = path.join(root, "public");

// Файл ключа: 32 шістнадцяткові знаки в назві, той самий рядок усередині.
const findKey = () => {
  const file = readdirSync(publicDir).find((name) => /^[0-9a-f]{32}\.txt$/.test(name));
  if (!file) throw new Error("У public/ немає файла ключа IndexNow (<32 знаки>.txt).");
  const key = file.replace(/\.txt$/, "");
  if (readFileSync(path.join(publicDir, file), "utf8").trim() !== key) {
    throw new Error(`Вміст public/${file} не збігається з назвою файла.`);
  }
  return key;
};

const fromSitemap = async (since) => {
  const res = await fetch(`${ORIGIN}/sitemap.xml`);
  if (!res.ok) throw new Error(`Карта сайту не відкрилась: ${res.status}`);
  const xml = await res.text();
  const urls = [];
  for (const block of xml.match(/<url>[\s\S]*?<\/url>/g) || []) {
    const loc = (block.match(/<loc>([^<]+)<\/loc>/) || [])[1];
    const lastmod = ((block.match(/<lastmod>([^<]+)<\/lastmod>/) || [])[1] || "").slice(0, 10);
    if (loc && (!since || (lastmod && lastmod >= since))) urls.push(loc.trim());
  }
  return urls;
};

const args = process.argv.slice(2);
const dry = args.includes("--dry");
const all = args.includes("--all");
const sinceAt = args.indexOf("--since");
const since = sinceAt >= 0 ? args[sinceAt + 1] : null;
const given = args.filter((arg) => arg.startsWith("http"));

if (since && !/^\d{4}-\d{2}-\d{2}$/.test(since)) {
  console.error("Дата після --since має вигляд РРРР-ММ-ДД, наприклад 2026-10-29.");
  process.exit(1);
}
if (!given.length && !since && !all) {
  console.error("Вкажіть адреси, або --since РРРР-ММ-ДД, або --all. Приклади — на початку файла scripts/indexnow.mjs.");
  process.exit(1);
}

// Після мережевих запитів не викликаємо process.exit(): на Windows Node тоді падає з «Assertion failed».
// Код завершення задаємо через process.exitCode.
const run = async () => {
  const key = findKey();
  const urlList = [...new Set(given.length ? given : await fromSitemap(all ? null : since))];
  const foreign = urlList.filter((url) => !url.startsWith(`${ORIGIN}/`) && url !== ORIGIN);
  if (foreign.length) {
    console.error(`Чужі адреси (мають починатися з ${ORIGIN}):\n${foreign.join("\n")}`);
    return 1;
  }
  if (!urlList.length) {
    console.log("Немає адрес для надсилання.");
    return 0;
  }

  console.log(`Адрес: ${urlList.length}`);
  if (dry) {
    console.log(urlList.join("\n"));
    return 0;
  }

  const res = await fetch(ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "application/json; charset=utf-8" },
    body: JSON.stringify({ host: HOST, key, keyLocation: `${ORIGIN}/${key}.txt`, urlList }),
  });
  // 200 і 202 — прийнято; 403 — файла ключа немає на сайті (ще не опубліковано); 422 — адреси не цього сайту.
  console.log(`Відповідь IndexNow: ${res.status} ${res.statusText}`);
  return res.status === 200 || res.status === 202 ? 0 : 1;
};

process.exitCode = await run();
