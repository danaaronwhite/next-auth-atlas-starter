/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    fontFamily: {
      sans: ['Inter', 'arial', 'sans-serif']
    },
    extend: {
      colors: {
        primary: "#343C45",
        secondary: "#368F8B",
        accent: "#37cdbe",
        neutral: "#3d4451",
      }
    }
  },
  daisyui: {
    themes: [
      {
        myTheme: {
          "primary": "#343C45",
          "secondary": "#368F8B",
          "accent": "#37cdbe",
          "neutral": "#3d4451"
        },
      }
    ],
  },
  plugins: [require("daisyui")],
}
