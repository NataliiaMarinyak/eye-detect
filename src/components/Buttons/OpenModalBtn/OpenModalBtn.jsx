"use client";
import { useContext } from "react";
import { useModalActions } from "@/hooks/modalActions";
import { SiteContext } from "@/context/SiteContext";
import styles from "./OpenModalBtn.module.scss";

// Кнопка, що відкриває форму заявки. service — назва послуги для заголовка форми
// і для тексту заявки в Telegram (наприклад «EyeDetect у Львові»).
// variant — варіант вікна: "" (консультація) або "freeTest" (безкоштовний тест, без речення про оплату).
// ariaLabel — повніший підпис для екранних читалок, коли видимий текст короткий (наприклад «Записатися» в рядку прайсу).
const OpenModalBtn = ({ customClass = "", title, service = "", variant = "", ariaLabel }) => {
  const { openModal } = useModalActions();
  const { setModalVariant } = useContext(SiteContext);

  return (
    <button
      className={`${styles.btn} ${customClass}`}
      onClick={() => {
        setModalVariant(variant);
        openModal(service);
      }}
      type="button"
      aria-label={ariaLabel || undefined}
    >
      {title}
    </button>
  );
};

export default OpenModalBtn;
