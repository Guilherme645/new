/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
    "./node_modules/preline/**/*.{js,ts}",
  ],
  theme: {
    extend: {},
  },
  plugins: [], // sem o require('preline/plugin')
};
