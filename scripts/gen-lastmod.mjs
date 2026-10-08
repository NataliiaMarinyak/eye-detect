// Генерує src/data/lastmod.json — дату останньої зміни контенту для кожного маршруту sitemap
// (ключі ті самі, що href у src/app/sitemap.js: "", "prices", "blog/<slug>", "locations/<slug>").
// Запуск: `npm run lastmod` локально перед продакшн-деплоєм, файл комітимо. На Vercel клон
// неглибокий, історії git там немає, тому sitemap.js лише читає готовий JSON.
//
// Дата = день останнього коміту, що зачепив файли з контентом сторінки
// (`git log -1 --format=%cs -- <файли>`, найсвіжіша серед них). Для запису у спільному файлі
// (стаття в blogData.js, ключ словника) — історія лише його рядків (`git log -L`), тож нова
// стаття не «оновлює» сусідні. Незакомічена зміна дає сьогоднішню дату, тому запускати можна
// і до коміту. Мовні версії мають одну дату: тексти uk/ru/en лежать в одних файлах.
//
// Що вважаємо контентом сторінки:
//   locations/<slug>   src/data/cityUnique/<slug>.js (немає файла — запис міста в *CitiesData.js)
//   for/<slug>         src/data/pages/audiences/<slug>.js або запис в audiencesData.js
//   situations/<slug>  src/data/pages/situations/<slug>.js або запис у situationsData.js
//   blog/<slug>        запис статті в blogData.js / blogData2.js
//   + шаблон типу      таблиця TEMPLATES: файл [slug]/page.jsx для for, situations і blog
//   статичні сторінки  таблиця STATIC: файл сторінки, її власні секції, файли даних, ключі
//                      словників; переліки (for, situations, blog, locations) — ще й дані записів
// Не рахуємо спільне для багатьох сторінок: загальні секції (PageHero, InfoSections), спільні
// тексти (cityTexts, citySections, audiencesShared), шапку, футер, форму, кнопки і стилі. Інакше
// дрібна правка «оновила» б сотні адрес, і Google перестав би вірити датам.

import { execFileSync } from "node:child_process";
import { existsSync, readFileSync, readdirSync, writeFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const OUT = "src/data/lastmod.json";
const SITEMAP = "src/app/sitemap.js";
const PAGES = "src/app/[lang]/(pages)";
const SECTIONS = "src/sections";
const DATA = "src/data";
const LANGS = ["uk", "ru", "en"];

const abs = (file) => path.join(root, file);
const jsIn = (dir) => readdirSync(abs(dir)).filter((name) => name.endsWith(".js")).sort().map((name) => `${dir}${name}`);
// Файли зі статтями блогу: blogData.js, blogData2.js і наступні.
const blogFiles = jsIn(`${DATA}/pages/`).filter((file) => /\/blogData\d*\.js$/.test(file));

// У таблицях нижче каталог (шлях із «/» наприкінці) означає всі файли в ньому, крім стилів.

// Шаблон типу сторінок: задає блоки, посилання і структуровані дані всіх сторінок типу, тож його
// зміна — це зміна кожної з них. Для міст шаблон не рахуємо: правка locations/[slug]/page.jsx
// «оновила» б одразу всі адреси міст, а їх на сайті найбільше. Якщо шаблон міст зміниться
// суттєво (новий блок, нові посилання), допишіть його сюди.
const TEMPLATES = {
  "situations/": [`${PAGES}/situations/[slug]/page.jsx`, `${SECTIONS}/situationPage/`],
  "for/": [`${PAGES}/for/[slug]/page.jsx`],
  "blog/": [`${PAGES}/blog/[slug]/page.jsx`],
  "locations/": [],
};

// Статичні сторінки: paths — файли й каталоги, dict — ключі верхнього рівня у src/dictionaries/*.json.
const STATIC = {
  "": {
    paths: ["src/app/[lang]/page.js", `${SECTIONS}/homeSections/`, `${DATA}/FAQDataHome.js`, `${DATA}/directionsData.js`, `${DATA}/aboutData.js`, "src/helpers/getBusinessJsonLd.js"],
    dict: ["seoMainPage", "heroSection", "homeStats", "homePaths", "homeSteps", "homeDirectionsSection", "homeReport", "homeAboutSection", "homeCertificatesSection", "homeClientsSection", "homeFAQSection", "homeOrderSection"],
  },
  prices: {
    paths: [`${PAGES}/prices/page.jsx`, `${SECTIONS}/pricesSection/`, `${DATA}/pricingData.js`],
    dict: ["seoPricesPage", "pricesSection"],
  },
  eyedetect: { paths: [`${PAGES}/eyedetect/page.jsx`, `${SECTIONS}/eyedetectPage/`, `${DATA}/pages/eyedetectPage.js`] },
  online: { paths: [`${PAGES}/online/page.jsx`, `${SECTIONS}/onlinePage/`, `${DATA}/pages/onlinePage.js`, `${DATA}/pricingData.js`, `${DATA}/verifeyeStudy.js`] },
  "free-test": { paths: [`${PAGES}/free-test/page.jsx`, `${DATA}/pages/freeTestPage.js`] },
  business: { paths: [`${PAGES}/business/page.jsx`, `${SECTIONS}/businessPage/`, `${DATA}/pages/businessPage.js`, `${DATA}/pricingData.js`] },
  situations: { paths: [`${PAGES}/situations/page.jsx`, `${DATA}/pages/situationsData.js`, `${DATA}/pages/situations/`] },
  faq: { paths: [`${PAGES}/faq/page.jsx`, `${DATA}/pages/faqPage.js`] },
  converus: { paths: [`${PAGES}/converus/page.jsx`, `${DATA}/pages/converusPage.js`] },
  for: { paths: [`${PAGES}/for/page.jsx`, `${DATA}/pages/audiencesData.js`, `${DATA}/pages/audiences/`] },
  blog: { paths: [`${PAGES}/blog/page.jsx`, ...blogFiles] },
  "about-us": {
    paths: [`${PAGES}/about-us/page.jsx`, `${SECTIONS}/consultationSection/`, `${SECTIONS}/specialistSection/`, `${SECTIONS}/homeSections/homeCertificatesSection/`, `${DATA}/specialistData.js`],
    dict: ["seoAboutUsPage", "consultationSection", "specialistSection", "homeCertificatesSection"],
  },
  locations: {
    paths: [`${PAGES}/locations/page.jsx`, `${SECTIONS}/locationSection/`, `${SECTIONS}/ukrainianCitiesSection/`, `${SECTIONS}/europeanCitiesSection/`, `${DATA}/ukrainianCitiesData.js`, `${DATA}/europeanCitiesData.js`, `${DATA}/cityEn.js`, `${DATA}/addressData.js`],
    dict: ["seoLocationsPage", "locationSection", "ukrainianCitiesSection", "europeanCitiesSection"],
  },
  contacts: {
    paths: [`${PAGES}/contacts/page.jsx`, `${SECTIONS}/contactsSection/`, `${SECTIONS}/homeSections/homeOrderSection/`, `${DATA}/addressData.js`, `${DATA}/socialMediaData.js`, "src/helpers/getBusinessJsonLd.js"],
    dict: ["seoContactsPage", "contactsSection", "homeOrderSection"],
  },
  "privacy-policy": {
    paths: [`${PAGES}/privacy-policy/page.jsx`, `${SECTIONS}/privacyPolicySection/`],
    dict: ["seoPryvacyPolicyPage"],
  },
};

const gitOptions = { cwd: root, encoding: "utf8", maxBuffer: 64 * 1024 * 1024 };
const git = (...args) => execFileSync("git", args, gitOptions);

if (git("rev-parse", "--is-shallow-repository").trim() === "true") {
  console.error("lastmod: клон git неглибокий, дати були б хибні. Запустіть скрипт у повному локальному клоні.");
  process.exit(1);
}

const now = new Date();
const today = [now.getFullYear(), now.getMonth() + 1, now.getDate()].map((n) => String(n).padStart(2, "0")).join("-");

const memo = (fn) => {
  const cache = new Map();
  return (key) => (cache.has(key) ? cache.get(key) : cache.set(key, fn(key)).get(key));
};
const toLines = (text) => (text == null ? [] : text.split(/\r?\n/));
// Рядки файла в робочій копії та в останньому коміті (порожньо, якщо файла там немає).
const workLines = memo((file) => toLines(existsSync(abs(file)) ? readFileSync(abs(file), "utf8") : null));
const headLines = memo((file) => {
  try {
    return toLines(execFileSync("git", ["show", `HEAD:${file}`], { ...gitOptions, stdio: ["ignore", "pipe", "ignore"] }));
  } catch {
    return [];
  }
});

// Файли з незакоміченими змінами (змінені, нові, видалені), без стилів.
const dirty = git("status", "--porcelain", "-z", "-uall", "--no-renames")
  .split("\0")
  .filter(Boolean)
  .map((entry) => entry.slice(3))
  .filter((file) => !/\.s?css$/.test(file));
const isDirty = (src) => dirty.some((file) => (src.endsWith("/") ? file.startsWith(src) : file === src));

const firstDate = (out) => out.match(/^\d{4}-\d{2}-\d{2}$/m)?.[0] || null;
// День останнього коміту, що зачепив хоч один зі шляхів (стилі не рахуються).
const lastCommit = (paths) => firstDate(git("log", "-1", "--format=%cs", "--", ...paths.map((p) => `:(literal)${p}`), ":(exclude)*.scss", ":(exclude)*.css"));
// День останнього коміту, що змінив хоч один із блоків рядків.
const lastChange = (blocks) => firstDate(git("log", "-1", "--format=%cs", "-s", ...blocks.map((b) => `-L${b.from},${b.to}:${b.file}`)));

// Порожній рядок блок не обриває.
const indent = (line) => (line.trim() ? line.match(/^\s*/)[0].length : Infinity);
// Найбільший неперервний шматок рядків навколо рядка i з відступом не меншим за min: нутрощі
// об'єкта без його дужок. Дужки не беремо навмисно: так сусідній новий запис не зачіпає блок.
const run = (lines, i, min) => {
  if (i < 0 || i >= lines.length || indent(lines[i]) < min) return null;
  let a = i;
  let b = i;
  while (a > 0 && indent(lines[a - 1]) >= min) a--;
  while (b < lines.length - 1 && indent(lines[b + 1]) >= min) b++;
  return { from: a + 1, to: b + 1, text: lines.slice(a, b + 1).join("\n") };
};

const slugOf = (line) => line.match(/^\s*slug:\s*["']([^"']+)["']/)?.[1];
const FIND = {
  // Запис масиву даних: усе всередині об'єкта, де стоїть рядок `slug: "..."`.
  entry: (lines, slug) => {
    const i = lines.findIndex((line) => slugOf(line) === slug);
    return i < 0 ? null : run(lines, i, indent(lines[i]));
  },
  // Ключ верхнього рівня у словнику: усе всередині `"key": { ... }`.
  dict: (lines, key) => {
    const i = lines.findIndex((line) => line.startsWith(`  "${key}":`));
    return i < 0 ? null : run(lines, i + 1, 3);
  },
};

// Записи колекції у файлах даних: [slug, джерело]. Єдиний запис у файлі — джерелом є весь файл,
// кілька записів — лише блок цього запису.
const entries = (files) =>
  files.flatMap((file) => {
    const slugs = workLines(file).map(slugOf).filter(Boolean);
    return slugs.map((slug) => [slug, slugs.length === 1 ? { paths: [file] } : { blocks: [{ file, find: "entry", name: slug }] }]);
  });

// Маршрут → джерела контенту: { paths, blocks }.
const routes = new Map();
for (const [href, { paths, dict = [] }] of Object.entries(STATIC)) {
  const blocks = dict.flatMap((name) => LANGS.map((lang) => ({ file: `src/dictionaries/${lang}.json`, find: "dict", name })));
  routes.set(href, { paths, blocks });
}
const addPages = (prefix, list) => {
  for (const [slug, src] of list) routes.set(`${prefix}${slug}`, { blocks: src.blocks || [], paths: [...(src.paths || []), ...TEMPLATES[prefix]] });
};
addPages("situations/", entries([`${DATA}/pages/situationsData.js`, ...jsIn(`${DATA}/pages/situations/`)]));
addPages("for/", entries([`${DATA}/pages/audiencesData.js`, ...jsIn(`${DATA}/pages/audiences/`)]));
addPages("blog/", entries(blogFiles));

// Як у sitemap.js: Львів веде головна, а закриті міста (EXCLUDED_CITIES) у sitemap не подаємо.
const closedCities = workLines("src/helpers/cityMeta.js").join("\n").match(/EXCLUDED_CITIES\s*=\s*\[([^\]]*)\]/)?.[1].match(/[\w-]+/g) || [];
const cities = entries([`${DATA}/ukrainianCitiesData.js`, `${DATA}/europeanCitiesData.js`])
  .filter(([slug]) => slug !== "lviv" && !closedCities.includes(slug))
  .map(([slug, src]) => {
    const own = `${DATA}/cityUnique/${slug}.js`;
    return [slug, existsSync(abs(own)) ? { paths: [own] } : src];
  });
addPages("locations/", cities);

const warnings = [];
const uncommitted = [];

const dateOf = (href, { paths = [], blocks = [] }) => {
  for (const p of paths) if (!existsSync(abs(p))) warnings.push(`${href || "/"}: шляху ${p} не існує, оновіть правило у скрипті`);
  const located = blocks.map((b) => ({ ...b, head: FIND[b.find](headLines(b.file), b.name), work: FIND[b.find](workLines(b.file), b.name) }));
  // Блок не знайдено у файлі (інше форматування чи перейменований ключ) — рахуємо весь файл.
  const lost = located.filter((b) => !b.work);
  for (const b of lost) warnings.push(`${href || "/"}: у ${b.file} не знайдено «${b.name}», взято дату всього файла`);
  const found = located.filter((b) => b.work);
  const files = [...paths, ...lost.map((b) => b.file)];

  // Незакомічена зміна файла або блоку (зокрема новий, якого ще немає в коміті) — сьогоднішня дата.
  if (files.some(isDirty) || found.some((b) => !b.head || b.head.text !== b.work.text)) {
    uncommitted.push(href || "/");
    return today;
  }
  const dates = [];
  if (files.length) dates.push(lastCommit(files));
  if (found.length) dates.push(lastChange(found.map((b) => ({ file: b.file, ...b.head }))));
  return dates.filter(Boolean).sort().pop() || null;
};

const result = {};
const undated = [];
for (const href of [...routes.keys()].sort()) {
  const date = dateOf(href, routes.get(href));
  if (date) result[href] = date;
  else undated.push(href || "/");
}
writeFileSync(abs(OUT), `${JSON.stringify(result, null, 2)}\n`);

// Скільки маршрутів на кожну дату.
const spread = {};
for (const date of Object.values(result)) spread[date] = (spread[date] || 0) + 1;
console.log(`lastmod: ${Object.keys(result).length} маршрутів записано в ${OUT}`);
for (const date of Object.keys(spread).sort().reverse()) console.log(`  ${date}  ${spread[date]}`);
if (uncommitted.length) console.log(`Незакомічені зміни, поставлено сьогоднішню дату (${uncommitted.length}): ${uncommitted.join(", ")}`);

// Статичні маршрути з sitemap.js, для яких тут немає правила: у sitemap вони отримають запасну дату.
const inSitemap = [...workLines(SITEMAP).join("\n").matchAll(/href:\s*"([^"]*)"/g)].map((m) => m[1]);
const noRule = inSitemap.filter((href) => !routes.has(href)).map((href) => href || "/");
if (noRule.length) warnings.push(`у sitemap.js є маршрути без правила у STATIC: ${noRule.join(", ")}`);
if (undated.length) warnings.push(`немає історії в git, запис не створено (у sitemap буде запасна дата): ${undated.join(", ")}`);
for (const text of warnings) console.warn(`УВАГА: ${text}`);
console.log(`Закомітьте ${OUT} разом з іншими змінами.`);
