import React from "react";
import Link from "next/link";
import { footerSocLinks } from "@/data/socialMediaData";
import styles from "../Footer.module.scss";

const FooterSocMedia = ({ className, itemStyles }) => {
  return (
    <address className={className}>
      {footerSocLinks.map((el) => {
        return (
          <Link
            key={el.name}
            href={el.href}
            aria-label={el.name}
            target="_blank"
            className={`${itemStyles} ${styles[el.name]}`}
          >
            <svg>
              <use href={el.icon}></use>
            </svg>
            <span>{el.contact}</span>
          </Link>
        );
      })}
    </address>
  );
};

export default FooterSocMedia;
