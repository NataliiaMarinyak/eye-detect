import Image from "next/image";
import React from "react";
import styles from "./Logo.module.scss";

const Logo = () => {
  return (
    <div className={styles.logowrapp}>
      <Image src="/images/Logo.png" fill alt="Eye-detect" />
    </div>
  );
};

export default Logo;
