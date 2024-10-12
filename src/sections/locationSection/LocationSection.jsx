import Link from 'next/link';
import OpenModalBtn from '@/components/Buttons/OpenModalBtn/OpenModalBtn';
import styles from './LocationSection.module.scss';


const LocationSection = () => {
    return (
        <section className={styles.section}>
            <div className={`container ${styles.container}`}>
                <h1 className={styles.title}>Тестування на поліграфі EyeDetect в Україні та Європі</h1>

                <div className={styles.mapWrapper}>
                    <iframe
                        className={styles.map}
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2572.9463559329574!2d24.02055367655992!3d49.843465471482666!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473add739d964237%3A0x45b9239b44ba1e3b!2z0LLRg9C70LjRhtGPINCU0LzQuNGC0YDQsCDQlNCw0L3QuNC70LjRiNC40L3QsCwgNiwg0JvRjNCy0ZbQsiwg0JvRjNCy0ZbQstGB0YzQutCwINC-0LHQu9Cw0YHRgtGMLCA3OTAwMA!5e0!3m2!1suk!2sua!4v1728562646496!5m2!1suk!2sua"
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>

                <Link
                    href="https://maps.app.goo.gl/pziDUUpQtqttVmKC7"
                    target="_blank"
                    className={styles.locationLink}
                >
                    <svg className={styles.icon}>
                        <use href="./sprite.svg#icon-map_pin"></use>
                    </svg>
                    Львів, вул. Данилишина 6, оф. 217
                </Link>

                <OpenModalBtn />
            </div>
        </section>
    )
}


export default LocationSection