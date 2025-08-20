// src/components/worldWideCoverage/index.jsx
import { Austria, Canada, China, Eu, Japan, Us } from "@/assets/Images";
import Image from "next/image";

const countries = [
  { name: "U.S.", flag: Us },
  { name: "Australia", flag: Austria },
  { name: "Canada", flag: Canada },
  { name: "Japan", flag: Japan },
  { name: "EU", flag: Eu },
  { name: "China", flag: China},
];

const stats = [
  { value: "600k+", label: "CLINICAL TRIALS" },
  { value: "1.1 Million+", label: "APPROVED DEVICES" },
  { value: "600k+", label: "APPROVED DRUGS" },
  { value: "18 Million+", label: "ADVERSE EVENTS" },
];

export default function WorldWideCoverage() {
  return (
    <section className="py-16 bg-[#f5f5f5]">
      <div className="mx-auto max-w-7xl text-center">
        <h2 className="mb-6 text-[40px] font-medium font-hk-grotesk">World Wide Coverage</h2>

        {/* Flags */}
        <div className="flex gap-8 justify-center mb-8">
          {countries.map((country, index) => (
            <div key={index} className="flex flex-col items-center">
              <Image
                src={country.flag}
                alt={country.name}
                width={50}
                height={30}
                className="object-cover  w-[96px] "
              />
              <span className="py-2 mt-2 text-xs font-semibold font-hk-grotesk">{country.name}</span>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 gap-8 py-4 mx-auto max-w-5xl sm:grid-cols-2 md:grid-cols-4">
          {stats.map((stat, index) => (
            <div key={index}>
              <h3 className="font-medum text-[40px]">{stat.value}</h3>
              <p className="text-base tracking-wide">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
