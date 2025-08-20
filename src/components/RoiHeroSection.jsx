import Image from "next/image";
import {  RoiHero } from "@/assets/Images";

export default function RoiHeroSection({
  title = "Maximize Efficiency, Optimize ROI with NyquistAI",
  bullets = "90% of our customers find Nyquist pays for itself within the 1st month of adoption",
}) {
  return (
    <section className="relative flex items-center h-[600px] text-white">
      {/* Optimized background image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src={RoiHero.src}
          alt="Hero Background"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>

      <div className="grid relative z-10 grid-cols-1 gap-10 items-center px-4 py-12 mx-auto max-w-7xl sm:px-6 lg:grid-cols-2 lg:px-8 lg:py-16">
        <div>
          <h1 className="text-[40px] w-5/6 font-hk-grotesk font-semibold !leading-[68px] text-[#f5f5f5]">
            {title}
          </h1>
          <p className="text-[18px] w-5/6 font-normal font-hk-grotesk text-[#f5f5f5]">
            {bullets}
          </p>
          <div className="flex flex-col gap-4 items-center mt-8 sm:flex-row">
            <button className="px-9 py-3 font-medium text-white bg-[#f1b008] rounded-full  font-hk-grotesk transition hover:bg-blue-700">
              SCHEDULE A DEMO
            </button>
           
          </div>
        </div>
      </div>
    </section>
  );
}
