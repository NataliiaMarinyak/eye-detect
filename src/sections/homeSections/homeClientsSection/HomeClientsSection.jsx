import Image from 'next/image';
import ButtonLink from '@/components/Buttons/ButtonLink/ButtonLink';
import styles from './HomeClientsSection.module.scss';


const HomeClientsSection = () => {
  return <section>
    <div className={`container ${styles.container}`}>
      <h2 className={styles.title}>Більше 500 клієнтів EyeDetect в 40 країнах</h2>
      <div className={styles.imgWrapper}>
        <Image
          className={styles.img}
          src='/images/clients.webp'
          alt="Клієнти EyeDetect"
          sizes="100vw"
          fill
        />
      </div>
      {/* href='/contacts' must be changed */}
      <ButtonLink href='/contacts' title="Замовити консультацію" />
    </div>
  </section>;
};

export default HomeClientsSection;
