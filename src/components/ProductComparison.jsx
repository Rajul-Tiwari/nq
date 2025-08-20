'use client'

import { useState } from 'react'

const defaultComparisonData = [
	{
		category: 'PRODUCTIVITY',
		items: [
			{ name: 'Feature', pharma: true, medtech: true, allAccess: true },
			{ name: 'Feature', pharma: true, medtech: true, allAccess: true },
			{ name: 'Feature', pharma: true, medtech: true, allAccess: true },
			{ name: 'Feature', pharma: true, medtech: true, allAccess: true },
			{ name: 'Feature', pharma: true, medtech: true, allAccess: true },
			{ name: 'Feature', pharma: true, medtech: true, allAccess: true },
			{ name: 'Nyquist Scholar', pharma: 'Add-on', medtech: 'Add-on', allAccess: 'Add-on' },
		],
	},
	{
		category: 'AUTOMATION TOOLS',
		items: [
			{ name: 'Adverse Event Alerts', pharma: true, medtech: true, allAccess: true },
			{ name: 'Postciate Alerts', pharma: true, medtech: true, allAccess: true },
			{ name: 'Feature', pharma: true, medtech: true, allAccess: true },
			{ name: 'Feature', pharma: true, medtech: true, allAccess: true },
		],
	},
	{
		category: 'CLINICAL TRIAL SOURCES',
		items: [
			{ name: 'Japan', pharma: true, medtech: true, allAccess: true },
			{ name: 'China', pharma: true, medtech: true, allAccess: true },
			{ name: 'United States of America (U.S.)', pharma: true, medtech: true, allAccess: true },
			{ name: 'European Union (EU)', pharma: false, medtech: false, allAccess: false },
			{ name: 'Canada', pharma: false, medtech: false, allAccess: false },
			{ name: 'Australia', pharma: true, medtech: true, allAccess: true },
			{ name: 'New Zealand', pharma: true, medtech: true, allAccess: true },
		],
	},
	{
		category: 'COLLABORATION',
		items: [
			{ name: 'Feature', pharma: true, medtech: true, allAccess: true },
			{ name: 'Feature', pharma: true, medtech: true, allAccess: true },
			{ name: 'Feature', pharma: false, medtech: false, allAccess: false },
			{ name: 'Feature', pharma: false, medtech: false, allAccess: false },
		],
	},
	{
		category: 'GLOBAL DATA SOURCES',
		items: [
			{ name: 'Japan', pharma: true, medtech: true, allAccess: true },
			{ name: 'China', pharma: true, medtech: true, allAccess: true },
			{ name: 'United States of America (U.S.)', pharma: true, medtech: true, allAccess: true },
			{ name: 'European Union (EU)', pharma: true, medtech: true, allAccess: true },
			{ name: 'Canada', pharma: true, medtech: true, allAccess: true },
			{ name: 'Australia', pharma: true, medtech: true, allAccess: true },
			{ name: 'Switzerland', pharma: true, medtech: true, allAccess: true },
		],
	},
    {
		category: 'AUTOMATION TOOLS',
		items: [
			{ name: 'Adverse Event Alerts', pharma: "", medtech: "", allAccess: "" },
			{ name: 'Postciate Alerts', pharma: true, medtech: true, allAccess: true },
			{ name: 'Feature', pharma: true, medtech: true, allAccess: true },
			{ name: 'Feature', pharma: "", medtech: "", allAccess: "" },
		],
	},
    {
		category: 'CLINICAL TRIAL SOURCES',
		items: [
			{ name: 'Japan', pharma: "", medtech: "", allAccess: "" },
			{ name: 'China', pharma: "", medtech: "", allAccess: "" },
			{ name: 'United States of America (U.S.)', pharma: "", medtech: "", allAccess: "" },
			{ name: 'European Union (EU)', pharma: false, medtech: false, allAccess: false },
			{ name: 'Canada', pharma: false, medtech: false, allAccess: false },
			{ name: 'Australia', pharma: "", medtech: "", allAccess: "" },
			{ name: 'New Zealand', pharma: "", medtech: "", allAccess: "" },
		],
	},
    {
		category: 'AUTOMATION TOOLS',
		items: [
			{ name: 'Adverse Event Alerts', pharma: "", medtech: "", allAccess: "" },
			{ name: 'Postciate Alerts', pharma: "", medtech: "", allAccess: "" },
			{ name: 'Feature', pharma: "", medtech: "", allAccess: "" },
			{ name: 'Feature', pharma: "", medtech: "", allAccess: "" },
		],
	},
]

function CheckIcon({ className = '' }) {
	return (
		<svg className={`w-4 h-4 ${className}`} viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
			<path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4A1 1 0 014.293 9.293L8 13l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
		</svg>
	)
}

function ValueCell({ value }) {
	if (value === true) return <CheckIcon className="mx-auto text-gray-900" />
	if (value === false) return <span className="text-gray-300">—</span>
	return <span className="text-sm font-normal font-hk-grotesk">{value}</span>
}

export default function ProductComparison({ data = defaultComparisonData }) {
	const [showAll, setShowAll] = useState(true)

	const plans = ['Pharma', 'MedTech', 'All Access']
	const visibleData = showAll ? data : data.slice(0, 1)

	return (
		<section className="py-16 bg-white">
			<div className="px-4 mx-auto max-w-6xl sm:px-6 lg:px-8">
				<div className="flex justify-center mb-16">
					<button
						onClick={() => setShowAll(!showAll)}
						className="px-5 py-3 text-lg font-bold rounded-full border-2 border-gray-700 hover:bg-gray-50 font-hk-grotesk"
					>
						- Close list of plan features
					</button>
				</div>

				<div className="overflow-hidden bg-white">
					{/* Header row */}
					<div className="grid grid-cols-4">
						<div className="bg-[#f5f5f5]  " />
						{plans.map((plan) => (
							<div key={plan} className="ml-4 bg-white">
								<div className="py-6 text-sm font-bold text-center   bg-[#f5f5f5] font-hk-grotesk">
									{plan}
								</div>
							</div>
						))}
					</div>

					{/* Body rows */}
					{visibleData.map((section, sectionIndex) => (
						<div key={`section-${sectionIndex}`}>
							{/* Category separator */}
							<div className="grid grid-cols-4">
								<div className="px-4 py-3 bg-[#f5f5f5] ">
									<div className="text-sm font-bold tracking-wider uppercase font-hk-grotesk">
										{section.category}
									</div>
								</div>
								<div  />
								<div  />
								<div  />
							</div>

							{section.items.map((item, idx) => (
								<div key={`row-${sectionIndex}-${idx}`} className="grid grid-cols-4">
									<div className="px-4 py-4 text-sm font-normal bg-[#f5f5f5]  font-hk-grotesk">
										{item.name}
									</div>
									<div className="px-4 py-4 text-center">
										<ValueCell value={item.pharma} />
									</div>
									<div className="px-4 py-4 text-center">
										<ValueCell value={item.medtech} />
									</div>
									<div className="px-4 py-4 text-center">
										<ValueCell value={item.allAccess} />
									</div>
								</div>
							))}
						</div>
					))}
				</div>
			</div>
		</section>
	)
}
