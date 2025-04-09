/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryColor: "#8873ef",
        darkPrimaryColor: "#7223cc",
        headingColor: "#081e21",
        smallTextColor: "#193256",
      },
    },
    darkMode: "class", // enables class-based dark mode
  },
  plugins: [],
};
