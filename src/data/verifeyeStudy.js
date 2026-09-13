// Валідаційне дослідження VerifEye 3R (Converus, серпень 2024): оригінал англійською і переклади.
const EN = "https://converus.com/wp-content/uploads/2024/03/VerifEye-V3R_Executive-Summary_August-2024.pdf";
const RU = "https://drive.google.com/file/d/1TKJ7NdrWfsKU3rJgl0XrrlRGXcIJ-Oq0/view";
const UA = "https://drive.google.com/file/d/1gRrc-LDHrHVXkxDrqBIKQGvhrILPdp4l/view";

export const VERIFEYE_STUDY = {
  uk: { label: "Дослідження VerifEye 3R, Converus 2024:", links: [["українською", UA], ["оригінал англійською", EN]] },
  ru: { label: "Исследование VerifEye 3R, Converus 2024:", links: [["на русском", RU], ["оригинал на английском", EN]] },
  en: { label: "VerifEye 3R validation study, Converus 2024:", links: [["executive summary (PDF)", EN]] },
};

export const getVerifeyeStudy = (lang) => VERIFEYE_STUDY[lang] || VERIFEYE_STUDY.uk;
