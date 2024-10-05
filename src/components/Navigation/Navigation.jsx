import React from "react";
import styles from "./Navigation.module.scss";
import { navLinks } from "../../data/navigation";
import Link from "next/link";

const Navigation = ({ className }) => {
  return (
    <nav className={`${className}`}>
      {navLinks.map((el) => {
        return (
          <Link key={el.title} href={el.href}>
            {el.title}
          </Link>
        );
      })}
    </nav>
  );
};

export default Navigation;
