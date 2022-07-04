/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        rede7: "#e71e27",
        redb3: "#b3171e",
        brown: "#99080e",
        grayf5: "#f5f5f5",
        graye9: "#e9e9e9",
        gray92: "#928a8a",
        black4a: "#4a4646",
        black31: "#312e2e",
      },
      backgroundImage: {
        linearRed: "linear-gradient(to right, #e71e27 ,#b3117e)",
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
