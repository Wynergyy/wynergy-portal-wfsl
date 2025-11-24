/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        wfsl: {
          primary: "#0053A6",
          secondary: "#1C1F26",
          accent: "#00AEEF",
          border: "#DCE4EC",
          background: "#F5F7FA"
        }
      }
    }
  },
  plugins: []
};
