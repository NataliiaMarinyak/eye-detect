import Image from "next/image";
import OpenModalBtn from "@/components/Buttons/OpenModalBtn/OpenModalBtn";
import styles from './ServicesSection.module.scss';


const ServicesSection = ({ data }) => {


    return (
        <section>
            <div className={`container ${styles.container}`}>
                <h2 className={styles.subTitle}>{data?.subTitle}</h2>
                <ul className={styles.servicesList}>
                    {data?.services.map((service, index) =>
                        <li key={index} className={styles.serviceItem}>
                            <div className={styles.areaWrapper}>
                                <span className={styles.figure}>{index + 1}</span>
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
                                    sizes="(max-width: 1023px) 100vw, 960px"
                                    fill
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


export default ServicesSection