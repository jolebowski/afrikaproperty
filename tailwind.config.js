/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#C7A86A', // Or clair
          hover: '#B5965A',
        },
        secondary: '#1A1A1A', // Gris anthracite
        background: '#FFFFFF', // Blanc
        surface: '#F5F5F5', // Gris clair
        border: '#E2E2E2', // Gris bordure
        text: {
          primary: '#000000', // Noir
          secondary: '#1A1A1A', // Gris anthracite
          muted: '#6B7280',
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', '"Cormorant Garamond"', 'serif'],
        sans: ['Inter', 'Lato', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
