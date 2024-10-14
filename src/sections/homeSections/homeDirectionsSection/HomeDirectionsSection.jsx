import OpenModalBtn from "@/components/Buttons/OpenModalBtn/OpenModalBtn";
import { directionsData } from "@/data/directionsData";
import styles from './HomeDirectionsSection.module.scss';


const HomeDirectionsSection = () => {
  return <section>
    <div className={`container ${styles.container}`}>
      <h2 className={styles.title}>Які питання допомагає вирішити детектор брехні EyeDetect?</h2>
      <ul className={styles.directionsWrapper}>
        {directionsData.map(direction => <li key={direction.title} className={styles.directionItem}>
          <div className={styles.iconWrapper}>
            <svg className={styles.icon}>
              <use href={direction.href} />
            </svg>
          </div>
          <h3 className={styles.subTitle}>{direction.title}</h3>
          <p className={styles.description}>{direction.description}</p>
        </li>)}
      </ul>
      <OpenModalBtn />
    </div>
  </section>;
};


export default HomeDirectionsSection;