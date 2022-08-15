module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    container: {
      center: true,
      padding: '1rem',
    },
    extend: {
      fontFamily: {
        'poppins': ['Poppins','sans-serif'],
      },
      colors:{
        // Blue
        // background: "#082032",       
        // backgroundVer:"#2C394B",
        // primary: "#42C2FF",
        // primaryVer: "#68ceff",

        // Green
        background: "#080f0b",
        backgroundVer:"#101e17",
        primary: "#519872",
        primaryVer:"#74ad8e",
        primaryLight:"#cbe0d5",

        // Red
        // background: "#130202",
        // backgroundVer:"#260404",
        // primary: "#BD1616",
        // primaryVer:"#ca4545",

        // Text
        dark: "#111827",
        white: "#fff",
        light: "#d4d4d4",
        gray: "#334756",
        
      },
      backdropBlur: {
        customBlur: '15px',
      }
    },
  },
  plugins: [],
}
