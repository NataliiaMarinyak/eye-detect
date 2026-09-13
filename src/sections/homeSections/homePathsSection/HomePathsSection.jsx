import Image from "next/image";
import PriceQuizBtn from "@/components/Buttons/PriceQuizBtn/PriceQuizBtn";
import Reveal from "@/components/Reveal/Reveal";
import styles from "./HomePathsSection.module.scss";

// Два шляхи: EyeDetect у кабінеті/з виїздом і VerifEye онлайн.
// Фото і логотипи з офіційних матеріалів Converus (дозвіл партнера).
const PathCard = ({ data, cta, delay, photo, logo, logoW, logoH }) => (
  <Reveal as="li" delay={delay} className={styles.card}>
    <div className={styles.photo}>
      <Image
        src={photo}
        alt={data.title}
        width={1400}
        height={1050}
        sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 540px"
      />
      <p className={styles.badge}>{data.badge}</p>
    </div>
    <div className={styles.body}>
      <Image
        className={styles.logo}
        src={logo}
        alt={data.title}
        width={logoW}
        height={logoH}
        sizes="180px"
      />
      <p className={styles.cardText}>{data.text}</p>
      <ul className={styles.facts}>
        {data.facts.map((f) => (
          <li key={f}>
            <svg aria-hidden="true">
              <use href="/sprite.svg#icon-check-solid" />
            </svg>
            {f}
          </li>
        ))}
      </ul>
      <div className={styles.footer}>
        {cta}
      </div>
    </div>
  </Reveal>
);

const HomePathsSection = ({ dictionary }) => {
  const d = dictionary.homePaths;

  return (
    <section id="paths">
      <div className={`container ${styles.container}`}>
        <Reveal>
          <h2 className={styles.title}>{d.title}</h2>
        </Reveal>
        <ul className={styles.grid}>
          <PathCard
            data={d.office}
            delay={0}
            photo="/images/converus/eyedetect-station-white.webp"
            logo="/images/converus/logo-eyedetect.png"
            logoW={600}
            logoH={151}
            cta={<PriceQuizBtn customClass={`${styles.btn} ${styles.btnWide}`} title={dictionary.buttons.calculatePrice} />}
          />
          <PathCard
            data={d.online}
            delay={0.08}
            photo="/images/converus/verifeye-test.webp"
            logo="/images/converus/logo-verifeye.png"
            logoW={600}
            logoH={192}
            cta={<PriceQuizBtn customClass={`${styles.btn} ${styles.btnWide}`} title={dictionary.buttons.calculatePrice} />}
          />
        </ul>
      </div>
    </section>
  );
};

export default HomePathsSection;
