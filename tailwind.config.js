import colors from 'tailwindcss/colors';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'app-blue': colors.blue[600],
        'app-purple': colors.indigo[500],
      },
    },
  },
  plugins: [],
};
