export default function HiringSection() {
    const positions = [
      "Sales Representative",
      "Marketing Manager",
      "Sr Software Engineer",
    ];
  
    return (
      <section className="bg-[#1E4ED8] py-12">
        <div className="flex flex-col gap-8 items-center px-4 mx-auto max-w-4xl md:flex-row md:justify-between">
          
          {/* Left Content */}
          <div className="text-center text-white md:text-left">
            <h2 className="text-[60px] font-hk-grotesk font-semibold text-[#ffffff]">We’re Hiring!</h2>
            <p className="mt-2 text-[30px] font-bold font-hk-grotesk w-[70%] text-center mx-auto text-[#ffffff]">
              Currently Available Positions
            </p>
          </div>
  
          {/* Divider (only on desktop) */}
          <div className="hidden w-px h-32 bg-white md:block"></div>
  
          {/* Right Buttons */}
          <div className="flex flex-col gap-4 w-full md:w-auto">
            {positions.map((role, idx) => (
              <button
                key={idx}
                className="bg-white text-[#1E4ED8] px-6 py-2 rounded-full font-medium text-sm uppercase tracking-wide hover:bg-gray-100 transition"
              >
                {role}
              </button>
            ))}
          </div>
        </div>
      </section>
    );
  }
  