module.exports = {
  plugins: [require("flowbite/plugin")],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      height: (theme) => ({
        halfscreen: "50vh",
        "screen/3": "calc(100vh / 3)",
        "screen/4": "calc(100vh / 4)",
        "screen/5": "calc(100vh / 5)",
      }),
      width: (theme) => ({
        halfscreen: "50vw",
        "screen/3": "calc(100vw / 3)",
        "screen/4": "calc(100vw / 4)",
        "screen/5": "calc(100vw / 5)",
        "screen-3/4": "calc(100vw * 3 / 4)",
      }),
      fontFamily: {
        "im-fell": ['"IM Fell DW Pica"', "serif"],
      },
      colors: {
        "smooth-blue": "#2C4F7A",
        custom: "#3282B8",
      },
    },
  },
  plugins: [],
};
