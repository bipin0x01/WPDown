module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
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
    },
  },
  plugins: [],
};
