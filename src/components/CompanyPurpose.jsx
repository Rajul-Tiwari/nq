export default function CompanyPurpose() {
    const data = [
      {
        title: "Mission",
        description:
          "We’re on a mission to democratize institutional knowledge and empower life science researchers to bring new innovations to market.",
      },
      {
        title: "Culture",
        description:
          "At NyquistAI, we support a culture of diversity and inclusion. We strive to create an environment where mutually respectful collaborations lead us to design, create, and deliver high quality products and services to our customers in the medical technology field.",
      },
      {
        title: "Values",
        description:
          "Accountability, Initiative, Audacity, Teamwork, and Integrity.",
      },
    ];
  
    return (
      <section className="px-4 py-16 bg-white">
        <div className="mx-auto max-w-5xl">
          {/* Section Heading */}
          <div className="mb-10">
            <p className="text-xs font-medium tracking-widest text-[#1d1e3d] uppercase">
              Our Purpose
            </p>
            <h2 className="text-[30px] font-semibold text-[#1d1e3d]">
              What Drives Us as a Company
            </h2>
          </div>
  
          {/* Content List */}
          <div className="mx-8 divide-y divide-gray-200">
            {data.map((item, idx) => (
              <div key={idx} className="flex py-6">
                <h3 className="font-medium text-[#1d1e3d] text-[22px] w-1/2">
                  {item.title}
                </h3>
                <p className="w-1/2 font-hk-grotesk">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  