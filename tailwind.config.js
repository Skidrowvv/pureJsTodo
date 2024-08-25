/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        customRed: "#EE3333",
        customBlue: "#005bff",
        customGray: "#61686D",
        customDark:'#313237'
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
