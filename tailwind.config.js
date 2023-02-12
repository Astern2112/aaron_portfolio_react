/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    colors: {
      'torea-bay': {
        50: '#f2f7ff',
        100: '#e6eeff',
        200: '#d1dfff',
        300: '#acc3ff',
        400: '#7e9eff',
        500: '#496bff',
        600: '#2441ff',
        700: '#132dee',
        800: '#0f25c8',
        900: '#0f21a9',
      },
    },

    fontFamily: {
      sans: [
        '-apple-system',
        'system-ui',
        'Segoe UI',
        'Roboto',
        'Oxygen',
        'Ubuntu',
        'Cantarell',
        'Fira Sans',
        'Droid Sans',
        'Helvetica Neue',
        'sans-serif',
      ],
    },
    extend: {},
  },
  plugins: [],
};
