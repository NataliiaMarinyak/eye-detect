"use client";
// import { useEffect, useState } from "react";
// import { useTranslation } from "react-i18next";
import { useModalActions } from "@/hooks/modalActions";
import styles from "./OpenModalBtn.module.scss";

const OpenModalBtn = ({ customClass, title }) => {
  // const { t } = useTranslation();
  // const [isLoading, setIsLoading] = useState(true);
  // useEffect(() => setIsLoading(false), []);

  const { openModal } = useModalActions();

  return (
    <button
      className={styles.btn + " " + customClass}
      onClick={openModal}
      type="button"
    >
      {/* {!isLoading && t("Buttons.OrderConsultation")} */}
      {title}
      {/* передавать пропсом title={dictionary.buttons.orderConsultation} */}
    </button>
  );
};

export default OpenModalBtn;

// Версия Вови

// "use client";
// import { useEffect, useState } from "react";
// import { useTranslation } from "react-i18next";
// import { useModalActions } from "@/hooks/modalActions";
// import styles from "./OpenModalBtn.module.scss";

// const OpenModalBtn = ({ customClass }) => {
//   const { t } = useTranslation();
//   const [isLoading, setIsLoading] = useState(true);
//   useEffect(() => setIsLoading(false), []);

//   const { openModal } = useModalActions();

//   return (
//     <button
//       className={styles.btn + " " + customClass}
//       onClick={openModal}
//       type="button"
//     >
//       {!isLoading && t("Buttons.OrderConsultation")}
//     </button>
//   );
// };

// export default OpenModalBtn;
