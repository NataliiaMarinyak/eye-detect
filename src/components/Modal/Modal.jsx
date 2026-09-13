"use client";
import React, { useContext, useEffect } from "react";
import OrderForm from "../OrderForm/OrderForm";
import { SiteContext } from "@/context/SiteContext";
import { useModalActions } from "@/hooks/modalActions";
import styles from "./Modal.module.scss";

// Вікно заявки: заголовок, назва послуги, що буде далі, форма, примітка про дані.
const Modal = ({ dictionary }) => {
  const { modalFrame, backDrop, modalService } = useContext(SiteContext);
  const { closeModal } = useModalActions();
  const m = dictionary.modal || {};

  const closeModalFrame = (e) => {
    if (e.target.id === "backDrop") closeModal();
  };

  useEffect(() => {
    if (modalFrame) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "auto";
    }
    const onKey = (e) => {
      if (e.key === "Escape") closeModal();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflowY = "auto";
      window.removeEventListener("keydown", onKey);
    };
  }, [modalFrame, closeModal]);

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
            <h2 id="order-modal-title" className={styles.title}>{m.title}</h2>
            {modalService && (
              <p className={styles.service}>
                <span>{m.serviceLabel}:</span> {modalService}
              </p>
            )}
            <p className={styles.text}>{m.text}</p>
          </div>
          <OrderForm dictionary={dictionary} service={modalService} compact />
          <p className={styles.privacy}>{m.privacy}</p>
        </div>
      </div>
    </div>
  );
};

export default Modal;
