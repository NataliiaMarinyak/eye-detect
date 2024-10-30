import React from "react";
import Link from "next/link";
import { socialMediaData } from "@/data/socialMediaData";
import styles from "./ContactsSection.module.scss";


const ContactsSocMedia = ({ className, itemStyles }) => {
  return (
    <address className={className}>
      {socialMediaData.map((el, i) => {
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


export default ContactsSocMedia;