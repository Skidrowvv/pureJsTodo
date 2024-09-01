/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        customRed: "#EE3333",
        customGreen: "#34A853",
        customBlue: "#005bff",
        customGray: "#61686D",
        customDark: "#313237",
        customSilver: "#E8EAEE",
        customTodoBg: "#36373A",
      },
    },
    container: {
      padding: {
        DEFAULT: "15px",
      },
      center: true,
    },
    screens: {
      mobile: "768px",
      desktop: "1200px",
    },
  },
  plugins: [],
};
