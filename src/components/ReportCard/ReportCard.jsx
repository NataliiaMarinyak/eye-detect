import Reveal from "@/components/Reveal/Reveal";
import styles from "./ReportCard.module.scss";

// Компактний фрагмент звіту EyeDetect для першого екрана.
// Бали й формулювання взяті зі справжнього знеособленого звіту (тест на вірність).
const ROWS = {
  uk: [
    ["Статеві контакти за період шлюбу", 99],
    ["Романтичне спілкування за 6 місяців", 99],
    ["Приховані витрати на іншу особу", 94],
  ],
  ru: [
    ["Половые контакты за период брака", 99],
    ["Романтическое общение за 6 месяцев", 99],
    ["Скрытые траты на другого человека", 94],
  ],
  en: [
    ["Sexual contact during the marriage", 99],
    ["Romantic communication in 6 months", 99],
    ["Hidden spending on another person", 94],
  ],
};

const LABELS = {
  uk: { head: "Звіт EyeDetect", verdict: "Заслуговує на довіру", sub: "Достовірний · правдивий", note: "Фрагмент справжнього звіту. Оцінка від 1 до 99 по кожному питанню." },
  ru: { head: "Отчёт EyeDetect", verdict: "Заслуживает доверия", sub: "Достоверный · правдивый", note: "Фрагмент настоящего отчёта. Оценка от 1 до 99 по каждому вопросу." },
  en: { head: "EyeDetect report", verdict: "Credible", sub: "Truthful", note: "Excerpt from a real report. A score from 1 to 99 per question." },
};

const ReportCard = ({ dictionary }) => {
  const lang = dictionary?.lang in ROWS ? dictionary.lang : "uk";
  const rows = ROWS[lang];
  const l = LABELS[lang];

  return (
    <Reveal className={styles.card} y={18}>
      <div className={styles.head}>
        <span className={styles.logo} aria-hidden="true">
          <svg>
            <use href="/sprite.svg#icon-check-mark-in-circle" />
          </svg>
        </span>
        <div>
          <p className={styles.headTitle}>{l.head}</p>
          <p className={styles.headSub}>{l.sub}</p>
        </div>
        <p className={styles.verdict}>{l.verdict}</p>
      </div>
      <ul className={styles.rows}>
        {rows.map(([q, score]) => (
          <li key={q} className={styles.row}>
            <p className={styles.q}>{q}</p>
            <div className={styles.bar} aria-hidden="true">
              <span className={styles.fill} style={{ width: `${score}%` }} />
            </div>
            <p className={styles.score}>{score}</p>
          </li>
        ))}
      </ul>
      <p className={styles.note}>{l.note}</p>
    </Reveal>
  );
};

export default ReportCard;
