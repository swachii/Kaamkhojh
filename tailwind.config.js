/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors:{
        'blueColor':'#2a68ff',
        'greyIsh':'#f1f4f8',
        'cardShadow':'#252b36',
      }
    },
  },
  plugins: [],
}
