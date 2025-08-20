"use client";

import { useState } from "react";
import SalesContactModal from "./SalesContactModal";

export default function ContactUs() {
  const [isSalesOpen, setIsSalesOpen] = useState(false);
  const cards = [
    {
      color: "bg-[#4F46E5]", // Indigo line
      title: "General Info",
      desc: "Are you interested in our latest news or working with NyquistAI and need to get in touch?",
      buttonText: "Contact Info",
      buttonStyle: "border border-black text-black hover:bg-black hover:text-white",
    },
    {
      color: "bg-[#FACC15]", // Yellow line
      title: "Sales",
      desc: "Get in touch with our sales team to see how we can work together.",
      buttonText: "Contact Sales",
      buttonStyle: "bg-[#001224] text-white hover:bg-black",
    },
    {
      color: "bg-[#001224]", // Dark Blue line
      title: "Help & Support",
      desc: "Our support team is dedicated to give you answers fast.",
      buttonText: "Contact Support",
      buttonStyle: "border border-black text-black hover:bg-black hover:text-white",
    },
  ];

  return (
    <section className="py-20">
      <div className="px-6 mx-auto max-w-7xl">
        <h2 className="text-5xl font-hk-grotesk font-bold text-center text-[#001224]">Contact Us</h2>
        <p className="py-8 mt-2 text-xl text-center font-normal font-hk-grotesk gray-600 text-[#1f243c]">
          Have any questions? We’d love to hear from you.
        </p>

        <div className="grid grid-cols-1 gap-8 mt-12 md:grid-cols-3">
          {cards.map((card, index) => (
            <div
              key={index}
              className="flex flex-col p-6 rounded-lg"
            >
              {/* Top line */}
              <div className={`h-2 rounded-t-lg  ${card.color} mb-4`}></div>

              {/* Title */}
              <h3 className="text-2xl text-[#1f243c] font-semibold font-hk-grotesk py-6">
                {card.title}
              </h3>

              {/* Description */}
              <p className="mt-2 text-xl font-normal text-gray-600 font-hk-grotesk h-[100px]">{card.desc}</p>

              {/* Button */}
              <button
                className={`mt-6 px-5 py-4  w-1/2 text-nowrap rounded-full text-sm font-bold transition ${card.buttonStyle}`}
                onClick={() => {
                  if (card.title === "Sales") setIsSalesOpen(true);
                }}
              >
                {card.buttonText}
              </button>
            </div>
          ))}
        </div>

        <SalesContactModal open={isSalesOpen} onClose={() => setIsSalesOpen(false)} />
      </div>
    </section>
  );
}
