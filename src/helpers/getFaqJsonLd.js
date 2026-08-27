import { getLocalizedField } from "@/helpers/getLocalizedField";

/**
 * Формує розмітку FAQPage зі списку питань і відповідей.
 *
 * Блок «Часті питання» вже є на головній і на всіх міських сторінках,
 * але пошуковики про нього не знали. Розмітка дає розширений сніпет
 * у видачі — більше місця й вищий CTR без зміни позиції.
 */
export const getFaqJsonLd = (data, lang) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: (data || []).map((el) => ({
    "@type": "Question",
    name: getLocalizedField(el, "question", lang),
    acceptedAnswer: {
      "@type": "Answer",
      text: getLocalizedField(el, "answer", lang),
    },
  })),
});
