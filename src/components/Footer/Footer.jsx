import Link from "next/link";
import Navigation from "../Navigation/Navigation";
import styles from "./Footer.module.scss";
import FooterSocMedia from "./FooterSocMedia/FooterSocMedia";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.container}`}>
        <FooterSocMedia
          className={`${styles.list} ${styles.socMedia}`}
          itemStyles={styles.item}
        />
        <Navigation className={`${styles.list} ${styles.nav}`} />
        <Link href="/" className={styles.privacy}>
          Політика Конфіденційності
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
