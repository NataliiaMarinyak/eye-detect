// "use client";
// import { useEffect, useState } from 'react';
// import { useTranslation } from 'react-i18next';
// import { useParams } from 'next/navigation';
// import OpenModalBtn from '@/components/Buttons/OpenModalBtn/OpenModalBtn';
// import { getCityData } from '@/helpers/getCityData';
// import { currentLanguages } from "@/data/languages";
// import styles from './VideoSection.module.scss';
// import Image from 'next/image';


// const VideoSection = () => {
//     const { i18n } = useTranslation();
//     const [isLoading, setIsLoading] = useState(true);
//     useEffect(() => setIsLoading(false), []);

//     const { slug } = useParams();

//     const data = getCityData(slug);

//     // Допоміжна функція для отримання YouTube ID з URL
// function getYouTubeId(url) {
//     const regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
//     const match = url.match(regExp);
//     return match && match[7].length === 11 ? match[7] : null;
// }

//     return (
//         <section>
//             <div className={`container ${styles.container}`}>
//                 <div className={styles.videoWrapper}>
//                     {!isLoading && <iframe
//                         className={styles.video}
//                         src={data?.videoLink}
//                         // frameBorder="0"
//                         allowFullScreen
//                         title={i18n.language === currentLanguages.UA
//                             ? data?.mainTitle : data?.mainTitleRus}
//                     />}
//                 </div>

//                 <OpenModalBtn />
//             </div>
//         </section >
//     )
// }


// export default VideoSection


// ============================================================================

"use client";
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'next/navigation';
import OpenModalBtn from '@/components/Buttons/OpenModalBtn/OpenModalBtn';
import { getCityData } from '@/helpers/getCityData';
import { currentLanguages } from "@/data/languages";
import styles from './VideoSection.module.scss';
import Image from 'next/image';

const VideoSection = () => {
    const { i18n } = useTranslation();
    const [isVideoLoaded, setIsVideoLoaded] = useState(false);  // Зміна стану для завантаження відео
    const { slug } = useParams();
    const data = getCityData(slug);

    // Допоміжна функція для отримання YouTube ID з URL
    function getYouTubeId(url) {
        const regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
        const match = url.match(regExp);
        return match && match[7].length === 11 ? match[7] : null;
    }

    return (
        <section>
            <div className={`container ${styles.container}`}>
                <div className={styles.videoWrapper}>
                    {!isVideoLoaded ? (
                        <div className={styles.previewContainer} onClick={() => setIsVideoLoaded(true)}>
                            <Image
                                className={styles.previewImage}
                                loading='lazy'
                                src={`https://img.youtube.com/vi/${getYouTubeId(data?.videoLink)}/hqdefault.jpg`}
                                alt={i18n.language === currentLanguages.UA ? data?.mainTitle : data?.mainTitleRus}
                                sizes="(max-width: 1023px) 100vw, 960px"
                                width={960}
                                height={494}
                            />
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
