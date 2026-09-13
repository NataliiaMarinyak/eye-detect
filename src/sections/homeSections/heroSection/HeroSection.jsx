import Image from "next/image";
import OpenModalBtn from "@/components/Buttons/OpenModalBtn/OpenModalBtn";
import styles from "./HeroSection.module.scss";

// Перший екран. H1 живе тут. Праворуч справжнє фото тестування (матеріали Converus).
// Справжній звіт показуємо нижче у блоці «Що ви отримуєте». Кнопки «Розрахувати вартість» тут немає навмисно.
const HeroSection = ({ dictionary }) => {
  const hero = dictionary.heroSection;
  const [titleMain, titleRest] = splitTitle(hero.h1 || hero.title);

  return (
    <section id="hero" className={styles.hero}>
      <div className={`container ${styles.container}`}>
        <div className={styles.content}>
          <h1 className={styles.title}>
            {titleMain}
            {titleRest && <span className={styles.titleSub}>{titleRest}</span>}
          </h1>
          <p className={styles.sub}>{hero.sub}</p>

          <div className={styles.actions}>
            <a href={`${dictionary.lang === "uk" ? "" : "/" + dictionary.lang}/online`} className={styles.btnPrimary}>
              {dictionary.buttons.testOnline}
            </a>
            <OpenModalBtn
              customClass={styles.btnSecondary}
              title={dictionary.buttons.bookLviv}
            />
          </div>

          <ul className={styles.trust}>
            {(hero.trust || []).map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
          <p className={styles.priceNote}>{hero.priceNote}</p>
        </div>

        <div className={styles.media}>
          <div className={styles.photo}>
            <Image
              src="/images/converus/eyedetect-examinee.webp"
              alt={hero.title}
              width={1400}
              height={1401}
              sizes="(max-width: 767px) 92vw, (max-width: 1023px) 60vw, 440px"
              quality={62}
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

// «Детектор брехні у Львові: EyeDetect у кабінеті...» → перша частина великим,
// друга (після двокрапки) меншим і світлішим. Один H1 для пошуковика.
function splitTitle(t = "") {
  const i = t.indexOf(":");
  if (i === -1) return [t, ""];
  return [t.slice(0, i).trim(), t.slice(i + 1).trim()];
}

export default HeroSection;
