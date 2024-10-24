import Navigation from "../Navigation/Navigation";
import styles from "./Footer.module.scss";
import FooterSocMedia from "./FooterSocMedia/FooterSocMedia";
import PrivacyPolicy from "./PrivacyPolicy";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.container}`}>
        <FooterSocMedia
          className={`${styles.list} ${styles.socMedia}`}
          itemStyles={styles.item}
        />
        <Navigation className={`${styles.list} ${styles.nav}`} />

        <PrivacyPolicy className={styles.privacy} />
      </div>
    </footer>
  );
};

export default Footer;
