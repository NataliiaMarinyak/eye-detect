"use client";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { getQuiz, quizSteps, estimateQuiz, trafficSource } from "@/data/quizData";
import { sendToTelegram } from "@/helpers/sendToTelegram";
import styles from "./PriceQuiz.module.scss";

// Вікно квіза. Відкривається подією window "eye:open-quiz" (кнопки PriceQuizBtn)
// або посиланням з #quiz у адресі. Змонтоване один раз у layout.
import { OPEN_QUIZ_EVENT } from "./quizEvent";

const TEL = "+380686833368";
const TEL_H = "+380 68 68 333 68";
const TELEGRAM = "https://t.me/Detecteye";
const SOURCE_KEY = "eye_first_source";

const track = (event, params = {}) => {
  try {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ event, ...params });
  } catch {}
};

const PriceQuiz = ({ lang = "uk" }) => {
  const t = getQuiz(lang);
  const [open, setOpen] = useState(false);
  const [cur, setCur] = useState(0); // 0..4 питання, 5 форма, 6 подяка
  const [branch, setBranch] = useState(null);
  const [answers, setAnswers] = useState([]);
  const [form, setForm] = useState({ name: "", phone: "", channel: 0 });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | sending | fail
  const openedFrom = useRef("");
  const dialogRef = useRef(null);

  const steps = useMemo(() => quizSteps(t, branch), [t, branch]);

  // Перше джерело трафіку за сесію: зберігаємо на першій сторінці, де змонтовано квіз.
  useEffect(() => {
    try {
      if (!sessionStorage.getItem(SOURCE_KEY)) sessionStorage.setItem(SOURCE_KEY, trafficSource());
    } catch {}
  }, []);

  const reset = () => {
    setCur(0);
    setBranch(null);
    setAnswers([]);
    setErrors({});
    setStatus("idle");
  };

  const show = useCallback((from = "") => {
    openedFrom.current = from || window.location.pathname;
    setOpen(true);
    track("quiz_open", { quiz_page: openedFrom.current });
  }, []);

  useEffect(() => {
    const onOpen = (e) => show(e.detail?.from);
    window.addEventListener(OPEN_QUIZ_EVENT, onOpen);
    if (window.location.hash === "#quiz") show();
    const onHash = () => window.location.hash === "#quiz" && show();
    window.addEventListener("hashchange", onHash);
    return () => {
      window.removeEventListener(OPEN_QUIZ_EVENT, onOpen);
      window.removeEventListener("hashchange", onHash);
    };
  }, [show]);

  const close = useCallback(() => {
    setOpen(false);
    if (window.location.hash === "#quiz") history.replaceState(null, "", window.location.pathname + window.location.search);
    if (cur === 6) reset();
  }, [cur]);

  // Блокуємо прокрутку сторінки і закриваємо по Escape
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    document.documentElement.classList.add("quiz-open");
    const onKey = (e) => e.key === "Escape" && close();
    window.addEventListener("keydown", onKey);
    dialogRef.current?.focus();
    return () => {
      document.body.style.overflow = prev;
      document.documentElement.classList.remove("quiz-open");
      window.removeEventListener("keydown", onKey);
    };
  }, [open, close]);

  const choose = (value, label) => {
    const next = [...answers.slice(0, cur), label];
    setAnswers(next);
    if (cur === 0) setBranch(value);
    track("quiz_step", { step: cur + 1, answer: label });
    setTimeout(() => setCur((c) => c + 1), 180);
  };

  const back = () => setCur((c) => Math.max(0, c - 1));

  const submit = async (e) => {
    e.preventDefault();
    const errs = {};
    if (!form.name.trim()) errs.name = t.contact.errName;
    setErrors(errs);
    if (Object.keys(errs).length) return;

    setStatus("sending");
    const lines = steps.map((s, i) => `${s.k}: ${answers[i] || "—"}`);
    let source = "";
    try { source = sessionStorage.getItem(SOURCE_KEY) || ""; } catch {}
    const comment = [
      ...lines,
      `Зв'язок: ${t.contact.channels[form.channel]}`,
      `Розрахунок: ${estimateQuiz(branch, answers, t)}`,
      source ? `Джерело: ${source}` : null,
      `Відкрито на: ${openedFrom.current}`,
    ].filter(Boolean).join("\n");

    const lead = { name: form.name.trim(), tel: form.phone.trim() || "не вказано", comment, service: "Квіз: розрахунок вартості" };
    // Та сама відправка, що й у формі контактів (/api/lead → Telegram). Одна повторна спроба при збої мережі.
    let ok = await sendToTelegram(lead);
    if (!ok) { await new Promise((r) => setTimeout(r, 1200)); ok = await sendToTelegram(lead); }
    if (ok) {
      track("quiz_lead", { quiz_branch: branch, quiz_format: answers[3] || "" });
      setStatus("idle");
      setCur(6);
    } else {
      setStatus("fail");
    }
  };

  if (!open) return null;

  const formatKey = (answers[3] || "").startsWith("Онлайн") ? "online" : (answers[3] || "").startsWith("У кабінеті") ? "office" : (answers[3] || "").startsWith("Виїзд") ? "visit" : "unsure";
  const isGroup = /2–5|6–15|Більше/.test(`${answers[1] || ""} ${answers[2] || ""}`);
  const get = t.contact.whyGet[formatKey] + (isGroup ? t.contact.whyGroup : "");
  const progress = cur >= 5 ? 100 : Math.round((cur / 5) * 100);

  return (
    <div className={styles.overlay} onMouseDown={(e) => e.target === e.currentTarget && close()}>
      <div className={styles.dialog} role="dialog" aria-modal="true" aria-label={t.headline} tabIndex={-1} ref={dialogRef}>
        <div className={styles.top}>
          <span />
          <button type="button" className={styles.close} onClick={close} aria-label={t.close}>×</button>
        </div>
        {cur < 6 && (
          <div className={styles.bar} aria-hidden="true"><span style={{ width: `${progress}%` }} /></div>
        )}

        {cur < 5 && (
          <div className={styles.body} key={cur}>
            {cur === 0 && <p className={styles.headline}>{t.headline}</p>}
            <h2 className={styles.q}>{steps[cur].q}</h2>
            <ul className={styles.options}>
              {steps[cur].o.map((opt) => {
                const label = typeof opt === "string" ? opt : opt.l;
                const value = typeof opt === "string" ? opt : opt.v;
                const selected = answers[cur] === label;
                return (
                  <li key={label}>
                    <button type="button" className={`${styles.option} ${selected ? styles.selected : ""}`} onClick={() => choose(value, label)}>
                      {typeof opt !== "string" && <span className={styles.icon} aria-hidden="true">{opt.i}</span>}
                      <span>{label}</span>
                    </button>
                  </li>
                );
              })}
            </ul>
            <div className={styles.footer}>
              {cur > 0 ? <button type="button" className={styles.back} onClick={back}>← {t.back}</button> : <span />}
              <span className={styles.gift}>🎁 {t.gift}</span>
            </div>
          </div>
        )}

        {cur === 5 && (
          <form className={styles.body} onSubmit={submit} noValidate>
            <h2 className={styles.q}>{t.contact.title}</h2>
            <label className={styles.field}>
              <span className={styles.label}>{t.contact.name}</span>
              <input type="text" autoComplete="name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} aria-invalid={!!errors.name} />
              {errors.name && <span className={styles.error}>{errors.name}</span>}
            </label>

            <label className={styles.field}>
              <span className={styles.label}>{t.contact.phone}</span>
              <input type="text" autoComplete="tel" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} aria-invalid={!!errors.phone} />
              {errors.phone && <span className={styles.error}>{errors.phone}</span>}
            </label>

            <div className={styles.field}>
              <span className={styles.label}>{t.contact.channelTitle}</span>
              <div className={styles.channels} role="radiogroup">
                {t.contact.channels.map((c, i) => (
                  <button type="button" role="radio" aria-checked={form.channel === i} key={c} className={`${styles.channel} ${form.channel === i ? styles.selected : ""}`} onClick={() => setForm({ ...form, channel: i })}>{c}</button>
                ))}
              </div>
            </div>


            <button type="submit" className={styles.submit} disabled={status === "sending"}>
              {status === "sending" ? t.contact.sending : t.contact.button}
            </button>
            {status === "fail" && (
              <p className={styles.error}>{t.contact.fail}<a href={`tel:${TEL}`}>{TEL_H}</a></p>
            )}
            <p className={styles.note}>🎁 {t.gift}. <a href={lang === "uk" ? "/privacy-policy" : `/${lang}/privacy-policy`} target="_blank" rel="noopener noreferrer">{t.contact.privacy}</a></p>
            <div className={styles.footer}>
              <button type="button" className={styles.back} onClick={back}>← {t.back}</button>
            </div>
          </form>
        )}

        {cur === 6 && (
          <div className={styles.body}>
            <div className={styles.doneIcon} aria-hidden="true">✓</div>
            <h2 className={styles.q}>{t.done.title}</h2>
            <p className={styles.sub}>{t.done.text}<a href={`tel:${TEL}`}>{TEL_H}</a></p>
            <div className={styles.doneActions}>
              <a className={styles.submit} href={TELEGRAM} target="_blank" rel="noopener noreferrer">{t.done.telegram}</a>
              <button type="button" className={styles.secondary} onClick={close}>{t.done.close}</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PriceQuiz;
