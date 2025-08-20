'use client'

import { useState } from 'react'
import CardSection from './CardSection'

const pricingData = {
  individual: {
    Pharma: { price: 299, period: "month" },
    MedTech: { price: 349, period: "month" },
    "All Access": { price: 599, period: "month" },
  },
  teams: {
    Pharma: { price: 599, period: "month" },
    MedTech: { price: 699, period: "month" },
    "All Access": { price: 1199, period: "month" },
  },
};

const plans = [
  {
    title: "Pharma",
    description:
      "Everything you need to innovate pharmaceuticals faster with our BioPharma data intelligence platform",
    dataSources: [
      "Pharma Data in the United States, Canada, EU, Switzerland, China, and Japan",
      "Clinical Trials in the United States, China, Australia, New Zealand, and Japan",
    ],
  },
  {
    title: "MedTech",
    description:
      "Everything you need to innovate medical devices faster with our MedTech data intelligence platform",
    dataSources: [
      "Medtech Data in the United States, Canada, EU, Australia, China, and Japan",
      "Clinical Trials in the United States, China, Australia, New Zealand, and Japan",
      "Adverse Events in the United States and Australia",
    ],
    popular: true,
  },
  {
    title: "All Access",
    description:
      "Get the best of NyquistAI with access to both of our data intelligence platforms, NyquistMed and NyquistPharma",
    dataSources: [
      "All Data Sources included in Pharma",
      "All Data Sources included in MedTech",
    ],
  },
];

export default function GlobalData() {
  const [planType, setPlanType] = useState("individual");

  // Add pricing data to plans
  const plansWithPricing = plans.map(plan => ({
    ...plan,
    price: pricingData[planType][plan.title]
  }));

  return (
    <CardSection
      title="Uncover Global Data Intelligence"
      showToggle={true}
      toggleOptions={["Individual", "Teams"]}
      toggleState={planType}
      onToggleChange={setPlanType}
      cards={plansWithPricing}
      cardType="pricing"
      gridCols="grid-cols-1 lg:grid-cols-3"
    />
  );
}
