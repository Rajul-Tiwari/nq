"use client";

import { GlobalTrial, GlobalView } from "@/assets/Images";
import Image from "next/image";

export default function GlobalSection() {
  const data = [
    {
      tag: "GLOBAL CLINICAL TRIALS",
      title: "Optimize for Global Trial Design Success",
      description:
        "Save time and effort in global trial site research, collection, cleaning, and analysis with our Clinical Trial module. Unlike traditional databases, our AI comprehends context and connects information seamlessly. Forget multiple filters and use natural language search to find trials by indication, technology, patient type, and more.",
      button: "Watch Video",
      image: GlobalTrial, // replace with your actual image
      reverse: false,
    },
    {
      tag: "APPROVAL MAP",
      title: "Gain a Global View of Biopharma Innovation",
      description:
        "Easily discover which countries have approved specific drugs by the active ingredient, commercial brand names, indications, company and synonyms. Use the active ingredient to find similar products in the worldwide markets. Our powerful platform enables you to make the strategic decisions that drive brand growth.",
      button: "Watch Video",
      image: GlobalView, // replace with your actual image
      reverse: true,
    },
  ];

  return (
    <section className="px-6 py-16 space-y-20 bg-[#f5f5f5] md:px-16">
      {data.map((item, index) => (
        <div
          key={index}
          className={`mx-auto max-w-6xl flex gap-12  items-center ${
            item.reverse ? "md:[&>div:first-child]:order-2" : ""
          }`}
        >
          {/* Text */}
          <div className="flex flex-col  w-[40%]">
            <span className="text-lg font-semibold tracking-wide text-gray-500 uppercase font-hk-grotesk">
              {item.tag}
            </span>
            <h3 className="text-[40px] leading-[45px] font-semibold font-hk-grotesk w-[90%]">
              {item.title}
            </h3>
            <p className="text-lg font-normal leading-relaxed font-hk-grotesk">
              {item.description}
            </p>
            <button className="w-fit bg-[#FFC107] mt-2 text-[#1d1e3d] px-8 py-2 rounded-full font-medium text-base hover:bg-[#e0a800] transition font-hk-grotesk">
              {item.button}
            </button>
          </div>

          {/* Image */}
          <div className=" w-[60%]">
            <Image
              src={item.image.src}
              alt={item.title}
              width={1000}
              height={350}
              className="w-full h-full rounded-lg shadow-md"
            />
          </div>
        </div>
      ))}
    </section>
  );
}
