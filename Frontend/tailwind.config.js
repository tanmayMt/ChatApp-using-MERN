/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",                  // Correct path for the HTML file
    "./src/**/*.{js,ts,jsx,tsx}",     // Scan all files in the 'src' directory
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
