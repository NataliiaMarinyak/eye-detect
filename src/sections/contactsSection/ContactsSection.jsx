"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import OpenModalBtn from "@/components/Buttons/OpenModalBtn/OpenModalBtn";
import { i18n } from "@/dictionaries/i18n.config";
import { addressData } from "@/data/addressData";
import { socialMediaData } from "@/data/socialMediaData";
import { getLocalizedField } from "@/helpers/getLocalizedField";
import styles from "./ContactsSection.module.scss";

const T = {
  uk: {
    sub: "Кабінет у Львові, виїзд по Україні та Європі, онлайн-тест VerifEye з будь-якого міста. Оберіть зручний спосіб зв'язку. Працюємо цілодобово і відповідаємо протягом 15–30 хвилин.",
    call: "Зателефонувати",
    write: "Написати",
    email: "Електронна пошта",
    social: "Ми в соцмережах",
    office: "Кабінет у Львові",
    officeText: "Тести EyeDetect проводимо у кабінеті на вулиці Городоцькій, 45. Приймаємо за попереднім записом, тому спершу зателефонуйте або залиште заявку.",
    openMap: "Відкрити в Google Maps",
    book: "Записатися на тест",
  },
  ru: {
    sub: "Кабинет во Львове, выезд по Украине и Европе, онлайн-тест VerifEye из любого города. Выберите удобный способ связи. Работаем круглосуточно и отвечаем в течение 15–30 минут.",
    call: "Позвонить",
    write: "Написать",
    email: "Электронная почта",
    social: "Мы в соцсетях",
    office: "Кабинет во Львове",
    officeText: "Тесты EyeDetect проводим в кабинете на улице Городоцкой, 45. Принимаем по предварительной записи, поэтому сначала позвоните или оставьте заявку.",
    openMap: "Открыть в Google Maps",
    book: "Записаться на тест",
  },
  en: {
    sub: "Office in Lviv, on-site visits across Ukraine and Europe, VerifEye online test from any city. Choose the way to reach us. We work 24/7 and reply within 15–30 minutes.",
    call: "Call",
    write: "Write",
    email: "Email",
    social: "Social media",
    office: "Office in Lviv",
    officeText: "EyeDetect tests take place in our office at 45 Horodotska St. We work by appointment, so call first or leave a request.",
    openMap: "Open in Google Maps",
    book: "Book a test",
  },
};

// Контакти: картки способів зв'язку і карта кабінету. Форма заявки йде окремою секцією нижче.
const ContactsSection = ({ lang, dictionary }) => {
  const t = T[lang] || T.uk;
  const isUk = lang === i18n.locales[0];
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 570);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const phone = socialMediaData.find((s) => s.name === "phone");
  const email = socialMediaData.find((s) => s.name === "email");
  const socials = socialMediaData.filter((s) => ["facebook", "instagram", "tiktok"].includes(s.name));
  const address = getLocalizedField(addressData, "textAddress", lang);

  return (
    <section className={styles.section}>
      <div className={`container ${styles.container}`}>
        <div className={styles.head}>
          <h1 className={styles.title}>{dictionary.contactsSection.title}</h1>
          <p className={styles.sub}>{t.sub}</p>
        </div>

        <div className={styles.grid}>
          <div className={styles.cards}>
            <a href={phone.href} className={`${styles.card} ${styles.cardLink}`}>
              <span className={styles.icon}>
                <svg><use href={phone.icon} /></svg>
              </span>
              <span className={styles.cardLabel}>{t.call}</span>
              <span className={styles.cardValue}>{phone.contact}</span>
            </a>
            <a href={email.href} className={`${styles.card} ${styles.cardLink}`}>
              <span className={styles.icon}>
                <svg><use href={email.icon} /></svg>
              </span>
              <span className={styles.cardLabel}>{t.email}</span>
              <span className={styles.cardValue}>{email.contact}</span>
            </a>
            <div className={styles.card}>
              <span className={styles.cardLabel}>{t.social}</span>
              <ul className={styles.socials}>
                {socials.map((s) => (
                  <li key={s.name}>
                    <a href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.name}>
                      <svg><use href={s.icon} /></svg>
                      <span>{s.contact}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className={styles.office}>
            <div className={styles.mapWrap}>
              {isMobile ? (
                <a href={addressData.hrefLink} target="_blank" rel="noopener noreferrer" className={styles.mapPreview}>
                  <Image src="/images/map-preview-mobile.webp" alt={address} sizes="100vw" width={570} height={300} priority />
                </a>
              ) : (
                <iframe
                  className={styles.map}
                  src={addressData.iframeSrcLink}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={address}
                />
              )}
            </div>
            <div className={styles.officeBody}>
              <p className={styles.cardLabel}>{t.office}</p>
              <p className={styles.address}>
                <svg><use href="/sprite.svg#icon-map_pin" /></svg>
                {address}
              </p>
              <p className={styles.officeText}>{t.officeText}</p>
              <div className={styles.actions}>
                <OpenModalBtn customClass={styles.btnPrimary} title={t.book} service="EyeDetect" />
                <a href={addressData.hrefLink} target="_blank" rel="noopener noreferrer" className={styles.btnSecondary}>
                  {t.openMap}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactsSection;
