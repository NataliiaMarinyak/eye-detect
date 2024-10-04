import React from "react";
import styles from "./Navigation.module.scss";
import { navLinks } from "../../data/navigation";
import Link from "next/link";

const Navigation = () => {
  return (
    <nav className={styles.nav}>
      {navLinks.map((el) => {
        return (
          <div key={el.title}>
            <Link href={el.href}>{el.title}</Link>
            {/* {el.subMenu ? (
              <nav className={styles.navItemSubmenu}>
                {el.subMenu.map((item, i, arr) => {
                  return (
                    <p key={item.city} href={el.href}>
                      {item.city}
                    </p>
                  );
                })}
              </nav>
            ) : null} */}
            {/* {el.subMenu ? (
              <svg>
                <use href=".s/sprite.svg#icon-nav-arrow"></use>
              </svg>
            ) : null} */}
          </div>
        );
      })}
    </nav>
  );
};

export default Navigation;
