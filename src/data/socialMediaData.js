export const socialMediaData = [
  {
    name: "phone",
    type: "phone",
    href: "tel:+380686833368",
    icon: "/sprite.svg#icon-call",
    contact: "+380 (68) 68 333 68",
  },
  {
    name: "telegram",
    type: "socialMedia",
    href: "https://t.me/Detecteye",
    icon: "/sprite.svg#icon-telegram",
    contact: "@Detecteye",
  },

  {
    name: "facebook",
    type: "socialMedia",
    href: "https://www.facebook.com/share/1527nF4Rwh/",
    icon: "/sprite.svg#icon-facebook",
    contact: "EyeDetect",
  },

  {
    name: "instagram",
    type: "socialMedia",
    href: "https://www.instagram.com/eye_detect",
    icon: "/sprite.svg#icon-instagram",
    contact: "@eye_detect",
  },

  {
    name: "tiktok",
    type: "socialMedia",
    href: "https://www.tiktok.com/@www.eyepolygraph?_t=ZM-8ummsP51AXt&_r=1",
    icon: "/sprite.svg#icon-tiktok",
    contact: "@www.eyepolygraph",
  },

  {
    name: "email",
    type: "email",
    href: "mailto:info@eye-polygraph.com",
    icon: "/sprite.svg#icon-email",
    contact: "info@eye-polygraph.com",
  },
];

export const phone = socialMediaData.find((el) => el.name === "phone");

export const headerSocLinks = socialMediaData.filter(
  (el) => el.type === "socialMedia"
);
export const footerSocLinks = socialMediaData.filter(
  (el) => el.name !== "email"
);

export const email = socialMediaData.find((el) => el.name === "email");
