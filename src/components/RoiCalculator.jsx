"use client";
import { useMemo, useState } from "react";
import { AiOutlineInfoCircle } from "react-icons/ai";

export default function RoiCalculator() {
  // State for inputs (hours per month)
  const [guidance, setGuidance] = useState(8);
  const [fda, setFda] = useState(8);
  const [competitive, setCompetitive] = useState(8);
  const [verify, setVerify] = useState(8);
  const [tooltipOpen, setTooltipOpen] = useState(false);

  // Constants
  const hourlyRate = 100; // $100/hour per employee
  const platformCost = 349; // $349/month NyquistAI platform

  const clampToNumber = (val) => {
    const n = Number(val);
    if (Number.isNaN(n)) return 0;
    return Math.max(0, Math.min(744, n)); // max hours ≈ days*24
  };

  // Derived values (memoized)
  const { totalHours, monthlySavings, roiPercent } = useMemo(() => {
    const total = guidance + fda + competitive + verify;
    const savings = total * hourlyRate - platformCost;
    const roi = Math.max(0, (savings / platformCost) * 100);
    return {
      totalHours: total,
      monthlySavings: savings,
      roiPercent: Math.round(roi),
    };
  }, [guidance, fda, competitive, verify]);

  const currency = (n) =>
    new Intl.NumberFormat(undefined, { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(
      Math.max(0, n)
    );

  return (
    <section className=" mx-auto max-w-7xl bg-[#f5f5f5]">
      <div className="relative grid gap-8 p-8 text-white bg-[#1E4ED8] rounded-2xl lg:grid-cols-2 py-8 mt-8 mb-8">
        {/* Title */}
        <h2 className="flex absolute top-6 left-8 gap-2 items-center text-base font-semibold opacity-95">
          <span className="inline-flex justify-center items-center w-5 h-5 text-xs text-white rounded-full bg-white/20">✦</span>
          Calculate Your Monthly ROI
        </h2>
        

        {/* Left: Inputs */}
        <div className="pt-10">
        
          <div className="">
            {/* Row */}
            <InputRow
              labelPrimary="Hours/mo. searching guidance"
              labelSecondary="files"
              value={guidance}
              onChange={(v) => setGuidance(clampToNumber(v))}
            />
            <InputRow
              labelPrimary="Hours/mo. searching FDA"
              labelSecondary="websites"
              value={fda}
              onChange={(v) => setFda(clampToNumber(v))}
            />
            <InputRow
              labelPrimary="Hours/mo. searching"
              labelSecondary="competitive intel"
              value={competitive}
              onChange={(v) => setCompetitive(clampToNumber(v))}
            />
            <InputRow
              labelPrimary="Hours/mo. searching to verify"
              labelSecondary="information"
              value={verify}
              onChange={(v) => setVerify(clampToNumber(v))}
            />
          </div>
        </div>

        {/* Right: Results Panel */}
        <div className="relative pt-10">
          <div className="overflow-hidden rounded-xl">
            {/* Header */}
            <div className="px-8 py-6 bg-[#5080ff] border-b border-gray-600">
              <div className="text-center">
                <p className="text-[22px] text=[#dcffff] font-medium opacity-90 center font-hk-grotesk">Estimated Monthly ROI with NyquistAI</p>
              </div>
              <p className="mt-3 text-[72px] font-hk-grotesk font-semibold leading-none text-center text-">1476%</p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2  gap-6 px-8 py-3 bg-[#5080ff] border-b border-gray-600  ">
              <div className="text-center">
                <p className="text-base font-medium text-[#dcffff] font-hk-grotesk">Searching Time Saved</p>
                <p className=" text-[40px] font-hk-grotesk font-semibold">678 hours</p>
              </div>
              <div className="text-center">
                <p className="text-base font-medium text-[#dcffff] font-hk-grotesk">Monthly Savings</p>
                <p className="text-[40px] font-hk-grotesk font-semibold">{currency(monthlySavings)}</p>
              </div>
            </div>

            {/* Footer blurb */}
            <div className="px-8 py-5 text-xs bg-[#3c6cf6] flex justify-between">
            <p>
              
              Save time and gain flexibility with AI catch-ups, async meetings, and watch-later capabilities.
            </p>
            <div className="">
              <div
                className="inline-flex justify-center items-center w-6 h-6 text-white cursor-pointer group"
                onMouseEnter={() => setTooltipOpen(true)}
                onMouseLeave={() => setTooltipOpen(false)}
              >
                <AiOutlineInfoCircle className="w-6 h-6" />
                {tooltipOpen && (
                  <div className="absolute bottom-16 -right-80 transform -translate-x-1/2 mb-2 px-4 py-3 text-xs text-white bg-black/90 rounded-lg shadow-xl w-[280px] z-50">
                    <div className="text-base font-normal font-hk-grotesk">
                      The calculations are based on a ${platformCost} per month cost for the Nyquist platform and an average hourly rate of ${hourlyRate} per hour for an employee.
                      {/* Tooltip arrow */}
                      <div className="absolute top-full left-1/2 w-0 h-0 border-t-4 border-r-4 border-l-4 border-transparent transform -translate-x-1/2 border-t-black/90"></div>
                    </div>
                  </div>
                )}
              </div>
            </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function InputRow({ labelPrimary, labelSecondary, value, onChange }) {
  return (
    <div className="flex justify-between items-center py-6">
      <div className="pr-7 max-w-[60%]">
        <p className="text-sm leading-snug">{labelPrimary}</p>
        {labelSecondary && <p className="text-sm leading-snug opacity-90">{labelSecondary}</p>}
      </div>
      <input
        type="number"
        inputMode="numeric"
        min={0}
        max={744}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="px-4 py-2 w-[260px] h-10 text-sm text-white bg-transparent border-2 border-white/40 rounded-md outline-none focus:ring-2 focus:ring-white/40 focus:border-white placeholder-white/70 caret-white"
      />
    </div>
  );
}


