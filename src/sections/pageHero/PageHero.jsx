import Image from "next/image";
import OpenModalBtn from "@/components/Buttons/OpenModalBtn/OpenModalBtn";
import styles from "./PageHero.module.scss";

// Перший екран для внутрішніх сторінок: темний фон, H1, підзаголовок,
// факти, одна-дві кнопки, за потреби фото праворуч.
const PageHero = ({ service = "", eyebrow, title, sub, facts = [], primary, secondaryHref, secondaryLabel, photo, photoAlt = "" }) => {
  return (
    <section className={styles.hero}>
      <div className={`container ${styles.container}`}>
        <div className={styles.content}>
          {eyebrow && <p className={styles.eyebrow}>{eyebrow}</p>}
          <h1 className={styles.title}>{title}</h1>
          {sub && <p className={styles.sub}>{sub}</p>}
          {(primary || secondaryHref) && (
            <div className={styles.actions}>
              {primary && <OpenModalBtn customClass={styles.btnPrimary} title={primary} service={service} />}
              {secondaryHref && (
                <a href={secondaryHref} className={styles.btnSecondary}>
                  {secondaryLabel}
                </a>
              )}
            </div>
          )}
          {facts.length > 0 && (
            <ul className={styles.facts}>
              {facts.map((f) => (
                <li key={f}>{f}</li>
              ))}
            </ul>
          )}
        </div>
        {photo && (
          <div className={styles.photo}>
            <Image src={photo} alt={photoAlt} width={1400} height={1050} sizes="(max-width: 1023px) 100vw, 480px" priority />
          </div>
        )}
      </div>
    </section>
  );
};

export default PageHero;
