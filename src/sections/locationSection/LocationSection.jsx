"use client";
import { useEffect, useState } from "react";
// import { useTranslation } from 'react-i18next';
import Image from "next/image";
import OpenModalBtn from "@/components/Buttons/OpenModalBtn/OpenModalBtn";
// import { languagesData } from "@/data/languagesData";
import { i18n } from "@/dictionaries/i18n.config";
import { addressData } from "@/data/addressData";
import styles from "./LocationSection.module.scss";

const LocationSection = ({ lang, dictionary }) => {
  // const { t, i18n } = useTranslation();
  // const [isLoading, setIsLoading] = useState(true);
  // useEffect(() => setIsLoading(false), []);

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
        <h1 className={styles.title}>{dictionary.locationSection.title}</h1>

        <div className={styles.mapWrapper}>
          {isMobile && (
            <div
              className={styles.previewContainer}
              onClick={handleMobileMapClick}
            >
              <Image
                className={styles.previewImage}
                src="/images/map-preview-mobile.webp"
                alt="Google карта"
                sizes="(max-width: 569px) 100vw"
                width={529}
                height={201}
                priority={true}
              />
            </div>
          )}

          {!isMobile && (
            <iframe
              className={styles.map}
              src={addressData.iframeSrcLink}
              width={280}
              height={108}
              allowFullScreen=""
              title={
                lang === i18n.locales[0]
                  ? addressData.textAddress
                  : addressData.textAddressRus
              }
              loading="eager"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          )}
        </div>

        <a
          href={addressData.hrefLink}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.locationLink}
        >
          <svg className={styles.icon}>
            <use href="/sprite.svg#icon-map_pin"></use>
          </svg>
          {lang === i18n.locales[0]
            ? addressData.textAddress
            : addressData.textAddressRus}
        </a>

        <OpenModalBtn
          customClass=""
          title={dictionary.buttons.orderConsultation}
        />
      </div>
    </section>
  );
};

export default LocationSection;
