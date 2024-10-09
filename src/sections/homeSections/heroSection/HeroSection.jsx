import ButtonLink from "@/components/Buttons/ButtonLink/ButtonLink";
import styles from "./HeroSection.module.scss";

const HeroSection = () => {
  return (
    <section id="hero" className={styles.hero}>
      <div className={`container ${styles.container}`}>
        <h1 className={styles.title}>Передові рішення для виявлення обману</h1>
        <p className={styles.text}>Lorem ipsum dolor sit amet consectetur.</p>
        <ButtonLink
          href="/contacts"
          title="Замовити консультацію"
          customBtn={styles.btn}
        />
      </div>
    </section>
  );
};

export default HeroSection;
