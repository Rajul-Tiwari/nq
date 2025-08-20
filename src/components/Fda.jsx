"use client";

import { Capture, GlobalTrial, GlobalView, Optimize } from "@/assets/Images";
import Image from "next/image";

export default function Fda() {
  const data = [
    {
      title: "Optimize Your Approval Workflow",
      tag: "FDA Drug Label Approval Timeline",
      description:
        "With NyquistPharma, you can now streamline your FDA drug label approval process with our platform. Effortlessly visualize label approval timelines, seamlessly compare versions with AI technology, and stay ahead of updates with automated notifications tailored to your needs.",
      button: "Watch Video",
      image: Optimize, // replace with your actual image
      reverse: false,
    },
    {
      tag: "ALERTS FILTER",
      title: "Capture Innovative Opportunities Faster",
      description:
        "Set Alerts for companies, drug names, and even regions, to stay ahead of every new development in your area of interest. This proactive approach ensures that your Biopharma brand can respond swiftly to emerging trends and opportunities, and maintain a strong competitive advantage.",
      button: "Watch Video",
      image: Capture, // replace with your actual image
      reverse: true,
    },
  ];

  return (
    <section className="px-6 py-16 space-y-20 bg-[#f5f5f5] md:px-16">
      {data.map((item, index) => (
        <div
          key={index}
          className={`mx-auto max-w-6xl flex gap-12 items-center ${
            item.reverse ? "md:[&>div:first-child]:order-2" : ""
          }`}
        >
          <div className="flex justify-center w-[60%]">
            <Image
              src={item.image.src}
              alt={item.title}
              width={600}
              height={350}
              className="w-full h-full rounded-lg shadow-md"
            />
          </div>
          {/* Text */}
          <div className="flex flex-col  w-[40%]">
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
        
        </div>
      ))}
    </section>
  );
}
