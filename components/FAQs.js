import { useState } from 'react';
import { BiChevronDown, BiChevronUp } from 'react-icons/bi';

const faqs = [
  {
    question: 'What is Sustainable Agency?',
    answer: 'Sustainable Agency is a Social Media Marketing Agency geared towards helping solar business get more leads therefore generating more sales.'
  },
  {
    question: 'How our services work.',
    answer: 'By leveraging our expertise in social media marketing, we can create and execute a comprehensive strategy that will help your solar panel company gain more visibility and reach a wider audience on social media. We will optimize your content and ad campaigns to increase engagement and conversions, and help you grow your following and customer base.'
  },
  {
    question: 'How many clients do you take on per week?',
    answer: 'To ensure that we provide our clients with the attention and support they deserve, we limit our intake to 4 clients per week. This allows us to dedicate enough time and resources to each client and ensure that we deliver high-quality work that meets their unique needs and goals.'
  }
];

export default function FAQs() {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleExpanded = (index) => {
    if (index === expandedIndex) {
      setExpandedIndex(null);
    } else {
      setExpandedIndex(index);
    }
  };

  return (
    <div className='w-full'>
      {faqs.map((faq, index) => (
        <div key={index} className='border border-black m-4 p-2 rounded-2xl'>
          <button className='font-bold md:font-medium text-[14px] md:text-2xl flex justify-between w-full items-center' onClick={() => toggleExpanded(index)}>
            {faq.question}
            <div className={`icon ${expandedIndex === index ? 'up' : 'down'}`}>
              {expandedIndex === index ? <BiChevronDown /> : <BiChevronDown />}
            </div>
          </button>
          <div className={`answer-container ${expandedIndex === index ? 'expanded' : ''}`}>
            <p className='my-3 text-[#424148]'>{faq.answer}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
