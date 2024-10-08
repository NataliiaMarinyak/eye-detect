import Link from "next/link";
import styles from "./ButtonLink.module.scss";

const ButtonLink = ({ customBtn, href, title }) => {
  return (
    <Link href={href} className={styles.btn + " " + customBtn}>
      {title}
    </Link>
  );
};

export default ButtonLink;
