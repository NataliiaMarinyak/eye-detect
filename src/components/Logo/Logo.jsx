import React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { i18n } from "@/dictionaries/i18n.config";
import styles from "./Logo.module.scss";

const Logo = ({ className, lang }) => {
  const pathName = usePathname();

  const isDefaultLang = lang === i18n.defaultLocale;
  const path = isDefaultLang ? "" : `${lang}`;

  return (
    <Link
      // href={pathName === "/" ? "#hero" : "/"}
      href={pathName === `/${path}` ? `${path}#hero` : `/${path}`}
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
