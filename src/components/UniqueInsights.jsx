"use client";

import { Capture, Optimize } from "@/assets/Images";
import Image from "next/image";

export default function UniqueInsights() {
  const data = [
    {
      title: "Unlock Unique Insights into Emerging Markets",
      tag: "ASIA PACIFIC",
      description:
        "Explore a thorough inventory of globally recognized equivalent drugs for both brand and generic names, equipping your BioPharma brand with the information needed to maintain a competitive edge in the global market.",
        button: "Watch Video",
      image: Optimize, // replace with your actual image
      reverse: false,
    },
  ];

  return (
    <section className="px-6 py-16 space-y-20 bg-[#f5f5f5] md:px-16">
      {data.map((item, index) => (
        <div
          key={index}
          className="flex gap-12 items-center mx-auto max-w-7xl"
        >
          {/* Text */}
          <div className="flex flex-col space-y-4 w-[40%]">
            <span className="text-lg font-semibold tracking-wide text-gray-500 uppercase font-hk-grotesk">
              {item.tag}
            </span>
            <h3 className="text-[40px] leading-[45px] font-semibold font-hk-grotesk w-[90%]">
              {item.title}
            </h3>
            <p className="text-lg font-normal font-hk-grotesk">
              {item.description}
            </p>
            <button className="w-fit mt-2 bg-[#FFC107] text-[#1d1e3d] px-8 py-2 rounded-full font-medium text-base hover:bg-[#e0a800] transition font-hk-grotesk">
              {item.button}
            </button>
          </div>

          {/* Image */}
          <div className="flex justify-center w-[60%]">
            <Image
              src={item.image.src}
              alt={item.title}
              width={600}
              height={350}
              className="w-full h-full rounded-lg shadow-md"
            />
          </div>
        </div>
      ))}
    </section>
  );
}
