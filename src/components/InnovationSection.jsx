export default function InnovationSection() {
    return (
      <div className="px-6 py-16 text-center bg-white">
        {/* Heading */}
        <h2 className="mb-3 text-3xl font-semibold md:text-[50px] font-hk-grotesk">
          Experience the Future of Innovation
        </h2>
        <p className="py-8 text-[26px] font-normal font-hk-grotesk">
          with Global Intelligence and AI-Powered Solutions
        </p>
  
        {/* Buttons */}
        <div className="flex flex-col gap-4 justify-center items-center mt-2 sm:flex-row">
          <button className="px-8 py-3 font-medium text-white bg-[#1e4ed8] rounded-full transition hover:bg-blue-700">
            EXPLORE PRICING
          </button>
          <span className="text-sm">OR</span>
          <button className="px-8 py-3 font-medium text-black rounded-full border border-black transition hover:bg-gray-100">
            SCHEDULE A DEMO
          </button>
        </div>
      </div>
    );
  }
  