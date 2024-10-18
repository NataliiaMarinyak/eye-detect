import Image from 'next/image';
import OpenModalBtn from '@/components/Buttons/OpenModalBtn/OpenModalBtn';
import styles from './HomeClientsSection.module.scss';


const HomeClientsSection = () => {
  return <section>
    <div className={`container ${styles.container}`}>
      <h2 className={styles.title}>Детектор брехні EyeDetect: 500+ задоволених клієнтів у 40 країнах</h2>
      <div className={styles.imgWrapper}>
        <Image
          className={styles.img}
          src='/images/clients.webp'
          alt="Клієнти EyeDetect"
          sizes="(max-width: 1023px) 100vw, 960px"
          fill
        />
      </div>
      <OpenModalBtn />
    </div>
  </section>;
};

export default HomeClientsSection;
