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



export default function ParallelData() {
  return (
    <section className="py-16 bg-[#f5f5f5]">
      <div className="mx-auto max-w-7xl text-center">
        <h2 className="mb-6 text-[40px] font-semibold font-hk-grotesk">Unparalleled Global Data</h2>

        {/* Flags */}
        <div className="flex gap-8 justify-center mb-8 max-w-7xl">
          {countries.map((country, index) => (
            <div key={index} className="flex flex-col items-center">
              <Image
                src={country.flag}
                alt={country.name}
                width={50}
                height={30}
                className="object-cover  w-[120px] "
              />
              <span className="py-2 mt-2 text-xs font-semibold font-hk-grotesk">{country.name}</span>
            </div>
          ))}
        </div>

       
      </div>
    </section>
  );
}
