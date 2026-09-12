// Розмітка FAQPage для внутрішніх сторінок з масивом [{ q, a }].
export const getContentFaqJsonLd = (items = []) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: items.map((it) => ({
    "@type": "Question",
    name: it.q,
    acceptedAnswer: { "@type": "Answer", text: it.a },
  })),
});
