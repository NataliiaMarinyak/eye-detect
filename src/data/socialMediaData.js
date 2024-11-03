export const socialMediaData = [
  {
    name: "phone",
    type: "phone",
    href: "tel:+380973213040",
    icon: "/sprite.svg#icon-call",
    contact: "+380 (97) 321 30 40",
  },
  {
    name: "telegram",
    type: "socialMedia",
    href: "https://t.me/FullStack_specialist",
    icon: "/sprite.svg#icon-telegram",
    contact: "@natalia_eyedetect",
  },

  {
    name: "facebook",
    type: "socialMedia",
    href: "https://www.facebook.com/maxim.peltek/",
    icon: "/sprite.svg#icon-facebook",
    contact: "+380 (97) 321 30 40",
  },

  {
    name: "instagram",
    type: "socialMedia",
    href: "https://www.instagram.com/natalabojko/",
    icon: "/sprite.svg#icon-instagram",
    contact: "@natalia_eyedetect",
  },

  {
    name: "email",
    type: "email",
    href: "mailto:eyedetect_natalia@gmail.com",
    icon: "/sprite.svg#icon-email",
    contact: "eyedetect_natalia@gmail.com",
  },
];

export const phone = socialMediaData.find((el) => el.name === "phone");

export const headerSocLinks = socialMediaData.filter(
  (el) => el.name !== "phone"
);

export const email = socialMediaData.find((el) => el.name === "email");