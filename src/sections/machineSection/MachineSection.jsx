"use client";
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import OpenModalBtn from '@/components/Buttons/OpenModalBtn/OpenModalBtn';
import { getCityData } from '@/helpers/getCityData';
import { languagesData } from "@/data/languagesData";
import styles from './MachineSection.module.scss';


const MachineSection = () => {
    const { i18n } = useTranslation();
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => setIsLoading(false), []);

    const { slug } = useParams();

    const data = getCityData(slug);


    return (
        <section className={styles.section}>
            <div className={`container ${styles.container}`}>
                <h1 className={styles.title}>{!isLoading && i18n.language === languagesData.UA
                    ? data?.mainTitle : data?.mainTitleRus}</h1>

                <div className={styles.imgWrapper}>
                    <Image
                        className={styles.img}
                        src="/images/machine.webp"
                        alt="Тест EyeDetect"
                        sizes="(max-width: 1023px) 100vw, 960px"
                        width={960}
                        height={494}
                        priority={true} />
                </div>

                <OpenModalBtn />
            </div>
        </section >
    )
}


export default MachineSection