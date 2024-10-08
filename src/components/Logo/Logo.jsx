import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import styles from "./Logo.module.scss";

const Logo = ({ className }) => {
  const pathName = usePathname();

  return (
    <Link
      href={pathName === "/" ? "#hero" : "/"}
      className={`${styles.logowrapp} ${className}`}
    >
      <Image src="/images/Logo.png" fill sizes="33vw" alt="Eye-detect" />
    </Link>
  );
};

export default Logo;
