module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {

    // De esta manera agregamos una propiedad color y le agregamos unos colores 
    // sacados de la pagina https://colorhunt.co/
    colors: {
      azulFuerte: '#334257',
      azulMenosFuerte: '#476072',
      azulClaro: '#548CA8',
      claro: '#EEEEEE'
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
