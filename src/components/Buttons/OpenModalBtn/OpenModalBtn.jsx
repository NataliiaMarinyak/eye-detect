"use client";
import { useModalActions } from "@/hooks/modalActions";
import styles from "./OpenModalBtn.module.scss";

// Кнопка, що відкриває форму заявки. service — назва послуги для заголовка форми
// і для тексту заявки в Telegram (наприклад «EyeDetect у Львові»).
const OpenModalBtn = ({ customClass = "", title, service = "" }) => {
  const { openModal } = useModalActions();

  return (
    <button
      className={`${styles.btn} ${customClass}`}
      onClick={() => openModal(service)}
      type="button"
    >
      {title}
    </button>
  );
};

export default OpenModalBtn;
