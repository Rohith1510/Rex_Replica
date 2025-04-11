'use client';

import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
  id: string;
}

export default function FAQSection() {
  const [openItem, setOpenItem] = useState<string | null>(null);

  const faqItems: FAQItem[] = [
    {
      id: "faq-1",
      question: "How do I access the Guide and Map?",
      answer: "You can access the Guide and Map through our mobile app or website after purchasing. Download the app from the App Store or Google Play Store, or log in to your account on our website."
    },
    {
      id: "faq-2",
      question: "Do I need internet connection?",
      answer: "Yes, you need an internet connection to initially download the Guide and Map. However, once downloaded, most features can be accessed offline. Some interactive features may still require connectivity."
    },
    {
      id: "faq-3",
      question: "How long will I have access?",
      answer: "Once purchased, you will have lifetime access to the Guide and Map. Updates to the content may be provided periodically at no additional cost."
    },
    {
      id: "faq-4",
      question: "Can I share it with my travel buddy?",
      answer: "Yes, you can share access with one travel companion. Please note that simultaneous usage on more than two devices is not supported."
    }
  ];

  const toggleItem = (id: string) => {
    setOpenItem(openItem === id ? null : id);
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Title Section */}
        <div className="col-span-1">
          <h2 className="text-2xl font-bold text-gray-900">Your questions,</h2>
          <h2 className="text-2xl font-bold text-gray-900">answered</h2>
        </div>
        
        {/* Custom Accordion Section */}
        <div className="col-span-1 md:col-span-2">
          <div className="divide-y divide-gray-200">
            {faqItems.map((item) => (
              <div key={item.id} className="py-4">
                <button
                  onClick={() => toggleItem(item.id)}
                  className="flex justify-between items-center w-full text-left py-2 text-gray-800 hover:text-gray-900 focus:outline-none"
                >
                  <span className="font-medium">{item.question}</span>
                  <span className="ml-6 flex-shrink-0">
                    {openItem === item.id ? (
                      <ChevronUp className="h-5 w-5" />
                    ) : (
                      <ChevronDown className="h-5 w-5" />
                    )}
                  </span>
                </button>
                
                {openItem === item.id && (
                  <div className="mt-2 text-gray-600">
                    <p>{item.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}