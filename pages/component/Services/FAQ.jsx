import React, { useState } from 'react';
import faq from '../../../assets/dataset/FAQ/web development.json';
import faq2 from '../../../assets/dataset/FAQ/mobile development.json';
import faq3 from '../../../assets/dataset/FAQ/api.json';
import faq4 from '../../../assets/dataset/FAQ/devops.json';
import faq5 from '../../../assets/dataset/FAQ/digital marketing.json';
import faq6 from '../../../assets/dataset/FAQ/roles.json';
import faq7 from '../../../assets/dataset/FAQ/business problem.json';
import faq8 from '../../../assets/dataset/FAQ/workflow.json';
import faq9 from '../../../assets/dataset/FAQ/training.json';

const allFaqData = [faq, faq2, faq3,faq4, faq5, faq6,faq7, faq8, faq9];

const FaqComponent = ({ page }) => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleFAQ = (index) => {
    if (index === expandedIndex) {
      setExpandedIndex(null);
    } else {
      setExpandedIndex(index);
    }
  };

  const faqData = allFaqData[page - 1] || [];

  return (
    <div className='px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12'>
      <div className="flex flex-col items-center justify-center">
        <h1 className="mb-6 text-center text-5xl tracking-tight leading-none md:text-5xl xl:text-5xl sm:items-center">
          Frequently asked questions
        </h1>
        <div className="w-1/2">
          {faqData.map((faq, index) => (
            <div
              key={faq.question}
              className="p-4 mb-4 cursor-pointer"
              onClick={() => toggleFAQ(index)}
            >
              <div className="flex items-center justify-between">
                <h3 className="text-xl mb-2">{faq.question}</h3>
                {expandedIndex === index && (
                  <svg
                    className="w-6 h-6 transition-transform transform rotate-180"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M12 15l-3-3l-3 3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                  </svg>
                )}
                {expandedIndex !== index && (
                  <svg
                    className="w-6 h-6 transition-transform"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M12 15l-3-3l-3 3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                  </svg>
                )}
              </div>
              {expandedIndex === index && <p>{faq.ans}</p>}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FaqComponent;
