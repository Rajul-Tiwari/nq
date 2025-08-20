import Image from "next/image";

import { Extract, Gsr, Mentor, Peterson, Tav, Village, Worn } from "@/assets/Images";

export default function InvestorsSection() {
  const investors = [
    { src: Mentor, alt: "Mentors Fund" },
    { src: Village, alt: "Village Global" },
    { src: Worn, alt: "Worm Capital" },
    { src: Gsr, alt: "GSR Ventures" },
    { src: Extract, alt: "Catchlight" },
    { src: Peterson, alt: "Peterson Ventures" },
    { src: Tav, alt: "TAV" },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="px-12 mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mb-10">
          <p className="text-xs font-medium tracking-widest text-[#1d1e3d] uppercase">
            Our Investors
          </p>
          <h2 className="text-[28px] font-semibold text-[#1d1e3d]">
            Guided by Visionary Investors
          </h2>
        </div>

        {/* Logos */}
        <div className="flex flex-wrap gap-10 justify-center items-center">
          {investors.map((investor, idx) => (
            <div key={idx} className="relative w-32 h-12">
              <Image
                src={investor.src}
                alt={investor.alt}
                fill
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
