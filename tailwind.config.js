/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        paper: '#F5F1E8',
        card: '#FFFEF9',
        ink: '#2C2416',
        inkLight: '#6B5D4F',
        cinnabar: '#B94A48',
        gold: '#D4AF37',
        border: '#D4C4A8',
        yin: '#8B7355',
        yang: '#2C2416',
      },
      fontFamily: {
        serif: ['"Noto Serif SC"', '"Source Han Serif SC"', 'serif'],
        sans: ['"Noto Sans SC"', '"Source Han Sans SC"', 'sans-serif'],
        mono: ['"Courier New"', 'monospace'],
      },
      borderRadius: {
        'ancient': '4px',
      }
    },
  },
  plugins: [],
}
