import { IoClose, IoMailUnreadSharp } from "react-icons/io5";
import Image from "next/image";
import { Alert, Doc, Newsfeed, Search } from "@/assets/Images";

const features = [
  {
    icon: Alert,
    title: "Alerts",
    description: "Follow frequently tracked items and receive alerts for anything you follow on our platform."
  },
  {
    icon: Newsfeed,
    title: "News Feed",
    description: "Access the latest news, press releases, and announcements from the US FDA and China NMPA."
  },
  {
    icon: Doc,
    title: "Doc Collaboration",
    description: "Collaborate with document writers to create reports and deliverables seamlessly."
  },
  {
    icon: Search,
    title: "GuidanceIQ",
    description: "Search and chat with FDA and EUDAMED guidance files with our life-science trained AI."
  }
];

export default function FeaturesSection() {
  return (
    <section className="py-16 bg-white">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        {/* Close Button */}
        <div className="mb-8 text-center">
          <button className="inline-flex gap-2 items-center px-4 py-2 font-medium text-black bg-white rounded-full border-2 border-black transition-colors hover:bg-gray-50">
            -
            Close list of plan features
          </button>
        </div>

        {/* Heading */}
        <div className="mb-12 text-center">
          <h2 className="py-8 text-4xl font-bold text-black font-hk-grotesk">
            Enjoy these features on all of the above Global Intelligence plans
          </h2>
        </div>

        {/* Feature Blocks */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="flex justify-center mb-4">
                <Image 
                  src={feature.icon.src} 
                  alt={feature.title}
                  width={32}
                  height={32}
                  className="object-contain w-12 h-12"
                />
              </div>
              <h3 className="mb-3 text-[23px] font-bold text-black font-hk-grotesk">
                {feature.title}
              </h3>
              <p className="text-lg font-normal leading-relaxed text-black font-hk-grotesk">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
