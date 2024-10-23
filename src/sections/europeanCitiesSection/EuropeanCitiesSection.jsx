"use client";
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import Link from 'next/link';
import OpenModalBtn from '@/components/Buttons/OpenModalBtn/OpenModalBtn';
import { europeanCitiesData } from "@/data/europeanCitiesData";
import { currentLanguages } from "@/data/languages";
import styles from './EuropeanCitiesSection.module.scss';


const EuropeanCitiesSection = () => {
    const { t, i18n } = useTranslation();
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => setIsLoading(false), []);


    return (
        <section className={styles.section}>
            <div className={`container ${styles.container}`}>
                {!isLoading && <h2 className={styles.title}>{t('EuropeanCitiesSection.Title')}</h2>}
                <ul className={styles.locationsWrapper}>
                    {europeanCitiesData.map((item) => <li
                        key={item.slug}
                        className={styles.locationItem}
                    >
                        {!isLoading && <Link
                            href={`/locations/${item.slug}`}
                            className={styles.locationLink}
                        >
                            <p className={styles.country}>{i18n.language === currentLanguages.UA
                                ? item.country : item.countryRus}</p>
                            <p className={styles.city}>{i18n.language === currentLanguages.UA
                                ? item.city : item.cityRus}</p>
                        </Link>}
                    </li>)}
                </ul>
                <OpenModalBtn customBtn={styles.modalBtn} />
            </div>
        </section>
    )
}


export default EuropeanCitiesSection