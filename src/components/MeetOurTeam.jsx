import Image from "next/image";
import { team } from "@/assets/Images";
import { MdArrowRight } from "react-icons/md";

export default function MeetOurTeam() {
  return (
    <div className="bg-[#f5f5f5] py-16 px-6 md:px-20">
      <div className="grid grid-cols-1 gap-10 items-center mx-auto max-w-6xl md:grid-cols-2">
        
        {/* Left Content */}
        <div>
          <p className="mb-2 text-sm font-medium text-gray-400 uppercase tracking-widering-wide font-hk-grotesk">
            Meet Our Team
          </p>
          <h2 className="mb-4 text-[40px] font-semibold w-[70%] font-hk-grotesk leading-[48px]">
            Founded on Innovation, Built with Passion
          </h2>
          <p className="mb-6 font-normal font-hk-grotesk w-[70%]">
            NyquistAI is a growing technology company providing an AI-powered
            solution to transform decades of clinical and regulatory data and
            documentation into actionable insights for Life Sciences
            professionals.
          </p>
          <button className="flex gap-2 items-center text-sm font-medium text-[#1d1e3d] hover:underline">
            Learn More
            <span><MdArrowRight /></span>
          </button>
        </div>

        {/* Right Image */}
        <div> 
          <Image
            src={team.src}
            alt="NyquistData team"
            className="rounded-lg shadow h-[400px] w-[750px]"
            width={750} 
            height={450}
          />
        </div>

      </div>
    </div>
  );
}
