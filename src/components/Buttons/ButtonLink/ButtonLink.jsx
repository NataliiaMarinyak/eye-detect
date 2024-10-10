import Link from "next/link";
import styles from "./ButtonLink.module.scss";

const ButtonLink = ({ customBtn, href, title, id }) => {
  return (
    <Link href={href} className={styles.btn + " " + customBtn} id={id}>
      {title}
    </Link>
  );
};

export default ButtonLink;
