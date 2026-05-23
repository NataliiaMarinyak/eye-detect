import OrderForm from "@/components/OrderForm/OrderForm";
import { addressData } from "@/data/addressData";
import { getLocalizedField } from "@/helpers/getLocalizedField";
import styles from "./HomeOrderSection.module.scss";

const HomeOrderSection = ({ lang, dictionary }) => {
  return (
    <section id="order">
      <div className={`container ${styles.container}`}>
        <h2 className={styles.title}>{dictionary.homeOrderSection.title}</h2>
        <div className={styles.contentWrap}>
          <div className={styles.infoWrapper}>
            <ul className={styles.infoList}>
              <li className={styles.infoItem}>
                {dictionary.homeOrderSection.question}
              </li>
              <li className={styles.infoItem}>
                {dictionary.homeOrderSection.answer}
              </li>
            </ul>
            <address>
              <a
                className={styles.addressLink}
                href={addressData.hrefLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg className={styles.icon}>
                  <use href={`/sprite.svg#icon-map_pin`} />
                </svg>
                {getLocalizedField(addressData, "textAddress", lang)}
              </a>
            </address>
          </div>
          <OrderForm dictionary={dictionary} />
        </div>
      </div>
    </section>
  );
};

export default HomeOrderSection;
