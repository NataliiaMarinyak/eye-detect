import { keepShortWords, keepNumbers } from "@/data/pages/cityTexts";
import styles from "./CityUniqueSection.module.scss";

// Нерозривний пробіл: стрілка в посиланні не лишається сама на новому рядку.
const NBSP = " ";

// Унікальний блок міста: вступ про місто і три факти (населення, дорога, як пройти тест).
// note — спільний для міст України абзац про те, де є обладнання EyeDetect (cityTexts.coverage).
// visitLink — текст тихого посилання під фактами на блок «Як пройти тест» (якір #visit, без скриптів).
// Сторінка передає його лише тоді, коли в міста є довгий текст (поле local): він стоїть між цим блоком
// і картками з цінами, тож без посилання до них 2,5–3 екрани телефона.
// keepNumbers — лише для показу: число і знак «₴» чи «км» не розриваються між рядками.
// keepShortWords у значенні факту — щоб «по» чи «у» не лишалися в кінці рядка («по місту 8 500 ₴, по» / «області 12 000 ₴»).
const CityUniqueSection = ({ title, intro, facts = [], note, visitLink }) => (
  <section className={styles.section}>
    <div className={`container ${styles.container}`}>
      <h2 className={styles.title}>{keepShortWords(title)}</h2>
      <p className={styles.intro}>{keepNumbers(intro)}</p>
      {facts.length > 0 && (
        <dl className={styles.facts}>
          {facts.map(([label, value]) => (
            <div key={label} className={styles.fact}>
              <dt className={styles.label}>{label}</dt>
              <dd className={styles.value}>{keepNumbers(keepShortWords(value))}</dd>
            </div>
          ))}
        </dl>
      )}
      {visitLink && (
        <a href="#visit" className={styles.visitLink}>
          {keepShortWords(visitLink)}{NBSP}<span aria-hidden="true">↓</span>
        </a>
      )}
      {note && <p className={styles.note}>{keepNumbers(note)}</p>}
    </div>
  </section>
);

export default CityUniqueSection;
