import { Logo } from '@/assets/Images'
import Image from 'next/image'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-[#001224] text-white">
      {/* Main Footer Content */}
      <div className="px-4 py-16 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          
          {/* Left Column - Company Information */}
          <div className="space-y-4 font-hk-grotesk">
          <div className="flex gap-3 items-center">
           <Link href="/" className="flex gap-2 items-center">
           <Image src={Logo.src} alt="Logo" width={150} height={150} />

           </Link>
         </div>
            <p className="text-xs  text-[#f5f5f5]">
              855 El Camino Real Ste 13A - 286<br />
              Palo Alto, CA 94301
            </p>
            <p className="text-xs  text-[#f5f5f5]">
              info@nyquistai.com
            </p>
            <p className="text-xs  text-[#f5f5f5]">
              (833) 536 - 6888
            </p>
            <button className="px-6 py-3 mt-4 text-sm font-hk-grotesk font-semibold text-[#021112] bg-white rounded-full transition-colors hover:bg-gray-100">
              SCHEDULE A DEMO
            </button>
          </div>

          {/* Middle Column - Quick Links & Resources */}
          <div className="grid grid-cols-2 gap-8 font-hk-grotesk">
            <div className="space-y-6">
              <h3 className="text-lg font-semibold tracking-wide text-[#f5f5f5] uppercase font-hk-grotesk">Quick Links</h3>
              <ul className="space-y-3 font-hk-grotesk">
                <li>
                  <Link href="/nyquistmed" className="text-base text-[#f5f5f5] font-normal transition-colors hover:text-white">
                    NyquistMed
                  </Link>
                </li>
                <li>
                  <Link href="/nyquistpharma" className="text-base text-[#f5f5f5] font-normal transition-colors hover:text-white">
                    NyquistPharma
                  </Link>
                </li>
              </ul>
            </div>
            
            <div className="space-y-6 font-hk-grotesk">
              <h3 className="text-lg font-semibold tracking-wide text-[#f5f5f5] uppercase font-hk-grotesk">Resources</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="/blog" className="text-base font-normal text-[#f5f5f5] transition-colors hover:text-white">
                    Blog
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Column - Company */}
          <div className="space-y-6 font-hk-grotesk">
            <h3 className="text-lg font-semibold text-[#f5f5f5] tracking-wide uppercase font-hk-grotesk">Company</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/about" className="text-base font-normal text-[#f5f5f5] transition-colors font-hk-grotesk hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-base font-normal text-[#f5f5f5] transition-colors font-hk-grotesk hover:text-white">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Section - Copyright and Legal */}
             <div className='mx-auto max-w-7xl border border-gray-600'></div>
      <div className="">
        <div className="px-4 py-6 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="flex flex-col gap-4 justify-between items-center sm:flex-row">
            <div className="flex gap-4 items-center">
              <p className="text-sm text-[#f5f5f5] font-hk-grotesk">
                ©2023 Nyquist Data, Inc. All Rights Reserved.
              </p>
              <div className="flex gap-4 items-center font-hk-grotesk">
                <Link href="/privacy" className="text-sm text-[#f5f5f5] transition-colors hover:text-white">
                  Privacy Policy
                </Link>
                <Link href="/terms" className="text-sm text-[#f5f5f5] transition-colors hover:text-white">
                  Terms of Service
                </Link>
              </div>
            </div>
            
          </div>
            {/* LinkedIn Icon */}
            <div className="flex items-center py-6">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white transition-colors hover:text-[#f5f5f5]">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
        </div>
      </div>
    </footer>
  )
}


