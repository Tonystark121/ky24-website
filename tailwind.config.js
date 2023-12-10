/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
      },
      screens:{
        'sm':'480px',
        'md':'764px',
        'lg':'1024px',
      }
    },
  },
  plugins: [],
}

