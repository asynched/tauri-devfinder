module.exports = {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      sans: ['Poppins'],
    },
    extend: {
      colors: {
        theme: {
          900: '#141C2F',
          800: '#1F2A48',
        },
      },
    },
  },
  plugins: [],
}
