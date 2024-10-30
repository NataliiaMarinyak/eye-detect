// "use client";
// import { useEffect, useState } from "react";
// import { useTranslation } from "react-i18next";
// import Link from "next/link";
// import OpenModalBtn from "@/components/Buttons/OpenModalBtn/OpenModalBtn";
// import ContactsSocMedia from "./ContactsSocMedia";
// import { currentLanguages } from "@/data/languages";
// import { addressData } from "@/data/addressData";
// import styles from "./ContactsSection.module.scss";

// const ContactsSection = () => {
//   const { t, i18n } = useTranslation();
//   const [isLoading, setIsLoading] = useState(true);
//   useEffect(() => setIsLoading(false), []);

//   return (
//     <section className={styles.section}>
//       <div className={`container ${styles.container}`}>
//         {!isLoading && <h1>{t("ContactsSection.Title")}</h1>}
//         <div className={styles.contentWrapp}>
//           <ContactsSocMedia
//             className={styles.socMedia}
//             itemStyles={styles.socMediaItem}
//           />
//           <div className={styles.mapWrapp}>
//             <iframe
//               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2572.9463559329574!2d24.02055367655992!3d49.843465471482666!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473add739d964237%3A0x45b9239b44ba1e3b!2z0LLRg9C70LjRhtGPINCU0LzQuNGC0YDQsCDQlNCw0L3QuNC70LjRiNC40L3QsCwgNiwg0JvRjNCy0ZbQsiwg0JvRjNCy0ZbQstGB0YzQutCwINC-0LHQu9Cw0YHRgtGMLCA3OTAwMA!5e0!3m2!1suk!2sua!4v1728562646496!5m2!1suk!2sua"
//               allowFullScreen=""
//               loading="lazy"
//               referrerPolicy="no-referrer-when-downgrade"
//               title={
//                 i18n.language === currentLanguages.UA
//                   ? addressData.textAddress
//                   : addressData.textAddressRus
//               }
//             ></iframe>
//             {!isLoading && (
//               <a
//                 href={addressData.hrefLink}
//                 aria-label={
//                   i18n.language === currentLanguages.UA
//                     ? addressData.textAddress
//                     : addressData.textAddressRus
//                 }
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className={styles.locationLink}
//               >
//                 <svg className={styles.locationIcon}>
//                   <use href="/sprite.svg#icon-map_pin"></use>
//                 </svg>
//                 {i18n.language === currentLanguages.UA
//                   ? addressData.textAddress
//                   : addressData.textAddressRus}
//               </a>
//             )}
//           </div>
//         </div>
//         <OpenModalBtn />
//       </div>
//     </section>
//   );
// };

// export default ContactsSection;


// ===============================================інший варіант

"use client";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import OpenModalBtn from "@/components/Buttons/OpenModalBtn/OpenModalBtn";
import ContactsSocMedia from "./ContactsSocMedia";
import { currentLanguages } from "@/data/languages";
import { addressData } from "@/data/addressData";
import styles from "./ContactsSection.module.scss";
import Image from "next/image";

const ContactsSection = () => {
  const { t, i18n } = useTranslation();
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => setIsLoading(false), []);

  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 570);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleMobileMapClick = () => {
    window.open(addressData.hrefLink, "_blank");
  };

  return (
    <section className={styles.section}>
      <div className={`container ${styles.container}`}>
        {!isLoading && <h1>{t("ContactsSection.Title")}</h1>}
        <div className={styles.contentWrapp}>
          <ContactsSocMedia
            className={styles.socMedia}
            itemStyles={styles.socMediaItem}
          />
          <div className={styles.mapWrapp}>
            {isMobile ? (
              <div
                className={styles.previewContainer}
                onClick={handleMobileMapClick}
              >
                <Image
                  className={styles.previewImage}
                  src="/images/map-preview-mobile.webp"
                  alt={
                    i18n.language === currentLanguages.UA
                      ? addressData.textAddress
                      : addressData.textAddressRus
                  }
                  sizes="(max-width: 569px) 100vw"
                  width={570}
                  height={300}
                  loading="eager"
                />
              </div>
            ) : (
              <iframe
                className={styles.map}
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2572.9463559329574!2d24.02055367655992!3d49.843465471482666!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473add739d964237%3A0x45b9239b44ba1e3b!2z0LLRg9C70LjRhtGPINCU0LzQuNGC0YDQsCDQlNCw0L3QuNC70LjRiNC40L3QsCwgNiwg0JvRjNCy0ZbQsiwg0JvRjNCy0ZbQstGB0YzQutCwINC-0LHQu9Cw0YHRgtGMLCA3OTAwMA!5e0!3m2!1suk!2sua!4v1728562646496!5m2!1suk!2sua"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={
                  i18n.language === currentLanguages.UA
                    ? addressData.textAddress
                    : addressData.textAddressRus
                }
              ></iframe>
            )
            }
            <a
              href={addressData.hrefLink}
              aria-label={
                i18n.language === currentLanguages.UA
                  ? addressData.textAddress
                  : addressData.textAddressRus
              }
              target="_blank"
              rel="noopener noreferrer"
              className={styles.locationLink}
            >
              <svg className={styles.locationIcon}>
                <use href="/sprite.svg#icon-map_pin"></use>
              </svg>
              {i18n.language === currentLanguages.UA
                ? addressData.textAddress
                : addressData.textAddressRus}
            </a>
          </div>
        </div>
        <OpenModalBtn />
      </div>
    </section>
  );
};

export default ContactsSection;

