import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "./Logo.module.scss";

const Logo = ({ className }) => {
  return (
    <Link href="/" className={`${styles.logowrapp} ${className}`}>
      <Image src="/images/Logo.png" fill sizes="33vw" alt="Eye-detect" />
    </Link>
  );
};

export default Logo;
