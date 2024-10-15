import Link from 'next/link';
import OpenModalBtn from '@/components/Buttons/OpenModalBtn/OpenModalBtn';
import { europeanCitiesData } from "@/data/europeanCitiesData";
import styles from './EuropeanCitiesSection.module.scss';


const EuropeanCitiesSection = () => {

    return (
        <section className={styles.section}>
            <div className={`container ${styles.container}`}>
                <h2 className={styles.title}>Перевірка на поліграфі EyeDetect в Європі</h2>
                <ul className={styles.citiesWrapper}>
                    {europeanCitiesData.map((item) => <li
                        key={item.slug}
                        className={styles.cityItem}
                    >
                        <Link
                            href={`/locations/${item.slug}`}
                            className={styles.locationLink}
                        >
                            <p className={styles.country}>{item.country}</p>
                            <p className={styles.city}>{item.city}</p>
                        </Link>
                    </li>)}
                </ul>
                <OpenModalBtn customBtn={styles.modalBtn} />
            </div>
        </section>
    )
}


export default EuropeanCitiesSection