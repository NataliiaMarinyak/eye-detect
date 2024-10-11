import styles from './HomeFAQSection.module.scss';


const HomeFAQSection = () => {
  return <section>
    <div className={`container ${styles.container}`}>
      <h2 className={styles.title}>Часті питання про детектор брехні EyeDetect</h2>
    </div>
  </section>;
};


export default HomeFAQSection;