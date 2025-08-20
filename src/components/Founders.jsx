import Image from "next/image";
import { team } from "@/assets/Images";
import { MdArrowRight } from "react-icons/md";

export default function Founder() {
  return (
    <div className="py-16">
      <div className="grid grid-cols-1 gap-16 items-center mx-auto max-w-7xl md:grid-cols-2">
        <div>
          <Image
            src={team.src}
            alt="NyquistData team"
            className="rounded-lg shadow h-[400px] w-[750px] object-cover"
            width={750}
            height={450}
          />
        </div>

        {/* Left Content */}
        <div className="">
          <p className="mb-2 text-sm font-medium text-gray-400 uppercase tracking-widering-wide font-hk-grotesk">
            Meet Our Team
          </p>
          <h2 className="mb-4 text-[40px] font-semibold   font-hk-grotesk leading-[48px]">
            Founded on Innovation, Built with Passion
          </h2>
          <p className="mb-3 text-lg font-normal font-hk-grotesk">
            NyquistAI is an innovative health technology company focused on
            facilitating the critical Life Sciences information necessary to
            improve health around the world. .
          </p>
          <p className="mb-6 text-lg font-normal font-hk-grotesk">
            We developed an AI-powered intelligence solution that collects
            decades of clinical and regulatory documentation and organizes it
            into easily searchable information and useful insights for life
            science companies so they can do what they do best; innovate
          </p>
        </div>

        {/* Right Image */}
      </div>
    </div>
  );
}
