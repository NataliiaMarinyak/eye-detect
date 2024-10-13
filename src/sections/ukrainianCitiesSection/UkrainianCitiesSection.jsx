import Link from 'next/link';
import OpenModalBtn from '@/components/Buttons/OpenModalBtn/OpenModalBtn';
import { ukrainianCitiesData } from "@/data/ukrainianCitiesData";
import styles from './UkrainianCitiesSection.module.scss';


const UkrainianCitiesSection = () => {


    return (
        <section className={styles.section}>
            <div className={`container ${styles.container}`}>
                <h2 className={styles.title}>Замовити тестування EyeDetect в Україні</h2>
                <ul className={styles.citiesWrapper}>
                    {ukrainianCitiesData.map((item) => <li
                        key={item.slug}
                        className={styles.cityItem}
                    >
                        <Link href={`/locations/${item.slug}`}>{item.city}</Link>
                    </li>)}
                </ul>
                <OpenModalBtn />
            </div>
        </section>
    )
}


export default UkrainianCitiesSection