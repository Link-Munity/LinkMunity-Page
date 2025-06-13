/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // ou 'media' se quiser ativar automaticamente
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}", // isso garante que Tailwind funcione nos seus arquivos
  ],
  theme: {
    extend: {
      colors: {
        violeta: '#6256e8',
        fundo: '#201e33',
        claro: '#dfd6d6',
        roxoClaro: '#6d66bd',
        cinzaRoxo: '#6b6894',
        cinzaEscuro: '#5c5b69',
        quasePreto: '#302f3d',
      },
    },
  },
  plugins: [],
}
