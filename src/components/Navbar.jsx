 'use client'

import { Logo } from '@/assets/Images'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { CgPlayButtonO } from "react-icons/cg"
import { FaArrowRightLong } from "react-icons/fa6";
import { MdOutlineArrowRight } from 'react-icons/md'

const navLinks = [
  { label: 'Products', href: '/products', hasDropdown: true },
  { label: 'Pricing', href: '/pricing' },
  { label: 'About Us', href: '/about' },
  { label: 'ROI', href: '/roi' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact Us', href: '/contact' },
]

const productCards = [
  {
    title: "NYQUIST PHARMA",
    href: "/products/nyquist-pharma",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    links: ["Learn more"]
  },
  {
    title: "NYQUIST MED",
    href: "/products/nyquist-med",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    links: ["Learn more"]
  },
  {
    title: "NYQUIST IQ",
    href: "/products/nyquist-iq",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    links: ["Learn more", "Demo video"]
  },
  {
    title: "NYQUIST SCHOLAR",
    href: "/products/nyquist-scholar",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    links: ["Learn more", "Demo video"]
  },
  {
    title: "CUSTOM SOLUTIONS",
    href: "/products/custom-solutions",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    links: ["Learn more", "Demo video"]
  },
  {
    title: "GUIDANCE IQ",
    href: "/products/guidance-iq",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    links: ["Trial login", "Demo video"]
  }
]

function NavBar() {
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isProductsHovered, setIsProductsHovered] = useState(false)

  const getLinkClasses = (href) => {
    const isActive = pathname === href
    return (
      'px-3 py-2 text-lg font-medium transition-colors ' +
      (isActive ? 'text-white' : 'text-gray-300 hover:text-white')
    )
  }

  return (
    <header className="sticky top-0 z-50 w-full bg-[#001224]">
      <nav className="flex justify-between items-center px-4 py-4 mx-auto w-[65%] sm:px-6 lg:px-8">
        <div className="flex gap-3 items-center w-[25%]">
          <Link href="/" className="flex gap-2 items-center">
            <Image src={Logo.src} alt="Logo" width={100} height={100} />
          </Link>
        </div>
        <div className="hidden gap-4 items-center text-lg justify-between w-[90%] md:flex font-normal">
          {navLinks.map((link) => (
            <div key={link.href} className="relative">
              <Link 
                href={link.href} 
                className={getLinkClasses(link.href)}
                onMouseEnter={() => link.hasDropdown && setIsProductsHovered(true)}
                onMouseLeave={() => link.hasDropdown && setIsProductsHovered(false)}
              >
                {link.label}
              </Link>
              
              {/* Products Dropdown */}
              {link.hasDropdown && isProductsHovered && (
                <div 
                  className="absolute top-full left-0 mt-7 w-[850px] bg-white  shadow-xl border border-gray-200 "
                  onMouseEnter={() => setIsProductsHovered(true)}
                  onMouseLeave={() => setIsProductsHovered(false)}
                >
                  {/* Product Cards Grid */}
                  <div className="grid grid-cols-3 gap-4 p-6 mb-6">
                    {productCards.map((card, index) => (
                      <div key={index} className="p-4  bg-[#f5f5f5] ">
                        <h3 className="mb-2 text-sm font-bold text-[#050505] uppercase font-hk-grotesk">
                          {card.title}
                        </h3>
                        <p className="mb-3 text-sm font-normal leading-relaxed text-gray-600 font-hk-grotesk">
                          {card.description}
                        </p>
                        <div className="flex justify-between items-center mt-4">
                          {card.links.map((linkText, linkIndex) => (
                            <div key={linkIndex} className="flex gap-2 items-center">
                              {linkText === "Demo video" && (
                                <CgPlayButtonO className="w-4 h-4 text-blue-600" />
                              )}
                              {linkText === "Learn more" ? (
                                <Link href={card.href} className="text-sm font-semibold text-[#1E4ED8] hover:text-blue-800">
                                  Learn more
                                </Link>
                              ) : (
                                <span className="text-sm font-semibold text-[#1E4ED8] cursor-pointer hover:text-blue-800">
                                  {linkText}
                                </span>
                              )}
                              {linkText !== "Demo video" && (
                                <MdOutlineArrowRight className='w-6 h-6 text-blue-600' />
                              )}
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  {/* Bottom CTA Bar */}
                  <div className="flex justify-between items-center py-4 bg-[#f0f5ff]">
                    <div className="w-1/3"></div>
                    <button className="flex gap-2 items-center font-medium text-[#1e4ed8] hover:text-blue-800">
                      <CgPlayButtonO className="p-1 w-7 h-7 text-xl font-semibold text-[#1e4ed8] rounded-full" />
                      Watch Demo Videos
                    </button>
                    <div className="flex justify-end mr-4 w-1/3">
                      <FaArrowRightLong className='text-blue-500' />
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
          <Link
            href="/schedule-a-demo"
            className="px-4 py-2 text-lg font-medium text-gray-900 bg-white rounded-full border border-white/20 hover:bg-white/90"
          >
            SCHEDULE A DEMO
          </Link>
          <Link href="/login" className="px-3 py-2 text-lg font-medium text-gray-300 hover:text-white">
            Login
          </Link>
        </div>
        <button
          aria-label="Toggle menu"
          className="inline-flex items-center p-2 text-gray-200 rounded-md hover:bg-white/10 md:hidden"
          onClick={() => setIsMenuOpen((v) => !v)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </nav>

      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-4 pb-4 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={getLinkClasses(link.href) + ' block'}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="flex gap-3 items-center mt-2">
              <Link
                href="/schedule-a-demo"
                className="px-4 py-2 text-sm font-medium text-gray-900 bg-white rounded-full border border-white/20 hover:bg-white/90"
                onClick={() => setIsMenuOpen(false)}
              >
                SCHEDULE A DEMO
              </Link>
              <Link
                href="/login"
                className="px-3 py-2 text-sm font-medium text-gray-300 hover:text-white"
                onClick={() => setIsMenuOpen(false)}
              >
                Login
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

export default NavBar

