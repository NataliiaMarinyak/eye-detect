"use client";

import React from "react";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import Link from "next/link";

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
