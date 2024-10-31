"use client";
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'next/navigation';
import Image from "next/image";
import OpenModalBtn from "@/components/Buttons/OpenModalBtn/OpenModalBtn";
import { getCityData } from '@/helpers/getCityData';
import { currentLanguages } from "@/data/languages";
import styles from './ServicesSection.module.scss';


const ServicesSection = () => {
    const { i18n } = useTranslation();
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => setIsLoading(false), []);

    const { slug } = useParams();

    const data = getCityData(slug);


    return (
        <section className={styles.section}>
            <div className={`container ${styles.container}`}>
                {!isLoading && <h2 className={styles.subTitle}>{i18n.language === currentLanguages.UA
                    ? data?.subTitle : data?.subTitleRus}</h2>}
                <ul className={styles.servicesList}>
                    {data?.services.map((service, index) =>
                        <li key={index} className={styles.serviceItem}>
                            <div className={styles.areaWrapper}>
                                <span className={styles.figure}>{index + 1}</span>
                                {!isLoading && <h3 className={styles.areaTitle}>{i18n.language === currentLanguages.UA
                                    ? service.area : service.areaRus}</h3>}
                            </div>
                            <ul className={styles.directionList}>
                                {service.directions.map((direction) =>
                                    <li
                                        key={direction.title}
                                        className={styles.directionItem}
                                    >
                                        <div className={styles.directionTitleWrapper}>
                                            <svg className={styles.directionIcon}>
                                                <use href={`/sprite.svg#icon-check-mark-in-circle`} />
                                            </svg>
                                            {!isLoading && <p className={styles.directionDescription}>
                                                <span className={styles.directionTitle}>{i18n.language === currentLanguages.UA
                                                    ? direction.title : direction.titleRus}</span> {i18n.language === currentLanguages.UA
                                                        ? direction.description : direction.descriptionRus}
                                            </p>}
                                        </div>
                                        {!isLoading && direction.checks.length !== 0 && <ul className={styles.checksList}>
                                            {i18n.language === currentLanguages.UA
                                                ? direction.checks.map((check, ind) =>
                                                    <li key={ind}>{check}</li>) : direction.checksRus.map((checkRus, ind) =>
                                                        <li key={ind}>{checkRus}</li>)
                                            }
                                        </ul>}
                                    </li>)}
                            </ul>
                            <div className={styles.imgWrapper}>
                                <Image
                                    className={styles.img}
                                    src={service.image}
                                    alt={service.imageAlt}
                                    sizes="(max-width: 1023px) 100vw, 960px"
                                    width={960}
                                    height={494}
                                    loading='lazy'
                                />
                            </div>
                            <OpenModalBtn customBtn={styles.openModalBtn} />
                        </li>)
                    }
                </ul >
            </div>
        </section >
    )
}


export default ServicesSection;