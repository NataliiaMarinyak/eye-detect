import Reveal from "@/components/Reveal/Reveal";
import OpenModalBtn from "@/components/Buttons/OpenModalBtn/OpenModalBtn";
import PriceQuizBtn from "@/components/Buttons/PriceQuizBtn/PriceQuizBtn";
import { fill, keepShortWords, keepNumbers } from "@/data/pages/cityTexts";
import styles from "./CityVisitSection.module.scss";

// Запасна назва послуги для форми заявки і Telegram мовою сторінки; основна — t.service
// (у міста-партнера це «EyeDetect у партнера», у решти — «EyeDetect з виїздом»).
const VISIT_SERVICE = { uk: "EyeDetect з виїздом", ru: "EyeDetect с выездом", en: "EyeDetect on-site" };

// Ділить текст на речення: після крапки, знака питання чи трьох крапок і пробілу йде велика літера.
// Слова й знаки не змінюються. Скорочень із крапкою перед великою літерою («вул. Городоцька») у плашці
// партнера немає; якщо таке з'явиться в тексті, рядок розірветься й на ньому.
const splitSentences = (text) => text.split(/(?<=[.?…]) +(?=[\p{Lu}«“])/u).filter(Boolean);

// Ціна в картці: «від 5 500 ₴» не розривається після «від», а кілька цін через « · »
// («сімейна — 8 500 ₴ · скринінг і крадіжка — від 5 500 ₴ за людину») стоять кожна з нового рядка.
const NBSP = String.fromCharCode(0xa0);
const PriceText = ({ text }) =>
  keepNumbers((text || "").replace(/(^|\s)(від|от|from) (?=\d|UAH)/g, `$1$2${NBSP}`))
    .split(" · ")
    .map((part) => (
      <span key={part} className={styles.priceLine}>
        {part}
      </span>
    ));

// Блок «Як пройти тест у {місто}»: онлайн сьогодні або виїзд спеціаліста.
// Тексти залежать від регіону (захід України / інша Україна / Європа).
// quizCta: кнопка другої картки відкриває розрахунок вартості замість вікна заявки.
// Місто-партнер (у текстах є t.clientVisit): третя картка «Виїзд до клієнта», картки на комп'ютері в три стовпці,
// а довга плашка з цінами виводиться по одному реченню в рядку. У решти міст усе, як було: дві картки.
// keepNumbers — лише для показу: число і знак «₴» чи «км» не розриваються між рядками.
// keepShortWords у рядках плашки партнера і в ціні третьої картки — щоб «у» чи «по» не лишалися в кінці рядка
// («по місту — 8 500 ₴, по» / «області — 12 000 ₴»).
// officeLink ({ text, href }) — рядок «Третій спосіб…» під картками для міст, звідки дешевше приїхати до кабінету
// (NEAREST_OFFICE у cityTexts.js, рішення власника 22.10.2026).
const CityVisitSection = ({ t, region, loc, km, vars, dictionary, lang, quizCta = false, officeLink }) => {
  const v = vars || { loc, km: km || "", city: loc };
  const visitText = km ? t.visit.text[region] : t.visit.textNoKm[region];
  const clientVisit = t.clientVisit;
  const service = t.service || VISIT_SERVICE[lang] || VISIT_SERVICE.uk;
  const noOffice = t.noOffice ? fill(t.noOffice, v) : "";
  const noOfficeLines = clientVisit ? splitSentences(noOffice) : [];

  return (
    <section id="visit" className={styles.section}>
      <div className={`container ${styles.container}`}>
        <Reveal>
          <h2 className={styles.title}>{keepShortWords(fill(t.visitTitle, v))}</h2>
        </Reveal>
        {noOffice && (
          <p className={styles.noOffice}>
            {noOfficeLines.length > 1
              ? noOfficeLines.map((line, i) => (
                  <span key={i} className={styles.noOfficeLine}>{keepNumbers(keepShortWords(line))}{" "}</span>
                ))
              : keepNumbers(noOffice)}
          </p>
        )}
        <ul className={clientVisit ? `${styles.grid} ${styles.gridThree}` : styles.grid}>
          <Reveal as="li" className={styles.card}>
            <p className={styles.badge}>{t.online.title}</p>
            <p className={styles.text}>{keepNumbers(t.online.text)}</p>
            <div className={styles.footer}>
              <p className={styles.price}><PriceText text={t.online.price} /></p>
              <a href={`${lang === "uk" ? "" : "/" + lang}/online`} className={styles.btnSecondary}>{t.online.cta}</a>
            </div>
          </Reveal>
          <Reveal as="li" delay={0.08} className={`${styles.card} ${styles.cardAccent}`}>
            <p className={styles.badge}>{t.visit.title}</p>
            <p className={styles.text}>{keepNumbers(fill(visitText, v))}</p>
            <div className={styles.footer}>
              <p className={styles.price}><PriceText text={t.visit.price[region]} /></p>
              {quizCta ? (
                <PriceQuizBtn customClass={styles.btnPrimary} title={t.visit.cta} />
              ) : (
                <OpenModalBtn customClass={styles.btnPrimary} title={t.visit.cta} service={`${service} · ${loc}`} />
              )}
            </div>
          </Reveal>
          {clientVisit && (
            <Reveal as="li" delay={0.16} className={styles.card}>
              <p className={styles.badge}>{clientVisit.title}</p>
              <p className={styles.text}>{keepNumbers(clientVisit.text)}</p>
              <div className={styles.footer}>
                <p className={styles.price}>{keepNumbers(keepShortWords(clientVisit.price))}</p>
                <OpenModalBtn customClass={styles.btnPrimary} title={clientVisit.cta} service={`${clientVisit.title} · ${loc}`} />
              </div>
            </Reveal>
          )}
        </ul>
        {officeLink?.text && (
          <p className={styles.officeLink}>
            <a href={officeLink.href}>{keepNumbers(officeLink.text)} →</a>
          </p>
        )}
      </div>
    </section>
  );
};

export default CityVisitSection;
