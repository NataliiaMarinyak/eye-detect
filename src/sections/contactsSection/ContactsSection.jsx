"use client";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import Image from "next/image";
import OpenModalBtn from "@/components/Buttons/OpenModalBtn/OpenModalBtn";
import ContactsSocMedia from "./ContactsSocMedia";
import { currentLanguages } from "@/data/languages";
import { addressData } from "@/data/addressData";
import styles from "./ContactsSection.module.scss";


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
        <h1>{!isLoading && t("ContactsSection.Title")}</h1>
        <div className={styles.contentWrapp}>
          <ContactsSocMedia
            className={styles.socMedia}
            itemStyles={styles.socMediaItem}
          />
          <div className={styles.mapWrapp}>
            {isMobile && <div
              className={styles.previewContainer}
              onClick={handleMobileMapClick}
            >
              <Image
                className={styles.previewImage}
                src="/images/map-preview-mobile.webp"
                alt="Google карта"
                sizes="(max-width: 569px) 100vw"
                width={570}
                height={300}
                priority={true} />
            </div>
            }

            {!isMobile && !isLoading && <iframe
              className={styles.map}
              src={addressData.iframeSrcLink}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title={
                i18n.language === currentLanguages.UA
                  ? addressData.textAddress
                  : addressData.textAddressRus
              }
            ></iframe>
            }

            <a
              href={addressData.hrefLink}
              aria-label={
                !isLoading && i18n.language === currentLanguages.UA
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
              {!isLoading && i18n.language === currentLanguages.UA
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