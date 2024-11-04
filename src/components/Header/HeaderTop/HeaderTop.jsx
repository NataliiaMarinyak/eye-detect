"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import { headerSocLinks, phone } from "@/data/socialMediaData";
import styles from "./HeaderTop.module.scss";

const HeaderTop = () => {
  const { t } = useTranslation();

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => setIsLoading(false), []);

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

        {!isLoading && (
          <Link href="/locations" className={styles.link}>
            <svg>
              <use href="/sprite.svg#icon-map_pin"></use>
            </svg>
            {t("Header.TopTitle")}
          </Link>
        )}

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
