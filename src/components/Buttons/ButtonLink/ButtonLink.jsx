"use client";
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import Link from "next/link";
import styles from "./ButtonLink.module.scss";


const ButtonLink = ({ customBtn, href, id }) => {
  const { t } = useTranslation();
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => setIsLoading(false), []);


  return (
    <Link href={href} className={styles.btn + " " + customBtn} id={id}>
      {!isLoading && t('Buttons.MoreDetails')}
    </Link>
  );
};


export default ButtonLink;