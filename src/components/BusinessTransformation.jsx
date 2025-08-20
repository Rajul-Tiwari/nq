// src/components/BusinessTransformation.jsx
import React from "react";

const items = [
  {
    title: "Efficiency and Productivity",
    description:
      "NyquistAI can automate routine tasks, freeing up employees to focus on more complex and strategic tasks. This leads to increased efficiency and productivity.",
    roi: "ROI - Over 50% time savings",
  },
  {
    title: "Informed Decision-Making",
    description:
      "Data-driven decision making allows companies to make decisions based on facts, trends, and statistical numbers. This can lead to more accurate and effective decisions.",
    roi: "ROI - Up to 90% time savings",
  },
  {
    title: "Innovation",
    description:
      "NyquistAI can help companies innovate by identifying new opportunities and trends. In particular, transforms decades of clinical and regulatory data into actionable insights, fostering innovation.",
    roi: "ROI - Up to 90% time savings",
  },
  {
    title: "Competitive Advantage",
    description:
      "Companies that leverage NyquistAI and data-driven decision making often gain a competitive edge. They can identify trends and insights that others may miss, allowing them to stay ahead of the competition.",
    roi: "ROI - $10k to $1M+",
  },
];

const BusinessTransformation = () => {
  return (
    <section className="px-6 py-12 mx-auto max-w-7xl">
      <h2 className="mb-10 text-5xl font-semibold text-[#1d1e3d]">
        AI-Driven Business Transformation
      </h2>

      <div className="grid gap-16 md:grid-cols-2">
        {items.map((item, index) => (
          <div
            key={index}
            className="rounded-2xl transition"
          >
            <h3 className="mb-2 text-base font-semibold text-blue-800 uppercase font-hk-grotesk">
              {item.title}
            </h3>
            <p className="mb-4 font-hk-grotesk">{item.description}</p>
            <span className="inline-block px-3 py-2 text-base font-medium bg-blue-100 rounded-md text-[#1E4ED9] font-hk-grotesk">
              {item.roi}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BusinessTransformation;
