import Image from "next/image";
import { Cbc, Predict } from "@/assets/Images";

export default function ValuedClients() {
    const logos = [
        Predict,
        Cbc,
        Predict,
        Cbc,
        Predict,
        Cbc,
        Predict,
        Cbc,
        Predict,
        Cbc,
        Predict,
        Cbc,
      ];
  
    return (
      <section className="py-16 bg-white">
        <div className="px-6 mx-auto max-w-6xl text-center">
          <h2 className="mb-12 text-xl font-medium text-gray-900 md:text-2xl">
            Global Innovators in Life Sciences: Our Valued Clients
          </h2>
  
          <div className="grid grid-cols-2 gap-10 items-center sm:grid-cols-3 md:grid-cols-6">
            {logos.map((logo, index) => (
              <div key={index} className="flex justify-center">
                <Image
                  src={logo.src}
                  alt={`Client logo ${index + 1}`}
                  width={140}
                  height={48}
                  className="object-contain h-12 w-auto"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  