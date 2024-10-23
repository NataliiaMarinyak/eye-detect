"use client";
import styles from "./OpenModalBtn.module.scss";
import { useModalActions } from "@/hooks/modalActions";

const OpenModalBtn = ({ customBtn }) => {
  const { openModal } = useModalActions();

  return (
    <button
      className={styles.btn + " " + customBtn}
      onClick={openModal}
      type="button"
    >
      Замовити консультацію
    </button>
  );
};

export default OpenModalBtn;
