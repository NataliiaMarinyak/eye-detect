import Image from "next/image";
import styles from "./HomeCertificatesSection.module.scss";

const CERT_ALT_UKR = {
  uk: "Тестувальник EyeDetect",
  ru: "Тестировщик EyeDetect",
  en: "EyeDetect Test Proctor (Ukrainian certificate)",
};

const HomeCertificatesSection = ({ isOnHomePage, lang, dictionary }) => {
  const certAltUkr = CERT_ALT_UKR[lang] ?? CERT_ALT_UKR.uk;

  return (
    <section>
      <div className={`container ${styles.container}`}>
        <h2 className={styles.title}>
          {dictionary.homeCertificatesSection.title}
        </h2>
        <div className={styles.certificatesWrapper}>
          <div className={styles.certWrap}>
            <Image
              className={styles.certificate}
              src="/images/certificate_ukr.webp"
              alt={certAltUkr}
              sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 468px"
              width={727}
              height={545}
            />
          </div>
          <div className={styles.certWrap}>
            <Image
              className={styles.certificate}
              src="/images/certificate_eng.webp"
              alt="EyeDetect Test Proctor"
              sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 468px"
              width={727}
              height={545}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeCertificatesSection;
