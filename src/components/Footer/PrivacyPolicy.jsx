// "use client";
// import React from "react";
// import { useEffect, useState } from "react";
import Link from "next/link";
// import { useTranslation } from "react-i18next";
import { i18n } from "@/dictionaries/i18n.config";

const PrivacyPolicy = ({ className, lang, dictionary }) => {
  // const { t } = useTranslation();
  // const [isLoading, setIsLoading] = useState(true);
  // useEffect(() => setIsLoading(false), []);

  const isDefaultLang = lang === i18n.defaultLocale;
  const path = isDefaultLang ? "" : `/${lang}`;

  return (
    <Link href={`${path}/privacy-policy`} className={className}>
      {/* {t("Footer.Policy")} */}
      {dictionary.footer.policy}
    </Link>
  );
};

export default PrivacyPolicy;

// "use client";
// import React from "react";
// import { useEffect, useState } from "react";
// import Link from "next/link";
// import { useTranslation } from "react-i18next";

// const PrivacyPolicy = ({ className }) => {
//   const { t } = useTranslation();
//   const [isLoading, setIsLoading] = useState(true);
//   useEffect(() => setIsLoading(false), []);

//   return (
//     <>
//       {!isLoading && (
//         <Link href="/privacy-policy" className={className}>
//           {t("Footer.Policy")}
//         </Link>
//       )}
//     </>
//   );
// };

// export default PrivacyPolicy;
