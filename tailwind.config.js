/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        pry: '#0D0D13',
        sec: '#5E1914',
        ter: '#0F0B2E'
      }
    },
  },
  plugins: [],
}