import React from "react";
import { contactsSocMedData } from "@/data/socialMediaData";
import Link from "next/link";
import styles from "./ContactsSection.module.scss";

const ContactsSocMedia = ({ className, itemStyles }) => {
  return (
    <address className={className}>
      {contactsSocMedData.map((el, i) => {
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

export default ContactsSocMedia;
