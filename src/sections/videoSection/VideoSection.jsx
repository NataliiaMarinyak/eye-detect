import OpenModalBtn from '@/components/Buttons/OpenModalBtn/OpenModalBtn';
import styles from './VideoSection.module.scss';


const VideoSection = ({ data }) => {
    return (
        <section className={styles.section}>
            <div className={`container ${styles.container}`}>
                <h1 className={styles.title}>{data?.mainTitle}</h1>

                <div className={styles.videoWrapper}>
                    <iframe
                        className={styles.video}
                        src={data?.videoLink}
                        frameBorder="0"
                        allowFullScreen
                        title={data?.mainTitle}
                    />
                </div>

                <OpenModalBtn />
            </div>
        </section>
    )
}


export default VideoSection