"use client"; // <-- This tells Next.js this component should run in the browser

import { useState } from "react";
import Image from "next/image";
import { Capsule, Global, Meditech } from "@/assets/Images";

export default function GlobalIntelligence() {
  const [openDescription, setOpenDescription] = useState(null);

  const handleTitleClick = (platformIndex) => {
    if (openDescription === platformIndex) {
      setOpenDescription(null); // Close if already open
    } else {
      setOpenDescription(platformIndex); // Open only this one
    }
  };

  const platforms = [
    {
     
      icon: Meditech,
      title: "Global Medtech Data Platform",
      description:
        "Our Global MedTech platform contains global data from the largest and most consequential markets to find essential information from all information and documents used to gain approval, Adverse Events, global manufacturers and more.",
        button:"Learn more"
    },
    {
     
      icon: Capsule,
      title: "Global Pharma Data Platform",
      description:
        "Our Global Pharma platform contains all information related to all on-market interventions in the world's largest markets and allows you to gain critical market insights, global market trends and understand, create and execute winning regulatory strategies.",
         button:"Learn more"
    },
  ];

  return (
    <section className="bg-[#051225] text-white py-16">
      <div className="px-4 mx-auto max-w-7xl">
        <h2 className="my-8 text-5xl font-semibold font-hk-grotesk text-[#f5f5f5]">
          Uncover Global Intelligence
        </h2>
        <p className="mb-6   text-[40px] text-[#f5f5f5]">
          Your Path to a Data Driven Future Starts Here.
        </p>
      </div>

      <div className="flex gap-12 items-center px-6 mx-auto max-w-7xl">
        <div className="flex flex-col w-[60%]">
          <Image
            src={Global}
            alt="Data platform dashboard"
            className="w-full rounded-lg shadow-lg"
            width={800}
            height={700}
            priority
          />
        </div>

        <div className="w-[40%]">
          <div className="space-y-4">
            {platforms.map((platform, index) => (
              <div
                key={index}
                className="bg-[#051225] text-white p-4 rounded-lg max-w-md"
              >
                <div className="flex gap-3 items-center">
                  <div
                    className={`flex justify-center items-center rounded-md`}
                  >
                    <Image
                      src={platform.icon}
                      alt={`${platform.title} icon`}
                      width={20}
                      height={20}
                      className="!w-12   !h-12"
                    />
                  </div>
                  <h3
                    className="text-[22px] font-hk-grotesk font-medium text-[#f5f5f5] transition-colors cursor-pointer hover:text-blue-300"
                    onClick={() => handleTitleClick(index)}
                  >
                    {platform.title}
                  </h3>
                </div>
                
                {/* Description - only shows when this specific platform is open */}
                <div 
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    openDescription === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="pt-4 mt-4">
                    <p className="text-base font-medium leading-relaxed text-justify text-gray-300 font-hk-grotesk">
                      {platform.description}
                    </p>
                  </div>
                  <p className="py-2"> {platform.button}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
