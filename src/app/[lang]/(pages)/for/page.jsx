import PageHero from "@/sections/pageHero/PageHero";
import InfoSections from "@/sections/infoPage/InfoSections";
import { audiences } from "@/data/pages/audiencesData";
import { cta } from "@/data/pages/audiencesShared";
import { buildPageMetadata, breadcrumbsJsonLd } from "@/helpers/buildPageMetadata";

// Перелік галузевих сторінок /for/*: одна картка на аудиторію з посиланням.
const T = {
  uk: {
    seo: { title: "Детектор брехні для бізнесу: рішення для вашої галузі — EyeDetect", description: "Перевірка на детекторі брехні EyeDetect для юристів, банків, охорони, HR, логістики, ритейлу, мілтеху, клінік, страхових та інших. Львів, виїзд по Україні, онлайн.", keywords: ["детектор брехні для бізнесу", "поліграф для компанії", "перевірка персоналу галузі", "EyeDetect для бізнесу"], crumbHome: "Головна", crumb: "Для кого" },
    hero: { eyebrow: "Для кого", h1: "Детектор брехні для вашої галузі", sub: "Один метод, різні задачі. Оберіть свою сферу: на кожній сторінці описано, які ризики закриває тест EyeDetect, що можна перевірити і який формат підходить: кабінет у Львові, виїзд або онлайн.", facts: ["15 галузей", "кабінет, виїзд, онлайн", "6–8 осіб за день з виїздом", "звіт одразу після тесту"] },
    listTitle: "Оберіть свою сферу",
    service: "EyeDetect для бізнесу",
  },
  ru: {
    seo: { title: "Детектор лжи для бизнеса: решения для вашей отрасли — EyeDetect", description: "Проверка на детекторе лжи EyeDetect для юристов, банков, охраны, HR, логистики, ритейла, милтеха, клиник, страховых и других. Львов, выезд по Украине, онлайн.", keywords: ["детектор лжи для бизнеса", "полиграф для компании", "проверка персонала отрасли", "EyeDetect для бизнеса"], crumbHome: "Главная", crumb: "Для кого" },
    hero: { eyebrow: "Для кого", h1: "Детектор лжи для вашей отрасли", sub: "Один метод, разные задачи. Выберите свою сферу: на каждой странице описано, какие риски закрывает тест EyeDetect, что можно проверить и какой формат подходит: кабинет во Львове, выезд или онлайн.", facts: ["15 отраслей", "кабинет, выезд, онлайн", "6–8 человек в день с выездом", "отчёт сразу после теста"] },
    listTitle: "Выберите свою сферу",
    service: "EyeDetect для бизнеса",
  },
  en: {
    seo: { title: "Lie Detector for Business: Solutions by Industry — EyeDetect", description: "EyeDetect lie detector testing for lawyers, banks, security, HR, logistics, retail, miltech, clinics, insurers and more. Lviv office, on-site across Ukraine, online.", keywords: ["lie detector for business", "polygraph for companies", "employee screening by industry", "EyeDetect for business"], crumbHome: "Home", crumb: "For whom" },
    hero: { eyebrow: "For whom", h1: "Lie detector for your industry", sub: "One method, different tasks. Pick your field: each page explains which risks an EyeDetect test covers, what can be checked and which format fits: our Lviv office, on-site or online.", facts: ["15 industries", "office, on-site, online", "6–8 people a day on-site", "report right after the test"] },
    listTitle: "Choose your field",
    service: "EyeDetect for business",
  },
};

const firstSentence = (s = "") => (s.match(/^[^.]+\./) || [s])[0];

export async function generateMetadata({ params }) {
  const { lang } = params;
  const t = T[lang] || T.uk;
  return buildPageMetadata({ lang, path: "for", title: t.seo.title, description: t.seo.description, keywords: t.seo.keywords });
}

const ForIndexPage = ({ params }) => {
  const { lang } = params;
  const t = T[lang] || T.uk;
  const crumbs = breadcrumbsJsonLd(lang, [["", t.seo.crumbHome], ["for", t.seo.crumb]]);
  const items = audiences.map((a) => {
    const d = a[lang] || a.uk;
    return { title: d.seo.crumb, text: firstSentence(d.hero.sub), href: `/for/${a.slug}` };
  });
  const blocks = [
    { type: "cards", title: t.listTitle, items },
    (cta[lang] || cta.uk)(t.service),
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(crumbs) }} />
      <PageHero eyebrow={t.hero.eyebrow} title={t.hero.h1} sub={t.hero.sub} facts={t.hero.facts} primary={blocks[1].button} service={t.service} photo="/images/converus/eyedetect-station-front.webp" photoAlt="EyeDetect" />
      <InfoSections blocks={blocks} lang={lang} />
    </>
  );
};

export default ForIndexPage;
