import Image from "next/image";
import { CoFounder } from "@/assets/Images";

export default function TeamSection() {
  const team = [
    { name: "Michelle Wu", role: "Co-Founder | CEO", img: CoFounder },
    { name: "KK", role: "Co-Founder | CTO", img: CoFounder },
    { name: "Michelle Wu", role: "Co-Founder | CEO", img: CoFounder },
    { name: "Michelle Wu", role: "Co-Founder | CEO", img: CoFounder },
    { name: "Michelle Wu", role: "Co-Founder | CEO", img: CoFounder },
    { name: "Michelle Wu", role: "Co-Founder | CEO", img: CoFounder },
    { name: "Michelle Wu", role: "Co-Founder | CEO", img: CoFounder },
    { name: "Michelle Wu", role: "Co-Founder | CEO", img: CoFounder },
    { name: "Michelle Wu", role: "Co-Founder | CEO", img: CoFounder },
    { name: "Michelle Wu", role: "Co-Founder | CEO", img: CoFounder },
    { name: "Michelle Wu", role: "Co-Founder | CEO", img: CoFounder },
    { name: "Michelle Wu", role: "Co-Founder | CEO", img: CoFounder },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="px-4 mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mb-12">
          <p className="text-xs font-medium tracking-widest text-[#1d1e3d] uppercase">
            Our Team
          </p>
          <h2 className="text-[30px] font-semibold text-[#1d1e3d]">
            Exceptional People Who Fuel Our Success
          </h2>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-2 gap-x-6 gap-y-12 place-items-center sm:grid-cols-3 md:grid-cols-4">
          {team.map((member, idx) => (
            <div key={idx} className="text-center">
              <div className="overflow-hidden mx-auto mt-7 w-32 h-32 bg-gradient-to-b from-blue-100 to-white rounded-full">
                <Image
                  src={member.img.src}
                  alt={member.name}
                  width={128}
                  height={128}
                  className="object-cover"
                />
              </div>
              <h3 className="mt-4 text-lg font-bold text-[#3f3f3f] font-hk-grotesk">
                {member.name}
              </h3>
              <p className="text-base text-[#3f3f3f] font-normal">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
