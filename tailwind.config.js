/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      height: {
        'custom': '360px',
      },
      backgroundColor: {
        'top': '#eb5850',
        'secondary': '#e7e9efe4',
        'tertiary': '#818FB4',
      },
      textColor: {
        'primary': '#eff0f6',
      },
      fontFamily: {
        'Begel': ['Begel'],
      }
    },
  },
  plugins: [],
}

