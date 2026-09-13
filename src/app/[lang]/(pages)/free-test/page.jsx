import PageHero from "@/sections/pageHero/PageHero";
import InfoSections from "@/sections/infoPage/InfoSections";
import ContentFaq from "@/components/ContentFaq/ContentFaq";
import OrderForm from "@/components/OrderForm/OrderForm";
import { getFreeTestPage } from "@/data/pages/freeTestPage";
import { getDictionary } from "@/helpers/getDictionary";
import { getContentFaqJsonLd } from "@/helpers/getContentFaqJsonLd";
import { buildPageMetadata, breadcrumbsJsonLd } from "@/helpers/buildPageMetadata";
import styles from "./freeTest.module.scss";

export async function generateMetadata({ params }) {
  const { lang } = params;
  const d = getFreeTestPage(lang);
  return buildPageMetadata({ lang, path: "free-test", title: d.seo.title, description: d.seo.description, keywords: d.seo.keywords });
}

// Лендинг безкоштовного тесту VerifEye «на цифру»: герой, як це відбувається,
// форма заявки (ім'я + телефон), FAQ.
const FreeTestPage = async ({ params }) => {
  const { lang } = params;
  const d = getFreeTestPage(lang);
  const dictionary = await getDictionary(lang);
  const crumbs = breadcrumbsJsonLd(lang, [["", d.seo.crumbHome], ["free-test", d.seo.crumb]]);
  const faqTitle = { uk: "Питання і відповіді", ru: "Вопросы и ответы", en: "Questions and answers" }[lang] || "Питання і відповіді";

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(crumbs) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(getContentFaqJsonLd(d.faq)) }} />
      <PageHero
        eyebrow={d.hero.eyebrow}
        title={d.hero.h1}
        sub={d.hero.sub}
        facts={d.hero.facts}
        primary={d.hero.primary}
        service={d.form.service}
        photo="/images/converus/verifeye-test.webp"
        photoAlt="VerifEye"
      />
      <InfoSections blocks={d.blocks} lang={lang} />
      <section id="free-test-form" className={styles.formSection}>
        <div className={`container ${styles.formInner}`}>
          <h2 className={styles.formTitle}>{d.form.title}</h2>
          <p className={styles.formText}>{d.form.text}</p>
          <div className={styles.formWrap}>
            <OrderForm dictionary={dictionary} service={d.form.service} />
          </div>
        </div>
      </section>
      <ContentFaq items={d.faq} lang={lang} title={faqTitle} />
    </>
  );
};

export default FreeTestPage;
