/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
    "./node_modules/preline/**/*.{js,ts}", // importante para o Preline funcionar
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
