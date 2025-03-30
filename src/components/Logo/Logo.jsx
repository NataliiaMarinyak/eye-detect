import React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
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
        sizes="(max-width: 767px) 100px, (max-width: 1023px) 136px, 174px"
        alt="Eye-detect"
        priority={true}
      />
    </Link>
  );
};


export default Logo;