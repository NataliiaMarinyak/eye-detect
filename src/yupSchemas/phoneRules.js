// Одна перевірка контакту для форм, вікна розрахунку і сервера (/api/lead).
// Без залежностей, щоб імпортувати і в браузері, і на сервері.

// Прибираємо пробіли, дужки, дефіси і крапки: «+380 (67) 123-45-67», «067.123.45.67» → лише цифри (і «+» на початку).
export const normalizePhone = (value) => String(value ?? "").replace(/[\s().-]/g, "");

// Телефон: «+» лише першим символом, далі 9–15 цифр.
// Щоб не пропустити номер із загубленою цифрою, для українських форматів довжина точна:
// з кодом 380 — рівно 12 цифр, місцевий 0XXXXXXXXX — рівно 10 (міжнародний префікс 00 — без цього обмеження).
export const isValidPhone = (value) => {
  const phone = normalizePhone(value);
  if (!/^\+?\d{9,15}$/.test(phone)) return false;
  const digits = phone.replace("+", "");
  if (digits.startsWith("380") && digits.length !== 12) return false;
  if (!phone.startsWith("+") && digits.startsWith("0") && !digits.startsWith("00") && digits.length !== 10) return false;
  return true;
};

// Telegram @username: 5–32 символи (латиниця, цифри, _), перший символ літера.
export const normalizeTelegram = (value) => {
  const v = String(value ?? "").trim();
  if (!v) return "";
  return v.startsWith("@") ? v : `@${v}`;
};

export const isValidTelegram = (value) => /^@[A-Za-z][A-Za-z0-9_]{4,31}$/.test(String(value ?? "").trim());
