import Image from "next/image";
import OpenModalBtn from "@/components/Buttons/OpenModalBtn/OpenModalBtn";
import styles from './ServicesSection.module.scss';


const ServicesSection = ({ data }) => {


    return (
        <section>
            <ul className={`container ${styles.container}`}>
                {data?.services.map((service, index) =>
                    <li key={index} className={styles.serviceItem}>
                        <div className={styles.areaWrapper}>
                            <svg className={styles.areaIcon}>
                                <use href={`/sprite.svg#icon-area-${index}`} />
                            </svg>
                            <h3 className={styles.areaTitle}>{service.area}</h3>
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
                                        <p className={styles.directionDescription}>
                                            <span className={styles.directionTitle}>{direction.title}</span> {direction.description}
                                        </p>
                                    </div>
                                    {direction.checks.length !== 0 && <ul className={styles.checksList}>
                                        {direction.checks.map((check, ind) =>
                                            <li key={ind}>{check}</li>)
                                        }
                                    </ul>}
                                </li>)}
                        </ul>
                        <div className={styles.imgWrapper}>
                            <Image
                                className={styles.img}
                                src={service.image}
                                alt={service.imageAlt}
                                sizes="100vw"
                                fill
                            />
                        </div>
                        <OpenModalBtn customBtn={styles.openModalBtn} />
                    </li>)
                }
            </ul >
        </section >
    )
}


export default ServicesSection