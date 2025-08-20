import FAQSection from "@/components/FAQSection";
import Fda from "@/components/Fda";
import FutureInnovation from "@/components/FutureInnovation";
import GlobalSection from "@/components/GlobalSection";
import InnovationSection from "@/components/InnovationSection";
import LifeChanging from "@/components/LifeChanging";
import MeetOurTeam from "@/components/MeetOurTeam";
import ParallelData from "@/components/ParalledData";
import ToolsSection from "@/components/ToolsSection";
import UniqueInsights from "@/components/UniqueInsights";

export default function NyquistPharmaPage() {
	return (
		<main className="bg-white">
			<LifeChanging />
			<ToolsSection />
			<ParallelData />
			<GlobalSection />
			<UniqueInsights />
			<FutureInnovation />
			<Fda />
			<FAQSection />
			<MeetOurTeam />
			<InnovationSection />
		</main>
	);
}


