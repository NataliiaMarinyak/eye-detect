// Тексти форми заявки, яких немає у словниках: помилка телефону з прикладом і рядок про конфіденційність.
// Мову беремо зі шляху сторінки: /ru/... і /en/..., без префікса — українська.

export const langFromPath = (pathname = "") => {
  const seg = String(pathname).split("/")[1];
  return seg === "ru" || seg === "en" ? seg : "uk";
};

export const privacyHref = (lang) => (lang === "uk" ? "/privacy-policy" : `/${lang}/privacy-policy`);

export const formTexts = {
  uk: {
    phoneError: "Перевірте номер. Наприклад: +380 67 123 45 67 або 067 123 45 67",
    privacyBefore: "Надсилаючи заявку, ви погоджуєтесь з ",
    privacyLink: "Політикою конфіденційності",
    privacyAfter: ".",
    privacyShort: "Політика конфіденційності",
  },
  ru: {
    phoneError: "Проверьте номер. Например: +380 67 123 45 67 или 067 123 45 67",
    privacyBefore: "Отправляя заявку, вы соглашаетесь с ",
    privacyLink: "Политикой конфиденциальности",
    privacyAfter: ".",
    privacyShort: "Политика конфиденциальности",
  },
  en: {
    phoneError: "Check the number. For example: +380 67 123 45 67 or +48 512 345 678",
    privacyBefore: "By sending this request, you agree to our ",
    privacyLink: "Privacy Policy",
    privacyAfter: ".",
    privacyShort: "Privacy Policy",
  },
};

export const getFormTexts = (lang) => formTexts[lang] || formTexts.uk;
