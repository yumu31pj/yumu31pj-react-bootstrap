import { FAQListProps, FAQTextProps } from "../../../types/ui-props";

const FaqJsonLd: React.FC<FAQListProps> = ({ faqItems }) => {
  // Generate JSON-LD data based on the FAQ data
  const generateJsonLd = (faqItems: FAQTextProps[]) => {
    const jsonData = {
      "@context": "http://schema.org",
      "@type": "FAQPage",
      "mainEntity": faqItems.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.answer,
        },
      })),
    };

    return JSON.stringify(jsonData);
  };

  // Generate JSON-LD data
  const jsonLdData = generateJsonLd(faqItems);

  // Insert JSON-LD data
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: jsonLdData }}
    />
  );
};

export { FaqJsonLd };
