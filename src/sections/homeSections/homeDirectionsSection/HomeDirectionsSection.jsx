import Link from "next/link";
import Reveal from "@/components/Reveal/Reveal";
import PriceQuizBtn from "@/components/Buttons/PriceQuizBtn/PriceQuizBtn";
import { directionsData } from "@/data/directionsData";
import { getLocalizedField } from "@/helpers/getLocalizedField";
import { i18n } from "@/dictionaries/i18n.config";
import styles from "./HomeDirectionsSection.module.scss";

// Картка веде на свою сторінку. Адреси повні, без мовного префікса (його додає посилання нижче):
// п'ять карток — на сторінки ситуацій, «Перевірка персоналу на чесність» — на сторінку «Для бізнесу».
const HREF_BY_ICON = {
  "/sprite.svg#icon-money": "/situations/theft",
  "/sprite.svg#icon-competitors": "/situations/leak",
  "/sprite.svg#icon-search": "/business",
  "/sprite.svg#icon-rings": "/situations/fidelity",
  "/sprite.svg#icon-books": "/situations/dispute",
  "/sprite.svg#icon-person": "/situations/hiring",
};
const MORE = { uk: "Детальніше", ru: "Подробнее", en: "Learn more" };

// Ситуації, в яких допомагає EyeDetect. Кнопка розрахунку вартості тут доречна:
// це вже далеко за першим екраном.
const HomeDirectionsSection = ({ lang, dictionary }) => {
  return (
    <section id="situations" className={styles.section}>
      <div className={`container ${styles.container}`}>
        <Reveal>
          <h2 className={styles.title}>
            {dictionary.homeDirectionsSection.title}
          </h2>
          {dictionary.homeDirectionsSection.subTitle && (
            <p className={styles.intro}>
              {dictionary.homeDirectionsSection.subTitle}
            </p>
          )}
        </Reveal>
        <ul className={styles.directionsWrapper}>
          {directionsData.map((direction, i) => (
            <Reveal
              as="li"
              key={direction.title}
              delay={i * 0.06}
              className={styles.directionItem}
            >
              <div className={styles.iconWrapper}>
                <svg aria-hidden="true">
                  <use href={direction.href} />
                </svg>
              </div>
              <h3 className={styles.subTitle}>
                {getLocalizedField(direction, "title", lang)}
              </h3>
              <p className={styles.description}>
                {getLocalizedField(direction, "description", lang)}
              </p>
              {HREF_BY_ICON[direction.href] && (
                <Link
                  className={styles.more}
                  href={`${lang === i18n.defaultLocale ? "" : `/${lang}`}${HREF_BY_ICON[direction.href]}`}
                >
                  {MORE[lang] || MORE.uk}
                </Link>
              )}
            </Reveal>
          ))}
        </ul>
        <div className={styles.ctaWrap}>
          <PriceQuizBtn
            customClass={styles.ctaBtn}
            title={dictionary.buttons.calculatePrice}
          />
        </div>
      </div>
    </section>
  );
};

export default HomeDirectionsSection;
