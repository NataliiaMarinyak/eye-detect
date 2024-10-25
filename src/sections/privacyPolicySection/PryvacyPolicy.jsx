"use client";

import React, { useEffect, useState } from "react";
import styles from "./PryvacyPolicy.module.scss";
import PryvacyPolicySectionUa from "./PryvacyPolicySectionUa";
import { useTranslation } from "react-i18next";
import PryvacyPolicySectionRu from "./PryvacyPolicySectionRu";
import { currentLanguages } from "@/data/languages";

const PryvacyPolicySection = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => setIsLoading(false), []);

  const { i18n } = useTranslation();

  const isUa = !isLoading && i18n.language === currentLanguages.UA;

  return <>{isUa ? <PryvacyPolicySectionUa /> : <PryvacyPolicySectionRu />}</>;
};

export default PryvacyPolicySection;
