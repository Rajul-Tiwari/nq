"use client";

import { Cbc, Predict } from "@/assets/Images";
import Image from "next/image";
import { useEffect } from "react";

export default function SalesContactModal({ open, onClose }) {
  // Close on ESC
  useEffect(() => {
    if (!open) return;
    const handler = (e) => {
      if (e.key === "Escape") onClose?.();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [open, onClose]);

  if (!open) return null;

  const logos = [
    Predict,
    Cbc,
    Predict,
    Predict,
    Cbc,
    Predict,
  ];

  return (
    <div
      className="flex fixed inset-0 justify-center items-tart z-full md:items-center bg-black/50"
      aria-modal="true"
      role="dialog"
    >
      <div className="flex max-w-7xl bg-white rounded-xl shadow-xl">
        {/* Left: Form */}
        <div className="p-6 w-full md:p-8">
          <div className="">
            <h2 className="text-[46px] font-hk-grotesk font-bold mt-20 text-[#1c1c1c] ">
              Contact Our Sales Team
            </h2>
            <p className="mt-2 w-1/2 text-xl font-normal text-[#1c1c1c] font-hk-grotesk]">
              Learn how NyquistAI can help your company meet its goals through
              better, faster insights.
            </p>
            <p className="mt-2 text-xl font-normal text-[#1c1c1c] font-hk-grotesk]">
              Want to purchase an individual account?{" "}
              <span className="text-[#3b39e5]">Explore pricing</span>{" "}
            </p>
            <p>
              Enterprises and teams,{" "}
              <span className="text-[#3b39e5]">complete the form below</span>{" "}
            </p>
          </div>
          <p className="py-8">* All fields are reruired</p>
          <div className="flex">
            
          <form className="overflow-y-auto space-y-3">
            <div>
              <label className="block text-xs font-normal text-[#0e101a]">
                Work email *
              </label>
              <input
                type="email"
                className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#001224]"
                placeholder="name@company.com"
              />
            </div>

            <div className="">
              <div>
                <label className="block text-xs font-medium text-[#0e101a]">
                  Function *
                </label>
                <select className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-[#001224]">
                  <option>Choose...</option>
                  <option>R&D</option>
                  <option>Engineering</option>
                  <option>Product</option>
                  <option>Operations</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-normal text-[#0e101a]">
                  Management level *
                </label>
                <select className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-[#001224]">
                  <option>Choose...</option>
                  <option>Individual Contributor</option>
                  <option>Manager</option>
                  <option>Director</option>
                  <option>VP</option>
                  <option>C-Level</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-normal text-[#0e101a]">
                Company name *
              </label>
              <input
                type="text"
                className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#001224]"
              />
            </div>

            <div>
              <label className="block text-xs font-normal text-[#0e101a]">
                Company size *
              </label>
              <select className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-[#001224]">
                <option>Choose...</option>
                <option>1-10</option>
                <option>11-50</option>
                <option>51-200</option>
                <option>201-500</option>
                <option>500+</option>
              </select>
            </div>

            <div className="grid grid-cols-1 gap-4">
              <div>
                <label className="block text-xs font-normal text-[#0e101a]">
                  First name *
                </label>
                <input
                  type="text"
                  className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#001224]"
                />
              </div>
              <div>
                <label className="block text-xs font-normal text-[#0e101a]">
                  Last name *
                </label>
                <input
                  type="text"
                  className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#001224]"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-normal text-[#0e101a]">
                Phone *
              </label>
              <input
                type="tel"
                className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#001224]"
              />
            </div>

            <div>
              <label className="block text-xs font-normal text-[#0e101a]">
                Products of interest *
              </label>
              <select className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-[#001224]">
                <option>Choose...</option>
                <option>NyquistAI Platform</option>
                <option>3D Predict</option>
                <option>Custom Solutions</option>
              </select>
            </div>

            <div className="pt-2 text-center">
              <button
                type="button"
                className="w-1/2 mx-auto rounded-full bg-[#001224] px-5 py-3 text-sm font-bold text-white hover:bg-black"
              >
                Submit
              </button>
            </div>
            <p className="pt-2 text-[10px] leading-relaxed text-gray-500">
              By contacting sales, you agree to the Terms and Conditions and
              Privacy Policy.
            </p>
          </form>
          <div className="hidden p-8 bg-gray-50 md:block">
          <h3 className="text-[26px] font-semibold text-[#1c1c1c] font-hk-grotesk">
            You’re in good company
          </h3>
          <p className="mt-2 max-w-sm text-xl text-[#1c1c1c] font-hk-grotesk font-normal">
            The leading innovators use NyquistAI to improve their research and
            development.
          </p>

          <div className="grid grid-cols-1 gap-10 items-center py-8 md:grid-cols-3">
            {logos.map((logo, index) => (
              <div key={index} className="flex justify-center">
                <Image
                  src={logo.src}
                  alt={`Client logo ${index + 1}`}
                  width={140}
                  height={48}
                  className="object-contain w-auto h-12"
                />
              </div>
            ))}
          </div>

          <div className="mt-10">
            <h4 className="text-[26px] font-semibold text-[#1c1c1c] font-hk-grotesk">
              Looking for support?
            </h4>
            <p className="mt-2 max-w-sm text-xl text-[#1c1c1c] font-hk-grotesk font-normal">
              We’re here to help! Get in touch if you have technical, account,
              or billing questions.
            </p>
            <button className="px-4 py-4 mt-4 text-sm font-bold text-black rounded-full border border-black hover:bg-black hover:text-white">
              Contact Support
            </button>
          </div>
        </div>
          </div>
        </div>

        {/* Right: Side content */}
        

        {/* Close button */}
        <button
          aria-label="Close"
          onClick={onClose}
          className="inline-flex absolute top-3 right-3 justify-center items-center w-8 h-8 text-gray-700 rounded-full shadow bg-white/90 hover:bg-white"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-5 h-5"
          >
            <path
              fillRule="evenodd"
              d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>

      {/* Click-outside to close */}
      <button
        className="absolute inset-0 -z-10"
        onClick={onClose}
        aria-hidden="true"
      />
    </div>
  );
}
