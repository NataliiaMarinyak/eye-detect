import styles from './TownsSection.module.scss';


const TownsSection = ({ data }) => {


    return (
        <section>
            <div className={`container ${styles.container}`}>
                <h2 className={styles.title}>{data?.townsInfo.title}</h2>
                <p className={styles.preface}>{data?.townsInfo.preface}</p>
                <p className={styles.towns}>{data?.townsInfo.towns}</p>
                <p className={styles.afterword}>{data?.townsInfo.afterword}</p>
            </div>
        </section >
    )
}


export default TownsSection