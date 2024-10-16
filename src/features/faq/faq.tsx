import parse from "html-react-parser";
import { useState } from "react";
import { FaqJsonLd } from "../../components/ui/embed";
import { FAQListProps, FAQTextProps } from "../../types/ui-props";
import styles from "./faq.module.scss";

const FAQText = (props: FAQTextProps) => {
  const {question, answer} = props;
  const [isOpen, setIsOpen] = useState(false);

  const handleToggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <dt className={`${styles['question-text']} ${isOpen ? " " + styles['question-text--open'] : ''}`} onClick={handleToggleOpen}>
        <span className={styles['qa-toggle-button']} ></span>
          {parse(question)}
      </dt>
      <dd className={`${styles['answer-text']} ${isOpen ? " " + styles['answer-text--open'] : 'x'}`}>
        {parse(answer)}
      </dd>
    </>
  )
}

const FAQ = (props: FAQListProps) => {
  const {faqItems} = props;

  return (
    <>
      <dl className={styles['faq']}>
        {faqItems.map((faqItem: FAQTextProps, key: number) => (
          <div key={key} className={styles['faq__item']}>
            <FAQText
              question={faqItem.question}
              answer={faqItem.answer}
            />
          </div>
        ))}
      </dl>
      <FaqJsonLd faqItems={faqItems} />
    </>
  )
}

export default FAQ;