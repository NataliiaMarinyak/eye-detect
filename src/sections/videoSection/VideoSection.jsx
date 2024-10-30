"use client";
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import OpenModalBtn from '@/components/Buttons/OpenModalBtn/OpenModalBtn';
import { getCityData } from '@/helpers/getCityData';
import { currentLanguages } from "@/data/languages";
import styles from './VideoSection.module.scss';


const VideoSection = () => {
    const { i18n } = useTranslation();
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => setIsLoading(false), []);

    const [isVideoLoaded, setIsVideoLoaded] = useState(false);
    const { slug } = useParams();
    const data = getCityData(slug);

    function getYouTubeId(url) {
        const regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
        const match = url.match(regExp);
        return match && match[7].length === 11 ? match[7] : null;
    }

    const videoIdName = getYouTubeId(data?.videoLink)

    return (
        <section>
            <div className={`container ${styles.container}`}>
                <div className={styles.videoWrapper}>
                    {!isVideoLoaded ? (
                        <div className={styles.previewContainer} onClick={() => setIsVideoLoaded(true)}>
                            {!isLoading && <Image
                                className={styles.previewImage}
                                loading='lazy'
                                src={`https://img.youtube.com/vi/${videoIdName}/hqdefault.jpg`}
                                alt={i18n.language === currentLanguages.UA ? data?.mainTitle : data?.mainTitleRus}
                                sizes="(max-width: 1023px) 100vw, 960px"
                                width={960}
                                height={494}
                            />}
                            <div className={styles.playIcon}></div>
                        </div>
                    ) : (
                        <iframe
                            className={styles.video}
                            loading='lazy'
                            src={data?.videoLink}
                            allowFullScreen
                            title={i18n.language === currentLanguages.UA ? data?.mainTitle : data?.mainTitleRus}
                        />
                    )}
                </div>
                <OpenModalBtn />
            </div>
        </section>
    );
};

export default VideoSection;
