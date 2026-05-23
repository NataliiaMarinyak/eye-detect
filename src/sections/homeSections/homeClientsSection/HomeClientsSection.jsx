import Image from "next/image";
import OpenModalBtn from "@/components/Buttons/OpenModalBtn/OpenModalBtn";
import styles from "./HomeClientsSection.module.scss";

const CLIENTS_ALT = {
  uk: "Клієнти EyeDetect",
  ru: "Клиенты EyeDetect",
  en: "EyeDetect clients",
};

const HomeClientsSection = ({ lang, dictionary }) => {
  const altText = CLIENTS_ALT[lang] ?? CLIENTS_ALT.uk;

  return (
    <section>
      <div className={`container ${styles.container}`}>
        <h2 className={styles.title}>{dictionary.homeClientsSection.title}</h2>
        <div className={styles.imgWrapper}>
          <Image
            className={styles.img}
            src="/images/clients.webp"
            alt={altText}
            sizes="(max-width: 1023px) 100vw, 960px"
            width={960}
            height={321}
          />
        </div>
        <OpenModalBtn
          customClass=""
          title={dictionary.buttons.orderConsultation}
        />
      </div>
    </section>
  );
};

export default HomeClientsSection;
