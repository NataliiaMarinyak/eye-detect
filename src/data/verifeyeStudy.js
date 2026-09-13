// Посилання на дослідження: VerifEye 3R (Converus, 2024) і EyeDetect (рецензовані статті).
const EN = "https://converus.com/wp-content/uploads/2024/03/VerifEye-V3R_Executive-Summary_August-2024.pdf";
const RU = "https://drive.google.com/file/d/1TKJ7NdrWfsKU3rJgl0XrrlRGXcIJ-Oq0/view";
const UA = "https://drive.google.com/file/d/1gRrc-LDHrHVXkxDrqBIKQGvhrILPdp4l/view";
const COOK_2012 = "https://doi.org/10.1037/a0028307";
const KIRCHER_2016 = "https://doi.org/10.1515/ep-2016-0021";

export const VERIFEYE_STUDY = {
  uk: { label: "Дослідження VerifEye 3R, Converus 2024:", links: [["українською", UA], ["оригінал англійською", EN]] },
  ru: { label: "Исследование VerifEye 3R, Converus 2024:", links: [["на русском", RU], ["оригинал на английском", EN]] },
  en: { label: "VerifEye 3R validation study, Converus 2024:", links: [["executive summary (PDF)", EN]] },
};

export const EYEDETECT_STUDY = {
  uk: { label: "Дослідження EyeDetect (англійською):", links: [["Cook et al., 2012", COOK_2012], ["Kircher, Raskin, 2016", KIRCHER_2016]] },
  ru: { label: "Исследования EyeDetect (на английском):", links: [["Cook et al., 2012", COOK_2012], ["Kircher, Raskin, 2016", KIRCHER_2016]] },
  en: { label: "EyeDetect research:", links: [["Cook et al., 2012", COOK_2012], ["Kircher & Raskin, 2016", KIRCHER_2016]] },
};

export const getVerifeyeStudy = (lang, kind) => {
  const src = kind === "eyedetect" ? EYEDETECT_STUDY : VERIFEYE_STUDY;
  return src[lang] || src.uk;
};
