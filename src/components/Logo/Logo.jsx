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
      <Image
        src="/images/Logo.png"
        width={175}
        height={32}
        sizes="33vw"
        alt="Eye-detect"
        loading="eager"
      />
    </Link>
  );
};

export default Logo;
