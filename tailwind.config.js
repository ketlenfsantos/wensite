/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.html", // Seus arquivos HTML dentro de 'src'
    "./public/**/*.js", // Seus arquivos JS dentro de 'public'
    "./input.css",      // <--- ADICIONE ESTA LINHA para incluir o seu CSS customizado
    // Ou "./src/input.css" se 'input.css' estiver dentro da pasta 'src'
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}