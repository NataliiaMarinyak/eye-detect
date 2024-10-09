import { advantagesData } from '@/data/advantagesData';
import styles from './HomeAdvantagesSection.module.scss'


const HomeAdvantagesSection = () => {
  return <section>
    <div className={`container ${styles.container}`}>
      <h2 className={styles.title}>Переваги використання EyeDetect</h2>
      <ul className={styles.advantagesWrapper}>
        {advantagesData.map(advantage => <li key={advantage.text} className={styles.advantageItem}>
          <div className={styles.iconWrapper}>
            <svg className={styles.icon}>
              <use href={`/sprite.svg#icon-check-mark-in-circle`} />
            </svg>
          </div>
          <p className={styles.description}>{advantage.text}</p>
        </li>)}
      </ul>
    </div>
  </section>;
};


export default HomeAdvantagesSection;