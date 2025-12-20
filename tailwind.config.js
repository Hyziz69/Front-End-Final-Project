/** @type {import('tailwindcss').Config} */
export default {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        body: ["Poppins", "sans-serif"],
        heading: ["Orbitron", "sans-serif"],
      },
      screens: {
        custom1350: "1350px",
        custom975: "975px",
      },
    },
  },
  plugins: [],
};
