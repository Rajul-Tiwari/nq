'use client'

import { useState } from 'react'

const faqData = [
  {
    question: "Why should my company use NyquistAI?",
    answer: "NyquistAI provides comprehensive data intelligence solutions that help companies make better decisions, streamline research processes, and accelerate innovation in pharmaceuticals and medical devices."
  },
  {
    question: "How much does NyquistAI cost?",
    answer: "Our pricing starts at $199/month for NyquistIQ and $299/month for NyquistScholar. We also offer team packages and enterprise solutions. Contact us for detailed pricing information."
  },
  {
    question: "What are my payment options? Do you charge as a package or per seat?",
    answer: "We offer flexible payment options including monthly and annual subscriptions. Pricing is per seat, and we provide volume discounts for larger teams. Annual plans include a 20% discount."
  },
  {
    question: "Our team has several accounts that are not being actively used, but which we don't want to disable. Do we still have to pay for them?",
    answer: "Yes, you are charged for all active seats regardless of usage. However, we can work with you to optimize your subscription and temporarily suspend unused accounts if needed."
  },
  {
    question: "What if I have questions about my account?",
    answer: "Our support team is available to help with any account-related questions. You can reach us through our contact form, email support, or schedule a call with our team."
  }
]

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null)

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="py-16 bg-white">
      <div className="px-4 mx-auto max-w-4xl sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="text-[38px] font-hk-grotesk font-bold text-black">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-0">
          {faqData.map((faq, index) => (
            <div key={index} className="border-b border-gray-200 last:border-b-0">
              <button
                onClick={() => toggleFAQ(index)}
                className="flex justify-between items-center py-6 w-full text-left transition-colors hover:bg-gray-50"
              >
                <span className="pr-4 text-lg font-bold text-black font-hk-grotesk">
                  {faq.question}
                </span>
                <svg
                  className={`w-5 h-5 text-gray-500 transition-transform ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              
              {openIndex === index && (
                <div className="px-6 pb-6">
                  <p className="leading-relaxed text-gray-600 font-hk-grotesk">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
