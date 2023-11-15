/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter'],
        'inter-medium': ['Inter-Medium'],
      },
      colors: {
        primary: {
          100: '#E7EDF5',
          200: '#DBE5F6',
          300: '#C0D6F6',
          400: '#A6C7F7',
          500: '#8CB9F8',
          600: '#63ABFF',
          700: '#3492FF',
          800: '#1983FF',
          900: '#0076FF',
          950: '#002D61',
        },
        danger: {
          50: '#fef3ee',
          100: '#fee3d6',
          200: '#fbc4ad',
          300: '#f89b79',
          400: '#f46843',
          500: '#f24d2c',
          600: '#e22814',
          700: '#bc1b12',
          800: '#951717',
          900: '#781716',
          950: '#41090b',
        },
        warning: {
          50: '#fdfbe9',
          100: '#fcf7c5',
          200: '#faed8e',
          300: '#f6db4e',
          400: '#f2ca2c',
          500: '#e1af11',
          600: '#c2870c',
          700: '#9b610d',
          800: '#804d13',
          900: '#6d3f16',
          950: '#402008',
        },
      },
    },
  },
  plugins: [],
};
