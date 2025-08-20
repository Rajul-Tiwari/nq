/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  mode: "jit",
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        hanken: ["var(--font-hanken-grotesk)", "sans-serif"],
        'hk-grotesk': ['HK Grotesk', ],
        'hk-grotesk-legacy': ['HK Grotesk Legacy', ],
        'hk-grotesk-medium-legacy': ['HK Grotesk Medium Legacy', ],
        'hk-grotesk-semibold-legacy': ['HK Grotesk SemiBold Legacy', ],
        'hk-grotesk-light-legacy': ['HK Grotesk Light Legacy', ],
        'hk-grotesk-smbold-legacy': ['HK Grotesk SmBold Legacy', ],
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
      },
    },
  },
  variants: {
    extend: {
      display: ["group-hover", "group-focus", "hover", "focus", "responsive"],
    },
  },
  plugins: [],
});
