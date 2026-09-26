import PageHero from "@/sections/pageHero/PageHero";
import InfoSections from "@/sections/infoPage/InfoSections";
import { situations } from "@/data/pages/situationsData";
import { cta } from "@/data/pages/audiencesShared";
import { buildPageMetadata, breadcrumbsJsonLd } from "@/helpers/buildPageMetadata";

// Перелік сторінок ситуацій /situations/*: одна картка на ситуацію з посиланням.
const T = {
  uk: {
    seo: { title: "Детектор брехні: у яких ситуаціях допомагає тест EyeDetect", description: "Вірність, крадіжка, витік, кандидат на роботу, спір без доказів, гроші в сім'ї, азартні ігри, перевірка перед шлюбом, повторна перевірка. Львів, виїзд, онлайн.", keywords: ["детектор брехні ситуації", "коли потрібен поліграф", "перевірка на поліграфі випадки", "EyeDetect ситуації"], crumbHome: "Головна", crumb: "Ситуації" },
    hero: { eyebrow: "Ситуації", h1: "У яких ситуаціях допомагає детектор брехні", sub: "Оберіть свій випадок. На кожній сторінці: як тест вирішує саме цю проблему, приклади питань, формат і ціна, відповіді на типові запитання.", facts: ["питання про факти, не про почуття", "онлайн або в кабінеті", "звіт до 5 хвилин після тесту"] },
    listTitle: "Оберіть свою ситуацію",
    service: "EyeDetect",
  },
  ru: {
    seo: { title: "Детектор лжи: в каких ситуациях помогает тест EyeDetect", description: "Верность, кража, утечка, кандидат на работу, спор без доказательств, деньги в семье, азартные игры, перед браком, повторная проверка. Львов, выезд, онлайн.", keywords: ["детектор лжи ситуации", "когда нужен полиграф", "проверка на полиграфе случаи", "EyeDetect ситуации"], crumbHome: "Главная", crumb: "Ситуации" },
    hero: { eyebrow: "Ситуации", h1: "В каких ситуациях помогает детектор лжи", sub: "Выберите свой случай. На каждой странице: как тест решает именно эту проблему, примеры вопросов, формат и цена, ответы на типичные вопросы.", facts: ["вопросы о фактах, не о чувствах", "онлайн или в кабинете", "отчёт до 5 минут после теста"] },
    listTitle: "Выберите свою ситуацию",
    service: "EyeDetect",
  },
  en: {
    seo: { title: "Lie Detector: Situations Where an EyeDetect Test Helps", description: "Fidelity, theft, leaks, job candidates, disputes without evidence, family money, gambling, premarital checks, second opinion. Lviv office, on-site, online.", keywords: ["lie detector situations", "when to use a polygraph", "polygraph test cases", "EyeDetect situations"], crumbHome: "Home", crumb: "Situations" },
    hero: { eyebrow: "Situations", h1: "Situations where a lie detector helps", sub: "Pick your case. Each page explains how the test solves that specific problem, gives sample questions, the format and price, and answers to common questions.", facts: ["questions about facts, not feelings", "online or in our Lviv office", "report within 5 minutes after the test"] },
    listTitle: "Choose your situation",
    service: "EyeDetect",
  },
};

const firstSentence = (s = "") => (s.match(/^[^.]+\./) || [s])[0];

export async function generateMetadata({ params }) {
  const { lang } = params;
  const t = T[lang] || T.uk;
  return buildPageMetadata({ lang, path: "situations", title: t.seo.title, description: t.seo.description, keywords: t.seo.keywords });
}

const SituationsIndexPage = ({ params }) => {
  const { lang } = params;
  const t = T[lang] || T.uk;
  const crumbs = breadcrumbsJsonLd(lang, [["", t.seo.crumbHome], ["situations", t.seo.crumb]]);
  const items = situations.map((s) => {
    const d = s[lang] || s.uk;
    return { title: d.h1, text: firstSentence(d.sub), href: `/situations/${s.slug}` };
  });
  const blocks = [
    { type: "cards", title: t.listTitle, items },
    (cta[lang] || cta.uk)(t.service),
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(crumbs) }} />
      <PageHero eyebrow={t.hero.eyebrow} title={t.hero.h1} sub={t.hero.sub} facts={t.hero.facts} primary={blocks[1].button} service={t.service} photo="/images/converus/eyedetect-examinee.webp" photoAlt="EyeDetect" />
      <InfoSections blocks={blocks} lang={lang} />
    </>
  );
};

export default SituationsIndexPage;
