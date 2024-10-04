import Link from "next/link";
import React from "react";
import styles from "./HeaderTop.module.scss";
import { phone } from "../../../data/socialMediaData";
import { headerSocLinks } from "../../../data/socialMediaData";

const HeaderTop = () => {
  return (
    <div className={`${styles.headerTopWrapper}`}>
      <div className={`container ${styles.headerTop}`}>
        <Link href={phone.href} className={styles.link}>
          <svg>
            <use href={phone.icon}></use>
          </svg>
          {phone.contact}
        </Link>

        <Link href="/locations" className={styles.link}>
          <svg>
            <use href="./sprite.svg#icon-map_pin"></use>
          </svg>
          виїзд по Україні та Європі
        </Link>

        <ul className={styles.socLinks}>
          {headerSocLinks.map((el) => {
            return (
              <li key={el.name} className={styles[el.name]}>
                <Link href={el.href} target="_blank">
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
