"use client";
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import Link from 'next/link';
import OpenModalBtn from '@/components/Buttons/OpenModalBtn/OpenModalBtn';
import { ukrainianCitiesData } from "@/data/ukrainianCitiesData";
import { languagesData } from "@/data/languagesData";
import styles from './UkrainianCitiesSection.module.scss';


const UkrainianCitiesSection = () => {
    const { t, i18n } = useTranslation();
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => setIsLoading(false), []);


    return (
        <section className={styles.section}>
            <div className={`container ${styles.container}`}>
                <h2 className={styles.title}>{!isLoading && t('UkrainianCitiesSection.Title')}</h2>
                <ul className={styles.citiesWrapper}>
                    {ukrainianCitiesData.map((item) => <li
                        key={item.slug}
                        className={styles.cityItem}
                    >
                        {!isLoading && <Link
                            href={`/locations/${item.slug}`}
                            className={styles.cityLink}
                        >
                            {i18n.language === languagesData.UA
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