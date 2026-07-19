import { useState } from "react";
import "./faq.css";

const faqData = [
  {
    question: "What is CodeShelf?",
    answer:
      "CodeShelf helps developers save, organize and reuse code snippets in one place.",
  },
  {
    question: "Is CodeShelf free to use?",
    answer:
      "Yes! You can start using CodeShelf for free. More advanced features may be added later.",
  },
  {
    question: "Which programming languages are supported?",
    answer:
      "You can store snippets for JavaScript, Python, Java, C++, HTML, CSS and many more.",
  },
  {
    question: "Can I organize snippets into collections?",
    answer:
      "Absolutely. Create collections and custom tags to keep everything organized.",
  },
  {
    question: "Is my code stored securely?",
    answer:
      "Yes. Your snippets are securely stored and only accessible by you.",
  },
];

const FAQ = () => {
  const [active, setActive] = useState(null);

  const toggle = (index) => {
    setActive(active === index ? null : index);
  };

  return (
    <section className="faq" id="faq" data-aos="fade-up">
      <div className="faq-left">
        <span>FAQ</span>

        <h1>
          Questions,
          <br />
          answered.
        </h1>
      </div>

      <div className="faq-right">
        {faqData.map((item, index) => (
          <div className="faq-item" key={index}>
            <button className="faq-question" onClick={() => toggle(index)}>
              {item.question}

              <span className={active === index ? "rotate" : ""}>+</span>
            </button>

            <div className={`faq-answer ${active === index ? "open" : ""}`}>
              <p>{item.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
