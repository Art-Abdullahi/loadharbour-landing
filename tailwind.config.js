/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    
    extend: {
      colors: {
        brand: {
          navy: "#0A2540",
          blue: "#2F80ED",
          gray: "#7B8794",
          teal: "#00B8A9",
          white: "#F9FAFB",
          black: "#121417",
        },
      },
    }
  },
  plugins: [],
}

