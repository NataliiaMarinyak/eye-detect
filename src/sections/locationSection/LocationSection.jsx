"use client";
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import OpenModalBtn from '@/components/Buttons/OpenModalBtn/OpenModalBtn';
import { currentLanguages } from "@/data/languages";
import { addressData } from '@/data/addressData';
import styles from './LocationSection.module.scss';


const LocationSection = () => {
    const { t, i18n } = useTranslation();
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => setIsLoading(false), []);


    return (
        <section className={styles.section}>
            <div className={`container ${styles.container}`}>
                <h1 className={styles.title}
                >{!isLoading && t('LocationSection.Title')}</h1>

                <div className={styles.mapWrapper}>
                    {!isLoading && <iframe
                        className={styles.map}
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2572.9463559329574!2d24.02055367655992!3d49.843465471482666!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473add739d964237%3A0x45b9239b44ba1e3b!2z0LLRg9C70LjRhtGPINCU0LzQuNGC0YDQsCDQlNCw0L3QuNC70LjRiNC40L3QsCwgNiwg0JvRjNCy0ZbQsiwg0JvRjNCy0ZbQstGB0YzQutCwINC-0LHQu9Cw0YHRgtGMLCA3OTAwMA!5e0!3m2!1suk!2sua!4v1728562646496!5m2!1suk!2sua"
                        width={280}
                        height={108}
                        allowFullScreen=""
                        title={!isLoading && i18n.language === currentLanguages.UA
                            ? "Адреса тестування EyeDetect " : "Адрес тестирования EyeDetect"}
                        priority="true" referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>}
                </div>

                <a
                    href={addressData.hrefLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.locationLink}
                >
                    <svg className={styles.icon}>
                        <use href="/sprite.svg#icon-map_pin"></use>
                    </svg>
                    {!isLoading && i18n.language === currentLanguages.UA
                        ? addressData.textAddress
                        : addressData.textAddressRus}
                </a>

                <OpenModalBtn />
            </div>
        </section>
    )
}


export default LocationSection