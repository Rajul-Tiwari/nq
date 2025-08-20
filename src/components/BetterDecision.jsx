'use client'

import CardSection from './CardSection'
import { useState } from 'react'

const betterDecisionCards = [
  {
    title: "NyquistScholar",
    description: "NyquistScholar is built for knowledge workers engaged in SLRs seeking to streamline and accelerate research data processing.",
    price: 299,
    features: [
      "Comprehensive Data Access",
      "Efficient Paper Management",
      "AI-Powered Assistance",
      "Streamlined Screening Process",
      "Personalized Query Responses",
      "Predictive Screening AI",
      "Effortless Extraction & Reporting",
      "Personalized AI Models"
    ]
  },
  {
    title: "NyquistIQ",
    description: "NyquistIQ is ideal for companies seeking a hassle-free SaaS solution for accessing advanced data intelligence tools online.",
    price: 199,
    features: [
      "10x Faster Insights",
      "Advanced Analytics Tools",
      "Instant Query Results",
      "Clinical Trial Assistance",
      "Ideation Generation for Endpoints",
      "Real-time Trial Progress Monitoring",
      "Automated Regulatory Doc Creation",
      "Rapid Risk Assessment"
    ]
  }
]

export default function BetterDecision() {
  const [toggleState, setToggleState] = useState("individual")

  return (
    <CardSection
      title="Make better decisions with AI"
      showToggle={true}
      toggleOptions={["Individual", "Teams"]}
      toggleState={toggleState}
      onToggleChange={setToggleState}
      cards={betterDecisionCards}
      cardType="ai-pricing"
      gridCols="grid-cols-1 md:grid-cols-2"
      className="bg-gray-50"
    />
  )
}
