'use client';
import React, { useState } from 'react';

const faqs = [
  {
    question: 'Who can join Troop 711?',
    answer:
      'Troop 711 is open to all youth in grades 6 through 12. We welcome both boys and girls who are interested in leadership, adventure, and community service.',
  },
  {
    question: 'When and where do meetings take place?',
    answer:
      'We meet every Thursday from 7:00 to 8:00 PM at St. Ambrose Church in Lincoln, Rhode Island.',
  },
  {
    question: 'What should I bring to my first meeting?',
    answer:
      'Just bring yourself, a parent or guardian, and a willingness to learn and have fun! You don’t need a uniform right away.',
  },
  {
    question: 'How much does it cost to join?',
    answer:
      'Troop 711 has annual dues to cover supplies, registration, and events. Financial assistance is available if needed.',
  },
  {
    question: 'Do I need prior Scouting experience?',
    answer:
      'Nope! We welcome new Scouts at any level, whether or not you’ve been in Cub Scouts or another unit.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 px-6 md:px-16 bg-[#0f350f] text-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">Frequently Asked Questions</h2>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div
  key={idx}
  className={`bg-[#1d5c1d] text-white rounded-lg border border-[#267426] transition-all duration-300 overflow-hidden`}
>
  <button
    onClick={() => toggle(idx)}
    className="w-full text-left p-5 font-semibold focus:outline-none focus:ring-2 focus:ring-green-400 hover:bg-[#216921]"
  >
    {faq.question}
  </button>

 <div
  className={`transition-all duration-300 ease-in-out overflow-hidden
    ${openIndex === idx ? 'px-5 pb-5 text-sm text-green-100 max-h-[400px] opacity-100' : 'max-h-0 opacity-0'}
  `}
>
  {openIndex === idx && (
    <p>
      {faq.answer}
    </p>
  )}
</div>
</div>
          ))}
        </div>
      </div>
    </section>
  );
}
