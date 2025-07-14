/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'hebrew': ['Heebo', 'system-ui', 'sans-serif'],
        'hebrew-light': ['Rubik', 'system-ui', 'sans-serif'],
        'elegant': ['Playfair Display', 'serif'],
        'classic': ['Cormorant Garamond', 'serif'],
        'script': ['Dancing Script', 'cursive'],
      },
      colors: {
        sage: {
          50: '#f6f7f6',
          100: '#e3e7e3',
          200: '#c7cfc7',
          300: '#a3b0a3',
          400: '#7d8f7d',
          500: '#627462',
          600: '#4d5c4d',
          700: '#404a40',
          800: '#353d35',
          900: '#2d332d',
        },
        warm: {
          50: '#fefcf9',
          100: '#fdf7f0',
          200: '#faeee0',
          300: '#f5dfc7',
          400: '#edc8a3',
          500: '#e3ad7d',
          600: '#d69555',
          700: '#c17d3a',
          800: '#9f6530',
          900: '#80532a',
        }
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      }
    },
  },
  plugins: [],
}