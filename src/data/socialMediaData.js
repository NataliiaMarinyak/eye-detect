export const socialMediaData = [
  {
    name: "phone",
    type: "phone",
    href: "tel:+380973213040",
    icon: "./sprite.svg#icon-call",
    contact: "+380 (97) 321 30 40",
  },
  {
    name: "telegram",
    type: "socialMedia",
    href: "https://t.me/natalia_eyedetect",
    icon: "./sprite.svg#icon-telegram",
    contact: "@natalia_eyedetect",
  },
  {
    name: "viber",
    type: "socialMedia",
    href: "viber://chat?number=+380973213040",
    icon: "./sprite.svg#icon-viber",
    contact: "+380 (97) 321 30 40",
  },
  {
    name: "whatsapp",
    type: "socialMedia",
    href: "whatsapp://send?phone=+380973213040",
    icon: "./sprite.svg#icon-whatsapp",
    contact: "+380 (97) 321 30 40",
  },
  {
    name: "instagram",
    type: "socialMedia",
    href: "https://www.instagram.com/natalia_eyedetect/",
    icon: "./sprite.svg#icon-instagram",
    contact: "@natalia_eyedetect",
  },
  {
    name: "email",
    type: "email",
    href: "mailto:eyedetect_natalia@gmail.com",
    icon: "./sprite.svg#icon-email",
    contact: "eyedetect_natalia@gmail.com",
  },
];
// console.log("socialMediaData", socialMediaData);

export const phone = socialMediaData.find((el) => el.name === "phone");
// console.log("phone", phone);

export const headerSocLinks = socialMediaData.filter(
  (el) => el.type === "socialMedia"
);

// console.log("headerSocLinks", headerSocLinks);

// Move Telegram item to the pre-last position
// Make a copy of the array to avoid mutating the original
export const rearrangedArray = [...socialMediaData];

// Remove the item from index 1 (splice returns an array of removed elements)
const [elementToMove] = rearrangedArray.splice(1, 1);

// Insert the item at index 3 (pre-last position)
rearrangedArray.splice(2, 0, elementToMove);

// Move Instagram (i=4) item to the pre-last position
export const contactsSocMedData = [...socialMediaData];

const [elementToreplace] = contactsSocMedData.splice(4, 1);

contactsSocMedData.splice(5, 0, elementToreplace);
