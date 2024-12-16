"use client";
import { useState } from 'react';

const FAQs = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "What services do you offer?",
      answer: "We offer a wide range of construction services including residential, commercial, and industrial construction, renovations, training and project management."
    },
    {
      question: "How can I get a quote?",
      answer: "You can get a quote by filling out our contact form or calling us directly. Our team will respond promptly with a detailed estimate."
    },
    {
      question: "What is your project timeline?",
      answer: "Project timelines vary based on scope and complexity. We strive to complete projects on time while maintaining quality."
    },
    {
      question: "Do you offer warranties on your work?",
      answer: "Yes, we provide warranties on our construction work to ensure your peace of mind."
    },
    {
      question: "Can I visit one of your previous projects?",
      answer: "Absolutely! We encourage potential clients to visit our completed projects. Please contact us for details."
    },
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-gray-100 text-gray-900">
      <div className="container mx-auto px-6 md:px-12">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-10">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden">
              <div
                className="flex justify-between items-center p-4 cursor-pointer hover:bg-gray-200 transition"
                onClick={() => toggleFAQ(index)}
              >
                <h3 className="text-lg font-semibold">{faq.question}</h3>
                <span className="text-xl">{activeIndex === index ? '-' : '+'}</span>
              </div>
              {activeIndex === index && (
                <div className="p-4 border-t border-gray-200">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQs;
