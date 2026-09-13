import { getVerifeyeStudy } from "@/data/verifeyeStudy";
import styles from "./StudyLinks.module.scss";

// Рядок з посиланнями на дослідження VerifEye
const StudyLinks = ({ lang }) => {
  const s = getVerifeyeStudy(lang);
  return (
    <p className={styles.links}>
      {s.label}{" "}
      {s.links.map(([t, href], i) => (
        <span key={href}>
          {i > 0 && ", "}
          <a href={href} target="_blank" rel="noopener noreferrer">{t}</a>
        </span>
      ))}
    </p>
  );
};

export default StudyLinks;
