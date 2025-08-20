import { Inter } from "next/font/google";
import "./globals.css";
import "/public/fonts/hk-grotesk/stylesheet.css";
import NavBar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Nyquist AI - Life Sciences Data Intelligence",
  description: "Connecting Data, Igniting Discovery. AI-driven tools for life sciences professionals.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Preload critical hero image */}
        <link
          rel="preload"
          href="/src/assets/Images/heroBg.png"
          as="image"
          type="image/png"
        />
        {/* Preload critical fonts */}
        <link
          rel="preload"
          href="/public/fonts/hk-grotesk/HKGrotesk-Regular.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
      </head>
      <body className={`${inter.className} min-h-screen flex flex-col`}>
        <NavBar />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
