"use client";
import { useContext, useEffect, useState } from "react";
import { useTranslation } from 'react-i18next';
import styles from "./OpenModalBtn.module.scss";
import { SiteContext } from "@/context/SiteContext";
import { openModal } from "@/helpers/modalActions";


const OpenModalBtn = ({ customBtn }) => {
  const { t } = useTranslation();
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => setIsLoading(false), []);

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
      {!isLoading && t('Buttons.OrderConsultation')}
    </button>
  );
};

export default OpenModalBtn;
