import React from "react";
import { socialMediaData } from "@/data/socialMediaData";
import Link from "next/link";
import styles from "../Footer.module.scss";

const FooterSocMedia = ({ className, itemStyles }) => {
  return (
    <address className={className}>
      {socialMediaData.map((el) => {
        return (
          <Link
            key={el.name}
            href={el.href}
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
