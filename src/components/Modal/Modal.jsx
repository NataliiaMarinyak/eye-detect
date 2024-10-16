"use client";

import React, { useContext, useEffect } from "react";
import styles from "./Modal.module.scss";
import { SiteContext } from "@/context/SiteContext";
import OrderForm from "../OrderForm/OrderForm";
import { closeModal } from "@/helpers/modalActions";

const Modal = () => {
  const { modalFrame, setModalFrame } = useContext(SiteContext);
  const { backDrop, setBackDrop } = useContext(SiteContext);

  const closeModalFrame = (e) => {
    if (e.target.id === "backDrop") {
      closeModal(setBackDrop, setModalFrame);
    } else {
      return;
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined" && modalFrame) {
      document.body.style.overflowY = "hidden";
    }

    return () => {
      document.body.style.overflowY = "scroll";
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