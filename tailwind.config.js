/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}"
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#0EA5E9',
        secondary: '#7C3AED',
        dark: {
          100: '#1E293B',
          200: '#0F172A',
          300: '#020617'
        }
      },
      animation: {
        'bounce-slow': 'bounce 3s linear infinite',
      }
    },
  },
  plugins: [],
}