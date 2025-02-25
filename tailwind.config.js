/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class", // Ensures Tailwind applies dark mode using "class"
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        ubuntu: ["Ubuntu", "sans-serif"], // Adding Ubuntu font
      },
    },
  },
  plugins: [],
};
