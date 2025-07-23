/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      colors: {
        background: "#010d23",
        backgroundLight: "#03223f",
        primary: "#038bbb",
        secondary: "#0374fc",
        gradient: "linear-gradient(225deg, #11172F 0%, #11172B 100%);",
        text: "#848DA0",
        textHighlight: "#444B5B",
        textLight: "#C4C4C4",
        border: "#11172B",
        inputBackground: "#e19f41",
        inputBackgroundLight: "#fccb6f",
        error: "#D45D5D",
        white: "#ffffff",
      },
    },
  },
  plugins: [],
};
