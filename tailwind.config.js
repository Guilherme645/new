/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "./node_modules/tw-elements/dist/js/**/*.js"
  ],
  theme: {
    screens: {
      'xs': '500px',

      'sm': '640px',

      'md': '768px',

      'lg': '1024px',

      'xl': '1280px',

      '2xl': '1536px',
    },
    extend: {
      // Adicionando a customização de espaçamento
      padding: {
        '0.25': '0.25rem !important', // Define um novo value de padding que pode ser utilizado como pt-0.25, pb-0.25, etc.
      }
    }
  },
  plugins: [
    require('@tailwindcss/forms'),
    [require('tw-elements/dist/plugin.cjs')]
  ],
  purge: ['./src/**/*.{html,ts}'],
}
