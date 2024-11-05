"use client";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import PryvacyPolicySectionUa from "./PryvacyPolicySectionUa";
import PryvacyPolicySectionRu from "./PryvacyPolicySectionRu";
import { languagesData } from "@/data/languagesData";

const PryvacyPolicySection = () => {
  const { i18n } = useTranslation();
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => setIsLoading(false), []);

  // const isUa = !isLoading && (i18n.language === languagesData.UA);

  return <>{!isLoading && (i18n.language === languagesData.UA ? <PryvacyPolicySectionUa /> : <PryvacyPolicySectionRu />)}</>;
};

export default PryvacyPolicySection;
