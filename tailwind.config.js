const colors = require('tailwindcss/colors')
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins','sans-serif'],
      },
      colors:{
        background: "#082032",
        backgroundVer:"#2C394B",
        // primary: "#FF4C29",
        primary: "#42C2FF",

        dark: "#111827",
        white: "#fff",
        gray: "#334756",
        
      }
    },
  },
  plugins: [],
}
