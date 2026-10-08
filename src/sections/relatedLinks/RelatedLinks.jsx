import styles from "./RelatedLinks.module.scss";

// Компактний блок внутрішніх посилань наприкінці сторінки, наприклад «Інші галузі» на /for/<slug>.
// links: [{ href, label }], more: { href, label } — посилання на весь розділ. Шляхи приходять уже
// з мовним префіксом. Серверний компонент: звичайні <a href>, у браузер не додає жодного JS.
const RelatedLinks = ({ title, links = [], more }) => {
  if (links.length === 0) return null;
  return (
    <section className={styles.section}>
      <div className={`container ${styles.container}`}>
        <h2 className={styles.title}>{title}</h2>
        <div className={styles.body}>
          <ul className={styles.list}>
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href} className={styles.link}>{l.label}</a>
              </li>
            ))}
          </ul>
          {more && <a href={more.href} className={styles.more}>{more.label}</a>}
        </div>
      </div>
    </section>
  );
};

export default RelatedLinks;
