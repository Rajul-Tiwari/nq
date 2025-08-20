'use client'

export default function CardSection({
  title = "Section Title",
  subtitle = "",
  showToggle = false,
  toggleOptions = ["Option 1", "Option 2"],
  toggleState = "option1",
  onToggleChange = () => {},
  cards = [],
  cardType = "default", // "pricing", "feature", "default"
  className = "",
  gridCols = "grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
}) {
  const renderCard = (card, index) => {
    switch (cardType) {
      case "pricing":
        return (
          <div
            key={index}
            className={`relative rounded-xl shadow-lg border ${
              card.popular
                ? ""
                : "border-gray-200 bg-white"
            }`}
          >
            <div className="">
              <div className="p-6 h-[120px]">
                <div className="flex justify-between items-center mb-3">
                  <h3 className="text-2xl font-bold font-hk-grotesk-legacy">
                    {card.title}
                  </h3>
                  {card.popular && (
                    <span className="px-3 py-1 text-xs font-medium text-white bg-gray-900 rounded-full">
                      MOST POPULAR
                    </span>
                  )}
                </div>
                <p className="mb-6 text-sm leading-relaxed text-[#27272A] font-hk-grotesk">
                  {card.description}
                </p>
              </div>
              <div className="p-6 mb-6">
                <div className="flex gap-2 item-center">
                  <div>
                    <span className="font-bold text-[#001224] text-[60px]">
                      ${card.price?.price || card.price}
                    </span>
                  </div>
                  <div className="flex flex-col justify-center text-[#27272A] text-sm font-bold font-hk-grotesk">
                    <span>per</span>
                    <span>month</span>
                  </div>
                </div>
              </div>

              <div className="py-2 mb-6 text-base text-center font-hk-grotesk font-bold text-[#ffffff] bg-[#001224]">
                Pay yearly and save 20%
              </div>

              <div className="p-6">
                <h4 className="mb-3 text-sm font-bold font-hk-grotesk">
                  Data Sources
                </h4>
                <ul className="mb-6 space-y-2 h-[150px]">
                  {card.dataSources?.map((source, idx) => (
                    <li key={idx} className="flex gap-2 items-start font-normal text-[#001224] font-hk-grotesk">
                      <svg
                        className="flex-shrink-0 mt-0.5 w-5 h-5 text-blue-600"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-sm font-normal">{source}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="text-center">
                <button className="px-4 py-3 mb-8 w-1/2 text-lg font-bold text-center text-white bg-[#1E4ED8] rounded-full transition-colors hover:bg-blue-700">
                  Purchase
                </button>
              </div>
            </div>
          </div>
        )

      case "ai-pricing":
        return (
          <div
            key={index}
            className="relative bg-white rounded-lg border border-gray-200 shadow-lg"
          >
            <div className="">
              <div className="p-6 h-[120px]">
                <div className="flex justify-between items-center mb-3">
                  <h3 className="text-2xl font-bold font-hk-grotesk">
                    {card.title}
                  </h3>
                </div>
                <p className="mb-6 text-sm leading-relaxed font-hk-grotesk text-[#27272A]">
                  {card.description}
                </p>
              </div>
              <div className="p-6 mb-6">
                <div className="flex gap-2 item-center">
                  <div>
                    <span className="font-bold text-[#001224] text-[60px]">
                      ${card.price}
                    </span>
                  </div>
                  <div className="flex flex-col justify-center text-[#27272A] text-sm font-bold font-hk-grotesk">
                    <span>per</span>
                    <span>month</span>
                  </div>
                </div>
              </div>

              <div className="py-2 mb-6 text-base text-center font-hk-grotesk font-bold text-[#f5f5f5] bg-[#001224]">
                Pay yearly and save 20%
              </div>

              <div className="p-6">
                <h4 className="mb-3 text-sm font-bold font-hk-grotesk">
                  Features Overview
                </h4>
                <div className="grid grid-cols-2 gap-x-4 gap-y-2 mb-6 h-[200px]">
                  {card.features?.map((feature, idx) => (
                    <div key={idx} className="flex gap-2 items-start">
                      <svg
                        className="flex-shrink-0 mt-0.5 w-5 h-5 text-blue-600"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-sm font-normal font-hk-grotesk">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="text-center">
                <button className="px-4 py-3 mb-8 w-1/2 text-lg font-bold text-center font-hk-grotesk text-white rounded-full transition-colors bg-[#1E4ED8] hover:bg-blue-700">
                  Purchase
                </button>
              </div>
            </div>
          </div>
        )

      case "feature":
        return (
          <div key={index} className="text-center">
            <div className="flex justify-center mb-4">
              {card.icon && (
                <div className="w-12 h-12">
                  {card.icon}
                </div>
              )}
            </div>
            <h3 className="mb-3 text-2xl font-bold text-black">
              {card.title}
            </h3>
            <p className="text-lg font-normal leading-relaxed text-black">
              {card.description}
            </p>
          </div>
        )

      case "service":
        return (
          <div key={index} className="p-6 bg-white rounded-lg border border-gray-200 shadow-sm transition-shadow hover:shadow-md">
            {card.icon && (
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 text-blue-600">
                  {card.icon}
                </div>
              </div>
            )}
            <h3 className="mb-3 text-xl font-bold text-center text-gray-900">
              {card.title}
            </h3>
            <p className="mb-6 leading-relaxed text-center text-gray-600">
              {card.description}
            </p>
            {card.button && (
              <div className="text-center">
                <button className="px-6 py-2 font-medium text-white bg-blue-600 rounded-full transition-colors hover:bg-blue-700">
                  {card.button}
                </button>
              </div>
            )}
          </div>
        )

      default:
        return (
          <div key={index} className="p-6 bg-white rounded-lg border border-gray-200 shadow-sm">
            <h3 className="mb-3 text-xl font-bold text-gray-900">
              {card.title}
            </h3>
            <p className="mb-4 text-gray-600">
              {card.description}
            </p>
            {card.button && (
              <button className="px-4 py-2 w-full font-medium text-white bg-blue-600 rounded-md transition-colors hover:bg-blue-700">
                {card.button}
              </button>
            )}
          </div>
        )
    }
  }

  return (
    <section className={`py-16 bg-white ${className}`}>
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="mb-8 text-5xl font-bold font-hk-grotesk-legacy">
            {title}
          </h1>
          {subtitle && (
            <p className="mb-8 text-xl text-gray-600">{subtitle}</p>
          )}
          
          {/* Toggle Switch */}
          {showToggle && (
            <div className="inline-flex gap-6 p-1 mb-12 bg-gray-100 rounded-full border-2 border-black">
              {toggleOptions.map((option, index) => (
                <button
                  key={index}
                  onClick={() => onToggleChange(option.toLowerCase().replace(' ', ''))}
                  className={`px-6 py-2 rounded-full text-sm font-hk-grotesk transition-colors ${
                    toggleState === option.toLowerCase().replace(' ', '')
                      ? "bg-orange-500 text-white shadow-sm"
                      : "text-gray-700 hover:text-gray-900"
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Cards Grid */}
        <div className={`grid gap-8 ${gridCols}`}>
          {cards.map((card, index) => renderCard(card, index))}
        </div>
      </div>
    </section>
  )
}
