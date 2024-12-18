/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'text-outfit':'"Outfit", "sans-serif"'
      },
      backgroundImage:{
        'header-bg':'url("./src/assets/frontend_assets/header_img.png")'
      },
      boxShadow:{
          'box-shadow':'0px 0px 10px #00000015'
      },
      animation:{
        'fadeIn':'fadeIn 3s'
      }
    },
  },
  plugins: [],
}