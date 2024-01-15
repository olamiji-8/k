module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        gray: { 50: "#fafafa", 100: "#f5f5f5", 300: "#e0e0e0", 400: "#b3b3b3" },
        blue_gray: {
          100: "#d9d9d9",
          400: "#8c8c8c",
          900: "#353535",
          "900_01": "#263238",
        },
        red: { 500: "#e8503a", "500_19": "#e8503a19", "500_cc": "#e8503acc" },
        green: { 600: "#259c5f" },
        yellow: { 800: "#f69225" },
        black: { 900: "#000000" },
        light_green: { 50: "#f6f7eb" },
        deep_orange: { 200: "#ffbe9d", 300: "#eb996e" },
        deep_purple: { A200: "#9747ff" },
        white: { A700: "#ffffff" },
      },
      fontFamily: {
        bimini: "Bimini",
        poppins: "Poppins",
        montserrat: "Montserrat",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
