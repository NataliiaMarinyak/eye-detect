import PrivacyPolicySection from "@/sections/privacyPolicySection/PrivacyPolicySection";

export async function generateMetadata({ params }) {
  return {
    alternates: {
      canonical: `${process.env.NEXT_PUBLIC_SEO_URL}privacy-policy`,
    },
  };
}

const PryvacyPolicyPage = async ({ params }) => {
  const { lang } = params;

  const jsonLd = {
    "@context": "http://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        item: {
          "@id": process.env.NEXT_PUBLIC_SEO_URL,
          name: "Головна сторінка Поліграф.",
        },
      },
      {
        "@type": "ListItem",
        position: 2,
        item: {
          "@id": `${process.env.NEXT_PUBLIC_SEO_URL}privacy-policy`,
          name: "Політика конфіденційності.",
        },
      },
    ],
  };
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <PrivacyPolicySection lang={lang} />
    </>
  );
};

export default PryvacyPolicyPage;
