/** @type {import('tailwindcss').Config} */
export default {
  content: [ "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: 'class',
  theme: {
    extend: {
      colors:{
        /*Primary*/

        "BrightBlue": "hsl(220, 98%, 61%)",
        "CheckBackground": "linear-gradient(to right, hsl(192, 100%, 67%), hsl(280, 87%, 65%))",

        /*Light Theme*/

        "VeryLightGray": "hsl(0, 0%, 98%)",
        "VeryLightGrayishBlue": "hsl(236, 33%, 92%)",
        "LightGrayishBlue": "hsl(233, 11%, 84%)",

        /*Dark Theme*/

        "VeryDarkBlue":"hsl(235, 21%, 11%)",
        "VeryDarkDesaturatedBlue": "hsl(235, 24%, 19%)",
        "DarkGrayishBlue": "hsl(234, 11%, 52%)",
        "VeryDarkGrayishBlue": "hsl(233, 14%, 35%)",
      },

      fontFamily: {
        sans : "['Josefin Sans', sans-serif]"
      },
    },
  },
  plugins: [],
}

