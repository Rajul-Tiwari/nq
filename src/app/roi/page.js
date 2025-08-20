import BusinessTransformation from '@/components/BusinessTransformation'
import CallToAction from '@/components/CallToAction'
import EasyRoi from '@/components/EasyRoi'
import FAQSection from '@/components/FAQSection'
import RoiCalculator from '@/components/RoiCalculator'
import RoiHeroSection from '@/components/RoiHeroSection'
import ROITable from '@/components/ROITable'
import React from 'react'

const page = () => {
  return (
    <div>
      <RoiHeroSection />
      <EasyRoi />
      <RoiCalculator />
      <BusinessTransformation />
      <CallToAction/>
      <ROITable />
      <FAQSection />

    </div>
  )
}

export default page
