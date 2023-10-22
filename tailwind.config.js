/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        manrope: ["var(--font-manrope)"],
      },
      colors: {
        grayf4: "#f4f4f4",
        grayfc: "#fcfcfc",
        primary: "#11142D",
        secondary: "#808191",
        "bg-primary": "#475BE8",
        title: "#11142D",
      },
    },
  },
  plugins: [],
};
