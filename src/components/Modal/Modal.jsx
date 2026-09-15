"use client";
import React, { useContext, useEffect } from "react";
import { usePathname } from "next/navigation";
import OrderForm from "../OrderForm/OrderForm";
import { getFormTexts, langFromPath, privacyHref } from "../OrderForm/formTexts";
import { SiteContext } from "@/context/SiteContext";
import { useModalActions } from "@/hooks/modalActions";
import { getFreeTestForm, isFreeTestService } from "@/data/pages/freeTestPage";
import styles from "./Modal.module.scss";

// Вікно заявки: заголовок, назва послуги, що буде далі, форма, примітка про дані.
// Варіант "freeTest" (кнопка з variant="freeTest" або послуга безкоштовного тесту):
// свій заголовок і текст без речення про оплату, у формі обов'язковий вибір формату.
const Modal = ({ dictionary }) => {
  const { modalFrame, backDrop, modalService, modalVariant, setModalVariant } = useContext(SiteContext);
  const { closeModal } = useModalActions();
  const lang = langFromPath(usePathname());
  const m = dictionary.modal || {};
  const ft = getFormTexts(lang);

  const isFreeTest = modalVariant === "freeTest" || isFreeTestService(modalService);
  const free = isFreeTest ? getFreeTestForm(lang) : null;
  const title = free ? free.modalTitle : m.title;
  const text = free ? free.modalText : m.text;

  const closeModalFrame = (e) => {
    if (e.target.id === "backDrop") closeModal();
  };

  useEffect(() => {
    const root = document.documentElement;
    if (modalFrame) {
      document.body.style.overflowY = "hidden";
      // Поки вікно заявки відкрите, ховаємо віджет дзвінка Binotel (правило в globals.scss).
      root.classList.add("modal-open");
    } else {
      document.body.style.overflowY = "auto";
      root.classList.remove("modal-open");
      setModalVariant("");
    }
    const onKey = (e) => {
      if (e.key === "Escape") closeModal();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflowY = "auto";
      root.classList.remove("modal-open");
      window.removeEventListener("keydown", onKey);
    };
  }, [modalFrame, closeModal, setModalVariant]);

  if (!modalFrame) {
    return null;
  }

  return (
    <div className={styles.modalFrame} onClick={closeModalFrame}>
      <div
        className={backDrop ? `${styles.backDrop} ${styles.visible}` : styles.backDrop}
        id="backDrop"
      >
        <div className={styles.panel} role="dialog" aria-modal="true" aria-labelledby="order-modal-title">
          <button type="button" className={styles.close} onClick={closeModal} aria-label={m.close || "Close"}>
            <svg aria-hidden="true">
              <use href="/sprite.svg#icon-close" />
            </svg>
          </button>
          <div className={styles.head}>
            <h2 id="order-modal-title" className={styles.title}>{title}</h2>
            {modalService && (
              <p className={styles.service}>
                <span>{m.serviceLabel}:</span> {modalService}
              </p>
            )}
            <p className={styles.text}>{text}</p>
          </div>
          <OrderForm
            dictionary={dictionary}
            service={modalService}
            compact
            choice={free ? free.choice : null}
            showPrivacy={false}
            lang={lang}
          />
          <p className={styles.privacy}>
            {m.privacy}{" "}
            <a href={privacyHref(lang)} target="_blank" rel="noopener noreferrer">{ft.privacyShort}</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Modal;
