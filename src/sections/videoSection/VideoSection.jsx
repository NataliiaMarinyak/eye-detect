"use client";
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'next/navigation';
import OpenModalBtn from '@/components/Buttons/OpenModalBtn/OpenModalBtn';
import { getCityData } from '@/helpers/getCityData';
import { currentLanguages } from "@/data/languages";
import styles from './VideoSection.module.scss';


const VideoSection = () => {
    const { i18n } = useTranslation();
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => setIsLoading(false), []);

    const { slug } = useParams();

    const data = getCityData(slug);


    return (
        <section className={styles.section}>
            <div className={`container ${styles.container}`}>
                {!isLoading && <h1 className={styles.title}>{i18n.language === currentLanguages.UA
                    ? data?.mainTitle : data?.mainTitleRus}</h1>}

                <div className={styles.videoWrapper}>
                    <iframe
                        className={styles.video}
                        src={data?.videoLink}
                        // frameBorder="0"
                        allowFullScreen
                        title={data?.mainTitle}
                    />
                </div>

                <OpenModalBtn />
            </div>
        </section >
    )
}


export default VideoSection