import AiDrivenDecisions from "@/components/AiDrivenDecisions";
import CompanyPurpose from "@/components/CompanyPurpose";
import Founder from "@/components/Founders";
import HiringSection from "@/components/HiringSection";
import InnovationSection from "@/components/InnovationSection";
import InvestorsSection from "@/components/InvestorsSection";
import TeamSection from "@/components/TeamSection";
import WhyNyquistAI from "@/components/WhyNyquistAI";

export default function AboutPage() {
  return (
    <main className="py-10">
      <Founder />
      <CompanyPurpose/>
      <InvestorsSection />
      <WhyNyquistAI/>
      <TeamSection />
      <HiringSection />
      <AiDrivenDecisions/>
      <InnovationSection />
    </main>
  )
}


