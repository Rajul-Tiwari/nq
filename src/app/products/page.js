import BetterDecision from "@/components/BetterDecision";
import FAQSection from "@/components/FAQSection";
import FeaturesSection from "@/components/FeaturesSection";
import GlobalData from "@/components/GlobalData";
import Hero from "@/components/Hero";
import SolutionsSection from "@/components/SolutionsSection";

export default function ProductsPage() {
  return (
    <main className="">
     <Hero />
    <GlobalData />
    <FeaturesSection />
    <SolutionsSection/>
    <BetterDecision />
    <FAQSection />
    </main>
  )
}


