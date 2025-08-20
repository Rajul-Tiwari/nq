"use client";

import { Bussiness, Clinical, Regulatory } from "@/assets/Images";
import Image from "next/image";
import { PiCheckCircle } from "react-icons/pi";

export default function ToolsSection() {
  const data = [
    {
      icon: Clinical,
      title: "Clinical Trial Data",
      points: [
        "Obtain advanced trial market assessments powered by generative AI",
        "Access global trial data with English translations",
        "Easily search a centralized database by active ingredient",
      ],
    },
    {
      icon: Regulatory,
      title: "Regulatory Approval Planning",
      points: [
        "Review drugs of interest for global approval patterns or details for each territory",
        "Understand your competitors, their market and their regulatory path around the world",
        "Map your road to approval and expedite your responses to payors and regulatory entities",
      ],
    },
    {
      icon: Bussiness,
      title: "Business Development",
      points: [
        "Evaluate China and Japan, the largest emerging Pharma markets in the world",
        "Set Alerts for individual drugs, indications, or territory to keep on top of competition",
        "Utilize Document Writer to quickly summarize the competitive landscape",
      ],
    },
  ];

  return (
    <>
    <section className="w-full bg-[#185ADB]">
      {/* Blue background section */}
      <div className="grid gap-16 px-6 py-12 mx-auto max-w-7xl text-white md:grid-cols-3 md:px-16">
        {data.map((item, index) => (
          <div key={index} className="flex flex-col space-y-4 text-[#ffffff]">
            <Image src={item.icon} alt={`${item.title} icon`} width={24} height={24} className="w-12 h-12" />
            <h3 className="text-xl font-bold font-hk-grotesk">{item.title}</h3>
            <ul className="space-y-2 font-medium font-hk-grotesk">
              {item.points.map((point, i) => (
                <li key={i} className="flex gap-2 items-start">
                  <PiCheckCircle  className="mt-1 w-6 h-6 text-white" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* White section below */}
     
    </section>
    <div className="px-6 py-12 text-center md:px-16">
        <h2 className="text-2xl font-semibold leading-snug text-black md:text-[40px] font-hk-grotesk ">
          All the Tools Needed to Accelerate Your Innovation, <br />
          Strategic Decision-Making, and Time to Global Markets
        </h2>
      </div>
      </>
  );
}
