/** @type {import('tailwindcss').Config} */
export default {
  content: [ "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors:{
        /*Primary*/

        "BrightBlue": "hsl(220, 98%, 61%)",
        "CheckBackground": "linear-gradient hsl(192, 100%, 67%) to hsl(280, 87%, 65%)",

        /*Light Theme*/

        "VeryLightGray": "hsl(0, 0%, 98%)",
        "VeryLightGrayishBlue": "hsl(236, 33%, 92%)",
        "LightGrayishBlue": "hsl(233, 11%, 84%)",
        "DarkGrayishBlue": "hsl(236, 9%, 61%)",
        "VeryDarkGrayishBlue": "hsl(235, 19%, 35%)",

        /*Dark Theme*/

        "VeryDarkBlue":" hsl(235, 21%, 11%)",
        "VeryDarkDesaturatedBlue": "hsl(235, 24%, 19%)",
        "LightGrayishBlue": "hsl(234, 39%, 85%)",
        "LightGrayishBlue(hover)": "hsl(236, 33%, 92%)",
        "DarkGrayishBlue": "hsl(234, 11%, 52%)",
        "VeryDarkGrayishBlue": "hsl(233, 14%, 35%)",
        "VeryDarkGrayishBlue": "hsl(237, 14%, 26%)"
      },

      backgroundImage:{
        "mobileDark" : "url('./public/bg-mobile-dark.jpg')",
        "mobileLight" : "url('./public/bg-mobile-light.jpg')",
        "desktopDark" : "url('./public/bg-desktop-dark.jpg')",
        "desktopLight" : "url('./public/bg-desktop-light.jpg')"
      }
    },
  },
  plugins: [],
}

