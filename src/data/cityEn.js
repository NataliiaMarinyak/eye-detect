// Англійські назви міст і країн для сторінок /en/locations/*.
// Дані міст (ukrainianCitiesData, europeanCitiesData) мають лише uk/ru поля,
// тому англійська версія міських сторінок збирається з цього файлу
// і зі спільного англійського шаблону послуг нижче.

export const CITY_EN = {
  vinnytsia: ["Vinnytsia", "Ukraine"],
  dnipro: ["Dnipro", "Ukraine"],
  donetsk: ["Donetsk", "Ukraine"],
  zhytomyr: ["Zhytomyr", "Ukraine"],
  zaporizhzhia: ["Zaporizhzhia", "Ukraine"],
  "ivano-frankivsk": ["Ivano-Frankivsk", "Ukraine"],
  kyiv: ["Kyiv", "Ukraine"],
  kropyvnytskyi: ["Kropyvnytskyi", "Ukraine"],
  luhansk: ["Luhansk", "Ukraine"],
  lutsk: ["Lutsk", "Ukraine"],
  lviv: ["Lviv", "Ukraine"],
  mykolaiv: ["Mykolaiv", "Ukraine"],
  odesa: ["Odesa", "Ukraine"],
  poltava: ["Poltava", "Ukraine"],
  rivne: ["Rivne", "Ukraine"],
  sumy: ["Sumy", "Ukraine"],
  ternopil: ["Ternopil", "Ukraine"],
  uzhgorod: ["Uzhhorod", "Ukraine"],
  kharkiv: ["Kharkiv", "Ukraine"],
  kherson: ["Kherson", "Ukraine"],
  khmelnytskyi: ["Khmelnytskyi", "Ukraine"],
  cherkasy: ["Cherkasy", "Ukraine"],
  chernivtsi: ["Chernivtsi", "Ukraine"],
  chernihiv: ["Chernihiv", "Ukraine"],
  vienna: ["Vienna", "Austria"],
  tirana: ["Tirana", "Albania"],
  "andorra-la-vella": ["Andorra la Vella", "Andorra"],
  brussels: ["Brussels", "Belgium"],
  sofia: ["Sofia", "Bulgaria"],
  sarajevo: ["Sarajevo", "Bosnia and Herzegovina"],
  vatican: ["Vatican City", "Vatican"],
  london: ["London", "United Kingdom"],
  athens: ["Athens", "Greece"],
  copenhagen: ["Copenhagen", "Denmark"],
  tallinn: ["Tallinn", "Estonia"],
  dublin: ["Dublin", "Ireland"],
  reykjavik: ["Reykjavik", "Iceland"],
  madrid: ["Madrid", "Spain"],
  rome: ["Rome", "Italy"],
  pristina: ["Pristina", "Kosovo"],
  riga: ["Riga", "Latvia"],
  vilnius: ["Vilnius", "Lithuania"],
  vaduz: ["Vaduz", "Liechtenstein"],
  luxembourg: ["Luxembourg", "Luxembourg"],
  valletta: ["Valletta", "Malta"],
  chisinau: ["Chisinau", "Moldova"],
  monaco: ["Monaco", "Monaco"],
  amsterdam: ["Amsterdam", "Netherlands"],
  berlin: ["Berlin", "Germany"],
  oslo: ["Oslo", "Norway"],
  skopje: ["Skopje", "North Macedonia"],
  warsaw: ["Warsaw", "Poland"],
  lisbon: ["Lisbon", "Portugal"],
  bucharest: ["Bucharest", "Romania"],
  "san-marino": ["San Marino", "San Marino"],
  belgrade: ["Belgrade", "Serbia (excluding Kosovo)"],
  bratislava: ["Bratislava", "Slovakia"],
  ljubljana: ["Ljubljana", "Slovenia"],
  budapest: ["Budapest", "Hungary"],
  helsinki: ["Helsinki", "Finland"],
  paris: ["Paris", "France"],
  zagreb: ["Zagreb", "Croatia"],
  prague: ["Prague", "Czech Republic"],
  podgorica: ["Podgorica", "Montenegro"],
  bern: ["Bern", "Switzerland"],
  stockholm: ["Stockholm", "Sweden"],
};

export const getCityEn = (slug) => CITY_EN[slug]?.[0] || slug;
export const getCountryEn = (slug) => CITY_EN[slug]?.[1] || "";

// Спільний англійський блок послуг для міської сторінки. {city} підставляється на місці.
export const citySubTitleEn = "Fast and reliable lie detector testing in {city} with EyeDetect";

export const cityServicesEn = [
  {
    area: "Fidelity testing: reliable answers for couples",
    directions: [
      {
        title: "Polygraph test about infidelity.",
        description: "Doubts about a partner’s fidelity weigh heavily on your emotional state. An EyeDetect test in {city} helps establish the truth and restore calm in the relationship.",
        checks: [],
      },
      {
        title: "Personal fidelity test.",
        description: "You can take the test on your own, without involving your partner. The result stays confidential and you receive a detailed written report.",
        checks: [],
      },
      {
        title: "Pre-wedding test: confidence about the future.",
        description: "Before an important life step, a polygraph test helps avoid unpleasant surprises in the marriage.",
        checks: [],
      },
    ],
    image: "/images/blockFamilyTest.webp",
    imageAlt: "Fidelity in marriage",
  },
  {
    area: "Employee screening with the EyeDetect polygraph in {city}",
    directions: [
      {
        title: "Careful selection of employees.",
        description: "Want to be sure of your staff? EyeDetect reveals hidden risks and reduces threats to your business.",
        checks: ["Accuracy of the information in the CV.", "Real reasons for leaving the previous job.", "Addictions or other problems.", "Motives for applying (dishonest intent, links to competitors)."],
      },
      {
        title: "Regular staff checks.",
        description: "Monthly or quarterly polygraph tests help spot potential threats to the company early. Employee loyalty is the key to success.",
        checks: [],
      },
      {
        title: "Internal investigations and conflict resolution.",
        description: "The EyeDetect polygraph is often used for internal investigations and for resolving conflicts inside the company. It is a practical way to find the truth.",
        checks: [],
      },
    ],
    image: "/images/blockPersonnellTest.webp",
    imageAlt: "Employee screening",
  },
  {
    area: "Using the polygraph to solve crimes",
    directions: [
      {
        title: "Theft investigations.",
        description: "The EyeDetect polygraph helps find out who is responsible for a theft and where the items went.",
        checks: [],
      },
      {
        title: "Detecting fraud.",
        description: "The polygraph helps uncover fraud schemes such as forged documents or passing information to third parties.",
        checks: [],
      },
      {
        title: "Locating physical evidence.",
        description: "EyeDetect helps locate important physical evidence during investigations.",
        checks: [],
      },
    ],
    image: "/images/blockCrimeDetection.webp",
    imageAlt: "Solving crimes",
  },
];

const fillCity = (s, city) => (s || "").replace(/\{city\}/g, city);

// Повертає структуру, сумісну з ServicesSection (subTitle + services) для англійської.
export const getCityServicesEn = (slug) => {
  const city = getCityEn(slug);
  return {
    subTitle: fillCity(citySubTitleEn, city),
    services: cityServicesEn.map((a) => ({
      ...a,
      area: fillCity(a.area, city),
      directions: a.directions.map((d) => ({ ...d, description: fillCity(d.description, city) })),
    })),
  };
};
