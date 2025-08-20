// src/components/CallToAction.jsx
import React from "react";

const FutureInnovation = () => {
  return (
    <section className="bg-[#001224] text-white py-16 px-6 text-center">
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-4 text-3xl font-semibold md:text-[50px] font-hk-grotesk">
          Experience the Future of Innovation
        </h2>
        <p className="mb-8 w-[80%] py-4 mx-auto text-[26px] font-hk-grotesk font-normal text-gray-300">
        with Global Intelligence Platform: NyquistPharma
        </p>

        <div className="flex flex-wrap gap-4 justify-center items-center">
          <button className="px-6 py-3 font-medium text-[#001224] bg-yellow-500 rounded-full transition hover:bg-yellow-600">
            SCHEDULE DEMO
          </button>
          <span className="text-[#ffffff] text-sm font-normal">OR</span>
          <button className="px-6 py-3 font-medium text-[#001224] bg-white rounded-full transition hover:bg-gray-100">
            SEE PRICING
          </button>
        </div>
      </div>
    </section>
  );
};

export default FutureInnovation;
