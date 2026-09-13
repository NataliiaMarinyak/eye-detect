import Link from "next/link";
import { socialMediaData } from "@/data/socialMediaData";
import { addressData } from "@/data/addressData";
import { i18n } from "@/dictionaries/i18n.config";
import styles from "./Footer.module.scss";

// Підвал за принципом Converus: колонки за темами, без «Головна» (на неї веде логотип).
const GROUPS = {
  uk: [
    { title: "Послуги", links: [["/eyedetect", "Детектор брехні EyeDetect"], ["/online", "Онлайн-тест VerifEye"], ["/business", "Для бізнесу"], ["/prices", "Ціни"]] },
    { title: "Ситуації", links: [["/situations/fidelity", "Перевірка на вірність"], ["/situations/theft", "Крадіжка"], ["/situations/leak", "Витік інформації"], ["/situations/hiring", "Кандидат на роботу"], ["/situations/dispute", "Спір без доказів"]] },
    { title: "Для кого", links: [["/for/lawyers", "Юристам і детективам"], ["/for/finance", "Банкам і фінкомпаніям"], ["/for/security", "Охоронним компаніям"], ["/for/hr", "HR і рекрутерам"], ["/for/counselors", "Психологам"]] },
    { title: "Знання", links: [["/faq", "Питання і відповіді"], ["/converus", "Про Converus і науку"], ["/blog", "Блог"], ["/about-us", "Про спеціаліста"], ["/contacts", "Контакти"], ["/privacy-policy", "Політика конфіденційності"]] },
  ],
  ru: [
    { title: "Услуги", links: [["/eyedetect", "Детектор лжи EyeDetect"], ["/online", "Онлайн-тест VerifEye"], ["/business", "Для бизнеса"], ["/prices", "Цены"]] },
    { title: "Ситуации", links: [["/situations/fidelity", "Проверка на верность"], ["/situations/theft", "Кража"], ["/situations/leak", "Утечка информации"], ["/situations/hiring", "Кандидат на работу"], ["/situations/dispute", "Спор без доказательств"]] },
    { title: "Для кого", links: [["/for/lawyers", "Юристам и детективам"], ["/for/finance", "Банкам и финкомпаниям"], ["/for/security", "Охранным компаниям"], ["/for/hr", "HR и рекрутерам"], ["/for/counselors", "Психологам"]] },
    { title: "Знания", links: [["/faq", "Вопросы и ответы"], ["/converus", "О Converus и науке"], ["/blog", "Блог"], ["/about-us", "О специалисте"], ["/contacts", "Контакты"], ["/privacy-policy", "Политика конфиденциальности"]] },
  ],
};

const T = {
  uk: { about: "Детектор брехні EyeDetect у Львові та з виїздом, онлайн-тест VerifEye. Сертифікований партнер Converus в Україні.", contacts: "Контакти", rights: "Усі права захищено." },
  ru: { about: "Детектор лжи EyeDetect во Львове и с выездом, онлайн-тест VerifEye. Сертифицированный партнёр Converus в Украине.", contacts: "Контакты", rights: "Все права защищены." },
};

const Footer = ({ lang, dictionary }) => {
  const t = T[lang] || T.uk;
  const groups = GROUPS[lang] || GROUPS.uk;
  const isUk = lang === i18n.defaultLocale;
  const prefix = isUk ? "" : `/${lang}`;
  const phone = socialMediaData.find((s) => s.name === "phone");
  const email = socialMediaData.find((s) => s.name === "email");
  const socials = socialMediaData.filter((s) => ["telegram", "facebook", "instagram", "tiktok"].includes(s.name));

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.container}`}>
        <div className={styles.grid}>
          <div className={`${styles.col} ${styles.colBrand}`}>
            <Link href={prefix || "/"} className={styles.brand} aria-label="EyeDetect">EyeDetect</Link>
            <p className={styles.about}>{t.about}</p>
            <address className={styles.contactList}>
              <a href={phone.href} className={styles.contactLink}>
                <svg><use href={phone.icon} /></svg>
                {phone.contact}
              </a>
              <a href={email.href} className={styles.contactLink}>
                <svg><use href={email.icon} /></svg>
                {email.contact}
              </a>
              <a href={addressData.hrefLink} target="_blank" rel="noopener noreferrer" className={styles.contactLink}>
                <svg><use href="/sprite.svg#icon-map_pin" /></svg>
                {isUk ? addressData.textAddress : addressData.textAddressRus}
              </a>
              <Link href={`${prefix}/locations`} className={styles.contactLink}>
                <svg><use href="/sprite.svg#icon-map_pin" /></svg>
                {isUk ? "Виїзд по Україні та Європі" : "Выезд по Украине и Европе"}
              </Link>
            </address>
            <ul className={styles.socials}>
              {socials.map((s) => (
                <li key={s.name}>
                  <Link href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.name} className={styles.socialIcon}>
                    <svg><use href={s.icon} /></svg>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {groups.map((g) => (
            <div key={g.title} className={styles.col}>
              <p className={styles.colTitle}>{g.title}</p>
              <ul className={styles.links}>
                {g.links.map(([href, label]) => (
                  <li key={href}>
                    <Link href={`${prefix}${href}`} className={styles.navLink}>{label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className={styles.bottom}>
          <p className={styles.copy}>© 2024–{new Date().getFullYear()} EyeDetect · {isUk ? "Львів" : "Львов"}. {t.rights}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
