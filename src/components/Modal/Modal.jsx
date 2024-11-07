"use client";
import React, { useContext, useEffect } from "react";
import OrderForm from "../OrderForm/OrderForm";
import { SiteContext } from "@/context/SiteContext";
import { useModalActions } from "@/hooks/modalActions";
import styles from "./Modal.module.scss";

const Modal = () => {
  const { modalFrame } = useContext(SiteContext);
  const { backDrop } = useContext(SiteContext);

  const { closeModal } = useModalActions();

  const closeModalFrame = (e) => {
    if (e.target.id === "backDrop") {
      closeModal();
    } else {
      return;
    }
  };

  useEffect(() => {
    if (modalFrame) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "auto";
    }

    return () => {
      document.body.style.overflowY = "auto";
    };
  }, [modalFrame]);

  if (!modalFrame) {
    return;
  }

  return (
    <div className={styles.modalFrame} onClick={closeModalFrame}>
      <div
        className={
          backDrop
            ? `${styles.backDrop} ${styles.visible}`
            : `${styles.backDrop} `
        }
        id="backDrop"
      >
        <OrderForm />
      </div>
    </div>
  );
};

export default Modal;
