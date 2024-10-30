"use client";
import { useEffect, useState } from "react";
import { useTranslation } from 'react-i18next';
import { useModalActions } from "@/hooks/modalActions";
import styles from "./OpenModalBtn.module.scss";


const OpenModalBtn = ({ customBtn }) => {
  const { t } = useTranslation();
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => setIsLoading(false), []);

  const { openModal } = useModalActions();


  return (
    <button
      className={styles.btn + " " + customBtn}
      onClick={openModal}
      type="button"
    >
      {!isLoading && t('Buttons.OrderConsultation')}
    </button>
  );
};


export default OpenModalBtn;