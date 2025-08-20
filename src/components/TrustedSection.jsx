'use client'

import { useState } from 'react'

export default function TrustedSection() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  const testimonials = [
    {
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      author: "Sam Eakes",
      company: "Greenleaf Health"
    },
    {
      text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
      author: "John Smith",
      company: "PharmaCorp"
    },
    {
      text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis.",
      author: "Sarah Johnson",
      company: "MedTech Solutions"
    }
  ]

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="py-28 bg-[#1e4ed8]">
      <div className="px-4 mx-auto max-w-6xl">
        <div className="p-12 rounded-lg bg-[#f5f5f5]">
          <div className="grid grid-cols-1 gap-12 items-center lg:grid-cols-2">
            
            {/* Left Column - Heading and CTA */}
            <div>
              <h2 className="mb-8 text-4xl font-semibold leading-tight lg:text-5xl font-hk-grotesk">
                Trusted by Life<br />
                Sciences Leaders<br />
                Worldwide.
              </h2>
              
              <div className="flex gap-3 items-center cursor-pointer group">
                <span className="text-base font-medium tracking-wide text-black underline uppercase transition-colors font-hk-grotesk underline-offset-4 group-hover:text-blue-600">
                  Learn More
                </span>
                <div className="p-2 bg-gray-200 rounded-lg">
                  <div className="w-0 h-0 border-t-2 border-b-2 border-l-4 border-l-black border-t-transparent border-b-transparent"></div>
                </div>
              </div>
            </div>

            {/* Right Column - Testimonial */}
            <div className="relative">
              <div className="mb-6">
                <p className="mb-4 text-base leading-relaxed text-black">
                  {testimonials[currentTestimonial].text}
                </p>
                <div>
                  <p className="text-lg font-bold text-black">
                    {testimonials[currentTestimonial].author}
                  </p>
                  <p className="text-base text-black">
                    {testimonials[currentTestimonial].company}
                  </p>
                </div>
              </div>

              {/* Navigation Controls */}
              <div className="flex gap-3">
                <button
                  onClick={prevTestimonial}
                  className="p-2 bg-gray-200 rounded-lg transition-colors hover:bg-gray-300"
                  aria-label="Previous testimonial"
                >
                  <div className="w-0 h-0 border-t-2 border-r-4 border-b-2 border-r-black border-t-transparent border-b-transparent"></div>
                </button>
                
                <button
                  onClick={nextTestimonial}
                  className="p-2 bg-gray-200 rounded-lg transition-colors hover:bg-gray-300"
                  aria-label="Next testimonial"
                >
                  <div className="w-0 h-0 border-t-2 border-b-2 border-l-4 border-l-black border-t-transparent border-b-transparent"></div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
