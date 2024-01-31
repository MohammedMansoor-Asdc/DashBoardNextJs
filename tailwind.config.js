/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors:{
        black:'#45464E',
        darkBlue:'#5570F1',
        lightOrange:'#FFCC91',
        darkBlack:'#1C1D22',
        lightBlack:'rgba(94, 99, 102, 0.10)',
        lightRed:'#CC5F5F',
        superBlack:'#53545C',
        lightPink:'#FEF5EA',
        lightGray:'#8B8D97',
        superGray:'#BEC0CA',
        darkGreen:'#519C66',
        superPink:'#FFF7ED',
        lightBlue:'rgb(112,135,243)',
        superBlue:'#F2F4FE',
        superWhite:'#F1F3F9',
        superLightGray:'#A6A8B1',
        superLightRed:'#FEF0EF',
        darkRed:'#CC5F5F',
        lightGreen:'#E6F2EE',
      },
    },
  },
  plugins: [],
};
