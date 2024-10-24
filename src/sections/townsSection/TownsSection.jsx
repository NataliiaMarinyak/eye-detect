"use client";
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { currentLanguages } from "@/data/languages";
import styles from './TownsSection.module.scss';


const TownsSection = ({ data }) => {
    const { i18n } = useTranslation();
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => setIsLoading(false), []);


    return (
        <section>
            <div className={`container ${styles.container}`}>
                {!isLoading && <h2 className={styles.title}>{i18n.language === currentLanguages.UA
                    ? data?.townsInfo.title : data?.townsInfo.titleRus}</h2>}
                {!isLoading && <p className={styles.preface}>{i18n.language === currentLanguages.UA
                    ? data?.townsInfo.preface : data?.townsInfo.prefaceRus}</p>}
                {!isLoading && <p className={styles.towns}>{i18n.language === currentLanguages.UA
                    ? data?.townsInfo.towns : data?.townsInfo.townsRus}</p>}
                {!isLoading && <p className={styles.afterword}>{i18n.language === currentLanguages.UA
                    ? data?.townsInfo.afterword : data?.townsInfo.afterwordRus}</p>}
            </div>
        </section >
    )
}


export default TownsSection