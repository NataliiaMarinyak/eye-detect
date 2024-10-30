"use client";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import PryvacyPolicySectionUa from "./PryvacyPolicySectionUa";
import PryvacyPolicySectionRu from "./PryvacyPolicySectionRu";
import { currentLanguages } from "@/data/languages";


const PryvacyPolicySection = () => {
  const { i18n } = useTranslation();
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => setIsLoading(false), []);

  const isUa = !isLoading && i18n.language === currentLanguages.UA;

  return <>{isUa ? <PryvacyPolicySectionUa /> : <PryvacyPolicySectionRu />}</>;
};


export default PryvacyPolicySection;