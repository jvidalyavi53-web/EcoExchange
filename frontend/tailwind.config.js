/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        eco: {
          green: '#2E7D32',
          light: '#4CAF50',
          dark: '#1B5E20'
        },
        tech: {
          blue: '#1976D2',
          dark: '#0D47A1'
        }
      }
    },
  },
  plugins: [],
}