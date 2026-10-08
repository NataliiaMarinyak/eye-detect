// «Сторож» на випадок фатальної помилки в браузері (наприклад, не завантажився один із
// JS-файлів сторінки). Next.js у такому разі стирає весь документ і лишає рядок
// «Application error: a client-side exception has occurred» без заголовка, тексту і canonical.
// Такий документ однаковий на всіх сайтах на Next.js, тому Google склеював наші сторінки
// з чужими (Search Console, «Копія без вибраної користувачем канонічної версії», жовтень 2026).
//
// Це вбудований у HTML скрипт, а не окремий файл і не src/app/global-error.jsx: окремий файл
// сам може не завантажитися, і тоді сторінка лишалася порожньою (перевірено 08.10.2026).
// Скрипт запам'ятовує сторінку такою, якою її віддав сервер, і якщо документ зруйновано —
// повертає заголовок, мета-теги, canonical, hreflang і вміст. Жодного тексту «про помилку»
// і жодного noindex тут бути не повинно.
//
// Функцію нижче вставляємо в сторінку як текст (guard.toString()), тому в ній лише простий
// синтаксис (var, function) і жодних посилань на змінні з цього файлу.
function guard() {
  var d = document, de = d.documentElement, S, n = 0, busy = 0, timer, errors = [];
  var KEEP = 'meta[name],meta[property],link[rel="canonical"],link[rel="alternate"][hreflang]';
  function list(sel) { return [].slice.call(d.head.querySelectorAll(sel)); }
  // Документ зруйновано: стандартна заглушка Next.js або зникли canonical чи вміст.
  function broken() {
    return de.id === "__next_error__" || !d.head || !d.body || !d.head.querySelector('link[rel="canonical"]') || !d.body.firstElementChild;
  }
  // Не частіше одного перезавантаження на хвилину для сторінки; якщо сховище недоступне — жодного.
  function once(fn) {
    var key = "eyeReload:" + location.pathname, now = Date.now();
    try {
      if (now - (Number(sessionStorage.getItem(key)) || 0) < 60000) return;
      sessionStorage.setItem(key, String(now));
    } catch (e) { return; }
    fn();
  }
  function enc(text) {
    try { return encodeURIComponent(text); } catch (e) { return ""; }
  }
  // Сигнал про збій: один GET на статичний файл /ce.json. Його видно в «Статистиці сканування»
  // Search Console, якщо сторінка впала саме в роботі Google. У параметрах лише текст помилки,
  // назва файлу і шлях сторінки — без даних відвідувача.
  function ping() {
    try {
      var message = errors[0] || "";
      for (var i = 0; i < errors.length; i++) {
        if (/ChunkLoadError|_next\/static/.test(errors[i])) { message = errors[i]; break; }
      }
      var file = (message.match(/_next\/static\/[^\s)'"]+/) || [""])[0].split("/").pop() || "";
      var query = "m=" + enc(message.replace(/\s+/g, " ").slice(0, 120)) +
        "&f=" + enc(file.slice(0, 80)) +
        "&p=" + enc(location.pathname.slice(0, 120));
      fetch("/ce.json?" + query, { cache: "no-store", keepalive: true })["catch"](function () {});
    } catch (e) {}
  }
  function fix() {
    if (busy || !S || !broken() || ++n > 3) return;
    // Після переходу всередині сайту знімок належить попередній сторінці — тоді просто
    // один раз завантажуємо поточну адресу заново.
    if (location.pathname !== S.path) {
      if (n === 1) ping();
      once(function () { location.reload(); });
      return;
    }
    busy = 1;
    try {
      de.removeAttribute("id");
      de.lang = S.lang;
      de.className = S.cls;
      if (!d.body) de.appendChild(d.createElement("body"));
      list("title," + KEEP).forEach(function (el) { el.remove(); });
      d.head.insertAdjacentHTML("afterbegin", S.head);
      d.title = S.title;
      d.body.className = S.bcls;
      d.body.innerHTML = S.body;
    } catch (e) {}
    busy = 0;
    if (n === 1) {
      ping();
      // Відновлена сторінка читається, посилання працюють, але кнопки й форми — ні.
      // Тому при натисканні не на посилання (клік, Enter чи пробіл) перезавантажуємо сторінку.
      // Саме click, а не pointerdown: прокрутка пальцем і виділення тексту не мають перезавантажувати.
      var reloadOnAction = function (ev) {
        if (ev.type === "keydown" && ev.key !== "Enter" && ev.key !== " ") return;
        if (ev.target && ev.target.closest && ev.target.closest("a[href]")) return;
        if (navigator.onLine === false) return;
        once(function () { location.reload(); });
      };
      addEventListener("click", reloadOnAction, true);
      addEventListener("keydown", reloadOnAction, true);
    }
  }
  function later() { clearTimeout(timer); timer = setTimeout(fix, 30); }
  try {
    // Сторінки без canonical (404) не чіпаємо.
    if (!d.body || broken()) return;
    var t = d.createElement("template");
    t.innerHTML = d.body.innerHTML;
    // Скрипти Next.js після збою не потрібні, розмітку для пошуковиків (JSON-LD) лишаємо.
    [].forEach.call(t.content.querySelectorAll('script:not([type="application/ld+json"])'), function (el) { el.remove(); });
    S = {
      path: location.pathname,
      lang: de.lang,
      cls: de.className,
      bcls: d.body.className,
      title: d.title,
      head: list(KEEP).map(function (el) { return el.outerHTML; }).join(""),
      body: t.innerHTML,
    };
    // Перші чотири помилки сторінки, а помилки власних скриптів (_next/static) — понад цей ліміт.
    var note = function (text) {
      if (errors.length < 4 || (errors.length < 12 && /ChunkLoadError|_next\/static/.test(text))) errors.push(text);
    };
    addEventListener("error", function (ev) {
      note((ev.message || "ResourceError") + " " + (ev.filename || (ev.target && (ev.target.src || ev.target.href)) || ""));
    }, true);
    addEventListener("unhandledrejection", function (ev) {
      note(String(ev.reason && (ev.reason.message || ev.reason)));
    });
    new MutationObserver(later).observe(de, { attributes: true, attributeFilter: ["id"], childList: true });
    new MutationObserver(later).observe(d.head, { childList: true });
  } catch (e) {}
}

// Має стояти останнім елементом у <body>: на цей момент увесь вміст сторінки вже в документі.
const CrashGuard = () => <script dangerouslySetInnerHTML={{ __html: `(${guard.toString()})()` }} />;

export default CrashGuard;
