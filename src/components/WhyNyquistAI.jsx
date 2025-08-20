import Image from "next/image";
import { Wave } from "@/assets/Images";

export default function WhyNyquistAI() {
  return (
    <section className="bg-[#001224] text-white py-16">
      <div className="grid grid-cols-1 gap-5 items-center px-4 mx-auto max-w-5xl md:grid-cols-2">
        
        {/* Left Content */}
        <div>
          <h2 className="mb-4 text-[40px] font-semibold font-hk-grotesk text-[#ffffff]">Why NyquistAI?</h2>
          <p className="mb-6 font-medium leading-relaxed text-[#ffffff] font-hk-grotesk">
            Nyquist’s Theorem is a bridge between discrete and continuous time signals.
            It establishes a sampling rate at which a discrete signal can capture all the
            information of a continuous signal. It lays the theoretical foundation for
            digital signal processing and many machine learning tasks that are applied
            in technology solutions such as NyquistAI.
          </p>
          <button className="px-6 py-2 text-base font-medium text-[#001224] bg-white rounded-lg transition hover:bg-gray-100">
            Learn More
          </button>
        </div>

        {/* Right Graphic */}
        <div className="flex justify-center md:justify-end">
          <Image
            src={Wave.src}
            alt="Wave Illustration"
            width={300}
            height={100}
            className="object-contain"
          />
        </div>

      </div>
    </section>
  );
}
