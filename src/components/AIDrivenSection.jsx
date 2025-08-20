'use client'
import { MdArrowRight } from "react-icons/md";

export default function AIDrivenSection() {
  const products = [
    {
      name: "NYQUIST SCHOLAR",
      description:
        'Leveraging the Life Sciences trained AI, Nyquist Scholar is the first AI enabled medical writing screening tool that quickly reviews and recommends which papers should be included or excluded based on your criteria and allows you to "chat" with each paper to learn more.',
    },
    {
      name: "NYQUISTIQ",
      description:
        'Leveraging the Life Sciences trained AI, Nyquist Scholar is the first AI enabled medical writing screening tool that quickly reviews and recommends which papers should be included or excluded based on your criteria and allows you to "chat" with each paper to learn more.',
    },
  ];

  return (
    <section className="relative bg-[#001224] text-white py-24">
      {/* Light blue top border */}
      <div className="absolute top-0 right-0 left-0 h-1 bg-blue-400"></div>

      <div className="px-4 mx-auto max-w-7xl">
        {/* Main Heading */}
        <div className="mb-16">
          <h1 className="text-3xl font-semibold leading-tight lg:text-5xl font-hk-grotesk text-[#f5f5f5]">
            Discover, Connect and Create with AI
          </h1>
        </div>

        <div className="flex gap-16 items-start">
          {/* Left Section - Tagline */}
          <div className="w-[30%]">
            <h2 className="mt-4 text-5xl font-normal leading-tight lg:text-5xl font-hk-grotesk">
              Built by Life Sciences for Life Sciences.
            </h2>
          </div>

          {/* Right Section - Product Descriptions */}
          <div className="grid grid-cols-2 gap-12 w-[70%]">
            {products.map((product, index) => (
              <div key={index}>
                <h3 className="text-base font-semibold tracking-wide uppercase font-hk-grotesk text-[#f5f5f5]">
                  {product.name}
                </h3>
                <p className="mt-2 text-lg leading-relaxed font-normal font-hk-grotesk text-[#f5f5f5]">
                  {product.description}
                </p>
                <div className="flex gap-3 items-center pt-2 cursor-pointer group">
                  <span className="flex items-center py-10 text-sm text-white transition-colors fontmedium font-hk-grotesk underline-offset-4 group-hover:text-blue-300">
                    Learn more <span><MdArrowRight /></span>
                  </span>
                  <div className="w-0 h-0 border-t-2 border-b-2 border-l-4 border-l-black border-t-transparent border-b-transparent"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
