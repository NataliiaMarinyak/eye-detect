"use client";
import { useContext } from "react";
import styles from "./OpenModalBtn.module.scss";
import { SiteContext } from "@/context/SiteContext";
import { openModal } from "@/helpers/modalActions";

const OpenModalBtn = ({ customBtn }) => {
  const { setModalFrame } = useContext(SiteContext);
  const { setBackDrop } = useContext(SiteContext);

  //   const openModal = () => {
  //     setModalFrame(true);

  //     setTimeout(() => {
  //       setBackDrop(true);
  //     }, 100);
  //   };

  return (
    <button
      className={styles.btn + " " + customBtn}
      onClick={() => openModal(setModalFrame, setBackDrop)}
      type="button"
    >
      Замовити консультацію
    </button>
  );
};

export default OpenModalBtn;
