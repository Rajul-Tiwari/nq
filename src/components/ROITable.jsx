"use client";  // ✅ Add this line

// src/components/ROITable.jsx
import React, { useState } from "react";

const roiData = {
  "Business Leaders": [
    {
      task: "Competitive Landscape Assessment",
      currentState:
        "Researching and reporting on the competitive landscape of devices is time consuming, inefficient, and often relies on a consultant’s prior knowledge of the space for completeness.",
      usingAI:
        "Efficiently evaluate the device landscape by fast and accurate search results and access to AI suggested similar devices to identify devices that may have been overlooked by traditional methods.",
      value:
        "More comprehensive understanding of the competitive landscape of devices.",
    },
    {
      task: "Updates to Market/Competitors",
      currentState:
        "Keeping up to date on the market can be time consuming and difficult using traditional methods. Teams need to be made aware of new competitors as soon as possible to pose the best and most timely response.",
      usingAI:
        "With NyquistAI’s alert features, you can have an email in your inbox informing you of any new competitors, recalls, or significant adverse events of interest as soon as they are available.",
      value:
        "Defend market share with quicker and more informed competitive intel.",
    },
    {
      task: "Global Trial Market Assessment",
      currentState:
        "Researching and reporting on the competitive landscape of devices is time consuming, inefficient, and often relies on a consultant’s prior knowledge of the space for completeness.",
      usingAI:
        "Efficiently evaluate the device landscape by fast and accurate search results and access to AI suggested similar devices to identify devices that may have been overlooked by traditional methods.",
      value:
        "More comprehensive understanding of the competitive landscape of devices.",
    },
  ],
  "Clinical/Innovation Leaders": [],
  "Regulatory/Medical/Operation Leaders": [],
};

const ROITable = () => {
  const [openSection, setOpenSection] = useState("Business Leaders");

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <section className="px-6 py-16 text-black bg-white">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-2 text-3xl font-semibold md:text-5xl">
          How Nyquist Delivers ROI
        </h2>
        <p className="mb-8 text-[23px] font-normal font-hk-grotesk py-4">
          ROI: On average, 4 hours of time saved per month will cover the cost
          of the monthly subscription for one user.
        </p>

        {Object.keys(roiData).map((section) => (
          <div key={section} className="mb-4 border-b-2 border-gray-900">
            {/* Accordion Header */}
            <button
              onClick={() => toggleSection(section)}
              className="flex justify-between items-center py-3 w-full text-[32px] font-semibold font-hk-grotesk transition hover:text-blue-600"
            >
              {section}
              <span className="text-[32px] font-semibold font-hk-grotesk">
                {openSection === section ? "−" : "+"}
              </span>
            </button>
              <div className="border border-black"></div>
           

            {/* Accordion Body */}
            {openSection === section && roiData[section].length > 0 && (
              <div className="overflow-x-auto mt-4 rounded-xl">
                <table className="w-full text-left border-0 border-collapse">
                  <thead>
                    <tr className="text-sm text-[#ffffff] font-hk-grotesk   bg-[#001224]">
                      <th className="p-3">Task</th>
                      <th className="p-3">Current State</th>
                      <th className="p-3">Using Nyquist AI</th>
                      <th className="p-3">Value</th>
                    </tr>
                  </thead>
                  <tbody>
                    {roiData[section].map((row, i) => (
                      <tr key={i} className="text-sm">
                        <td className="p-3 text-sm font-normal text-nowrap font-hk-grotesk">{row.task}</td>
                        <td className="p-3 text-sm font-normal font-hk-grotesk">{row.currentState}</td>
                        <td className="p-3 text-sm font-normal font-hk-grotesk">{row.usingAI}</td>
                        <td className="p-3 text-sm font-normal font-hk-grotesk">{row.value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default ROITable;
    