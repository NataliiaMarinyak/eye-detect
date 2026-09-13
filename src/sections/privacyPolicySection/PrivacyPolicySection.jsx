// "use client";
// import React, { useEffect, useState } from "react";
// import { useTranslation } from "react-i18next";
import PrivacyPolicyUa from "./PrivacyPolicyUa";
import PrivacyPolicyRu from "./PrivacyPolicyRu";
import PrivacyPolicyEn from "./PrivacyPolicyEn";
import { i18n } from "@/dictionaries/i18n.config";
// import { languagesData } from "@/data/languagesData";
import styles from "./PrivacyPolicySection.module.scss";

const PrivacyPolicySection = ({ lang }) => {
  // const { i18n } = useTranslation();
  // const [isLoading, setIsLoading] = useState(true);
  // useEffect(() => setIsLoading(false), []);

  // const isUa = !isLoading && (i18n.language === languagesData.UA);

  return (
    <section className={styles.section}>
      {lang === "ru" ? <PrivacyPolicyRu /> : lang === "en" ? <PrivacyPolicyEn /> : <PrivacyPolicyUa />}
    </section>
  );
};

export default PrivacyPolicySection;
