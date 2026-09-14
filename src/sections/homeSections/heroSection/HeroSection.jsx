import Image from "next/image";
import PriceQuizBtn from "@/components/Buttons/PriceQuizBtn/PriceQuizBtn";
import styles from "./HeroSection.module.scss";

// Перший екран. Логіка: послуга → задачі клієнта → як це працює → хто проводить і що
// отримаєте → одна дія з ціною → онлайн як додаткове посилання. Праворуч людина під час тесту.
// Головна дія: квіз «Розрахувати точну вартість» (рішення замовника від 13.09.2026).
const HeroSection = ({ dictionary }) => {
  const hero = dictionary.heroSection;
  const prefix = dictionary.lang === "uk" ? "" : `/${dictionary.lang}`;

  return (
    <section id="hero" className={styles.hero}>
      <div className={`container ${styles.container}`}>
        {/* Один H1 для всіх екранів: на телефоні по центру над фото, на комп'ютері ліворуч над текстом */}
        <div className={styles.top}>
          {hero.eyebrow && <p className={styles.eyebrow}>{hero.eyebrow}</p>}
          <h1 className={styles.title}>{hero.h1 || hero.title}</h1>
        </div>
        <div className={styles.content}>

          {Array.isArray(hero.tasks) && hero.tasks.length > 0 && (
            <ul className={styles.tasks} aria-label={hero.tasksLabel}>
              {hero.tasks.map((t) => (
                <li key={t.label}>
                  <a href={`${prefix}${t.href}`} className={styles.task}>{t.label}</a>
                </li>
              ))}
            </ul>
          )}


          <div className={styles.actions}>
            <div className={styles.action}>
              <PriceQuizBtn customClass={styles.btnPrimary} title={dictionary.buttons.calculatePrice} />
            </div>
          </div>

          {Array.isArray(hero.trust) && (
            <ul className={styles.trust}>
              {hero.trust.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
          )}

          <p className={styles.onlineLine}>
            <span className={styles.onlineText}>{hero.onlineText}</span>
            <a href={`${prefix}/online`} className={styles.onlineLink}>{hero.onlineLink}</a>
          </p>
        </div>

        <div className={styles.media}>
          <div className={styles.photo}>
            <Image
              src="/images/converus/eyedetect-examinee.webp"
              alt={hero.photoCaption || hero.h1}
              width={1400}
              height={1401}
              sizes="(max-width: 767px) 92vw, (max-width: 1023px) 60vw, 440px"
              quality={70}
              priority
            />
            {hero.photoCaption && <p className={styles.photoCaption}>{hero.photoCaption}</p>}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
