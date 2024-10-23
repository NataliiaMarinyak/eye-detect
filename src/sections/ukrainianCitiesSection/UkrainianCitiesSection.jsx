"use client";
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import Link from 'next/link';
import OpenModalBtn from '@/components/Buttons/OpenModalBtn/OpenModalBtn';
import { ukrainianCitiesData } from "@/data/ukrainianCitiesData";
import { currentLanguages } from "@/data/languages";
import styles from './UkrainianCitiesSection.module.scss';


const UkrainianCitiesSection = () => {
    const { t, i18n } = useTranslation();
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => setIsLoading(false), []);


    return (
        <section className={styles.section}>
            <div className={`container ${styles.container}`}>
                {!isLoading && <h2 className={styles.title}>{t('UkrainianCitiesSection.Title')}</h2>}
                <ul className={styles.citiesWrapper}>
                    {ukrainianCitiesData.map((item) => <li
                        key={item.slug}
                        className={styles.cityItem}
                    >
                        {!isLoading && <Link
                            href={`/locations/${item.slug}`}
                            className={styles.cityLink}
                        >
                            {i18n.language === currentLanguages.UA
                                ? item.city : item.cityRus}
                        </Link>}
                    </li>)}
                </ul>
                <OpenModalBtn />
            </div>
        </section>
    )
}


export default UkrainianCitiesSection