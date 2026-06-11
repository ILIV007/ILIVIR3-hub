/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'iliv-dark': '#0a0a0f',
        'iliv-purple': '#7c3aed',
        'iliv-cyan': '#06b6d4',
        'iliv-pink': '#ec4899',
      },
      fontFamily: {
        'persian': ['Vazirmatn', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
