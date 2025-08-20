import Image from "next/image";
import { CgPlayButtonO } from "react-icons/cg";
import { HeroHome } from "@/assets/Images";

export default function Hero({
  title = "WELCOME TO MY NYQUISTAI",
  bullets = "Connecting Data Igniting Discovery",
}) {
  return (
    <section className="relative flex items-center h-[600px] text-white">
      {/* Optimized background image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src={HeroHome.src}
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
          <h1 className="text-lg font-hk-grotesk-legacy font-bold !leading-[68px] text-[#f5f5f5]">
            {title}
          </h1>
          <p className="text-[60px] w-5/6 font-semibold font-hk-grotesk text-[#f5f5f5]">
            {bullets}
          </p>
          <div className="flex flex-col gap-4 items-center mt-8 sm:flex-row">
            <button className="px-9 py-3 font-medium text-white bg-[#1e4ed8] rounded-full transition hover:bg-blue-700">
              SCHEDULE A DEMO
            </button>
            <button className="flex items-center gap-2 px-9 py-3 font-medium text-black rounded-full bg-[#f5f5f5] transition hover:bg-gray-100">
              WATCH VIDEO{" "}
              <CgPlayButtonO className="w-6 h-6 text-white bg-blue-600 rounded-full" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
