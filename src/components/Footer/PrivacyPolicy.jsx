"use client";
import React from "react";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useTranslation } from "react-i18next";


const PrivacyPolicy = ({ className }) => {
  const { t } = useTranslation();
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => setIsLoading(false), []);

  return (
    <>
      {!isLoading && (
        <Link href="/privacy-policy" className={className}>
          {t("Footer.Policy")}
        </Link>
      )}
    </>
  );
};


export default PrivacyPolicy;