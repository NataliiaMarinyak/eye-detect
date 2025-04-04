// "use client";
// import React, { useEffect, useState } from "react";
import Link from "next/link";
// import { useTranslation } from "react-i18next";
// import CustomLink from "@/components/CustomLink/CustomLink";
import { i18n } from "@/dictionaries/i18n.config";
import { headerSocLinks, phone } from "@/data/socialMediaData";
import styles from "./HeaderTop.module.scss";
// import { usePathname } from "next/navigation";

const HeaderTop = ({ dictionary, lang }) => {
  // const pathname = usePathname();
  // const { t } = useTranslation();

  // const [isLoading, setIsLoading] = useState(true);

  // useEffect(() => setIsLoading(false), []);

  return (
    <div className={`${styles.headerTopWrapper}`}>
      <div className={`container ${styles.headerTop}`}>
        <Link
          href={phone.href}
          aria-label={phone.name}
          className={`${styles.link} ${styles.phone}`}
        >
          <svg>
            <use href={phone.icon}></use>
          </svg>
          {phone.contact}
        </Link>

        {/* {!isLoading && (
        <Link href={`${pathname}/locations`} className={styles.link}>
          <svg>
            <use href="/sprite.svg#icon-map_pin"></use>
          </svg>
          {t("Header.TopTitle")}
           {dictionary.header.topTitle}
        </Link>
        )} */}

        <Link
          href={
            lang === i18n.defaultLocale ? "/locations" : `/${lang}/locations`
          }
          className={styles.link}
        >
          <svg>
            <use
              // href={
              //   lang === i18n.defaultLocale
              //     ? "/sprite.svg#icon-map_pin"
              //     : "/ru/sprite.svg#icon-map_pin"
              // }
              href="/sprite.svg#icon-map_pin"
            ></use>
          </svg>
          {dictionary.header.topTitle}
        </Link>

        <ul className={styles.socLinks}>
          {headerSocLinks.map((el) => {
            return (
              <li key={el.name} className={styles[el.name]}>
                <Link href={el.href} aria-label={el.name} target="_blank">
                  <svg>
                    <use href={el.icon}></use>
                  </svg>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default HeaderTop;
