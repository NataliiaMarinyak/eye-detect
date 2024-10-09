import styles from "./HeroSection.module.scss";

const HeroSection = () => {
  return (
    <section id="hero" className={styles.hero}>
      <div className={`container ${styles.container}`}>
        <h1>Передові рішення для виявлення обману</h1>
        <p>Lorem ipsum dolor sit amet consectetur.</p>
        <button className={styles.button}>qwe</button>
      </div>
    </section>
  );
};

export default HeroSection;
