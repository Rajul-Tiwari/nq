export default function SolutionsSection() {
  const solutions = [
    {
      title: "Enterprise Bundle",
      description: "Reach out to our sales team to identify the solution that will help reach your organization's goals."
    },
    {
      title: "Software Customization",
      description: "Reach out to our sales team to identify the solution that will help reach your organization's goals."
    }
  ];

  return (
    <section className="py-16 bg-blue-600">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-12 text-center">
          <h2 className="text-[40px] font-bold text-[#ffffff] font-hk-grotesk">
            Interested in a Unique Solution?
          </h2>
        </div>

        {/* Solution Cards */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {solutions.map((solution, index) => (
            <div key={index} className="p-6 bg-white rounded-t-xl text-center border-[#001224] border-t-[25px] rounded-b-xl">
              <h3 className="mb-4 text-2xl font-bold text-black font-hk-grotesk">
                {solution.title}
              </h3>
              <p className="mx-14 mb-6 text-lg font-normal leading-relaxed text-black font-hk-grotesk">
                {solution.description}
              </p>
              <div className="py-6 text-center">
                
              <button className="px-6 mb-3 py-3 w-1/3 font-hk-grotesk    font-bold text-white bg-[#001224] rounded-full transition-colors hover:bg-gray-800">
                Contact Sales
              </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
