import Hero from '@/components/Hero'

import LifeSciencesSection from '@/components/LifeScience'
import ValuedClients from '@/components/ValuedClient'
import GlobalIntelligence from '@/components/GlobalIntelegence'
import WorldWideCoverage from '@/components/WorldWideCoverage'
import TrustedSection from '@/components/TrustedSection'
import AIDrivenSection from '@/components/AIDrivenSection'
import MeetOurTeam from '@/components/MeetOurTeam'
import InnovationSection from '@/components/InnovationSection'

export default function HomePage() {
  return (
    <>
      <Hero imageSrc="/products/e.jpg" />
      <LifeSciencesSection />
      <ValuedClients />
      <GlobalIntelligence/>
      <WorldWideCoverage />
      <TrustedSection />
      <AIDrivenSection />
      <MeetOurTeam />
      <InnovationSection />
   
    </>
  )
}
