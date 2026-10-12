// Локальний блок сторінки міста: 300–500 слів тексту, якого немає на жодній іншій сторінці сайту.
// Стоїть високо: одразу після першого екрана і блоку «що варто знати» (вступ + факти), перед «Як пройти тест».
//
// ДАНІ. Необов'язкове поле local у src/data/cityUnique/<slug>.js, окремо в кожній мові (uk, ru, en):
//
//   local: {
//     title: string,          // заголовок h2 (по центру); назва міста у природному відмінку
//     paragraphs: string[],   // абзаци звичайним текстом: без HTML, Markdown і переносів рядка всередині
//     points?: string[],      // необов'язково: 3–6 коротких пунктів, показуються списком під абзацами
//   }
//
// Якщо поля local немає (або немає title чи жодного абзацу) — блок не показується, сторінка не змінюється.
//
// ПРИКЛАД (скорочено; у справжньому тексті разом 300–500 слів), файл src/data/cityUnique/kharkiv.js:
//
//   export const kharkiv = {
//     uk: {
//       seoTitle: "…", seoDescription: "…", intro: "…", facts: [...], faq: [...], towns: {...},
//       local: {
//         title: "Перевірка на детекторі брехні у Харкові: як це відбувається",
//         paragraphs: [
//           "Від Львова до Харкова близько 1 000 км, тому більшість харків'ян починає з онлайн-тесту VerifEye: посилання приходить на телефон, тест триває 15–20 хвилин, звіт у PDF готовий протягом 5 хвилин.",
//           "Якщо потрібен саме EyeDetect, спеціаліст приїжджає зі Львова з обладнанням. Виїзд коштує 12 000 ₴ під ключ, дату узгоджуємо заздалегідь.",
//         ],
//         points: [
//           "Онлайн-тест VerifEye: від 2 500 ₴, можна пройти сьогодні",
//           "EyeDetect з виїздом до Харкова: 12 000 ₴ під ключ",
//           "Тест лише за письмовою згодою людини",
//         ],
//       },
//     },
//     ru: { …, local: { title: "…", paragraphs: ["…"], points: ["…"] } },
//     en: { …, local: { title: "…", paragraphs: ["…"], points: ["…"] } },
//   };
//
// Правила тексту — у CLAUDE.md (три мови, незмінні факти, заборонені формулювання, без окличних знаків).
// Пробіли в числах («12 000 ₴», «540 км») у даних пишемо звичайні: нерозривними їх робить keepNumbers під час показу.
import { keepShortWords, keepNumbers } from "@/data/pages/cityTexts";
import styles from "./CityLocalSection.module.scss";

const CityLocalSection = ({ local }) => {
  const paragraphs = (local?.paragraphs || []).filter(Boolean);
  if (!local?.title || paragraphs.length === 0) return null;
  const points = (local.points || []).filter(Boolean);

  return (
    <section className={styles.section}>
      <div className={`container ${styles.container}`}>
        <h2 className={styles.title}>{keepShortWords(local.title)}</h2>
        <div className={styles.body}>
          {paragraphs.map((text, i) => (
            <p key={i} className={styles.text}>{keepNumbers(text)}</p>
          ))}
          {points.length > 0 && (
            <ul className={styles.points}>
              {points.map((point, i) => (
                <li key={i} className={styles.point}>{keepNumbers(point)}</li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </section>
  );
};

export default CityLocalSection;
