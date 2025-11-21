import { useState } from "react";
import { FiChevronDown } from "react-icons/fi";

const faqData = [
  {
    question: "How does ZapShift delivery work?",
    answer:
      "ZapShift ensures fast, safe, and reliable parcel delivery across the country. Simply create a delivery request, choose a rider, and track your parcel in real time.",
  },
  {
    question: "Is ZapShift available for all cities?",
    answer:
      "We currently operate in major cities and are expanding rapidly. You’ll soon be able to send and receive parcels from anywhere in the country.",
  },
  {
    question: "Can I track my parcel in real time?",
    answer:
      "Absolutely! ZapShift provides live tracking so you always know where your parcel is and when it will arrive.",
  },
  {
    question: "Does ZapShift support business deliveries?",
    answer:
      "Yes! We offer dedicated business services with bulk delivery options, priority routes, and real-time dashboard tracking.",
  },
  {
    question: "What if my parcel gets delayed or lost?",
    answer:
      "Our support team is available 24/7 to ensure your parcel is safe. Delays are rare, but we assist immediately if anything unexpected happens.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      {/* Heading */}
      <h2 className="text-3xl font-bold mb-3 text-[#1F1F1F]">
        Frequently Asked Questions (FAQ)
      </h2>

      {/* Paragraph */}
      <p className="text-[#606060] mb-10">
        Enhance your delivery experience with ZapShift. Fast service, easy
        tracking, and seamless parcel handling — all in one place!
      </p>

      {/* FAQ Accordion */}
      <div className="space-y-4">
        {faqData.map((item, index) => (
          <div
            key={index}
            className="border rounded-xl p-5 bg-white shadow-sm cursor-pointer"
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
          >
            {/* Question Row */}
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-medium text-[#1F1F1F]">
                {item.question}
              </h3>

              <FiChevronDown
                className={`text-[#1F1F1F] transition-transform duration-300 ${
                  openIndex === index ? "rotate-180" : ""
                }`}
                size={22}
              />
            </div>

            {/* Answer */}
            {openIndex === index && (
              <p className="mt-4 text-[#606060] leading-relaxed">
                {item.answer}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
