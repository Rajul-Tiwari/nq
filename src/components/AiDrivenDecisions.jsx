import Image from "next/image";
import { Global } from "@/assets/Images";

export default function AiDrivenDecisions() {
  return (
    <section className="bg-[#f5f5f5] py-16">
      <div className="grid grid-cols-1 gap-12 items-center px-4 mx-auto max-w-7xl md:grid-cols-2">
        
        {/* Left Content */}
        <div>
          <p className="text-lg font-semibold tracking-widest text-[#1d1e3d] uppercase font-hk-grotesk">
            Global Intelligence: NyquistMed
          </p>
          <h2 className="mt-2 w-[60%] text-[40px] font-hk-grotesk font-bold text-gray-900">
            Make Confident, AI-Driven Decisions
          </h2>
          <p className="mt-4 w-[90%] leading-relaxed text-[18px] font-normal font-hk-grotesk">
            NyquistMed provides comprehensive global clinical, regulatory, and
            medical device data across key markets, from large markets like the US
            to emerging markets like China. With NyquistMed, you&apos;ll gain access to
            mission-critical insights to accelerate your time-to-market.
          </p>

          <button className="mt-6 px-6 py-2 bg-[#FFC107] text-black rounded-full font-medium font-hk-grotesk hover:bg-yellow-400 transition">
            Explore NyquistMed
          </button>
        </div>

        {/* Right Content - Image */}
        <div className="flex justify-center items-center">
       
          <Image
            src={Global.src}
            alt="NyquistMed Dashboard"
            className="w-full h-full rounded-lg"
            width={800}
            height={900}
            priority
          />
        </div>

      </div>
    </section>
  );
}
