import Link from "next/link";
import styles from "./not-found.module.scss";

// Сторінка 404 для неіснуючих міст, статей і будь-яких адрес.
const NotFound = () => (
  <section className={styles.section}>
    <div className={`container ${styles.inner}`}>
      <p className={styles.code}>404</p>
      <h1 className={styles.title}>Такої сторінки немає</h1>
      <p className={styles.text}>
        Можливо, адресу змінено або ви перейшли за старим посиланням. Оберіть, куди далі.
      </p>
      <ul className={styles.links}>
        <li><Link href="/">Головна</Link></li>
        <li><Link href="/online">Онлайн-тест</Link></li>
        <li><Link href="/locations">Міста</Link></li>
        <li><Link href="/prices">Ціни</Link></li>
        <li><Link href="/contacts">Контакти</Link></li>
      </ul>
    </div>
  </section>
);

export default NotFound;
