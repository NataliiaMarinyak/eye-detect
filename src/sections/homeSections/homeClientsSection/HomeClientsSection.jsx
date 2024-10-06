import ButtonLink from '@/components/Buttons/ButtonLink/ButtonLink';
import styles from './HomeClientsSection.module.scss';
import Image from 'next/image';


const HomeClientsSection = () => {
  return <section>
    <div className={`container ${styles.container}`}>
      <h2 className={styles.title}>Більше 500 клієнтів EyeDetect в 40 країнах</h2>
      <Image
        width={960}
        height={321}
        src='/images/clients.webp'
        alt="Клієнти EyeDetect" />
      {/* href='/contacts' must be changed */}
      <ButtonLink href='/contacts' title="Замовити консультацію" />
    </div>
  </section>;
};

export default HomeClientsSection;
