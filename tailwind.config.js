/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "dark-purple": "#030712",
        "light-white": "#e2e8f0",
      },
    },
  },
  plugins: [],
};
