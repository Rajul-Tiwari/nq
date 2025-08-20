export default function LifeSciencesSection() {
    const items = [
      {
        title: "GLOBAL INTELLIGENCE PLATFORM",
        description:
          "Unlike conventional data platforms, our AI understands context, uncovers unsearchable insights, and provides global results that are both relevant and previously unconsidered.",
      },
      {
        title: "FINE-TUNED AI FOR LIFE SCIENCES",
        description:
          "NyquistAI, fine-tuned with over 1 billion Life Sciences data points, operates at the highest expertise level and unveils the most relevant insights for your competitive advantage.",
      },
      {
        title: "INDUSTRY-KNOW-HOW APPLICATIONS",
        description:
          "We develop AI-empowered applications with a deep understanding of industry nuances and organizational workflows, creating practical solutions for your specific functions and needs.",
      },
    ];
  
    return (
      <section className="py-16 bg-[#F5F5F5]">
        <div className="px-6 mx-auto max-w-7xl">
          <h2 className="mb-4 text-5xl  font-semibold text-[#1D1E3D]">
            Revolutionizing Life Sciences
          </h2>
          <p className="mb-12 text-2xl font-normal font-hk-grotesk">
            Uniquely tailored for Life Sciences innovators, NyquistAI delivers
            products designed to reshape global intelligence, strategically adopt
            responsible AI, and enhance Life Sciences workflows, like never
            before.
          </p>
  
          <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
            {items.map((item, index) => (
              <div key={index} className="text-center md:text-left">
                <h3 className="mb-2 text-base font-semibold tracking-widest text-[#1E4ED8] font-hk-grotesk">
                  {item.title}
                </h3>
                <p className="text-base font-normal font-hk-grotesk">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  