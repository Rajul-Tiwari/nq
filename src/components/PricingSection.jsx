"use client";

import { useState } from "react";

const pricingData = {
  individual: {
    Pharma: { price: 299, period: "month" },
    MedTech: { price: 349, period: "month" },
    "All Access": { price: 599, period: "month" },
  },
  teams: {
    Pharma: { price: 599, period: "month" },
    MedTech: { price: 699, period: "month" },
    "All Access": { price: 1199, period: "month" },
  },
};

const plans = [
  {
    title: "Pharma",
    description:
      "Everything you need to innovate pharmaceuticals faster with our BioPharma data intelligence platform",
    dataSources: [
      "Pharma Data in the United States, Canada, EU, Switzerland, China, and Japan",
      "Clinical Trials in the United States, China, Australia, New Zealand, and Japan",
    ],
  },
  {
    title: "MedTech",
    description:
      "Everything you need to innovate medical devices faster with our MedTech data intelligence platform",
    dataSources: [
      "Medtech Data in the United States, Canada, EU, Australia, China, and Japan",
      "Clinical Trials in the United States, China, Australia, New Zealand, and Japan",
      "Adverse Events in the United States and Australia",
    ],
    popular: true,
  },
  {
    title: "All Access",
    description:
      "Get the best of NyquistAI with access to both of our data intelligence platforms, NyquistMed and NyquistPharma",
    dataSources: [
      "All Data Sources included in Pharma",
      "All Data Sources included in MedTech",
    ],
  },
];

export default function PricingSection() {
  const [planType, setPlanType] = useState("individual");

  return (
    <section className="py-16 bg-white">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="mb-8 text-5xl font-bold font-hanken">
            Uncover Global Data Intelligence
          </h1>

          {/* Toggle Switch */}
          <div className="inline-flex gap-6 p-1 mb-12 bg-gray-100 rounded-full border-2 border-black">
            <button
              onClick={() => setPlanType("individual")}
              className={`px-6 py-2 rounded-full text-sm font-hk-grotesk transition-colors ${
                planType === "individual"
                  ? "bg-orange-500 text-white shadow-sm"
                  : "text-gray-700 hover:text-gray-900"
              }`}
            >
              Individual
            </button>
            <button
              onClick={() => setPlanType("teams")}
              className={`px-6 py-2 rounded-md text-sm font-hk-grotesk transition-colors ${
                planType === "teams"
                  ? "bg-orange-500 text-white shadow-sm"
                  : "text-gray-700 hover:text-gray-900"
              }`}
            >
              Teams
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {plans.map((plan, index) => (
            <div
              key={plan.title}
              className={`relative rounded-lg shadow-lg border   ${
                plan.popular
                  ? " "
                  : "border-gray-200 bg-white"
              }`}
            >
              <div className="">
                <div className="p-6 h-[120px]">
                  <div className="flex justify-between items-center mb-3">
                    <h3 className="text-2xl font-bold text-gray-900">
                      {plan.title}
                    </h3>
                    {plan.popular && (
                      <span className="px-3 py-1 text-xs font-medium text-white bg-gray-900 rounded-full">
                        MOST POPULAR
                      </span>
                    )}
                  </div>
                  <p className="mb-6 text-sm leading-relaxed text-gray-600">
                    {plan.description}
                  </p>
                </div>
                <div className="p-6 mb-6">
                  <div className="flex gap-2 item-center">
                    <div>
                      <span className="font-bold text-[#001224] text-[60px]">
                        ${pricingData[planType][plan.title].price}
                      </span>
                    </div>
                    <div className="flex flex-col justify-center text-[#27272A] text-sm font-bold font-hanken">
                      <span>per</span>
                      <span>month</span>
                    </div>
                  </div>
                </div>

                <div className=" py-2 mb-6 text-base text-center font-hanken font-bold text-[#ffffff]  bg-[#001224]">
                  Pay yearly and save 20%
                </div>

                <div className="p-6">
                  <h4 className="mb-3 text-sm font-bold font-hanken">
                    Data Sources
                  </h4>
                  <ul className="mb-6 space-y-2 h-[150px]">
                    {plan.dataSources.map((source, idx) => (
                      <li key={idx} className="flex gap-2 items-start">
                        <svg
                          className="flex-shrink-0 mt-0.5 w-5 h-5 text-blue-600"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span className="text-sm font-normal">{source}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="text-center">
                  <button className="px-4 py-3 mb-8 w-1/2 text-lg font-bold text-center text-white bg-blue-600 rounded-full transition-colors hover:bg-blue-700">
                    Purchase
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
