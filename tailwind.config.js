/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        rede7: "#e71e27",
      },
      backgroundImage: {
        linearRed: "linear-gradient(to right,#e71e27 ,#b3117e )",
        red: "#ff0000",
      },
    },
  },
  plugins: [],
};
