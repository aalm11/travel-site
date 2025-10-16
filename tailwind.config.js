/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-blue": "#0EA5E9",
        "primary-blue-dark": "#0284C7",
        "primary-blue-light": "#7DD3FC",
        "primary-green": "#10B981",
        "primary-green-dark": "#059669",
        "primary-green-light": "#6EE7B7",
      },
    },
  },
  plugins: [],
};
