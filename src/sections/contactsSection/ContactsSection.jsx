import Link from "next/link";
import ButtonLink from "@/components/Buttons/ButtonLink/ButtonLink";
import ContactsSocMedia from "./ContactsSocMedia";
import styles from "./ContactsSection.module.scss";


const ContactsSection = () => {
  return (
    <section className={styles.section}>
      <div className={`container ${styles.container}`}>
        <h1>Детектор брехні EyeDetect: контакти в Україні та Європі</h1>
        <div className={styles.contentWrapp}>
          <ContactsSocMedia
            className={styles.socMedia}
            itemStyles={styles.socMediaItem}
          />
          <div className={styles.mapWrapp}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2572.9463559329574!2d24.02055367655992!3d49.843465471482666!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473add739d964237%3A0x45b9239b44ba1e3b!2z0LLRg9C70LjRhtGPINCU0LzQuNGC0YDQsCDQlNCw0L3QuNC70LjRiNC40L3QsCwgNiwg0JvRjNCy0ZbQsiwg0JvRjNCy0ZbQstGB0YzQutCwINC-0LHQu9Cw0YHRgtGMLCA3OTAwMA!5e0!3m2!1suk!2sua!4v1728562646496!5m2!1suk!2sua"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
            <Link
              href="https://maps.app.goo.gl/pziDUUpQtqttVmKC7"
              target="_blank"
              className={styles.locationLink}
            >
              <svg className={styles.locationIcon}>
                <use href="./sprite.svg#icon-map_pin"></use>
              </svg>
              Львів, вул. Данилишина 6, оф. 217
            </Link>
          </div>
        </div>
        <ButtonLink
          href="/#order"
          title="Замовити консультацію"
          id={styles.btn}
        />
      </div>
    </section>
  );
};

export default ContactsSection;
