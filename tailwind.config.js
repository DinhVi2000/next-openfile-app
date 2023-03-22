/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    extend: {},
  },
  plugins: [],
};
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        sm: "rgba(0, 0, 0, 0.08) 0px 5px 20px 0px;",
        dd: "rgba(0, 0, 0, 0.16) 0px 4px 16px;",
      },
      colors: {
        grey: "#707a83",
        dark: {
          800: "rgba(0, 0, 0, 0.8)",
        },
      },
    },
  },
  plugins: [],
};
