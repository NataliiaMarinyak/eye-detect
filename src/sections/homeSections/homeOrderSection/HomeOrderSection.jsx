import OrderForm from '@/components/OrderForm/OrderForm';
import styles from './HomeOrderSection.module.scss';


const HomeOrderSection = () => {
  return <section id="order">
    <div className={`container ${styles.container}`}>
      <h2 className={styles.title}>Зв’язатись з нами</h2>
      <div className={styles.infoWrapper}>
        <ul className={styles.infoList}>
          <li className={styles.infoItem}>Для замовлення тестування на поліграфі (детекторі брехні) Eye Detect залиште свої дані у формі, або зверніться до нас за вказаними контактами.</li>
          <li className={styles.infoItem}>Атестований експерт та психолог
            (поліграфолог), кандидат психологічних наук, доцент
            Наталя Мариняк зв’яжеться з Вами найближчим часом</li>
        </ul>
        <address>
          <a className={styles.addressLink} href="https://maps.app.goo.gl/dP8aPY264zdKpEoT6" target="_blank" rel="noopener noreferrer">
            <svg className={styles.icon}>
              <use href={`/sprite.svg#icon-map_pin`} />
            </svg>
            <span>
              Львів, вул. Данилишина 6, оф. 217
            </span>
          </a>
        </address>
      </div>
      <OrderForm />
    </div>
  </section>;
};


export default HomeOrderSection;