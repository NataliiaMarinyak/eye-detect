"use client";
// import { useEffect, useState } from "react";
import { useState } from "react";
// import { useTranslation } from 'react-i18next';
// import { useParams } from "next/navigation";
import Image from "next/image";
import OpenModalBtn from "@/components/Buttons/OpenModalBtn/OpenModalBtn";
import { getCityData } from "@/helpers/getCityData";
import { getImageForYoutubePreload } from "@/helpers/getImageForYoutubePreload";
// import { languagesData } from "@/data/languagesData";
import { i18n } from "@/dictionaries/i18n.config";
import styles from "./VideoSection.module.scss";

const VideoSection = ({ lang, dictionary, slug }) => {
  // const { i18n } = useTranslation();
  // const [isLoading, setIsLoading] = useState(true);
  // useEffect(() => setIsLoading(false), []);

  // const { slug } = useParams();
  const data = getCityData(slug);

  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  const imageSrcForYoutube = getImageForYoutubePreload(data?.videoLink);

  return (
    <section>
      <div className={`container ${styles.container}`}>
        <div className={styles.videoWrapper}>
          {!isVideoLoaded ? (
            <div
              className={styles.previewContainer}
              onClick={() => setIsVideoLoaded(true)}
            >
              <Image
                className={styles.previewImage}
                loading="lazy"
                src={imageSrcForYoutube}
                alt={
                  lang === i18n.locales[0]
                    ? data?.mainTitle
                    : data?.mainTitleRus
                }
                sizes="(max-width: 1023px) 100vw, 960px"
                width={960}
                height={494}
              />
              <div className={styles.playIcon}></div>
            </div>
          ) : (
            <iframe
              className={styles.video}
              loading="lazy"
              src={data?.videoLink}
              allowFullScreen
              title={
                lang === i18n.locales[0] ? data?.mainTitle : data?.mainTitleRus
              }
            />
          )}
        </div>
        <OpenModalBtn
          customClass=""
          title={dictionary.buttons.orderConsultation}
        />
      </div>
    </section>
  );
};

export default VideoSection;
